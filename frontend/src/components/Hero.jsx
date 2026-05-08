import { ArrowDown, Download, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Hero() {
  const goContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-32 md:pt-40 pb-16 md:pb-24 grid-bg"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top meta row */}
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-black/50 mb-12 md:mb-20 reveal">
          <span data-testid="hero-meta-portfolio">Portfolio · 2014 — 2025</span>
          <span className="hidden sm:inline" data-testid="hero-meta-location">{profile.location}</span>
          <span className="hidden md:inline" data-testid="hero-meta-status">
            <span className="inline-block w-1.5 h-1.5 bg-[#002FA7] mr-2 align-middle" />
            {profile.currentlyAt}
          </span>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
          {/* Left: massive type */}
          <div className="col-span-12 lg:col-span-9 reveal" style={{ animationDelay: "120ms" }}>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/50 mb-6">
              ↳ {profile.role}
            </p>
            <h1
              data-testid="hero-name"
              className="font-display font-black tracking-[-0.045em] leading-[0.85]"
            >
              <span className="block text-[14vw] sm:text-[10vw] lg:text-[6.75rem] xl:text-[8rem]">
                {profile.firstName}
              </span>
              <span className="block text-[#002FA7] text-[9vw] sm:text-[6.5vw] lg:text-[4.25rem] xl:text-[5rem] mt-1">
                {profile.lastName}.
              </span>
            </h1>

            <p
              data-testid="hero-tagline"
              className="mt-10 max-w-xl text-base md:text-lg leading-relaxed text-black/70"
            >
              {profile.tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                data-testid="hero-cta-resume"
                href={profile.links.resume}
                download
                className="group inline-flex items-center gap-3 bg-[#002FA7] hover:bg-[#001D6E] text-white px-6 py-4 text-xs font-mono uppercase tracking-[0.18em] transition-colors"
              >
                <Download size={14} strokeWidth={1.75} />
                Download Résumé
              </a>
              <button
                data-testid="hero-cta-contact"
                onClick={goContact}
                className="group inline-flex items-center gap-3 bg-transparent border border-black/80 text-black hover:bg-black hover:text-white px-6 py-4 text-xs font-mono uppercase tracking-[0.18em] transition-colors"
              >
                Get in touch
                <ArrowUpRight size={14} strokeWidth={1.75} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Right: portrait */}
          <div className="col-span-12 lg:col-span-3 reveal" style={{ animationDelay: "260ms" }}>
            <div className="relative border border-black/10 bg-white">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  data-testid="hero-headshot"
                  src="https://images.unsplash.com/photo-1758876204244-930299843f07?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG1vZGVybiUyMG9mZmljZXxlbnwwfHx8fDE3NzgyNjkwODd8MA&ixlib=rb-4.1.0&q=85"
                  alt={`Portrait of ${profile.name}`}
                  className="w-full h-full object-cover img-swiss"
                  loading="eager"
                />
              </div>
              <div className="border-t border-black/10 px-4 py-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-black/60">
                <span>FIG. 01 — {profile.initials}</span>
                <span>{new Date().getFullYear()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 md:mt-24 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-black/50">
          <ArrowDown size={14} strokeWidth={1.5} className="animate-bounce" />
          <span>Scroll · Eleven years, briefly told</span>
        </div>
      </div>
    </section>
  );
}
