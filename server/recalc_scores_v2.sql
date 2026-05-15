-- Recalcul des scores sans le critère hasSocialMedia (données non fiables)
-- Formule v2 :
--   websiteType : none=50, amateur=30, aggregator=20, pro=0, null=35
--   rating      : >=4.5 → +15, >=4.0 → +10, >=3.5 → +5, >0 → +2, null → 0
--   contact     : tel+email → +15, tel seul → +8, email seul → +3, aucun → -10
--   bonus réputation : rating >= 4.5 → +5
--   MAX plafonné à 100

UPDATE "prospectsPotentiels" SET score = LEAST(100,
  -- Présence web (0-50)
  CASE "websiteType"
    WHEN 'none'       THEN 50
    WHEN 'amateur'    THEN 30
    WHEN 'aggregator' THEN 20
    WHEN 'pro'        THEN 0
    ELSE 35
  END

  -- Réputation Google (0-15)
  + CASE
      WHEN rating >= 4.5 THEN 15
      WHEN rating >= 4.0 THEN 10
      WHEN rating >= 3.5 THEN 5
      WHEN rating >  0   THEN 2
      ELSE 0
    END

  -- Contactabilité (-10 à +15)
  + CASE
      WHEN (phone IS NOT NULL AND phone != '') AND (email IS NOT NULL AND email != '') THEN 15
      WHEN (phone IS NOT NULL AND phone != '')                                         THEN 8
      WHEN (email IS NOT NULL AND email != '')                                         THEN 3
      ELSE -10
    END

  -- Bonus excellence (0-5)
  + CASE WHEN rating >= 4.5 THEN 5 ELSE 0 END
);
