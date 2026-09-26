"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";

export default function Production() {
  const { t } = useLanguage();
  const { production } = t;
  const last = production.steps.length - 1;

  return (
    <section id="production" aria-labelledby="production-title" className="section">
      <div className="container-site flex flex-col gap-10 lg:gap-12">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-16">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">{production.eyebrow}</span>
            <h2 id="production-title" className="h-section">{production.heading}</h2>
          </div>
          <p className="max-w-[420px] text-[17px] leading-relaxed text-muted">{production.text}</p>
        </Reveal>

        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {production.steps.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 60}
              className="flex flex-col gap-8 rounded-3xl border border-sand-line p-7 lg:gap-10"
            >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full font-display text-[15px] ${
                    i === last ? "bg-amber text-ink" : "bg-ink text-amber"
                  }`}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted">{s.text}</p>
                </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="relative h-[240px] overflow-hidden rounded-[28px] sm:h-[360px] lg:rounded-[32px]">
          <Image
            src="/images/rollers.jpg"
            alt=""
            fill
            sizes="(min-width: 1440px) 1312px, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
