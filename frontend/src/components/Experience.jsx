import { experience } from "../data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="border-t border-black/10 bg-[#F0F0F0]/40 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/50 mb-4">
              02 / Experience
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-[0.95] max-w-2xl">
              A career, indexed.
            </h2>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/45 hidden sm:block">
            {experience.length} entries · 2014 → 2025
          </p>
        </div>

        {/* Header row */}
        <div className="grid grid-cols-12 border-y border-black/15 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-black/55">
          <div className="col-span-3 sm:col-span-2">Years</div>
          <div className="col-span-9 sm:col-span-4">Role</div>
          <div className="hidden sm:block sm:col-span-3">Company</div>
          <div className="hidden sm:block sm:col-span-3">Detail</div>
        </div>

        {/* Rows */}
        <div>
          {experience.map((row, i) => (
            <div
              key={i}
              data-testid={`exp-row-${i}`}
              className="grid grid-cols-12 border-b border-black/10 py-6 md:py-7 group hover:bg-white transition-colors"
            >
              <div className="col-span-3 sm:col-span-2 font-mono text-xs md:text-sm text-black/70">
                {row.years}
              </div>
              <div className="col-span-9 sm:col-span-4 pr-4">
                <div className="font-display font-bold text-lg md:text-xl tracking-tight leading-snug">
                  {row.role}
                </div>
                <div className="sm:hidden mt-2 text-sm text-black/60">{row.company}</div>
                <div className="sm:hidden mt-2 text-sm text-black/55 leading-relaxed">{row.detail}</div>
              </div>
              <div className="hidden sm:flex sm:col-span-3 items-start text-sm text-black/70">
                <span className="font-medium">{row.company}</span>
              </div>
              <div className="hidden sm:flex sm:col-span-3 items-start text-sm text-black/60 leading-relaxed pr-4">
                <span>{row.detail}</span>
                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="ml-3 mt-1 shrink-0 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#002FA7]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
