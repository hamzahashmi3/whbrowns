import { motion } from "framer-motion";
import { trustItems } from "../../data/siteData";

export default function TrustBar() {
  return (
    <section className="relative z-30 mx-auto -mt-4 max-w-[1450px] px-4 sm:px-8 lg:-mt-10">
      <div className="rounded-3xl border border-white/12 bg-[#050b1c]/85 p-6 backdrop-blur-2xl shadow-[0_0_80px_rgba(0,0,0,.55)]">
        <div className="grid gap-3 md:grid-cols-4">
          {trustItems.map(([Icon, title, text], i) => (
            <motion.article key={title} whileHover={{ y: -8, scale: 1.02 }} className="flex items-center gap-5 rounded-2xl p-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 13 + i, repeat: Infinity, ease: "linear" }}
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-400/10 shadow-[0_0_35px_rgba(56,189,248,.3)]"
              >
                <Icon className="text-sky-300 drop-shadow-[0_0_20px_rgba(56,189,248,.9)]" size={42} />
              </motion.div>
              <div>
                <h3 className="font-black">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}