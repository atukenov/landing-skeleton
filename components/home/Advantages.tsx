"use client";
import { Clock, Ruler, Truck, Wallet } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";

const icons = [Truck, Ruler, Clock, Wallet];

export default function Advantages() {
  const { t } = useLanguage();
  const { advantages } = t;

  return (
    <section aria-labelledby="advantages-title" className="section">
      <div className="container-site">
        <Reveal className="grid grid-cols-1 gap-10 rounded-[28px] bg-sand p-8 lg:grid-cols-[1fr_2fr] lg:rounded-[32px] lg:p-14">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">{advantages.eyebrow}</span>
            <h2 id="advantages-title" className="h-section lg:text-[44px]">{advantages.heading}</h2>
          </div>
          <ul className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {advantages.items.map((a, i) => {
              const Icon = icons[i];
              return (
                <li key={a.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-amber-ink">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-bold">{a.title}</h3>
                    <p className="text-[15px] leading-relaxed text-muted">{a.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
