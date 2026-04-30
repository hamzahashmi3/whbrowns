import { motion } from "framer-motion";
import { ArrowRight, Box, Moon, Zap } from "lucide-react";
import HeroStage from "./HeroStage";
import TechLogo from "../ui/TechLogo";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-[940px] max-w-[1450px] grid-cols-1 items-center gap-8 px-4 pb-0 pt-44 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:pt-32"
    >
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,.25),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(139,92,246,.25),transparent_40%)]" />

      <div className="relative z-20 pb-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-flex rounded-full border border-sky-400/45 bg-sky-400/10 px-4 py-2 text-xs font-black uppercase tracking-[.25em] text-sky-300 shadow-[0_0_22px_rgba(56,189,248,.28)]"
        >
          Cloud • DevOps • E-commerce
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="max-w-[610px] text-[3.7rem] font-black leading-[0.9] tracking-[-.06em] sm:text-[4.6rem] md:text-[6.35rem]"
        >
          We Build. <br />
          Automate. <br />
          <span className="bg-gradient-to-r from-sky-300 via-blue-500 to-violet-400 bg-clip-text text-transparent">
            Scale Beyond.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="mt-8 max-w-[560px] text-lg leading-9 text-slate-300"
        >
          WHBrowns empowers businesses with next-gen cloud solutions, DevOps automation, and high-converting e-commerce operations that drive real growth.
        </motion.p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 px-8 py-4 font-black shadow-[0_0_25px_rgba(59,130,246,.35)]"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />
            <span className="relative z-10 inline-flex items-center gap-2">
              Start Your Project <ArrowRight size={17} />
            </span>
          </motion.a>

          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-black backdrop-blur transition hover:bg-white/10"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />
            <span className="relative z-10">View Our Work</span>
          </motion.a>
        </div>

        <div className="mt-9">
          <p className="mb-4 text-base font-semibold text-slate-300">
            Trusted by future-ready brands worldwide
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {["aws", "docker", "k8s", "Terraform"].map((x) => (
              <TechLogo key={x} name={x} />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 -ml-4 hidden lg:block lg:scale-[0.95] xl:scale-[0.95]">
        <HeroStage />
      </div>

      {/* <div className="fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 rounded-full border border-white/10 bg-[#030817]/70 p-3 backdrop-blur-xl xl:block">
        <div className="flex flex-col gap-3 text-center text-xs font-bold text-slate-200">
          <span className="rounded-full bg-white/10 px-3 py-3">
            <Moon size={18} className="mx-auto mb-1" />
            Dark
          </span>

          <span className="rounded-full bg-white/10 px-3 py-3">
            <Box size={18} className="mx-auto mb-1" />
            3D On
          </span>

          <span className="rounded-full bg-white/10 px-3 py-3">
            <Zap size={18} className="mx-auto mb-1" />
            Scroll
          </span>
        </div>
      </div> */}
    </section>
  );
}