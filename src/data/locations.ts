// Mock location data representing approximate IGDTUW campus locations
// TODO: Replace with real API call to GET /locations
// TODO: Add more detailed location metadata (floor, building type, images)

export interface Location {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  description: string;
}

export const locations: Location[] = [
  {
    id: "library",
    name: "Central Library",
    latitude: 28.6328,
    longitude: 77.2390,
    description: "Main library with reading halls and digital resources.",
  },
  {
    id: "admin",
    name: "Admin Block",
    latitude: 28.6335,
    longitude: 77.2385,
    description: "Administrative offices and faculty chambers.",
  },
  {
    id: "hostel",
    name: "Girls Hostel",
    latitude: 28.6322,
    longitude: 77.2378,
    description: "On-campus residential hostel for students.",
  },
  {
    id: "canteen",
    name: "Main Canteen",
    latitude: 28.6330,
    longitude: 77.2375,
    description: "Food court serving meals and snacks.",
  },
  {
    id: "auditorium",
    name: "Auditorium",
    latitude: 28.6338,
    longitude: 77.2395,
    description: "Main auditorium for events and seminars.",
  },
  {
    id: "sports",
    name: "Sports Ground",
    latitude: 28.6320,
    longitude: 77.2398,
    description: "Outdoor sports area with courts and track.",
  },
];

// TODO: Add crowd density heatmap data per location
// TODO: Add accessibility metadata (ramp available, elevator, etc.)
