import { tech } from "../../data/siteData";
import TechLogo from "../ui/TechLogo";

export default function TechStack() {
  return (
    <section className="border-y border-white/10 bg-[#050b1c]/85 px-4 py-7 sm:px-8">
      <div className="mx-auto max-w-[1450px]">
        <p className="mb-5 text-xs font-black uppercase tracking-[.25em] text-violet-300">
          Technologies we work with
        </p>
        <div className="flex flex-wrap items-center gap-4">
          {tech.map((x) => (
            <TechLogo key={x} name={x} />
          ))}
        </div>
      </div>
    </section>
  );
}