import { MapPin, Mail, Phone } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-pink-strip text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-1 px-6 py-2 text-xs">
        <span className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" /> Nikol
        </span>
        <span className="flex items-center gap-1.5">
          <Mail className="h-3.5 w-3.5" /> nikol@adornsalons.com
        </span>
        <span className="flex items-center gap-1.5">
          <Phone className="h-3.5 w-3.5" /> +919015881155
        </span>
      </div>
    </div>
  );
}
