import type { RouteResult } from "@/services/api";
import { X } from "lucide-react";

interface RouteInfoProps {
  route: RouteResult;
  onClear: () => void;
}

const RouteInfo = ({ route, onClear }: RouteInfoProps) => {
  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-lg shadow-lg px-4 py-3 z-[1000] flex items-center gap-4 text-sm">
      <div>
        <span className="font-semibold text-primary">{route.from.name}</span>
        <span className="mx-2 text-muted-foreground">→</span>
        <span className="font-semibold text-primary">{route.to.name}</span>
      </div>
      <span className="text-muted-foreground">{route.distance}</span>
      <span className="text-muted-foreground">{route.duration}</span>
      <button onClick={onClear} className="text-muted-foreground hover:text-foreground">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default RouteInfo;
