"use client";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-900 scroll-mt-28"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/intro.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* pt accounts for: mobile Navbar ~56px + extra; md+ TopBar ~33px + Navbar ~64px */}
      <div className="relative z-10 section-wrapper w-full pt-24 md:pt-36 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <span
            className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary-300 mb-3 animate-fade-in"
            style={{ animationDelay: "0s" }}
          >
            {t.hero.eyebrow}
          </span>

          {/* Headline */}
          <h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mt-2 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            {t.hero.headline}
            <span className="relative text-primary-300">
              {t.hero.headlineHighlight}
              {/* Underline accent */}
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent-400 rounded-full" />
            </span>
            {t.hero.headline2}
          </h1>

          {/* Sub-headline */}
          <p
            className="mt-8 text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed animate-fade-up"
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
            <a href="#contacts" className="btn-ghost gap-2">
              {t.hero.ctaContact}
            </a>
          </div>

          {/* Stats row */}
          <div
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/20 pt-10 animate-fade-up"
            style={{ animationDelay: "0.46s" }}
          >
            {t.heroStats.map((stat) => (
              <div
                key={stat.label}
                className="group bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 hover:border-primary-400 transition-all duration-300"
              >
                <div className="font-heading text-3xl font-bold text-primary-300 group-hover:text-primary-200 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs text-white/60 mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors group"
      >
        <span className="text-xs tracking-widest uppercase font-semibold">{t.hero.scroll}</span>
        <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center group-hover:scale-110 transition-transform animate-float">
          <ChevronDown size={14} />
        </div>
      </a>
    </section>
  );
}
