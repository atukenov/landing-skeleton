# Landing Page Skeleton — Next.js 14

A production-ready Next.js 14 landing page skeleton inspired by knk.kz and pvd.kz.

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import your GitHub repo → Vercel auto-detects Next.js → click **Deploy**

## Folder Structure

```
app/
├── layout.tsx          ← fonts (Unbounded + Manrope), metadata, header/footer
├── page.tsx            ← home page sections
├── products/page.tsx   ← product catalog with tabs + model tables
└── globals.css         ← Tailwind layers, buttons, form fields, reveal animation
components/
├── SiteHeader.tsx      ← utility bar, sticky nav, language switch, mobile menu
├── SiteFooter.tsx      ← footer / contacts (#contacts)
├── RequestForm.tsx     ← quote request form (opens a pre-filled email)
├── ProductCatalog.tsx  ← /products?type=<slug> tabs and spec tables
├── Logo.tsx, Reveal.tsx
└── home/               ← Hero, KeyFigures, ProductGrid, Industries, About, Production, Advantages
lib/i18n.ts             ← all copy in RU / KK / EN, product data and images
public/images/          ← product and production photos
```

All text and product specs live in `lib/i18n.ts`. Brand colours are in `tailwind.config.js` (`amber`, `ink`, `sand`, `muted`).

## Adding Images

1. Place images in `/public/`
2. Use Next.js `<Image>` component (already imported in comments inside components):

```tsx
import Image from "next/image";
// Inside your component:
<Image src="/hero-bg.jpg" fill alt="Hero" className="object-cover" priority />
```

## Adding Languages (RU / KZ / EN)

Install `next-intl`:
```bash
npm install next-intl
```
Follow: https://next-intl-docs.vercel.app/docs/getting-started/app-router

## Brand Colors

Edit `tailwind.config.js` → `theme.extend.colors.primary` and `accent`,
and `app/globals.css` → `:root` CSS variables.
