"""
Scraper de prospects pour Bonnassieux Agency CRM.
Source : API SIRENE officielle (recherche-entreprises.api.gouv.fr) — gratuite, sans clé.
Enrichissement : StealthyFetcher (Scrapling) pour vérifier la présence web.
Output : JSON array sur stdout, logs sur stderr.
"""
import sys
import json
import time
from urllib.parse import quote, urlencode

from scrapling.fetchers import Fetcher, StealthyFetcher

# ── Zones géographiques (code département) ──────────────────────────────────
SEARCH_AREAS = [
    {'name': 'Caen',   'dept': '14', 'lat': 49.1833, 'lng': -0.3667},
    {'name': 'Rennes', 'dept': '35', 'lat': 48.1111, 'lng': -1.6800},
    {'name': 'Nantes', 'dept': '44', 'lat': 47.2184, 'lng': -1.5536},
    {'name': 'Paris',  'dept': '75', 'lat': 48.8566, 'lng':  2.3522},
]

# ── Types de recherche ───────────────────────────────────────────────────────
SEARCH_TYPES = [
    {'q': 'restaurant',          'sector': 'restaurants'},
    {'q': 'boulangerie',         'sector': 'restaurants'},
    {'q': 'artisan',             'sector': 'artisans'},
    {'q': 'coiffeur',            'sector': 'artisans'},
    {'q': 'plombier',            'sector': 'BTP'},
    {'q': 'electricien',         'sector': 'BTP'},
    {'q': 'construction',        'sector': 'BTP'},
    {'q': 'salle de sport',      'sector': 'sport/bien-être'},
    {'q': 'bien être massage',   'sector': 'sport/bien-être'},
]

# ── Mapping codes NAF → secteur ──────────────────────────────────────────────
NAF_TO_SECTOR = {
    '56': 'restaurants', '47': 'restaurants',
    '96': 'artisans', '43': 'BTP', '41': 'BTP', '42': 'BTP',
    '93': 'sport/bien-être', '86': 'sport/bien-être',
}

def naf_to_sector(naf: str) -> str:
    if not naf:
        return 'autre'
    prefix = naf[:2]
    return NAF_TO_SECTOR.get(prefix, 'artisans')


def calculate_score(has_website: bool, has_phone: bool, employees_code: str, naf: str) -> int:
    """
    Score pour agence web/digitale.
    Meilleur lead = entreprise active sans site web.

    Pas de site web    → +30 pts  (besoin explicite)
    Téléphone dispo    → +20 pts  (contactable)
    Taille entreprise  → 0-25 pts (peut payer les services)
    Secteur cible      → +10 pts  (secteurs à fort potentiel web)
    """
    score = 0

    if not has_website:
        score += 30

    if has_phone:
        score += 20

    # Tranche d'effectifs SIRENE (code INSEE)
    employee_scores = {
        '00': 5,  # 0 salarié (micro)
        '01': 10, # 1-2
        '02': 15, # 3-5
        '03': 20, # 6-9
        '11': 25, # 10-19
        '12': 25, # 20-49
        '21': 20, # 50-99
        '22': 15, # 100-199
        '31': 10, # 200-249
    }
    score += employee_scores.get(employees_code or '00', 5)

    # Secteurs à fort potentiel pour agence web
    high_value_nafs = ['56', '47', '96', '93', '86']
    if naf and naf[:2] in high_value_nafs:
        score += 10

    return min(100, max(10, score))


def check_website_with_scrapling(company_name: str, city: str) -> tuple[bool, str | None]:
    """
    Recherche DuckDuckGo pour trouver le site web d'une entreprise.
    Retourne (has_website, url_or_None).
    """
    query = f"{company_name} {city} site officiel"
    url = f"https://html.duckduckgo.com/html/?q={quote(query)}"
    try:
        page = StealthyFetcher.fetch(url, headless=True, timeout=10000, wait=1500)
        links = page.css('a.result__url')
        blocked_domains = {'pagesjaunes', 'pages-jaunes', 'google', 'bing', 'yahoo',
                           'facebook', 'instagram', 'twitter', 'linkedin', 'youtube',
                           'wikipedia', 'societe.com', 'verif.com', 'infogreffe',
                           'pappers', 'manageo', 'duckduckgo'}
        for link in links[:5]:
            href = link.attrib.get('href', '')
            if href and not any(d in href for d in blocked_domains):
                return True, href
        return False, None
    except Exception:
        return False, None


