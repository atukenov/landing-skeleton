"use client";
import { Share2, Globe, PlayCircle, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark-900 text-gray-400">
      {/* Main footer */}
      <div className="section-wrapper py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-primary-600 rounded flex items-center justify-center shadow-sm">
                <span className="text-white font-heading font-bold">L</span>
              </div>
              <span className="font-heading text-white text-xl font-bold">
                YourLogo
              </span>
            </div>

            <p className="text-sm leading-relaxed max-w-xs text-gray-500">
              {t.footer.tagline}
            </p>

            <div className="flex gap-2.5 mt-6">
              {[
                { icon: Share2,      href: "https://instagram.com/yourhandle" },
                { icon: Globe,       href: "https://facebook.com/yourpage" },
                { icon: PlayCircle,  href: "https://youtube.com/@yourchannel" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded border border-dark-600 text-gray-500 hover:text-white hover:border-primary-500 hover:bg-primary-600/10 transition-all flex items-center justify-center"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-heading text-white font-semibold text-xs uppercase tracking-widest mb-5">
              {t.footer.colCompany}
            </h4>
            <ul className="space-y-3">
              {t.footer.colCompanyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors hover:translate-x-0.5 inline-block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-heading text-white font-semibold text-xs uppercase tracking-widest mb-5">
              {t.footer.colProducts}
            </h4>
            <ul className="space-y-3">
              {t.footer.colProductLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors hover:translate-x-0.5 inline-block">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts column */}
          <div>
            <h4 className="font-heading text-white font-semibold text-xs uppercase tracking-widest mb-5">
              {t.footer.colContacts}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-500">
                <MapPin size={14} className="text-primary-400 mt-0.5 shrink-0" />
                <span>{t.contacts.addressValue}</span>
              </li>
              <li>
                <a
                  href={`tel:${t.contacts.phoneValue.replace(/\D/g, "")}`}
                  className="flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors"
                >
                  <Phone size={14} className="text-primary-400 shrink-0" />
                  {t.contacts.phoneValue}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t.contacts.emailValue}`}
                  className="flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors"
                >
                  <Mail size={14} className="text-primary-400 shrink-0" />
                  {t.contacts.emailValue}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <a href="#contacts" className="btn-primary text-xs py-2.5 px-5">
                {t.footer.requestCta}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-700">
        <div className="section-wrapper py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>© {new Date().getFullYear()} {t.footer.copyright}</span>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-gray-400 transition-colors">
              {t.footer.privacy}
            </a>
            <a href="/sitemap" className="hover:text-gray-400 transition-colors">
              {t.footer.sitemap}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
