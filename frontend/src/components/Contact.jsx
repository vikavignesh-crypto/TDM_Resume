import { profile } from "../data/portfolio";
import { Mail, Linkedin, Phone, ArrowUpRight, Download } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="border-t border-black/10 bg-[#0A0A0A] text-white py-24 md:py-36 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 mb-10">
          06 / Contact
        </p>

        <h2
          data-testid="contact-heading"
          className="font-display font-black tracking-[-0.05em] leading-[0.85] text-[18vw] sm:text-[14vw] lg:text-[12rem] xl:text-[15rem]"
        >
          Let’s
          <br />
          <span className="text-[#5B7CFF]">talk.</span>
        </h2>

        <div className="mt-14 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7">
            <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-xl">
              Hiring for a TDM, QA platform, or regulated delivery programme? Or just want to compare notes on synthetic data? I read every message.
            </p>

            <div className="mt-10 space-y-4">
              <a
                data-testid="contact-email"
                href={`mailto:${profile.email}`}
                className="group flex items-center justify-between border-t border-white/15 py-5 hover:pl-4 transition-all"
              >
                <div className="flex items-center gap-4">
                  <Mail size={18} strokeWidth={1.5} className="text-white/60" />
                  <span className="font-display font-bold text-2xl md:text-3xl tracking-tight">{profile.email}</span>
                </div>
                <ArrowUpRight size={20} strokeWidth={1.5} className="opacity-50 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                data-testid="contact-linkedin"
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between border-t border-white/15 py-5 hover:pl-4 transition-all"
              >
                <div className="flex items-center gap-4">
                  <Linkedin size={18} strokeWidth={1.5} className="text-white/60" />
                  <span className="font-display font-bold text-2xl md:text-3xl tracking-tight">{profile.links.linkedinHandle}</span>
                </div>
                <ArrowUpRight size={20} strokeWidth={1.5} className="opacity-50 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                data-testid="contact-phone"
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="group flex items-center justify-between border-t border-b border-white/15 py-5 hover:pl-4 transition-all"
              >
                <div className="flex items-center gap-4">
                  <Phone size={18} strokeWidth={1.5} className="text-white/60" />
                  <span className="font-display font-bold text-2xl md:text-3xl tracking-tight">{profile.phone}</span>
                </div>
                <ArrowUpRight size={20} strokeWidth={1.5} className="opacity-50 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 md:pl-8">
            <div className="border border-white/15 p-6 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50 mb-3">
                CARD / 01 — Availability
              </div>
              <div className="font-display font-bold text-2xl tracking-tight mb-2">
                Open to Senior PM /<br />TDM leadership roles.
              </div>
              <p className="text-white/65 text-sm leading-relaxed mb-6">
                Onsite/Offshore delivery. Comfortable with global hours.<br />Long-term contracts and full-time considered.
              </p>
              <a
                data-testid="contact-resume"
                href={profile.links.resume}
                download
                className="inline-flex items-center gap-3 bg-white text-black hover:bg-[#5B7CFF] hover:text-white px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors"
              >
                <Download size={14} strokeWidth={1.75} />
                Résumé · PDF
              </a>
            </div>

            <div className="mt-6 border border-white/15 p-6 md:p-8">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50 mb-3">
                CARD / 02 — Now
              </div>
              <ul className="space-y-2 text-sm text-white/75">
                <li>— Leading TDM @ TCS · Truist</li>
                <li>— Owning 51 Delphix engines</li>
                <li>— Hiring panel & SOW reviews</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/10 grid grid-cols-12 gap-6 font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
          <div className="col-span-6 md:col-span-3">© {new Date().getFullYear()} Vigneshwaran B</div>
          <div className="col-span-6 md:col-span-3">Designed & built end-to-end</div>
          <div className="col-span-6 md:col-span-3">Cabinet Grotesk · IBM Plex · JetBrains Mono</div>
          <div className="col-span-6 md:col-span-3 text-right md:text-left">v 1.0 · {new Date().getFullYear()}</div>
        </div>
      </div>
    </section>
  );
}
