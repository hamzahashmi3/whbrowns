import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "../../data/siteData";
import CountNumber from "../ui/CountNumber";

import trolleyGif from "../../img/trolly.gif";
import infinityGif from "../../img/infinity.gif";
import cloudGif from "../../img/cloud.gif";
import laptopGif from "../../img/laptop.gif";

const gifs = {
  cloud: {
    src: cloudGif,
    alt: "Cloud architecture animation",
    glow: "rgba(56,189,248,0.25)",
  },
  infinity: {
    src: infinityGif,
    alt: "DevOps automation animation",
    glow: "rgba(139,92,246,0.28)",
  },
  commerce: {
    src: trolleyGif,
    alt: "E-commerce automation animation",
    glow: "rgba(0,255,213,0.24)",
  },
  code: {
    src: laptopGif,
    alt: "IT services animation",
    glow: "rgba(34,211,238,0.25)",
  },
};

function ServiceArt({ index, type }) {
  const gif = gifs[type];

  return (
    <div className="relative mb-6 h-56 overflow-hidden rounded-2xl border border-sky-400/25 bg-[#061125] shadow-[inset_0_0_55px_rgba(56,189,248,.08)]">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.08 }}
      >
        <img
          src={gif.src}
          alt={gif.alt}
          className="h-full w-full scale-110 object-cover object-center brightness-110 contrast-110 saturate-125"
        />

        <div
          className="absolute inset-0 mix-blend-screen"
          style={{
            background: `radial-gradient(circle, ${gif.glow}, transparent 62%)`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061125] via-transparent to-transparent" />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full bg-sky-500/30 blur-2xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-violet-500/30 blur-2xl"
        animate={{ x: [0, -35, 0], y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1450px] px-4 py-20 sm:px-8">
      <div className="mb-12 grid items-end gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-sky-400/35 bg-sky-400/10 px-5 py-2 text-xs font-black uppercase tracking-[.25em] text-sky-300">
            What we do
          </p>

          <h2 className="max-w-[620px] text-4xl font-black leading-[1.05] tracking-[-.04em] sm:text-5xl">
            End-to-End Solutions for Modern Businesses
          </h2>
        </div>

        <p className="max-w-[520px] text-base leading-8 text-slate-300 sm:text-lg lg:ml-auto">
          From cloud infrastructure to online store scaling, we deliver everything you need to succeed in today’s digital world.
        </p>
      </div>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        {services.map(([Icon, title, points, type], index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -12, scale: 1.02 }}
            className="group rounded-3xl border border-sky-400/25 bg-[#050b1c]/85 p-5 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(56,189,248,.25)] hover:border-sky-300/40"
          >
            <ServiceArt index={index} type={type} />

            <h3 className="mb-5 text-2xl font-black leading-[1] tracking-[-.035em] sm:text-3xl">
              {title}
            </h3>

            <ul className="space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-sky-300">✦</span>
                  {point}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-2 text-base font-black text-violet-300 transition group-hover:text-sky-300"
            >
              Explore <ArrowRight size={16} />
            </a>
          </motion.article>
        ))}
      </div>

      <div className="mt-8 grid rounded-3xl border border-white/10 bg-[#050b1c]/85 p-7 text-center backdrop-blur-2xl md:grid-cols-4">
        {[
          [10, "+", "Projects Delivered"],
          [5, "+", "Technologies"],
          [100, "%", "Client Satisfaction"],
          [24, "/7", "Support Available"],
        ].map(([value, suffix, label], i) => (
          <div key={label} className={`${i !== 3 ? "md:border-r" : ""} border-white/10 py-4`}>
            <p className="bg-gradient-to-r from-sky-300 to-violet-400 bg-clip-text text-5xl font-black text-transparent">
              <CountNumber value={value} suffix={suffix} />
            </p>
            <p className="mt-3 text-slate-300">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}