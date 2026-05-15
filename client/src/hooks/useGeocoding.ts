import { useEffect, useState } from 'react';

export interface GeocodingResult {
  latitude: number;
  longitude: number;
  formattedAddress: string;
}

/**
 * Hook pour géocoder une adresse avec Google Maps Geocoding API
 * Utilise le proxy Manus pour l'authentification
 */
export function useGeocoding(address: string) {
  const [result, setResult] = useState<GeocodingResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!address) {
      setResult(null);
      return;
    }

    const geocode = async () => {
      setLoading(true);
      setError(null);

      try {
        // Utiliser le Geocoder de Google Maps directement si disponible
        const google = (window as any).google;
        if (google && google.maps && google.maps.Geocoder) {
          const geocoder = new google.maps.Geocoder();
          
          geocoder.geocode({ address }, (results: any, status: any) => {
            if (status === 'OK' && results && results[0]) {
              const location = results[0].geometry.location;
              setResult({
                latitude: location.lat(),
                longitude: location.lng(),
                formattedAddress: results[0].formatted_address,
              });
            } else {
              setError(`Geocoding failed: ${status}`);
            }
            setLoading(false);
          });
        } else {
          setError('Google Maps not loaded');
          setLoading(false);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
      }
    };

    geocode();
  }, [address]);

  return { result, loading, error };
}
