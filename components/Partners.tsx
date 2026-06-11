"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";

const partners = [
  { name: "Partner 1", logo: null },
  { name: "Partner 2", logo: null },
  { name: "Partner 3", logo: null },
  { name: "Partner 4", logo: null },
  { name: "Partner 5", logo: null },
  { name: "Partner 6", logo: null },
  { name: "Partner 7", logo: null },
  { name: "Partner 8", logo: null },
];

export default function Partners() {
  const { t } = useLanguage();
  const { ref, inView } = useInView();
  const doubled = [...partners, ...partners];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div
        ref={ref}
        className={`section-wrapper mb-12 text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <span className="eyebrow">{t.partners.eyebrow}</span>
        <h2 className="section-heading mt-2 text-2xl md:text-3xl">
          {t.partners.heading}
        </h2>
        <div className="accent-line mx-auto" />
      </div>

      {/* Marquee strip */}
      <div className="overflow-hidden">
        <div className="marquee-track gap-6 px-4">
          {doubled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 w-40 h-20 border border-gray-200 rounded-lg bg-white flex items-center justify-center px-6 hover:border-primary-300 hover:shadow-md transition-all duration-200 grayscale hover:grayscale-0"
            >
              {partner.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-10 max-w-full object-contain"
                />
              ) : (
                <span className="text-xs font-semibold text-gray-400 text-center leading-tight">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
