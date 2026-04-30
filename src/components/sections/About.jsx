import { GitBranch, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1450px] px-4 pb-20 sm:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-500/10 via-[#071127] to-violet-500/12 p-10 backdrop-blur-xl md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_.7fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-black text-sky-300">About WHBrowns</p>
            <h2 className="max-w-[760px] text-5xl font-black leading-[1.04] tracking-[-.04em]">
              A modern UK-based company for digital infrastructure and online business operations.
            </h2>
            <p className="mt-6 max-w-[760px] text-lg leading-8 text-slate-300">
              WHBrowns combines cloud engineering, DevOps automation, IT services and e-commerce operations to help businesses become faster, safer and more scalable. Our vision is to grow into a reliable technology team that supports businesses across the UK and global markets.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl border border-white/10 bg-white/7 p-6">
              <GitBranch className="mb-4 text-sky-300" />
              <p className="font-black">Growth focused</p>
              <p className="mt-1 text-sm text-slate-400">Designed for long-term business scaling.</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/7 p-6">
              <ShieldCheck className="mb-4 text-violet-300" />
              <p className="font-black">Security first</p>
              <p className="mt-1 text-sm text-slate-400">Cloud systems with trust and protection in mind.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}