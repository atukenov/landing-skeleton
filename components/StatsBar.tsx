"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";

export default function StatsBar() {
  const { t } = useLanguage();
  const { ref, inView } = useInView(0.2);

  return (
    <section className="py-20 bg-primary-700 relative overflow-hidden">
      {/* Subtle light pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />
      {/* Blobs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-800 rounded-full blur-3xl opacity-40" />

      <div ref={ref} className="relative z-10 section-wrapper">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {t.statsBar.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: inView ? `${i * 0.1}s` : "0s" }}
            >
              <div className="font-heading text-5xl md:text-6xl font-bold text-white">
                {stat.value}
                <span className="text-accent-400">{stat.suffix}</span>
              </div>
              <div className="mt-2 text-xs text-primary-200 uppercase tracking-widest leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
