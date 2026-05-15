import json, re, sys

sys.stdout.reconfigure(encoding="utf-8")

records = []
for path in [
    r"C:\Users\Utilisateur\Downloads\bonnassieux_saas-supabase\server\caen_gmaps.json",
    r"C:\Users\Utilisateur\Downloads\bonnassieux_saas-supabase\server\caen_gmaps_part2.json",
]:
    with open(path, encoding="utf-8") as f:
        records.extend(json.load(f))

print(f"Total records: {len(records)}")

updates = []
for r in records:
    name = r.get("name", "")
    rating = r.get("rating")
    if rating is None:
        continue
    name_escaped = name.replace("'", "''")
    updates.append(f"UPDATE \"prospectsPotentiels\" SET rating = {rating} WHERE name = '{name_escaped}';")

out = r"C:\Users\Utilisateur\Downloads\bonnassieux_saas-supabase\server\backfill_rating.sql"
with open(out, "w", encoding="utf-8") as f:
    f.write("\n".join(updates))

print(f"Written {len(updates)} rating UPDATE statements")
