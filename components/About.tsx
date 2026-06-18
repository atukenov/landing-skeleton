"use client";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";

export default function About() {
  const { t } = useLanguage();
  const { ref: imgRef,  inView: imgIn  } = useInView();
  const { ref: textRef, inView: textIn } = useInView();

  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden relative scroll-mt-28">
      <div className="absolute inset-0 pattern-dots opacity-50" />

      <div className="relative z-10 section-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image side */}
          <div
            ref={imgRef}
            className={`relative order-2 lg:order-1 transition-all duration-700 ${imgIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="relative rounded-2xl overflow-hidden h-[460px] bg-gradient-to-br from-primary-100 to-blue-200 shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-primary-300/40 text-8xl font-bold select-none">
                  {t.about.photoPlaceholder}
                </span>
              </div>
              {/* Gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary-900/30 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 md:-right-6 bg-primary-600 text-white p-6 shadow-2xl rounded-xl w-44">
              <div className="font-heading text-4xl font-bold">{t.about.yearsValue}</div>
              <div className="text-xs text-primary-200 mt-1 leading-tight">
                {t.about.yearsLabel}
              </div>
            </div>

            {/* Accent corner */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-4 border-accent-400 rounded-sm opacity-70 animate-float" />
          </div>

          {/* Text side */}
          <div
            ref={textRef}
            className={`order-1 lg:order-2 transition-all duration-700 delay-150 ${textIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <span className="eyebrow">{t.about.eyebrow}</span>
            <h2 className="section-heading mt-2">{t.about.heading}</h2>
            <div className="accent-line" />

            <p className="text-gray-600 leading-relaxed mt-2">{t.about.p1}</p>
            <p className="text-gray-600 leading-relaxed mt-4">{t.about.p2}</p>

            <ul className="mt-8 space-y-3">
              {t.about.highlights.map((item, i) => (
                <li
                  key={item}
                  className={`flex items-center gap-3 text-sm text-dark-700 transition-all duration-500 ${textIn ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                  style={{ transitionDelay: textIn ? `${0.2 + i * 0.06}s` : "0s" }}
                >
                  <CheckCircle2 size={17} className="text-primary-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contacts" className="btn-primary">
                {t.about.ctaContact}
              </a>
              <a href="#production" className="btn-outline">
                {t.about.ctaProduction}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
