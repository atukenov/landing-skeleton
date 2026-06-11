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
landing-skeleton/
├── app/
│   ├── layout.tsx      ← fonts, metadata, root HTML
│   ├── page.tsx        ← assembles all sections
│   └── globals.css     ← Tailwind + CSS variables + utility classes
├── components/
│   ├── TopBar.tsx      ← contact info strip (desktop only)
│   ├── Navbar.tsx      ← sticky dark nav with dropdown + mobile drawer
│   ├── Hero.tsx        ← full-screen hero + stats row
│   ├── Advantages.tsx  ← 8-item icon grid (dark bg)
│   ├── Products.tsx    ← 6-card product category grid
│   ├── About.tsx       ← two-column story + image placeholder
│   ├── StatsBar.tsx    ← 4-stat highlight bar (blue bg)
│   ├── Partners.tsx    ← auto-scrolling logo marquee
│   ├── Contacts.tsx    ← contact info + enquiry form
│   └── Footer.tsx      ← 4-column footer + bottom bar
└── public/
    ├── logo.svg        ← add your logo here
    └── partners/       ← add partner logos here
```

## What to Replace (search for `← replace`)

Every placeholder is marked with a `// ← replace` comment. Key ones:

| Location | What to replace |
|---|---|
| `app/layout.tsx` | `metadata.title`, `metadata.description` |
| `components/TopBar.tsx` | Address, phone, email |
| `components/Navbar.tsx` | Logo, nav links, phone |
| `components/Hero.tsx` | Headline, sub-headline, stats |
| `components/Advantages.tsx` | 8 advantage titles + descriptions |
| `components/Products.tsx` | Product category names, descriptions, images |
| `components/About.tsx` | Company story paragraphs, highlights list |
| `components/StatsBar.tsx` | 4 stat values + labels |
| `components/Partners.tsx` | Partner names + logo paths |
| `components/Contacts.tsx` | Address, phone, email, product select options |
| `components/Footer.tsx` | All links, contact info, social URLs |
| `tailwind.config.js` | Brand colors (primary, accent) |
| `app/globals.css` | `--color-primary`, `--color-accent` CSS vars |

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
