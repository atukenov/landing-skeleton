"use client";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ProductSlug, productImages } from "@/lib/i18n";

export default function ProductCatalog() {
  const { t } = useLanguage();
  const { products } = t;
  const items = products.items;
  const [sel, setSel] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Deep link: /products?type=<slug>
  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get("type") as ProductSlug | null;
    const i = items.findIndex((p) => p.slug === type);
    if (i >= 0) setSel(i);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function select(i: number) {
    setSel(i);
    const url = new URL(window.location.href);
    url.searchParams.set("type", items[i].slug);
    window.history.replaceState(null, "", url);
  }

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (i + dir + items.length) % items.length;
    select(next);
    tabRefs.current[next]?.focus();
  }

  const p = items[sel];

  return (
    <>
      <div className="container-site flex flex-col gap-5 pt-8 lg:pt-10">
        <nav aria-label="Breadcrumb" className="flex gap-2.5 text-sm text-muted-soft">
          <Link href="/" className="hover:text-ink">{t.nav.home}</Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink" aria-current="page">{t.nav.products}</span>
        </nav>
        <h1 className="h-display text-[40px] sm:text-6xl">{t.nav.products}</h1>
      </div>

      <div className="container-site pt-8">
        <div
          role="tablist"
          aria-label={products.tabsLabel}
          className="-mx-4 flex gap-2.5 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {items.map((item, i) => {
            const active = i === sel;
            return (
              <button
                key={item.slug}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${item.slug}`}
                aria-selected={active}
                aria-controls="product-panel"
                tabIndex={active ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className={`h-[52px] shrink-0 whitespace-nowrap rounded-full border-[1.5px] px-6 text-base font-bold transition-colors ${
                  active ? "border-ink bg-ink text-white" : "border-sand-border bg-white hover:border-ink"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>

      <div id="product-panel" role="tabpanel" aria-labelledby={`tab-${p.slug}`}>
        <section className="container-site grid grid-cols-1 gap-8 pt-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative h-[300px] overflow-hidden rounded-[28px] bg-sand sm:h-[420px] lg:h-[500px] lg:rounded-[32px]">
            <Image
              key={p.slug}
              src={productImages[p.slug]}
              alt={p.name}
              fill
              priority
              sizes="(min-width: 1024px) 632px, 100vw"
              className="animate-fade-up object-cover"
            />
          </div>
          <div className="flex flex-col justify-between gap-8 lg:py-3">
            <div className="flex flex-col gap-5">
              <span className="eyebrow">{p.tag}</span>
              <h2 className="font-display text-[32px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[44px]">
                {p.name}
              </h2>
              <p className="text-base leading-relaxed text-muted sm:text-lg">{p.desc}</p>
            </div>
            <dl className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5 rounded-[20px] bg-sand px-6 py-5">
                <dt className="text-sm text-muted-soft">{products.thickness}</dt>
                <dd className="font-display text-xl sm:text-[26px]">{p.thickness}</dd>
              </div>
              <div className="flex flex-col gap-1.5 rounded-[20px] bg-sand px-6 py-5">
                <dt className="text-sm text-muted-soft">{products.width}</dt>
                <dd className="font-display text-xl sm:text-[26px]">{p.width}</dd>
              </div>
            </dl>
            <div>
              <Link href="/#request" className="btn-primary h-14 px-8">
                {products.requestPrice}
              </Link>
            </div>
          </div>
        </section>

        <section className="container-site flex flex-col gap-6 pt-16 lg:pt-[72px]">
          <h2 className="font-display text-2xl font-medium sm:text-[30px]">{products.tableTitle}</h2>
          <div className="overflow-x-auto rounded-3xl border border-sand-line">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead className="bg-ink text-sm font-bold text-white">
                <tr>
                  {p.cols.map((c) => (
                    <th key={c} scope="col" className="px-6 py-[18px] font-bold">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-base">
                {p.rows.map((r) => (
                  <tr key={r.model} className="border-t border-sand-line transition-colors hover:bg-[#faf8f4]">
                    <th scope="row" className="whitespace-nowrap px-6 py-5 font-bold">
                      {r.model}
                    </th>
                    {r.vals.map((v, i) => (
                      <td key={i} className="px-6 py-5 text-ink-700">
                        {v}
                      </td>
                    ))}
                    <td className="px-6 py-5 font-bold text-amber-ink">
                      {products.priceOnRequest}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <section className="container-site pt-12">
        <div className="flex flex-col justify-between gap-6 rounded-[28px] bg-amber p-8 sm:flex-row sm:items-center lg:gap-12 lg:px-12 lg:py-10">
          <div className="flex flex-col gap-2.5">
            <h2 className="font-display text-2xl font-medium sm:text-[28px]">{products.customTitle}</h2>
            <p className="text-[17px] leading-normal text-[#2c2410]">{products.customText}</p>
          </div>
          <Link href="/#request" className="btn-dark h-14 shrink-0 px-8">
            {products.customCta}
          </Link>
        </div>
      </section>
    </>
  );
}
