import { useEffect, useRef } from "react";
import L from "leaflet";
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
import "leaflet/dist/leaflet.css";
import { locations } from "@/data/locations";
import MapLegend from "./MapLegend";

// Fix default marker icons for bundlers
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// TODO: Integrate Google Maps API (optional) for satellite view
// TODO: Add crowd density heatmap layer

interface CampusMapProps {
  routePath: [number, number][] | null;
  focusLocationId: string | null;
}

const CAMPUS_CENTER: [number, number] = [28.6330, 77.2388];

const CampusMap = ({ routePath, focusLocationId }: CampusMapProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const polylineRef = useRef<L.Polyline | null>(null);

  // Initialize map once
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current).setView(CAMPUS_CENTER, 16);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    }).addTo(map);

    // Add markers
    locations.forEach((loc) => {
      L.marker([loc.latitude, loc.longitude])
        .addTo(map)
        .bindPopup(`<strong>${loc.name}</strong><br/>${loc.description}`);
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Update route polyline
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (polylineRef.current) {
      polylineRef.current.remove();
      polylineRef.current = null;
    }

    if (routePath) {
      polylineRef.current = L.polyline(routePath, {
        color: "hsl(199, 89%, 38%)",
        weight: 4,
        dashArray: "8 4",
      }).addTo(map);
      map.fitBounds(polylineRef.current.getBounds(), { padding: [60, 60] });
    }
  }, [routePath]);

  // Fly to focused location
  useEffect(() => {
    if (!focusLocationId || !mapRef.current) return;
    const loc = locations.find((l) => l.id === focusLocationId);
    if (loc) {
      mapRef.current.flyTo([loc.latitude, loc.longitude], 17, { duration: 0.8 });
    }
  }, [focusLocationId]);

  return (
  <div className="relative w-full h-full">
    <div ref={containerRef} className="w-full h-full" />
    <MapLegend />
  </div>
);
};

export default CampusMap;
