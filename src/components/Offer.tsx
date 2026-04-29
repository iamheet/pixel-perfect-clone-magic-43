import { motion } from "framer-motion";
import bridal from "@/assets/bridal.jpg";

export function Offer() {
  return (
    <section className="bg-brand-light py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <h3 className="font-serif text-3xl text-brand-deep">Special Offer</h3>
            <svg width="40" height="20" viewBox="0 0 40 20">
              <g stroke="#a02c6d" strokeWidth="1.5" strokeLinecap="round">
                <line x1="2" y1="10" x2="10" y2="10" />
                <line x1="14" y1="4" x2="20" y2="10" />
                <line x1="14" y1="16" x2="20" y2="10" />
                <line x1="22" y1="10" x2="32" y2="10" />
                <line x1="26" y1="4" x2="34" y2="6" />
                <line x1="26" y1="16" x2="34" y2="14" />
              </g>
            </svg>
          </div>
          <h4 className="mt-5 text-lg font-bold tracking-wider text-brand-deep">
            FACIAL & SKINCARE
          </h4>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-text/80">
            Check out the amazing deal at Adorn Beauty Watford! We believe that just one
            word can mean big savings. Take advantage of our special offer and get
            top-notch treatments at a discounted price. Intrigued? Click below to find
            out more about the current offers at Adorn Beauty Watford.
          </p>
          <button className="mt-7 rounded-sm bg-brand-dark px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105">
            Book Appointment
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[340px] overflow-hidden rounded-3xl shadow-xl"
        >
          <img src={bridal} alt="bridal" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-brand-pink/55" />
          <div className="absolute inset-3 rounded-2xl border border-white/60" />
          {/* corner ribbon */}
          <div className="absolute right-0 top-0 overflow-hidden">
            <div className="absolute right-[-30px] top-[18px] w-[140px] rotate-45 bg-brand-deep py-1 text-center text-[10px] font-semibold tracking-wider text-white shadow">
              Limited Time Offer
            </div>
          </div>
          <div className="relative flex h-full flex-col items-center justify-center px-8 text-center text-white">
            <h3 className="font-serif text-3xl font-semibold leading-snug">
              Get Ready to Glow<br />This Season
            </h3>
            <p className="mt-6 text-base font-semibold">Bridal Bliss Offer!</p>
            <p className="mt-3 text-base font-semibold">
              Up to 40% OFF on Bridal<br />Packages!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
