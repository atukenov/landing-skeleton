"use client";
import {
  Award, Truck, FlaskConical, Clock, Users, Leaf, Shield, Zap,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";

const icons = [Award, FlaskConical, Shield, Truck, Users, Clock, Leaf, Zap];

export default function Advantages() {
  const { t } = useLanguage();
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: gridRef, inView: gridIn } = useInView();

  return (
    <section id="advantages" className="py-24 bg-slate-50 relative overflow-hidden scroll-mt-28">
      {/* Subtle diagonal pattern */}
      <div className="absolute inset-0 pattern-diagonal" />

      <div className="relative z-10 section-wrapper">
        {/* Heading */}
        <div
          ref={headRef}
          className={`text-center mb-16 transition-all duration-700 ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="eyebrow">{t.advantages.eyebrow}</span>
          <h2 className="section-heading mt-2">{t.advantages.heading}</h2>
          <div className="accent-line mx-auto" />
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.advantages.items.map(({ title, desc }, i) => {
            const Icon = icons[i] ?? Award;
            return (
              <div
                key={title}
                className={`group bg-white rounded-xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 ${gridIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: gridIn ? `${i * 0.07}s` : "0s" }}
              >
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-5 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon size={22} />
                </div>
                <h3 className="font-heading text-dark-800 font-bold text-base leading-snug mb-2">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
