import axios from "axios";
import { ENV } from "./_core/env";

/**
 * Géocode une adresse via l'API Google Maps Geocoding directe.
 */
export async function geocodeAddress(
  address: string
): Promise<{ lat: number; lng: number } | null> {
  const apiKey = ENV.googleMapsApiKey;
  if (!apiKey) {
    console.warn("[Geocoding] GOOGLE_MAPS_API_KEY non définie");
    return null;
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/geocode/json`;
    const { data } = await axios.get(url, {
      params: { address, key: apiKey },
      timeout: 8000,
    });

    if (data.status !== "OK" || !data.results?.length) {
      console.warn("[Geocoding] Résultat vide pour :", address, data.status);
      return null;
    }

    const { lat, lng } = data.results[0].geometry.location;
    return { lat, lng };
  } catch (error) {
    console.error("[Geocoding] Erreur :", error);
    return null;
  }
}

export async function geocodeAddresses(
  addresses: string[]
): Promise<({ lat: number; lng: number } | null)[]> {
  return Promise.all(addresses.map(geocodeAddress));
}
