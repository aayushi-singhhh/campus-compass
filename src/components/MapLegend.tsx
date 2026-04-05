import React from "react";

const MapLegend = () => {
  return (
    <div className="absolute bottom-4 right-4 z-[1000] bg-card border border-border rounded-xl p-4 shadow-lg text-xs text-foreground">
      <h4 className="font-semibold mb-2">Legend</h4>

      <div className="flex flex-col gap-2">
        {/* Location Marker */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span>Location Marker</span>
        </div>

        {/* Route */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-[3px] bg-blue-500 rounded-full"></div>
          <span>Route</span>
        </div>
      </div>
    </div>
  );
};

export default MapLegend;