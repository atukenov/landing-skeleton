"use client";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useInView } from "@/hooks/useInView";

export default function Products() {
  const { t } = useLanguage();
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: gridRef, inView: gridIn } = useInView();

  return (
    <section id="products" className="py-24 bg-white relative">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 pattern-grid" />

      <div className="relative z-10 section-wrapper">
        {/* Heading row */}
        <div
          ref={headRef}
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 transition-all duration-700 ${headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div>
            <span className="eyebrow">{t.products.eyebrow}</span>
            <h2 className="section-heading mt-2">{t.products.heading}</h2>
            <div className="accent-line" />
          </div>
          <a href="#contacts" className="btn-outline self-start md:self-auto shrink-0">
            {t.products.requestCatalog}
          </a>
        </div>

        {/* Cards grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {t.products.categories.map((cat, i) => (
            <div
              key={cat.title}
              className={`group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col ${gridIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: gridIn ? `${i * 0.08}s` : "0s" }}
            >
              {/* Color header strip */}
              <div className="relative h-28 bg-gradient-to-br from-primary-50 to-blue-100 flex items-center justify-center overflow-hidden shrink-0">
                <span className="font-heading text-6xl font-bold text-primary-200 select-none group-hover:scale-110 transition-transform duration-500">
                  {i + 1}
                </span>
                <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/8 transition-all duration-300" />
                {cat.badge && (
                  <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 uppercase tracking-wide rounded ${
                    cat.badge === "popular"
                      ? "bg-accent-500 text-white"
                      : "bg-primary-600 text-white"
                  }`}>
                    {t.products.badges[cat.badge]}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading text-lg font-bold text-dark-800 group-hover:text-primary-600 transition-colors leading-snug">
                  {cat.title}
                </h3>
                <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">
                  {cat.desc}
                </p>

                {/* Product items */}
                <div className="mt-4 border-t border-gray-100 pt-4 space-y-2 flex-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                    {t.products.modelsLabel}
                  </p>
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-start gap-2 text-xs">
                      <span className="font-semibold text-dark-700 shrink-0 min-w-[6rem]">{item.name}</span>
                      <span className="text-gray-400">{item.specs.join(' · ')}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-1.5 text-primary-600 text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                  {t.products.more}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
