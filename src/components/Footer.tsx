import { ChevronRight } from "lucide-react";

const quickLinks = ["HOME", "ABOUT", "TREATMENTS", "CAREER", "CONTACT"];
const treatments = ["HAIR MAGIC", "HAIR COLOUR", "HAIR THERAPY", "ADVANCE BEAUTY", "FACIAL"];
const services = ["NAIL EXTENSO", "THREADING", "WAXING PAINLESS", "DE TANNING", "GROOM"];
const locations = ["BAPUNAGAR", "NIKOL"];

function LinkList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="relative inline-block pb-2 font-serif text-lg font-bold text-brand-text">
        {title}
        <span className="absolute bottom-0 left-0 h-0.5 w-10 bg-brand-accent" />
      </h4>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="group flex items-center gap-2 text-sm font-medium tracking-wide text-brand-text transition-colors hover:text-brand-accent"
            >
              <ChevronRight className="h-3.5 w-3.5 text-brand-accent" />
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      {/* Info Strip */}
      <div className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 py-10 md:grid-cols-3">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient">
              <span className="font-serif text-xl font-bold text-white">A</span>
            </div>
            <div className="leading-tight">
              <div className="font-serif text-2xl font-bold text-brand-pink">ADORN</div>
              <div className="text-[11px] tracking-[0.2em] text-brand-text">Hair & Beauty</div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="font-serif text-xl font-bold text-brand-pink">OPEN HOURS</h3>
            <p className="mt-2 text-sm font-medium tracking-wide text-brand-text">NIKOL</p>
            <p className="text-sm tracking-wide text-brand-text">MON-SUN 10 AM TO 8 PM</p>
          </div>
          <div />
        </div>
      </div>

      {/* Main Links */}
      <div className="bg-brand-light">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 py-14 md:grid-cols-4">
          <LinkList title="QUICK LINK" items={quickLinks} />
          <LinkList title="TREATMENTS" items={treatments} />
          <LinkList title="SERVICES" items={services} />
          <LinkList title="LOCATIONS" items={locations} />
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-brand-pink py-4 text-center text-sm text-white">
        Copyright 2024 All Right Reserved adorn-beauty.
      </div>
    </footer>
  );
}
