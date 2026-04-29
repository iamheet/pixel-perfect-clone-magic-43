const brands = [
  { name: "dermalogica", style: "font-sans italic" },
  { name: "ELEMIS", style: "font-serif tracking-[0.3em]" },
  { name: "O·P·I", style: "font-serif font-bold" },
  { name: "marvell ash", style: "font-sans italic" },
  { name: "natura studios", style: "font-sans" },
  { name: "marvell ash", style: "font-sans italic" },
];

export function BrandStrip() {
  return (
    <div className="bg-pink-strip py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 text-white">
        {brands.map((b, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="text-xs">✦</span>
            <span className={`text-base ${b.style}`}>{b.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
