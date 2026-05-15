import json, re, sys

sys.stdout.reconfigure(encoding="utf-8")

with open(r"C:\Users\Utilisateur\Downloads\bonnassieux_saas-supabase\server\caen_gmaps_part2.json", encoding="utf-8") as f:
    data = json.load(f)

print(f"Total records: {len(data)}")

def clean(s):
    if not s:
        return None
    s = re.sub(r"[\n\r]", "", s).strip()
    return s if s else None

def escape(s):
    if s is None:
        return "NULL"
    return "'" + s.replace("'", "''") + "'"

BLOCKED = ["facebook.com","instagram.com","twitter.com","linkedin.com","youtube.com",
"pagesjaunes.fr","tripadvisor","google.com","maps.google","yelp.com","foursquare",
"pages24.fr","toutatis.fr","lafourchette","happycow","waze.com",
"apple.com","booking.com","airbnb","leboncoin","seloger",
"frmaps.xyz","ikosoft","over-blog","wordpress.com","blogger.com","wix.com","wixsite.com"]

def has_real_website(url):
    if not url:
        return False
    return not any(b in url.lower() for b in BLOCKED)

for batch_num in range(4, 12):
    start = (batch_num - 2) * 40
    end = min(start + 40, len(data))
    records = data[start:end]

    rows = []
    for r in records:
        name = escape(clean(r["name"]))
        addr = escape(clean(r.get("address", "")))
        phone_raw = r.get("phone", "") or ""
        phone_clean = clean(phone_raw)
        phone = escape(phone_clean)
        website_raw = r.get("website", "") or ""
        website_clean = clean(website_raw)
        has_web = has_real_website(website_raw)
        website_val = escape(website_clean) if has_web else "NULL"
        score = 30 if has_web else 75
        has_web_sql = "true" if has_web else "false"

        row = f"({name}, 'artisans', {addr}, 'Caen', {phone}, {website_val}, {score}, {score}, {has_web_sql}, {has_web_sql}, false, 'nouveau', NOW(), NOW())"
        rows.append(row)

    sql = 'INSERT INTO "prospectsPotentiels" (name, sector, address, city, phone, website, score, "webVisibilityScore", "hasWebsite", "hasActiveWebsite", "hasSocialMedia", status, "createdAt", "updatedAt") VALUES\n'
    sql += ",\n".join(rows) + ";"

    out = rf"C:\Users\Utilisateur\Downloads\bonnassieux_saas-supabase\server\caen_exec_batch_{batch_num}.sql"
    with open(out, "w", encoding="utf-8") as f:
        f.write(sql)
    print(f"Batch {batch_num}: {len(records)} records (idx {start}-{end-1})")
