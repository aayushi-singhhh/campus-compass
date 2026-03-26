import { MapPin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="h-[var(--navbar-height)] bg-sidebar text-sidebar-foreground flex items-center px-4 shadow-md z-10">
      <MapPin className="w-5 h-5 text-sidebar-primary mr-2" />
      <h1 className="text-lg font-bold tracking-tight">
        Smart Campus Navigator
        <span className="ml-2 text-xs font-normal text-sidebar-accent-foreground opacity-70">
          IGDTUW Prototype
        </span>
      </h1>
    </nav>
  );
};

export default Navbar;
