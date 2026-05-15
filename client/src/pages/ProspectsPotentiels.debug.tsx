// Script de débogage pour vérifier les coordonnées GPS
// À ajouter temporairement dans ProspectsPotentiels.tsx pour déboguer

export const debugProspects = () => {
  const SAMPLE_PROSPECTS = [
    {
      id: 1,
      name: "La Cave à Huîtres",
      latitude: 49.1847,
      longitude: -0.3623,
      address: "24 Quai de Vendeuvre, 14000 Caen",
    },
    {
      id: 2,
      name: "Le Bistronome",
      latitude: 49.1869,
      longitude: -0.3702,
      address: "31 Rue Prairies Saint Gilles, 14000 Caen",
    },
    {
      id: 3,
      name: "Zen Hammam",
      latitude: 49.1920,
      longitude: -0.3580,
      address: "26 Rue des compagnons, 14000 Caen",
    },
    {
      id: 4,
      name: "Restaurant Le Patio",
      latitude: 49.1765,
      longitude: -0.3745,
      address: "90 Boulevard Maréchal Leclerc, 14000 Caen",
    },
    {
      id: 5,
      name: "Restaurant Indien Taj Mahal",
      latitude: 49.1885,
      longitude: -0.3668,
      address: "78 Rue du Vaugueux, 14000 Caen",
    },
  ];

  console.log("=== DEBUG PROSPECTS ===");
  console.log("Nombre de prospects:", SAMPLE_PROSPECTS.length);
  
  SAMPLE_PROSPECTS.forEach(prospect => {
    console.log(`${prospect.name}:`);
    console.log(`  - Latitude: ${prospect.latitude}`);
    console.log(`  - Longitude: ${prospect.longitude}`);
    console.log(`  - Adresse: ${prospect.address}`);
    console.log(`  - URL Google Maps: https://www.google.com/maps/@${prospect.latitude},${prospect.longitude},15z`);
  });

  // Vérifier que les coordonnées sont valides
  const allValid = SAMPLE_PROSPECTS.every(p => {
    const latValid = p.latitude >= 49.17 && p.latitude <= 49.20;
    const lngValid = p.longitude >= -0.38 && p.longitude <= -0.35;
    return latValid && lngValid;
  });

  console.log("Toutes les coordonnées sont valides:", allValid);
  
  return SAMPLE_PROSPECTS;
};
