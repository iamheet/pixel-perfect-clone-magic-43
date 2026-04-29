import { Link } from "@tanstack/react-router";

export function Navbar() {
  const links = [
    { label: "HOME", to: "/" },
    { label: "ABOUT", to: "/" },
    { label: "TREATMENTS", to: "/" },
    { label: "CAREER", to: "/" },
    { label: "CONTACT", to: "/" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient">
            <span className="font-serif text-lg font-bold text-white">A</span>
          </div>
          <div className="leading-tight">
            <div className="font-serif text-xl font-bold text-brand-pink">ADORN</div>
            <div className="text-[10px] tracking-widest text-brand-text">Hair & Beauty</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l, i) => (
            <Link
              key={l.label}
              to={l.to}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-brand-accent ${
                i === 0 ? "text-brand-accent" : "text-brand-text"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <button className="rounded-sm bg-brand-gradient px-5 py-2 text-sm font-semibold tracking-wide text-white transition-transform hover:scale-105">
            BOOK NOW
          </button>
        </nav>
      </div>
    </header>
  );
}
