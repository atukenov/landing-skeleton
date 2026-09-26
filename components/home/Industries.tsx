"use client";
import { Building2, Package, Sprout } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";

const styles = [
  { card: "bg-ink text-white", icon: "text-amber", text: "text-muted-dark", tags: "text-amber", Icon: Sprout },
  { card: "bg-sand", icon: "text-amber-ink", text: "text-muted", tags: "text-amber-ink", Icon: Building2 },
  { card: "bg-amber", icon: "text-ink", text: "text-[#2c2410]", tags: "text-ink", Icon: Package },
];

export default function Industries() {
  const { t } = useLanguage();
  const { industries } = t;

  return (
    <section aria-labelledby="industries-title" className="section">
      <div className="container-site flex flex-col gap-10 lg:gap-12">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-16">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">{industries.eyebrow}</span>
            <h2 id="industries-title" className="h-section">{industries.heading}</h2>
          </div>
          <p className="max-w-[420px] text-[17px] leading-relaxed text-muted">{industries.text}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {industries.items.map((item, i) => {
            const s = styles[i];
            return (
              <Reveal key={item.title} delay={i * 80}>
                <div className={`flex h-full min-h-[300px] flex-col justify-between gap-10 rounded-[28px] p-8 lg:min-h-[360px] lg:p-9 ${s.card}`}>
                  <s.Icon size={48} strokeWidth={1.4} className={s.icon} aria-hidden="true" />
                  <div className="flex flex-col gap-3.5">
                    <h3 className="font-display text-[26px] font-medium lg:text-[28px]">{item.title}</h3>
                    <p className={`text-base leading-relaxed ${s.text}`}>{item.text}</p>
                    <span className={`text-sm font-bold ${s.tags}`}>{item.tags}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
