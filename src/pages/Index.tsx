import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import CampusMap from "@/components/CampusMap";
import RouteInfo from "@/components/RouteInfo";
import { fetchRoute, type RouteResult } from "@/services/api";
import { ChevronLeft } from "lucide-react";

const Index = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [routeResult, setRouteResult] = useState<RouteResult | null>(null);
  const [focusLocationId, setFocusLocationId] = useState<string | null>(null);

  const handleRoute = useCallback(async (fromId: string, toId: string) => {
    const result = await fetchRoute(fromId, toId);
    setRouteResult(result);
    if (result) setFocusLocationId(null);
  }, []);

  const handleSelectLocation = useCallback((id: string) => {
    setFocusLocationId(id);
  }, []);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar />

      <div className="flex flex-1 overflow-hidden relative">
        
        <div
          className={`transition-all duration-300 ease-in-out relative border-r bg-white ${
            isCollapsed ? "w-0" : "w-80"
          }`}
        >
          <div className="w-80 h-full">
            <Sidebar
              onRoute={handleRoute}
              onSelectLocation={handleSelectLocation}
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
            />
          </div>
        </div>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`fixed top-40 z-[9999] flex h-10 w-10 items-center justify-center rounded-full border shadow-2xl transition-all duration-300 ${
            isCollapsed 
              ? "left-2 bg-primary text-white border-white" 
              : "left-80 -ml-5 bg-white text-primary border-primary/30"
          }`}
        >
          <ChevronLeft 
            className={`w-6 h-6 transition-transform duration-300 ${
              isCollapsed ? "rotate-180" : "rotate-0"
            }`} 
          />
        </button>

        <main className="flex-1 relative">
          <CampusMap
            routePath={routeResult?.path ?? null}
            focusLocationId={focusLocationId}
            isCollapsed={isCollapsed}
          />
          {routeResult && (
            <RouteInfo
              route={routeResult}
              onClear={() => setRouteResult(null)}
            />
          )}
        </main>
        
      </div>
    </div>
  );
};

export default Index;