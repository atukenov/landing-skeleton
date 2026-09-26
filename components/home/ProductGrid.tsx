"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { productImages } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

export default function ProductGrid() {
  const { t } = useLanguage();
  const { products } = t;

  return (
    <section id="products" aria-labelledby="products-title" className="section">
      <div className="container-site flex flex-col gap-10 lg:gap-12">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">{products.eyebrow}</span>
            <h2 id="products-title" className="h-section">{products.heading}</h2>
          </div>
          <Link href="/products" className="flex items-center gap-2.5 text-[17px] font-bold hover:text-amber-ink">
            {products.allLink}
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.items.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <Link
                href={`/products?type=${p.slug}`}
                className="group flex h-full flex-col gap-5 rounded-[28px] bg-sand p-3 transition-colors hover:bg-sand-hover"
              >
                <div className="relative h-[240px] overflow-hidden rounded-[20px] lg:h-[280px]">
                  <Image
                    src={productImages[p.slug]}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 430px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-grow flex-col gap-3.5 px-3 pb-4">
                  <h3 className="font-display text-[22px] font-medium">{p.name}</h3>
                  <p className="text-[15px] leading-relaxed text-muted">{p.short}</p>
                  <dl className="mt-auto flex flex-col gap-1.5 border-t border-sand-border pt-3 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-soft">{products.thickness}</dt>
                      <dd className="font-bold">{p.thickness}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-soft">{products.width}</dt>
                      <dd className="font-bold">{p.width}</dd>
                    </div>
                  </dl>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
