import json

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
    'companieshouse', 'corporationwiki', 'opencorporates', 'bizbuysell',
    'foursquare', 'cylex', 'hotfrog', 'yell.com', 'thomasnet',
    'chambre-metiers', 'chambre-commerce', 'lecoindesentrepreneurs',
    'lefigaro.fr', 'leparisien', 'ouest-france', 'letelegramme',
    'planity', 'doctolib', 'creads', 'woosmap',
    'boulangerie.org', 'artisan.fr', 'federation', 'confederation',
    'pages24', 'local.fr', 'qwant', 'startupranking',
    'waze', 'apple.com', 'avis-verifies', 'trustpilot',
    'entreprises.lefigaro', 'societe-info', 'firmenwissen',
    'legalstart', 'bodacc', 'journal-officiel',
    'coiffure-organisme', 'ffcoiffure', 'ffb', 'capeb',
    'maaf', 'ameli', 'urssaf', 'impots.gouv',
    'lacartedesmetiers', 'artisanat.fr',
    'koifaire.com', 'eatbu.com', 'maville.com', 'uneboulangerie.fr',
    'restopolitan', 'opentable', 'zenchef',
    'petitsplats', 'babelio', 'allocine', 'notaires.fr',
    '118712', 'numberway', 'chambredesmetiers',
    'smartrezo', 'wixsite', 'jimdo', 'site123',
    'adresses.entreprises', 'annuaire.leboncoin',
    'linternaute', 'journal-du-net', 'chefdentreprise',
    'tourhebdo', 'actu.fr', 'nicematin', 'ledauphine',
    'streetadvisor', 'whereis', 'white-pages', 'yellowpages',
}

def clean(data):
    cleaned = []
    for p in data:
        site = p.get('website') or ''
        if site and any(d in site for d in BLOCKED_DOMAINS):
            p['hasWebsite'] = False
            p['hasActiveWebsite'] = False
            p['website'] = None
            p['score'] = min(100, p.get('score', 50) + 30)
            p['webVisibilityScore'] = p['score']
        cleaned.append(p)
    return cleaned

def generate_update_sql(city_label, data):
    lines = []
    lines.append(f'-- UPDATE enrichment for {city_label} ({len(data)} prospects)')
    lines.append('UPDATE "prospectsPotentiels" SET')

    def case_block(field, value_fn):
        block = [f'  "{field}" = CASE']
        for p in data:
            name_esc = p['name'].replace("'", "''")
            val = value_fn(p)
            block.append(f"    WHEN name = '{name_esc}' AND city = '{city_label}' THEN {val}")
        block.append(f'    ELSE "{field}"')
        block.append('  END')
        return '\n'.join(block)

    parts = []
    parts.append(case_block('hasWebsite', lambda p: 'true' if p.get('hasWebsite') else 'false'))
    parts.append(case_block('hasActiveWebsite', lambda p: 'true' if p.get('hasActiveWebsite') else 'false'))

    # website (not quoted field)
    block = ['  website = CASE']
    for p in data:
        name_esc = p['name'].replace("'", "''")
        site = p.get('website')
        if site:
            site_esc = site.replace("'", "''")
            val = f"'{site_esc}'"
        else:
            val = 'NULL'
        block.append(f"    WHEN name = '{name_esc}' AND city = '{city_label}' THEN {val}")
    block.append('    ELSE website')
    block.append('  END')
    parts.append('\n'.join(block))

    parts.append(case_block('score', lambda p: str(p['score'])))
    parts.append(case_block('webVisibilityScore', lambda p: str(p.get('webVisibilityScore', p['score']))))

    lines.append(',\n'.join(parts))
    lines.append(f"WHERE city = '{city_label}';")
    return '\n'.join(lines)


for city_key, city_label in [('rennes', 'Rennes'), ('nantes', 'Nantes'), ('paris', 'Paris')]:
    with open(f'{city_key}_enriched.json', encoding='utf-8') as f:
        data = json.load(f)
    data = clean(data)
    with_site = sum(1 for p in data if p.get('hasWebsite'))
    print(f'{city_label}: {len(data)} total, {with_site} avec site, {len(data)-with_site} LEADS')

    sql = generate_update_sql(city_label, data)
    fname = f'{city_key}_update.sql'
    with open(fname, 'w', encoding='utf-8') as f:
        f.write(sql)
    print(f'  -> {fname}')
