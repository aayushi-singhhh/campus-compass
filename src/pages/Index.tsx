import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import CampusMap from "@/components/CampusMap";
import RouteInfo from "@/components/RouteInfo";
import { fetchRoute, type RouteResult } from "@/services/api";

const Index = () => {
  const [routeResult, setRouteResult] = useState<RouteResult | null>(null);
  const [focusLocationId, setFocusLocationId] = useState<string | null>(null);

  const handleRoute = useCallback(async (fromId: string, toId: string) => {
    const result = await fetchRoute(fromId, toId);
    setRouteResult(result);
    if (result) setFocusLocationId(null); // let polyline be visible
  }, []);

  const handleSelectLocation = useCallback((id: string) => {
    setFocusLocationId(id);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar onRoute={handleRoute} onSelectLocation={handleSelectLocation} />
        <main className="flex-1 relative">
          <CampusMap
            routePath={routeResult?.path ?? null}
            focusLocationId={focusLocationId}
          />
          {routeResult && (
            <RouteInfo route={routeResult} onClear={() => setRouteResult(null)} />
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
