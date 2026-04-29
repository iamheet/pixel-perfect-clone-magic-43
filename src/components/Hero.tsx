import { motion } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import flower from "@/assets/flower.png";
import leaf from "@/assets/leaf.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      {/* decorative wavy lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
      >
        <path
          d="M0,400 C300,300 600,500 900,400 C1200,300 1440,450 1440,400"
          stroke="#d13a8b"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M0,450 C300,350 600,550 900,450 C1200,350 1440,500 1440,450"
          stroke="#d13a8b"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* leaf top-left */}
      <img
        src={leaf}
        alt=""
        className="pointer-events-none absolute left-4 top-12 h-16 w-16 -rotate-45 md:left-12 md:h-24 md:w-24"
      />
      {/* flower top-right */}
      <img
        src={flower}
        alt=""
        className="pointer-events-none absolute right-4 top-16 h-10 w-10 md:right-12 md:h-14 md:w-14"
      />

      <div className="relative mx-auto grid min-h-[640px] max-w-7xl grid-cols-1 items-center gap-8 px-6 py-20 md:grid-cols-2">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <h1 className="font-serif text-3xl font-medium md:text-4xl">
            What is Hair Treatments ?
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/85">
            Threading is an ancient art that originated in the Middle East and has made
            its way to the West and has fast become the preferred option for shaping
            eyebrows by countless celebrities.
          </p>
          <button className="mt-7 rounded-sm bg-brand-gradient px-6 py-2.5 text-sm font-semibold tracking-wide text-white transition-transform hover:scale-105">
            Learn More
          </button>
        </motion.div>

        {/* RIGHT - overlapping ovals */}
        <div className="relative h-[480px] w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="absolute left-0 top-4 h-44 w-56 overflow-hidden rounded-[50%] border-2 border-brand-accent shadow-xl md:h-52 md:w-64"
          >
            <img src={hero1} alt="hair styling" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="absolute right-0 top-0 h-72 w-64 overflow-hidden rounded-[50%] border-2 border-brand-accent shadow-xl md:h-96 md:w-80"
          >
            <img src={hero2} alt="spa" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute bottom-0 left-12 h-48 w-60 overflow-hidden rounded-[50%] border-2 border-brand-accent shadow-xl md:h-56 md:w-72"
          >
            <img src={hero3} alt="hair wash" className="h-full w-full object-cover" />
          </motion.div>
          <img
            src={flower}
            alt=""
            className="pointer-events-none absolute bottom-4 right-20 h-12 w-12 md:h-16 md:w-16"
          />
        </div>
      </div>

      {/* slider dots */}
      <div className="relative flex justify-center gap-2 pb-6">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === 0 ? "bg-brand-accent" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* SVG wave */}
      <svg
        className="block w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
}
