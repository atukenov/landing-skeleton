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
  title: "Your Company | [Tagline Here]",
  description: "[Company description — update this]",
  keywords: ["manufacturing", "kazakhstan", "polymer", "production"],
  openGraph: {
    title: "Your Company",
    description: "[Company description — update this]",
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
