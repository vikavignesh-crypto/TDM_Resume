import { projects } from "../data/portfolio";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="work"
      data-testid="projects-section"
      className="border-t border-black/10 bg-[#F0F0F0]/40 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/50 mb-4">
              04 / Selected work
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-[0.95] max-w-3xl">
              Case studies, not screenshots.
            </h2>
          </div>
          <p className="hidden md:block font-mono text-[11px] uppercase tracking-[0.2em] text-black/45">
            {projects.length} projects · Anonymised
          </p>
        </div>

        <div className="space-y-12 md:space-y-20">
          {projects.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={i}
                data-testid={`project-${i}`}
                className={`grid grid-cols-12 gap-6 md:gap-10 items-stretch border border-black/10 bg-white`}
              >
                <div
                  className={`col-span-12 lg:col-span-7 ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <div className="aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-black/10">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover img-swiss transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>
                </div>
                <div
                  className={`col-span-12 lg:col-span-5 p-6 md:p-10 flex flex-col ${
                    reverse ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#002FA7]">
                      {p.code}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/50">
                      Confidential — anonymised
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-[1.1] mb-5">
                    {p.title}
                  </h3>
                  <p className="text-black/70 leading-relaxed text-base mb-6">
                    {p.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-black/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-black/65"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto grid grid-cols-3 border-t border-l border-black/10">
                    {p.metrics.map((m, j) => (
                      <div
                        key={j}
                        data-testid={`project-${i}-metric-${j}`}
                        className="border-r border-b border-black/10 p-4"
                      >
                        <div className="font-display font-black text-xl md:text-2xl tracking-tight leading-none">
                          {m.v}
                        </div>
                        <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-black/55">
                          {m.k}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    data-testid={`project-${i}-cta`}
                    className="mt-8 self-start inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-black hover:text-[#002FA7] transition-colors group"
                  >
                    Read the full study
                    <ArrowUpRight size={14} strokeWidth={1.75} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
