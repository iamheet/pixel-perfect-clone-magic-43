const brands = [
  { name: "dermalogica", style: "font-sans italic" },
  { name: "ELEMIS", style: "font-serif tracking-[0.3em]" },
  { name: "O·P·I", style: "font-serif font-bold" },
  { name: "marvell ash", style: "font-sans italic" },
  { name: "natura studios", style: "font-sans" },
  { name: "CND", style: "font-sans font-bold tracking-wider" },
  { name: "CALLUS PEEL", style: "font-serif font-bold" },
  { name: "3D lipo", style: "font-sans" },
  { name: "LVL", style: "font-serif font-bold tracking-widest" },
  { name: "Lycon", style: "font-sans italic" },
  { name: "STRICTLY PROFESSIONAL", style: "font-sans font-bold" },
];

export function BrandStrip() {
  // duplicate for seamless loop
  const loop = [...brands, ...brands];
  return (
    <div className="bg-pink-strip overflow-hidden py-6">
      <div className="relative flex">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 text-white">
          {loop.map((b, i) => (
            <div key={i} className="flex shrink-0 items-center gap-3">
              <span className="text-xs">✦</span>
              <span className={`whitespace-nowrap text-base ${b.style}`}>{b.name}</span>
            </div>
          ))}
        </div>
        <div
          className="flex shrink-0 animate-marquee items-center gap-10 pr-10 text-white"
          aria-hidden="true"
        >
          {loop.map((b, i) => (
            <div key={`b-${i}`} className="flex shrink-0 items-center gap-3">
              <span className="text-xs">✦</span>
              <span className={`whitespace-nowrap text-base ${b.style}`}>{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
