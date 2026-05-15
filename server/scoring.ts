/**
 * Système de scoring robuste pour la prospection
 * Évalue les prospects selon des critères métier clairs
 */

export interface ScoringCriteria {
  hasWebsite: boolean;
  hasActiveWebsite: boolean;
  hasSocialMedia: boolean;
  webVisibilityScore: number; // 0-100
  sector: string;
  hasPhone: boolean;
  hasEmail: boolean;
}

/**
 * Calcule le score d'un prospect selon des critères métier
 * Score final: 0-100
 * 
 * IMPORTANT: Les prospects SANS site web sont prioritaires car c'est une opportunité de vente!
 */
export function calculateProspectScore(criteria: ScoringCriteria): number {
  let score = 0;

  // 1. Présence web (40 points max)
  // OPPORTUNITÉ: Pas de site = bon prospect pour vendre un site!
  if (criteria.hasWebsite) {
    score += 15;
    if (criteria.hasActiveWebsite) {
      score += 15; // Site actif = bonus
    }
  } else {
    // BONUS: Pas de site web = opportunité de vente!
    score += 25; // Bonus important pour les prospects sans site
  }

  // 2. Réseaux sociaux (20 points max)
  if (criteria.hasSocialMedia) {
    score += 20;
  }

  // 3. Visibilité web (30 points max)
  // Basé sur le score de visibilité (0-100)
  score += Math.round((criteria.webVisibilityScore / 100) * 30);

  // 4. Contactabilité (10 points max)
  if (criteria.hasPhone) {
    score += 5;
  }
  if (criteria.hasEmail) {
    score += 5;
  }

  // 5. Bonus secteur (0-10 points)
  // Certains secteurs sont plus prioritaires
  const sectorBonus = getSectorBonus(criteria.sector);
  score += sectorBonus;

  // Limiter le score à 100
  return Math.min(score, 100);
}

/**
 * Retourne un bonus selon le secteur
 * Catégories complètes adaptées à la vente de sites internet
 */
function getSectorBonus(sector: string): number {
  const sectorLower = sector.toLowerCase();
  
  const bonusMap: Record<string, number> = {
    // Secteurs très prioritaires (10 pts) - Commerce de détail, services personnels
    "restaurants": 10,
    "coiffeur": 10,
    "coiffure": 10,
    "salon de beauté": 10,
    "salon beauté": 10,
    "fleuriste": 10,
    "fleurs": 10,
    "boutique": 10,
    "café": 10,
    "bar": 10,
    "pizzeria": 10,
    "brasserie": 10,
    "fast-food": 10,
    "restauration rapide": 10,
    
    // Secteurs prioritaires (8 pts) - Professionnels de santé, services spécialisés
    "artisans": 8,
    "artisan": 8,
    "boulangerie": 8,
    "boulanger": 8,
    "pâtisserie": 8,
    "pâtissier": 8,
    "boucherie": 8,
    "boucher": 8,
    "pharmacie": 8,
    "pharmacien": 8,
    "optique": 8,
    "opticien": 8,
    "agence immobilière": 8,
    "immobilier": 8,
    "cabinet médical": 8,
    "médecin": 8,
    "dentiste": 8,
    "cabinet dentaire": 8,
    "vétérinaire": 8,
    "garage": 8,
    "garagiste": 8,
    "auto-école": 8,
    "auto école": 8,
    "taxi": 8,
    "vtc": 8,
    "transport": 8,
    
    // Secteurs moyens (7 pts) - Loisirs, hôtellerie, bien-être
    "sport/bien-être": 7,
    "sport": 7,
    "gym": 7,
    "fitness": 7,
    "yoga": 7,
    "spa": 7,
    "massage": 7,
    "institut de beauté": 7,
    "hôtel": 7,
    "hôtellerie": 7,
    "gîte": 7,
    "camping": 7,
    "auberge": 7,
    "chambre d'hôtes": 7,
    "fromagerie": 7,
    "caviste": 7,
    "cave à vin": 7,
    "bouchon": 7,
    "restaurant gastronomique": 7,
    "traiteur": 7,
    "pâtisserie artisanale": 7,
    
    // Secteurs moins prioritaires (6 pts) - BTP, services techniques
    "BTP": 6,
    "construction": 6,
    "plomberie": 6,
    "plombier": 6,
    "électricité": 6,
    "électricien": 6,
    "menuiserie": 6,
    "menuisier": 6,
    "maçonnerie": 6,
    "maçon": 6,
    "peinture": 6,
    "peintre": 6,
    "carrelage": 6,
    "carreleur": 6,
    "chauffage": 6,
    "climatisation": 6,
    "nettoyage": 6,
    "nettoyeur": 6,
    "jardinage": 6,
    "jardinier": 6,
    "paysagisme": 6,
    "paysagiste": 6,
    "serrurerie": 6,
    "serrurier": 6,
    "vitrerie": 6,
    "vitrier": 6,
    "couverture": 6,
    "couvreur": 6,
    "charpente": 6,
    "charpentier": 6,
    "isolation": 6,
    "chauffagiste": 6,
    "plaquiste": 6,
    
    // Secteurs faibles (3 pts) - Autres services, commerce général
    "autre": 3,
    "autres": 3,
    "services": 3,
    "commerce": 3,
    "commerce général": 3,
    "magasin": 3,
    "boutique générale": 3,
    "divers": 3,
  };

  return bonusMap[sectorLower] || 3; // 3 pts par défaut pour les secteurs non listés
}

/**
 * Retourne la couleur du badge selon le score
 */
export function getScoreColor(score: number): string {
  if (score >= 80) return "bg-green-100 text-green-800";
  if (score >= 60) return "bg-blue-100 text-blue-800";
  if (score >= 40) return "bg-orange-100 text-orange-800";
  return "bg-red-100 text-red-800";
}

/**
 * Retourne la couleur du marqueur selon le score
 */
export function getMarkerColor(score: number): string {
  if (score >= 80) return "#22c55e"; // green
  if (score >= 60) return "#3b82f6"; // blue
  if (score >= 40) return "#f97316"; // orange
  return "#ef4444"; // red
}

/**
 * Retourne une description du score
 */
export function getScoreDescription(score: number): string {
  if (score >= 80) return "Excellent potentiel";
  if (score >= 60) return "Bon potentiel";
  if (score >= 40) return "Potentiel moyen";
  return "Faible potentiel";
}

/**
 * Retourne les critères de scoring pour un prospect
 */
export function getProspectScoringDetails(criteria: ScoringCriteria): {
  website: number;
  socialMedia: number;
  webVisibility: number;
  contact: number;
  sector: number;
  total: number;
} {
  const websiteScore = criteria.hasWebsite ? (criteria.hasActiveWebsite ? 30 : 15) : 25; // 25 pts pour pas de site (opportunité)
  const socialMediaScore = criteria.hasSocialMedia ? 20 : 0;
  const webVisibilityScore = Math.round((criteria.webVisibilityScore / 100) * 30);
  const contactScore = (criteria.hasPhone ? 5 : 0) + (criteria.hasEmail ? 5 : 0);
  const sectorScore = getSectorBonus(criteria.sector);

  return {
    website: websiteScore,
    socialMedia: socialMediaScore,
    webVisibility: webVisibilityScore,
    contact: contactScore,
    sector: sectorScore,
    total: websiteScore + socialMediaScore + webVisibilityScore + contactScore + sectorScore,
  };
}