def fetch_businesses(q: str, dept: str, per_page: int = 20) -> list:
    """Appelle l'API SIRENE officielle via Scrapling Fetcher."""
    params = urlencode({'q': q, 'departement': dept, 'page': 1, 'per_page': per_page,
                        'etat_administratif': 'A'})  # A = actif uniquement
    url = f"https://recherche-entreprises.api.gouv.fr/search?{params}"
    try:
        page = Fetcher.get(url, timeout=10)
        data = json.loads(page.body.decode('utf-8'))
        return data.get('results', [])
    except Exception as e:
        print(f"[scraper] Erreur API: {e}", file=sys.stderr)
        return []


def run_scraping(target_city: str | None = None, check_web: bool = False) -> list:
    all_results = []
    seen = set()
    areas = [a for a in SEARCH_AREAS if not target_city or a['name'] == target_city]

    for area in areas:
        print(f"\n[scraper] Zone: {area['name']} (dept {area['dept']})", file=sys.stderr)

        for search in SEARCH_TYPES:
            print(f"[scraper]   → {search['q']}...", file=sys.stderr)
            businesses = fetch_businesses(search['q'], area['dept'])
            print(f"[scraper]   ✓ {len(businesses)} entreprises trouvées", file=sys.stderr)

            for biz in businesses:
                siege = biz.get('siege', {})
                name = biz.get('nom_complet') or biz.get('nom_raison_sociale', '')
                if not name:
                    continue

                address = siege.get('adresse', '')
                city_name = siege.get('commune', area['name'])
                key = f"{name}-{address}"
                if key in seen:
                    continue
                seen.add(key)

                phone = siege.get('numero_telephone')
                lat = siege.get('latitude') or area['lat']
                lng = siege.get('longitude') or area['lng']
                naf = siege.get('activite_principale', '')
                employees = siege.get('tranche_effectif_salarie', '00')
                sector = naf_to_sector(naf) if naf else search['sector']

                # Vérification site web via Scrapling (optionnel, plus lent)
                has_website = False
                website_url = None
                if check_web:
                    has_website, website_url = check_website_with_scrapling(name, city_name)
                    time.sleep(0.5)

                score = calculate_score(has_website, bool(phone), employees, naf)

                print(f"[scraper]   • {name} — effectif: {employees}, tel: {'oui' if phone else 'non'}, site: {'oui' if has_website else 'non'} → {score}/100", file=sys.stderr)

                all_results.append({
                    'name': name,
                    'sector': sector,
                    'address': address,
                    'city': city_name,
                    'phone': phone,
                    'email': None,
                    'website': website_url,
                    'latitude': (lambda v, d: d if not v else (d if str(v).startswith('[') else float(v)))(lat, area['lat']),
                    'longitude': (lambda v, d: d if not v else (d if str(v).startswith('[') else float(v)))(lng, area['lng']),
                    'hasWebsite': has_website,
                    'hasActiveWebsite': has_website,
                    'hasSocialMedia': False,
                    'score': score,
                    'webVisibilityScore': score,
                    'status': 'nouveau',
                })

            time.sleep(0.8)

        time.sleep(1.5)

    all_results.sort(key=lambda x: x['score'], reverse=True)

    hot   = sum(1 for p in all_results if p['score'] >= 70)
    warm  = sum(1 for p in all_results if 40 <= p['score'] < 70)
    cold  = sum(1 for p in all_results if p['score'] < 40)

    print(f"\n[scraper] === Résumé ===", file=sys.stderr)
    print(f"[scraper] Total: {len(all_results)} prospects", file=sys.stderr)
    print(f"[scraper] 🔥 Chauds (≥70): {hot}", file=sys.stderr)
    print(f"[scraper] ⚡ Tièdes (40-69): {warm}", file=sys.stderr)
    print(f"[scraper] ❄️  Froids (<40): {cold}", file=sys.stderr)

    return all_results


if __name__ == '__main__':
    city   = sys.argv[1] if len(sys.argv) > 1 else None
    check_web = '--check-web' in sys.argv
    results = run_scraping(target_city=city, check_web=check_web)
    print(json.dumps(results, ensure_ascii=False))
