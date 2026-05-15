"""
Enrichissement des prospects : vérification site web via DuckDuckGo (Scrapling).
Lit le JSON de la ville, vérifie les sites, recalcule les scores, sort un JSON enrichi.
Usage: python enrich.py Caen
"""
import sys
import json
import time
from urllib.parse import quote, unquote

sys.stdout.reconfigure(encoding='utf-8')

from scrapling.fetchers import StealthyFetcher

BLOCKED_DOMAINS = {
    'pagesjaunes', 'pages-jaunes', 'google', 'bing', 'yahoo',
    'facebook', 'instagram', 'twitter', 'linkedin', 'youtube',
    'wikipedia', 'societe.com', 'verif.com', 'infogreffe',
    'pappers', 'manageo', 'duckduckgo', 'annuaire',
    'tripadvisor', 'restaurantguru', 'mymenuweb', 'thefork',
    'lafourchette', 'yelp', 'zomato', 'groupon', 'viamichelin',
    'leboncoin', 'justacoiffeur', 'treatwell', 'booksy',
    'pagesblances', '118000', 'kompass', 'europages',
}

NAF_HIGH_VALUE = {'56', '47', '96', '93', '86'}

def check_website(name: str, city: str) -> tuple[bool, str | None]:
    query = f"{name} {city} site officiel"
    url = f"https://html.duckduckgo.com/html/?q={quote(query)}"
    try:
        page = StealthyFetcher.fetch(url, headless=True, timeout=12000, wait=1500)
        links = page.css('a.result__url')
        for link in links[:5]:
            raw_href = link.attrib.get('href', '')
            # Decode DuckDuckGo redirect URL
            if 'uddg=' in raw_href:
                href = unquote(raw_href.split('uddg=')[1].split('&')[0])
            else:
                href = raw_href
            if href and not any(d in href for d in BLOCKED_DOMAINS):
                return True, href
        return False, None
    except Exception:
        return False, None


def calculate_score(has_website: bool, has_phone: bool, employees_code: str, naf: str) -> int:
    score = 0
    if not has_website:
        score += 30
    if has_phone:
        score += 20
    employee_scores = {
        '00': 5, '01': 10, '02': 15, '03': 20,
        '11': 25, '12': 25, '21': 20, '22': 15, '31': 10,
    }
    score += employee_scores.get(employees_code or '00', 5)
    if naf and naf[:2] in NAF_HIGH_VALUE:
        score += 10
    return min(100, max(10, score))


def run_enrichment(city: str):
    fname = f"{city.lower()}_results_utf8.json"
    try:
        with open(fname, encoding='utf-8') as f:
            prospects = json.load(f)
    except FileNotFoundError:
        # Try without _utf8 suffix
        with open(f"{city.lower()}_results.json", encoding='utf-8') as f:
            prospects = json.load(f)

    print(f"[enrich] {len(prospects)} prospects à enrichir pour {city}", file=sys.stderr)

    enriched = []
    for i, p in enumerate(prospects):
        name = p['name']
        city_name = p.get('city', city)
        if city_name and str(city_name).isdigit():
            city_name = city

        print(f"[enrich] [{i+1}/{len(prospects)}] {name[:50]}...", file=sys.stderr)

        has_website, website_url = check_website(name, city_name)
        has_phone = bool(p.get('phone'))

        # On n'a pas le code effectif ni NAF dans le JSON enrichi — on réutilise le score existant
        # mais on met à jour la partie site web
        old_score = p.get('score', 50)

        # Recalcule uniquement la partie site web (+/- 30 pts)
        if has_website and not p.get('hasWebsite'):
            new_score = max(10, old_score - 30)
        elif not has_website and p.get('hasWebsite'):
            new_score = min(100, old_score + 30)
        else:
            new_score = old_score

        p['hasWebsite'] = has_website
        p['hasActiveWebsite'] = has_website
        p['website'] = website_url
        p['score'] = new_score
        p['webVisibilityScore'] = new_score
        enriched.append(p)

        status = f"{'✓ SITE' if has_website else '✗ pas de site'} → {new_score}/100"
        print(f"[enrich]   {status}", file=sys.stderr)

        time.sleep(1.0)  # respecter DuckDuckGo

    out_file = f"{city.lower()}_enriched.json"
    with open(out_file, 'w', encoding='utf-8') as f:
        json.dump(enriched, f, ensure_ascii=False, indent=2)

    with_site = sum(1 for p in enriched if p['hasWebsite'])
    print(f"\n[enrich] === Résumé {city} ===", file=sys.stderr)
    print(f"[enrich] Avec site web: {with_site}/{len(enriched)}", file=sys.stderr)
    print(f"[enrich] Sans site web (leads!): {len(enriched) - with_site}/{len(enriched)}", file=sys.stderr)
    print(f"[enrich] Fichier: {out_file}", file=sys.stderr)

    print(json.dumps(enriched, ensure_ascii=False))


if __name__ == '__main__':
    city = sys.argv[1] if len(sys.argv) > 1 else 'Caen'
    run_enrichment(city)
