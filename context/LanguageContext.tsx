"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Locale, translations, T } from "@/lib/i18n";

type LanguageCtx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: T;
};

const LanguageContext = createContext<LanguageCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ru");
  const t = translations[locale];
  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
