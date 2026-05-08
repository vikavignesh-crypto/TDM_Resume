import { useEffect, useState } from "react";
import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";

const NAV = [
  { label: "01 / About", id: "about" },
  { label: "02 / Experience", id: "experience" },
  { label: "03 / Skills", id: "skills" },
  { label: "04 / Work", id: "work" },
  { label: "05 / Voices", id: "voices" },
  { label: "06 / Contact", id: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/75 backdrop-blur-xl border-b border-black/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={() => go("top")}
          className="font-display font-black text-lg tracking-tighter flex items-center gap-2"
        >
          <span className="inline-block w-2 h-2 bg-[#002FA7]" />
          ALEX MORGAN<span className="text-black/40">.</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <button
              key={item.id}
              data-testid={`nav-link-${item.id}`}
              onClick={() => go(item.id)}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/70 hover:text-black link-line"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            data-testid="nav-cta-contact"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go("contact");
            }}
            className="inline-flex items-center gap-2 bg-[#002FA7] hover:bg-[#001D6E] text-white px-4 py-2 text-xs font-mono uppercase tracking-[0.16em] transition-colors"
          >
            Let’s Talk <ArrowUpRight size={14} strokeWidth={1.75} />
          </a>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle navigation"
          className="md:hidden inline-flex flex-col gap-[5px] p-2"
        >
          <span className={`block h-px w-6 bg-black transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-black transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-black transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-black/10 transition-[max-height] duration-500 ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {NAV.map((item) => (
            <button
              key={item.id}
              data-testid={`nav-mobile-${item.id}`}
              onClick={() => go(item.id)}
              className="text-left font-display text-2xl font-bold tracking-tight"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-black/10 flex items-center gap-5 text-black/60">
            <a href="mailto:contact@example.com" data-testid="nav-mobile-mail"><Mail size={18} strokeWidth={1.5} /></a>
            <a href="https://www.linkedin.com/in/example" target="_blank" rel="noreferrer" data-testid="nav-mobile-linkedin"><Linkedin size={18} strokeWidth={1.5} /></a>
            <a href="https://github.com/example" target="_blank" rel="noreferrer" data-testid="nav-mobile-github"><Github size={18} strokeWidth={1.5} /></a>
          </div>
        </div>
      </div>
    </header>
  );
}
