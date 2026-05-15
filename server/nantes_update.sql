-- UPDATE enrichment for Nantes (159 prospects)
UPDATE "prospectsPotentiels" SET
  "hasWebsite" = CASE
    WHEN name = 'TOUR DE LA BOULANGERIE' AND city = 'Nantes' THEN false
    WHEN name = 'RESTAURANT LAMACCOTTE' AND city = 'Nantes' THEN true
    WHEN name = 'RESTAURANT LE PELICAN' AND city = 'Nantes' THEN true
    WHEN name = 'MAJU RESTAURANT (RESTAURANT MAJU)' AND city = 'Nantes' THEN true
    WHEN name = 'LE COIFFEUR D''ADRIEN' AND city = 'Nantes' THEN true
    WHEN name = 'ARTISAN COIFFEUR VP' AND city = 'Nantes' THEN false
    WHEN name = 'J&M RESTAURANT' AND city = 'Nantes' THEN false
    WHEN name = 'SOULMATE RESTAURANT (A CASETTA)' AND city = 'Nantes' THEN true
    WHEN name = 'RESTAURANT CHEZ NOUS' AND city = 'Nantes' THEN false
    WHEN name = 'BOULANGERIES PAUL' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE PATISSERIE OLIVIER' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE PATISSERIE ALLARD' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE PATISSERIE GUIBERT' AND city = 'Nantes' THEN true
    WHEN name = 'LA PETITE BOULANGERIE' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE ISAAC' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE NICOLAS' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE DION' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE LE TREIZE' AND city = 'Nantes' THEN false
    WHEN name = 'ARNO BOULANGERIE' AND city = 'Nantes' THEN true
    WHEN name = 'SOC INTERP ARTISAN GARANTIE INVESTISSE (SIAGI)' AND city = 'Nantes' THEN false
    WHEN name = 'LES ARTISANS DU CHATEAU' AND city = 'Nantes' THEN true
    WHEN name = 'COIFFEURS ASSOCIES' AND city = 'Nantes' THEN false
    WHEN name = 'LA MAISON DU COIFFEUR' AND city = 'Nantes' THEN true
    WHEN name = 'SAMIR COIFFEUR' AND city = 'Nantes' THEN false
    WHEN name = '6 ARTISAN COIFFEUR' AND city = 'Nantes' THEN true
    WHEN name = 'EXPOSITO COIFFEURS LE POULIGUEN' AND city = 'Nantes' THEN false
    WHEN name = 'BUREAU VERITAS CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'APAVE INFRASTRUCTURES ET CONSTRUCTION FRANCE' AND city = 'Nantes' THEN true
    WHEN name = 'CERUTTI CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'MORTIER CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'ALTA CONSTRUCTIONS' AND city = 'Nantes' THEN true
    WHEN name = 'EIFFAGE CONSTRUCTION BRETAGNE (ECB)' AND city = 'Nantes' THEN true
    WHEN name = 'LOCKROY CONSTRUCTION (LOCKROY CONSTRUCTION)' AND city = 'Nantes' THEN true
    WHEN name = 'DEPREUX-CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'ORVAULT SPORTS BASKET' AND city = 'Nantes' THEN true
    WHEN name = 'AILES SPORT BOUGUENAIS REZE VOLLEY BALL (ASBR)' AND city = 'Nantes' THEN true
    WHEN name = 'RESTAURANT BENUREAU' AND city = 'Nantes' THEN true
    WHEN name = 'RESTAURANT LE JADE (LE JADE)' AND city = 'Nantes' THEN true
    WHEN name = 'FP RESTAURANT' AND city = 'Nantes' THEN true
    WHEN name = 'SARL GEM BOULANGERIE (MAISON GUICHARD)' AND city = 'Nantes' THEN false
    WHEN name = 'BOULANGERIE SPPINEAU (BOULANGERIE SPPINEAU SARL)' AND city = 'Nantes' THEN true
    WHEN name = 'CENTRALE DES ARTISANS COIFFEURS C.A.C.' AND city = 'Nantes' THEN true
    WHEN name = 'ARTISANS REUNIS BOIS ATLANTIQUE (ARBA)' AND city = 'Nantes' THEN true
    WHEN name = 'LES ARTISANS DU GOUT' AND city = 'Nantes' THEN false
    WHEN name = 'ARTISANS DU PAYSAGE' AND city = 'Nantes' THEN true
    WHEN name = 'COIFFEUR EL SALAM' AND city = 'Nantes' THEN true
    WHEN name = 'LES COIFFEURS DE SAINT HERBLAIN' AND city = 'Nantes' THEN false
    WHEN name = 'LC FRANKLIN (LE COIFFEUR)' AND city = 'Nantes' THEN true
    WHEN name = 'BERTHELOT CONSTRUCTIONS (BERTHELOT CONSTRUCTIONS - NIVO''CONCEPT)' AND city = 'Nantes' THEN true
    WHEN name = 'PAMPRES VALLETAIS BASKET' AND city = 'Nantes' THEN true
    WHEN name = 'FALLERON TOUVOIS BASKET CLUB' AND city = 'Nantes' THEN true
    WHEN name = 'SEVRE ET MAINE BASKET' AND city = 'Nantes' THEN false
    WHEN name = 'TORTILLA RESTAURANTS SAS' AND city = 'Nantes' THEN true
    WHEN name = 'RESTAURANT DGFIP (ASSOCIATION)' AND city = 'Nantes' THEN true
    WHEN name = 'HABESHA RESTAURANT' AND city = 'Nantes' THEN true
    WHEN name = 'MIX''AGE RESTAURANT' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIES BG (B B G)' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE BELOIN' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE JAMET' AND city = 'Nantes' THEN true
    WHEN name = 'FLO BOULANGERIE' AND city = 'Nantes' THEN false
    WHEN name = 'ARTISAN PRO RENOVATION (APR)' AND city = 'Nantes' THEN true
    WHEN name = 'ARTISAN COUVREUR JUDALET' AND city = 'Nantes' THEN true
    WHEN name = 'L''ARTISAN COIFFEUR' AND city = 'Nantes' THEN true
    WHEN name = 'S.A.R COIFFEUR' AND city = 'Nantes' THEN true
    WHEN name = 'A TWO COIFFEUR' AND city = 'Nantes' THEN true
    WHEN name = 'MLLE C. COIFFEUR - BARBIER' AND city = 'Nantes' THEN true
    WHEN name = 'HAPPY CURL' AND city = 'Nantes' THEN false
    WHEN name = 'LES 2 PLOMBIERS' AND city = 'Nantes' THEN true
    WHEN name = 'LE PLOMBIER DU COIN' AND city = 'Nantes' THEN true
    WHEN name = 'ORCAB' AND city = 'Nantes' THEN true
    WHEN name = 'SOCOTEC CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'CONSTRUCTEL CONSTRUCTIONS TELECOMMUNICA.' AND city = 'Nantes' THEN true
    WHEN name = 'OPERATEUR DE COMPETENCES DE LA CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'BOUYGUES CONSTRUCTION MATERIEL' AND city = 'Nantes' THEN true
    WHEN name = 'BADMINTON SPORT LOISIRS' AND city = 'Nantes' THEN true
    WHEN name = 'OFFICE INTERCOMMUNAL DES SPORTS DE LA PRESQU''ILE GUERANDAISE' AND city = 'Nantes' THEN true
    WHEN name = 'ASSO SPORT ET CULTURE LA GILLES DE RETZ' AND city = 'Nantes' THEN true
    WHEN name = 'UNION SPORTIVE DE SAINTE-REINE-DE-BRETAGNE DE HANDBALL' AND city = 'Nantes' THEN true
    WHEN name = 'TENNIS CLUB NICOLASIEN' AND city = 'Nantes' THEN true
    WHEN name = 'BADMINTON DE CASSON' AND city = 'Nantes' THEN true
    WHEN name = 'TENNIS CLUB CASSONNAIS (T2C)' AND city = 'Nantes' THEN false
    WHEN name = 'RESPIRE CASSON' AND city = 'Nantes' THEN true
    WHEN name = 'TENNIS DE TABLE MAISDONNAIS' AND city = 'Nantes' THEN true
    WHEN name = 'JEAN JAURES ST NAZAIRE TENNIS DE TABLE' AND city = 'Nantes' THEN true
    WHEN name = 'PHUSANISA YANGDUMRONG (THAI MASSAGE BIEN-ETRE)' AND city = 'Nantes' THEN true
    WHEN name = 'ISABELLE BOSSE (MASSAGE BIEN ETRE ISABELLE)' AND city = 'Nantes' THEN true
    WHEN name = 'VANESSA SANQUER (DOUCEUR INFINIE MASSAGES BIEN-ETRE)' AND city = 'Nantes' THEN false
    WHEN name = 'STEPHANIE BLANCHARD (PHELIPPON) (IN''STEM PAISIBLE MASSAGE BIEN-ETRE)' AND city = 'Nantes' THEN true
    WHEN name = 'DIMITRI RAVON (LE REPOS DES CHAKRAS - MASSAGE BIEN-ETRE)' AND city = 'Nantes' THEN true
    WHEN name = 'JENNAI BAKHA (MASSAGE BIEN-ETRE)' AND city = 'Nantes' THEN false
    WHEN name = 'RESTAURANT LA BOUILLABAISSE' AND city = 'Nantes' THEN true
    WHEN name = 'ABAGE ARTISANS REUNIS' AND city = 'Nantes' THEN true
    WHEN name = 'LE PLOMBIER DE VILLENEUVE (LE PLOMBIER DE VILLENEUVE)' AND city = 'Nantes' THEN true
    WHEN name = 'MON PLOMBIER ERIC CORMERAIS (MON PLOMBIER ERIC CORMERAIS)' AND city = 'Nantes' THEN false
    WHEN name = 'GROUPEMENT COOPERATIF ARTISANS PLOMBIERS' AND city = 'Nantes' THEN true
    WHEN name = 'SARL AUBINEAU PLOMBIER CHAUFFAGISTE (SARL AUBINEAU PLOMBIER CHAUFFAGISTE)' AND city = 'Nantes' THEN false
    WHEN name = 'CIMEO CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'COMMUNE DE TREILLIERES' AND city = 'Nantes' THEN true
    WHEN name = 'VELO SPORT VALLETAIS' AND city = 'Nantes' THEN true
    WHEN name = 'RESTAURANT MARCEL' AND city = 'Nantes' THEN true
    WHEN name = 'DJERBA RESTAURANT' AND city = 'Nantes' THEN true
    WHEN name = 'RESTAURANT VERNET' AND city = 'Nantes' THEN true
    WHEN name = 'RESTAURANT DIMFONG' AND city = 'Nantes' THEN false
    WHEN name = 'F.C.A. RESTAURANT' AND city = 'Nantes' THEN true
    WHEN name = 'RESTAURANT DE LA REINE' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE EMERIAU' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE PAPILLON CF' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE DAVIS' AND city = 'Nantes' THEN true
    WHEN name = 'LES ARTISANS DU LARGE' AND city = 'Nantes' THEN true
    WHEN name = 'ARTISAN THIBAULT (ARTISAN THIBAULT)' AND city = 'Nantes' THEN true
    WHEN name = 'LA PLATEFORME DES ARTISANS (ETS DEHAINE, DEHAINE PERE ET FILS)' AND city = 'Nantes' THEN true
    WHEN name = 'AARNAUD ARTISANS (ARNAUD ARTISANS)' AND city = 'Nantes' THEN true
    WHEN name = 'L''ARTISAN COIFFEUR' AND city = 'Nantes' THEN true
    WHEN name = 'L''ARTISAN' AND city = 'Nantes' THEN true
    WHEN name = 'LES ARTISANES DU SOURIRE' AND city = 'Nantes' THEN true
    WHEN name = 'L''ARTISAN DECORATEUR' AND city = 'Nantes' THEN true
    WHEN name = 'ARTISANS DU DESERT' AND city = 'Nantes' THEN true
    WHEN name = 'LES ARTISANS DU CHANGEMENT' AND city = 'Nantes' THEN true
    WHEN name = 'SYND MAITRE ET ARTISA COIFFEUR' AND city = 'Nantes' THEN false
    WHEN name = 'COOPERATIVE ARTISANALE COIFFEURS OUEST' AND city = 'Nantes' THEN true
    WHEN name = 'CLC' AND city = 'Nantes' THEN true
    WHEN name = 'LE PLOMBIER BREVINOIS' AND city = 'Nantes' THEN true
    WHEN name = 'LE PLOMBIER NANTAIS' AND city = 'Nantes' THEN true
    WHEN name = 'LE PLOMBIER LANDAIS' AND city = 'Nantes' THEN false
    WHEN name = 'PLOMBIER DMS' AND city = 'Nantes' THEN true
    WHEN name = 'ABC DU PLOMBIER (ABC DU PLOMBIER)' AND city = 'Nantes' THEN true
    WHEN name = 'C''EST L''PLOMBIER !' AND city = 'Nantes' THEN false
    WHEN name = 'ALEXANDRE PLOMBIER CHAUFFAGISTE (ERDRE ET LOIRE CONFORT) (APC)' AND city = 'Nantes' THEN true
    WHEN name = 'ARTISAN PLOMBIER ET CHAUFFAGISTE (ARPEC) (ARPEC)' AND city = 'Nantes' THEN false
    WHEN name = 'A L''EAU PLOMBIER (A L''EAU PLOMBIER)' AND city = 'Nantes' THEN true
    WHEN name = 'M. PLOMBIER SUCE SUR ERDRE (M. PLOMBIER) (MPSSE)' AND city = 'Nantes' THEN true
    WHEN name = 'DOM ELECTRICIEN PLOMBIER' AND city = 'Nantes' THEN true
    WHEN name = 'DL PLOMBIER CHAUFFAGISTE' AND city = 'Nantes' THEN true
    WHEN name = 'O PLOMBIER' AND city = 'Nantes' THEN true
    WHEN name = 'PLOMBIERS ET CARRELEURS ASSOCIES' AND city = 'Nantes' THEN true
    WHEN name = 'ELECTRICIENS SANS FRONTIERES L''ENERGIE DU DEVELOPPEMENT' AND city = 'Nantes' THEN true
    WHEN name = 'L''ATELIER DE L ELECTRICIEN' AND city = 'Nantes' THEN true
    WHEN name = 'L''ARTISAN ELECTRICIEN' AND city = 'Nantes' THEN true
    WHEN name = 'MARIEN L''ELECTRICIEN' AND city = 'Nantes' THEN true
    WHEN name = 'ARTISAN ELECTRICIEN BREVINOIS (AEB ARTISAN ELECTRICIEN BREVINOIS)' AND city = 'Nantes' THEN true
    WHEN name = 'ARTISAN ELECTRICIEN DU BATIMENT 44 (A.B. 44) (A.B. 44)' AND city = 'Nantes' THEN true
    WHEN name = 'RENAUD CONSTRUCTION PLAQUISTE ELECTRICIEN (RCPE)' AND city = 'Nantes' THEN false
    WHEN name = 'SOCIETE NOUVELLE DES ETABLISSEMENTS JULES VERGER ET DELPORTE-LES ELECTRICIENS DE FRANCE V.D (VD)' AND city = 'Nantes' THEN true
    WHEN name = 'ELECTRICIENS SANS FRONTIERE PAYS LOIRE (ASS)' AND city = 'Nantes' THEN true
    WHEN name = 'MANIL' AND city = 'Nantes' THEN true
    WHEN name = 'ELNUR ISAYEV (ELECTRICIEN ELNUR ISAYEV)' AND city = 'Nantes' THEN true
    WHEN name = 'FELIX BARRAUD DE LAGERIE (L''ELECTRICIEN DU COIN 44)' AND city = 'Nantes' THEN true
    WHEN name = 'NICOLAS YOUBI (NICOLAS YOUBI ELECTRICIEN)' AND city = 'Nantes' THEN true
    WHEN name = 'MICKAEL AVRIL (LE PETIT ELECTRICIEN DU COIN)' AND city = 'Nantes' THEN true
    WHEN name = 'LEBRETON INVESTISSEMENT' AND city = 'Nantes' THEN true
    WHEN name = 'CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'VINCI CONSTRUCTION FRANCE' AND city = 'Nantes' THEN true
    WHEN name = 'DEMATHIEU BARD CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'SA D''HLM  AIGUILLON CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'BOUYGUES CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'DBL CONSTRUCTIONS' AND city = 'Nantes' THEN true
    WHEN name = 'NANTES BASKET SPORT' AND city = 'Nantes' THEN true
    WHEN name = 'ASSOCIATION MUSICALE SEVRE ET MUSIQUE' AND city = 'Nantes' THEN true
    WHEN name = 'L ESPERANCE DE CAMPBON' AND city = 'Nantes' THEN true
    ELSE "hasWebsite"
  END,
  "hasActiveWebsite" = CASE
    WHEN name = 'TOUR DE LA BOULANGERIE' AND city = 'Nantes' THEN false
    WHEN name = 'RESTAURANT LAMACCOTTE' AND city = 'Nantes' THEN true
    WHEN name = 'RESTAURANT LE PELICAN' AND city = 'Nantes' THEN true
    WHEN name = 'MAJU RESTAURANT (RESTAURANT MAJU)' AND city = 'Nantes' THEN true
    WHEN name = 'LE COIFFEUR D''ADRIEN' AND city = 'Nantes' THEN true
    WHEN name = 'ARTISAN COIFFEUR VP' AND city = 'Nantes' THEN false
    WHEN name = 'J&M RESTAURANT' AND city = 'Nantes' THEN false
    WHEN name = 'SOULMATE RESTAURANT (A CASETTA)' AND city = 'Nantes' THEN true
    WHEN name = 'RESTAURANT CHEZ NOUS' AND city = 'Nantes' THEN false
    WHEN name = 'BOULANGERIES PAUL' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE PATISSERIE OLIVIER' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE PATISSERIE ALLARD' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE PATISSERIE GUIBERT' AND city = 'Nantes' THEN true
    WHEN name = 'LA PETITE BOULANGERIE' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE ISAAC' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE NICOLAS' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE DION' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE LE TREIZE' AND city = 'Nantes' THEN false
    WHEN name = 'ARNO BOULANGERIE' AND city = 'Nantes' THEN true
    WHEN name = 'SOC INTERP ARTISAN GARANTIE INVESTISSE (SIAGI)' AND city = 'Nantes' THEN false
    WHEN name = 'LES ARTISANS DU CHATEAU' AND city = 'Nantes' THEN true
    WHEN name = 'COIFFEURS ASSOCIES' AND city = 'Nantes' THEN false
    WHEN name = 'LA MAISON DU COIFFEUR' AND city = 'Nantes' THEN true
    WHEN name = 'SAMIR COIFFEUR' AND city = 'Nantes' THEN false
    WHEN name = '6 ARTISAN COIFFEUR' AND city = 'Nantes' THEN true
    WHEN name = 'EXPOSITO COIFFEURS LE POULIGUEN' AND city = 'Nantes' THEN false
    WHEN name = 'BUREAU VERITAS CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'APAVE INFRASTRUCTURES ET CONSTRUCTION FRANCE' AND city = 'Nantes' THEN true
    WHEN name = 'CERUTTI CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'MORTIER CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'ALTA CONSTRUCTIONS' AND city = 'Nantes' THEN true
    WHEN name = 'EIFFAGE CONSTRUCTION BRETAGNE (ECB)' AND city = 'Nantes' THEN true
    WHEN name = 'LOCKROY CONSTRUCTION (LOCKROY CONSTRUCTION)' AND city = 'Nantes' THEN true
    WHEN name = 'DEPREUX-CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'ORVAULT SPORTS BASKET' AND city = 'Nantes' THEN true
    WHEN name = 'AILES SPORT BOUGUENAIS REZE VOLLEY BALL (ASBR)' AND city = 'Nantes' THEN true
    WHEN name = 'RESTAURANT BENUREAU' AND city = 'Nantes' THEN true
    WHEN name = 'RESTAURANT LE JADE (LE JADE)' AND city = 'Nantes' THEN true
    WHEN name = 'FP RESTAURANT' AND city = 'Nantes' THEN true
    WHEN name = 'SARL GEM BOULANGERIE (MAISON GUICHARD)' AND city = 'Nantes' THEN false
    WHEN name = 'BOULANGERIE SPPINEAU (BOULANGERIE SPPINEAU SARL)' AND city = 'Nantes' THEN true
    WHEN name = 'CENTRALE DES ARTISANS COIFFEURS C.A.C.' AND city = 'Nantes' THEN true
    WHEN name = 'ARTISANS REUNIS BOIS ATLANTIQUE (ARBA)' AND city = 'Nantes' THEN true
    WHEN name = 'LES ARTISANS DU GOUT' AND city = 'Nantes' THEN false
    WHEN name = 'ARTISANS DU PAYSAGE' AND city = 'Nantes' THEN true
    WHEN name = 'COIFFEUR EL SALAM' AND city = 'Nantes' THEN true
    WHEN name = 'LES COIFFEURS DE SAINT HERBLAIN' AND city = 'Nantes' THEN false
    WHEN name = 'LC FRANKLIN (LE COIFFEUR)' AND city = 'Nantes' THEN true
    WHEN name = 'BERTHELOT CONSTRUCTIONS (BERTHELOT CONSTRUCTIONS - NIVO''CONCEPT)' AND city = 'Nantes' THEN true
    WHEN name = 'PAMPRES VALLETAIS BASKET' AND city = 'Nantes' THEN true
    WHEN name = 'FALLERON TOUVOIS BASKET CLUB' AND city = 'Nantes' THEN true
    WHEN name = 'SEVRE ET MAINE BASKET' AND city = 'Nantes' THEN false
    WHEN name = 'TORTILLA RESTAURANTS SAS' AND city = 'Nantes' THEN true
    WHEN name = 'RESTAURANT DGFIP (ASSOCIATION)' AND city = 'Nantes' THEN true
    WHEN name = 'HABESHA RESTAURANT' AND city = 'Nantes' THEN true
    WHEN name = 'MIX''AGE RESTAURANT' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIES BG (B B G)' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE BELOIN' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE JAMET' AND city = 'Nantes' THEN true
    WHEN name = 'FLO BOULANGERIE' AND city = 'Nantes' THEN false
    WHEN name = 'ARTISAN PRO RENOVATION (APR)' AND city = 'Nantes' THEN true
    WHEN name = 'ARTISAN COUVREUR JUDALET' AND city = 'Nantes' THEN true
    WHEN name = 'L''ARTISAN COIFFEUR' AND city = 'Nantes' THEN true
    WHEN name = 'S.A.R COIFFEUR' AND city = 'Nantes' THEN true
    WHEN name = 'A TWO COIFFEUR' AND city = 'Nantes' THEN true
    WHEN name = 'MLLE C. COIFFEUR - BARBIER' AND city = 'Nantes' THEN true
    WHEN name = 'HAPPY CURL' AND city = 'Nantes' THEN false
    WHEN name = 'LES 2 PLOMBIERS' AND city = 'Nantes' THEN true
    WHEN name = 'LE PLOMBIER DU COIN' AND city = 'Nantes' THEN true
    WHEN name = 'ORCAB' AND city = 'Nantes' THEN true
    WHEN name = 'SOCOTEC CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'CONSTRUCTEL CONSTRUCTIONS TELECOMMUNICA.' AND city = 'Nantes' THEN true
    WHEN name = 'OPERATEUR DE COMPETENCES DE LA CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'BOUYGUES CONSTRUCTION MATERIEL' AND city = 'Nantes' THEN true
    WHEN name = 'BADMINTON SPORT LOISIRS' AND city = 'Nantes' THEN true
    WHEN name = 'OFFICE INTERCOMMUNAL DES SPORTS DE LA PRESQU''ILE GUERANDAISE' AND city = 'Nantes' THEN true
    WHEN name = 'ASSO SPORT ET CULTURE LA GILLES DE RETZ' AND city = 'Nantes' THEN true
    WHEN name = 'UNION SPORTIVE DE SAINTE-REINE-DE-BRETAGNE DE HANDBALL' AND city = 'Nantes' THEN true
    WHEN name = 'TENNIS CLUB NICOLASIEN' AND city = 'Nantes' THEN true
    WHEN name = 'BADMINTON DE CASSON' AND city = 'Nantes' THEN true
    WHEN name = 'TENNIS CLUB CASSONNAIS (T2C)' AND city = 'Nantes' THEN false
    WHEN name = 'RESPIRE CASSON' AND city = 'Nantes' THEN true
    WHEN name = 'TENNIS DE TABLE MAISDONNAIS' AND city = 'Nantes' THEN true
    WHEN name = 'JEAN JAURES ST NAZAIRE TENNIS DE TABLE' AND city = 'Nantes' THEN true
    WHEN name = 'PHUSANISA YANGDUMRONG (THAI MASSAGE BIEN-ETRE)' AND city = 'Nantes' THEN true
    WHEN name = 'ISABELLE BOSSE (MASSAGE BIEN ETRE ISABELLE)' AND city = 'Nantes' THEN true
    WHEN name = 'VANESSA SANQUER (DOUCEUR INFINIE MASSAGES BIEN-ETRE)' AND city = 'Nantes' THEN false
    WHEN name = 'STEPHANIE BLANCHARD (PHELIPPON) (IN''STEM PAISIBLE MASSAGE BIEN-ETRE)' AND city = 'Nantes' THEN true
    WHEN name = 'DIMITRI RAVON (LE REPOS DES CHAKRAS - MASSAGE BIEN-ETRE)' AND city = 'Nantes' THEN true
    WHEN name = 'JENNAI BAKHA (MASSAGE BIEN-ETRE)' AND city = 'Nantes' THEN false
    WHEN name = 'RESTAURANT LA BOUILLABAISSE' AND city = 'Nantes' THEN true
    WHEN name = 'ABAGE ARTISANS REUNIS' AND city = 'Nantes' THEN true
    WHEN name = 'LE PLOMBIER DE VILLENEUVE (LE PLOMBIER DE VILLENEUVE)' AND city = 'Nantes' THEN true
    WHEN name = 'MON PLOMBIER ERIC CORMERAIS (MON PLOMBIER ERIC CORMERAIS)' AND city = 'Nantes' THEN false
    WHEN name = 'GROUPEMENT COOPERATIF ARTISANS PLOMBIERS' AND city = 'Nantes' THEN true
    WHEN name = 'SARL AUBINEAU PLOMBIER CHAUFFAGISTE (SARL AUBINEAU PLOMBIER CHAUFFAGISTE)' AND city = 'Nantes' THEN false
    WHEN name = 'CIMEO CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'COMMUNE DE TREILLIERES' AND city = 'Nantes' THEN true
    WHEN name = 'VELO SPORT VALLETAIS' AND city = 'Nantes' THEN true
    WHEN name = 'RESTAURANT MARCEL' AND city = 'Nantes' THEN true
    WHEN name = 'DJERBA RESTAURANT' AND city = 'Nantes' THEN true
    WHEN name = 'RESTAURANT VERNET' AND city = 'Nantes' THEN true
    WHEN name = 'RESTAURANT DIMFONG' AND city = 'Nantes' THEN false
    WHEN name = 'F.C.A. RESTAURANT' AND city = 'Nantes' THEN true
    WHEN name = 'RESTAURANT DE LA REINE' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE EMERIAU' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE PAPILLON CF' AND city = 'Nantes' THEN true
    WHEN name = 'BOULANGERIE DAVIS' AND city = 'Nantes' THEN true
    WHEN name = 'LES ARTISANS DU LARGE' AND city = 'Nantes' THEN true
    WHEN name = 'ARTISAN THIBAULT (ARTISAN THIBAULT)' AND city = 'Nantes' THEN true
    WHEN name = 'LA PLATEFORME DES ARTISANS (ETS DEHAINE, DEHAINE PERE ET FILS)' AND city = 'Nantes' THEN true
    WHEN name = 'AARNAUD ARTISANS (ARNAUD ARTISANS)' AND city = 'Nantes' THEN true
    WHEN name = 'L''ARTISAN COIFFEUR' AND city = 'Nantes' THEN true
    WHEN name = 'L''ARTISAN' AND city = 'Nantes' THEN true
    WHEN name = 'LES ARTISANES DU SOURIRE' AND city = 'Nantes' THEN true
    WHEN name = 'L''ARTISAN DECORATEUR' AND city = 'Nantes' THEN true
    WHEN name = 'ARTISANS DU DESERT' AND city = 'Nantes' THEN true
    WHEN name = 'LES ARTISANS DU CHANGEMENT' AND city = 'Nantes' THEN true
    WHEN name = 'SYND MAITRE ET ARTISA COIFFEUR' AND city = 'Nantes' THEN false
    WHEN name = 'COOPERATIVE ARTISANALE COIFFEURS OUEST' AND city = 'Nantes' THEN true
    WHEN name = 'CLC' AND city = 'Nantes' THEN true
    WHEN name = 'LE PLOMBIER BREVINOIS' AND city = 'Nantes' THEN true
    WHEN name = 'LE PLOMBIER NANTAIS' AND city = 'Nantes' THEN true
    WHEN name = 'LE PLOMBIER LANDAIS' AND city = 'Nantes' THEN false
    WHEN name = 'PLOMBIER DMS' AND city = 'Nantes' THEN true
    WHEN name = 'ABC DU PLOMBIER (ABC DU PLOMBIER)' AND city = 'Nantes' THEN true
    WHEN name = 'C''EST L''PLOMBIER !' AND city = 'Nantes' THEN false
    WHEN name = 'ALEXANDRE PLOMBIER CHAUFFAGISTE (ERDRE ET LOIRE CONFORT) (APC)' AND city = 'Nantes' THEN true
    WHEN name = 'ARTISAN PLOMBIER ET CHAUFFAGISTE (ARPEC) (ARPEC)' AND city = 'Nantes' THEN false
    WHEN name = 'A L''EAU PLOMBIER (A L''EAU PLOMBIER)' AND city = 'Nantes' THEN true
    WHEN name = 'M. PLOMBIER SUCE SUR ERDRE (M. PLOMBIER) (MPSSE)' AND city = 'Nantes' THEN true
    WHEN name = 'DOM ELECTRICIEN PLOMBIER' AND city = 'Nantes' THEN true
    WHEN name = 'DL PLOMBIER CHAUFFAGISTE' AND city = 'Nantes' THEN true
    WHEN name = 'O PLOMBIER' AND city = 'Nantes' THEN true
    WHEN name = 'PLOMBIERS ET CARRELEURS ASSOCIES' AND city = 'Nantes' THEN true
    WHEN name = 'ELECTRICIENS SANS FRONTIERES L''ENERGIE DU DEVELOPPEMENT' AND city = 'Nantes' THEN true
    WHEN name = 'L''ATELIER DE L ELECTRICIEN' AND city = 'Nantes' THEN true
    WHEN name = 'L''ARTISAN ELECTRICIEN' AND city = 'Nantes' THEN true
    WHEN name = 'MARIEN L''ELECTRICIEN' AND city = 'Nantes' THEN true
    WHEN name = 'ARTISAN ELECTRICIEN BREVINOIS (AEB ARTISAN ELECTRICIEN BREVINOIS)' AND city = 'Nantes' THEN true
    WHEN name = 'ARTISAN ELECTRICIEN DU BATIMENT 44 (A.B. 44) (A.B. 44)' AND city = 'Nantes' THEN true
    WHEN name = 'RENAUD CONSTRUCTION PLAQUISTE ELECTRICIEN (RCPE)' AND city = 'Nantes' THEN false
    WHEN name = 'SOCIETE NOUVELLE DES ETABLISSEMENTS JULES VERGER ET DELPORTE-LES ELECTRICIENS DE FRANCE V.D (VD)' AND city = 'Nantes' THEN true
    WHEN name = 'ELECTRICIENS SANS FRONTIERE PAYS LOIRE (ASS)' AND city = 'Nantes' THEN true
    WHEN name = 'MANIL' AND city = 'Nantes' THEN true
    WHEN name = 'ELNUR ISAYEV (ELECTRICIEN ELNUR ISAYEV)' AND city = 'Nantes' THEN true
    WHEN name = 'FELIX BARRAUD DE LAGERIE (L''ELECTRICIEN DU COIN 44)' AND city = 'Nantes' THEN true
    WHEN name = 'NICOLAS YOUBI (NICOLAS YOUBI ELECTRICIEN)' AND city = 'Nantes' THEN true
    WHEN name = 'MICKAEL AVRIL (LE PETIT ELECTRICIEN DU COIN)' AND city = 'Nantes' THEN true
    WHEN name = 'LEBRETON INVESTISSEMENT' AND city = 'Nantes' THEN true
    WHEN name = 'CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'VINCI CONSTRUCTION FRANCE' AND city = 'Nantes' THEN true
    WHEN name = 'DEMATHIEU BARD CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'SA D''HLM  AIGUILLON CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'BOUYGUES CONSTRUCTION' AND city = 'Nantes' THEN true
    WHEN name = 'DBL CONSTRUCTIONS' AND city = 'Nantes' THEN true
    WHEN name = 'NANTES BASKET SPORT' AND city = 'Nantes' THEN true
    WHEN name = 'ASSOCIATION MUSICALE SEVRE ET MUSIQUE' AND city = 'Nantes' THEN true
    WHEN name = 'L ESPERANCE DE CAMPBON' AND city = 'Nantes' THEN true
    ELSE "hasActiveWebsite"
  END,
  website = CASE
    WHEN name = 'TOUR DE LA BOULANGERIE' AND city = 'Nantes' THEN NULL
    WHEN name = 'RESTAURANT LAMACCOTTE' AND city = 'Nantes' THEN 'https://www.lamaccotte-restaurant-nantes.com/'
    WHEN name = 'RESTAURANT LE PELICAN' AND city = 'Nantes' THEN 'https://www.restaurantlepelican.fr/le-restaurant/'
    WHEN name = 'MAJU RESTAURANT (RESTAURANT MAJU)' AND city = 'Nantes' THEN 'https://maju-restaurant.fr/'
    WHEN name = 'LE COIFFEUR D''ADRIEN' AND city = 'Nantes' THEN 'https://www.lecoiffeur-nantes.fr/'
    WHEN name = 'ARTISAN COIFFEUR VP' AND city = 'Nantes' THEN NULL
    WHEN name = 'J&M RESTAURANT' AND city = 'Nantes' THEN NULL
    WHEN name = 'SOULMATE RESTAURANT (A CASETTA)' AND city = 'Nantes' THEN 'https://www.a-casetta.com/notre-carte/nantes/'
    WHEN name = 'RESTAURANT CHEZ NOUS' AND city = 'Nantes' THEN NULL
    WHEN name = 'BOULANGERIES PAUL' AND city = 'Nantes' THEN 'http://www.paul.fr/'
    WHEN name = 'BOULANGERIE PATISSERIE OLIVIER' AND city = 'Nantes' THEN 'https://olivier-bajard.com/'
    WHEN name = 'BOULANGERIE PATISSERIE ALLARD' AND city = 'Nantes' THEN 'https://patisserieallard.fr/'
    WHEN name = 'BOULANGERIE PATISSERIE GUIBERT' AND city = 'Nantes' THEN 'https://autoreserve.com/en/restaurants/or21m9Lg7MgBmVp1THK7'
    WHEN name = 'LA PETITE BOULANGERIE' AND city = 'Nantes' THEN 'https://www.lapetiteboulangerie.fr/'
    WHEN name = 'BOULANGERIE ISAAC' AND city = 'Nantes' THEN 'https://agroalimentaire.e-pro.fr/loire-atlantique/boulangerie-isaac_f3948969'
    WHEN name = 'BOULANGERIE NICOLAS' AND city = 'Nantes' THEN 'https://www.boulangerie-nicolas.fr/patisserie/'
    WHEN name = 'BOULANGERIE DION' AND city = 'Nantes' THEN 'https://www.boulangeriedion.fr/'
    WHEN name = 'BOULANGERIE LE TREIZE' AND city = 'Nantes' THEN NULL
    WHEN name = 'ARNO BOULANGERIE' AND city = 'Nantes' THEN 'https://www.infos-nantes.fr/arno-boulangerie-a-nantes/'
    WHEN name = 'SOC INTERP ARTISAN GARANTIE INVESTISSE (SIAGI)' AND city = 'Nantes' THEN NULL
    WHEN name = 'LES ARTISANS DU CHATEAU' AND city = 'Nantes' THEN 'https://www.chateaunantes.fr/'
    WHEN name = 'COIFFEURS ASSOCIES' AND city = 'Nantes' THEN NULL
    WHEN name = 'LA MAISON DU COIFFEUR' AND city = 'Nantes' THEN 'https://la-maison-du-coiffeur.com/'
    WHEN name = 'SAMIR COIFFEUR' AND city = 'Nantes' THEN NULL
    WHEN name = '6 ARTISAN COIFFEUR' AND city = 'Nantes' THEN 'https://www.6coiffure.com/'
    WHEN name = 'EXPOSITO COIFFEURS LE POULIGUEN' AND city = 'Nantes' THEN NULL
    WHEN name = 'BUREAU VERITAS CONSTRUCTION' AND city = 'Nantes' THEN 'https://construction.bureauveritas.fr/'
    WHEN name = 'APAVE INFRASTRUCTURES ET CONSTRUCTION FRANCE' AND city = 'Nantes' THEN 'https://infrastructures-construction.france.apave.com/'
    WHEN name = 'CERUTTI CONSTRUCTION' AND city = 'Nantes' THEN 'https://www.groupecerutti.fr/'
    WHEN name = 'MORTIER CONSTRUCTION' AND city = 'Nantes' THEN 'https://www.mortier-construction.fr/'
    WHEN name = 'ALTA CONSTRUCTIONS' AND city = 'Nantes' THEN 'https://www.dnb.com/business-directory/company-profiles.alta_constructions.afa0d30b0f24d90d809bf699440e8c15.html'
    WHEN name = 'EIFFAGE CONSTRUCTION BRETAGNE (ECB)' AND city = 'Nantes' THEN 'https://www.eiffageconstruction.com/'
    WHEN name = 'LOCKROY CONSTRUCTION (LOCKROY CONSTRUCTION)' AND city = 'Nantes' THEN 'https://lockroy.fr/'
    WHEN name = 'DEPREUX-CONSTRUCTION' AND city = 'Nantes' THEN 'https://www.depreux-construction.com/'
    WHEN name = 'ORVAULT SPORTS BASKET' AND city = 'Nantes' THEN 'https://orvault-sports-basket.fr/'
    WHEN name = 'AILES SPORT BOUGUENAIS REZE VOLLEY BALL (ASBR)' AND city = 'Nantes' THEN 'https://asbrezevolley44.fr/club/'
    WHEN name = 'RESTAURANT BENUREAU' AND city = 'Nantes' THEN 'https://www.restaurantbenureau.com/'
    WHEN name = 'RESTAURANT LE JADE (LE JADE)' AND city = 'Nantes' THEN 'https://lacarte.menu/restaurants/nantes/jade-171'
    WHEN name = 'FP RESTAURANT' AND city = 'Nantes' THEN 'https://www.lacigale.com/'
    WHEN name = 'SARL GEM BOULANGERIE (MAISON GUICHARD)' AND city = 'Nantes' THEN NULL
    WHEN name = 'BOULANGERIE SPPINEAU (BOULANGERIE SPPINEAU SARL)' AND city = 'Nantes' THEN 'https://www.myboulange.fr/44/machecoul-saint-meme/boulangerie-sarl-sppineau-34407'
    WHEN name = 'CENTRALE DES ARTISANS COIFFEURS C.A.C.' AND city = 'Nantes' THEN 'https://www.groupe-cac.com/fr/'
    WHEN name = 'ARTISANS REUNIS BOIS ATLANTIQUE (ARBA)' AND city = 'Nantes' THEN 'https://www.arba.coop/'
    WHEN name = 'LES ARTISANS DU GOUT' AND city = 'Nantes' THEN NULL
    WHEN name = 'ARTISANS DU PAYSAGE' AND city = 'Nantes' THEN 'https://www.ar-paysage.com/'
    WHEN name = 'COIFFEUR EL SALAM' AND city = 'Nantes' THEN 'https://www.infobel.com/fr/france/coiffeur_el_salam/nantes/FR104276425-0240406048/businessdetails.aspx'
    WHEN name = 'LES COIFFEURS DE SAINT HERBLAIN' AND city = 'Nantes' THEN NULL
    WHEN name = 'LC FRANKLIN (LE COIFFEUR)' AND city = 'Nantes' THEN 'https://www.lecoiffeur-nantes.fr/'
    WHEN name = 'BERTHELOT CONSTRUCTIONS (BERTHELOT CONSTRUCTIONS - NIVO''CONCEPT)' AND city = 'Nantes' THEN 'https://www.groupe-berthelot.com/'
    WHEN name = 'PAMPRES VALLETAIS BASKET' AND city = 'Nantes' THEN 'https://www.vallet-basket.fr/'
    WHEN name = 'FALLERON TOUVOIS BASKET CLUB' AND city = 'Nantes' THEN 'https://www.ftbc.fr/'
    WHEN name = 'SEVRE ET MAINE BASKET' AND city = 'Nantes' THEN NULL
    WHEN name = 'TORTILLA RESTAURANTS SAS' AND city = 'Nantes' THEN 'https://restaurants.fr.tortilla.co/en/nantes-atlantis/'
    WHEN name = 'RESTAURANT DGFIP (ASSOCIATION)' AND city = 'Nantes' THEN 'https://www.loire-atlantique.gouv.fr/Services-de-l-Etat/Direction-Regionale-des-Finances-Publiques-Pays-de-la-Loire-et-Loire-Atlantique-DRFIP'
    WHEN name = 'HABESHA RESTAURANT' AND city = 'Nantes' THEN 'https://habeshastudio.com/restaurants/nantes/habesha-specialites-erythreennes-ethiopiennes-restaurant/'
    WHEN name = 'MIX''AGE RESTAURANT' AND city = 'Nantes' THEN 'https://mixt.fr/'
    WHEN name = 'BOULANGERIES BG (B B G)' AND city = 'Nantes' THEN 'https://www.marieblachere.com/'
    WHEN name = 'BOULANGERIE BELOIN' AND city = 'Nantes' THEN 'https://www.myboulange.fr/44/mauves-sur-loire/boulangerie-beloin-28856'
    WHEN name = 'BOULANGERIE JAMET' AND city = 'Nantes' THEN 'https://www.maisonjamet.fr/'
    WHEN name = 'FLO BOULANGERIE' AND city = 'Nantes' THEN NULL
    WHEN name = 'ARTISAN PRO RENOVATION (APR)' AND city = 'Nantes' THEN 'https://apr-renovation.fr/'
    WHEN name = 'ARTISAN COUVREUR JUDALET' AND city = 'Nantes' THEN 'https://www.couverture-judalet.com/realisations/'
    WHEN name = 'L''ARTISAN COIFFEUR' AND city = 'Nantes' THEN 'https://letableau-artisanscoiffeurs.com/'
    WHEN name = 'S.A.R COIFFEUR' AND city = 'Nantes' THEN 'https://www.sarah-pavlovski.com/'
    WHEN name = 'A TWO COIFFEUR' AND city = 'Nantes' THEN 'https://www.unboncoiffeur.fr/a-two-coiffeur-nantes-44200-c72474'
    WHEN name = 'MLLE C. COIFFEUR - BARBIER' AND city = 'Nantes' THEN 'https://www.mllec-coiffure-barbier.fr/savoir-faire/barbier-saint-gildas-des-bois/6'
    WHEN name = 'HAPPY CURL' AND city = 'Nantes' THEN NULL
    WHEN name = 'LES 2 PLOMBIERS' AND city = 'Nantes' THEN 'https://www.initiative-nantes.fr/entrepreneurs/les-2-plombiers.html'
    WHEN name = 'LE PLOMBIER DU COIN' AND city = 'Nantes' THEN 'https://lecoindesartisans.fr/service/plomberie-sanitaire/nantes'
    WHEN name = 'ORCAB' AND city = 'Nantes' THEN 'https://www.orcab.coop/'
    WHEN name = 'SOCOTEC CONSTRUCTION' AND city = 'Nantes' THEN 'https://nos-agences.socotec.fr/fr/pays-de-la-loire/loire-atlantique/nantes'
    WHEN name = 'CONSTRUCTEL CONSTRUCTIONS TELECOMMUNICA.' AND city = 'Nantes' THEN 'https://constructel.net/fr/home'
    WHEN name = 'OPERATEUR DE COMPETENCES DE LA CONSTRUCTION' AND city = 'Nantes' THEN 'https://www.constructys.fr/'
    WHEN name = 'BOUYGUES CONSTRUCTION MATERIEL' AND city = 'Nantes' THEN 'https://www.bouygues-construction.com/'
    WHEN name = 'BADMINTON SPORT LOISIRS' AND city = 'Nantes' THEN 'https://badnantes.fr/'
    WHEN name = 'OFFICE INTERCOMMUNAL DES SPORTS DE LA PRESQU''ILE GUERANDAISE' AND city = 'Nantes' THEN 'https://www.creditsafe.com/business-index/en-gb/company/office-intercommunal-des-sports-de-la-presquile-guerandaise-fr10049149'
    WHEN name = 'ASSO SPORT ET CULTURE LA GILLES DE RETZ' AND city = 'Nantes' THEN 'https://www.lagillesderetz.com/'
    WHEN name = 'UNION SPORTIVE DE SAINTE-REINE-DE-BRETAGNE DE HANDBALL' AND city = 'Nantes' THEN 'https://www.sainte-reine-de-bretagne.fr/ussr-handball/'
    WHEN name = 'TENNIS CLUB NICOLASIEN' AND city = 'Nantes' THEN 'https://tennisclubdenantes.fr/'
    WHEN name = 'BADMINTON DE CASSON' AND city = 'Nantes' THEN 'http://badminton-de-casson.fr/'
    WHEN name = 'TENNIS CLUB CASSONNAIS (T2C)' AND city = 'Nantes' THEN NULL
    WHEN name = 'RESPIRE CASSON' AND city = 'Nantes' THEN 'https://www.net1901.org/association/RESPIRE-CASSON,1834002.html'
    WHEN name = 'TENNIS DE TABLE MAISDONNAIS' AND city = 'Nantes' THEN 'https://nantestt.fr/'
    WHEN name = 'JEAN JAURES ST NAZAIRE TENNIS DE TABLE' AND city = 'Nantes' THEN 'https://saintnazairett.sportsregions.fr/en-savoir-plus/le-club-12720'
    WHEN name = 'PHUSANISA YANGDUMRONG (THAI MASSAGE BIEN-ETRE)' AND city = 'Nantes' THEN 'https://bienetredethailande.com/'
    WHEN name = 'ISABELLE BOSSE (MASSAGE BIEN ETRE ISABELLE)' AND city = 'Nantes' THEN 'https://www.isabelle-massage-bien-etre.fr/'
    WHEN name = 'VANESSA SANQUER (DOUCEUR INFINIE MASSAGES BIEN-ETRE)' AND city = 'Nantes' THEN NULL
    WHEN name = 'STEPHANIE BLANCHARD (PHELIPPON) (IN''STEM PAISIBLE MASSAGE BIEN-ETRE)' AND city = 'Nantes' THEN 'https://www.stephaniemassagebienetre.fr/appointments-3'
    WHEN name = 'DIMITRI RAVON (LE REPOS DES CHAKRAS - MASSAGE BIEN-ETRE)' AND city = 'Nantes' THEN 'https://www.salons10.com/FR/Nantes/151648560344424/Le-repos-des-Chakras---Massages-bien-%C3%AAtre'
    WHEN name = 'JENNAI BAKHA (MASSAGE BIEN-ETRE)' AND city = 'Nantes' THEN NULL
    WHEN name = 'RESTAURANT LA BOUILLABAISSE' AND city = 'Nantes' THEN 'https://labouillabaisse.menu-res.com/menu'
    WHEN name = 'ABAGE ARTISANS REUNIS' AND city = 'Nantes' THEN 'https://abage-artisans-reunis.com/'
    WHEN name = 'LE PLOMBIER DE VILLENEUVE (LE PLOMBIER DE VILLENEUVE)' AND city = 'Nantes' THEN 'https://saint-nazaire.obteniruncontact.com/plumber/le-plombier-de-villeneuve/'
    WHEN name = 'MON PLOMBIER ERIC CORMERAIS (MON PLOMBIER ERIC CORMERAIS)' AND city = 'Nantes' THEN NULL
    WHEN name = 'GROUPEMENT COOPERATIF ARTISANS PLOMBIERS' AND city = 'Nantes' THEN 'https://www.gcap44.com/a-propos'
    WHEN name = 'SARL AUBINEAU PLOMBIER CHAUFFAGISTE (SARL AUBINEAU PLOMBIER CHAUFFAGISTE)' AND city = 'Nantes' THEN NULL
    WHEN name = 'CIMEO CONSTRUCTION' AND city = 'Nantes' THEN 'https://www.cimeoconstruction.fr/'
    WHEN name = 'COMMUNE DE TREILLIERES' AND city = 'Nantes' THEN 'https://www.treillieres.fr/'
    WHEN name = 'VELO SPORT VALLETAIS' AND city = 'Nantes' THEN 'https://velosportvalletais.fr/'
    WHEN name = 'RESTAURANT MARCEL' AND city = 'Nantes' THEN 'https://chez-marcel-3-rue-bougainville.menustic.com/'
    WHEN name = 'DJERBA RESTAURANT' AND city = 'Nantes' THEN 'https://www.eat-list.fr/nantes-44000/kebab-28/djerba-kebab-188692'
    WHEN name = 'RESTAURANT VERNET' AND city = 'Nantes' THEN 'https://www.maisonvernet.com/restaurant/'
    WHEN name = 'RESTAURANT DIMFONG' AND city = 'Nantes' THEN NULL
    WHEN name = 'F.C.A. RESTAURANT' AND city = 'Nantes' THEN 'https://www.fcnantes.com/?ref=bbbsite'
    WHEN name = 'RESTAURANT DE LA REINE' AND city = 'Nantes' THEN 'http://www.la-reine-margot.com/?lang=fr'
    WHEN name = 'BOULANGERIE EMERIAU' AND city = 'Nantes' THEN 'https://www.dnb.com/business-directory/company-profiles.boulangerie_emeriau.a40dc23f104d1c6c52a1813b6f2cad7c.html'
    WHEN name = 'BOULANGERIE PAPILLON CF' AND city = 'Nantes' THEN 'https://www.papillon-officiel.com/%E2%80%8B'
    WHEN name = 'BOULANGERIE DAVIS' AND city = 'Nantes' THEN 'https://www.feuillette.fr/'
    WHEN name = 'LES ARTISANS DU LARGE' AND city = 'Nantes' THEN 'https://www.lesartisansdularge.fr/'
    WHEN name = 'ARTISAN THIBAULT (ARTISAN THIBAULT)' AND city = 'Nantes' THEN 'https://ets-thibault.fr/'
    WHEN name = 'LA PLATEFORME DES ARTISANS (ETS DEHAINE, DEHAINE PERE ET FILS)' AND city = 'Nantes' THEN 'https://data.inpi.fr/entreprises/510582596'
    WHEN name = 'AARNAUD ARTISANS (ARNAUD ARTISANS)' AND city = 'Nantes' THEN 'https://www.monartisan.info/pro-arnaud-artisans-54008924000019'
    WHEN name = 'L''ARTISAN COIFFEUR' AND city = 'Nantes' THEN 'https://letableau-artisanscoiffeurs.com/'
    WHEN name = 'L''ARTISAN' AND city = 'Nantes' THEN 'https://www.artisanparfumeur.com/us/en_US/'
    WHEN name = 'LES ARTISANES DU SOURIRE' AND city = 'Nantes' THEN 'https://www.helloasso.com/associations/les-artisanes-du-sourire'
    WHEN name = 'L''ARTISAN DECORATEUR' AND city = 'Nantes' THEN 'https://www.artisandecorateur.fr/photos/stores/'
    WHEN name = 'ARTISANS DU DESERT' AND city = 'Nantes' THEN 'https://boutique-artisans-du-monde.com/'
    WHEN name = 'LES ARTISANS DU CHANGEMENT' AND city = 'Nantes' THEN 'https://lesartisansduchangement.com/'
    WHEN name = 'SYND MAITRE ET ARTISA COIFFEUR' AND city = 'Nantes' THEN NULL
    WHEN name = 'COOPERATIVE ARTISANALE COIFFEURS OUEST' AND city = 'Nantes' THEN 'https://grossiste.e-pro.fr/loire-atlantique/coop-artisanale-des-coiffeurs-de-l-ouest-ste-cooperative-a-person_f1112524'
    WHEN name = 'CLC' AND city = 'Nantes' THEN 'https://www.clcfrance.com/'
    WHEN name = 'LE PLOMBIER BREVINOIS' AND city = 'Nantes' THEN 'https://electricien-avis.com/le-plombier-brevinois-788120.html'
    WHEN name = 'LE PLOMBIER NANTAIS' AND city = 'Nantes' THEN 'https://www.zeplombier.fr/'
    WHEN name = 'LE PLOMBIER LANDAIS' AND city = 'Nantes' THEN NULL
    WHEN name = 'PLOMBIER DMS' AND city = 'Nantes' THEN 'https://www.bestplombier.fr/44/nantes/plombier-dms-208821'
    WHEN name = 'ABC DU PLOMBIER (ABC DU PLOMBIER)' AND city = 'Nantes' THEN 'https://abcduplombier44.fr/'
    WHEN name = 'C''EST L''PLOMBIER !' AND city = 'Nantes' THEN NULL
    WHEN name = 'ALEXANDRE PLOMBIER CHAUFFAGISTE (ERDRE ET LOIRE CONFORT) (APC)' AND city = 'Nantes' THEN 'https://www.chauffage-confort-chapelain.fr/'
    WHEN name = 'ARTISAN PLOMBIER ET CHAUFFAGISTE (ARPEC) (ARPEC)' AND city = 'Nantes' THEN NULL
    WHEN name = 'A L''EAU PLOMBIER (A L''EAU PLOMBIER)' AND city = 'Nantes' THEN 'https://plombiers.com/a-l-eau-plombier-nantes.html'
    WHEN name = 'M. PLOMBIER SUCE SUR ERDRE (M. PLOMBIER) (MPSSE)' AND city = 'Nantes' THEN 'https://mplombier.fr/'
    WHEN name = 'DOM ELECTRICIEN PLOMBIER' AND city = 'Nantes' THEN 'https://domelectricite.fr/'
    WHEN name = 'DL PLOMBIER CHAUFFAGISTE' AND city = 'Nantes' THEN 'https://dlplombiernantes.fr/'
    WHEN name = 'O PLOMBIER' AND city = 'Nantes' THEN 'https://www.ou-plombier.fr/loire-atlantique/nantes/'
    WHEN name = 'PLOMBIERS ET CARRELEURS ASSOCIES' AND city = 'Nantes' THEN 'https://entreprises.lagazettefrance.fr/entreprise/plombiers-et-carreleurs-associes-481536001'
    WHEN name = 'ELECTRICIENS SANS FRONTIERES L''ENERGIE DU DEVELOPPEMENT' AND city = 'Nantes' THEN 'https://www.electriciens-sans-frontieres.org/'
    WHEN name = 'L''ATELIER DE L ELECTRICIEN' AND city = 'Nantes' THEN 'https://www.atelierelec.com/'
    WHEN name = 'L''ARTISAN ELECTRICIEN' AND city = 'Nantes' THEN 'https://www.art-elec.com/'
    WHEN name = 'MARIEN L''ELECTRICIEN' AND city = 'Nantes' THEN 'https://www.dnb.com/business-directory/company-profiles.marien_lelectricien.ca88a5718f3f0dd84a02009ff4189f8b.html'
    WHEN name = 'ARTISAN ELECTRICIEN BREVINOIS (AEB ARTISAN ELECTRICIEN BREVINOIS)' AND city = 'Nantes' THEN 'https://www.nosartisansontdutalent.fr/entreprise/aeb-artisan-electricien-brevinois-sarl/'
    WHEN name = 'ARTISAN ELECTRICIEN DU BATIMENT 44 (A.B. 44) (A.B. 44)' AND city = 'Nantes' THEN 'https://www.ab44elec.fr/'
    WHEN name = 'RENAUD CONSTRUCTION PLAQUISTE ELECTRICIEN (RCPE)' AND city = 'Nantes' THEN NULL
    WHEN name = 'SOCIETE NOUVELLE DES ETABLISSEMENTS JULES VERGER ET DELPORTE-LES ELECTRICIENS DE FRANCE V.D (VD)' AND city = 'Nantes' THEN 'https://entreprises.lagazettefrance.fr/entreprise/societe-nouvelle-des-etablissements-jules-verger-et-delporte-les-electriciens-de-france-v.d-320048945'
    WHEN name = 'ELECTRICIENS SANS FRONTIERE PAYS LOIRE (ASS)' AND city = 'Nantes' THEN 'https://www.electriciens-sans-frontieres.org/delegation/pays-de-la-loire/'
    WHEN name = 'MANIL' AND city = 'Nantes' THEN 'https://www.warehouse-nantes.fr/artist/manil'
    WHEN name = 'ELNUR ISAYEV (ELECTRICIEN ELNUR ISAYEV)' AND city = 'Nantes' THEN 'https://elnurnanteselectricien.fr/qui-sommes-nous/'
    WHEN name = 'FELIX BARRAUD DE LAGERIE (L''ELECTRICIEN DU COIN 44)' AND city = 'Nantes' THEN 'https://edc44.fr/'
    WHEN name = 'NICOLAS YOUBI (NICOLAS YOUBI ELECTRICIEN)' AND city = 'Nantes' THEN 'https://pro.infobel.fr/FR100977983-0240339295/nicolas_youbi_electricien-mouzillon.html'
    WHEN name = 'MICKAEL AVRIL (LE PETIT ELECTRICIEN DU COIN)' AND city = 'Nantes' THEN 'https://edc44.fr/'
    WHEN name = 'LEBRETON INVESTISSEMENT' AND city = 'Nantes' THEN 'https://entreprises.lagazettefrance.fr/entreprise/lebreton-investissement-803012616'
    WHEN name = 'CONSTRUCTION' AND city = 'Nantes' THEN 'https://metropole.nantes.fr/'
    WHEN name = 'VINCI CONSTRUCTION FRANCE' AND city = 'Nantes' THEN 'https://vinci-construction.com/fr/'
    WHEN name = 'DEMATHIEU BARD CONSTRUCTION' AND city = 'Nantes' THEN 'http://www.demathieu-bard.fr/'
    WHEN name = 'SA D''HLM  AIGUILLON CONSTRUCTION' AND city = 'Nantes' THEN 'https://www.aiguillon-construction.fr/'
    WHEN name = 'BOUYGUES CONSTRUCTION' AND city = 'Nantes' THEN 'https://www.bouygues-construction.com/'
    WHEN name = 'DBL CONSTRUCTIONS' AND city = 'Nantes' THEN 'https://www.dblconstructions.fr/'
    WHEN name = 'NANTES BASKET SPORT' AND city = 'Nantes' THEN 'https://www.nantes-basket.com/'
    WHEN name = 'ASSOCIATION MUSICALE SEVRE ET MUSIQUE' AND city = 'Nantes' THEN 'https://sevreetmusique-lepallet.opentalent.fr/'
    WHEN name = 'L ESPERANCE DE CAMPBON' AND city = 'Nantes' THEN 'https://espcampbon-accueil.footeo.com/'
    ELSE website
  END,
  "score" = CASE
    WHEN name = 'TOUR DE LA BOULANGERIE' AND city = 'Nantes' THEN 65
    WHEN name = 'RESTAURANT LAMACCOTTE' AND city = 'Nantes' THEN 30
    WHEN name = 'RESTAURANT LE PELICAN' AND city = 'Nantes' THEN 30
    WHEN name = 'MAJU RESTAURANT (RESTAURANT MAJU)' AND city = 'Nantes' THEN 30
    WHEN name = 'LE COIFFEUR D''ADRIEN' AND city = 'Nantes' THEN 30
    WHEN name = 'ARTISAN COIFFEUR VP' AND city = 'Nantes' THEN 60
    WHEN name = 'J&M RESTAURANT' AND city = 'Nantes' THEN 55
    WHEN name = 'SOULMATE RESTAURANT (A CASETTA)' AND city = 'Nantes' THEN 25
    WHEN name = 'RESTAURANT CHEZ NOUS' AND city = 'Nantes' THEN 55
    WHEN name = 'BOULANGERIES PAUL' AND city = 'Nantes' THEN 25
    WHEN name = 'BOULANGERIE PATISSERIE OLIVIER' AND city = 'Nantes' THEN 25
    WHEN name = 'BOULANGERIE PATISSERIE ALLARD' AND city = 'Nantes' THEN 25
    WHEN name = 'BOULANGERIE PATISSERIE GUIBERT' AND city = 'Nantes' THEN 25
    WHEN name = 'LA PETITE BOULANGERIE' AND city = 'Nantes' THEN 25
    WHEN name = 'BOULANGERIE ISAAC' AND city = 'Nantes' THEN 25
    WHEN name = 'BOULANGERIE NICOLAS' AND city = 'Nantes' THEN 25
    WHEN name = 'BOULANGERIE DION' AND city = 'Nantes' THEN 25
    WHEN name = 'BOULANGERIE LE TREIZE' AND city = 'Nantes' THEN 55
    WHEN name = 'ARNO BOULANGERIE' AND city = 'Nantes' THEN 25
    WHEN name = 'SOC INTERP ARTISAN GARANTIE INVESTISSE (SIAGI)' AND city = 'Nantes' THEN 55
    WHEN name = 'LES ARTISANS DU CHATEAU' AND city = 'Nantes' THEN 25
    WHEN name = 'COIFFEURS ASSOCIES' AND city = 'Nantes' THEN 55
    WHEN name = 'LA MAISON DU COIFFEUR' AND city = 'Nantes' THEN 25
    WHEN name = 'SAMIR COIFFEUR' AND city = 'Nantes' THEN 55
    WHEN name = '6 ARTISAN COIFFEUR' AND city = 'Nantes' THEN 25
    WHEN name = 'EXPOSITO COIFFEURS LE POULIGUEN' AND city = 'Nantes' THEN 55
    WHEN name = 'BUREAU VERITAS CONSTRUCTION' AND city = 'Nantes' THEN 25
    WHEN name = 'APAVE INFRASTRUCTURES ET CONSTRUCTION FRANCE' AND city = 'Nantes' THEN 25
    WHEN name = 'CERUTTI CONSTRUCTION' AND city = 'Nantes' THEN 25
    WHEN name = 'MORTIER CONSTRUCTION' AND city = 'Nantes' THEN 25
    WHEN name = 'ALTA CONSTRUCTIONS' AND city = 'Nantes' THEN 25
    WHEN name = 'EIFFAGE CONSTRUCTION BRETAGNE (ECB)' AND city = 'Nantes' THEN 25
    WHEN name = 'LOCKROY CONSTRUCTION (LOCKROY CONSTRUCTION)' AND city = 'Nantes' THEN 25
    WHEN name = 'DEPREUX-CONSTRUCTION' AND city = 'Nantes' THEN 25
    WHEN name = 'ORVAULT SPORTS BASKET' AND city = 'Nantes' THEN 25
    WHEN name = 'AILES SPORT BOUGUENAIS REZE VOLLEY BALL (ASBR)' AND city = 'Nantes' THEN 25
    WHEN name = 'RESTAURANT BENUREAU' AND city = 'Nantes' THEN 20
    WHEN name = 'RESTAURANT LE JADE (LE JADE)' AND city = 'Nantes' THEN 20
    WHEN name = 'FP RESTAURANT' AND city = 'Nantes' THEN 20
    WHEN name = 'SARL GEM BOULANGERIE (MAISON GUICHARD)' AND city = 'Nantes' THEN 50
    WHEN name = 'BOULANGERIE SPPINEAU (BOULANGERIE SPPINEAU SARL)' AND city = 'Nantes' THEN 20
    WHEN name = 'CENTRALE DES ARTISANS COIFFEURS C.A.C.' AND city = 'Nantes' THEN 20
    WHEN name = 'ARTISANS REUNIS BOIS ATLANTIQUE (ARBA)' AND city = 'Nantes' THEN 20
    WHEN name = 'LES ARTISANS DU GOUT' AND city = 'Nantes' THEN 50
    WHEN name = 'ARTISANS DU PAYSAGE' AND city = 'Nantes' THEN 20
    WHEN name = 'COIFFEUR EL SALAM' AND city = 'Nantes' THEN 20
    WHEN name = 'LES COIFFEURS DE SAINT HERBLAIN' AND city = 'Nantes' THEN 50
    WHEN name = 'LC FRANKLIN (LE COIFFEUR)' AND city = 'Nantes' THEN 20
    WHEN name = 'BERTHELOT CONSTRUCTIONS (BERTHELOT CONSTRUCTIONS - NIVO''CONCEPT)' AND city = 'Nantes' THEN 20
    WHEN name = 'PAMPRES VALLETAIS BASKET' AND city = 'Nantes' THEN 20
    WHEN name = 'FALLERON TOUVOIS BASKET CLUB' AND city = 'Nantes' THEN 20
    WHEN name = 'SEVRE ET MAINE BASKET' AND city = 'Nantes' THEN 50
    WHEN name = 'TORTILLA RESTAURANTS SAS' AND city = 'Nantes' THEN 15
    WHEN name = 'RESTAURANT DGFIP (ASSOCIATION)' AND city = 'Nantes' THEN 15
    WHEN name = 'HABESHA RESTAURANT' AND city = 'Nantes' THEN 15
    WHEN name = 'MIX''AGE RESTAURANT' AND city = 'Nantes' THEN 15
    WHEN name = 'BOULANGERIES BG (B B G)' AND city = 'Nantes' THEN 15
    WHEN name = 'BOULANGERIE BELOIN' AND city = 'Nantes' THEN 15
    WHEN name = 'BOULANGERIE JAMET' AND city = 'Nantes' THEN 15
    WHEN name = 'FLO BOULANGERIE' AND city = 'Nantes' THEN 45
    WHEN name = 'ARTISAN PRO RENOVATION (APR)' AND city = 'Nantes' THEN 15
    WHEN name = 'ARTISAN COUVREUR JUDALET' AND city = 'Nantes' THEN 15
    WHEN name = 'L''ARTISAN COIFFEUR' AND city = 'Nantes' THEN 15
    WHEN name = 'S.A.R COIFFEUR' AND city = 'Nantes' THEN 15
    WHEN name = 'A TWO COIFFEUR' AND city = 'Nantes' THEN 15
    WHEN name = 'MLLE C. COIFFEUR - BARBIER' AND city = 'Nantes' THEN 15
    WHEN name = 'HAPPY CURL' AND city = 'Nantes' THEN 45
    WHEN name = 'LES 2 PLOMBIERS' AND city = 'Nantes' THEN 15
    WHEN name = 'LE PLOMBIER DU COIN' AND city = 'Nantes' THEN 15
    WHEN name = 'ORCAB' AND city = 'Nantes' THEN 15
    WHEN name = 'SOCOTEC CONSTRUCTION' AND city = 'Nantes' THEN 15
    WHEN name = 'CONSTRUCTEL CONSTRUCTIONS TELECOMMUNICA.' AND city = 'Nantes' THEN 15
    WHEN name = 'OPERATEUR DE COMPETENCES DE LA CONSTRUCTION' AND city = 'Nantes' THEN 15
    WHEN name = 'BOUYGUES CONSTRUCTION MATERIEL' AND city = 'Nantes' THEN 15
    WHEN name = 'BADMINTON SPORT LOISIRS' AND city = 'Nantes' THEN 15
    WHEN name = 'OFFICE INTERCOMMUNAL DES SPORTS DE LA PRESQU''ILE GUERANDAISE' AND city = 'Nantes' THEN 15
    WHEN name = 'ASSO SPORT ET CULTURE LA GILLES DE RETZ' AND city = 'Nantes' THEN 15
    WHEN name = 'UNION SPORTIVE DE SAINTE-REINE-DE-BRETAGNE DE HANDBALL' AND city = 'Nantes' THEN 15
    WHEN name = 'TENNIS CLUB NICOLASIEN' AND city = 'Nantes' THEN 15
    WHEN name = 'BADMINTON DE CASSON' AND city = 'Nantes' THEN 15
    WHEN name = 'TENNIS CLUB CASSONNAIS (T2C)' AND city = 'Nantes' THEN 45
    WHEN name = 'RESPIRE CASSON' AND city = 'Nantes' THEN 15
    WHEN name = 'TENNIS DE TABLE MAISDONNAIS' AND city = 'Nantes' THEN 15
    WHEN name = 'JEAN JAURES ST NAZAIRE TENNIS DE TABLE' AND city = 'Nantes' THEN 15
    WHEN name = 'PHUSANISA YANGDUMRONG (THAI MASSAGE BIEN-ETRE)' AND city = 'Nantes' THEN 15
    WHEN name = 'ISABELLE BOSSE (MASSAGE BIEN ETRE ISABELLE)' AND city = 'Nantes' THEN 15
    WHEN name = 'VANESSA SANQUER (DOUCEUR INFINIE MASSAGES BIEN-ETRE)' AND city = 'Nantes' THEN 45
    WHEN name = 'STEPHANIE BLANCHARD (PHELIPPON) (IN''STEM PAISIBLE MASSAGE BIEN-ETRE)' AND city = 'Nantes' THEN 15
    WHEN name = 'DIMITRI RAVON (LE REPOS DES CHAKRAS - MASSAGE BIEN-ETRE)' AND city = 'Nantes' THEN 15
    WHEN name = 'JENNAI BAKHA (MASSAGE BIEN-ETRE)' AND city = 'Nantes' THEN 45
    WHEN name = 'RESTAURANT LA BOUILLABAISSE' AND city = 'Nantes' THEN 10
    WHEN name = 'ABAGE ARTISANS REUNIS' AND city = 'Nantes' THEN 10
    WHEN name = 'LE PLOMBIER DE VILLENEUVE (LE PLOMBIER DE VILLENEUVE)' AND city = 'Nantes' THEN 10
    WHEN name = 'MON PLOMBIER ERIC CORMERAIS (MON PLOMBIER ERIC CORMERAIS)' AND city = 'Nantes' THEN 40
    WHEN name = 'GROUPEMENT COOPERATIF ARTISANS PLOMBIERS' AND city = 'Nantes' THEN 10
    WHEN name = 'SARL AUBINEAU PLOMBIER CHAUFFAGISTE (SARL AUBINEAU PLOMBIER CHAUFFAGISTE)' AND city = 'Nantes' THEN 40
    WHEN name = 'CIMEO CONSTRUCTION' AND city = 'Nantes' THEN 10
    WHEN name = 'COMMUNE DE TREILLIERES' AND city = 'Nantes' THEN 10
    WHEN name = 'VELO SPORT VALLETAIS' AND city = 'Nantes' THEN 10
    WHEN name = 'RESTAURANT MARCEL' AND city = 'Nantes' THEN 10
    WHEN name = 'DJERBA RESTAURANT' AND city = 'Nantes' THEN 10
    WHEN name = 'RESTAURANT VERNET' AND city = 'Nantes' THEN 10
    WHEN name = 'RESTAURANT DIMFONG' AND city = 'Nantes' THEN 40
    WHEN name = 'F.C.A. RESTAURANT' AND city = 'Nantes' THEN 10
    WHEN name = 'RESTAURANT DE LA REINE' AND city = 'Nantes' THEN 10
    WHEN name = 'BOULANGERIE EMERIAU' AND city = 'Nantes' THEN 10
    WHEN name = 'BOULANGERIE PAPILLON CF' AND city = 'Nantes' THEN 10
    WHEN name = 'BOULANGERIE DAVIS' AND city = 'Nantes' THEN 10
    WHEN name = 'LES ARTISANS DU LARGE' AND city = 'Nantes' THEN 10
    WHEN name = 'ARTISAN THIBAULT (ARTISAN THIBAULT)' AND city = 'Nantes' THEN 10
    WHEN name = 'LA PLATEFORME DES ARTISANS (ETS DEHAINE, DEHAINE PERE ET FILS)' AND city = 'Nantes' THEN 10
    WHEN name = 'AARNAUD ARTISANS (ARNAUD ARTISANS)' AND city = 'Nantes' THEN 10
    WHEN name = 'L''ARTISAN COIFFEUR' AND city = 'Nantes' THEN 10
    WHEN name = 'L''ARTISAN' AND city = 'Nantes' THEN 10
    WHEN name = 'LES ARTISANES DU SOURIRE' AND city = 'Nantes' THEN 10
    WHEN name = 'L''ARTISAN DECORATEUR' AND city = 'Nantes' THEN 10
    WHEN name = 'ARTISANS DU DESERT' AND city = 'Nantes' THEN 10
    WHEN name = 'LES ARTISANS DU CHANGEMENT' AND city = 'Nantes' THEN 10
    WHEN name = 'SYND MAITRE ET ARTISA COIFFEUR' AND city = 'Nantes' THEN 40
    WHEN name = 'COOPERATIVE ARTISANALE COIFFEURS OUEST' AND city = 'Nantes' THEN 10
    WHEN name = 'CLC' AND city = 'Nantes' THEN 10
    WHEN name = 'LE PLOMBIER BREVINOIS' AND city = 'Nantes' THEN 10
    WHEN name = 'LE PLOMBIER NANTAIS' AND city = 'Nantes' THEN 10
    WHEN name = 'LE PLOMBIER LANDAIS' AND city = 'Nantes' THEN 40
    WHEN name = 'PLOMBIER DMS' AND city = 'Nantes' THEN 10
    WHEN name = 'ABC DU PLOMBIER (ABC DU PLOMBIER)' AND city = 'Nantes' THEN 10
    WHEN name = 'C''EST L''PLOMBIER !' AND city = 'Nantes' THEN 40
    WHEN name = 'ALEXANDRE PLOMBIER CHAUFFAGISTE (ERDRE ET LOIRE CONFORT) (APC)' AND city = 'Nantes' THEN 10
    WHEN name = 'ARTISAN PLOMBIER ET CHAUFFAGISTE (ARPEC) (ARPEC)' AND city = 'Nantes' THEN 35
    WHEN name = 'A L''EAU PLOMBIER (A L''EAU PLOMBIER)' AND city = 'Nantes' THEN 10
    WHEN name = 'M. PLOMBIER SUCE SUR ERDRE (M. PLOMBIER) (MPSSE)' AND city = 'Nantes' THEN 10
    WHEN name = 'DOM ELECTRICIEN PLOMBIER' AND city = 'Nantes' THEN 10
    WHEN name = 'DL PLOMBIER CHAUFFAGISTE' AND city = 'Nantes' THEN 10
    WHEN name = 'O PLOMBIER' AND city = 'Nantes' THEN 10
    WHEN name = 'PLOMBIERS ET CARRELEURS ASSOCIES' AND city = 'Nantes' THEN 10
    WHEN name = 'ELECTRICIENS SANS FRONTIERES L''ENERGIE DU DEVELOPPEMENT' AND city = 'Nantes' THEN 10
    WHEN name = 'L''ATELIER DE L ELECTRICIEN' AND city = 'Nantes' THEN 10
    WHEN name = 'L''ARTISAN ELECTRICIEN' AND city = 'Nantes' THEN 10
    WHEN name = 'MARIEN L''ELECTRICIEN' AND city = 'Nantes' THEN 10
    WHEN name = 'ARTISAN ELECTRICIEN BREVINOIS (AEB ARTISAN ELECTRICIEN BREVINOIS)' AND city = 'Nantes' THEN 10
    WHEN name = 'ARTISAN ELECTRICIEN DU BATIMENT 44 (A.B. 44) (A.B. 44)' AND city = 'Nantes' THEN 10
    WHEN name = 'RENAUD CONSTRUCTION PLAQUISTE ELECTRICIEN (RCPE)' AND city = 'Nantes' THEN 40
    WHEN name = 'SOCIETE NOUVELLE DES ETABLISSEMENTS JULES VERGER ET DELPORTE-LES ELECTRICIENS DE FRANCE V.D (VD)' AND city = 'Nantes' THEN 10
    WHEN name = 'ELECTRICIENS SANS FRONTIERE PAYS LOIRE (ASS)' AND city = 'Nantes' THEN 10
    WHEN name = 'MANIL' AND city = 'Nantes' THEN 10
    WHEN name = 'ELNUR ISAYEV (ELECTRICIEN ELNUR ISAYEV)' AND city = 'Nantes' THEN 10
    WHEN name = 'FELIX BARRAUD DE LAGERIE (L''ELECTRICIEN DU COIN 44)' AND city = 'Nantes' THEN 10
    WHEN name = 'NICOLAS YOUBI (NICOLAS YOUBI ELECTRICIEN)' AND city = 'Nantes' THEN 10
    WHEN name = 'MICKAEL AVRIL (LE PETIT ELECTRICIEN DU COIN)' AND city = 'Nantes' THEN 10
    WHEN name = 'LEBRETON INVESTISSEMENT' AND city = 'Nantes' THEN 10
    WHEN name = 'CONSTRUCTION' AND city = 'Nantes' THEN 10
    WHEN name = 'VINCI CONSTRUCTION FRANCE' AND city = 'Nantes' THEN 10
    WHEN name = 'DEMATHIEU BARD CONSTRUCTION' AND city = 'Nantes' THEN 10
    WHEN name = 'SA D''HLM  AIGUILLON CONSTRUCTION' AND city = 'Nantes' THEN 10
    WHEN name = 'BOUYGUES CONSTRUCTION' AND city = 'Nantes' THEN 10
    WHEN name = 'DBL CONSTRUCTIONS' AND city = 'Nantes' THEN 10
    WHEN name = 'NANTES BASKET SPORT' AND city = 'Nantes' THEN 10
    WHEN name = 'ASSOCIATION MUSICALE SEVRE ET MUSIQUE' AND city = 'Nantes' THEN 10
    WHEN name = 'L ESPERANCE DE CAMPBON' AND city = 'Nantes' THEN 10
    ELSE "score"
  END,
  "webVisibilityScore" = CASE
    WHEN name = 'TOUR DE LA BOULANGERIE' AND city = 'Nantes' THEN 65
    WHEN name = 'RESTAURANT LAMACCOTTE' AND city = 'Nantes' THEN 30
    WHEN name = 'RESTAURANT LE PELICAN' AND city = 'Nantes' THEN 30
    WHEN name = 'MAJU RESTAURANT (RESTAURANT MAJU)' AND city = 'Nantes' THEN 30
    WHEN name = 'LE COIFFEUR D''ADRIEN' AND city = 'Nantes' THEN 30
    WHEN name = 'ARTISAN COIFFEUR VP' AND city = 'Nantes' THEN 60
    WHEN name = 'J&M RESTAURANT' AND city = 'Nantes' THEN 55
    WHEN name = 'SOULMATE RESTAURANT (A CASETTA)' AND city = 'Nantes' THEN 25
    WHEN name = 'RESTAURANT CHEZ NOUS' AND city = 'Nantes' THEN 55
    WHEN name = 'BOULANGERIES PAUL' AND city = 'Nantes' THEN 25
    WHEN name = 'BOULANGERIE PATISSERIE OLIVIER' AND city = 'Nantes' THEN 25
    WHEN name = 'BOULANGERIE PATISSERIE ALLARD' AND city = 'Nantes' THEN 25
    WHEN name = 'BOULANGERIE PATISSERIE GUIBERT' AND city = 'Nantes' THEN 25
    WHEN name = 'LA PETITE BOULANGERIE' AND city = 'Nantes' THEN 25
    WHEN name = 'BOULANGERIE ISAAC' AND city = 'Nantes' THEN 25
    WHEN name = 'BOULANGERIE NICOLAS' AND city = 'Nantes' THEN 25
    WHEN name = 'BOULANGERIE DION' AND city = 'Nantes' THEN 25
    WHEN name = 'BOULANGERIE LE TREIZE' AND city = 'Nantes' THEN 55
    WHEN name = 'ARNO BOULANGERIE' AND city = 'Nantes' THEN 25
    WHEN name = 'SOC INTERP ARTISAN GARANTIE INVESTISSE (SIAGI)' AND city = 'Nantes' THEN 55
    WHEN name = 'LES ARTISANS DU CHATEAU' AND city = 'Nantes' THEN 25
    WHEN name = 'COIFFEURS ASSOCIES' AND city = 'Nantes' THEN 55
    WHEN name = 'LA MAISON DU COIFFEUR' AND city = 'Nantes' THEN 25
    WHEN name = 'SAMIR COIFFEUR' AND city = 'Nantes' THEN 55
    WHEN name = '6 ARTISAN COIFFEUR' AND city = 'Nantes' THEN 25
    WHEN name = 'EXPOSITO COIFFEURS LE POULIGUEN' AND city = 'Nantes' THEN 55
    WHEN name = 'BUREAU VERITAS CONSTRUCTION' AND city = 'Nantes' THEN 25
    WHEN name = 'APAVE INFRASTRUCTURES ET CONSTRUCTION FRANCE' AND city = 'Nantes' THEN 25
    WHEN name = 'CERUTTI CONSTRUCTION' AND city = 'Nantes' THEN 25
    WHEN name = 'MORTIER CONSTRUCTION' AND city = 'Nantes' THEN 25
    WHEN name = 'ALTA CONSTRUCTIONS' AND city = 'Nantes' THEN 25
    WHEN name = 'EIFFAGE CONSTRUCTION BRETAGNE (ECB)' AND city = 'Nantes' THEN 25
    WHEN name = 'LOCKROY CONSTRUCTION (LOCKROY CONSTRUCTION)' AND city = 'Nantes' THEN 25
    WHEN name = 'DEPREUX-CONSTRUCTION' AND city = 'Nantes' THEN 25
    WHEN name = 'ORVAULT SPORTS BASKET' AND city = 'Nantes' THEN 25
    WHEN name = 'AILES SPORT BOUGUENAIS REZE VOLLEY BALL (ASBR)' AND city = 'Nantes' THEN 25
    WHEN name = 'RESTAURANT BENUREAU' AND city = 'Nantes' THEN 20
    WHEN name = 'RESTAURANT LE JADE (LE JADE)' AND city = 'Nantes' THEN 20
    WHEN name = 'FP RESTAURANT' AND city = 'Nantes' THEN 20
    WHEN name = 'SARL GEM BOULANGERIE (MAISON GUICHARD)' AND city = 'Nantes' THEN 50
    WHEN name = 'BOULANGERIE SPPINEAU (BOULANGERIE SPPINEAU SARL)' AND city = 'Nantes' THEN 20
    WHEN name = 'CENTRALE DES ARTISANS COIFFEURS C.A.C.' AND city = 'Nantes' THEN 20
    WHEN name = 'ARTISANS REUNIS BOIS ATLANTIQUE (ARBA)' AND city = 'Nantes' THEN 20
    WHEN name = 'LES ARTISANS DU GOUT' AND city = 'Nantes' THEN 50
    WHEN name = 'ARTISANS DU PAYSAGE' AND city = 'Nantes' THEN 20
    WHEN name = 'COIFFEUR EL SALAM' AND city = 'Nantes' THEN 20
    WHEN name = 'LES COIFFEURS DE SAINT HERBLAIN' AND city = 'Nantes' THEN 50
    WHEN name = 'LC FRANKLIN (LE COIFFEUR)' AND city = 'Nantes' THEN 20
    WHEN name = 'BERTHELOT CONSTRUCTIONS (BERTHELOT CONSTRUCTIONS - NIVO''CONCEPT)' AND city = 'Nantes' THEN 20
    WHEN name = 'PAMPRES VALLETAIS BASKET' AND city = 'Nantes' THEN 20
    WHEN name = 'FALLERON TOUVOIS BASKET CLUB' AND city = 'Nantes' THEN 20
    WHEN name = 'SEVRE ET MAINE BASKET' AND city = 'Nantes' THEN 50
    WHEN name = 'TORTILLA RESTAURANTS SAS' AND city = 'Nantes' THEN 15
    WHEN name = 'RESTAURANT DGFIP (ASSOCIATION)' AND city = 'Nantes' THEN 15
    WHEN name = 'HABESHA RESTAURANT' AND city = 'Nantes' THEN 15
    WHEN name = 'MIX''AGE RESTAURANT' AND city = 'Nantes' THEN 15
    WHEN name = 'BOULANGERIES BG (B B G)' AND city = 'Nantes' THEN 15
    WHEN name = 'BOULANGERIE BELOIN' AND city = 'Nantes' THEN 15
    WHEN name = 'BOULANGERIE JAMET' AND city = 'Nantes' THEN 15
    WHEN name = 'FLO BOULANGERIE' AND city = 'Nantes' THEN 45
    WHEN name = 'ARTISAN PRO RENOVATION (APR)' AND city = 'Nantes' THEN 15
    WHEN name = 'ARTISAN COUVREUR JUDALET' AND city = 'Nantes' THEN 15
    WHEN name = 'L''ARTISAN COIFFEUR' AND city = 'Nantes' THEN 15
    WHEN name = 'S.A.R COIFFEUR' AND city = 'Nantes' THEN 15
    WHEN name = 'A TWO COIFFEUR' AND city = 'Nantes' THEN 15
    WHEN name = 'MLLE C. COIFFEUR - BARBIER' AND city = 'Nantes' THEN 15
    WHEN name = 'HAPPY CURL' AND city = 'Nantes' THEN 45
    WHEN name = 'LES 2 PLOMBIERS' AND city = 'Nantes' THEN 15
    WHEN name = 'LE PLOMBIER DU COIN' AND city = 'Nantes' THEN 15
    WHEN name = 'ORCAB' AND city = 'Nantes' THEN 15
    WHEN name = 'SOCOTEC CONSTRUCTION' AND city = 'Nantes' THEN 15
    WHEN name = 'CONSTRUCTEL CONSTRUCTIONS TELECOMMUNICA.' AND city = 'Nantes' THEN 15
    WHEN name = 'OPERATEUR DE COMPETENCES DE LA CONSTRUCTION' AND city = 'Nantes' THEN 15
    WHEN name = 'BOUYGUES CONSTRUCTION MATERIEL' AND city = 'Nantes' THEN 15
    WHEN name = 'BADMINTON SPORT LOISIRS' AND city = 'Nantes' THEN 15
    WHEN name = 'OFFICE INTERCOMMUNAL DES SPORTS DE LA PRESQU''ILE GUERANDAISE' AND city = 'Nantes' THEN 15
    WHEN name = 'ASSO SPORT ET CULTURE LA GILLES DE RETZ' AND city = 'Nantes' THEN 15
    WHEN name = 'UNION SPORTIVE DE SAINTE-REINE-DE-BRETAGNE DE HANDBALL' AND city = 'Nantes' THEN 15
    WHEN name = 'TENNIS CLUB NICOLASIEN' AND city = 'Nantes' THEN 15
    WHEN name = 'BADMINTON DE CASSON' AND city = 'Nantes' THEN 15
    WHEN name = 'TENNIS CLUB CASSONNAIS (T2C)' AND city = 'Nantes' THEN 45
    WHEN name = 'RESPIRE CASSON' AND city = 'Nantes' THEN 15
    WHEN name = 'TENNIS DE TABLE MAISDONNAIS' AND city = 'Nantes' THEN 15
    WHEN name = 'JEAN JAURES ST NAZAIRE TENNIS DE TABLE' AND city = 'Nantes' THEN 15
    WHEN name = 'PHUSANISA YANGDUMRONG (THAI MASSAGE BIEN-ETRE)' AND city = 'Nantes' THEN 15
    WHEN name = 'ISABELLE BOSSE (MASSAGE BIEN ETRE ISABELLE)' AND city = 'Nantes' THEN 15
    WHEN name = 'VANESSA SANQUER (DOUCEUR INFINIE MASSAGES BIEN-ETRE)' AND city = 'Nantes' THEN 45
    WHEN name = 'STEPHANIE BLANCHARD (PHELIPPON) (IN''STEM PAISIBLE MASSAGE BIEN-ETRE)' AND city = 'Nantes' THEN 15
    WHEN name = 'DIMITRI RAVON (LE REPOS DES CHAKRAS - MASSAGE BIEN-ETRE)' AND city = 'Nantes' THEN 15
    WHEN name = 'JENNAI BAKHA (MASSAGE BIEN-ETRE)' AND city = 'Nantes' THEN 45
    WHEN name = 'RESTAURANT LA BOUILLABAISSE' AND city = 'Nantes' THEN 10
    WHEN name = 'ABAGE ARTISANS REUNIS' AND city = 'Nantes' THEN 10
    WHEN name = 'LE PLOMBIER DE VILLENEUVE (LE PLOMBIER DE VILLENEUVE)' AND city = 'Nantes' THEN 10
    WHEN name = 'MON PLOMBIER ERIC CORMERAIS (MON PLOMBIER ERIC CORMERAIS)' AND city = 'Nantes' THEN 40
    WHEN name = 'GROUPEMENT COOPERATIF ARTISANS PLOMBIERS' AND city = 'Nantes' THEN 10
    WHEN name = 'SARL AUBINEAU PLOMBIER CHAUFFAGISTE (SARL AUBINEAU PLOMBIER CHAUFFAGISTE)' AND city = 'Nantes' THEN 40
    WHEN name = 'CIMEO CONSTRUCTION' AND city = 'Nantes' THEN 10
    WHEN name = 'COMMUNE DE TREILLIERES' AND city = 'Nantes' THEN 10
    WHEN name = 'VELO SPORT VALLETAIS' AND city = 'Nantes' THEN 10
    WHEN name = 'RESTAURANT MARCEL' AND city = 'Nantes' THEN 10
    WHEN name = 'DJERBA RESTAURANT' AND city = 'Nantes' THEN 10
    WHEN name = 'RESTAURANT VERNET' AND city = 'Nantes' THEN 10
    WHEN name = 'RESTAURANT DIMFONG' AND city = 'Nantes' THEN 40
    WHEN name = 'F.C.A. RESTAURANT' AND city = 'Nantes' THEN 10
    WHEN name = 'RESTAURANT DE LA REINE' AND city = 'Nantes' THEN 10
    WHEN name = 'BOULANGERIE EMERIAU' AND city = 'Nantes' THEN 10
    WHEN name = 'BOULANGERIE PAPILLON CF' AND city = 'Nantes' THEN 10
    WHEN name = 'BOULANGERIE DAVIS' AND city = 'Nantes' THEN 10
    WHEN name = 'LES ARTISANS DU LARGE' AND city = 'Nantes' THEN 10
    WHEN name = 'ARTISAN THIBAULT (ARTISAN THIBAULT)' AND city = 'Nantes' THEN 10
    WHEN name = 'LA PLATEFORME DES ARTISANS (ETS DEHAINE, DEHAINE PERE ET FILS)' AND city = 'Nantes' THEN 10
    WHEN name = 'AARNAUD ARTISANS (ARNAUD ARTISANS)' AND city = 'Nantes' THEN 10
    WHEN name = 'L''ARTISAN COIFFEUR' AND city = 'Nantes' THEN 10
    WHEN name = 'L''ARTISAN' AND city = 'Nantes' THEN 10
    WHEN name = 'LES ARTISANES DU SOURIRE' AND city = 'Nantes' THEN 10
    WHEN name = 'L''ARTISAN DECORATEUR' AND city = 'Nantes' THEN 10
    WHEN name = 'ARTISANS DU DESERT' AND city = 'Nantes' THEN 10
    WHEN name = 'LES ARTISANS DU CHANGEMENT' AND city = 'Nantes' THEN 10
    WHEN name = 'SYND MAITRE ET ARTISA COIFFEUR' AND city = 'Nantes' THEN 40
    WHEN name = 'COOPERATIVE ARTISANALE COIFFEURS OUEST' AND city = 'Nantes' THEN 10
    WHEN name = 'CLC' AND city = 'Nantes' THEN 10
    WHEN name = 'LE PLOMBIER BREVINOIS' AND city = 'Nantes' THEN 10
    WHEN name = 'LE PLOMBIER NANTAIS' AND city = 'Nantes' THEN 10
    WHEN name = 'LE PLOMBIER LANDAIS' AND city = 'Nantes' THEN 40
    WHEN name = 'PLOMBIER DMS' AND city = 'Nantes' THEN 10
    WHEN name = 'ABC DU PLOMBIER (ABC DU PLOMBIER)' AND city = 'Nantes' THEN 10
    WHEN name = 'C''EST L''PLOMBIER !' AND city = 'Nantes' THEN 40
    WHEN name = 'ALEXANDRE PLOMBIER CHAUFFAGISTE (ERDRE ET LOIRE CONFORT) (APC)' AND city = 'Nantes' THEN 10
    WHEN name = 'ARTISAN PLOMBIER ET CHAUFFAGISTE (ARPEC) (ARPEC)' AND city = 'Nantes' THEN 35
    WHEN name = 'A L''EAU PLOMBIER (A L''EAU PLOMBIER)' AND city = 'Nantes' THEN 10
    WHEN name = 'M. PLOMBIER SUCE SUR ERDRE (M. PLOMBIER) (MPSSE)' AND city = 'Nantes' THEN 10
    WHEN name = 'DOM ELECTRICIEN PLOMBIER' AND city = 'Nantes' THEN 10
    WHEN name = 'DL PLOMBIER CHAUFFAGISTE' AND city = 'Nantes' THEN 10
    WHEN name = 'O PLOMBIER' AND city = 'Nantes' THEN 10
    WHEN name = 'PLOMBIERS ET CARRELEURS ASSOCIES' AND city = 'Nantes' THEN 10
    WHEN name = 'ELECTRICIENS SANS FRONTIERES L''ENERGIE DU DEVELOPPEMENT' AND city = 'Nantes' THEN 10
    WHEN name = 'L''ATELIER DE L ELECTRICIEN' AND city = 'Nantes' THEN 10
    WHEN name = 'L''ARTISAN ELECTRICIEN' AND city = 'Nantes' THEN 10
    WHEN name = 'MARIEN L''ELECTRICIEN' AND city = 'Nantes' THEN 10
    WHEN name = 'ARTISAN ELECTRICIEN BREVINOIS (AEB ARTISAN ELECTRICIEN BREVINOIS)' AND city = 'Nantes' THEN 10
    WHEN name = 'ARTISAN ELECTRICIEN DU BATIMENT 44 (A.B. 44) (A.B. 44)' AND city = 'Nantes' THEN 10
    WHEN name = 'RENAUD CONSTRUCTION PLAQUISTE ELECTRICIEN (RCPE)' AND city = 'Nantes' THEN 40
    WHEN name = 'SOCIETE NOUVELLE DES ETABLISSEMENTS JULES VERGER ET DELPORTE-LES ELECTRICIENS DE FRANCE V.D (VD)' AND city = 'Nantes' THEN 10
    WHEN name = 'ELECTRICIENS SANS FRONTIERE PAYS LOIRE (ASS)' AND city = 'Nantes' THEN 10
    WHEN name = 'MANIL' AND city = 'Nantes' THEN 10
    WHEN name = 'ELNUR ISAYEV (ELECTRICIEN ELNUR ISAYEV)' AND city = 'Nantes' THEN 10
    WHEN name = 'FELIX BARRAUD DE LAGERIE (L''ELECTRICIEN DU COIN 44)' AND city = 'Nantes' THEN 10
    WHEN name = 'NICOLAS YOUBI (NICOLAS YOUBI ELECTRICIEN)' AND city = 'Nantes' THEN 10
    WHEN name = 'MICKAEL AVRIL (LE PETIT ELECTRICIEN DU COIN)' AND city = 'Nantes' THEN 10
    WHEN name = 'LEBRETON INVESTISSEMENT' AND city = 'Nantes' THEN 10
    WHEN name = 'CONSTRUCTION' AND city = 'Nantes' THEN 10
    WHEN name = 'VINCI CONSTRUCTION FRANCE' AND city = 'Nantes' THEN 10
    WHEN name = 'DEMATHIEU BARD CONSTRUCTION' AND city = 'Nantes' THEN 10
    WHEN name = 'SA D''HLM  AIGUILLON CONSTRUCTION' AND city = 'Nantes' THEN 10
    WHEN name = 'BOUYGUES CONSTRUCTION' AND city = 'Nantes' THEN 10
    WHEN name = 'DBL CONSTRUCTIONS' AND city = 'Nantes' THEN 10
    WHEN name = 'NANTES BASKET SPORT' AND city = 'Nantes' THEN 10
    WHEN name = 'ASSOCIATION MUSICALE SEVRE ET MUSIQUE' AND city = 'Nantes' THEN 10
    WHEN name = 'L ESPERANCE DE CAMPBON' AND city = 'Nantes' THEN 10
    ELSE "webVisibilityScore"
  END
WHERE city = 'Nantes';