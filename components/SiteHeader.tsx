"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { company, localeNames, locales } from "@/lib/i18n";
import Logo from "./Logo";

function LanguageSwitch({ dark = false }: { dark?: boolean }) {
  const { locale, setLocale } = useLanguage();
  return (
    <div className="flex gap-1" role="group" aria-label="Language">
      {locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            className={`min-w-[36px] rounded-full px-2 py-1 text-[13px] font-bold transition-colors ${
              active
                ? dark
                  ? "text-amber"
                  : "bg-ink text-white"
                : dark
                  ? "text-muted-dark hover:text-white"
                  : "text-muted-soft hover:text-ink"
            }`}
          >
            {localeNames[l]}
          </button>
        );
      })}
    </div>
  );
}

export default function SiteHeader() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "/products", label: t.nav.products },
    { href: "/#production", label: t.nav.production },
    { href: "/#quality", label: t.nav.quality },
    { href: "/#about", label: t.nav.about },
    { href: "/#contacts", label: t.nav.contacts },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
        {/* Utility bar */}
        <div className="hidden bg-ink text-[13px] text-muted-dark lg:block">
          <div className="container-site flex h-10 items-center justify-between">
            <div className="flex items-center gap-7">
              <span>{t.topBar.address}</span>
              <span>{t.topBar.hours}</span>
            </div>
            <div className="flex items-center gap-7">
              <a href={company.phoneHref} className="font-semibold text-white hover:text-amber">
                {company.phone}
              </a>
              <LanguageSwitch dark />
            </div>
          </div>
        </div>

        {/* Main bar */}
        <div className="border-b border-sand-line">
          <div className="container-site flex h-16 items-center justify-between gap-6 lg:h-[88px]">
            <Link href="/" aria-label={`Caspi Polymer — ${t.nav.home}`} className="text-ink">
              <Logo />
            </Link>

            <nav aria-label="Main" className="hidden items-center gap-8 text-base font-semibold xl:flex">
              {links.map((l) => {
                const active = l.href === "/products" && pathname.startsWith("/products");
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`transition-colors hover:text-amber-ink ${active ? "text-amber-ink" : ""}`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <Link href="/#request" className="btn-primary hidden h-12 text-[15px] sm:inline-flex">
                {t.nav.requestCta}
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a
                href={company.phoneHref}
                aria-label={company.phone}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-amber text-ink sm:hidden"
              >
                <Phone size={20} aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label={t.nav.menu}
                aria-expanded={open}
                aria-controls="mobile-menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-sand-border xl:hidden"
              >
                <Menu size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer — outside <header>: its backdrop-filter would trap position:fixed */}
      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-[60] flex flex-col bg-white xl:hidden">
          <div className="container-site flex h-16 items-center justify-between border-b border-sand-line lg:h-[88px]">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.nav.close}
              className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-sand-border"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile" className="container-site flex flex-col py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-sand-line py-4 font-display text-2xl font-medium"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="container-site mt-auto flex flex-col gap-4 pb-8">
            <LanguageSwitch />
            <a href={company.phoneHref} className="font-display text-xl">
              {company.phone}
            </a>
            <Link href="/#request" onClick={() => setOpen(false)} className="btn-primary w-full">
              {t.nav.requestCta}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
