import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Caspi Polymer | Производитель полиэтиленовых плёнок в Казахстане",
  description: "Caspi Polymer — казахстанский производитель полиэтиленовых плёнок премиального качества: парниковые, стретч-худ, термоусадочные, мульчирующие и технические плёнки.",
  keywords: ["полиэтиленовая плёнка", "парниковая плёнка", "стретч-худ", "Казахстан", "Атырау", "производство плёнки", "Caspi Polymer"],
  openGraph: {
    title: "Caspi Polymer | Производитель полиэтиленовых плёнок",
    description: "Казахстанский производитель полиэтиленовых плёнок премиального качества для агропромышленности, строительства и упаковки.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-body bg-white text-dark-800 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
