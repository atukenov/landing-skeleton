"use client";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";

export default function KeyFigures() {
  const { t } = useLanguage();
  return (
    <section id="quality" aria-label={t.nav.quality} className="section">
      <Reveal className="container-site grid grid-cols-2 gap-y-10 lg:grid-cols-4">
        {t.figures.map((f, i) => (
          <div
            key={i}
            className={`flex flex-col gap-2.5 border-sand-line ${
              i % 2 === 0 ? "pr-4 sm:pr-8" : "border-l pl-4 sm:pl-8"
            } ${i === 0 ? "lg:pr-8" : "lg:border-l lg:px-8"}`}
          >
            <span className="whitespace-nowrap font-display text-[28px] font-medium tracking-[-0.02em] sm:text-[44px] xl:text-[52px]">
              {f.value}
            </span>
            <span className="text-sm leading-snug text-muted sm:text-base">{f.label}</span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
