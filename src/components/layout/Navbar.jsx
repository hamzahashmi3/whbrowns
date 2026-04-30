import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-8 sm:py-5">
      <nav className="mx-auto flex max-w-[1450px] items-center justify-between rounded-2xl border border-white/10 bg-[#030817]/60 backdrop-blur-md border border-white/10 shadow-[0_0_40px_rgba(0,0,0,.45)] sm:px-6 sm:py-4">
        <a href="#home" className="flex items-center gap-3">
          <div className="text-[2rem] font-black leading-none tracking-tighter">
            <span className="text-sky-300">W</span>
            <span className="text-violet-400">B</span>
          </div>
          <div>
            <p className="text-lg font-black leading-none tracking-wide">WHBROWNS</p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-[.25em] text-slate-400">
              Cloud • DevOps • E-commerce
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-9 text-sm font-bold text-slate-200 lg:flex">
          {["Home", "Services", "Solutions", "Portfolio", "About", "Blog", "Contact"].map((item, i) => (
            <a
              key={item}
              href={item === "Home" ? "#home" : item === "Solutions" ? "#services" : `#${item.toLowerCase()}`}
              className={`relative transition hover:text-sky-300 ${i === 0 ? "text-sky-300" : ""}`}
            >
              {item}
              {i === 0 && (
                <span className="absolute -bottom-4 left-0 h-[2px] w-full bg-sky-400 shadow-[0_0_18px_rgba(56,189,248,1)]" />
              )}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="group relative hidden overflow-hidden rounded-xl border border-violet-400/60 bg-violet-500/10 px-6 py-3.5 text-sm font-black shadow-[0_0_20px_rgba(139,92,246,.25)] transition hover:bg-violet-500/20 md:inline-flex"
        >
          <span className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />
          <span className="relative z-10 flex items-center gap-2">
            Let’s Talk <ArrowRight size={16} />
          </span>
        </a>
      </nav>
    </header>
  );
}