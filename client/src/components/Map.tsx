/// <reference types="@types/google.maps" />

import { useEffect, useRef } from "react";
import { usePersistFn } from "@/hooks/usePersistFn";
import { cn } from "@/lib/utils";

declare global {
  interface Window { google?: typeof google; }
}

// Clé API Google Maps directe (plus de proxy Manus)
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function loadMapScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.google?.maps) { resolve(); return; }

    const existing = document.querySelector(`script[data-maps]`);
    if (existing) {
      const check = setInterval(() => {
        if (window.google?.maps) { clearInterval(check); resolve(); }
      }, 100);
      return;
    }

    if (!API_KEY) {
      console.error("[Map] VITE_GOOGLE_MAPS_API_KEY non définie dans .env");
      reject(new Error("VITE_GOOGLE_MAPS_API_KEY manquante"));
      return;
    }

    const script = document.createElement("script");
    script.setAttribute("data-maps", "true");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=weekly&libraries=marker,places,geocoding,geometry`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Échec chargement Google Maps"));
    document.head.appendChild(script);
  });
}

interface MapViewProps {
  className?: string;
  initialCenter?: google.maps.LatLngLiteral;
  initialZoom?: number;
  onMapReady?: (map: google.maps.Map) => void;
}

export function MapView({
  className,
  initialCenter = { lat: 49.1829, lng: -0.3623 },
  initialZoom = 12,
  onMapReady,
}: MapViewProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);

  const init = usePersistFn(async () => {
    try {
      await loadMapScript();
    } catch (e) {
      console.error("[Map]", e);
      return;
    }

    // Attendre que Maps soit réellement disponible
    let retries = 0;
    while ((!window.google?.maps?.Map) && retries < 50) {
      await new Promise(r => setTimeout(r, 100));
      retries++;
    }

    if (!window.google?.maps?.Map || !mapContainer.current) return;

    map.current = new window.google.maps.Map(mapContainer.current, {
      zoom: initialZoom,
      center: initialCenter,
      mapTypeControl: true,
      fullscreenControl: true,
      zoomControl: true,
      streetViewControl: true,
      mapId: "DEMO_MAP_ID",
      gestureHandling: "greedy",
    });

    onMapReady?.(map.current);
  });

  useEffect(() => { init(); }, [init]);

  return <div ref={mapContainer} className={cn("w-full h-[500px] min-h-[300px]", className)} />;
}
