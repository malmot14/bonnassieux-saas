"""
Part 2: scrape remaining Caen categories (all except restaurants).
Merges with caen_gmaps.json from part 1, outputs new SQL batches.
"""

import sys, re, time, json, csv
from dataclasses import dataclass, asdict
from playwright.sync_api import sync_playwright, Page

sys.stdout.reconfigure(encoding="utf-8")

CITY = "Caen"

SEARCHES = [
    ("boulangerie Caen",        "artisans"),
    ("coiffeur Caen",           "artisans"),
    ("plombier Caen",           "artisans"),
    ("electricien Caen",        "artisans"),
    ("artisan renovation Caen", "artisans"),
    ("salle de sport Caen",     "sport/bien-être"),
    ("massage bien etre Caen",  "sport/bien-être"),
    ("coach sportif Caen",      "sport/bien-être"),
    ("yoga pilates Caen",       "sport/bien-être"),
    ("construction BTP Caen",   "BTP"),
    ("menuisier charpentier Caen", "BTP"),
    ("carreleur peintre Caen",  "BTP"),
]

RESULTS_PER_SEARCH = 40

BLOCKED_DOMAINS = {
    'pagesjaunes','pages-jaunes','google','bing','yahoo','facebook','instagram',
    'twitter','linkedin','youtube','wikipedia','societe.com','verif.com','infogreffe',
    'pappers','manageo','duckduckgo','annuaire','tripadvisor','restaurantguru',
    'mymenuweb','thefork','lafourchette','yelp','zomato','groupon','viamichelin',
    'leboncoin','justacoiffeur','treatwell','booksy','pagesblances','118000',
    'kompass','europages','wanderlog','mappy','cataloxy','infonet.fr','societeinfo',
    'foursquare','cylex','hotfrog','yell.com','chambre-metiers','chambre-commerce',
    'lecoindesentrepreneurs','lefigaro.fr','leparisien','ouest-france','letelegramme',
    'planity','doctolib','creads','woosmap','boulangerie.org','artisan.fr',
    'federation','confederation','pages24','local.fr','qwant','startupranking',
    'waze','apple.com','avis-verifies','trustpilot','koifaire.com','eatbu.com',
    'maville.com','uneboulangerie.fr','restopolitan','opentable','zenchef',
    'petitsplats','allocine','notaires.fr','118712','numberway','chambredesmetiers',
    'wixsite','jimdo','site123','adresses.entreprises','annuaire.leboncoin',
    'linternaute','journal-du-net','chefdentreprise','actu.fr','nicematin',
    'ledauphine','streetadvisor','white-pages','yellowpages','lagazettefrance.fr',
    'salons10.com','findglocal.com','dnb.com','allbiz.fr','e-pro.fr',
    'agroalimentaire','monartisan.info',
}

def is_blocked(url):
    return bool(url) and any(d in url.lower() for d in BLOCKED_DOMAINS)

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

def compute_score(p):
    base = 65 if not p.has_website else 20
    if p.review_count == 0:   base += 15
    elif p.review_count < 10: base += 10
    elif p.review_count < 50: base += 5
    if 0 < p.rating < 3.5:    base += 5
    return min(100, base)

