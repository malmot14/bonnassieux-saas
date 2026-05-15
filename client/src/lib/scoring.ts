export function getScoreColor(score: number): string {
  if (score >= 55) return "bg-purple-600 text-white";
  if (score >= 38) return "bg-blue-100 text-blue-800";
  if (score >= 22) return "bg-orange-100 text-orange-800";
  return "bg-red-100 text-red-800";
}

export function getMarkerColor(score: number): string {
  if (score >= 55) return "#7c3aed"; // violet
  if (score >= 38) return "#3b82f6"; // bleu
  if (score >= 22) return "#f97316"; // orange
  return "#ef4444";                  // rouge
}

export function getScoreDescription(score: number): string {
  if (score >= 55) return "Priorité haute";
  if (score >= 38) return "Bon potentiel";
  if (score >= 22) return "Potentiel moyen";
  return "Faible potentiel";
}

export function getScoreIcon(score: number): string {
  if (score >= 65) return "⭐⭐⭐";
  if (score >= 50) return "⭐⭐";
  if (score >= 35) return "⭐";
  return "○";
}
