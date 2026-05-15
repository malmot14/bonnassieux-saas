-- UPDATE enrichment for Paris (153 prospects)
UPDATE "prospectsPotentiels" SET
  "hasWebsite" = CASE
    WHEN name = 'RESTAURANT ALENCON' AND city = 'Paris' THEN true
    WHEN name = 'M T COIFFEUR' AND city = 'Paris' THEN false
    WHEN name = 'DEUX RESTAURANT' AND city = 'Paris' THEN true
    WHEN name = 'BOULANGERIES PAUL' AND city = 'Paris' THEN true
    WHEN name = 'BOULANGERIE DU NIL' AND city = 'Paris' THEN false
    WHEN name = 'BOULANGERIE CHAMBELLAND' AND city = 'Paris' THEN true
    WHEN name = 'BOULANGERIE DE LA ROTONDE' AND city = 'Paris' THEN true
    WHEN name = 'BOULANGERIE MOZART (BOULANGERIE MOZART)' AND city = 'Paris' THEN true
    WHEN name = 'BOULANGERIE ALEXINE' AND city = 'Paris' THEN true
    WHEN name = 'LA BOULANGERIE' AND city = 'Paris' THEN true
    WHEN name = 'MEILLEUR COIFFEUR (MEILLEUR COIFFEUR)' AND city = 'Paris' THEN true
    WHEN name = 'BELGRAND COIFFEUR' AND city = 'Paris' THEN true
    WHEN name = 'LES COIFFEURS DU FAUBOURG' AND city = 'Paris' THEN true
    WHEN name = 'SUPER COIFFEUR' AND city = 'Paris' THEN false
    WHEN name = 'AXEL COIFFEUR (BL COIFFURES)' AND city = 'Paris' THEN false
    WHEN name = 'TAREK COIFFEUR (TAREK COIFFEUR)' AND city = 'Paris' THEN true
    WHEN name = 'COIFFEUR K.R.' AND city = 'Paris' THEN true
    WHEN name = 'ABISHA COIFFEUR' AND city = 'Paris' THEN false
    WHEN name = 'FEDERATION FRANCAISE DES INTEGRATEURS ELECTRICIENS (F.F.I.E.)' AND city = 'Paris' THEN true
    WHEN name = 'LOCKROY CONSTRUCTION (LOCKROY CONSTRUCTION)' AND city = 'Paris' THEN true
    WHEN name = 'CT CONSTRUCTION (CTC)' AND city = 'Paris' THEN true
    WHEN name = 'JKR RESTAURANT (JKR RESTAURANT)' AND city = 'Paris' THEN true
    WHEN name = 'BOULANGERIE NEUHAUSER' AND city = 'Paris' THEN true
    WHEN name = '1982 COIFFEUR' AND city = 'Paris' THEN false
    WHEN name = 'CF COIFFEURS' AND city = 'Paris' THEN true
    WHEN name = 'COIFFEUR 1919' AND city = 'Paris' THEN false
    WHEN name = 'COIFFEUR PARISIEN' AND city = 'Paris' THEN true
    WHEN name = 'BEBAWI COIFFEUR' AND city = 'Paris' THEN false
    WHEN name = 'PRINCE COIFFEUR' AND city = 'Paris' THEN true
    WHEN name = 'LES BONS PLOMBIERS (LES BONS PLOMBIERS)' AND city = 'Paris' THEN true
    WHEN name = 'C LE PLOMBIER' AND city = 'Paris' THEN true
    WHEN name = 'GAGNERAUD CONSTRUCTION' AND city = 'Paris' THEN true
    WHEN name = 'AMARENCO CONSTRUCTION' AND city = 'Paris' THEN true
    WHEN name = 'SOCIETE D ETUDES ET DE REALISATION DE GESTION IMMOBILIERE DE CONSTRUCTION (SERGIC)' AND city = 'Paris' THEN false
    WHEN name = 'GIE GAM RESTAURANT' AND city = 'Paris' THEN false
    WHEN name = 'LES RESTAURANTS DU COEUR' AND city = 'Paris' THEN true
    WHEN name = 'TORTILLA RESTAURANTS SAS' AND city = 'Paris' THEN true
    WHEN name = 'DK RESTAURANTS' AND city = 'Paris' THEN true
    WHEN name = 'BIG MAMMA RESTAURANTS FRANCE' AND city = 'Paris' THEN true
    WHEN name = 'SMR RESTAURANT (LA GOYAVE)' AND city = 'Paris' THEN false
    WHEN name = 'NMP RESTAURANTS (EPHEMERE)' AND city = 'Paris' THEN true
    WHEN name = 'O''TACOS RESTAURANT I' AND city = 'Paris' THEN true
    WHEN name = 'RESTAURANT TERANGA' AND city = 'Paris' THEN false
    WHEN name = 'BOULANGERIE CHARCOT' AND city = 'Paris' THEN true
    WHEN name = 'LA BOULANGERIE' AND city = 'Paris' THEN true
    WHEN name = 'ARTISANS MULTISERVICES DES YVELINES (ETABLISSEMENTS FONTAINE PERE ET FILS)' AND city = 'Paris' THEN false
    WHEN name = 'LES ARTISANS RECUPERATEURS (ARTIREC)' AND city = 'Paris' THEN false
    WHEN name = 'LES ARTISANS DU TEMPS' AND city = 'Paris' THEN true
    WHEN name = 'COIFFEUR DU MONDE' AND city = 'Paris' THEN false
    WHEN name = 'LA CABANES ET LES COIFFEURS (LA CABANE ET LES COIFFEURS)' AND city = 'Paris' THEN true
    WHEN name = 'SAI COIFFEUR (SAI COIFFEUR)' AND city = 'Paris' THEN true
    WHEN name = 'COIFFEUR STREET' AND city = 'Paris' THEN true
    WHEN name = 'PLOMBIER AUTOUR DE MOI' AND city = 'Paris' THEN true
    WHEN name = 'SEE ELECTRICIEN ELECTRONICIEN (SEE)' AND city = 'Paris' THEN true
    WHEN name = 'POLYEXPERT CONSTRUCTION' AND city = 'Paris' THEN true
    WHEN name = 'CONSTRUCTEL CONSTRUCTIONS TELECOMMUNICA.' AND city = 'Paris' THEN true
    WHEN name = 'OPERATEUR DE COMPETENCES DE LA CONSTRUCTION' AND city = 'Paris' THEN true
    WHEN name = 'ASS CULT SPORT JEAN BAPTISTE DE LA SALLE' AND city = 'Paris' THEN true
    WHEN name = 'L''UNIVERS DE L''OSTEO-MASSAGE : LA COMPAGNIE DU BIEN-ETRE' AND city = 'Paris' THEN true
    WHEN name = 'AIDA OUERIEMMI (MASSAGE BIEN ETRE)' AND city = 'Paris' THEN false
    WHEN name = 'ROBIN NADAL (ROBIN NADAL MASSAGE BIEN ETRE)' AND city = 'Paris' THEN true
    WHEN name = 'HERVE RUPPIN (H14 MASSAGE SPORT & BIEN-ETRE)' AND city = 'Paris' THEN false
    WHEN name = 'THIERRY HOCHART' AND city = 'Paris' THEN true
    WHEN name = 'DIMITRI RAVON (LE REPOS DES CHAKRAS - MASSAGE BIEN-ETRE)' AND city = 'Paris' THEN true
    WHEN name = 'TAIB EAID (TAIB MASSAGES BIEN ETRE)' AND city = 'Paris' THEN true
    WHEN name = 'GAELLE DUCHEMIN (GAELLE MASSAGE BIEN-ETRE)' AND city = 'Paris' THEN true
    WHEN name = 'BOULANGERIE LORETTE (LORETTE BAC)' AND city = 'Paris' THEN true
    WHEN name = 'BOULANGERIE TARDIF' AND city = 'Paris' THEN true
    WHEN name = 'BOULANGERIE C&M' AND city = 'Paris' THEN true
    WHEN name = 'ARTISAN BRUNO' AND city = 'Paris' THEN true
    WHEN name = 'ARTISANS BERNARD & SILVESTRE (ARTISANS BERNARD ET SYLVESTRE)' AND city = 'Paris' THEN true
    WHEN name = 'PLOMBIER REGIS (PLOMBIER REGIS)' AND city = 'Paris' THEN true
    WHEN name = 'GREEN PLOMBIER' AND city = 'Paris' THEN false
    WHEN name = 'LES ELECTRICIENS DU PERCHE' AND city = 'Paris' THEN false
    WHEN name = 'ARTISAN ELECTRICIEN FOLLIOT' AND city = 'Paris' THEN true
    WHEN name = 'ELECTRICIEN A VOTRE SERVICE' AND city = 'Paris' THEN true
    WHEN name = 'FEDERATION FRANCAISE DU MASSAGE BIEN ETRE (FFMBE)' AND city = 'Paris' THEN true
    WHEN name = 'BALM RESTAURANT' AND city = 'Paris' THEN true
    WHEN name = 'RESTAURANT CHARLY' AND city = 'Paris' THEN true
    WHEN name = 'SOCIETE FRANCAISE D''EXPLOITATION DE RESTAURANT (SO.FE.REST.) (SOFEREST)' AND city = 'Paris' THEN false
    WHEN name = 'LES RESTAURANTS BISTROT SOLEIL' AND city = 'Paris' THEN true
    WHEN name = 'TEAM RESTAURANT' AND city = 'Paris' THEN true
    WHEN name = 'RESTAURANT ARTIGIANALE' AND city = 'Paris' THEN true
    WHEN name = 'VERT RESTAURANT' AND city = 'Paris' THEN true
    WHEN name = 'LE 360 RESTAURANT' AND city = 'Paris' THEN true
    WHEN name = 'LA BOULANGERIE' AND city = 'Paris' THEN true
    WHEN name = 'LA BOULANGERIE PLEYEL' AND city = 'Paris' THEN false
    WHEN name = 'BOULANGERIE DES DAMES' AND city = 'Paris' THEN true
    WHEN name = 'CINNAMON BOULANGERIE' AND city = 'Paris' THEN true
    WHEN name = 'LA BOULANGERIE' AND city = 'Paris' THEN true
    WHEN name = 'DES BOULANGERIES' AND city = 'Paris' THEN false
    WHEN name = 'BOULANGERIE HAUSSMANN' AND city = 'Paris' THEN true
    WHEN name = 'ARTISAN ROUSSEAU' AND city = 'Paris' THEN true
    WHEN name = 'LES ARTISANS DU PORTAIL (ARTISAN DU COIN)' AND city = 'Paris' THEN true
    WHEN name = 'ARTISANS MULTISERVICES' AND city = 'Paris' THEN true
    WHEN name = 'ARTISAN BERTRAND' AND city = 'Paris' THEN true
    WHEN name = 'ARTISAN ROBERT (ARTISAN ROBERT)' AND city = 'Paris' THEN true
    WHEN name = 'FRANCE ARTISAN' AND city = 'Paris' THEN false
    WHEN name = 'ARTISANS DEPANNAGE SERVICE (ADS)' AND city = 'Paris' THEN true
    WHEN name = 'AU CARREFOUR DES ARTISANS (A.C.A)' AND city = 'Paris' THEN true
    WHEN name = 'HELP ARTISAN (HELP ISOLATION)' AND city = 'Paris' THEN true
    WHEN name = 'L'' ARTISAN PARFUMEUR S.A.R.L.' AND city = 'Paris' THEN true
    WHEN name = 'ARTISAN SOLUTION RAPIDE' AND city = 'Paris' THEN false
    WHEN name = 'ARTISANS DE PROXIMITE (ETS FOUCAULT)' AND city = 'Paris' THEN true
    WHEN name = 'LES BONS ARTISANS' AND city = 'Paris' THEN true
    WHEN name = 'LES ARTISANS DE SEINE ET MARNE (ETABLISSEMENT PICARD ET FILS)' AND city = 'Paris' THEN true
    WHEN name = 'ABL ARTISAN' AND city = 'Paris' THEN false
    WHEN name = 'PAPY COIFFEUR' AND city = 'Paris' THEN true
    WHEN name = 'ALLO PLOMBIER' AND city = 'Paris' THEN true
    WHEN name = 'ASR PLOMBIER (ASR PLOMBIER PARIS)' AND city = 'Paris' THEN true
    WHEN name = 'CHER PLOMBIER PAS' AND city = 'Paris' THEN true
    WHEN name = 'TARIF PLOMBIER' AND city = 'Paris' THEN true
    WHEN name = 'CHAUFFAGISTE PLOMBIER' AND city = 'Paris' THEN true
    WHEN name = 'PLOMBIER SOS' AND city = 'Paris' THEN true
    WHEN name = 'MOI PLOMBIER AUTOUR DE MOI' AND city = 'Paris' THEN true
    WHEN name = 'PROXIMITE PLOMBIER A' AND city = 'Paris' THEN true
    WHEN name = 'PARIS PLOMBIER URGENCE' AND city = 'Paris' THEN true
    WHEN name = 'BASICO PLOMBIER CHAUFFAGISTE (BPC)' AND city = 'Paris' THEN true
    WHEN name = 'PLOMBIER - VOISINAGE' AND city = 'Paris' THEN true
    WHEN name = 'CYCL''EAU PLOMBIER (CYCLE DEPANNAGE)' AND city = 'Paris' THEN true
    WHEN name = 'FORMA-PLOMBIER' AND city = 'Paris' THEN true
    WHEN name = 'L''AMI PLOMBIER' AND city = 'Paris' THEN true
    WHEN name = 'SDN PLOMBIER' AND city = 'Paris' THEN false
    WHEN name = 'ELECTRICIENS SANS FRONTIERES L''ENERGIE DU DEVELOPPEMENT' AND city = 'Paris' THEN true
    WHEN name = 'ELECTRICIENS DE PARIS (EDP)' AND city = 'Paris' THEN true
    WHEN name = 'LES ELECTRICIENS DE PONTOISE' AND city = 'Paris' THEN true
    WHEN name = 'LA MAISON DES ELECTRICIENS (LMDE)' AND city = 'Paris' THEN true
    WHEN name = 'ADRIEN ELECTRICIEN' AND city = 'Paris' THEN true
    WHEN name = 'LE TRAIT D UNION ELECTRICIENS' AND city = 'Paris' THEN true
    WHEN name = 'ELECTRICIENS ASSOCIES DE FRANCE' AND city = 'Paris' THEN true
    WHEN name = 'MON ELECTRICIEN A VELO (MEAV)' AND city = 'Paris' THEN true
    WHEN name = 'A VOTRE SERVICE PLOMBIER CHAUFFAGISTE SERRURIER VITRIER ELECTRICIEN' AND city = 'Paris' THEN true
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.E.G.F)' AND city = 'Paris' THEN true
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.E.G.F)' AND city = 'Paris' THEN true
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (CO-EGF)' AND city = 'Paris' THEN true
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.E.G.F)' AND city = 'Paris' THEN true
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.E.G.F)' AND city = 'Paris' THEN true
    WHEN name = 'CLUB OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.-E.G.F.)' AND city = 'Paris' THEN true
    WHEN name = 'DEMATHIEU BARD CONSTRUCTION' AND city = 'Paris' THEN true
    WHEN name = 'EIFFAGE CONSTRUCTION EQUIPEMENTS' AND city = 'Paris' THEN true
    WHEN name = 'EIFFAGE CONSTRUCTION HABITAT' AND city = 'Paris' THEN true
    WHEN name = 'NOVE CONSTRUCTION' AND city = 'Paris' THEN true
    WHEN name = 'VM CONSTRUCTIONS' AND city = 'Paris' THEN true
    WHEN name = 'SILVER CONSTRUCTION' AND city = 'Paris' THEN true
    WHEN name = 'EIFFAGE CONSTRUCTION GRANDS PROJETS' AND city = 'Paris' THEN true
    WHEN name = 'NOVARE CONSTRUCTION (HEMEA)' AND city = 'Paris' THEN true
    WHEN name = 'HML CONSTRUCTION' AND city = 'Paris' THEN true
    WHEN name = 'FOSTER CONSTRUCTION' AND city = 'Paris' THEN true
    WHEN name = 'CIE IMMOBILIERE CONSTRUCTION GESTION (CICOGE)' AND city = 'Paris' THEN false
    WHEN name = 'EIFFAGE CONSTRUCTION RESIDENTIEL ET FONCTIONNEL' AND city = 'Paris' THEN true
    WHEN name = 'COEUR DE CITE' AND city = 'Paris' THEN true
    WHEN name = 'VILLE DE PARIS' AND city = 'Paris' THEN true
    WHEN name = 'ASS DE BIEN ETRE MASSAGE AYURVEDIQUE (ABEMA)' AND city = 'Paris' THEN true
    ELSE "hasWebsite"
  END,
  "hasActiveWebsite" = CASE
    WHEN name = 'RESTAURANT ALENCON' AND city = 'Paris' THEN true
    WHEN name = 'M T COIFFEUR' AND city = 'Paris' THEN false
    WHEN name = 'DEUX RESTAURANT' AND city = 'Paris' THEN true
    WHEN name = 'BOULANGERIES PAUL' AND city = 'Paris' THEN true
    WHEN name = 'BOULANGERIE DU NIL' AND city = 'Paris' THEN false
    WHEN name = 'BOULANGERIE CHAMBELLAND' AND city = 'Paris' THEN true
    WHEN name = 'BOULANGERIE DE LA ROTONDE' AND city = 'Paris' THEN true
    WHEN name = 'BOULANGERIE MOZART (BOULANGERIE MOZART)' AND city = 'Paris' THEN true
    WHEN name = 'BOULANGERIE ALEXINE' AND city = 'Paris' THEN true
    WHEN name = 'LA BOULANGERIE' AND city = 'Paris' THEN true
    WHEN name = 'MEILLEUR COIFFEUR (MEILLEUR COIFFEUR)' AND city = 'Paris' THEN true
    WHEN name = 'BELGRAND COIFFEUR' AND city = 'Paris' THEN true
    WHEN name = 'LES COIFFEURS DU FAUBOURG' AND city = 'Paris' THEN true
    WHEN name = 'SUPER COIFFEUR' AND city = 'Paris' THEN false
    WHEN name = 'AXEL COIFFEUR (BL COIFFURES)' AND city = 'Paris' THEN false
    WHEN name = 'TAREK COIFFEUR (TAREK COIFFEUR)' AND city = 'Paris' THEN true
    WHEN name = 'COIFFEUR K.R.' AND city = 'Paris' THEN true
    WHEN name = 'ABISHA COIFFEUR' AND city = 'Paris' THEN false
    WHEN name = 'FEDERATION FRANCAISE DES INTEGRATEURS ELECTRICIENS (F.F.I.E.)' AND city = 'Paris' THEN true
    WHEN name = 'LOCKROY CONSTRUCTION (LOCKROY CONSTRUCTION)' AND city = 'Paris' THEN true
    WHEN name = 'CT CONSTRUCTION (CTC)' AND city = 'Paris' THEN true
    WHEN name = 'JKR RESTAURANT (JKR RESTAURANT)' AND city = 'Paris' THEN true
    WHEN name = 'BOULANGERIE NEUHAUSER' AND city = 'Paris' THEN true
    WHEN name = '1982 COIFFEUR' AND city = 'Paris' THEN false
    WHEN name = 'CF COIFFEURS' AND city = 'Paris' THEN true
    WHEN name = 'COIFFEUR 1919' AND city = 'Paris' THEN false
    WHEN name = 'COIFFEUR PARISIEN' AND city = 'Paris' THEN true
    WHEN name = 'BEBAWI COIFFEUR' AND city = 'Paris' THEN false
    WHEN name = 'PRINCE COIFFEUR' AND city = 'Paris' THEN true
    WHEN name = 'LES BONS PLOMBIERS (LES BONS PLOMBIERS)' AND city = 'Paris' THEN true
    WHEN name = 'C LE PLOMBIER' AND city = 'Paris' THEN true
    WHEN name = 'GAGNERAUD CONSTRUCTION' AND city = 'Paris' THEN true
    WHEN name = 'AMARENCO CONSTRUCTION' AND city = 'Paris' THEN true
    WHEN name = 'SOCIETE D ETUDES ET DE REALISATION DE GESTION IMMOBILIERE DE CONSTRUCTION (SERGIC)' AND city = 'Paris' THEN false
    WHEN name = 'GIE GAM RESTAURANT' AND city = 'Paris' THEN false
    WHEN name = 'LES RESTAURANTS DU COEUR' AND city = 'Paris' THEN true
    WHEN name = 'TORTILLA RESTAURANTS SAS' AND city = 'Paris' THEN true
    WHEN name = 'DK RESTAURANTS' AND city = 'Paris' THEN true
    WHEN name = 'BIG MAMMA RESTAURANTS FRANCE' AND city = 'Paris' THEN true
    WHEN name = 'SMR RESTAURANT (LA GOYAVE)' AND city = 'Paris' THEN false
    WHEN name = 'NMP RESTAURANTS (EPHEMERE)' AND city = 'Paris' THEN true
    WHEN name = 'O''TACOS RESTAURANT I' AND city = 'Paris' THEN true
    WHEN name = 'RESTAURANT TERANGA' AND city = 'Paris' THEN false
    WHEN name = 'BOULANGERIE CHARCOT' AND city = 'Paris' THEN true
    WHEN name = 'LA BOULANGERIE' AND city = 'Paris' THEN true
    WHEN name = 'ARTISANS MULTISERVICES DES YVELINES (ETABLISSEMENTS FONTAINE PERE ET FILS)' AND city = 'Paris' THEN false
    WHEN name = 'LES ARTISANS RECUPERATEURS (ARTIREC)' AND city = 'Paris' THEN false
    WHEN name = 'LES ARTISANS DU TEMPS' AND city = 'Paris' THEN true
    WHEN name = 'COIFFEUR DU MONDE' AND city = 'Paris' THEN false
    WHEN name = 'LA CABANES ET LES COIFFEURS (LA CABANE ET LES COIFFEURS)' AND city = 'Paris' THEN true
    WHEN name = 'SAI COIFFEUR (SAI COIFFEUR)' AND city = 'Paris' THEN true
    WHEN name = 'COIFFEUR STREET' AND city = 'Paris' THEN true
    WHEN name = 'PLOMBIER AUTOUR DE MOI' AND city = 'Paris' THEN true
    WHEN name = 'SEE ELECTRICIEN ELECTRONICIEN (SEE)' AND city = 'Paris' THEN true
    WHEN name = 'POLYEXPERT CONSTRUCTION' AND city = 'Paris' THEN true
    WHEN name = 'CONSTRUCTEL CONSTRUCTIONS TELECOMMUNICA.' AND city = 'Paris' THEN true
    WHEN name = 'OPERATEUR DE COMPETENCES DE LA CONSTRUCTION' AND city = 'Paris' THEN true
    WHEN name = 'ASS CULT SPORT JEAN BAPTISTE DE LA SALLE' AND city = 'Paris' THEN true
    WHEN name = 'L''UNIVERS DE L''OSTEO-MASSAGE : LA COMPAGNIE DU BIEN-ETRE' AND city = 'Paris' THEN true
    WHEN name = 'AIDA OUERIEMMI (MASSAGE BIEN ETRE)' AND city = 'Paris' THEN false
    WHEN name = 'ROBIN NADAL (ROBIN NADAL MASSAGE BIEN ETRE)' AND city = 'Paris' THEN true
    WHEN name = 'HERVE RUPPIN (H14 MASSAGE SPORT & BIEN-ETRE)' AND city = 'Paris' THEN false
    WHEN name = 'THIERRY HOCHART' AND city = 'Paris' THEN true
    WHEN name = 'DIMITRI RAVON (LE REPOS DES CHAKRAS - MASSAGE BIEN-ETRE)' AND city = 'Paris' THEN true
    WHEN name = 'TAIB EAID (TAIB MASSAGES BIEN ETRE)' AND city = 'Paris' THEN true
    WHEN name = 'GAELLE DUCHEMIN (GAELLE MASSAGE BIEN-ETRE)' AND city = 'Paris' THEN true
    WHEN name = 'BOULANGERIE LORETTE (LORETTE BAC)' AND city = 'Paris' THEN true
    WHEN name = 'BOULANGERIE TARDIF' AND city = 'Paris' THEN true
    WHEN name = 'BOULANGERIE C&M' AND city = 'Paris' THEN true
    WHEN name = 'ARTISAN BRUNO' AND city = 'Paris' THEN true
    WHEN name = 'ARTISANS BERNARD & SILVESTRE (ARTISANS BERNARD ET SYLVESTRE)' AND city = 'Paris' THEN true
    WHEN name = 'PLOMBIER REGIS (PLOMBIER REGIS)' AND city = 'Paris' THEN true
    WHEN name = 'GREEN PLOMBIER' AND city = 'Paris' THEN false
    WHEN name = 'LES ELECTRICIENS DU PERCHE' AND city = 'Paris' THEN false
    WHEN name = 'ARTISAN ELECTRICIEN FOLLIOT' AND city = 'Paris' THEN true
    WHEN name = 'ELECTRICIEN A VOTRE SERVICE' AND city = 'Paris' THEN true
    WHEN name = 'FEDERATION FRANCAISE DU MASSAGE BIEN ETRE (FFMBE)' AND city = 'Paris' THEN true
    WHEN name = 'BALM RESTAURANT' AND city = 'Paris' THEN true
    WHEN name = 'RESTAURANT CHARLY' AND city = 'Paris' THEN true
    WHEN name = 'SOCIETE FRANCAISE D''EXPLOITATION DE RESTAURANT (SO.FE.REST.) (SOFEREST)' AND city = 'Paris' THEN false
    WHEN name = 'LES RESTAURANTS BISTROT SOLEIL' AND city = 'Paris' THEN true
    WHEN name = 'TEAM RESTAURANT' AND city = 'Paris' THEN true
    WHEN name = 'RESTAURANT ARTIGIANALE' AND city = 'Paris' THEN true
    WHEN name = 'VERT RESTAURANT' AND city = 'Paris' THEN true
    WHEN name = 'LE 360 RESTAURANT' AND city = 'Paris' THEN true
    WHEN name = 'LA BOULANGERIE' AND city = 'Paris' THEN true
    WHEN name = 'LA BOULANGERIE PLEYEL' AND city = 'Paris' THEN false
    WHEN name = 'BOULANGERIE DES DAMES' AND city = 'Paris' THEN true
    WHEN name = 'CINNAMON BOULANGERIE' AND city = 'Paris' THEN true
    WHEN name = 'LA BOULANGERIE' AND city = 'Paris' THEN true
    WHEN name = 'DES BOULANGERIES' AND city = 'Paris' THEN false
    WHEN name = 'BOULANGERIE HAUSSMANN' AND city = 'Paris' THEN true
    WHEN name = 'ARTISAN ROUSSEAU' AND city = 'Paris' THEN true
    WHEN name = 'LES ARTISANS DU PORTAIL (ARTISAN DU COIN)' AND city = 'Paris' THEN true
    WHEN name = 'ARTISANS MULTISERVICES' AND city = 'Paris' THEN true
    WHEN name = 'ARTISAN BERTRAND' AND city = 'Paris' THEN true
    WHEN name = 'ARTISAN ROBERT (ARTISAN ROBERT)' AND city = 'Paris' THEN true
    WHEN name = 'FRANCE ARTISAN' AND city = 'Paris' THEN false
    WHEN name = 'ARTISANS DEPANNAGE SERVICE (ADS)' AND city = 'Paris' THEN true
    WHEN name = 'AU CARREFOUR DES ARTISANS (A.C.A)' AND city = 'Paris' THEN true
    WHEN name = 'HELP ARTISAN (HELP ISOLATION)' AND city = 'Paris' THEN true
    WHEN name = 'L'' ARTISAN PARFUMEUR S.A.R.L.' AND city = 'Paris' THEN true
    WHEN name = 'ARTISAN SOLUTION RAPIDE' AND city = 'Paris' THEN false
    WHEN name = 'ARTISANS DE PROXIMITE (ETS FOUCAULT)' AND city = 'Paris' THEN true
    WHEN name = 'LES BONS ARTISANS' AND city = 'Paris' THEN true
    WHEN name = 'LES ARTISANS DE SEINE ET MARNE (ETABLISSEMENT PICARD ET FILS)' AND city = 'Paris' THEN true
    WHEN name = 'ABL ARTISAN' AND city = 'Paris' THEN false
    WHEN name = 'PAPY COIFFEUR' AND city = 'Paris' THEN true
    WHEN name = 'ALLO PLOMBIER' AND city = 'Paris' THEN true
    WHEN name = 'ASR PLOMBIER (ASR PLOMBIER PARIS)' AND city = 'Paris' THEN true
    WHEN name = 'CHER PLOMBIER PAS' AND city = 'Paris' THEN true
    WHEN name = 'TARIF PLOMBIER' AND city = 'Paris' THEN true
    WHEN name = 'CHAUFFAGISTE PLOMBIER' AND city = 'Paris' THEN true
    WHEN name = 'PLOMBIER SOS' AND city = 'Paris' THEN true
    WHEN name = 'MOI PLOMBIER AUTOUR DE MOI' AND city = 'Paris' THEN true
    WHEN name = 'PROXIMITE PLOMBIER A' AND city = 'Paris' THEN true
    WHEN name = 'PARIS PLOMBIER URGENCE' AND city = 'Paris' THEN true
    WHEN name = 'BASICO PLOMBIER CHAUFFAGISTE (BPC)' AND city = 'Paris' THEN true
    WHEN name = 'PLOMBIER - VOISINAGE' AND city = 'Paris' THEN true
    WHEN name = 'CYCL''EAU PLOMBIER (CYCLE DEPANNAGE)' AND city = 'Paris' THEN true
    WHEN name = 'FORMA-PLOMBIER' AND city = 'Paris' THEN true
    WHEN name = 'L''AMI PLOMBIER' AND city = 'Paris' THEN true
    WHEN name = 'SDN PLOMBIER' AND city = 'Paris' THEN false
    WHEN name = 'ELECTRICIENS SANS FRONTIERES L''ENERGIE DU DEVELOPPEMENT' AND city = 'Paris' THEN true
    WHEN name = 'ELECTRICIENS DE PARIS (EDP)' AND city = 'Paris' THEN true
    WHEN name = 'LES ELECTRICIENS DE PONTOISE' AND city = 'Paris' THEN true
    WHEN name = 'LA MAISON DES ELECTRICIENS (LMDE)' AND city = 'Paris' THEN true
    WHEN name = 'ADRIEN ELECTRICIEN' AND city = 'Paris' THEN true
    WHEN name = 'LE TRAIT D UNION ELECTRICIENS' AND city = 'Paris' THEN true
    WHEN name = 'ELECTRICIENS ASSOCIES DE FRANCE' AND city = 'Paris' THEN true
    WHEN name = 'MON ELECTRICIEN A VELO (MEAV)' AND city = 'Paris' THEN true
    WHEN name = 'A VOTRE SERVICE PLOMBIER CHAUFFAGISTE SERRURIER VITRIER ELECTRICIEN' AND city = 'Paris' THEN true
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.E.G.F)' AND city = 'Paris' THEN true
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.E.G.F)' AND city = 'Paris' THEN true
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (CO-EGF)' AND city = 'Paris' THEN true
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.E.G.F)' AND city = 'Paris' THEN true
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.E.G.F)' AND city = 'Paris' THEN true
    WHEN name = 'CLUB OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.-E.G.F.)' AND city = 'Paris' THEN true
    WHEN name = 'DEMATHIEU BARD CONSTRUCTION' AND city = 'Paris' THEN true
    WHEN name = 'EIFFAGE CONSTRUCTION EQUIPEMENTS' AND city = 'Paris' THEN true
    WHEN name = 'EIFFAGE CONSTRUCTION HABITAT' AND city = 'Paris' THEN true
    WHEN name = 'NOVE CONSTRUCTION' AND city = 'Paris' THEN true
    WHEN name = 'VM CONSTRUCTIONS' AND city = 'Paris' THEN true
    WHEN name = 'SILVER CONSTRUCTION' AND city = 'Paris' THEN true
    WHEN name = 'EIFFAGE CONSTRUCTION GRANDS PROJETS' AND city = 'Paris' THEN true
    WHEN name = 'NOVARE CONSTRUCTION (HEMEA)' AND city = 'Paris' THEN true
    WHEN name = 'HML CONSTRUCTION' AND city = 'Paris' THEN true
    WHEN name = 'FOSTER CONSTRUCTION' AND city = 'Paris' THEN true
    WHEN name = 'CIE IMMOBILIERE CONSTRUCTION GESTION (CICOGE)' AND city = 'Paris' THEN false
    WHEN name = 'EIFFAGE CONSTRUCTION RESIDENTIEL ET FONCTIONNEL' AND city = 'Paris' THEN true
    WHEN name = 'COEUR DE CITE' AND city = 'Paris' THEN true
    WHEN name = 'VILLE DE PARIS' AND city = 'Paris' THEN true
    WHEN name = 'ASS DE BIEN ETRE MASSAGE AYURVEDIQUE (ABEMA)' AND city = 'Paris' THEN true
    ELSE "hasActiveWebsite"
  END,
  website = CASE
    WHEN name = 'RESTAURANT ALENCON' AND city = 'Paris' THEN 'https://www.yannick-alleno.com/'
    WHEN name = 'M T COIFFEUR' AND city = 'Paris' THEN NULL
    WHEN name = 'DEUX RESTAURANT' AND city = 'Paris' THEN 'https://www.deux-restaurant.fr/'
    WHEN name = 'BOULANGERIES PAUL' AND city = 'Paris' THEN 'http://www.paul.fr/'
    WHEN name = 'BOULANGERIE DU NIL' AND city = 'Paris' THEN NULL
    WHEN name = 'BOULANGERIE CHAMBELLAND' AND city = 'Paris' THEN 'https://www.chambelland.com/en/'
    WHEN name = 'BOULANGERIE DE LA ROTONDE' AND city = 'Paris' THEN 'https://larotondeparis.fr/fr/services'
    WHEN name = 'BOULANGERIE MOZART (BOULANGERIE MOZART)' AND city = 'Paris' THEN 'https://maison-kayser.com/boulangerie/mozart/'
    WHEN name = 'BOULANGERIE ALEXINE' AND city = 'Paris' THEN 'https://boulangerie-alexine-faubourg-saint-denis.g4r.net/'
    WHEN name = 'LA BOULANGERIE' AND city = 'Paris' THEN 'https://maisonlandemaine.com/'
    WHEN name = 'MEILLEUR COIFFEUR (MEILLEUR COIFFEUR)' AND city = 'Paris' THEN 'https://www.lebonbon.fr/paris/les-tops-mode/coiffeur-paris-nos-coiffeurs-preferes-a-paris/'
    WHEN name = 'BELGRAND COIFFEUR' AND city = 'Paris' THEN 'https://coiffeurbelgrand.wixstudio.com/salon'
    WHEN name = 'LES COIFFEURS DU FAUBOURG' AND city = 'Paris' THEN 'https://www.lescoiffeursdufaubourg.net/'
    WHEN name = 'SUPER COIFFEUR' AND city = 'Paris' THEN NULL
    WHEN name = 'AXEL COIFFEUR (BL COIFFURES)' AND city = 'Paris' THEN NULL
    WHEN name = 'TAREK COIFFEUR (TAREK COIFFEUR)' AND city = 'Paris' THEN 'https://www.fresha.com/fr/lvp/barbier-et-coiffeur-homme-by-tarek-boulevard-ney-paris-0qDLaQ'
    WHEN name = 'COIFFEUR K.R.' AND city = 'Paris' THEN 'https://www.groupekraemer.com/'
    WHEN name = 'ABISHA COIFFEUR' AND city = 'Paris' THEN NULL
    WHEN name = 'FEDERATION FRANCAISE DES INTEGRATEURS ELECTRICIENS (F.F.I.E.)' AND city = 'Paris' THEN 'https://www.ffie.fr/'
    WHEN name = 'LOCKROY CONSTRUCTION (LOCKROY CONSTRUCTION)' AND city = 'Paris' THEN 'https://lockroy.fr/'
    WHEN name = 'CT CONSTRUCTION (CTC)' AND city = 'Paris' THEN 'https://www.dnb.com/business-directory/company-profiles.ct_construction.07ff5e2ce4f650cf3a7d1d69c6a18480.html'
    WHEN name = 'JKR RESTAURANT (JKR RESTAURANT)' AND city = 'Paris' THEN 'https://www.jkplaces.com/jkparis/fr/restauration/'
    WHEN name = 'BOULANGERIE NEUHAUSER' AND city = 'Paris' THEN 'https://www.episens.fr/en/neuhauser-en/'
    WHEN name = '1982 COIFFEUR' AND city = 'Paris' THEN NULL
    WHEN name = 'CF COIFFEURS' AND city = 'Paris' THEN 'https://www.hautecoiffurefrancaiseparis.fr/qui-sommes-nous/'
    WHEN name = 'COIFFEUR 1919' AND city = 'Paris' THEN NULL
    WHEN name = 'COIFFEUR PARISIEN' AND city = 'Paris' THEN 'https://www.labarbieredeparis.com/'
    WHEN name = 'BEBAWI COIFFEUR' AND city = 'Paris' THEN NULL
    WHEN name = 'PRINCE COIFFEUR' AND city = 'Paris' THEN 'https://icoiffeur.fr/75/paris/prince-coiffeur-1p33'
    WHEN name = 'LES BONS PLOMBIERS (LES BONS PLOMBIERS)' AND city = 'Paris' THEN 'https://lesbonsplombiers.com/'
    WHEN name = 'C LE PLOMBIER' AND city = 'Paris' THEN 'https://www.plombier-gay-paris.fr/'
    WHEN name = 'GAGNERAUD CONSTRUCTION' AND city = 'Paris' THEN 'https://www.gagneraud.fr/'
    WHEN name = 'AMARENCO CONSTRUCTION' AND city = 'Paris' THEN 'https://www.amarencogroup.com/en/'
    WHEN name = 'SOCIETE D ETUDES ET DE REALISATION DE GESTION IMMOBILIERE DE CONSTRUCTION (SERGIC)' AND city = 'Paris' THEN NULL
    WHEN name = 'GIE GAM RESTAURANT' AND city = 'Paris' THEN NULL
    WHEN name = 'LES RESTAURANTS DU COEUR' AND city = 'Paris' THEN 'https://www.restosducoeur.org/'
    WHEN name = 'TORTILLA RESTAURANTS SAS' AND city = 'Paris' THEN 'https://www.fr.tortilla.co/'
    WHEN name = 'DK RESTAURANTS' AND city = 'Paris' THEN 'https://www.maisondudanemark.dk/restaurant-paris'
    WHEN name = 'BIG MAMMA RESTAURANTS FRANCE' AND city = 'Paris' THEN 'https://www.bigmammagroup.com/italian-restaurants/france/paris'
    WHEN name = 'SMR RESTAURANT (LA GOYAVE)' AND city = 'Paris' THEN NULL
    WHEN name = 'NMP RESTAURANTS (EPHEMERE)' AND city = 'Paris' THEN 'https://www.nomorepenguins.fr/prestations/restaurant-ephemere'
    WHEN name = 'O''TACOS RESTAURANT I' AND city = 'Paris' THEN 'https://o-tacos.com/'
    WHEN name = 'RESTAURANT TERANGA' AND city = 'Paris' THEN NULL
    WHEN name = 'BOULANGERIE CHARCOT' AND city = 'Paris' THEN 'https://www.syllaboulangerie.fr/'
    WHEN name = 'LA BOULANGERIE' AND city = 'Paris' THEN 'https://www.laboulangere.com/'
    WHEN name = 'ARTISANS MULTISERVICES DES YVELINES (ETABLISSEMENTS FONTAINE PERE ET FILS)' AND city = 'Paris' THEN NULL
    WHEN name = 'LES ARTISANS RECUPERATEURS (ARTIREC)' AND city = 'Paris' THEN NULL
    WHEN name = 'LES ARTISANS DU TEMPS' AND city = 'Paris' THEN 'https://artisan-du-temps.fr/artisan-horloger-paris-centre/'
    WHEN name = 'COIFFEUR DU MONDE' AND city = 'Paris' THEN NULL
    WHEN name = 'LA CABANES ET LES COIFFEURS (LA CABANE ET LES COIFFEURS)' AND city = 'Paris' THEN 'https://entreprises.lagazettefrance.fr/entreprise/la-cabanes-et-les-coiffeurs-822114922'
    WHEN name = 'SAI COIFFEUR (SAI COIFFEUR)' AND city = 'Paris' THEN 'https://myaisai.com/'
    WHEN name = 'COIFFEUR STREET' AND city = 'Paris' THEN 'https://coiffirst.com/'
    WHEN name = 'PLOMBIER AUTOUR DE MOI' AND city = 'Paris' THEN 'https://plombier.com/'
    WHEN name = 'SEE ELECTRICIEN ELECTRONICIEN (SEE)' AND city = 'Paris' THEN 'https://see.asso.fr/'
    WHEN name = 'POLYEXPERT CONSTRUCTION' AND city = 'Paris' THEN 'https://www.polyexpert-construction.fr/'
    WHEN name = 'CONSTRUCTEL CONSTRUCTIONS TELECOMMUNICA.' AND city = 'Paris' THEN 'https://constructel.net/fr/home'
    WHEN name = 'OPERATEUR DE COMPETENCES DE LA CONSTRUCTION' AND city = 'Paris' THEN 'https://www.constructys.fr/'
    WHEN name = 'ASS CULT SPORT JEAN BAPTISTE DE LA SALLE' AND city = 'Paris' THEN 'https://www.facel-paris.com/associations/association-de-la-salle/'
    WHEN name = 'L''UNIVERS DE L''OSTEO-MASSAGE : LA COMPAGNIE DU BIEN-ETRE' AND city = 'Paris' THEN 'https://www.senmartin-massage.fr/plan-du-site'
    WHEN name = 'AIDA OUERIEMMI (MASSAGE BIEN ETRE)' AND city = 'Paris' THEN NULL
    WHEN name = 'ROBIN NADAL (ROBIN NADAL MASSAGE BIEN ETRE)' AND city = 'Paris' THEN 'https://entreprises.lagazettefrance.fr/entreprise/nadal-924138886'
    WHEN name = 'HERVE RUPPIN (H14 MASSAGE SPORT & BIEN-ETRE)' AND city = 'Paris' THEN NULL
    WHEN name = 'THIERRY HOCHART' AND city = 'Paris' THEN 'https://www.mosaistes.com/'
    WHEN name = 'DIMITRI RAVON (LE REPOS DES CHAKRAS - MASSAGE BIEN-ETRE)' AND city = 'Paris' THEN 'https://www.lereposdeschakras.fr/%C3%A0-propos'
    WHEN name = 'TAIB EAID (TAIB MASSAGES BIEN ETRE)' AND city = 'Paris' THEN 'https://taib-massages.github.io/Accueil/'
    WHEN name = 'GAELLE DUCHEMIN (GAELLE MASSAGE BIEN-ETRE)' AND city = 'Paris' THEN 'https://www.salons10.com/FR/Paris/101862611994950/Gaelle-Praticienne-en-Massage-bien-%C3%AAtre'
    WHEN name = 'BOULANGERIE LORETTE (LORETTE BAC)' AND city = 'Paris' THEN 'https://www.findglocal.com/FR/Paris/1679194125626716/Lorette'
    WHEN name = 'BOULANGERIE TARDIF' AND city = 'Paris' THEN 'https://agroalimentaire.e-pro.fr/paris/boulangerie-tardif_f3810911'
    WHEN name = 'BOULANGERIE C&M' AND city = 'Paris' THEN 'https://www.boetmie.com/'
    WHEN name = 'ARTISAN BRUNO' AND city = 'Paris' THEN 'https://artisans-bruno.fr/'
    WHEN name = 'ARTISANS BERNARD & SILVESTRE (ARTISANS BERNARD ET SYLVESTRE)' AND city = 'Paris' THEN 'https://www.artisansbernard.com/'
    WHEN name = 'PLOMBIER REGIS (PLOMBIER REGIS)' AND city = 'Paris' THEN 'https://regis-services.fr/'
    WHEN name = 'GREEN PLOMBIER' AND city = 'Paris' THEN NULL
    WHEN name = 'LES ELECTRICIENS DU PERCHE' AND city = 'Paris' THEN NULL
    WHEN name = 'ARTISAN ELECTRICIEN FOLLIOT' AND city = 'Paris' THEN 'https://artisanelectricienfolliot.com/'
    WHEN name = 'ELECTRICIEN A VOTRE SERVICE' AND city = 'Paris' THEN 'https://www.electricien-paris-eavs.fr/'
    WHEN name = 'FEDERATION FRANCAISE DU MASSAGE BIEN ETRE (FFMBE)' AND city = 'Paris' THEN 'https://ffmbe.fr/'
    WHEN name = 'BALM RESTAURANT' AND city = 'Paris' THEN 'https://www.lesrestos.com/restaurant/fiche/paris/balm'
    WHEN name = 'RESTAURANT CHARLY' AND city = 'Paris' THEN 'https://www.restaurantcharly.fr/'
    WHEN name = 'SOCIETE FRANCAISE D''EXPLOITATION DE RESTAURANT (SO.FE.REST.) (SOFEREST)' AND city = 'Paris' THEN NULL
    WHEN name = 'LES RESTAURANTS BISTROT SOLEIL' AND city = 'Paris' THEN 'https://bistrotsoleil.com/'
    WHEN name = 'TEAM RESTAURANT' AND city = 'Paris' THEN 'https://septime-charonne.fr/'
    WHEN name = 'RESTAURANT ARTIGIANALE' AND city = 'Paris' THEN 'https://www.virtus-paris.com/'
    WHEN name = 'VERT RESTAURANT' AND city = 'Paris' THEN 'https://verde-paris.fr/fr_fr/'
    WHEN name = 'LE 360 RESTAURANT' AND city = 'Paris' THEN 'https://le360paris.com/'
    WHEN name = 'LA BOULANGERIE' AND city = 'Paris' THEN 'https://www.laboulangere.com/'
    WHEN name = 'LA BOULANGERIE PLEYEL' AND city = 'Paris' THEN NULL
    WHEN name = 'BOULANGERIE DES DAMES' AND city = 'Paris' THEN 'https://thefrenchbastards.fr/'
    WHEN name = 'CINNAMON BOULANGERIE' AND city = 'Paris' THEN 'https://cinnamoodrolls.com/?lang=fr'
    WHEN name = 'LA BOULANGERIE' AND city = 'Paris' THEN 'https://www.laboulangere.com/'
    WHEN name = 'DES BOULANGERIES' AND city = 'Paris' THEN NULL
    WHEN name = 'BOULANGERIE HAUSSMANN' AND city = 'Paris' THEN 'https://triadou-haussmann.fr/en/services'
    WHEN name = 'ARTISAN ROUSSEAU' AND city = 'Paris' THEN 'https://www.jean-rousseau.com/fr/'
    WHEN name = 'LES ARTISANS DU PORTAIL (ARTISAN DU COIN)' AND city = 'Paris' THEN 'https://lesartisansduportail.fr/'
    WHEN name = 'ARTISANS MULTISERVICES' AND city = 'Paris' THEN 'https://www.artisanmultiservices.fr/nos-services-sur-paris/'
    WHEN name = 'ARTISAN BERTRAND' AND city = 'Paris' THEN 'https://fr.arthusbertrand.com/'
    WHEN name = 'ARTISAN ROBERT (ARTISAN ROBERT)' AND city = 'Paris' THEN 'https://artisan-robert-france.fr/'
    WHEN name = 'FRANCE ARTISAN' AND city = 'Paris' THEN NULL
    WHEN name = 'ARTISANS DEPANNAGE SERVICE (ADS)' AND city = 'Paris' THEN 'https://www.adsgroupe.fr/'
    WHEN name = 'AU CARREFOUR DES ARTISANS (A.C.A)' AND city = 'Paris' THEN 'https://services.e-pro.fr/paris/au-carrefour-des-artisans-a-c-a_f3390824'
    WHEN name = 'HELP ARTISAN (HELP ISOLATION)' AND city = 'Paris' THEN 'https://www.dnb.com/business-directory/company-profiles.help_artisan.3c5e4fd8744920c178e88f12a4b51ea7.html'
    WHEN name = 'L'' ARTISAN PARFUMEUR S.A.R.L.' AND city = 'Paris' THEN 'https://www.artisanparfumeur.com/fr/'
    WHEN name = 'ARTISAN SOLUTION RAPIDE' AND city = 'Paris' THEN NULL
    WHEN name = 'ARTISANS DE PROXIMITE (ETS FOUCAULT)' AND city = 'Paris' THEN 'https://www.artisansdeproximite.fr/'
    WHEN name = 'LES BONS ARTISANS' AND city = 'Paris' THEN 'https://www.lesbonsartisans.fr/'
    WHEN name = 'LES ARTISANS DE SEINE ET MARNE (ETABLISSEMENT PICARD ET FILS)' AND city = 'Paris' THEN 'https://www.etspicard.fr/'
    WHEN name = 'ABL ARTISAN' AND city = 'Paris' THEN NULL
    WHEN name = 'PAPY COIFFEUR' AND city = 'Paris' THEN 'https://chezpapyparis.fr/fr/booking'
    WHEN name = 'ALLO PLOMBIER' AND city = 'Paris' THEN 'https://www.alloplombiers.com/accueil'
    WHEN name = 'ASR PLOMBIER (ASR PLOMBIER PARIS)' AND city = 'Paris' THEN 'https://asr-plombier.fr/'
    WHEN name = 'CHER PLOMBIER PAS' AND city = 'Paris' THEN 'https://www.artisanplombierpascher.fr/'
    WHEN name = 'TARIF PLOMBIER' AND city = 'Paris' THEN 'https://plombier-paris-banlieue.com/nos-tarifs/'
    WHEN name = 'CHAUFFAGISTE PLOMBIER' AND city = 'Paris' THEN 'https://www.chauffagiste-paris.fr/'
    WHEN name = 'PLOMBIER SOS' AND city = 'Paris' THEN 'https://plombier-sos.com/'
    WHEN name = 'MOI PLOMBIER AUTOUR DE MOI' AND city = 'Paris' THEN 'https://plomberie-idf.com/'
    WHEN name = 'PROXIMITE PLOMBIER A' AND city = 'Paris' THEN 'https://compagnonplombier.com/'
    WHEN name = 'PARIS PLOMBIER URGENCE' AND city = 'Paris' THEN 'https://paris-plombier.com/'
    WHEN name = 'BASICO PLOMBIER CHAUFFAGISTE (BPC)' AND city = 'Paris' THEN 'https://basico-plombier-chauffagiste.fr/'
    WHEN name = 'PLOMBIER - VOISINAGE' AND city = 'Paris' THEN 'https://compagnonplombier.com/'
    WHEN name = 'CYCL''EAU PLOMBIER (CYCLE DEPANNAGE)' AND city = 'Paris' THEN 'http://www.cyclo.global/'
    WHEN name = 'FORMA-PLOMBIER' AND city = 'Paris' THEN 'https://www.laplateforme.com/'
    WHEN name = 'L''AMI PLOMBIER' AND city = 'Paris' THEN 'https://www.monartisan.info/pro-l-ami-plombier-83121440800013'
    WHEN name = 'SDN PLOMBIER' AND city = 'Paris' THEN NULL
    WHEN name = 'ELECTRICIENS SANS FRONTIERES L''ENERGIE DU DEVELOPPEMENT' AND city = 'Paris' THEN 'https://www.electriciens-sans-frontieres.org/'
    WHEN name = 'ELECTRICIENS DE PARIS (EDP)' AND city = 'Paris' THEN 'https://www.edp.com/fr/europe/france'
    WHEN name = 'LES ELECTRICIENS DE PONTOISE' AND city = 'Paris' THEN 'https://www.allovoisins.com/v/installation-electrique/pontoise'
    WHEN name = 'LA MAISON DES ELECTRICIENS (LMDE)' AND city = 'Paris' THEN 'https://lamaisondeselectriciens.fr/'
    WHEN name = 'ADRIEN ELECTRICIEN' AND city = 'Paris' THEN 'https://www.adrienelectricien.fr/'
    WHEN name = 'LE TRAIT D UNION ELECTRICIENS' AND city = 'Paris' THEN 'https://www.cseee.fr/le-trait-dunion-des-electriciens'
    WHEN name = 'ELECTRICIENS ASSOCIES DE FRANCE' AND city = 'Paris' THEN 'https://www.allbiz.fr/electriciens-associ%C3%A9s-de-france-01-40-30-47-83'
    WHEN name = 'MON ELECTRICIEN A VELO (MEAV)' AND city = 'Paris' THEN 'https://www.monelectricienavelo.com/'
    WHEN name = 'A VOTRE SERVICE PLOMBIER CHAUFFAGISTE SERRURIER VITRIER ELECTRICIEN' AND city = 'Paris' THEN 'https://chauffagiste-installation.fr/ile-de-france/paris/paris/a-votre-service-plombier-chauffagiste-serrurier-vitrier-electricien-493548341.html'
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.E.G.F)' AND city = 'Paris' THEN 'https://www.coegf.fr/'
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.E.G.F)' AND city = 'Paris' THEN 'https://www.coegf.fr/'
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (CO-EGF)' AND city = 'Paris' THEN 'https://www.coegf.fr/'
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.E.G.F)' AND city = 'Paris' THEN 'https://www.coegf.fr/'
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.E.G.F)' AND city = 'Paris' THEN 'https://www.coegf.fr/'
    WHEN name = 'CLUB OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.-E.G.F.)' AND city = 'Paris' THEN 'https://www.coegf.fr/'
    WHEN name = 'DEMATHIEU BARD CONSTRUCTION' AND city = 'Paris' THEN 'https://www.demathieu-bard.fr/'
    WHEN name = 'EIFFAGE CONSTRUCTION EQUIPEMENTS' AND city = 'Paris' THEN 'https://www.eiffageconstruction.com/'
    WHEN name = 'EIFFAGE CONSTRUCTION HABITAT' AND city = 'Paris' THEN 'https://www.eiffageconstruction.com/'
    WHEN name = 'NOVE CONSTRUCTION' AND city = 'Paris' THEN 'https://nove-logement.com/qui-sommes-nous/nos-activites/nove-construction/'
    WHEN name = 'VM CONSTRUCTIONS' AND city = 'Paris' THEN 'https://vmconstructions.fr/'
    WHEN name = 'SILVER CONSTRUCTION' AND city = 'Paris' THEN 'https://entreprises.lagazettefrance.fr/entreprise/silver-construction-494060338'
    WHEN name = 'EIFFAGE CONSTRUCTION GRANDS PROJETS' AND city = 'Paris' THEN 'https://www.eiffageconstruction.com/'
    WHEN name = 'NOVARE CONSTRUCTION (HEMEA)' AND city = 'Paris' THEN 'https://www.hemea.com/fr'
    WHEN name = 'HML CONSTRUCTION' AND city = 'Paris' THEN 'https://hml-construction.com/'
    WHEN name = 'FOSTER CONSTRUCTION' AND city = 'Paris' THEN 'https://www.fosterandpartners.com/'
    WHEN name = 'CIE IMMOBILIERE CONSTRUCTION GESTION (CICOGE)' AND city = 'Paris' THEN NULL
    WHEN name = 'EIFFAGE CONSTRUCTION RESIDENTIEL ET FONCTIONNEL' AND city = 'Paris' THEN 'https://www.eiffageconstruction.com/'
    WHEN name = 'COEUR DE CITE' AND city = 'Paris' THEN 'https://parisjetaime.com/'
    WHEN name = 'VILLE DE PARIS' AND city = 'Paris' THEN 'https://www.paris.fr/'
    WHEN name = 'ASS DE BIEN ETRE MASSAGE AYURVEDIQUE (ABEMA)' AND city = 'Paris' THEN 'https://spa-paris.com/massage-ayurvedic-paris/'
    ELSE website
  END,
  "score" = CASE
    WHEN name = 'RESTAURANT ALENCON' AND city = 'Paris' THEN 35
    WHEN name = 'M T COIFFEUR' AND city = 'Paris' THEN 60
    WHEN name = 'DEUX RESTAURANT' AND city = 'Paris' THEN 25
    WHEN name = 'BOULANGERIES PAUL' AND city = 'Paris' THEN 25
    WHEN name = 'BOULANGERIE DU NIL' AND city = 'Paris' THEN 55
    WHEN name = 'BOULANGERIE CHAMBELLAND' AND city = 'Paris' THEN 25
    WHEN name = 'BOULANGERIE DE LA ROTONDE' AND city = 'Paris' THEN 25
    WHEN name = 'BOULANGERIE MOZART (BOULANGERIE MOZART)' AND city = 'Paris' THEN 25
    WHEN name = 'BOULANGERIE ALEXINE' AND city = 'Paris' THEN 25
    WHEN name = 'LA BOULANGERIE' AND city = 'Paris' THEN 25
    WHEN name = 'MEILLEUR COIFFEUR (MEILLEUR COIFFEUR)' AND city = 'Paris' THEN 25
    WHEN name = 'BELGRAND COIFFEUR' AND city = 'Paris' THEN 25
    WHEN name = 'LES COIFFEURS DU FAUBOURG' AND city = 'Paris' THEN 25
    WHEN name = 'SUPER COIFFEUR' AND city = 'Paris' THEN 55
    WHEN name = 'AXEL COIFFEUR (BL COIFFURES)' AND city = 'Paris' THEN 55
    WHEN name = 'TAREK COIFFEUR (TAREK COIFFEUR)' AND city = 'Paris' THEN 25
    WHEN name = 'COIFFEUR K.R.' AND city = 'Paris' THEN 25
    WHEN name = 'ABISHA COIFFEUR' AND city = 'Paris' THEN 55
    WHEN name = 'FEDERATION FRANCAISE DES INTEGRATEURS ELECTRICIENS (F.F.I.E.)' AND city = 'Paris' THEN 25
    WHEN name = 'LOCKROY CONSTRUCTION (LOCKROY CONSTRUCTION)' AND city = 'Paris' THEN 25
    WHEN name = 'CT CONSTRUCTION (CTC)' AND city = 'Paris' THEN 25
    WHEN name = 'JKR RESTAURANT (JKR RESTAURANT)' AND city = 'Paris' THEN 20
    WHEN name = 'BOULANGERIE NEUHAUSER' AND city = 'Paris' THEN 20
    WHEN name = '1982 COIFFEUR' AND city = 'Paris' THEN 50
    WHEN name = 'CF COIFFEURS' AND city = 'Paris' THEN 20
    WHEN name = 'COIFFEUR 1919' AND city = 'Paris' THEN 50
    WHEN name = 'COIFFEUR PARISIEN' AND city = 'Paris' THEN 20
    WHEN name = 'BEBAWI COIFFEUR' AND city = 'Paris' THEN 50
    WHEN name = 'PRINCE COIFFEUR' AND city = 'Paris' THEN 20
    WHEN name = 'LES BONS PLOMBIERS (LES BONS PLOMBIERS)' AND city = 'Paris' THEN 20
    WHEN name = 'C LE PLOMBIER' AND city = 'Paris' THEN 20
    WHEN name = 'GAGNERAUD CONSTRUCTION' AND city = 'Paris' THEN 20
    WHEN name = 'AMARENCO CONSTRUCTION' AND city = 'Paris' THEN 20
    WHEN name = 'SOCIETE D ETUDES ET DE REALISATION DE GESTION IMMOBILIERE DE CONSTRUCTION (SERGIC)' AND city = 'Paris' THEN 50
    WHEN name = 'GIE GAM RESTAURANT' AND city = 'Paris' THEN 45
    WHEN name = 'LES RESTAURANTS DU COEUR' AND city = 'Paris' THEN 15
    WHEN name = 'TORTILLA RESTAURANTS SAS' AND city = 'Paris' THEN 15
    WHEN name = 'DK RESTAURANTS' AND city = 'Paris' THEN 15
    WHEN name = 'BIG MAMMA RESTAURANTS FRANCE' AND city = 'Paris' THEN 15
    WHEN name = 'SMR RESTAURANT (LA GOYAVE)' AND city = 'Paris' THEN 45
    WHEN name = 'NMP RESTAURANTS (EPHEMERE)' AND city = 'Paris' THEN 15
    WHEN name = 'O''TACOS RESTAURANT I' AND city = 'Paris' THEN 15
    WHEN name = 'RESTAURANT TERANGA' AND city = 'Paris' THEN 45
    WHEN name = 'BOULANGERIE CHARCOT' AND city = 'Paris' THEN 15
    WHEN name = 'LA BOULANGERIE' AND city = 'Paris' THEN 15
    WHEN name = 'ARTISANS MULTISERVICES DES YVELINES (ETABLISSEMENTS FONTAINE PERE ET FILS)' AND city = 'Paris' THEN 45
    WHEN name = 'LES ARTISANS RECUPERATEURS (ARTIREC)' AND city = 'Paris' THEN 45
    WHEN name = 'LES ARTISANS DU TEMPS' AND city = 'Paris' THEN 15
    WHEN name = 'COIFFEUR DU MONDE' AND city = 'Paris' THEN 45
    WHEN name = 'LA CABANES ET LES COIFFEURS (LA CABANE ET LES COIFFEURS)' AND city = 'Paris' THEN 15
    WHEN name = 'SAI COIFFEUR (SAI COIFFEUR)' AND city = 'Paris' THEN 15
    WHEN name = 'COIFFEUR STREET' AND city = 'Paris' THEN 15
    WHEN name = 'PLOMBIER AUTOUR DE MOI' AND city = 'Paris' THEN 15
    WHEN name = 'SEE ELECTRICIEN ELECTRONICIEN (SEE)' AND city = 'Paris' THEN 15
    WHEN name = 'POLYEXPERT CONSTRUCTION' AND city = 'Paris' THEN 15
    WHEN name = 'CONSTRUCTEL CONSTRUCTIONS TELECOMMUNICA.' AND city = 'Paris' THEN 15
    WHEN name = 'OPERATEUR DE COMPETENCES DE LA CONSTRUCTION' AND city = 'Paris' THEN 15
    WHEN name = 'ASS CULT SPORT JEAN BAPTISTE DE LA SALLE' AND city = 'Paris' THEN 15
    WHEN name = 'L''UNIVERS DE L''OSTEO-MASSAGE : LA COMPAGNIE DU BIEN-ETRE' AND city = 'Paris' THEN 15
    WHEN name = 'AIDA OUERIEMMI (MASSAGE BIEN ETRE)' AND city = 'Paris' THEN 45
    WHEN name = 'ROBIN NADAL (ROBIN NADAL MASSAGE BIEN ETRE)' AND city = 'Paris' THEN 15
    WHEN name = 'HERVE RUPPIN (H14 MASSAGE SPORT & BIEN-ETRE)' AND city = 'Paris' THEN 45
    WHEN name = 'THIERRY HOCHART' AND city = 'Paris' THEN 15
    WHEN name = 'DIMITRI RAVON (LE REPOS DES CHAKRAS - MASSAGE BIEN-ETRE)' AND city = 'Paris' THEN 15
    WHEN name = 'TAIB EAID (TAIB MASSAGES BIEN ETRE)' AND city = 'Paris' THEN 15
    WHEN name = 'GAELLE DUCHEMIN (GAELLE MASSAGE BIEN-ETRE)' AND city = 'Paris' THEN 15
    WHEN name = 'BOULANGERIE LORETTE (LORETTE BAC)' AND city = 'Paris' THEN 10
    WHEN name = 'BOULANGERIE TARDIF' AND city = 'Paris' THEN 10
    WHEN name = 'BOULANGERIE C&M' AND city = 'Paris' THEN 10
    WHEN name = 'ARTISAN BRUNO' AND city = 'Paris' THEN 10
    WHEN name = 'ARTISANS BERNARD & SILVESTRE (ARTISANS BERNARD ET SYLVESTRE)' AND city = 'Paris' THEN 10
    WHEN name = 'PLOMBIER REGIS (PLOMBIER REGIS)' AND city = 'Paris' THEN 10
    WHEN name = 'GREEN PLOMBIER' AND city = 'Paris' THEN 40
    WHEN name = 'LES ELECTRICIENS DU PERCHE' AND city = 'Paris' THEN 40
    WHEN name = 'ARTISAN ELECTRICIEN FOLLIOT' AND city = 'Paris' THEN 10
    WHEN name = 'ELECTRICIEN A VOTRE SERVICE' AND city = 'Paris' THEN 10
    WHEN name = 'FEDERATION FRANCAISE DU MASSAGE BIEN ETRE (FFMBE)' AND city = 'Paris' THEN 10
    WHEN name = 'BALM RESTAURANT' AND city = 'Paris' THEN 10
    WHEN name = 'RESTAURANT CHARLY' AND city = 'Paris' THEN 10
    WHEN name = 'SOCIETE FRANCAISE D''EXPLOITATION DE RESTAURANT (SO.FE.REST.) (SOFEREST)' AND city = 'Paris' THEN 40
    WHEN name = 'LES RESTAURANTS BISTROT SOLEIL' AND city = 'Paris' THEN 10
    WHEN name = 'TEAM RESTAURANT' AND city = 'Paris' THEN 10
    WHEN name = 'RESTAURANT ARTIGIANALE' AND city = 'Paris' THEN 10
    WHEN name = 'VERT RESTAURANT' AND city = 'Paris' THEN 10
    WHEN name = 'LE 360 RESTAURANT' AND city = 'Paris' THEN 10
    WHEN name = 'LA BOULANGERIE' AND city = 'Paris' THEN 10
    WHEN name = 'LA BOULANGERIE PLEYEL' AND city = 'Paris' THEN 40
    WHEN name = 'BOULANGERIE DES DAMES' AND city = 'Paris' THEN 10
    WHEN name = 'CINNAMON BOULANGERIE' AND city = 'Paris' THEN 10
    WHEN name = 'LA BOULANGERIE' AND city = 'Paris' THEN 10
    WHEN name = 'DES BOULANGERIES' AND city = 'Paris' THEN 40
    WHEN name = 'BOULANGERIE HAUSSMANN' AND city = 'Paris' THEN 10
    WHEN name = 'ARTISAN ROUSSEAU' AND city = 'Paris' THEN 10
    WHEN name = 'LES ARTISANS DU PORTAIL (ARTISAN DU COIN)' AND city = 'Paris' THEN 10
    WHEN name = 'ARTISANS MULTISERVICES' AND city = 'Paris' THEN 10
    WHEN name = 'ARTISAN BERTRAND' AND city = 'Paris' THEN 10
    WHEN name = 'ARTISAN ROBERT (ARTISAN ROBERT)' AND city = 'Paris' THEN 10
    WHEN name = 'FRANCE ARTISAN' AND city = 'Paris' THEN 40
    WHEN name = 'ARTISANS DEPANNAGE SERVICE (ADS)' AND city = 'Paris' THEN 10
    WHEN name = 'AU CARREFOUR DES ARTISANS (A.C.A)' AND city = 'Paris' THEN 10
    WHEN name = 'HELP ARTISAN (HELP ISOLATION)' AND city = 'Paris' THEN 10
    WHEN name = 'L'' ARTISAN PARFUMEUR S.A.R.L.' AND city = 'Paris' THEN 10
    WHEN name = 'ARTISAN SOLUTION RAPIDE' AND city = 'Paris' THEN 40
    WHEN name = 'ARTISANS DE PROXIMITE (ETS FOUCAULT)' AND city = 'Paris' THEN 10
    WHEN name = 'LES BONS ARTISANS' AND city = 'Paris' THEN 10
    WHEN name = 'LES ARTISANS DE SEINE ET MARNE (ETABLISSEMENT PICARD ET FILS)' AND city = 'Paris' THEN 10
    WHEN name = 'ABL ARTISAN' AND city = 'Paris' THEN 40
    WHEN name = 'PAPY COIFFEUR' AND city = 'Paris' THEN 10
    WHEN name = 'ALLO PLOMBIER' AND city = 'Paris' THEN 10
    WHEN name = 'ASR PLOMBIER (ASR PLOMBIER PARIS)' AND city = 'Paris' THEN 10
    WHEN name = 'CHER PLOMBIER PAS' AND city = 'Paris' THEN 10
    WHEN name = 'TARIF PLOMBIER' AND city = 'Paris' THEN 10
    WHEN name = 'CHAUFFAGISTE PLOMBIER' AND city = 'Paris' THEN 10
    WHEN name = 'PLOMBIER SOS' AND city = 'Paris' THEN 10
    WHEN name = 'MOI PLOMBIER AUTOUR DE MOI' AND city = 'Paris' THEN 10
    WHEN name = 'PROXIMITE PLOMBIER A' AND city = 'Paris' THEN 10
    WHEN name = 'PARIS PLOMBIER URGENCE' AND city = 'Paris' THEN 10
    WHEN name = 'BASICO PLOMBIER CHAUFFAGISTE (BPC)' AND city = 'Paris' THEN 10
    WHEN name = 'PLOMBIER - VOISINAGE' AND city = 'Paris' THEN 10
    WHEN name = 'CYCL''EAU PLOMBIER (CYCLE DEPANNAGE)' AND city = 'Paris' THEN 10
    WHEN name = 'FORMA-PLOMBIER' AND city = 'Paris' THEN 10
    WHEN name = 'L''AMI PLOMBIER' AND city = 'Paris' THEN 10
    WHEN name = 'SDN PLOMBIER' AND city = 'Paris' THEN 40
    WHEN name = 'ELECTRICIENS SANS FRONTIERES L''ENERGIE DU DEVELOPPEMENT' AND city = 'Paris' THEN 10
    WHEN name = 'ELECTRICIENS DE PARIS (EDP)' AND city = 'Paris' THEN 10
    WHEN name = 'LES ELECTRICIENS DE PONTOISE' AND city = 'Paris' THEN 10
    WHEN name = 'LA MAISON DES ELECTRICIENS (LMDE)' AND city = 'Paris' THEN 10
    WHEN name = 'ADRIEN ELECTRICIEN' AND city = 'Paris' THEN 10
    WHEN name = 'LE TRAIT D UNION ELECTRICIENS' AND city = 'Paris' THEN 10
    WHEN name = 'ELECTRICIENS ASSOCIES DE FRANCE' AND city = 'Paris' THEN 10
    WHEN name = 'MON ELECTRICIEN A VELO (MEAV)' AND city = 'Paris' THEN 10
    WHEN name = 'A VOTRE SERVICE PLOMBIER CHAUFFAGISTE SERRURIER VITRIER ELECTRICIEN' AND city = 'Paris' THEN 10
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.E.G.F)' AND city = 'Paris' THEN 10
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.E.G.F)' AND city = 'Paris' THEN 10
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (CO-EGF)' AND city = 'Paris' THEN 10
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.E.G.F)' AND city = 'Paris' THEN 10
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.E.G.F)' AND city = 'Paris' THEN 10
    WHEN name = 'CLUB OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.-E.G.F.)' AND city = 'Paris' THEN 10
    WHEN name = 'DEMATHIEU BARD CONSTRUCTION' AND city = 'Paris' THEN 10
    WHEN name = 'EIFFAGE CONSTRUCTION EQUIPEMENTS' AND city = 'Paris' THEN 10
    WHEN name = 'EIFFAGE CONSTRUCTION HABITAT' AND city = 'Paris' THEN 10
    WHEN name = 'NOVE CONSTRUCTION' AND city = 'Paris' THEN 10
    WHEN name = 'VM CONSTRUCTIONS' AND city = 'Paris' THEN 10
    WHEN name = 'SILVER CONSTRUCTION' AND city = 'Paris' THEN 10
    WHEN name = 'EIFFAGE CONSTRUCTION GRANDS PROJETS' AND city = 'Paris' THEN 10
    WHEN name = 'NOVARE CONSTRUCTION (HEMEA)' AND city = 'Paris' THEN 10
    WHEN name = 'HML CONSTRUCTION' AND city = 'Paris' THEN 10
    WHEN name = 'FOSTER CONSTRUCTION' AND city = 'Paris' THEN 10
    WHEN name = 'CIE IMMOBILIERE CONSTRUCTION GESTION (CICOGE)' AND city = 'Paris' THEN 40
    WHEN name = 'EIFFAGE CONSTRUCTION RESIDENTIEL ET FONCTIONNEL' AND city = 'Paris' THEN 10
    WHEN name = 'COEUR DE CITE' AND city = 'Paris' THEN 10
    WHEN name = 'VILLE DE PARIS' AND city = 'Paris' THEN 10
    WHEN name = 'ASS DE BIEN ETRE MASSAGE AYURVEDIQUE (ABEMA)' AND city = 'Paris' THEN 10
    ELSE "score"
  END,
  "webVisibilityScore" = CASE
    WHEN name = 'RESTAURANT ALENCON' AND city = 'Paris' THEN 35
    WHEN name = 'M T COIFFEUR' AND city = 'Paris' THEN 60
    WHEN name = 'DEUX RESTAURANT' AND city = 'Paris' THEN 25
    WHEN name = 'BOULANGERIES PAUL' AND city = 'Paris' THEN 25
    WHEN name = 'BOULANGERIE DU NIL' AND city = 'Paris' THEN 55
    WHEN name = 'BOULANGERIE CHAMBELLAND' AND city = 'Paris' THEN 25
    WHEN name = 'BOULANGERIE DE LA ROTONDE' AND city = 'Paris' THEN 25
    WHEN name = 'BOULANGERIE MOZART (BOULANGERIE MOZART)' AND city = 'Paris' THEN 25
    WHEN name = 'BOULANGERIE ALEXINE' AND city = 'Paris' THEN 25
    WHEN name = 'LA BOULANGERIE' AND city = 'Paris' THEN 25
    WHEN name = 'MEILLEUR COIFFEUR (MEILLEUR COIFFEUR)' AND city = 'Paris' THEN 25
    WHEN name = 'BELGRAND COIFFEUR' AND city = 'Paris' THEN 25
    WHEN name = 'LES COIFFEURS DU FAUBOURG' AND city = 'Paris' THEN 25
    WHEN name = 'SUPER COIFFEUR' AND city = 'Paris' THEN 55
    WHEN name = 'AXEL COIFFEUR (BL COIFFURES)' AND city = 'Paris' THEN 55
    WHEN name = 'TAREK COIFFEUR (TAREK COIFFEUR)' AND city = 'Paris' THEN 25
    WHEN name = 'COIFFEUR K.R.' AND city = 'Paris' THEN 25
    WHEN name = 'ABISHA COIFFEUR' AND city = 'Paris' THEN 55
    WHEN name = 'FEDERATION FRANCAISE DES INTEGRATEURS ELECTRICIENS (F.F.I.E.)' AND city = 'Paris' THEN 25
    WHEN name = 'LOCKROY CONSTRUCTION (LOCKROY CONSTRUCTION)' AND city = 'Paris' THEN 25
    WHEN name = 'CT CONSTRUCTION (CTC)' AND city = 'Paris' THEN 25
    WHEN name = 'JKR RESTAURANT (JKR RESTAURANT)' AND city = 'Paris' THEN 20
    WHEN name = 'BOULANGERIE NEUHAUSER' AND city = 'Paris' THEN 20
    WHEN name = '1982 COIFFEUR' AND city = 'Paris' THEN 50
    WHEN name = 'CF COIFFEURS' AND city = 'Paris' THEN 20
    WHEN name = 'COIFFEUR 1919' AND city = 'Paris' THEN 50
    WHEN name = 'COIFFEUR PARISIEN' AND city = 'Paris' THEN 20
    WHEN name = 'BEBAWI COIFFEUR' AND city = 'Paris' THEN 50
    WHEN name = 'PRINCE COIFFEUR' AND city = 'Paris' THEN 20
    WHEN name = 'LES BONS PLOMBIERS (LES BONS PLOMBIERS)' AND city = 'Paris' THEN 20
    WHEN name = 'C LE PLOMBIER' AND city = 'Paris' THEN 20
    WHEN name = 'GAGNERAUD CONSTRUCTION' AND city = 'Paris' THEN 20
    WHEN name = 'AMARENCO CONSTRUCTION' AND city = 'Paris' THEN 20
    WHEN name = 'SOCIETE D ETUDES ET DE REALISATION DE GESTION IMMOBILIERE DE CONSTRUCTION (SERGIC)' AND city = 'Paris' THEN 50
    WHEN name = 'GIE GAM RESTAURANT' AND city = 'Paris' THEN 45
    WHEN name = 'LES RESTAURANTS DU COEUR' AND city = 'Paris' THEN 15
    WHEN name = 'TORTILLA RESTAURANTS SAS' AND city = 'Paris' THEN 15
    WHEN name = 'DK RESTAURANTS' AND city = 'Paris' THEN 15
    WHEN name = 'BIG MAMMA RESTAURANTS FRANCE' AND city = 'Paris' THEN 15
    WHEN name = 'SMR RESTAURANT (LA GOYAVE)' AND city = 'Paris' THEN 45
    WHEN name = 'NMP RESTAURANTS (EPHEMERE)' AND city = 'Paris' THEN 15
    WHEN name = 'O''TACOS RESTAURANT I' AND city = 'Paris' THEN 15
    WHEN name = 'RESTAURANT TERANGA' AND city = 'Paris' THEN 45
    WHEN name = 'BOULANGERIE CHARCOT' AND city = 'Paris' THEN 15
    WHEN name = 'LA BOULANGERIE' AND city = 'Paris' THEN 15
    WHEN name = 'ARTISANS MULTISERVICES DES YVELINES (ETABLISSEMENTS FONTAINE PERE ET FILS)' AND city = 'Paris' THEN 45
    WHEN name = 'LES ARTISANS RECUPERATEURS (ARTIREC)' AND city = 'Paris' THEN 45
    WHEN name = 'LES ARTISANS DU TEMPS' AND city = 'Paris' THEN 15
    WHEN name = 'COIFFEUR DU MONDE' AND city = 'Paris' THEN 45
    WHEN name = 'LA CABANES ET LES COIFFEURS (LA CABANE ET LES COIFFEURS)' AND city = 'Paris' THEN 15
    WHEN name = 'SAI COIFFEUR (SAI COIFFEUR)' AND city = 'Paris' THEN 15
    WHEN name = 'COIFFEUR STREET' AND city = 'Paris' THEN 15
    WHEN name = 'PLOMBIER AUTOUR DE MOI' AND city = 'Paris' THEN 15
    WHEN name = 'SEE ELECTRICIEN ELECTRONICIEN (SEE)' AND city = 'Paris' THEN 15
    WHEN name = 'POLYEXPERT CONSTRUCTION' AND city = 'Paris' THEN 15
    WHEN name = 'CONSTRUCTEL CONSTRUCTIONS TELECOMMUNICA.' AND city = 'Paris' THEN 15
    WHEN name = 'OPERATEUR DE COMPETENCES DE LA CONSTRUCTION' AND city = 'Paris' THEN 15
    WHEN name = 'ASS CULT SPORT JEAN BAPTISTE DE LA SALLE' AND city = 'Paris' THEN 15
    WHEN name = 'L''UNIVERS DE L''OSTEO-MASSAGE : LA COMPAGNIE DU BIEN-ETRE' AND city = 'Paris' THEN 15
    WHEN name = 'AIDA OUERIEMMI (MASSAGE BIEN ETRE)' AND city = 'Paris' THEN 45
    WHEN name = 'ROBIN NADAL (ROBIN NADAL MASSAGE BIEN ETRE)' AND city = 'Paris' THEN 15
    WHEN name = 'HERVE RUPPIN (H14 MASSAGE SPORT & BIEN-ETRE)' AND city = 'Paris' THEN 45
    WHEN name = 'THIERRY HOCHART' AND city = 'Paris' THEN 15
    WHEN name = 'DIMITRI RAVON (LE REPOS DES CHAKRAS - MASSAGE BIEN-ETRE)' AND city = 'Paris' THEN 15
    WHEN name = 'TAIB EAID (TAIB MASSAGES BIEN ETRE)' AND city = 'Paris' THEN 15
    WHEN name = 'GAELLE DUCHEMIN (GAELLE MASSAGE BIEN-ETRE)' AND city = 'Paris' THEN 15
    WHEN name = 'BOULANGERIE LORETTE (LORETTE BAC)' AND city = 'Paris' THEN 10
    WHEN name = 'BOULANGERIE TARDIF' AND city = 'Paris' THEN 10
    WHEN name = 'BOULANGERIE C&M' AND city = 'Paris' THEN 10
    WHEN name = 'ARTISAN BRUNO' AND city = 'Paris' THEN 10
    WHEN name = 'ARTISANS BERNARD & SILVESTRE (ARTISANS BERNARD ET SYLVESTRE)' AND city = 'Paris' THEN 10
    WHEN name = 'PLOMBIER REGIS (PLOMBIER REGIS)' AND city = 'Paris' THEN 10
    WHEN name = 'GREEN PLOMBIER' AND city = 'Paris' THEN 40
    WHEN name = 'LES ELECTRICIENS DU PERCHE' AND city = 'Paris' THEN 40
    WHEN name = 'ARTISAN ELECTRICIEN FOLLIOT' AND city = 'Paris' THEN 10
    WHEN name = 'ELECTRICIEN A VOTRE SERVICE' AND city = 'Paris' THEN 10
    WHEN name = 'FEDERATION FRANCAISE DU MASSAGE BIEN ETRE (FFMBE)' AND city = 'Paris' THEN 10
    WHEN name = 'BALM RESTAURANT' AND city = 'Paris' THEN 10
    WHEN name = 'RESTAURANT CHARLY' AND city = 'Paris' THEN 10
    WHEN name = 'SOCIETE FRANCAISE D''EXPLOITATION DE RESTAURANT (SO.FE.REST.) (SOFEREST)' AND city = 'Paris' THEN 40
    WHEN name = 'LES RESTAURANTS BISTROT SOLEIL' AND city = 'Paris' THEN 10
    WHEN name = 'TEAM RESTAURANT' AND city = 'Paris' THEN 10
    WHEN name = 'RESTAURANT ARTIGIANALE' AND city = 'Paris' THEN 10
    WHEN name = 'VERT RESTAURANT' AND city = 'Paris' THEN 10
    WHEN name = 'LE 360 RESTAURANT' AND city = 'Paris' THEN 10
    WHEN name = 'LA BOULANGERIE' AND city = 'Paris' THEN 10
    WHEN name = 'LA BOULANGERIE PLEYEL' AND city = 'Paris' THEN 40
    WHEN name = 'BOULANGERIE DES DAMES' AND city = 'Paris' THEN 10
    WHEN name = 'CINNAMON BOULANGERIE' AND city = 'Paris' THEN 10
    WHEN name = 'LA BOULANGERIE' AND city = 'Paris' THEN 10
    WHEN name = 'DES BOULANGERIES' AND city = 'Paris' THEN 40
    WHEN name = 'BOULANGERIE HAUSSMANN' AND city = 'Paris' THEN 10
    WHEN name = 'ARTISAN ROUSSEAU' AND city = 'Paris' THEN 10
    WHEN name = 'LES ARTISANS DU PORTAIL (ARTISAN DU COIN)' AND city = 'Paris' THEN 10
    WHEN name = 'ARTISANS MULTISERVICES' AND city = 'Paris' THEN 10
    WHEN name = 'ARTISAN BERTRAND' AND city = 'Paris' THEN 10
    WHEN name = 'ARTISAN ROBERT (ARTISAN ROBERT)' AND city = 'Paris' THEN 10
    WHEN name = 'FRANCE ARTISAN' AND city = 'Paris' THEN 40
    WHEN name = 'ARTISANS DEPANNAGE SERVICE (ADS)' AND city = 'Paris' THEN 10
    WHEN name = 'AU CARREFOUR DES ARTISANS (A.C.A)' AND city = 'Paris' THEN 10
    WHEN name = 'HELP ARTISAN (HELP ISOLATION)' AND city = 'Paris' THEN 10
    WHEN name = 'L'' ARTISAN PARFUMEUR S.A.R.L.' AND city = 'Paris' THEN 10
    WHEN name = 'ARTISAN SOLUTION RAPIDE' AND city = 'Paris' THEN 40
    WHEN name = 'ARTISANS DE PROXIMITE (ETS FOUCAULT)' AND city = 'Paris' THEN 10
    WHEN name = 'LES BONS ARTISANS' AND city = 'Paris' THEN 10
    WHEN name = 'LES ARTISANS DE SEINE ET MARNE (ETABLISSEMENT PICARD ET FILS)' AND city = 'Paris' THEN 10
    WHEN name = 'ABL ARTISAN' AND city = 'Paris' THEN 40
    WHEN name = 'PAPY COIFFEUR' AND city = 'Paris' THEN 10
    WHEN name = 'ALLO PLOMBIER' AND city = 'Paris' THEN 10
    WHEN name = 'ASR PLOMBIER (ASR PLOMBIER PARIS)' AND city = 'Paris' THEN 10
    WHEN name = 'CHER PLOMBIER PAS' AND city = 'Paris' THEN 10
    WHEN name = 'TARIF PLOMBIER' AND city = 'Paris' THEN 10
    WHEN name = 'CHAUFFAGISTE PLOMBIER' AND city = 'Paris' THEN 10
    WHEN name = 'PLOMBIER SOS' AND city = 'Paris' THEN 10
    WHEN name = 'MOI PLOMBIER AUTOUR DE MOI' AND city = 'Paris' THEN 10
    WHEN name = 'PROXIMITE PLOMBIER A' AND city = 'Paris' THEN 10
    WHEN name = 'PARIS PLOMBIER URGENCE' AND city = 'Paris' THEN 10
    WHEN name = 'BASICO PLOMBIER CHAUFFAGISTE (BPC)' AND city = 'Paris' THEN 10
    WHEN name = 'PLOMBIER - VOISINAGE' AND city = 'Paris' THEN 10
    WHEN name = 'CYCL''EAU PLOMBIER (CYCLE DEPANNAGE)' AND city = 'Paris' THEN 10
    WHEN name = 'FORMA-PLOMBIER' AND city = 'Paris' THEN 10
    WHEN name = 'L''AMI PLOMBIER' AND city = 'Paris' THEN 10
    WHEN name = 'SDN PLOMBIER' AND city = 'Paris' THEN 40
    WHEN name = 'ELECTRICIENS SANS FRONTIERES L''ENERGIE DU DEVELOPPEMENT' AND city = 'Paris' THEN 10
    WHEN name = 'ELECTRICIENS DE PARIS (EDP)' AND city = 'Paris' THEN 10
    WHEN name = 'LES ELECTRICIENS DE PONTOISE' AND city = 'Paris' THEN 10
    WHEN name = 'LA MAISON DES ELECTRICIENS (LMDE)' AND city = 'Paris' THEN 10
    WHEN name = 'ADRIEN ELECTRICIEN' AND city = 'Paris' THEN 10
    WHEN name = 'LE TRAIT D UNION ELECTRICIENS' AND city = 'Paris' THEN 10
    WHEN name = 'ELECTRICIENS ASSOCIES DE FRANCE' AND city = 'Paris' THEN 10
    WHEN name = 'MON ELECTRICIEN A VELO (MEAV)' AND city = 'Paris' THEN 10
    WHEN name = 'A VOTRE SERVICE PLOMBIER CHAUFFAGISTE SERRURIER VITRIER ELECTRICIEN' AND city = 'Paris' THEN 10
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.E.G.F)' AND city = 'Paris' THEN 10
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.E.G.F)' AND city = 'Paris' THEN 10
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (CO-EGF)' AND city = 'Paris' THEN 10
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.E.G.F)' AND city = 'Paris' THEN 10
    WHEN name = 'CLUBS OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.E.G.F)' AND city = 'Paris' THEN 10
    WHEN name = 'CLUB OMNISPORTS DES ELECTRICIENS ET GAZIERS DE FRANCE (C.O.-E.G.F.)' AND city = 'Paris' THEN 10
    WHEN name = 'DEMATHIEU BARD CONSTRUCTION' AND city = 'Paris' THEN 10
    WHEN name = 'EIFFAGE CONSTRUCTION EQUIPEMENTS' AND city = 'Paris' THEN 10
    WHEN name = 'EIFFAGE CONSTRUCTION HABITAT' AND city = 'Paris' THEN 10
    WHEN name = 'NOVE CONSTRUCTION' AND city = 'Paris' THEN 10
    WHEN name = 'VM CONSTRUCTIONS' AND city = 'Paris' THEN 10
    WHEN name = 'SILVER CONSTRUCTION' AND city = 'Paris' THEN 10
    WHEN name = 'EIFFAGE CONSTRUCTION GRANDS PROJETS' AND city = 'Paris' THEN 10
    WHEN name = 'NOVARE CONSTRUCTION (HEMEA)' AND city = 'Paris' THEN 10
    WHEN name = 'HML CONSTRUCTION' AND city = 'Paris' THEN 10
    WHEN name = 'FOSTER CONSTRUCTION' AND city = 'Paris' THEN 10
    WHEN name = 'CIE IMMOBILIERE CONSTRUCTION GESTION (CICOGE)' AND city = 'Paris' THEN 40
    WHEN name = 'EIFFAGE CONSTRUCTION RESIDENTIEL ET FONCTIONNEL' AND city = 'Paris' THEN 10
    WHEN name = 'COEUR DE CITE' AND city = 'Paris' THEN 10
    WHEN name = 'VILLE DE PARIS' AND city = 'Paris' THEN 10
    WHEN name = 'ASS DE BIEN ETRE MASSAGE AYURVEDIQUE (ABEMA)' AND city = 'Paris' THEN 10
    ELSE "webVisibilityScore"
  END
WHERE city = 'Paris';