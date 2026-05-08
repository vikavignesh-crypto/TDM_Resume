import { useState } from "react";
import { testimonials } from "../data/portfolio";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="voices"
      data-testid="testimonials-section"
      className="border-t border-black/10 py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/50">
            05 / Voices
          </p>
          <div className="flex items-center gap-3">
            <button
              data-testid="testimonial-prev"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 border border-black/20 hover:bg-black hover:text-white transition-colors flex items-center justify-center"
            >
              <ChevronLeft size={16} strokeWidth={1.75} />
            </button>
            <span data-testid="testimonial-index" className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/55 w-12 text-center">
              {String(i + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
            <button
              data-testid="testimonial-next"
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 border border-black/20 hover:bg-black hover:text-white transition-colors flex items-center justify-center"
            >
              <ChevronRight size={16} strokeWidth={1.75} />
            </button>
          </div>
        </div>

        <blockquote
          key={i}
          data-testid="testimonial-quote"
          className="reveal font-display font-bold text-3xl sm:text-5xl lg:text-7xl xl:text-[5.5rem] tracking-tighter leading-[0.98] max-w-5xl"
        >
          <span className="text-[#002FA7]">“</span>
          {t.quote}
          <span className="text-[#002FA7]">”</span>
        </blockquote>

        <div className="mt-12 flex items-center gap-4">
          <div className="w-14 h-14 border border-black/15 flex items-center justify-center font-display font-black text-lg">
            {t.author.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <div data-testid="testimonial-author" className="font-display font-semibold text-base">{t.author}</div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-black/55 mt-1">
              {t.role}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
