import urllib.request
import urllib.parse
import json
import time
import re

API_KEY = "AIzaSyCBd-QfnSW9Kfr6Bc7Fmyczpj0iW4O6XG8"
DB_URL = "postgresql://postgres:Ebg6QGo7XRlxmbe4@db.ttwpvcvlnzqkpootcttt.supabase.co:5432/postgres"

prospects = [
{"id":1061,"address":"20 Rue Bailey, 14000 Caen"},{"id":828,"address":"13 Bd Richemond, 14000 Caen"},{"id":829,"address":"65 Rue Saint-Pierre, 14000 Caen"},{"id":832,"address":"75 Av. Charlemagne, 14000 Caen"},{"id":859,"address":"15 Rue Montoir Poissonnerie, 14000 Caen"},{"id":863,"address":"71 Rue Saint-Jean, 14000 Caen"},{"id":870,"address":"168 Rue Saint-Jean, 14000 Caen"},{"id":877,"address":"41 Rue Froide, 14000 Caen"},{"id":883,"address":"32 Rue de Falaise, 14000 Caen"},{"id":887,"address":"12 Rue de la Folie, 14000 Caen"},{"id":929,"address":"10 Av. du Fresne, 14760 Bretteville-sur-Odon"},{"id":918,"address":"ZA Croix Boucher, 3 bis Rue des Blés d'Or, 14210 Évrecy"},{"id":963,"address":"52 Bd Raymond Poincaré, 14000 Caen"},{"id":966,"address":"4 Av. de Cambridge, 14200 Hérouville-Saint-Clair"},{"id":988,"address":"17 Av. du Six Juin, 14000 Caen"},{"id":990,"address":"81-83 Bd Georges Pompidou, 14000 Caen"},{"id":998,"address":"10 Rue Michel Tournier, 14120 Mondeville"},{"id":1015,"address":"77 Rue du Vaugueux, 14000 Caen"},{"id":819,"address":"20 Rue Froide, 14000 Caen"},{"id":820,"address":"11 Av. de la Côte de Nacre, 14000 Caen"},{"id":821,"address":"7 Av. de Rouen, 14000 Caen"},{"id":1040,"address":"82 Bd Dunois, 14000 Caen"},{"id":946,"address":"22 Rue de la Pigacière, 14210 Noyers"},{"id":825,"address":"11 Rue Auguste Lechesne, 14000 Caen"},{"id":826,"address":"52 Rue du Vaugueux, 14000 Caen"},{"id":849,"address":"110 Rue Saint-Pierre, 14000 Caen"},{"id":1112,"address":"17 Rue des Frères Lumière, 14120 Mondeville"},{"id":842,"address":"56 Av. Capitaine Georges Guynemer, 14000 Caen"},{"id":843,"address":"48 Bd Leroy, 14000 Caen"},{"id":845,"address":"37 Av. de l'Hippodrome, 14000 Caen"},{"id":846,"address":"77 Bd Yves Guillou, 14000 Caen"},{"id":1109,"address":"13 Rue des Rosiers, 14000 Caen"},{"id":852,"address":"44 Rue Guillaume le Conquérant, 14000 Caen"},{"id":952,"address":"Bd de la Paix, 14200 Hérouville-Saint-Clair"},{"id":905,"address":"8 Bis Rue de Touraine, 14000 Caen"},{"id":824,"address":"25 Rue Neuve Saint-Jean, 14000 Caen"},{"id":1180,"address":"12 Rue Auguste Collet, 14280 Saint-Contest"},{"id":1011,"address":"135 Rue de Bayeux, 14000 Caen"},{"id":830,"address":"200 Rue de Bayeux, 14000 Caen"},{"id":837,"address":"52 Rue Saint-Jean, 14000 Caen"},{"id":1177,"address":"3 Rue des 4 Vents, 14790 Verson"},{"id":919,"address":"141 Rue de Bayeux, 14000 Caen"},{"id":891,"address":"4 Rue d'Aubusson, 14000 Caen"},{"id":1009,"address":"188 Rue Basse, 14000 Caen"},{"id":911,"address":"8 Espa. Jean Mantelet, 14123 Cormelles-le-Royal"},{"id":1186,"address":"Av. Père Charles de Foucauld, 14000 Caen"},{"id":926,"address":"16 All. de la Verte Vallée, 14000 Caen"},{"id":935,"address":"53 Rue du Moulin À Voide, 14320 Feuguerolles-Bully"},{"id":969,"address":"4 Rue du Calvaire, 14123 Cormelles-le-Royal"},{"id":1036,"address":"8 Rue Gaston Lavalley, 14000 Caen"},{"id":1057,"address":"6 Av. Père Charles de Foucauld, 14000 Caen"},{"id":1082,"address":"65 Rue des Rosiers, 14000 Caen"},{"id":1051,"address":"33 Bd Bertrand, 14000 Caen"},{"id":1056,"address":"Av. Henry Chéron, 14000 Caen"},{"id":1067,"address":"131 Bd Raymond Poincaré, 14000 Caen"},{"id":1076,"address":"5 Rue de l'Arquette, 14000 Caen"},{"id":1079,"address":"1 bis Av. de la Voie au Coq, 14760 Bretteville-sur-Odon"},{"id":1089,"address":"82D Av. de Thiès, 14000 Caen"},{"id":1092,"address":"12 Rue de l'Avenir, 14760 Bretteville-sur-Odon"},{"id":1096,"address":"10 Rue Jane Addams, 14280 Caen"},{"id":1118,"address":"29 Bd André Detolle, 14000 Caen"},{"id":1120,"address":"41 Rue Pasteur, 14120 Mondeville"},{"id":1127,"address":"21 Av. de la Grande Plaine, 14760 Bretteville-sur-Odon"},{"id":1131,"address":"2 Rue de la Miséricorde, 14000 Caen"},{"id":1134,"address":"64 Bd de Rethel, 14000 Caen"},{"id":1139,"address":"71 Bd Général Vanier, 14000 Caen"},{"id":1141,"address":"13 Delle du Poirier, 14320 Saint-André-sur-Orne"},{"id":1144,"address":"4 bis Rue de la Masse, 14000 Caen"},{"id":1157,"address":"02 Le Château, 14260 Les Monts d'Aunay"},{"id":1158,"address":"Rue de la Mer, 14550 Blainville-sur-Orne"},{"id":1163,"address":"4 Rue Louis Borderieux, 14000 Caen"},{"id":1166,"address":"913 Bd du Bois, 14200 Hérouville-Saint-Clair"},{"id":1174,"address":"28 Rue de Bayeux, 14740 Thue et Mue"},{"id":841,"address":"110 Rue de Falaise, 14000 Caen"},{"id":864,"address":"3 Rue Saint-Michel, 14000 Caen"},{"id":865,"address":"210 Rue Caponière, 14000 Caen"},{"id":866,"address":"18 Rue du Havre, 14000 Caen"},{"id":867,"address":"46 Rue Écuyère, 14000 Caen"},{"id":879,"address":"17 Av. de l'Hippodrome, 14000 Caen"},{"id":882,"address":"1 Bd des Alliés, 14000 Caen"},{"id":884,"address":"82 Rue d'Auge, 14000 Caen"},{"id":885,"address":"60 Av. de la Libération, 14000 Caen"},{"id":886,"address":"13 Rue Paul Doumer, 14000 Caen"},{"id":838,"address":"29 Rue Claude Chappe, 14000 Caen"},{"id":822,"address":"49 Rue du Général Moulin, 14000 Caen"},{"id":823,"address":"6 Bd André Detolle, 14000 Caen"},{"id":827,"address":"28 Rue Caponière, 14000 Caen"},{"id":833,"address":"12 Rue Caponière, 14000 Caen"},{"id":834,"address":"104 Rue Saint-Pierre, 14000 Caen"},{"id":848,"address":"49 Rue de la Délivrande, 14000 Caen"},{"id":850,"address":"18 Rue Savorgnan de Brazza, 14000 Caen"},{"id":851,"address":"21 Rue Armand Marie, 14000 Caen"},{"id":854,"address":"42 Rue Saint-Jean, 14000 Caen"},{"id":857,"address":"20 Rue du 11 Novembre, 14000 Caen"},{"id":858,"address":"74 Rue du Vaugueux, 14000 Caen"},{"id":890,"address":"6 Rue Louis Robillard, 14000 Caen"},{"id":896,"address":"2 All. des Clématites, 14120 Mondeville"},{"id":906,"address":"6 Rue des Cinquante Acres, 14760 Bretteville-sur-Odon"},{"id":937,"address":"18 Rue des Acadiens, 14280 Authie"},{"id":941,"address":"18 Rue Varignon, 14000 Caen"},{"id":942,"address":"22 Pl. Pierre Bouchard, 14000 Caen"},{"id":945,"address":"3 Bis Rue Hanon, 14420 Potigny"},{"id":950,"address":"41 Bis Rue Pasteur, 14120 Mondeville"},{"id":953,"address":"28 Rue Eugène Varlin, 14120 Mondeville"},{"id":956,"address":"1371 Rte de Dozulé, 14370 Argences"},{"id":999,"address":"36 Rue Saint-Michel, 14000 Caen"},{"id":1002,"address":"Rue du Désert, 14000 Caen"},{"id":1003,"address":"44 Le Clos du Poteau Rouge, 14000 Caen"},{"id":1012,"address":"41 Av. du Six Juin, 14000 Caen"},{"id":1018,"address":"12 Rue des Jacobins, 14000 Caen"},{"id":1025,"address":"31 Rue Saint-Ouen, 14000 Caen"},{"id":1027,"address":"12 Rue Vauquelin, 14000 Caen"},{"id":1028,"address":"23 Rue du Clos Beaumois, 14000 Caen"},{"id":1038,"address":"11 Rue de la Pigacière, 14000 Caen"},{"id":1041,"address":"9 Pl. du 36ème Régiment d'Infanterie, 14000 Caen"},{"id":1042,"address":"36 Av. du Six Juin, 14000 Caen"},{"id":1043,"address":"71 Av. Charlemagne, 14000 Caen"},{"id":1046,"address":"33 Bd Bertrand, 14000 Caen"},{"id":1048,"address":"301 Bd de la Haute Folie, 14200 Hérouville-Saint-Clair"},{"id":1049,"address":"152 Bd Leroy, 14000 Caen"},{"id":977,"address":"31 Rue de Champ de la Pierre, 14123 Fleury-sur-Orne"},{"id":1128,"address":"Rue du Parc, 14930 Éterville"},{"id":804,"address":"30 Rue Arcisse de Caumont, 14000 Caen"},{"id":808,"address":"20 Av. de la Libération, 14000 Caen"},{"id":796,"address":"3 Rue de Vaucelles, 14000 Caen"},{"id":793,"address":"11 Pl. Saint-Sauveur, 14000 Caen"},{"id":789,"address":"3 Pl. Jean Letellier, 14000 Caen"},{"id":801,"address":"35 Bd Maréchal Leclerc, 14000 Caen"},{"id":803,"address":"24 Rue de la Fontaine, 14000 Caen"},{"id":792,"address":"128 Rue Saint-Pierre, 14000 Caen"},{"id":813,"address":"80 Rue de la Délivrande, 14000 Caen"},{"id":810,"address":"21 Rue Prte au Berger, 14000 Caen"},{"id":814,"address":"9 Rue de Geôle, 14000 Caen"},{"id":1106,"address":"35 Rue du Devon, 14000 Caen"},{"id":976,"address":"121 Bd Leroy, 14000 Caen"},{"id":1146,"address":"25 Rue de la Seulles, 14000 Caen"},{"id":1104,"address":"6 Rue des Mouettes, 14000 Caen"},{"id":1068,"address":"3 Rue des Gens d'Armes, 14000 Caen"},{"id":1047,"address":"19 Rue du 11 Novembre, 14000 Caen"},{"id":1044,"address":"24 Rue Saint-Martin, 14000 Caen"},
]

