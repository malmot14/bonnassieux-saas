import json
import os

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
    for p in data:
        site = p.get('website') or ''
        if site and any(d in site for d in BLOCKED_DOMAINS):
            p['hasWebsite'] = False
            p['hasActiveWebsite'] = False
            p['website'] = None
            p['score'] = min(100, p.get('score', 50) + 30)
            p['webVisibilityScore'] = p['score']
    return data

def row_sql(p, city_label):
    name_esc = p['name'].replace("'", "''")
    has_web = 'true' if p.get('hasWebsite') else 'false'
    has_active = 'true' if p.get('hasActiveWebsite') else 'false'
    site = p.get('website')
    if site:
        site_esc = site.replace("'", "''")
        web_val = f"'{site_esc}'"
    else:
        web_val = 'NULL'
    score = p['score']
    wscore = p.get('webVisibilityScore', score)
    city_esc = city_label.replace("'", "''")
    return (
        f'UPDATE "prospectsPotentiels" SET '
        f'"hasWebsite"={has_web}, "hasActiveWebsite"={has_active}, '
        f'website={web_val}, score={score}, "webVisibilityScore"={wscore} '
        f"WHERE name='{name_esc}' AND city='{city_esc}';"
    )

BATCH_SIZE = 40

for city_key, city_label in [('rennes', 'Rennes'), ('nantes', 'Nantes'), ('paris', 'Paris')]:
    with open(f'{city_key}_enriched.json', encoding='utf-8') as f:
        data = json.load(f)
    data = clean(data)

    batches = [data[i:i+BATCH_SIZE] for i in range(0, len(data), BATCH_SIZE)]
    for idx, batch in enumerate(batches):
        sql = '\n'.join(row_sql(p, city_label) for p in batch)
        fname = f'{city_key}_batch_{idx+1}.sql'
        with open(fname, 'w', encoding='utf-8') as f:
            f.write(sql)

    with_site = sum(1 for p in data if p.get('hasWebsite'))
    print(f'{city_label}: {len(data)} rows, {len(batches)} batches, {with_site} avec site, {len(data)-with_site} LEADS')
