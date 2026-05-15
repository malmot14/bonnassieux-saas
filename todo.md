# Bonnassieux Agency CRM - TODO

## Architecture & Base de Données
- [x] Schéma Drizzle : tables users, leads, interactions, scripts, tours
- [x] Migrations SQL appliquées
- [x] Helpers de requête dans server/db.ts

## Dashboard Principal
- [x] Layout principal avec sidebar navigation
- [x] Vue d'ensemble des métriques (leads actifs, visites planifiées, taux conversion)
- [x] Tableau de bord avec statistiques par secteur
- [x] Design élégant et professionnel

## Gestion des Leads
- [x] CRUD complet des prospects (créer, lire, modifier, supprimer)
- [x] Fiches prospects détaillées avec tous les champs
- [x] Gestion des statuts : À visiter, En cours, Signé, Perdu
- [ ] Historique des interactions par prospect
- [x] Filtres par secteur, statut, priorité

## Générateur de Diagnostic IA
- [ ] Module d'analyse de site web (URL → diagnostic)
- [ ] Analyse SEO, mobile, réseaux sociaux, vitesse
- [ ] Génération automatique de pitch personnalisé
- [ ] Intégration LLM pour rédaction intelligente
- [ ] Sauvegarde des diagnostics dans la base

## Module Cartographique
- [x] Carte interactive Google Maps pour Caen avec marqueurs de leads
- [x] Visualisation des prospects sur la carte avec couleurs par statut
- [x] Fiches leads interactives au clic sur marqueur
- [x] Tunnel de vente intégré (statut + progression)
- [x] Édition des fiches directement depuis la carte
- [ ] Optimisation des itinéraires de visite
- [x] Filtres par secteur et statut sur la carte
- [x] Synchronisation des marqueurs avec les filtres (mise à jour en temps réel)
- [x] Zoom sur la carte au clic sur un prospect
- [x] Enlever le zoom au Ctrl, garder seulement la molette

## Bibliothèque de Scripts
- [x] Scripts organisés par secteur : artisans, restaurants, sport/bien-être, BTP
- [x] Accès rapide depuis les fiches prospects (Outils de Com)
- [x] Édition et personnalisation des scripts
- [x] Recherche et filtrage (barre de recherche fonctionnelle)

## Suivi & Relance
- [ ] Historique complet des interactions
- [ ] Notes de visite avec timestamps
- [ ] Système de rappels automatiques
- [ ] Notifications pour actions importantes
- [ ] Statut de suivi (À relancer, Suivi, Fermé)

## Import/Export & Partage
- [ ] Export CSV des prospects
- [ ] Import CSV de nouveaux prospects
- [ ] Partage de fiches entre commerciaux
- [ ] Permissions d'accès par utilisateur

## Tableau de Bord Coaching Mental
- [x] Vue séparée pour prospects nationaux
- [x] Filtres par type de structure sportive
- [x] Filtres par zone géographique
- [x] Métriques spécifiques au coaching mental
- [x] Gestion des leads coaching mental

## Authentification & Utilisateurs
- [x] Authentification OAuth Manus
- [x] Support de deux utilisateurs commerciaux
- [x] Gestion des rôles (user, admin)
- [ ] Partage de données entre commerciaux

## Tests & Déploiement
- [x] Tests unitaires des procédures tRPC
- [ ] Tests d'intégration des workflows
- [x] Vérification de la qualité du design
- [ ] Déploiement et lien d'accès


## Prise de Rendez-Vous
- [ ] Table appointments en base de données
- [ ] Formulaire de prise de RDV depuis la fiche lead
- [ ] Calendrier pour sélectionner date/heure
- [ ] Sélection du commercial assigné
- [ ] Notes et détails du RDV
- [ ] Historique des RDV par lead
- [ ] Rappels automatiques (email/notification)
- [ ] Synchronisation avec le calendrier


## Prospection Intelligente avec Scoring
- [x] Intégration des entreprises potentielles de Caen (restaurants, artisans, BTP, etc.)
- [x] Système de scoring/notation des leads par potentiel
- [x] Affichage sur la carte avec couleurs selon la note
- [x] Fiche interactive au clic sur marqueur (infos + actions)
- [x] Bouton "Envoyer un email" depuis la fiche
- [x] Bouton "Appeler" depuis la fiche
- [x] Bouton "Ajouter comme lead" depuis la fiche
- [ ] Historique des interactions par prospect potentiel

## Système de Scoring Robuste
- [x] Implémentation du système de scoring basé sur critères métier
- [x] Tests unitaires complets (24 tests) pour le scoring
- [x] Intégration du scoring dans l'affichage des prospects
- [x] Fiche prospect améliorée avec 3 colonnes (infos, scoring, actions)
- [x] Email personnalisé avec sujet pré-rempli
- [x] Appel direct depuis le navigateur
- [x] Affichage du score avec description (Excellent/Bon/Moyen/Faible potentiel)