def geocode(address):
    url = "https://maps.googleapis.com/maps/api/geocode/json?" + urllib.parse.urlencode({
        "address": address + ", France",
        "key": API_KEY,
        "language": "fr",
        "region": "fr"
    })
    with urllib.request.urlopen(url, timeout=10) as r:
        data = json.loads(r.read())
    if data["status"] == "OK":
        loc = data["results"][0]["geometry"]["location"]
        return loc["lat"], loc["lng"]
    return None, None

def escape(s):
    return s.replace("'", "''")

updates = []
ok = 0
fail = 0

for i, p in enumerate(prospects):
    pid = p["id"]
    addr = p["address"]
    try:
        lat, lng = geocode(addr)
        if lat is not None:
            updates.append(f"UPDATE \"prospectsPotentiels\" SET latitude = {lat}, longitude = {lng} WHERE id = {pid};")
            ok += 1
            print(f"[{i+1}/{len(prospects)}] OK #{pid} {addr[:40]}")
        else:
            fail += 1
            print(f"[{i+1}/{len(prospects)}] SKIP #{pid} pas de resultat")
    except Exception as e:
        fail += 1
        print(f"[{i+1}/{len(prospects)}] ERR #{pid} erreur: {e}")
    time.sleep(0.05)  # 20 req/s max

sql_path = "server/geocode_updates.sql"
with open(sql_path, "w", encoding="utf-8") as f:
    f.write("\n".join(updates))

print(f"\nDONE: {ok} geocodes, {fail} echecs -> {sql_path}")
