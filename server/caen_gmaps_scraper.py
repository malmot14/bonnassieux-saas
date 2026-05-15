"""
Google Maps scraper for Caen prospects.
Outputs INSERT SQL compatible with the prospectsPotentiels table.

Usage:
    pip install playwright pandas
    playwright install chromium
    python caen_gmaps_scraper.py

Output: caen_gmaps_insert.sql
"""

import sys
import re
import time
import json
import csv
from dataclasses import dataclass, field, asdict
from playwright.sync_api import sync_playwright, Page

sys.stdout.reconfigure(encoding="utf-8")

# ---------------------------------------------------------------------------
# Config
# ---------------------------------------------------------------------------

CITY = "Caen"

# Search queries → sector mapping
SEARCHES = [
    ("restaurant Caen",          "restaurants"),
    ("boulangerie Caen",         "artisans"),
    ("coiffeur Caen",            "artisans"),
    ("plombier Caen",            "artisans"),
    ("électricien Caen",         "artisans"),
    ("artisan Caen",             "artisans"),
    ("salle de sport Caen",      "sport/bien-être"),
    ("massage bien-être Caen",   "sport/bien-être"),
    ("coach sportif Caen",       "sport/bien-être"),
    ("BTP construction Caen",    "BTP"),
    ("maçon Caen",               "BTP"),
    ("menuisier Caen",           "BTP"),
]

RESULTS_PER_SEARCH = 40   # Google Maps shows ~20 per scroll, 40 = 2 scrolls

# ---------------------------------------------------------------------------
# Blocked domains — same list as gen_batch_sql.py
# ---------------------------------------------------------------------------

BLOCKED_DOMAINS = {
    'pagesjaunes', 'pages-jaunes', 'google', 'bing', 'yahoo',
    'facebook', 'instagram', 'twitter', 'linkedin', 'youtube',
    'wikipedia', 'societe.com', 'verif.com', 'infogreffe',
    'pappers', 'manageo', 'duckduckgo', 'annuaire',
    'tripadvisor', 'restaurantguru', 'mymenuweb', 'thefork',
    'lafourchette', 'yelp', 'zomato', 'groupon', 'viamichelin',
    'leboncoin', 'justacoiffeur', 'treatwell', 'booksy',
    'pagesblances', '118000', 'kompass', 'europages',
    'wanderlog', 'mappy', 'cataloxy', 'infonet.fr', 'societeinfo',
    'foursquare', 'cylex', 'hotfrog', 'yell.com',
    'chambre-metiers', 'chambre-commerce', 'lecoindesentrepreneurs',
    'lefigaro.fr', 'leparisien', 'ouest-france', 'letelegramme',
    'planity', 'doctolib', 'creads', 'woosmap',
    'boulangerie.org', 'artisan.fr', 'federation', 'confederation',
    'pages24', 'local.fr', 'qwant', 'startupranking',
    'waze', 'apple.com', 'avis-verifies', 'trustpilot',
    'koifaire.com', 'eatbu.com', 'maville.com', 'uneboulangerie.fr',
    'restopolitan', 'opentable', 'zenchef',
    'petitsplats', 'allocine', 'notaires.fr',
    '118712', 'numberway', 'chambredesmetiers',
    'wixsite', 'jimdo', 'site123',
    'adresses.entreprises', 'annuaire.leboncoin',
    'linternaute', 'journal-du-net', 'chefdentreprise',
    'actu.fr', 'nicematin', 'ledauphine',
    'streetadvisor', 'white-pages', 'yellowpages',
    'lagazettefrance.fr', 'salons10.com', 'findglocal.com',
    'dnb.com', 'allbiz.fr', 'e-pro.fr', 'agroalimentaire',
    'monartisan.info',
}


def is_blocked(url: str) -> bool:
    if not url:
        return False
    return any(d in url.lower() for d in BLOCKED_DOMAINS)


# ---------------------------------------------------------------------------
# Data model
# ---------------------------------------------------------------------------

@dataclass
class Prospect:
    name: str
    sector: str
    address: str = ""
    phone: str = ""
    website: str = ""
    rating: float = 0.0
    review_count: int = 0
    latitude: str = "NULL"
    longitude: str = "NULL"
    has_website: bool = False
    has_active_website: bool = False
    score: int = 50
    web_visibility_score: int = 50


