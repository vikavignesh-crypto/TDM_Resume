import { profile, education } from "../data/portfolio";
import { useReveal } from "../hooks/use-reveal";

export default function About() {
  const { ref, visible } = useReveal();
  return (
    <section
      id="about"
      data-testid="about-section"
      ref={ref}
      className="border-t border-black/10 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-baseline justify-between mb-10 md:mb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/50">
            01 / About
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/40 hidden sm:block">
            Bio · Principles · Numbers
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Massive 12 years */}
          <div className="col-span-12 lg:col-span-5">
            <div
              className={`transition-all duration-1000 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="font-mono text-[10rem] md:text-[14rem] leading-[0.8] tracking-[-0.06em] font-medium">
                {profile.yearsOfExperience}<span className="text-[#002FA7]">.</span>
              </div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-black/60 mt-4">
                Years building delivery systems<br />for regulated software.
              </p>
            </div>
          </div>

          {/* Editorial copy */}
          <div className="col-span-12 lg:col-span-7 lg:pl-8">
            <h2
              data-testid="about-heading"
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.05] mb-8"
            >
              Project management as an{" "}
              <span className="text-[#002FA7]">engineering discipline</span>
              {" "}— not a status report.
            </h2>
            <div className="space-y-5 text-base md:text-lg leading-relaxed text-black/75 max-w-2xl">
              {profile.intro.map((p, i) => (
                <p key={i} data-testid={`about-paragraph-${i}`}>{p}</p>
              ))}
            </div>

            <div data-testid="about-education" className="mt-10 border-t border-black/10 pt-6 max-w-2xl">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/55 mb-2">
                Education
              </div>
              <div className="font-display font-semibold text-lg tracking-tight">
                {education.degree}
              </div>
              <div className="text-sm text-black/65 mt-1">
                {education.school} · {education.year} · {education.marks}
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-l border-black/10">
          {profile.stats.map((s, i) => (
            <div
              key={i}
              data-testid={`about-stat-${i}`}
              className="border-r border-b border-black/10 p-6 md:p-8 group hover:bg-[#F0F0F0] transition-colors"
            >
              <div className="font-display font-black text-5xl md:text-6xl tracking-tighter leading-none">
                {s.value}
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-black/55">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
