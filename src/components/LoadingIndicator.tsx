import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

interface LoadingIndicatorProps {
  isLoading: boolean;
}

export const LoadingIndicator = ({ isLoading }: LoadingIndicatorProps) => {
  const [shouldRender, setShouldRender] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div 
      className={`absolute inset-0 z-[60] flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
        isLoading ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow-sm border animate-in fade-in duration-200">
        <Loader2 className="h-4 w-4 animate-spin text-primary" />
        <span className="text-sm font-medium text-slate-700 whitespace-nowrap">Calculating optimal route...</span>
      </div>
    </div>
  );
};
