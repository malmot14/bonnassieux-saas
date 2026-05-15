-- Recalcul des scores v3 : pondération par secteur
-- Logique métier :
--   Artisans     : vrai manque de site → score élevé (clients cherchent en urgence sur Google)
--   Sport/BE     : besoin réservation en ligne → score moyen-élevé
--   Restaurants  : Google Maps + TripAdvisor suffisent → poids réduit
--   BTP          : grands comptes, cycles longs → poids faible

UPDATE "prospectsPotentiels" SET score = LEAST(100,

  -- Présence web (pondérée par secteur)
  CASE
    WHEN sector = 'artisans'        AND "websiteType" = 'none'       THEN 50
    WHEN sector = 'artisans'        AND "websiteType" = 'amateur'    THEN 30
    WHEN sector = 'artisans'        AND "websiteType" = 'aggregator' THEN 20
    WHEN sector = 'artisans'        AND "websiteType" = 'pro'        THEN 0

    WHEN sector = 'sport/bien-être' AND "websiteType" = 'none'       THEN 40
    WHEN sector = 'sport/bien-être' AND "websiteType" = 'amateur'    THEN 25
    WHEN sector = 'sport/bien-être' AND "websiteType" = 'aggregator' THEN 15
    WHEN sector = 'sport/bien-être' AND "websiteType" = 'pro'        THEN 0

    WHEN sector = 'restaurants'     AND "websiteType" = 'none'       THEN 15
    WHEN sector = 'restaurants'     AND "websiteType" = 'amateur'    THEN 15
    WHEN sector = 'restaurants'     AND "websiteType" = 'aggregator' THEN 10
    WHEN sector = 'restaurants'     AND "websiteType" = 'pro'        THEN 0

    WHEN sector = 'BTP'             AND "websiteType" = 'none'       THEN 20
    WHEN sector = 'BTP'             AND "websiteType" = 'amateur'    THEN 18
    WHEN sector = 'BTP'             AND "websiteType" = 'aggregator' THEN 10
    WHEN sector = 'BTP'             AND "websiteType" = 'pro'        THEN 0

    ELSE 25
  END

  -- Réputation Google (0-15)
  + CASE
      WHEN rating >= 4.5 THEN 15
      WHEN rating >= 4.0 THEN 10
      WHEN rating >= 3.5 THEN  5
      WHEN rating >  0   THEN  2
      ELSE 0
    END

  -- Contactabilité (-10 à +15)
  + CASE
      WHEN (phone IS NOT NULL AND phone != '') AND (email IS NOT NULL AND email != '') THEN 15
      WHEN (phone IS NOT NULL AND phone != '')                                         THEN  8
      WHEN (email IS NOT NULL AND email != '')                                         THEN  3
      ELSE -10
    END

  -- Bonus excellence réputation
  + CASE WHEN rating >= 4.5 THEN 5 ELSE 0 END
);

-- Résumé de la distribution après recalcul :
-- Artisan sans site + note 4.5+ + tél+email  → 50+20+15+5 = 85 (chaud)
-- Coach sans site + bonne note + tél         → 40+10+8    = 58 (tiède/chaud)
-- Restaurant sans site + note 4.5+ + contact → 15+20+15+5 = 55 (tiède)
-- BTP sans site                              → 20+X       = faible
