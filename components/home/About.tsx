"use client";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";

export default function About() {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section id="about" aria-labelledby="about-title" className="section">
      <div className="container-site grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative min-h-[420px] overflow-hidden rounded-[28px] lg:min-h-[640px] lg:rounded-[32px]">
          <Image
            src="/images/line.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 656px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-4 bottom-4 flex flex-col gap-1.5 rounded-[20px] bg-ink/90 p-6 text-white lg:inset-x-6 lg:bottom-6">
            <span className="text-[13px] font-bold uppercase tracking-[0.12em] text-amber">
              {about.missionLabel}
            </span>
            <span className="text-[17px] leading-snug lg:text-[19px]">{about.mission}</span>
          </div>
        </Reveal>

        <Reveal delay={100} className="flex flex-col gap-10 lg:py-2">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">{about.eyebrow}</span>
            <h2 id="about-title" className="h-section lg:text-5xl">{about.heading}</h2>
            <p className="text-[17px] leading-relaxed text-muted">{about.text}</p>
          </div>
          <ol className="flex flex-col">
            {about.items.map((item, i) => (
              <li key={item.title} className="flex gap-6 border-t border-sand-line py-6 last:border-b">
                <span className="w-8 shrink-0 pt-1 font-display text-[15px] text-amber-ink" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-base leading-relaxed text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
