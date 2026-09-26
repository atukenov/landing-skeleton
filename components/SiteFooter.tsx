"use client";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { company } from "@/lib/i18n";
import Logo from "./Logo";

export default function SiteFooter() {
  const { t } = useLanguage();
  const heading = "text-[13px] font-bold uppercase tracking-[0.1em] text-muted-soft";

  return (
    <footer id="contacts" className="scroll-mt-32 pt-20 lg:pt-24">
      <div className="container-site grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-[15px] leading-relaxed text-muted">{t.footer.tagline}</p>
        </div>

        <div className="flex flex-col gap-3 text-[15px]">
          <h2 className={heading}>{t.footer.colProducts}</h2>
          {t.products.items.map((p) => (
            <Link key={p.slug} href={`/products?type=${p.slug}`} className="hover:text-amber-ink">
              {p.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3 text-[15px]">
          <h2 className={heading}>{t.footer.colCompany}</h2>
          <Link href="/#about" className="hover:text-amber-ink">{t.nav.about}</Link>
          <Link href="/#production" className="hover:text-amber-ink">{t.nav.production}</Link>
          <Link href="/#quality" className="hover:text-amber-ink">{t.nav.quality}</Link>
          <Link href="/#request" className="hover:text-amber-ink">{t.nav.requestCta}</Link>
        </div>

        <div className="flex flex-col gap-3 text-[15px]">
          <h2 className={heading}>{t.footer.colContacts}</h2>
          <a href={company.phoneHref} className="font-bold hover:text-amber-ink">{company.phone}</a>
          <a href={`mailto:${company.email}`} className="break-all hover:text-amber-ink">{company.email}</a>
          <address className="not-italic leading-relaxed text-muted">{t.contacts.address}</address>
          <span className="text-muted">
            {t.contacts.hours}
            <br />
            {t.contacts.weekend}
          </span>
        </div>
      </div>

      <div className="container-site mt-16 pb-10">
        <div className="flex flex-col justify-between gap-3 border-t border-sand-line pt-6 text-[13px] text-muted-soft sm:flex-row">
          <span>© {new Date().getFullYear()} {t.footer.rights}</span>
          <a href="#" className="hover:text-ink">{t.footer.privacy}</a>
        </div>
      </div>
    </footer>
  );
}
