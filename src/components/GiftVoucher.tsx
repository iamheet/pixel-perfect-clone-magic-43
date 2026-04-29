import { motion } from "framer-motion";
import voucher from "@/assets/voucher.jpg";
import flower from "@/assets/flower.png";
import leaf from "@/assets/leaf.png";

export function GiftVoucher() {
  return (
    <section className="bg-brand-lavender py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={leaf}
            alt=""
            className="pointer-events-none absolute -left-2 -top-4 h-14 w-14 -rotate-45"
          />
          <div className="overflow-hidden rounded-xl bg-brand-dark p-6 shadow-2xl">
            <img
              src={voucher}
              alt="gift voucher"
              className="w-full -rotate-6 rounded-md shadow-lg"
            />
          </div>
          <img
            src={flower}
            alt=""
            className="pointer-events-none absolute -bottom-4 right-6 h-14 w-14"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <h3 className="font-serif text-3xl text-brand-deep">Gift Voucher</h3>
            <svg width="40" height="20" viewBox="0 0 40 20">
              <g stroke="#a02c6d" strokeWidth="1.5" strokeLinecap="round">
                <line x1="2" y1="10" x2="10" y2="10" />
                <line x1="14" y1="4" x2="20" y2="10" />
                <line x1="14" y1="16" x2="20" y2="10" />
                <line x1="22" y1="10" x2="32" y2="10" />
              </g>
            </svg>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-text/80">
            Looking for a unique beauty gift idea? Adorn Beauty Watford's gift vouchers
            are the ideal present for any occasion. Give the gift of relaxation, energy,
            and harmony with our vouchers, available in denominations from £20 to any
            desired amount. Whether it's a birthday, anniversary, or just because, you
            can be sure to give that special someone the perfect gift with Adorn Beauty
            Watford's vouchers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
