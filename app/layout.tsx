import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import { Providers } from "@/components/Providers";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { translations } from "@/lib/i18n";
import "./globals.css";

const display = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const { meta } = translations.ru;

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: [
    "полиэтиленовая плёнка",
    "FFS плёнка",
    "стретч-худ",
    "парниковая плёнка",
    "термоусадочная плёнка",
    "Атырау",
    "Казахстан",
    "Caspi Polymer",
  ],
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    locale: "ru_RU",
    images: ["/images/rolls.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable}`}>
      <body>
        <Providers>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
