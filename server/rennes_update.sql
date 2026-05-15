-- UPDATE enrichment for Rennes (143 prospects)
UPDATE "prospectsPotentiels" SET
  "hasWebsite" = CASE
    WHEN name = 'AVEC RESTAURANT' AND city = 'Rennes' THEN true
    WHEN name = 'RACINES RESTAURANT' AND city = 'Rennes' THEN true
    WHEN name = 'SB RESTAURANT (SB CONSULT RESTAURANT)' AND city = 'Rennes' THEN false
    WHEN name = 'RESTAURANT L''OUVREE' AND city = 'Rennes' THEN false
    WHEN name = 'RESTAURANT ZEST (RESTAURANT ZEST)' AND city = 'Rennes' THEN true
    WHEN name = 'BUAIS RESTAURANT' AND city = 'Rennes' THEN false
    WHEN name = 'RESTAURANT  LUCA' AND city = 'Rennes' THEN true
    WHEN name = 'TI''MI BOULANGERIE PATISSERIE' AND city = 'Rennes' THEN false
    WHEN name = 'LA BOULANGERIE D''ARMOR' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE GEFFRAY (BOULANGERIE GEFFRAY)' AND city = 'Rennes' THEN false
    WHEN name = 'SOC INTERP ARTISAN GARANTIE INVESTISSE (SIAGI)' AND city = 'Rennes' THEN true
    WHEN name = 'ARTISAN COIFFEUR' AND city = 'Rennes' THEN true
    WHEN name = 'KARMA COIFFEUR' AND city = 'Rennes' THEN true
    WHEN name = 'VALATELIER (L''ATELIER DES COIFFEURS)' AND city = 'Rennes' THEN true
    WHEN name = 'PLEDEX (COIFFEUR & COMPAGNIE)' AND city = 'Rennes' THEN true
    WHEN name = 'RAPHATELIER (ATELIER DES COIFFEURS)' AND city = 'Rennes' THEN false
    WHEN name = '3ARTS (L''OFFICINE ARTISAN COIFFEUR)' AND city = 'Rennes' THEN true
    WHEN name = 'BUREAU VERITAS CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'APAVE INFRASTRUCTURES ET CONSTRUCTION FRANCE' AND city = 'Rennes' THEN true
    WHEN name = 'CERUTTI CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'MORTIER CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'ALTA CONSTRUCTIONS' AND city = 'Rennes' THEN true
    WHEN name = 'EIFFAGE CONSTRUCTION BRETAGNE (ECB)' AND city = 'Rennes' THEN true
    WHEN name = 'PAINT CONCEPT CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'INGENIERIE CONCEPT ET CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'FOOTBALL CLUB DE GUIPRY MESSAC (FCGM)' AND city = 'Rennes' THEN true
    WHEN name = 'CLUB OMNISPORTS DU SUD VILAINE' AND city = 'Rennes' THEN true
    WHEN name = 'GROUPEMENT DES JEUNES DU BOCAGE FOUGERAIS' AND city = 'Rennes' THEN true
    WHEN name = 'HOTEL RESTAURANT LE MAUPAS' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE NEUHAUSER' AND city = 'Rennes' THEN true
    WHEN name = 'LA BOULANGERIE DUMANT' AND city = 'Rennes' THEN false
    WHEN name = 'BOULANGERIE DESMARIEUX FILS' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE B' AND city = 'Rennes' THEN true
    WHEN name = 'LA BOULANGERIE D''A COTE' AND city = 'Rennes' THEN true
    WHEN name = 'SARL GEM BOULANGERIE (MAISON GUICHARD)' AND city = 'Rennes' THEN false
    WHEN name = 'BOULANGERIE VANDAME' AND city = 'Rennes' THEN true
    WHEN name = 'LE PETIT ALBERT COIFFEUR (LE PETIT ALBERT)' AND city = 'Rennes' THEN true
    WHEN name = '14 NEMOURS (COIFFEUR & COMPAGNIE)' AND city = 'Rennes' THEN true
    WHEN name = 'ELLA (LA CABANE DU COIFFEUR)' AND city = 'Rennes' THEN false
    WHEN name = 'HOLDING PACE' AND city = 'Rennes' THEN true
    WHEN name = 'OUEST ECO CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'UNION NATIONALE DES INDUSTRIES DE CARRIERES ET MATERIAUX DE CONSTRUCTION (UNICEM)' AND city = 'Rennes' THEN true
    WHEN name = 'CCL CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'TONIC'' GYM GERMANAISE' AND city = 'Rennes' THEN true
    WHEN name = 'SECTION GYMNASTIQUE VOLONTAIRE BAIS' AND city = 'Rennes' THEN true
    WHEN name = 'VOLLEY BALL CLUB DE GUICHEN' AND city = 'Rennes' THEN true
    WHEN name = 'AMICALE SPORTIVE NOYALAISE' AND city = 'Rennes' THEN true
    WHEN name = 'AMICALE LAIQUE PLEURTUIT' AND city = 'Rennes' THEN true
    WHEN name = 'O''TACOS RESTAURANT I' AND city = 'Rennes' THEN true
    WHEN name = 'PONTIVY RESTAURANT' AND city = 'Rennes' THEN true
    WHEN name = 'RESTAURANT DE L''ETANG' AND city = 'Rennes' THEN true
    WHEN name = 'RESTAURANT DES BOIS' AND city = 'Rennes' THEN true
    WHEN name = 'AS DU RESTAURANT (BAR BRASSERIE DE LA MAIRIE)' AND city = 'Rennes' THEN true
    WHEN name = 'SUWON RESTAURANT' AND city = 'Rennes' THEN true
    WHEN name = 'RESTAURANT LE TROQUET' AND city = 'Rennes' THEN true
    WHEN name = 'MONDIAL RESTAURANT' AND city = 'Rennes' THEN true
    WHEN name = 'RESTAURANT LA VILLE CODET' AND city = 'Rennes' THEN false
    WHEN name = 'SARL KAYS RESTAURANT (KEBAB DU LANDEL)' AND city = 'Rennes' THEN false
    WHEN name = 'LE FUN BAR RESTAURANT (LA GUINGUETTE DE SAINT JACUT)' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIES BG (B B G)' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE HALLIER' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE AU FEU DE BOIS (BOULANGERIE AU FEU DE BOIS)' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE CLOUARD' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE LE DIODIC' AND city = 'Rennes' THEN false
    WHEN name = 'ELITE ARTISAN' AND city = 'Rennes' THEN false
    WHEN name = 'LES ARTISANES' AND city = 'Rennes' THEN false
    WHEN name = 'LES ARTISANS COIFFEURS (LES ARTISANS COIFFEURS)' AND city = 'Rennes' THEN false
    WHEN name = 'LE QUAI DES ARTISANS (LE QUAI DES ARTISANS)' AND city = 'Rennes' THEN true
    WHEN name = 'AUX ARTISANS CREATEURS' AND city = 'Rennes' THEN true
    WHEN name = 'LE COIFFEUR (LE COIFFEUR)' AND city = 'Rennes' THEN false
    WHEN name = 'RIM COIFFEUR (RIM COIFFEUR)' AND city = 'Rennes' THEN false
    WHEN name = 'COIFFEUR NUMERO 1 (COIFFEUR NUMERO 1)' AND city = 'Rennes' THEN false
    WHEN name = 'COIFFEUR N 1' AND city = 'Rennes' THEN false
    WHEN name = 'HAPPY CURL' AND city = 'Rennes' THEN true
    WHEN name = 'NATHALIE DESMONTS (NE ARTISAN COIFFEUR)' AND city = 'Rennes' THEN false
    WHEN name = 'S.P.' AND city = 'Rennes' THEN true
    WHEN name = 'CHAFAA NAIT MAMMAR (CHAFAA COIFFEUR BARBIER)' AND city = 'Rennes' THEN true
    WHEN name = 'LE SOURIRE DU PLOMBIER' AND city = 'Rennes' THEN true
    WHEN name = 'GROUPEMENT DES ARTISANS PLOMBIERS CHAUFFAGISTES ELECTRICIENS D''ILLE ET VILAINE (G.P.A.C. 35)' AND city = 'Rennes' THEN true
    WHEN name = 'ARTISAN ELECTRICIEN RUELLAN (ARTISAN ELECTRICIEN RUELLAN) (AER)' AND city = 'Rennes' THEN true
    WHEN name = 'SOCOTEC CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'POLYEXPERT CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'CONSTRUCTEL CONSTRUCTIONS TELECOMMUNICA.' AND city = 'Rennes' THEN true
    WHEN name = 'OPERATEUR DE COMPETENCES DE LA CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = '2LM CONSTRUCTIONS (2LM CONSTRUCTIONS)' AND city = 'Rennes' THEN true
    WHEN name = 'ASS COM SPORTS LOISIRS CHAPELLE FOUG (ACSL)' AND city = 'Rennes' THEN true
    WHEN name = 'COURIR A BAINS' AND city = 'Rennes' THEN true
    WHEN name = 'YOGA BAZOUGES' AND city = 'Rennes' THEN true
    WHEN name = 'ASS TENNIS GOVEN' AND city = 'Rennes' THEN true
    WHEN name = 'ESPOIR IFFENDIC' AND city = 'Rennes' THEN true
    WHEN name = 'AVANT GARDE DE TRESBOEUF' AND city = 'Rennes' THEN true
    WHEN name = 'VOLLEY-CLUB DE JAVENE' AND city = 'Rennes' THEN true
    WHEN name = 'GYM CLUB LA CHAPELLE THOUARAULT' AND city = 'Rennes' THEN true
    WHEN name = 'GHIZLANE KHABBABI (MASSAGE DU MONDE)' AND city = 'Rennes' THEN true
    WHEN name = 'JENNIFER BERTHELOT (KEBAIKAN MASSAGES BIEN-ETRE)' AND city = 'Rennes' THEN true
    WHEN name = 'GWENAEL HERVE (HERVE) (GWENAEL HERVE MASSAGE BIEN ETRE)' AND city = 'Rennes' THEN false
    WHEN name = 'MARION SIMON (MARION SIMON PRATICIENNE EN MASSAGES DE BIEN-ETRE)' AND city = 'Rennes' THEN true
    WHEN name = 'PATRICE OUDARD (BIEN ETRE ET MASSAGES)' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE PASQUIER' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE ANTOINE' AND city = 'Rennes' THEN true
    WHEN name = 'L''ARTISAN COULEURS' AND city = 'Rennes' THEN true
    WHEN name = 'L''ARTISAN FORMATEUR' AND city = 'Rennes' THEN false
    WHEN name = 'L''ARTISAN DE LA MAISON' AND city = 'Rennes' THEN false
    WHEN name = 'CIMEO CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'SOCIETE EUROPEENNE DE DEVELOPPEMENT DE RESTAURANTS ITALIENS (SEDRI)' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE PLEURTUIT' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE SAINT-MALO' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE DU PRIEURE' AND city = 'Rennes' THEN true
    WHEN name = 'SCI DES ARTISANS' AND city = 'Rennes' THEN false
    WHEN name = 'L''ARTISANE' AND city = 'Rennes' THEN true
    WHEN name = 'L''ARTISAN (L''ARTISAN)' AND city = 'Rennes' THEN true
    WHEN name = 'JBH DES ARTISANS' AND city = 'Rennes' THEN true
    WHEN name = 'SCI LES ARTISANS' AND city = 'Rennes' THEN true
    WHEN name = 'SCI DES ARTISANS' AND city = 'Rennes' THEN true
    WHEN name = 'TERRES D''ARTISANS' AND city = 'Rennes' THEN true
    WHEN name = 'TY'' ARTISANS' AND city = 'Rennes' THEN true
    WHEN name = 'LES ARTISANS GOURMANDS' AND city = 'Rennes' THEN true
    WHEN name = 'ARTISANS DU MONDE' AND city = 'Rennes' THEN true
    WHEN name = 'MB COIFFEUR VISAGISTE' AND city = 'Rennes' THEN true
    WHEN name = 'J-C LE PLOMBIER' AND city = 'Rennes' THEN true
    WHEN name = 'MON PLOMBIER HUGO' AND city = 'Rennes' THEN true
    WHEN name = 'LE PLOMBIER BRETON (LE PLOMBIER BRETON)' AND city = 'Rennes' THEN true
    WHEN name = 'L''ATELIER DU PLOMBIER' AND city = 'Rennes' THEN false
    WHEN name = 'LES ELECTRICIENS PLOMBIERS BRETONS' AND city = 'Rennes' THEN true
    WHEN name = 'SIMON WERQUIN PLOMBIER - CHAUFFAGISTE (PCI PLOMBERIE CHAUFFAGE INTERVENTION) (SWPC)' AND city = 'Rennes' THEN true
    WHEN name = 'MON PLOMBIER DEBOUCHEUR' AND city = 'Rennes' THEN true
    WHEN name = 'ANSELMI ASSOCIES PLOMBIERS (AAP)' AND city = 'Rennes' THEN true
    WHEN name = 'CHOLLET GWEN PLOMBIER CHAUFFAGISTE FRIGORIFISTE (CHOLLET GWEN PLOMBIER CHAUFFAGISTE FRIGORIFISTE)' AND city = 'Rennes' THEN false
    WHEN name = 'ERWAN GEHIN (GEHIN PLOMBIER)' AND city = 'Rennes' THEN true
    WHEN name = 'JEROME MALLARD (J.MALLARD PLOMBIER-CHAUFFAGISTE)' AND city = 'Rennes' THEN true
    WHEN name = 'QUENTIN PERAN ([ND])' AND city = 'Rennes' THEN false
    WHEN name = 'AS ELECTRICIEN' AND city = 'Rennes' THEN true
    WHEN name = 'DG ARTISAN ELECTRICIEN' AND city = 'Rennes' THEN true
    WHEN name = 'ANTHONY DANTEN (EPO ELECTRICIENS DU PHARE OUEST)' AND city = 'Rennes' THEN true
    WHEN name = 'JEROME GUILLARD (L''ELECTRICIEN RENNAIS)' AND city = 'Rennes' THEN true
    WHEN name = 'SA D''HLM  AIGUILLON CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'IRISOLARIS CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'DBL CONSTRUCTIONS' AND city = 'Rennes' THEN true
    WHEN name = 'ESPERANCE SPORTS & LOISIRS BECHEREL' AND city = 'Rennes' THEN true
    WHEN name = 'ESPERANCE LA BOUEXIERE BADMINTON' AND city = 'Rennes' THEN true
    WHEN name = 'KERWATT (KERWATT S.A.S)' AND city = 'Rennes' THEN true
    WHEN name = 'THOMAS MONFRAIS' AND city = 'Rennes' THEN false
    WHEN name = 'VINCENT ROUSSEL (BREIZH RAMONE TA HUTTE)' AND city = 'Rennes' THEN true
    ELSE "hasWebsite"
  END,
  "hasActiveWebsite" = CASE
    WHEN name = 'AVEC RESTAURANT' AND city = 'Rennes' THEN true
    WHEN name = 'RACINES RESTAURANT' AND city = 'Rennes' THEN true
    WHEN name = 'SB RESTAURANT (SB CONSULT RESTAURANT)' AND city = 'Rennes' THEN false
    WHEN name = 'RESTAURANT L''OUVREE' AND city = 'Rennes' THEN false
    WHEN name = 'RESTAURANT ZEST (RESTAURANT ZEST)' AND city = 'Rennes' THEN true
    WHEN name = 'BUAIS RESTAURANT' AND city = 'Rennes' THEN false
    WHEN name = 'RESTAURANT  LUCA' AND city = 'Rennes' THEN true
    WHEN name = 'TI''MI BOULANGERIE PATISSERIE' AND city = 'Rennes' THEN false
    WHEN name = 'LA BOULANGERIE D''ARMOR' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE GEFFRAY (BOULANGERIE GEFFRAY)' AND city = 'Rennes' THEN false
    WHEN name = 'SOC INTERP ARTISAN GARANTIE INVESTISSE (SIAGI)' AND city = 'Rennes' THEN true
    WHEN name = 'ARTISAN COIFFEUR' AND city = 'Rennes' THEN true
    WHEN name = 'KARMA COIFFEUR' AND city = 'Rennes' THEN true
    WHEN name = 'VALATELIER (L''ATELIER DES COIFFEURS)' AND city = 'Rennes' THEN true
    WHEN name = 'PLEDEX (COIFFEUR & COMPAGNIE)' AND city = 'Rennes' THEN true
    WHEN name = 'RAPHATELIER (ATELIER DES COIFFEURS)' AND city = 'Rennes' THEN false
    WHEN name = '3ARTS (L''OFFICINE ARTISAN COIFFEUR)' AND city = 'Rennes' THEN true
    WHEN name = 'BUREAU VERITAS CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'APAVE INFRASTRUCTURES ET CONSTRUCTION FRANCE' AND city = 'Rennes' THEN true
    WHEN name = 'CERUTTI CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'MORTIER CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'ALTA CONSTRUCTIONS' AND city = 'Rennes' THEN true
    WHEN name = 'EIFFAGE CONSTRUCTION BRETAGNE (ECB)' AND city = 'Rennes' THEN true
    WHEN name = 'PAINT CONCEPT CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'INGENIERIE CONCEPT ET CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'FOOTBALL CLUB DE GUIPRY MESSAC (FCGM)' AND city = 'Rennes' THEN true
    WHEN name = 'CLUB OMNISPORTS DU SUD VILAINE' AND city = 'Rennes' THEN true
    WHEN name = 'GROUPEMENT DES JEUNES DU BOCAGE FOUGERAIS' AND city = 'Rennes' THEN true
    WHEN name = 'HOTEL RESTAURANT LE MAUPAS' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE NEUHAUSER' AND city = 'Rennes' THEN true
    WHEN name = 'LA BOULANGERIE DUMANT' AND city = 'Rennes' THEN false
    WHEN name = 'BOULANGERIE DESMARIEUX FILS' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE B' AND city = 'Rennes' THEN true
    WHEN name = 'LA BOULANGERIE D''A COTE' AND city = 'Rennes' THEN true
    WHEN name = 'SARL GEM BOULANGERIE (MAISON GUICHARD)' AND city = 'Rennes' THEN false
    WHEN name = 'BOULANGERIE VANDAME' AND city = 'Rennes' THEN true
    WHEN name = 'LE PETIT ALBERT COIFFEUR (LE PETIT ALBERT)' AND city = 'Rennes' THEN true
    WHEN name = '14 NEMOURS (COIFFEUR & COMPAGNIE)' AND city = 'Rennes' THEN true
    WHEN name = 'ELLA (LA CABANE DU COIFFEUR)' AND city = 'Rennes' THEN false
    WHEN name = 'HOLDING PACE' AND city = 'Rennes' THEN true
    WHEN name = 'OUEST ECO CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'UNION NATIONALE DES INDUSTRIES DE CARRIERES ET MATERIAUX DE CONSTRUCTION (UNICEM)' AND city = 'Rennes' THEN true
    WHEN name = 'CCL CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'TONIC'' GYM GERMANAISE' AND city = 'Rennes' THEN true
    WHEN name = 'SECTION GYMNASTIQUE VOLONTAIRE BAIS' AND city = 'Rennes' THEN true
    WHEN name = 'VOLLEY BALL CLUB DE GUICHEN' AND city = 'Rennes' THEN true
    WHEN name = 'AMICALE SPORTIVE NOYALAISE' AND city = 'Rennes' THEN true
    WHEN name = 'AMICALE LAIQUE PLEURTUIT' AND city = 'Rennes' THEN true
    WHEN name = 'O''TACOS RESTAURANT I' AND city = 'Rennes' THEN true
    WHEN name = 'PONTIVY RESTAURANT' AND city = 'Rennes' THEN true
    WHEN name = 'RESTAURANT DE L''ETANG' AND city = 'Rennes' THEN true
    WHEN name = 'RESTAURANT DES BOIS' AND city = 'Rennes' THEN true
    WHEN name = 'AS DU RESTAURANT (BAR BRASSERIE DE LA MAIRIE)' AND city = 'Rennes' THEN true
    WHEN name = 'SUWON RESTAURANT' AND city = 'Rennes' THEN true
    WHEN name = 'RESTAURANT LE TROQUET' AND city = 'Rennes' THEN true
    WHEN name = 'MONDIAL RESTAURANT' AND city = 'Rennes' THEN true
    WHEN name = 'RESTAURANT LA VILLE CODET' AND city = 'Rennes' THEN false
    WHEN name = 'SARL KAYS RESTAURANT (KEBAB DU LANDEL)' AND city = 'Rennes' THEN false
    WHEN name = 'LE FUN BAR RESTAURANT (LA GUINGUETTE DE SAINT JACUT)' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIES BG (B B G)' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE HALLIER' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE AU FEU DE BOIS (BOULANGERIE AU FEU DE BOIS)' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE CLOUARD' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE LE DIODIC' AND city = 'Rennes' THEN false
    WHEN name = 'ELITE ARTISAN' AND city = 'Rennes' THEN false
    WHEN name = 'LES ARTISANES' AND city = 'Rennes' THEN false
    WHEN name = 'LES ARTISANS COIFFEURS (LES ARTISANS COIFFEURS)' AND city = 'Rennes' THEN false
    WHEN name = 'LE QUAI DES ARTISANS (LE QUAI DES ARTISANS)' AND city = 'Rennes' THEN true
    WHEN name = 'AUX ARTISANS CREATEURS' AND city = 'Rennes' THEN true
    WHEN name = 'LE COIFFEUR (LE COIFFEUR)' AND city = 'Rennes' THEN false
    WHEN name = 'RIM COIFFEUR (RIM COIFFEUR)' AND city = 'Rennes' THEN false
    WHEN name = 'COIFFEUR NUMERO 1 (COIFFEUR NUMERO 1)' AND city = 'Rennes' THEN false
    WHEN name = 'COIFFEUR N 1' AND city = 'Rennes' THEN false
    WHEN name = 'HAPPY CURL' AND city = 'Rennes' THEN true
    WHEN name = 'NATHALIE DESMONTS (NE ARTISAN COIFFEUR)' AND city = 'Rennes' THEN false
    WHEN name = 'S.P.' AND city = 'Rennes' THEN true
    WHEN name = 'CHAFAA NAIT MAMMAR (CHAFAA COIFFEUR BARBIER)' AND city = 'Rennes' THEN true
    WHEN name = 'LE SOURIRE DU PLOMBIER' AND city = 'Rennes' THEN true
    WHEN name = 'GROUPEMENT DES ARTISANS PLOMBIERS CHAUFFAGISTES ELECTRICIENS D''ILLE ET VILAINE (G.P.A.C. 35)' AND city = 'Rennes' THEN true
    WHEN name = 'ARTISAN ELECTRICIEN RUELLAN (ARTISAN ELECTRICIEN RUELLAN) (AER)' AND city = 'Rennes' THEN true
    WHEN name = 'SOCOTEC CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'POLYEXPERT CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'CONSTRUCTEL CONSTRUCTIONS TELECOMMUNICA.' AND city = 'Rennes' THEN true
    WHEN name = 'OPERATEUR DE COMPETENCES DE LA CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = '2LM CONSTRUCTIONS (2LM CONSTRUCTIONS)' AND city = 'Rennes' THEN true
    WHEN name = 'ASS COM SPORTS LOISIRS CHAPELLE FOUG (ACSL)' AND city = 'Rennes' THEN true
    WHEN name = 'COURIR A BAINS' AND city = 'Rennes' THEN true
    WHEN name = 'YOGA BAZOUGES' AND city = 'Rennes' THEN true
    WHEN name = 'ASS TENNIS GOVEN' AND city = 'Rennes' THEN true
    WHEN name = 'ESPOIR IFFENDIC' AND city = 'Rennes' THEN true
    WHEN name = 'AVANT GARDE DE TRESBOEUF' AND city = 'Rennes' THEN true
    WHEN name = 'VOLLEY-CLUB DE JAVENE' AND city = 'Rennes' THEN true
    WHEN name = 'GYM CLUB LA CHAPELLE THOUARAULT' AND city = 'Rennes' THEN true
    WHEN name = 'GHIZLANE KHABBABI (MASSAGE DU MONDE)' AND city = 'Rennes' THEN true
    WHEN name = 'JENNIFER BERTHELOT (KEBAIKAN MASSAGES BIEN-ETRE)' AND city = 'Rennes' THEN true
    WHEN name = 'GWENAEL HERVE (HERVE) (GWENAEL HERVE MASSAGE BIEN ETRE)' AND city = 'Rennes' THEN false
    WHEN name = 'MARION SIMON (MARION SIMON PRATICIENNE EN MASSAGES DE BIEN-ETRE)' AND city = 'Rennes' THEN true
    WHEN name = 'PATRICE OUDARD (BIEN ETRE ET MASSAGES)' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE PASQUIER' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE ANTOINE' AND city = 'Rennes' THEN true
    WHEN name = 'L''ARTISAN COULEURS' AND city = 'Rennes' THEN true
    WHEN name = 'L''ARTISAN FORMATEUR' AND city = 'Rennes' THEN false
    WHEN name = 'L''ARTISAN DE LA MAISON' AND city = 'Rennes' THEN false
    WHEN name = 'CIMEO CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'SOCIETE EUROPEENNE DE DEVELOPPEMENT DE RESTAURANTS ITALIENS (SEDRI)' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE PLEURTUIT' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE SAINT-MALO' AND city = 'Rennes' THEN true
    WHEN name = 'BOULANGERIE DU PRIEURE' AND city = 'Rennes' THEN true
    WHEN name = 'SCI DES ARTISANS' AND city = 'Rennes' THEN false
    WHEN name = 'L''ARTISANE' AND city = 'Rennes' THEN true
    WHEN name = 'L''ARTISAN (L''ARTISAN)' AND city = 'Rennes' THEN true
    WHEN name = 'JBH DES ARTISANS' AND city = 'Rennes' THEN true
    WHEN name = 'SCI LES ARTISANS' AND city = 'Rennes' THEN true
    WHEN name = 'SCI DES ARTISANS' AND city = 'Rennes' THEN true
    WHEN name = 'TERRES D''ARTISANS' AND city = 'Rennes' THEN true
    WHEN name = 'TY'' ARTISANS' AND city = 'Rennes' THEN true
    WHEN name = 'LES ARTISANS GOURMANDS' AND city = 'Rennes' THEN true
    WHEN name = 'ARTISANS DU MONDE' AND city = 'Rennes' THEN true
    WHEN name = 'MB COIFFEUR VISAGISTE' AND city = 'Rennes' THEN true
    WHEN name = 'J-C LE PLOMBIER' AND city = 'Rennes' THEN true
    WHEN name = 'MON PLOMBIER HUGO' AND city = 'Rennes' THEN true
    WHEN name = 'LE PLOMBIER BRETON (LE PLOMBIER BRETON)' AND city = 'Rennes' THEN true
    WHEN name = 'L''ATELIER DU PLOMBIER' AND city = 'Rennes' THEN false
    WHEN name = 'LES ELECTRICIENS PLOMBIERS BRETONS' AND city = 'Rennes' THEN true
    WHEN name = 'SIMON WERQUIN PLOMBIER - CHAUFFAGISTE (PCI PLOMBERIE CHAUFFAGE INTERVENTION) (SWPC)' AND city = 'Rennes' THEN true
    WHEN name = 'MON PLOMBIER DEBOUCHEUR' AND city = 'Rennes' THEN true
    WHEN name = 'ANSELMI ASSOCIES PLOMBIERS (AAP)' AND city = 'Rennes' THEN true
    WHEN name = 'CHOLLET GWEN PLOMBIER CHAUFFAGISTE FRIGORIFISTE (CHOLLET GWEN PLOMBIER CHAUFFAGISTE FRIGORIFISTE)' AND city = 'Rennes' THEN false
    WHEN name = 'ERWAN GEHIN (GEHIN PLOMBIER)' AND city = 'Rennes' THEN true
    WHEN name = 'JEROME MALLARD (J.MALLARD PLOMBIER-CHAUFFAGISTE)' AND city = 'Rennes' THEN true
    WHEN name = 'QUENTIN PERAN ([ND])' AND city = 'Rennes' THEN false
    WHEN name = 'AS ELECTRICIEN' AND city = 'Rennes' THEN true
    WHEN name = 'DG ARTISAN ELECTRICIEN' AND city = 'Rennes' THEN true
    WHEN name = 'ANTHONY DANTEN (EPO ELECTRICIENS DU PHARE OUEST)' AND city = 'Rennes' THEN true
    WHEN name = 'JEROME GUILLARD (L''ELECTRICIEN RENNAIS)' AND city = 'Rennes' THEN true
    WHEN name = 'SA D''HLM  AIGUILLON CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'IRISOLARIS CONSTRUCTION' AND city = 'Rennes' THEN true
    WHEN name = 'DBL CONSTRUCTIONS' AND city = 'Rennes' THEN true
    WHEN name = 'ESPERANCE SPORTS & LOISIRS BECHEREL' AND city = 'Rennes' THEN true
    WHEN name = 'ESPERANCE LA BOUEXIERE BADMINTON' AND city = 'Rennes' THEN true
    WHEN name = 'KERWATT (KERWATT S.A.S)' AND city = 'Rennes' THEN true
    WHEN name = 'THOMAS MONFRAIS' AND city = 'Rennes' THEN false
    WHEN name = 'VINCENT ROUSSEL (BREIZH RAMONE TA HUTTE)' AND city = 'Rennes' THEN true
    ELSE "hasActiveWebsite"
  END,
  website = CASE
    WHEN name = 'AVEC RESTAURANT' AND city = 'Rennes' THEN 'https://www.avec-rennes.com/'
    WHEN name = 'RACINES RESTAURANT' AND city = 'Rennes' THEN 'https://www.racines-restaurant.fr/'
    WHEN name = 'SB RESTAURANT (SB CONSULT RESTAURANT)' AND city = 'Rennes' THEN NULL
    WHEN name = 'RESTAURANT L''OUVREE' AND city = 'Rennes' THEN NULL
    WHEN name = 'RESTAURANT ZEST (RESTAURANT ZEST)' AND city = 'Rennes' THEN 'http://www.restaurant-zest.fr/'
    WHEN name = 'BUAIS RESTAURANT' AND city = 'Rennes' THEN NULL
    WHEN name = 'RESTAURANT  LUCA' AND city = 'Rennes' THEN 'https://www.restaurantluca.com/'
    WHEN name = 'TI''MI BOULANGERIE PATISSERIE' AND city = 'Rennes' THEN NULL
    WHEN name = 'LA BOULANGERIE D''ARMOR' AND city = 'Rennes' THEN 'https://www.boulangeriedarmor.fr/'
    WHEN name = 'BOULANGERIE GEFFRAY (BOULANGERIE GEFFRAY)' AND city = 'Rennes' THEN NULL
    WHEN name = 'SOC INTERP ARTISAN GARANTIE INVESTISSE (SIAGI)' AND city = 'Rennes' THEN 'https://www.siagi.com/'
    WHEN name = 'ARTISAN COIFFEUR' AND city = 'Rennes' THEN 'https://leperdit-artisan-coiffeur.fr/'
    WHEN name = 'KARMA COIFFEUR' AND city = 'Rennes' THEN 'https://www.karma-coiffeur.fr/historique/'
    WHEN name = 'VALATELIER (L''ATELIER DES COIFFEURS)' AND city = 'Rennes' THEN 'https://www.latelierdescoiffes.fr/rennes'
    WHEN name = 'PLEDEX (COIFFEUR & COMPAGNIE)' AND city = 'Rennes' THEN 'https://www.coiffeuretcompagnie.com/fr/coiffeur'
    WHEN name = 'RAPHATELIER (ATELIER DES COIFFEURS)' AND city = 'Rennes' THEN NULL
    WHEN name = '3ARTS (L''OFFICINE ARTISAN COIFFEUR)' AND city = 'Rennes' THEN 'https://lofficine.fr/?page_id=7778'
    WHEN name = 'BUREAU VERITAS CONSTRUCTION' AND city = 'Rennes' THEN 'https://construction.bureauveritas.fr/'
    WHEN name = 'APAVE INFRASTRUCTURES ET CONSTRUCTION FRANCE' AND city = 'Rennes' THEN 'https://infrastructures-construction.france.apave.com/'
    WHEN name = 'CERUTTI CONSTRUCTION' AND city = 'Rennes' THEN 'https://www.groupecerutti.fr/'
    WHEN name = 'MORTIER CONSTRUCTION' AND city = 'Rennes' THEN 'https://www.mortier-construction.fr/constructeur-maison/ille-et-vilaine/'
    WHEN name = 'ALTA CONSTRUCTIONS' AND city = 'Rennes' THEN 'https://a-lta.fr/'
    WHEN name = 'EIFFAGE CONSTRUCTION BRETAGNE (ECB)' AND city = 'Rennes' THEN 'https://www.eiffageconstruction.com/'
    WHEN name = 'PAINT CONCEPT CONSTRUCTION' AND city = 'Rennes' THEN 'https://paintconcept.fr/'
    WHEN name = 'INGENIERIE CONCEPT ET CONSTRUCTION' AND city = 'Rennes' THEN 'https://i2c-ingenierie.fr/'
    WHEN name = 'FOOTBALL CLUB DE GUIPRY MESSAC (FCGM)' AND city = 'Rennes' THEN 'https://fcgm.fr/'
    WHEN name = 'CLUB OMNISPORTS DU SUD VILAINE' AND city = 'Rennes' THEN 'https://www.helloasso.com/e/reg/bretagne/dep/ille-et-vilaine/cat/omnisports'
    WHEN name = 'GROUPEMENT DES JEUNES DU BOCAGE FOUGERAIS' AND city = 'Rennes' THEN 'https://www.fff.fr/competition/club/551569-gj-bocage-fougerais/resultats-et-calendrier.html'
    WHEN name = 'HOTEL RESTAURANT LE MAUPAS' AND city = 'Rennes' THEN 'http://www.europhotel-maupas.com/pages/francais/restaurant.html'
    WHEN name = 'BOULANGERIE NEUHAUSER' AND city = 'Rennes' THEN 'https://www.episens.fr/neuhauser/'
    WHEN name = 'LA BOULANGERIE DUMANT' AND city = 'Rennes' THEN NULL
    WHEN name = 'BOULANGERIE DESMARIEUX FILS' AND city = 'Rennes' THEN 'https://www.boulangerie-desmarieux.fr/'
    WHEN name = 'BOULANGERIE B' AND city = 'Rennes' THEN 'https://maisonbecam.com/'
    WHEN name = 'LA BOULANGERIE D''A COTE' AND city = 'Rennes' THEN 'https://www.feuillette.fr/'
    WHEN name = 'SARL GEM BOULANGERIE (MAISON GUICHARD)' AND city = 'Rennes' THEN NULL
    WHEN name = 'BOULANGERIE VANDAME' AND city = 'Rennes' THEN 'https://boulangerievandame.fr/'
    WHEN name = 'LE PETIT ALBERT COIFFEUR (LE PETIT ALBERT)' AND city = 'Rennes' THEN 'https://www.le-petitalbert.fr/'
    WHEN name = '14 NEMOURS (COIFFEUR & COMPAGNIE)' AND city = 'Rennes' THEN 'https://www.beautynailhairsalons.com/FR/Rennes/276995742410/COIFFEUR-%26-COMPAGNIE'
    WHEN name = 'ELLA (LA CABANE DU COIFFEUR)' AND city = 'Rennes' THEN NULL
    WHEN name = 'HOLDING PACE' AND city = 'Rennes' THEN 'https://www.ville-pace.bzh/'
    WHEN name = 'OUEST ECO CONSTRUCTION' AND city = 'Rennes' THEN 'https://ouest-eco-construction.fr/'
    WHEN name = 'UNION NATIONALE DES INDUSTRIES DE CARRIERES ET MATERIAUX DE CONSTRUCTION (UNICEM)' AND city = 'Rennes' THEN 'https://www.unicem.fr/'
    WHEN name = 'CCL CONSTRUCTION' AND city = 'Rennes' THEN 'https://www.ccl-construction.fr/'
    WHEN name = 'TONIC'' GYM GERMANAISE' AND city = 'Rennes' THEN 'https://www.saint-germain-en-cogles.com/carte/tonic-gym-zumba-pilate-gym/'
    WHEN name = 'SECTION GYMNASTIQUE VOLONTAIRE BAIS' AND city = 'Rennes' THEN 'https://assoce.fr/siren/342386950/SECTION-GYMNASTIQUE-VOLONTAIRE-BAIS'
    WHEN name = 'VOLLEY BALL CLUB DE GUICHEN' AND city = 'Rennes' THEN 'https://guichen-bourg-des-comptes-volley-ball.kalisport.com/'
    WHEN name = 'AMICALE SPORTIVE NOYALAISE' AND city = 'Rennes' THEN 'https://ballejaune.com/club/asntc'
    WHEN name = 'AMICALE LAIQUE PLEURTUIT' AND city = 'Rennes' THEN 'https://al-pleurtuit-basket.kalisport.com/'
    WHEN name = 'O''TACOS RESTAURANT I' AND city = 'Rennes' THEN 'https://o-tacos.com/'
    WHEN name = 'PONTIVY RESTAURANT' AND city = 'Rennes' THEN 'https://www.leboeufquifume.fr/'
    WHEN name = 'RESTAURANT DE L''ETANG' AND city = 'Rennes' THEN 'https://www.tourisme-rennes.com/restaurant/georgette/'
    WHEN name = 'RESTAURANT DES BOIS' AND city = 'Rennes' THEN 'https://www.tourisme-rennes.com/restaurant/au-parc-des-bois/'
    WHEN name = 'AS DU RESTAURANT (BAR BRASSERIE DE LA MAIRIE)' AND city = 'Rennes' THEN 'https://www.tourisme-rennes.com/decouvrir-rennes/gastronomie/brasseries/'
    WHEN name = 'SUWON RESTAURANT' AND city = 'Rennes' THEN 'http://suwon-restaurant.fr/'
    WHEN name = 'RESTAURANT LE TROQUET' AND city = 'Rennes' THEN 'https://www.letroquet40.com/about-1'
    WHEN name = 'MONDIAL RESTAURANT' AND city = 'Rennes' THEN 'https://lerestaurantmondial.fr/en/services'
    WHEN name = 'RESTAURANT LA VILLE CODET' AND city = 'Rennes' THEN NULL
    WHEN name = 'SARL KAYS RESTAURANT (KEBAB DU LANDEL)' AND city = 'Rennes' THEN NULL
    WHEN name = 'LE FUN BAR RESTAURANT (LA GUINGUETTE DE SAINT JACUT)' AND city = 'Rennes' THEN 'https://www.dinan-capfrehel.com/restaurants/la-guinguette-de-st-jacut/'
    WHEN name = 'BOULANGERIES BG (B B G)' AND city = 'Rennes' THEN 'https://www.allbiz.fr/boulangeries-b-g_32r-04-32-62-07-79'
    WHEN name = 'BOULANGERIE HALLIER' AND city = 'Rennes' THEN 'https://www.saintbriac.fr/contacts/boulangerie-hallier/'
    WHEN name = 'BOULANGERIE AU FEU DE BOIS (BOULANGERIE AU FEU DE BOIS)' AND city = 'Rennes' THEN 'https://kerbara.fr/'
    WHEN name = 'BOULANGERIE CLOUARD' AND city = 'Rennes' THEN 'https://controlessanitaires.fr/france/bretagne/ille-et-vilaine/35260/cancale/boulangerie-clouard/523100501000.html'
    WHEN name = 'BOULANGERIE LE DIODIC' AND city = 'Rennes' THEN NULL
    WHEN name = 'ELITE ARTISAN' AND city = 'Rennes' THEN NULL
    WHEN name = 'LES ARTISANES' AND city = 'Rennes' THEN NULL
    WHEN name = 'LES ARTISANS COIFFEURS (LES ARTISANS COIFFEURS)' AND city = 'Rennes' THEN NULL
    WHEN name = 'LE QUAI DES ARTISANS (LE QUAI DES ARTISANS)' AND city = 'Rennes' THEN 'https://fabriquecitoyenne.fr/project/quais-de-vilaine/presentation/presentation'
    WHEN name = 'AUX ARTISANS CREATEURS' AND city = 'Rennes' THEN 'https://bonjourennes.com/10-spots-de-createurs-rennais-a-decouvrir/'
    WHEN name = 'LE COIFFEUR (LE COIFFEUR)' AND city = 'Rennes' THEN NULL
    WHEN name = 'RIM COIFFEUR (RIM COIFFEUR)' AND city = 'Rennes' THEN NULL
    WHEN name = 'COIFFEUR NUMERO 1 (COIFFEUR NUMERO 1)' AND city = 'Rennes' THEN NULL
    WHEN name = 'COIFFEUR N 1' AND city = 'Rennes' THEN NULL
    WHEN name = 'HAPPY CURL' AND city = 'Rennes' THEN 'https://www.dnb.com/business-directory/company-profiles.happy_curl.7ffeffcb7fc1ece3972fab21441d2c90.html'
    WHEN name = 'NATHALIE DESMONTS (NE ARTISAN COIFFEUR)' AND city = 'Rennes' THEN NULL
    WHEN name = 'S.P.' AND city = 'Rennes' THEN 'https://www.staderennais.com/'
    WHEN name = 'CHAFAA NAIT MAMMAR (CHAFAA COIFFEUR BARBIER)' AND city = 'Rennes' THEN 'https://www.kelest.fr/a/monsieur-chafaa-nait-mammar-vitre'
    WHEN name = 'LE SOURIRE DU PLOMBIER' AND city = 'Rennes' THEN 'https://sourireduplombier.com/'
    WHEN name = 'GROUPEMENT DES ARTISANS PLOMBIERS CHAUFFAGISTES ELECTRICIENS D''ILLE ET VILAINE (G.P.A.C. 35)' AND city = 'Rennes' THEN 'https://artisan35.com/'
    WHEN name = 'ARTISAN ELECTRICIEN RUELLAN (ARTISAN ELECTRICIEN RUELLAN) (AER)' AND city = 'Rennes' THEN 'https://www.aer35.com/'
    WHEN name = 'SOCOTEC CONSTRUCTION' AND city = 'Rennes' THEN 'https://nos-agences.socotec.fr/fr/bretagne/ille-et-vilaine/rennes'
    WHEN name = 'POLYEXPERT CONSTRUCTION' AND city = 'Rennes' THEN 'https://www.polyexpert-construction.fr/implantation/rennes.html'
    WHEN name = 'CONSTRUCTEL CONSTRUCTIONS TELECOMMUNICA.' AND city = 'Rennes' THEN 'https://constructel.net/fr/home'
    WHEN name = 'OPERATEUR DE COMPETENCES DE LA CONSTRUCTION' AND city = 'Rennes' THEN 'https://www.constructys.fr/'
    WHEN name = '2LM CONSTRUCTIONS (2LM CONSTRUCTIONS)' AND city = 'Rennes' THEN 'https://www.2lmconstructions.com/'
    WHEN name = 'ASS COM SPORTS LOISIRS CHAPELLE FOUG (ACSL)' AND city = 'Rennes' THEN 'https://acsl.sportsregions.fr/'
    WHEN name = 'COURIR A BAINS' AND city = 'Rennes' THEN 'https://www.courir.com/fr/magasin?StoreID=2503'
    WHEN name = 'YOGA BAZOUGES' AND city = 'Rennes' THEN 'https://www.yoga-dalibard.com/'
    WHEN name = 'ASS TENNIS GOVEN' AND city = 'Rennes' THEN 'https://tenup.fft.fr/club/52350624'
    WHEN name = 'ESPOIR IFFENDIC' AND city = 'Rennes' THEN 'https://www.infobel.com/fr/france/espoir_iffendic/iffendic/FR106501194-0299099159/businessdetails.aspx'
    WHEN name = 'AVANT GARDE DE TRESBOEUF' AND city = 'Rennes' THEN 'https://badmania.fr/club-informations-1687-avant-garde-tresboeuf.html'
    WHEN name = 'VOLLEY-CLUB DE JAVENE' AND city = 'Rennes' THEN 'https://www.mairie-javene.fr/contacts/volley-club/'
    WHEN name = 'GYM CLUB LA CHAPELLE THOUARAULT' AND city = 'Rennes' THEN 'https://www.lachapellethouarault.fr/'
    WHEN name = 'GHIZLANE KHABBABI (MASSAGE DU MONDE)' AND city = 'Rennes' THEN 'https://latable-de-massage.fr/massages-du-monde/'
    WHEN name = 'JENNIFER BERTHELOT (KEBAIKAN MASSAGES BIEN-ETRE)' AND city = 'Rennes' THEN 'https://www.lart-du-bien-etre.fr/'
    WHEN name = 'GWENAEL HERVE (HERVE) (GWENAEL HERVE MASSAGE BIEN ETRE)' AND city = 'Rennes' THEN NULL
    WHEN name = 'MARION SIMON (MARION SIMON PRATICIENNE EN MASSAGES DE BIEN-ETRE)' AND city = 'Rennes' THEN 'https://www.marionmassagesbienetre.fr/book-online'
    WHEN name = 'PATRICE OUDARD (BIEN ETRE ET MASSAGES)' AND city = 'Rennes' THEN 'https://bienetreetmassages.fr/patrice'
    WHEN name = 'BOULANGERIE PASQUIER' AND city = 'Rennes' THEN 'https://www.pasquier.fr/'
    WHEN name = 'BOULANGERIE ANTOINE' AND city = 'Rennes' THEN 'https://boulangerie-antoine.com/boutique/'
    WHEN name = 'L''ARTISAN COULEURS' AND city = 'Rennes' THEN 'https://www.lartisanais.fr/notre-atelier'
    WHEN name = 'L''ARTISAN FORMATEUR' AND city = 'Rennes' THEN NULL
    WHEN name = 'L''ARTISAN DE LA MAISON' AND city = 'Rennes' THEN NULL
    WHEN name = 'CIMEO CONSTRUCTION' AND city = 'Rennes' THEN 'https://www.cimeoconstruction.fr/'
    WHEN name = 'SOCIETE EUROPEENNE DE DEVELOPPEMENT DE RESTAURANTS ITALIENS (SEDRI)' AND city = 'Rennes' THEN 'https://www.dnb.com/business-directory/company-profiles.societe_europeenne_de_developpement_de_restaurants_italiens.dcfceda7d5431fe714388915e4cb4f6b.html'
    WHEN name = 'BOULANGERIE PLEURTUIT' AND city = 'Rennes' THEN 'https://www.boulangerielouise.com/boulangerie/boulangerie-louise-pleurtuit/'
    WHEN name = 'BOULANGERIE SAINT-MALO' AND city = 'Rennes' THEN 'https://www.boulangerie-ange.fr/'
    WHEN name = 'BOULANGERIE DU PRIEURE' AND city = 'Rennes' THEN 'http://laboulangerieduprieure.fr/'
    WHEN name = 'SCI DES ARTISANS' AND city = 'Rennes' THEN NULL
    WHEN name = 'L''ARTISANE' AND city = 'Rennes' THEN 'https://www.agence-lartisane.com/'
    WHEN name = 'L''ARTISAN (L''ARTISAN)' AND city = 'Rennes' THEN 'https://www.agence-lartisane.com/'
    WHEN name = 'JBH DES ARTISANS' AND city = 'Rennes' THEN 'https://entreprises.lagazettefrance.fr/entreprise/jbh-des-artisans-952390102'
    WHEN name = 'SCI LES ARTISANS' AND city = 'Rennes' THEN 'https://avis-situation-sirene.insee.fr/'
    WHEN name = 'SCI DES ARTISANS' AND city = 'Rennes' THEN 'https://www.registre.entreprises.gouv.fr/'
    WHEN name = 'TERRES D''ARTISANS' AND city = 'Rennes' THEN 'https://terredesarts-rennes.fr/'
    WHEN name = 'TY'' ARTISANS' AND city = 'Rennes' THEN 'https://www.mestravaux.com/entreprise/ty-rennais/'
    WHEN name = 'LES ARTISANS GOURMANDS' AND city = 'Rennes' THEN 'https://www.artisans-gourmands.fr/'
    WHEN name = 'ARTISANS DU MONDE' AND city = 'Rennes' THEN 'https://artisansdumonderennes.com/'
    WHEN name = 'MB COIFFEUR VISAGISTE' AND city = 'Rennes' THEN 'https://www.meilleurscoiffeurs.fr/professionnels/WFRfW1tWRkI'
    WHEN name = 'J-C LE PLOMBIER' AND city = 'Rennes' THEN 'https://jcelectriciteplomberie.fr/'
    WHEN name = 'MON PLOMBIER HUGO' AND city = 'Rennes' THEN 'https://monplombierhugo.fr/'
    WHEN name = 'LE PLOMBIER BRETON (LE PLOMBIER BRETON)' AND city = 'Rennes' THEN 'https://le-plombier-breton.fr/'
    WHEN name = 'L''ATELIER DU PLOMBIER' AND city = 'Rennes' THEN NULL
    WHEN name = 'LES ELECTRICIENS PLOMBIERS BRETONS' AND city = 'Rennes' THEN 'https://www.bs-plombelec.fr/index.asp'
    WHEN name = 'SIMON WERQUIN PLOMBIER - CHAUFFAGISTE (PCI PLOMBERIE CHAUFFAGE INTERVENTION) (SWPC)' AND city = 'Rennes' THEN 'https://chauffagiste-installation.fr/bretagne/ille-et-vilaine/pire-chance/simon-werquin-plombier-chauffagiste-pci-plomberie-chauffage-intervention-swpc-822147419.html'
    WHEN name = 'MON PLOMBIER DEBOUCHEUR' AND city = 'Rennes' THEN 'https://www.debouchrennes.fr/'
    WHEN name = 'ANSELMI ASSOCIES PLOMBIERS (AAP)' AND city = 'Rennes' THEN 'https://entreprises.lagazettefrance.fr/entreprise/anselmi-associes-plombiers-501870273'
    WHEN name = 'CHOLLET GWEN PLOMBIER CHAUFFAGISTE FRIGORIFISTE (CHOLLET GWEN PLOMBIER CHAUFFAGISTE FRIGORIFISTE)' AND city = 'Rennes' THEN NULL
    WHEN name = 'ERWAN GEHIN (GEHIN PLOMBIER)' AND city = 'Rennes' THEN 'https://entreprises.lagazettefrance.fr/entreprise/gehin-838135556'
    WHEN name = 'JEROME MALLARD (J.MALLARD PLOMBIER-CHAUFFAGISTE)' AND city = 'Rennes' THEN 'https://entreprises.lagazettefrance.fr/entreprise/mallard-514390723'
    WHEN name = 'QUENTIN PERAN ([ND])' AND city = 'Rennes' THEN NULL
    WHEN name = 'AS ELECTRICIEN' AND city = 'Rennes' THEN 'https://www.electricien-rennes.com/'
    WHEN name = 'DG ARTISAN ELECTRICIEN' AND city = 'Rennes' THEN 'https://www.artisan-en-ligne.com/artisan-dg-electricite-195290'
    WHEN name = 'ANTHONY DANTEN (EPO ELECTRICIENS DU PHARE OUEST)' AND city = 'Rennes' THEN 'https://app.dataprospects.fr/entreprises/MONSIEUR-ANTHONY-DANTEN/944145465'
    WHEN name = 'JEROME GUILLARD (L''ELECTRICIEN RENNAIS)' AND city = 'Rennes' THEN 'https://lelectricienrennais.com/'
    WHEN name = 'SA D''HLM  AIGUILLON CONSTRUCTION' AND city = 'Rennes' THEN 'https://www.aiguillon-construction.fr/'
    WHEN name = 'IRISOLARIS CONSTRUCTION' AND city = 'Rennes' THEN 'https://irisolaris.com/'
    WHEN name = 'DBL CONSTRUCTIONS' AND city = 'Rennes' THEN 'https://www.dblconstructions.fr/'
    WHEN name = 'ESPERANCE SPORTS & LOISIRS BECHEREL' AND city = 'Rennes' THEN 'https://www.helloasso.com/associations/esperance-sports-loisirs-becherel'
    WHEN name = 'ESPERANCE LA BOUEXIERE BADMINTON' AND city = 'Rennes' THEN 'https://badmintonesperance.weebly.com/'
    WHEN name = 'KERWATT (KERWATT S.A.S)' AND city = 'Rennes' THEN 'https://kerwatt.bzh/'
    WHEN name = 'THOMAS MONFRAIS' AND city = 'Rennes' THEN NULL
    WHEN name = 'VINCENT ROUSSEL (BREIZH RAMONE TA HUTTE)' AND city = 'Rennes' THEN 'https://breizhramonetahutte.fr/votre-professionnel-en-ramonage-et-entretien/'
    ELSE website
  END,
  "score" = CASE
    WHEN name = 'AVEC RESTAURANT' AND city = 'Rennes' THEN 35
    WHEN name = 'RACINES RESTAURANT' AND city = 'Rennes' THEN 35
    WHEN name = 'SB RESTAURANT (SB CONSULT RESTAURANT)' AND city = 'Rennes' THEN 65
    WHEN name = 'RESTAURANT L''OUVREE' AND city = 'Rennes' THEN 65
    WHEN name = 'RESTAURANT ZEST (RESTAURANT ZEST)' AND city = 'Rennes' THEN 30
    WHEN name = 'BUAIS RESTAURANT' AND city = 'Rennes' THEN 60
    WHEN name = 'RESTAURANT  LUCA' AND city = 'Rennes' THEN 25
    WHEN name = 'TI''MI BOULANGERIE PATISSERIE' AND city = 'Rennes' THEN 55
    WHEN name = 'LA BOULANGERIE D''ARMOR' AND city = 'Rennes' THEN 25
    WHEN name = 'BOULANGERIE GEFFRAY (BOULANGERIE GEFFRAY)' AND city = 'Rennes' THEN 55
    WHEN name = 'SOC INTERP ARTISAN GARANTIE INVESTISSE (SIAGI)' AND city = 'Rennes' THEN 25
    WHEN name = 'ARTISAN COIFFEUR' AND city = 'Rennes' THEN 25
    WHEN name = 'KARMA COIFFEUR' AND city = 'Rennes' THEN 25
    WHEN name = 'VALATELIER (L''ATELIER DES COIFFEURS)' AND city = 'Rennes' THEN 25
    WHEN name = 'PLEDEX (COIFFEUR & COMPAGNIE)' AND city = 'Rennes' THEN 25
    WHEN name = 'RAPHATELIER (ATELIER DES COIFFEURS)' AND city = 'Rennes' THEN 55
    WHEN name = '3ARTS (L''OFFICINE ARTISAN COIFFEUR)' AND city = 'Rennes' THEN 25
    WHEN name = 'BUREAU VERITAS CONSTRUCTION' AND city = 'Rennes' THEN 25
    WHEN name = 'APAVE INFRASTRUCTURES ET CONSTRUCTION FRANCE' AND city = 'Rennes' THEN 25
    WHEN name = 'CERUTTI CONSTRUCTION' AND city = 'Rennes' THEN 25
    WHEN name = 'MORTIER CONSTRUCTION' AND city = 'Rennes' THEN 25
    WHEN name = 'ALTA CONSTRUCTIONS' AND city = 'Rennes' THEN 25
    WHEN name = 'EIFFAGE CONSTRUCTION BRETAGNE (ECB)' AND city = 'Rennes' THEN 25
    WHEN name = 'PAINT CONCEPT CONSTRUCTION' AND city = 'Rennes' THEN 25
    WHEN name = 'INGENIERIE CONCEPT ET CONSTRUCTION' AND city = 'Rennes' THEN 25
    WHEN name = 'FOOTBALL CLUB DE GUIPRY MESSAC (FCGM)' AND city = 'Rennes' THEN 25
    WHEN name = 'CLUB OMNISPORTS DU SUD VILAINE' AND city = 'Rennes' THEN 25
    WHEN name = 'GROUPEMENT DES JEUNES DU BOCAGE FOUGERAIS' AND city = 'Rennes' THEN 25
    WHEN name = 'HOTEL RESTAURANT LE MAUPAS' AND city = 'Rennes' THEN 20
    WHEN name = 'BOULANGERIE NEUHAUSER' AND city = 'Rennes' THEN 20
    WHEN name = 'LA BOULANGERIE DUMANT' AND city = 'Rennes' THEN 50
    WHEN name = 'BOULANGERIE DESMARIEUX FILS' AND city = 'Rennes' THEN 20
    WHEN name = 'BOULANGERIE B' AND city = 'Rennes' THEN 20
    WHEN name = 'LA BOULANGERIE D''A COTE' AND city = 'Rennes' THEN 20
    WHEN name = 'SARL GEM BOULANGERIE (MAISON GUICHARD)' AND city = 'Rennes' THEN 50
    WHEN name = 'BOULANGERIE VANDAME' AND city = 'Rennes' THEN 20
    WHEN name = 'LE PETIT ALBERT COIFFEUR (LE PETIT ALBERT)' AND city = 'Rennes' THEN 20
    WHEN name = '14 NEMOURS (COIFFEUR & COMPAGNIE)' AND city = 'Rennes' THEN 20
    WHEN name = 'ELLA (LA CABANE DU COIFFEUR)' AND city = 'Rennes' THEN 50
    WHEN name = 'HOLDING PACE' AND city = 'Rennes' THEN 20
    WHEN name = 'OUEST ECO CONSTRUCTION' AND city = 'Rennes' THEN 20
    WHEN name = 'UNION NATIONALE DES INDUSTRIES DE CARRIERES ET MATERIAUX DE CONSTRUCTION (UNICEM)' AND city = 'Rennes' THEN 20
    WHEN name = 'CCL CONSTRUCTION' AND city = 'Rennes' THEN 20
    WHEN name = 'TONIC'' GYM GERMANAISE' AND city = 'Rennes' THEN 20
    WHEN name = 'SECTION GYMNASTIQUE VOLONTAIRE BAIS' AND city = 'Rennes' THEN 20
    WHEN name = 'VOLLEY BALL CLUB DE GUICHEN' AND city = 'Rennes' THEN 20
    WHEN name = 'AMICALE SPORTIVE NOYALAISE' AND city = 'Rennes' THEN 20
    WHEN name = 'AMICALE LAIQUE PLEURTUIT' AND city = 'Rennes' THEN 20
    WHEN name = 'O''TACOS RESTAURANT I' AND city = 'Rennes' THEN 15
    WHEN name = 'PONTIVY RESTAURANT' AND city = 'Rennes' THEN 15
    WHEN name = 'RESTAURANT DE L''ETANG' AND city = 'Rennes' THEN 15
    WHEN name = 'RESTAURANT DES BOIS' AND city = 'Rennes' THEN 15
    WHEN name = 'AS DU RESTAURANT (BAR BRASSERIE DE LA MAIRIE)' AND city = 'Rennes' THEN 15
    WHEN name = 'SUWON RESTAURANT' AND city = 'Rennes' THEN 15
    WHEN name = 'RESTAURANT LE TROQUET' AND city = 'Rennes' THEN 15
    WHEN name = 'MONDIAL RESTAURANT' AND city = 'Rennes' THEN 15
    WHEN name = 'RESTAURANT LA VILLE CODET' AND city = 'Rennes' THEN 45
    WHEN name = 'SARL KAYS RESTAURANT (KEBAB DU LANDEL)' AND city = 'Rennes' THEN 45
    WHEN name = 'LE FUN BAR RESTAURANT (LA GUINGUETTE DE SAINT JACUT)' AND city = 'Rennes' THEN 15
    WHEN name = 'BOULANGERIES BG (B B G)' AND city = 'Rennes' THEN 15
    WHEN name = 'BOULANGERIE HALLIER' AND city = 'Rennes' THEN 15
    WHEN name = 'BOULANGERIE AU FEU DE BOIS (BOULANGERIE AU FEU DE BOIS)' AND city = 'Rennes' THEN 15
    WHEN name = 'BOULANGERIE CLOUARD' AND city = 'Rennes' THEN 15
    WHEN name = 'BOULANGERIE LE DIODIC' AND city = 'Rennes' THEN 45
    WHEN name = 'ELITE ARTISAN' AND city = 'Rennes' THEN 45
    WHEN name = 'LES ARTISANES' AND city = 'Rennes' THEN 45
    WHEN name = 'LES ARTISANS COIFFEURS (LES ARTISANS COIFFEURS)' AND city = 'Rennes' THEN 45
    WHEN name = 'LE QUAI DES ARTISANS (LE QUAI DES ARTISANS)' AND city = 'Rennes' THEN 15
    WHEN name = 'AUX ARTISANS CREATEURS' AND city = 'Rennes' THEN 15
    WHEN name = 'LE COIFFEUR (LE COIFFEUR)' AND city = 'Rennes' THEN 45
    WHEN name = 'RIM COIFFEUR (RIM COIFFEUR)' AND city = 'Rennes' THEN 45
    WHEN name = 'COIFFEUR NUMERO 1 (COIFFEUR NUMERO 1)' AND city = 'Rennes' THEN 45
    WHEN name = 'COIFFEUR N 1' AND city = 'Rennes' THEN 45
    WHEN name = 'HAPPY CURL' AND city = 'Rennes' THEN 15
    WHEN name = 'NATHALIE DESMONTS (NE ARTISAN COIFFEUR)' AND city = 'Rennes' THEN 45
    WHEN name = 'S.P.' AND city = 'Rennes' THEN 15
    WHEN name = 'CHAFAA NAIT MAMMAR (CHAFAA COIFFEUR BARBIER)' AND city = 'Rennes' THEN 15
    WHEN name = 'LE SOURIRE DU PLOMBIER' AND city = 'Rennes' THEN 15
    WHEN name = 'GROUPEMENT DES ARTISANS PLOMBIERS CHAUFFAGISTES ELECTRICIENS D''ILLE ET VILAINE (G.P.A.C. 35)' AND city = 'Rennes' THEN 15
    WHEN name = 'ARTISAN ELECTRICIEN RUELLAN (ARTISAN ELECTRICIEN RUELLAN) (AER)' AND city = 'Rennes' THEN 15
    WHEN name = 'SOCOTEC CONSTRUCTION' AND city = 'Rennes' THEN 15
    WHEN name = 'POLYEXPERT CONSTRUCTION' AND city = 'Rennes' THEN 15
    WHEN name = 'CONSTRUCTEL CONSTRUCTIONS TELECOMMUNICA.' AND city = 'Rennes' THEN 15
    WHEN name = 'OPERATEUR DE COMPETENCES DE LA CONSTRUCTION' AND city = 'Rennes' THEN 15
    WHEN name = '2LM CONSTRUCTIONS (2LM CONSTRUCTIONS)' AND city = 'Rennes' THEN 15
    WHEN name = 'ASS COM SPORTS LOISIRS CHAPELLE FOUG (ACSL)' AND city = 'Rennes' THEN 15
    WHEN name = 'COURIR A BAINS' AND city = 'Rennes' THEN 15
    WHEN name = 'YOGA BAZOUGES' AND city = 'Rennes' THEN 15
    WHEN name = 'ASS TENNIS GOVEN' AND city = 'Rennes' THEN 15
    WHEN name = 'ESPOIR IFFENDIC' AND city = 'Rennes' THEN 15
    WHEN name = 'AVANT GARDE DE TRESBOEUF' AND city = 'Rennes' THEN 15
    WHEN name = 'VOLLEY-CLUB DE JAVENE' AND city = 'Rennes' THEN 15
    WHEN name = 'GYM CLUB LA CHAPELLE THOUARAULT' AND city = 'Rennes' THEN 15
    WHEN name = 'GHIZLANE KHABBABI (MASSAGE DU MONDE)' AND city = 'Rennes' THEN 15
    WHEN name = 'JENNIFER BERTHELOT (KEBAIKAN MASSAGES BIEN-ETRE)' AND city = 'Rennes' THEN 15
    WHEN name = 'GWENAEL HERVE (HERVE) (GWENAEL HERVE MASSAGE BIEN ETRE)' AND city = 'Rennes' THEN 45
    WHEN name = 'MARION SIMON (MARION SIMON PRATICIENNE EN MASSAGES DE BIEN-ETRE)' AND city = 'Rennes' THEN 15
    WHEN name = 'PATRICE OUDARD (BIEN ETRE ET MASSAGES)' AND city = 'Rennes' THEN 15
    WHEN name = 'BOULANGERIE PASQUIER' AND city = 'Rennes' THEN 10
    WHEN name = 'BOULANGERIE ANTOINE' AND city = 'Rennes' THEN 10
    WHEN name = 'L''ARTISAN COULEURS' AND city = 'Rennes' THEN 10
    WHEN name = 'L''ARTISAN FORMATEUR' AND city = 'Rennes' THEN 40
    WHEN name = 'L''ARTISAN DE LA MAISON' AND city = 'Rennes' THEN 40
    WHEN name = 'CIMEO CONSTRUCTION' AND city = 'Rennes' THEN 10
    WHEN name = 'SOCIETE EUROPEENNE DE DEVELOPPEMENT DE RESTAURANTS ITALIENS (SEDRI)' AND city = 'Rennes' THEN 10
    WHEN name = 'BOULANGERIE PLEURTUIT' AND city = 'Rennes' THEN 10
    WHEN name = 'BOULANGERIE SAINT-MALO' AND city = 'Rennes' THEN 10
    WHEN name = 'BOULANGERIE DU PRIEURE' AND city = 'Rennes' THEN 10
    WHEN name = 'SCI DES ARTISANS' AND city = 'Rennes' THEN 35
    WHEN name = 'L''ARTISANE' AND city = 'Rennes' THEN 10
    WHEN name = 'L''ARTISAN (L''ARTISAN)' AND city = 'Rennes' THEN 10
    WHEN name = 'JBH DES ARTISANS' AND city = 'Rennes' THEN 10
    WHEN name = 'SCI LES ARTISANS' AND city = 'Rennes' THEN 10
    WHEN name = 'SCI DES ARTISANS' AND city = 'Rennes' THEN 10
    WHEN name = 'TERRES D''ARTISANS' AND city = 'Rennes' THEN 10
    WHEN name = 'TY'' ARTISANS' AND city = 'Rennes' THEN 10
    WHEN name = 'LES ARTISANS GOURMANDS' AND city = 'Rennes' THEN 10
    WHEN name = 'ARTISANS DU MONDE' AND city = 'Rennes' THEN 10
    WHEN name = 'MB COIFFEUR VISAGISTE' AND city = 'Rennes' THEN 10
    WHEN name = 'J-C LE PLOMBIER' AND city = 'Rennes' THEN 10
    WHEN name = 'MON PLOMBIER HUGO' AND city = 'Rennes' THEN 10
    WHEN name = 'LE PLOMBIER BRETON (LE PLOMBIER BRETON)' AND city = 'Rennes' THEN 10
    WHEN name = 'L''ATELIER DU PLOMBIER' AND city = 'Rennes' THEN 40
    WHEN name = 'LES ELECTRICIENS PLOMBIERS BRETONS' AND city = 'Rennes' THEN 10
    WHEN name = 'SIMON WERQUIN PLOMBIER - CHAUFFAGISTE (PCI PLOMBERIE CHAUFFAGE INTERVENTION) (SWPC)' AND city = 'Rennes' THEN 10
    WHEN name = 'MON PLOMBIER DEBOUCHEUR' AND city = 'Rennes' THEN 10
    WHEN name = 'ANSELMI ASSOCIES PLOMBIERS (AAP)' AND city = 'Rennes' THEN 10
    WHEN name = 'CHOLLET GWEN PLOMBIER CHAUFFAGISTE FRIGORIFISTE (CHOLLET GWEN PLOMBIER CHAUFFAGISTE FRIGORIFISTE)' AND city = 'Rennes' THEN 40
    WHEN name = 'ERWAN GEHIN (GEHIN PLOMBIER)' AND city = 'Rennes' THEN 10
    WHEN name = 'JEROME MALLARD (J.MALLARD PLOMBIER-CHAUFFAGISTE)' AND city = 'Rennes' THEN 10
    WHEN name = 'QUENTIN PERAN ([ND])' AND city = 'Rennes' THEN 40
    WHEN name = 'AS ELECTRICIEN' AND city = 'Rennes' THEN 10
    WHEN name = 'DG ARTISAN ELECTRICIEN' AND city = 'Rennes' THEN 10
    WHEN name = 'ANTHONY DANTEN (EPO ELECTRICIENS DU PHARE OUEST)' AND city = 'Rennes' THEN 10
    WHEN name = 'JEROME GUILLARD (L''ELECTRICIEN RENNAIS)' AND city = 'Rennes' THEN 10
    WHEN name = 'SA D''HLM  AIGUILLON CONSTRUCTION' AND city = 'Rennes' THEN 10
    WHEN name = 'IRISOLARIS CONSTRUCTION' AND city = 'Rennes' THEN 10
    WHEN name = 'DBL CONSTRUCTIONS' AND city = 'Rennes' THEN 10
    WHEN name = 'ESPERANCE SPORTS & LOISIRS BECHEREL' AND city = 'Rennes' THEN 10
    WHEN name = 'ESPERANCE LA BOUEXIERE BADMINTON' AND city = 'Rennes' THEN 10
    WHEN name = 'KERWATT (KERWATT S.A.S)' AND city = 'Rennes' THEN 10
    WHEN name = 'THOMAS MONFRAIS' AND city = 'Rennes' THEN 40
    WHEN name = 'VINCENT ROUSSEL (BREIZH RAMONE TA HUTTE)' AND city = 'Rennes' THEN 10
    ELSE "score"
  END,
  "webVisibilityScore" = CASE
    WHEN name = 'AVEC RESTAURANT' AND city = 'Rennes' THEN 35
    WHEN name = 'RACINES RESTAURANT' AND city = 'Rennes' THEN 35
    WHEN name = 'SB RESTAURANT (SB CONSULT RESTAURANT)' AND city = 'Rennes' THEN 65
    WHEN name = 'RESTAURANT L''OUVREE' AND city = 'Rennes' THEN 65
    WHEN name = 'RESTAURANT ZEST (RESTAURANT ZEST)' AND city = 'Rennes' THEN 30
    WHEN name = 'BUAIS RESTAURANT' AND city = 'Rennes' THEN 60
    WHEN name = 'RESTAURANT  LUCA' AND city = 'Rennes' THEN 25
    WHEN name = 'TI''MI BOULANGERIE PATISSERIE' AND city = 'Rennes' THEN 55
    WHEN name = 'LA BOULANGERIE D''ARMOR' AND city = 'Rennes' THEN 25
    WHEN name = 'BOULANGERIE GEFFRAY (BOULANGERIE GEFFRAY)' AND city = 'Rennes' THEN 55
    WHEN name = 'SOC INTERP ARTISAN GARANTIE INVESTISSE (SIAGI)' AND city = 'Rennes' THEN 25
    WHEN name = 'ARTISAN COIFFEUR' AND city = 'Rennes' THEN 25
    WHEN name = 'KARMA COIFFEUR' AND city = 'Rennes' THEN 25
    WHEN name = 'VALATELIER (L''ATELIER DES COIFFEURS)' AND city = 'Rennes' THEN 25
    WHEN name = 'PLEDEX (COIFFEUR & COMPAGNIE)' AND city = 'Rennes' THEN 25
    WHEN name = 'RAPHATELIER (ATELIER DES COIFFEURS)' AND city = 'Rennes' THEN 55
    WHEN name = '3ARTS (L''OFFICINE ARTISAN COIFFEUR)' AND city = 'Rennes' THEN 25
    WHEN name = 'BUREAU VERITAS CONSTRUCTION' AND city = 'Rennes' THEN 25
    WHEN name = 'APAVE INFRASTRUCTURES ET CONSTRUCTION FRANCE' AND city = 'Rennes' THEN 25
    WHEN name = 'CERUTTI CONSTRUCTION' AND city = 'Rennes' THEN 25
    WHEN name = 'MORTIER CONSTRUCTION' AND city = 'Rennes' THEN 25
    WHEN name = 'ALTA CONSTRUCTIONS' AND city = 'Rennes' THEN 25
    WHEN name = 'EIFFAGE CONSTRUCTION BRETAGNE (ECB)' AND city = 'Rennes' THEN 25
    WHEN name = 'PAINT CONCEPT CONSTRUCTION' AND city = 'Rennes' THEN 25
    WHEN name = 'INGENIERIE CONCEPT ET CONSTRUCTION' AND city = 'Rennes' THEN 25
    WHEN name = 'FOOTBALL CLUB DE GUIPRY MESSAC (FCGM)' AND city = 'Rennes' THEN 25
    WHEN name = 'CLUB OMNISPORTS DU SUD VILAINE' AND city = 'Rennes' THEN 25
    WHEN name = 'GROUPEMENT DES JEUNES DU BOCAGE FOUGERAIS' AND city = 'Rennes' THEN 25
    WHEN name = 'HOTEL RESTAURANT LE MAUPAS' AND city = 'Rennes' THEN 20
    WHEN name = 'BOULANGERIE NEUHAUSER' AND city = 'Rennes' THEN 20
    WHEN name = 'LA BOULANGERIE DUMANT' AND city = 'Rennes' THEN 50
    WHEN name = 'BOULANGERIE DESMARIEUX FILS' AND city = 'Rennes' THEN 20
    WHEN name = 'BOULANGERIE B' AND city = 'Rennes' THEN 20
    WHEN name = 'LA BOULANGERIE D''A COTE' AND city = 'Rennes' THEN 20
    WHEN name = 'SARL GEM BOULANGERIE (MAISON GUICHARD)' AND city = 'Rennes' THEN 50
    WHEN name = 'BOULANGERIE VANDAME' AND city = 'Rennes' THEN 20
    WHEN name = 'LE PETIT ALBERT COIFFEUR (LE PETIT ALBERT)' AND city = 'Rennes' THEN 20
    WHEN name = '14 NEMOURS (COIFFEUR & COMPAGNIE)' AND city = 'Rennes' THEN 20
    WHEN name = 'ELLA (LA CABANE DU COIFFEUR)' AND city = 'Rennes' THEN 50
    WHEN name = 'HOLDING PACE' AND city = 'Rennes' THEN 20
    WHEN name = 'OUEST ECO CONSTRUCTION' AND city = 'Rennes' THEN 20
    WHEN name = 'UNION NATIONALE DES INDUSTRIES DE CARRIERES ET MATERIAUX DE CONSTRUCTION (UNICEM)' AND city = 'Rennes' THEN 20
    WHEN name = 'CCL CONSTRUCTION' AND city = 'Rennes' THEN 20
    WHEN name = 'TONIC'' GYM GERMANAISE' AND city = 'Rennes' THEN 20
    WHEN name = 'SECTION GYMNASTIQUE VOLONTAIRE BAIS' AND city = 'Rennes' THEN 20
    WHEN name = 'VOLLEY BALL CLUB DE GUICHEN' AND city = 'Rennes' THEN 20
    WHEN name = 'AMICALE SPORTIVE NOYALAISE' AND city = 'Rennes' THEN 20
    WHEN name = 'AMICALE LAIQUE PLEURTUIT' AND city = 'Rennes' THEN 20
    WHEN name = 'O''TACOS RESTAURANT I' AND city = 'Rennes' THEN 15
    WHEN name = 'PONTIVY RESTAURANT' AND city = 'Rennes' THEN 15
    WHEN name = 'RESTAURANT DE L''ETANG' AND city = 'Rennes' THEN 15
    WHEN name = 'RESTAURANT DES BOIS' AND city = 'Rennes' THEN 15
    WHEN name = 'AS DU RESTAURANT (BAR BRASSERIE DE LA MAIRIE)' AND city = 'Rennes' THEN 15
    WHEN name = 'SUWON RESTAURANT' AND city = 'Rennes' THEN 15
    WHEN name = 'RESTAURANT LE TROQUET' AND city = 'Rennes' THEN 15
    WHEN name = 'MONDIAL RESTAURANT' AND city = 'Rennes' THEN 15
    WHEN name = 'RESTAURANT LA VILLE CODET' AND city = 'Rennes' THEN 45
    WHEN name = 'SARL KAYS RESTAURANT (KEBAB DU LANDEL)' AND city = 'Rennes' THEN 45
    WHEN name = 'LE FUN BAR RESTAURANT (LA GUINGUETTE DE SAINT JACUT)' AND city = 'Rennes' THEN 15
    WHEN name = 'BOULANGERIES BG (B B G)' AND city = 'Rennes' THEN 15
    WHEN name = 'BOULANGERIE HALLIER' AND city = 'Rennes' THEN 15
    WHEN name = 'BOULANGERIE AU FEU DE BOIS (BOULANGERIE AU FEU DE BOIS)' AND city = 'Rennes' THEN 15
    WHEN name = 'BOULANGERIE CLOUARD' AND city = 'Rennes' THEN 15
    WHEN name = 'BOULANGERIE LE DIODIC' AND city = 'Rennes' THEN 45
    WHEN name = 'ELITE ARTISAN' AND city = 'Rennes' THEN 45
    WHEN name = 'LES ARTISANES' AND city = 'Rennes' THEN 45
    WHEN name = 'LES ARTISANS COIFFEURS (LES ARTISANS COIFFEURS)' AND city = 'Rennes' THEN 45
    WHEN name = 'LE QUAI DES ARTISANS (LE QUAI DES ARTISANS)' AND city = 'Rennes' THEN 15
    WHEN name = 'AUX ARTISANS CREATEURS' AND city = 'Rennes' THEN 15
    WHEN name = 'LE COIFFEUR (LE COIFFEUR)' AND city = 'Rennes' THEN 45
    WHEN name = 'RIM COIFFEUR (RIM COIFFEUR)' AND city = 'Rennes' THEN 45
    WHEN name = 'COIFFEUR NUMERO 1 (COIFFEUR NUMERO 1)' AND city = 'Rennes' THEN 45
    WHEN name = 'COIFFEUR N 1' AND city = 'Rennes' THEN 45
    WHEN name = 'HAPPY CURL' AND city = 'Rennes' THEN 15
    WHEN name = 'NATHALIE DESMONTS (NE ARTISAN COIFFEUR)' AND city = 'Rennes' THEN 45
    WHEN name = 'S.P.' AND city = 'Rennes' THEN 15
    WHEN name = 'CHAFAA NAIT MAMMAR (CHAFAA COIFFEUR BARBIER)' AND city = 'Rennes' THEN 15
    WHEN name = 'LE SOURIRE DU PLOMBIER' AND city = 'Rennes' THEN 15
    WHEN name = 'GROUPEMENT DES ARTISANS PLOMBIERS CHAUFFAGISTES ELECTRICIENS D''ILLE ET VILAINE (G.P.A.C. 35)' AND city = 'Rennes' THEN 15
    WHEN name = 'ARTISAN ELECTRICIEN RUELLAN (ARTISAN ELECTRICIEN RUELLAN) (AER)' AND city = 'Rennes' THEN 15
    WHEN name = 'SOCOTEC CONSTRUCTION' AND city = 'Rennes' THEN 15
    WHEN name = 'POLYEXPERT CONSTRUCTION' AND city = 'Rennes' THEN 15
    WHEN name = 'CONSTRUCTEL CONSTRUCTIONS TELECOMMUNICA.' AND city = 'Rennes' THEN 15
    WHEN name = 'OPERATEUR DE COMPETENCES DE LA CONSTRUCTION' AND city = 'Rennes' THEN 15
    WHEN name = '2LM CONSTRUCTIONS (2LM CONSTRUCTIONS)' AND city = 'Rennes' THEN 15
    WHEN name = 'ASS COM SPORTS LOISIRS CHAPELLE FOUG (ACSL)' AND city = 'Rennes' THEN 15
    WHEN name = 'COURIR A BAINS' AND city = 'Rennes' THEN 15
    WHEN name = 'YOGA BAZOUGES' AND city = 'Rennes' THEN 15
    WHEN name = 'ASS TENNIS GOVEN' AND city = 'Rennes' THEN 15
    WHEN name = 'ESPOIR IFFENDIC' AND city = 'Rennes' THEN 15
    WHEN name = 'AVANT GARDE DE TRESBOEUF' AND city = 'Rennes' THEN 15
    WHEN name = 'VOLLEY-CLUB DE JAVENE' AND city = 'Rennes' THEN 15
    WHEN name = 'GYM CLUB LA CHAPELLE THOUARAULT' AND city = 'Rennes' THEN 15
    WHEN name = 'GHIZLANE KHABBABI (MASSAGE DU MONDE)' AND city = 'Rennes' THEN 15
    WHEN name = 'JENNIFER BERTHELOT (KEBAIKAN MASSAGES BIEN-ETRE)' AND city = 'Rennes' THEN 15
    WHEN name = 'GWENAEL HERVE (HERVE) (GWENAEL HERVE MASSAGE BIEN ETRE)' AND city = 'Rennes' THEN 45
    WHEN name = 'MARION SIMON (MARION SIMON PRATICIENNE EN MASSAGES DE BIEN-ETRE)' AND city = 'Rennes' THEN 15
    WHEN name = 'PATRICE OUDARD (BIEN ETRE ET MASSAGES)' AND city = 'Rennes' THEN 15
    WHEN name = 'BOULANGERIE PASQUIER' AND city = 'Rennes' THEN 10
    WHEN name = 'BOULANGERIE ANTOINE' AND city = 'Rennes' THEN 10
    WHEN name = 'L''ARTISAN COULEURS' AND city = 'Rennes' THEN 10
    WHEN name = 'L''ARTISAN FORMATEUR' AND city = 'Rennes' THEN 40
    WHEN name = 'L''ARTISAN DE LA MAISON' AND city = 'Rennes' THEN 40
    WHEN name = 'CIMEO CONSTRUCTION' AND city = 'Rennes' THEN 10
    WHEN name = 'SOCIETE EUROPEENNE DE DEVELOPPEMENT DE RESTAURANTS ITALIENS (SEDRI)' AND city = 'Rennes' THEN 10
    WHEN name = 'BOULANGERIE PLEURTUIT' AND city = 'Rennes' THEN 10
    WHEN name = 'BOULANGERIE SAINT-MALO' AND city = 'Rennes' THEN 10
    WHEN name = 'BOULANGERIE DU PRIEURE' AND city = 'Rennes' THEN 10
    WHEN name = 'SCI DES ARTISANS' AND city = 'Rennes' THEN 35
    WHEN name = 'L''ARTISANE' AND city = 'Rennes' THEN 10
    WHEN name = 'L''ARTISAN (L''ARTISAN)' AND city = 'Rennes' THEN 10
    WHEN name = 'JBH DES ARTISANS' AND city = 'Rennes' THEN 10
    WHEN name = 'SCI LES ARTISANS' AND city = 'Rennes' THEN 10
    WHEN name = 'SCI DES ARTISANS' AND city = 'Rennes' THEN 10
    WHEN name = 'TERRES D''ARTISANS' AND city = 'Rennes' THEN 10
    WHEN name = 'TY'' ARTISANS' AND city = 'Rennes' THEN 10
    WHEN name = 'LES ARTISANS GOURMANDS' AND city = 'Rennes' THEN 10
    WHEN name = 'ARTISANS DU MONDE' AND city = 'Rennes' THEN 10
    WHEN name = 'MB COIFFEUR VISAGISTE' AND city = 'Rennes' THEN 10
    WHEN name = 'J-C LE PLOMBIER' AND city = 'Rennes' THEN 10
    WHEN name = 'MON PLOMBIER HUGO' AND city = 'Rennes' THEN 10
    WHEN name = 'LE PLOMBIER BRETON (LE PLOMBIER BRETON)' AND city = 'Rennes' THEN 10
    WHEN name = 'L''ATELIER DU PLOMBIER' AND city = 'Rennes' THEN 40
    WHEN name = 'LES ELECTRICIENS PLOMBIERS BRETONS' AND city = 'Rennes' THEN 10
    WHEN name = 'SIMON WERQUIN PLOMBIER - CHAUFFAGISTE (PCI PLOMBERIE CHAUFFAGE INTERVENTION) (SWPC)' AND city = 'Rennes' THEN 10
    WHEN name = 'MON PLOMBIER DEBOUCHEUR' AND city = 'Rennes' THEN 10
    WHEN name = 'ANSELMI ASSOCIES PLOMBIERS (AAP)' AND city = 'Rennes' THEN 10
    WHEN name = 'CHOLLET GWEN PLOMBIER CHAUFFAGISTE FRIGORIFISTE (CHOLLET GWEN PLOMBIER CHAUFFAGISTE FRIGORIFISTE)' AND city = 'Rennes' THEN 40
    WHEN name = 'ERWAN GEHIN (GEHIN PLOMBIER)' AND city = 'Rennes' THEN 10
    WHEN name = 'JEROME MALLARD (J.MALLARD PLOMBIER-CHAUFFAGISTE)' AND city = 'Rennes' THEN 10
    WHEN name = 'QUENTIN PERAN ([ND])' AND city = 'Rennes' THEN 40
    WHEN name = 'AS ELECTRICIEN' AND city = 'Rennes' THEN 10
    WHEN name = 'DG ARTISAN ELECTRICIEN' AND city = 'Rennes' THEN 10
    WHEN name = 'ANTHONY DANTEN (EPO ELECTRICIENS DU PHARE OUEST)' AND city = 'Rennes' THEN 10
    WHEN name = 'JEROME GUILLARD (L''ELECTRICIEN RENNAIS)' AND city = 'Rennes' THEN 10
    WHEN name = 'SA D''HLM  AIGUILLON CONSTRUCTION' AND city = 'Rennes' THEN 10
    WHEN name = 'IRISOLARIS CONSTRUCTION' AND city = 'Rennes' THEN 10
    WHEN name = 'DBL CONSTRUCTIONS' AND city = 'Rennes' THEN 10
    WHEN name = 'ESPERANCE SPORTS & LOISIRS BECHEREL' AND city = 'Rennes' THEN 10
    WHEN name = 'ESPERANCE LA BOUEXIERE BADMINTON' AND city = 'Rennes' THEN 10
    WHEN name = 'KERWATT (KERWATT S.A.S)' AND city = 'Rennes' THEN 10
    WHEN name = 'THOMAS MONFRAIS' AND city = 'Rennes' THEN 40
    WHEN name = 'VINCENT ROUSSEL (BREIZH RAMONE TA HUTTE)' AND city = 'Rennes' THEN 10
    ELSE "webVisibilityScore"
  END
WHERE city = 'Rennes';