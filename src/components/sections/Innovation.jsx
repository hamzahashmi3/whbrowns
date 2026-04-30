import { motion } from "framer-motion";
import { Box } from "lucide-react";
import innovationGif from "../../img/innovation.gif";

export default function Innovation() {
  return (
    <section className="relative mx-auto my-12 h-[460px] max-w-[1450px] overflow-hidden rounded-[2rem] border border-white/10 px-4 sm:px-8">
      <img
        src={innovationGif}
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#020713]/90 via-[#020713]/35 to-[#020713]/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020713] via-transparent to-[#020713]/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <p className="mb-4 inline-flex rounded-full border border-sky-400/35 bg-sky-500/15 px-5 py-2 text-xs font-black uppercase tracking-[.25em] text-sky-300">
          Explore our 3D world
        </p>

        <h2 className="text-5xl font-black tracking-[-.04em] md:text-6xl">
          Step Into Innovation
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
          Drag, rotate and explore the tech world we build
        </p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.06, y: -3 }}
          whileTap={{ scale: 0.97 }}
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-sky-500 to-violet-500 px-8 py-4 font-black shadow-[0_0_35px_rgba(59,130,246,.35)]"
        >
          <span className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />
          <span className="relative z-10 flex items-center gap-2">
            <Box size={18} /> Enter 3D World
          </span>
        </motion.a>
      </div>
    </section>
  );
}