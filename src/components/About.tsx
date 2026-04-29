import { motion } from "framer-motion";
import a1 from "@/assets/about-1.jpg";
import a2 from "@/assets/about-2.jpg";
import a3 from "@/assets/about-3.jpg";

export function About() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        {/* LEFT - oval images */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[460px]"
        >
          <div className="absolute left-0 top-0 h-[420px] w-[260px] overflow-hidden rounded-[50%] border-2 border-brand-accent/60 shadow-lg">
            <img src={a1} alt="salon" className="h-full w-full object-cover" />
          </div>
          <div className="absolute right-6 top-6 h-[170px] w-[180px] overflow-hidden rounded-[50%] border-2 border-brand-accent/60 shadow-lg">
            <img src={a2} alt="treatment" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 h-[200px] w-[170px] overflow-hidden rounded-[50%] border-2 border-brand-accent/60 shadow-lg">
            <img src={a3} alt="salon room" className="h-full w-full object-cover" />
          </div>
          {/* decorative dots */}
          <span className="absolute right-0 top-44 h-5 w-5 rounded-full bg-brand-accent" />
          <span className="absolute right-12 top-52 h-3 w-3 rounded-full bg-brand-deep" />
          <span className="absolute -bottom-2 left-24 text-2xl text-brand-accent">✦</span>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-serif text-3xl text-brand-pink">About Us</h3>
          <h2 className="mt-4 text-2xl font-semibold text-brand-text">
            Wordclass Beauty<br />Treatment
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-text/80">
            Threading is an ancient art that originated in the Middle East and has made
            its way to the West and has fast become the preferred option for shaping
            eyebrows by countless celebrities.
          </p>
          <button className="mt-7 rounded-sm bg-brand-gradient px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
