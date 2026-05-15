-- Migration manuelle : ajouter la colonne passwordHash et rendre email unique
-- À exécuter sur ta base de données existante avant le déploiement

ALTER TABLE users
  ADD COLUMN IF NOT EXISTS passwordHash VARCHAR(255) NULL AFTER email;

ALTER TABLE users
  MODIFY COLUMN email VARCHAR(320) NULL,
  ADD UNIQUE INDEX IF NOT EXISTS users_email_unique (email);
