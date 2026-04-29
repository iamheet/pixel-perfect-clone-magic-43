import t1 from "@/assets/treat-1.jpg";
import t2 from "@/assets/treat-2.jpg";
import t3 from "@/assets/treat-3.jpg";
import t4 from "@/assets/treat-4.jpg";

const items = [
  { img: t1, label: "HAIR MAGIC" },
  { img: t2, label: "HAIR COLOUR" },
  { img: t3, label: "HAIR THERAPY" },
  { img: t4, label: "ADVANCE BEAUTY" },
];

export function Treatments() {
  return (
    <section>
      <div className="bg-brand-gradient py-12 text-center">
        <h2 className="font-serif text-4xl font-medium text-white">Our Treatments</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {items.map((it) => (
          <div key={it.label} className="group relative h-72 overflow-hidden">
            <img
              src={it.img}
              alt={it.label}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 font-serif text-lg tracking-widest text-white">
              {it.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
