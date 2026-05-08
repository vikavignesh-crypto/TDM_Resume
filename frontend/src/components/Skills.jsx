import { skills, certifications } from "../data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="border-t border-black/10 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/50 mb-4">
              03 / Capabilities
            </p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tighter leading-[0.95] max-w-3xl">
              The control&nbsp;room.
            </h2>
          </div>
          <p className="hidden md:block font-mono text-[11px] uppercase tracking-[0.2em] text-black/45 max-w-xs text-right">
            What I bring into the room — programme craft, TDM tooling, and an engineer's instinct for systems.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 border-l border-t border-black/10">
          {skills.map((cell, i) => (
            <div
              key={i}
              data-testid={`skill-cell-${i}`}
              className="border-r border-b border-black/10 p-6 md:p-8 min-h-[200px] flex flex-col justify-between group hover:bg-[#002FA7] hover:text-white transition-colors duration-500"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/45 group-hover:text-white/60">
                  / {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/45 group-hover:text-white/60">
                  {cell.items.length} items
                </span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight mb-3">
                  {cell.group}
                </h3>
                <ul className="space-y-1">
                  {cell.items.map((it) => (
                    <li
                      key={it}
                      className="text-sm text-black/70 group-hover:text-white/80 leading-snug"
                    >
                      — {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications marquee */}
        <div className="mt-20 border-y border-black/10 py-6 overflow-hidden">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/55">
              Certifications · Continuously refreshed
            </span>
            <span className="flex-1 h-px bg-black/10" />
          </div>
          <div className="overflow-hidden">
            <div className="marquee-track flex gap-12 whitespace-nowrap">
              {[...certifications, ...certifications].map((c, i) => (
                <span
                  key={i}
                  data-testid={i < certifications.length ? `cert-${i}` : undefined}
                  className="font-display font-bold text-3xl md:text-5xl tracking-tighter text-black/80"
                >
                  {c} <span className="text-[#002FA7]">·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
