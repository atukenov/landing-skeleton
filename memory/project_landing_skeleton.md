---
name: project-landing-skeleton
description: Key decisions and architecture for the landing-skeleton Next.js project
metadata:
  type: project
---

Light-pattern B2B landing skeleton built with Next.js 14 App Router + Tailwind CSS.

**Architecture:**
- `lib/i18n.ts` — full RU/KK/EN translation object, type `T`
- `context/LanguageContext.tsx` — `useLanguage()` hook, locale state
- `hooks/useInView.ts` — IntersectionObserver scroll-reveal hook
- `components/Providers.tsx` — client boundary wrapping LanguageProvider
- All components are `"use client"` (need `useLanguage()`)

**Header layout:** Single `fixed` wrapper in `page.tsx` contains TopBar + Navbar (avoids overlap bug). Navbar itself is NOT fixed — the page wrapper handles that.

**Navbar wrapping fix:** Breakpoint changed from `lg:` (1024px) to `xl:` (1280px) for full desktop nav.

**Light design:** white/slate-50 backgrounds, dot/grid CSS patterns, gradient blobs on Hero, StatsBar kept primary-700, Footer kept dark-900.

**Why:** User asked for animations, mobile responsiveness, UI/UX, multilanguage (RU/KK/EN), navbar fix, light pattern design.
