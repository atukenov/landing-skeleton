"use client";
import { useLanguage } from "@/context/LanguageContext";
import { Locale, localeNames } from "@/lib/i18n";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close lang dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    {
      label: t.nav.products,
      href: "#products",
      children: [
        { label: t.nav.cat1, href: "#products" },
        { label: t.nav.cat2, href: "#products" },
        { label: t.nav.cat3, href: "#products" },
        { label: t.nav.cat4, href: "#products" },
        { label: t.nav.cat5, href: "#products" },
      ],
    },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.advantages, href: "#advantages" },
    { label: t.nav.partners, href: "#partners" },
    { label: t.nav.contacts, href: "#contacts" },
  ];

  return (
    <header
      className={`transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
      }`}
    >
      <nav className="section-wrapper flex items-center justify-between h-20 md:h-24 gap-2">
        {/* Logo */}
        <a href="#home" className="flex items-center shrink-0">
          <img src="/logo.png" alt="Caspi Polymer" className="h-14 w-auto object-contain" />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdown(link.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <button className="nav-link flex items-center gap-0.5 px-3 py-2 rounded hover:bg-primary-50 transition-colors">
                  {link.label}
                  <ChevronDown size={12} className="mt-0.5 opacity-60" />
                </button>

                {dropdown === link.label && (
                  <div className="absolute top-full left-0 pt-1 z-50">
                    <ul className="w-48 bg-white border border-gray-100 shadow-xl rounded py-1.5 animate-fade-in">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="block px-4 py-2 text-xs text-gray-600 hover:text-primary-600 hover:bg-primary-50 transition-colors tracking-wide"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ) : (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="nav-link px-3 py-2 rounded hover:bg-primary-50 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ),
          )}
        </ul>

        {/* Right actions */}
        <div className="hidden xl:flex items-center gap-3 shrink-0">
          {/* Language switcher */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-primary-600 uppercase tracking-wider border border-gray-200 rounded px-2.5 py-1.5 transition-colors hover:border-primary-300"
            >
              <Globe size={11} />
              {localeNames[locale]}
              <ChevronDown
                size={10}
                className={`transition-transform ${langOpen ? "rotate-180" : ""}`}
              />
            </button>

            {langOpen && (
              <div className="absolute right-0 top-full mt-1.5 bg-white border border-gray-100 shadow-xl rounded py-1 z-50 w-20 animate-fade-in">
                {(["ru", "kk", "en"] as Locale[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLocale(l);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs uppercase tracking-wider font-bold transition-colors ${
                      locale === l
                        ? "text-primary-600 bg-primary-50"
                        : "text-gray-500 hover:text-primary-600 hover:bg-gray-50"
                    }`}
                  >
                    {localeNames[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#contacts" className="btn-primary py-3 px-6 text-sm font-bold">
            {t.nav.requestCta}
          </a>
        </div>

        {/* Mobile right: lang switcher + hamburger */}
        <div className="xl:hidden flex items-center gap-2">
          {/* Compact lang switcher for mobile */}
          <div ref={undefined} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-0.5 text-xs font-bold text-gray-500 uppercase tracking-wider border border-gray-200 rounded px-2 py-1 transition-colors"
            >
              {localeNames[locale]}
              <ChevronDown size={9} />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1.5 bg-white border border-gray-100 shadow-xl rounded py-1 z-50 w-16 animate-fade-in">
                {(["ru", "kk", "en"] as Locale[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLocale(l);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 text-xs uppercase tracking-wider font-bold transition-colors ${
                      locale === l
                        ? "text-primary-600 bg-primary-50"
                        : "text-gray-500 hover:text-primary-600 hover:bg-gray-50"
                    }`}
                  >
                    {localeNames[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="text-dark-700 p-1.5 hover:text-primary-600 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="xl:hidden bg-white border-t border-gray-100 shadow-lg px-4 py-5 animate-fade-in">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="flex items-center py-2.5 px-3 text-sm font-semibold text-dark-700 hover:text-primary-600 hover:bg-primary-50 rounded transition-colors uppercase tracking-wide"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
                {link.children && (
                  <ul className="mt-0.5 ml-4 space-y-0.5">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="flex items-center py-2 px-3 text-xs text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <a
            href="#contacts"
            className="btn-primary mt-5 w-full justify-center text-center"
            onClick={() => setOpen(false)}
          >
            {t.nav.requestCta}
          </a>
        </div>
      )}
    </header>
  );
}