def scroll_results(page, max_results):
    try:
        page.wait_for_selector('div[role="feed"]', timeout=10000)
    except Exception:
        return
    prev = 0
    for _ in range(max_results // 10 + 3):
        items = page.query_selector_all('div[role="feed"] > div > div[jsaction]')
        if len(items) >= max_results or len(items) == prev:
            break
        prev = len(items)
        page.evaluate('document.querySelector(\'div[role="feed"]\').scrollBy(0, 2000)')
        time.sleep(1.5)

def safe_text(el):
    try:
        return el.inner_text().strip() if el else ""
    except Exception:
        return ""

def extract_listing(page, el):
    try:
        el.click(); time.sleep(2)
    except Exception:
        return None
    try:
        page.wait_for_selector('h1.DUwDvf', timeout=5000)
    except Exception:
        return None
    name = safe_text(page.query_selector('h1.DUwDvf'))
    if not name:
        return None
    address = safe_text(page.query_selector('button[data-item-id="address"]'))
    phone_el = page.query_selector('button[data-item-id^="phone"]')
    phone = safe_text(phone_el)
    website_el = page.query_selector('a[data-item-id="authority"]')
    website = (website_el.get_attribute("href") or "") if website_el else ""
    rating = 0.0
    rating_el = page.query_selector('div.F7nice span[aria-hidden="true"]')
    if rating_el:
        try: rating = float(safe_text(rating_el).replace(",", "."))
        except: pass
    review_count = 0
    review_el = page.query_selector('div.F7nice span[aria-label]')
    if review_el:
        nums = re.findall(r'\d+', (review_el.get_attribute("aria-label") or "").replace('\xa0',''))
        if nums:
            try: review_count = int(nums[0])
            except: pass
    return {"name": name, "address": address, "phone": phone,
            "website": website, "rating": rating, "review_count": review_count}

def scrape_query(page, query, sector, max_results):
    print(f"  -> Searching: {query}")
    page.goto(
        f"https://www.google.com/maps/search/{query.replace(' ', '+')}",
        wait_until="domcontentloaded", timeout=60000
    )
    time.sleep(4)
    try:
        consent = page.query_selector('button[aria-label*="Tout accepter"], button[aria-label*="Accept all"]')
        if consent:
            consent.click(); time.sleep(1)
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
        clean_web = data["website"]
        has_web = bool(clean_web) and not is_blocked(clean_web)
        if is_blocked(clean_web):
            clean_web = ""
        p = Prospect(name=data["name"], sector=sector, address=data["address"],
                     phone=data["phone"], website=clean_web, rating=data["rating"],
                     review_count=data["review_count"], has_website=has_web,
                     has_active_website=has_web)
        p.score = compute_score(p)
        p.web_visibility_score = p.score
        prospects.append(p)
    print(f"     Collected {len(prospects)} prospects")
    return prospects

def dedup(prospects, existing_names):
    seen = set(existing_names)
    result = []
    for p in prospects:
        key = p.name.lower().strip()
        if key not in seen:
            seen.add(key)
            result.append(p)
    return result

def esc(s): return s.replace("'", "''")

def to_sql(p):
    web = f"'{esc(p.website)}'" if p.website else "NULL"
    phone = f"'{esc(p.phone)}'" if p.phone else "NULL"
    addr = f"'{esc(p.address)}'" if p.address else "NULL"
    return (
        f'INSERT INTO "prospectsPotentiels" '
        f'(name, sector, address, city, phone, website, score, "webVisibilityScore", '
        f'"hasWebsite", "hasActiveWebsite", "hasSocialMedia", status, "createdAt", "updatedAt") VALUES\n'
        f"('{esc(p.name)}', '{p.sector}', {addr}, '{CITY}', "
        f"{phone}, {web}, {p.score}, {p.web_visibility_score}, "
        f"{'true' if p.has_website else 'false'}, {'true' if p.has_active_website else 'false'}, "
        f"false, 'nouveau', NOW(), NOW());"
    )

def main():
    # Load part 1 names for dedup
    existing_names = set()
    try:
        with open("caen_gmaps.json", encoding="utf-8") as f:
            part1 = json.load(f)
            existing_names = {p["name"].lower().strip() for p in part1}
        print(f"Loaded {len(existing_names)} existing names from part 1")
    except FileNotFoundError:
        print("No part 1 JSON found, starting fresh")

    all_new = []
    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=False)
        page = browser.new_page()
        for query, sector in SEARCHES:
            try:
                results = scrape_query(page, query, sector, RESULTS_PER_SEARCH)
                all_new.extend(results)
                time.sleep(5)
            except Exception as e:
                print(f"     ERROR on '{query}': {e}")
                continue
        browser.close()

    unique_new = dedup(all_new, existing_names)
    print(f"\nNew prospects: {len(all_new)} scraped -> {len(unique_new)} after dedup")
    with_site = sum(1 for p in unique_new if p.has_website)
    print(f"Avec site: {with_site} | Sans site (hot leads): {len(unique_new) - with_site}")

    # Save JSON
    with open("caen_gmaps_part2.json", "w", encoding="utf-8") as f:
        json.dump([asdict(p) for p in unique_new], f, ensure_ascii=False, indent=2)

    # Save CSV
    if unique_new:
        with open("caen_gmaps_part2.csv", "w", encoding="utf-8-sig", newline="") as f:
            writer = csv.DictWriter(f, fieldnames=asdict(unique_new[0]).keys())
            writer.writeheader()
            writer.writerows(asdict(p) for p in unique_new)

    # Write SQL batches (offset batch numbering after part 1)
    batch_size = 40
    batches = [unique_new[i:i+batch_size] for i in range(0, len(unique_new), batch_size)]
    for idx, batch in enumerate(batches):
        fname = f"caen_gmaps_batch_{idx+2}.sql"  # starts at batch_2
        with open(fname, "w", encoding="utf-8") as f:
            f.write("\n".join(to_sql(p) for p in batch))
        print(f"Written {fname} ({len(batch)} rows)")

    print("\nDone.")

if __name__ == "__main__":
    main()
