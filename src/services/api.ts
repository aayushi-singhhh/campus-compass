// Mock API service layer
// TODO: Replace mock implementations with real fetch calls to Express backend
// Backend endpoints:
//   GET /locations       → returns all campus locations
//   GET /route?from=&to= → returns mock route between two points

import { locations, type Location } from "@/data/locations";

/** Fetch all campus locations */
export async function fetchLocations(): Promise<Location[]> {
  // TODO: Replace with: return fetch('/api/locations').then(r => r.json())
  return new Promise((resolve) => {
    setTimeout(() => resolve(locations), 200); // simulate network delay
  });
}

/** Fetch a mock route between two locations */
export interface RouteResult {
  from: Location;
  to: Location;
  path: [number, number][];
  distance: string;
  duration: string;
}

export async function fetchRoute(fromId: string, toId: string): Promise<RouteResult | null> {
  // TODO: Implement shortest path algorithm (Dijkstra/A*)
  // TODO: Replace with: return fetch(`/api/route?from=${fromId}&to=${toId}`).then(r => r.json())
  const from = locations.find((l) => l.id === fromId);
  const to = locations.find((l) => l.id === toId);

  if (!from || !to) return null;

  // Simple straight-line mock path
  const path: [number, number][] = [
    [from.latitude, from.longitude],
    [to.latitude, to.longitude],
  ];

  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          from,
          to,
          path,
          distance: "~200m (mock)",
          duration: "~3 min (mock)",
        }),
      300
    );
  });
}

// TODO: Add safety-aware navigation API
// TODO: Add accessibility-friendly route options
