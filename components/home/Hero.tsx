"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { productImages } from "@/lib/i18n";

export default function Hero() {
  const { t } = useLanguage();
  const { hero } = t;

  return (
    <section aria-labelledby="hero-title">
      {/* Headline */}
      <div className="container-site flex flex-col gap-8 pb-8 pt-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:pb-10 lg:pt-16">
        <div className="flex max-w-[880px] animate-fade-up flex-col gap-5 lg:gap-6">
          <span className="eyebrow flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-amber" aria-hidden="true" />
            {hero.eyebrow}
          </span>
          <h1 id="hero-title" className="h-display text-[36px] sm:text-[56px] xl:text-[76px]">
            {hero.headlineA}
            <span className="text-amber-ink">{hero.headlineHighlight}</span>
            {hero.headlineB}
          </h1>
        </div>
        <div className="flex shrink-0 animate-fade-up flex-col gap-5 lg:w-[380px] lg:pb-2">
          <p className="text-base leading-relaxed text-muted sm:text-lg">{hero.sub}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/#request" className="btn-primary">
              {hero.ctaPrimary}
            </Link>
            <Link href="/products" className="btn-outline">
              {hero.ctaCatalog}
            </Link>
          </div>
        </div>
      </div>

      {/* Media band */}
      <div className="mx-auto w-full max-w-site px-4 sm:px-8">
        <div className="relative h-[300px] overflow-hidden rounded-3xl bg-ink-800 sm:h-[480px] lg:h-[620px] lg:rounded-[32px]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/intro.mp4"
            poster="/images/rolls.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent from-45% to-ink/70"
            aria-hidden="true"
          />

          <div className="absolute right-4 top-4 hidden gap-3 sm:flex lg:right-8 lg:top-8">
            {hero.chips.map((c) => (
              <div key={c.label} className="flex flex-col gap-0.5 rounded-[18px] bg-white/90 px-5 py-3.5">
                <span className="font-display text-[26px] font-semibold">{c.value}</span>
                <span className="text-[13px] text-muted">{c.label}</span>
              </div>
            ))}
          </div>

          {/* Product quick links */}
          <div className="absolute inset-x-4 bottom-4 hidden lg:inset-x-8 lg:bottom-8 lg:block">
            <div className="flex snap-x gap-3 overflow-x-auto pb-1 [scrollbar-width:none]">
              {t.products.items.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products?type=${p.slug}`}
                  className="group flex min-w-[250px] flex-1 snap-start items-center gap-3.5 rounded-[20px] bg-sand px-4 py-3.5 transition-colors hover:bg-white"
                >
                  <Image
                    src={productImages[p.slug]}
                    alt=""
                    width={52}
                    height={52}
                    className="h-[52px] w-[52px] rounded-[14px] object-cover"
                  />
                  <span className="flex flex-grow flex-col gap-0.5">
                    <span className="text-base font-bold leading-tight">{p.name}</span>
                    <span className="text-[13px] text-muted-soft">
                      {p.rows.length} {hero.modelsWord}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={20}
                    aria-hidden="true"
                    className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
