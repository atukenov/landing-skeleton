"use client";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Dot grid pattern */}
      <div className="absolute inset-0 pattern-dots opacity-70" />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100 rounded-full blur-3xl opacity-40 -translate-y-1/3 translate-x-1/3 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-300 rounded-full blur-3xl opacity-20 translate-y-1/3 -translate-x-1/4 animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-primary-200 rounded-full blur-2xl opacity-20 -translate-x-1/2 -translate-y-1/2" />

      {/* Thin top-left geometric accent */}
      <div className="absolute top-24 left-8 w-20 h-20 border-4 border-primary-200 rounded-sm opacity-60 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 right-12 w-12 h-12 border-4 border-accent-300 rounded-sm opacity-50 animate-float-slow" style={{ animationDelay: "2s" }} />

      {/* pt accounts for: mobile Navbar ~56px + extra; md+ TopBar ~33px + Navbar ~64px */}
      <div className="relative z-10 section-wrapper w-full pt-24 md:pt-36 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <span className="eyebrow animate-fade-in" style={{ animationDelay: "0s" }}>
            {t.hero.eyebrow}
          </span>

          {/* Headline */}
          <h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark-800 leading-tight mt-2 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            {t.hero.headline}
            <span className="relative text-primary-600">
              {t.hero.headlineHighlight}
              {/* Underline accent */}
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-400 rounded-full" />
            </span>
            {t.hero.headline2}
          </h1>

          {/* Sub-headline */}
          <p
            className="mt-8 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.22s" }}
          >
            {t.hero.subheadline}
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.34s" }}
          >
            <a href="#products" className="btn-primary gap-2">
              {t.hero.ctaProducts}
              <ArrowRight size={16} />
            </a>
            <a href="#contacts" className="btn-outline gap-2">
              {t.hero.ctaContact}
            </a>
          </div>

          {/* Stats row */}
          <div
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-gray-200 pt-10 animate-fade-up"
            style={{ animationDelay: "0.46s" }}
          >
            {t.heroStats.map((stat) => (
              <div
                key={stat.label}
                className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-200 transition-all duration-300"
              >
                <div className="font-heading text-3xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#advantages"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-primary-600 transition-colors group"
      >
        <span className="text-xs tracking-widest uppercase font-semibold">{t.hero.scroll}</span>
        <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center group-hover:scale-110 transition-transform animate-float">
          <ChevronDown size={14} />
        </div>
      </a>
    </section>
  );
}
