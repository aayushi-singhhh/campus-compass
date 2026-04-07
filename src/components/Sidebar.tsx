import { useState } from "react";
import { locations } from "@/data/locations";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Navigation, Info } from "lucide-react";

interface SidebarProps {
  onRoute: (fromId: string, toId: string) => void;
  onSelectLocation: (id: string) => void;
  isCollapsed: boolean;
  setIsCollapsed: (v: boolean) => void;
}

const Sidebar = ({
  onRoute,
  onSelectLocation,
  isCollapsed,
  setIsCollapsed,
}: SidebarProps) => {
  const [fromId, setFromId] = useState("");
  const [toId, setToId] = useState("");

  const handleFindRoute = () => {
    if (fromId && toId && fromId !== toId) {
      onRoute(fromId, toId);
    }
  };

  return (
    <div className="w-80 h-full bg-card">
      
      <div
        className={`flex flex-col p-4 gap-4 w-72 h-full overflow-y-auto transition-opacity duration-200 ${
          isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Route Selection */}
        <div>
          <h2 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1.5">
            <Navigation className="w-4 h-4 text-primary" />
            Route Finder
          </h2>
          <p className="text-xs text-muted-foreground mb-3">
            Select start and end points to view a route.
          </p>

          <label className="text-xs font-medium text-muted-foreground mb-1 block">
            From
          </label>
          <Select value={fromId} onValueChange={setFromId}>
            <SelectTrigger className="mb-2">
              <SelectValue placeholder="Start location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((loc) => (
                <SelectItem key={loc.id} value={loc.id}>
                  {loc.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <label className="text-xs font-medium text-muted-foreground mb-1 block">
            To
          </label>
          <Select value={toId} onValueChange={setToId}>
            <SelectTrigger className="mb-3">
              <SelectValue placeholder="End location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((loc) => (
                <SelectItem key={loc.id} value={loc.id}>
                  {loc.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            onClick={handleFindRoute}
            disabled={!fromId || !toId || fromId === toId}
            className="w-full"
          >
            Show Route
          </Button>
        </div>

        {/* Locations List */}
        <div>
          <h2 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-1.5">
            <Info className="w-4 h-4 text-primary" />
            Campus Locations
          </h2>
          <ul className="space-y-1">
            {locations.map((loc) => (
              <li key={loc.id}>
                <button
                  onClick={() => onSelectLocation(loc.id)}
                  className="w-full text-left text-sm px-2 py-1.5 rounded-md hover:bg-muted transition-colors text-foreground"
                >
                  {loc.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