# ---------------------------------------------------------------------------
# Scoring logic
# ---------------------------------------------------------------------------

def compute_score(prospect: Prospect) -> int:
    """
    Higher score = better prospect (= less web visibility = more need for CM).
    No website → base 50-65
    Has blocked/directory site → treat as no real site → 45-60
    Has real website → 10-30 (already has web presence, lower priority)
    Google rating boost: low reviews = more need for SM presence
    """
    base = 50

    if not prospect.has_website:
        base = 65
    else:
        base = 20

    # Bonus: very few reviews = not active online
    if prospect.review_count == 0:
        base += 15
    elif prospect.review_count < 10:
        base += 10
    elif prospect.review_count < 50:
        base += 5

    # Bonus: low rating = room for improvement
    if prospect.rating > 0 and prospect.rating < 3.5:
        base += 5

    return min(100, base)


# ---------------------------------------------------------------------------
# Playwright scraping
# ---------------------------------------------------------------------------

def scroll_results(page: Page, max_results: int):
    """Scroll the results panel until we have enough or hit the bottom."""
    panel_selector = 'div[role="feed"]'
    try:
        page.wait_for_selector(panel_selector, timeout=10000)
    except Exception:
        return

    previous_count = 0
    for _ in range(max_results // 10 + 3):
        items = page.query_selector_all('div[role="feed"] > div > div[jsaction]')
        count = len(items)
        if count >= max_results:
            break
        if count == previous_count:
            break
        previous_count = count
        page.evaluate(
            'document.querySelector(\'div[role="feed"]\').scrollBy(0, 2000)'
        )
        time.sleep(1.5)


def safe_text(el) -> str:
    try:
        return el.inner_text().strip() if el else ""
    except Exception:
        return ""


def extract_listing(page: Page, listing_element) -> dict | None:
    """Click a listing and extract details from the side panel."""
    try:
        listing_element.click()
        time.sleep(2)
    except Exception:
        return None

    try:
        page.wait_for_selector('h1.DUwDvf', timeout=5000)
    except Exception:
        return None

    name = safe_text(page.query_selector('h1.DUwDvf'))
    if not name:
        return None

    # Address
    address = ""
    addr_el = page.query_selector('button[data-item-id="address"]')
    if addr_el:
        address = safe_text(addr_el)

    # Phone
    phone = ""
    phone_el = page.query_selector('button[data-item-id^="phone"]')
    if phone_el:
        phone = safe_text(phone_el)

    # Website
    website = ""
    website_el = page.query_selector('a[data-item-id="authority"]')
    if website_el:
        website = website_el.get_attribute("href") or ""

    # Rating
    rating = 0.0
    rating_el = page.query_selector('div.F7nice span[aria-hidden="true"]')
    if rating_el:
        try:
            rating = float(safe_text(rating_el).replace(",", "."))
        except ValueError:
            pass

    # Review count
    review_count = 0
    review_el = page.query_selector('div.F7nice span[aria-label]')
    if review_el:
        label = review_el.get_attribute("aria-label") or ""
        nums = re.findall(r'\d+', label.replace('\xa0', ''))
        if nums:
            try:
                review_count = int(nums[0])
            except ValueError:
                pass

    return {
        "name": name,
        "address": address,
        "phone": phone,
        "website": website,
        "rating": rating,
        "review_count": review_count,
    }


def scrape_query(page: Page, query: str, sector: str, max_results: int) -> list[Prospect]:
    print(f"  → Searching: {query}")
    url = f"https://www.google.com/maps/search/{query.replace(' ', '+')}"
    page.goto(url, wait_until="domcontentloaded", timeout=60000)
    time.sleep(4)

    # Accept cookies if prompt appears
    try:
        consent = page.query_selector('button[aria-label*="Tout accepter"], button[aria-label*="Accept all"]')
        if consent:
            consent.click()
            time.sleep(1)
    except Exception:
        pass

    scroll_results(page, max_results)

    listings = page.query_selector_all('div[role="feed"] > div > div[jsaction]')
    print(f"     Found {len(listings)} listings")

    prospects = []
    for listing in listings[:max_results]:
        data = extract_listing(page, listing)
        if not data or not data["name"]:
            continue

        clean_website = data["website"]
        has_website = bool(clean_website) and not is_blocked(clean_website)
        if is_blocked(clean_website):
            clean_website = ""

        p = Prospect(
            name=data["name"],
            sector=sector,
            address=data["address"],
            phone=data["phone"],
            website=clean_website,
            rating=data["rating"],
            review_count=data["review_count"],
            has_website=has_website,
            has_active_website=has_website,
        )
        p.score = compute_score(p)
        p.web_visibility_score = p.score
        prospects.append(p)

    return prospects


# ---------------------------------------------------------------------------
# Deduplication
# ---------------------------------------------------------------------------

def dedup(prospects: list[Prospect]) -> list[Prospect]:
    seen = set()
    result = []
    for p in prospects:
        key = p.name.lower().strip()
        if key not in seen:
            seen.add(key)
            result.append(p)
    return result


# ---------------------------------------------------------------------------
# SQL generation
# ---------------------------------------------------------------------------

def esc(s: str) -> str:
    return s.replace("'", "''")


def to_sql_insert(p: Prospect) -> str:
    website_val = f"'{esc(p.website)}'" if p.website else "NULL"
    phone_val = f"'{esc(p.phone)}'" if p.phone else "NULL"
    address_val = f"'{esc(p.address)}'" if p.address else "NULL"
    has_web = "true" if p.has_website else "false"
    has_active = "true" if p.has_active_website else "false"

    return (
        f"INSERT INTO \"prospectsPotentiels\" "
        f"(name, sector, address, city, phone, website, score, \"webVisibilityScore\", "
        f"\"hasWebsite\", \"hasActiveWebsite\", \"hasSocialMedia\", status, \"createdAt\", \"updatedAt\") VALUES\n"
        f"('{esc(p.name)}', '{p.sector}', {address_val}, '{CITY}', "
        f"{phone_val}, {website_val}, {p.score}, {p.web_visibility_score}, "
        f"{has_web}, {has_active}, false, 'nouveau', NOW(), NOW());"
    )


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    all_prospects: list[Prospect] = []

    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=False)
        page = browser.new_page()

        for query, sector in SEARCHES:
            try:
                results = scrape_query(page, query, sector, RESULTS_PER_SEARCH)
                all_prospects.extend(results)
                print(f"     Collected {len(results)} prospects")
                time.sleep(5)  # polite delay between searches
            except Exception as e:
                print(f"     ERROR on '{query}': {e}")
                continue

        browser.close()

    # Deduplicate
    unique = dedup(all_prospects)
    print(f"\nTotal: {len(all_prospects)} scraped → {len(unique)} after dedup")

    # Segment
    with_site = [p for p in unique if p.has_website]
    without_site = [p for p in unique if not p.has_website]
    print(f"Avec site réel: {len(with_site)} | Sans site (hot leads): {len(without_site)}")

    # Save JSON for inspection
    with open("caen_gmaps.json", "w", encoding="utf-8") as f:
        json.dump([asdict(p) for p in unique], f, ensure_ascii=False, indent=2)

    # Save CSV for inspection
    if unique:
        with open("caen_gmaps.csv", "w", encoding="utf-8-sig", newline="") as f:
            writer = csv.DictWriter(f, fieldnames=asdict(unique[0]).keys())
            writer.writeheader()
            writer.writerows(asdict(p) for p in unique)

    # Generate INSERT SQL — split in batches of 40
    batch_size = 40
    batches = [unique[i:i+batch_size] for i in range(0, len(unique), batch_size)]
    for idx, batch in enumerate(batches):
        fname = f"caen_gmaps_batch_{idx+1}.sql"
        with open(fname, "w", encoding="utf-8") as f:
            f.write("\n".join(to_sql_insert(p) for p in batch))
        print(f"Written {fname} ({len(batch)} rows)")

    print("\nDone. Check caen_gmaps.csv to review before running SQL.")


if __name__ == "__main__":
    main()
