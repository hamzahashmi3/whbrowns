import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    "Secure AWS IAM Multi-Role Architecture",
    "EC2 Docker Nginx with S3 Backup Automation",
    "High Availability Cloud Infrastructure with ALB & Auto Scaling",
  ];

  return (
      <motion.section
        id="portfolio"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-[1450px] gap-14 px-4 py-24 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center"
      >
      <div>
        <p className="mb-4 text-sm font-black text-violet-300">Portfolio proof</p>
        <h2 className="max-w-[540px] text-5xl font-black leading-[1.02] tracking-[-.04em]">
          Real cloud engineering projects that build trust.
        </h2>
        <p className="mt-6 max-w-[560px] text-lg leading-8 text-slate-300">
          WHBrowns is built around practical cloud architecture, DevOps workflows and automation projects that show real technical capability — not just design.
        </p>
      </div>

      <div className="space-y-5">
        {projects.map((p, i) => (
          <motion.article
            key={p}
            whileHover={{ x: 14, scale: 1.01 }}
            className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[.07] p-5 backdrop-blur-xl"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-500/15 font-black text-sky-300">
              0{i + 1}
            </div>
            <div>
              <h3 className="font-black">{p}</h3>
              <p className="mt-1 text-sm text-slate-400">AWS • Security • Automation • Documentation</p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}