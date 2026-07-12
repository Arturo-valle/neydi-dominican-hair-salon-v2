# Neydi Dominican Hair Salon v2

> Temple Hills, Maryland — Award-ready cinematic website

**Live:** [https://neydi-salon-v2.pages.dev](https://neydi-salon-v2.pages.dev/en/)

## Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS v4
- **Motion:** GSAP ScrollTrigger + Motion (Framer Motion)
- **Deployment:** Cloudflare Pages
- **Language:** TypeScript

## Features

- Cinematic hero with parallax background
- GSAP StickyStack scroll animation (3 unique cards)
- Horizontal pan gallery for services
- Animated price counters
- CSS masonry gallery with lightbox
- Split-screen CTA with parallax
- Kinetic marquee text strip
- Bilingual (EN/ES) with 21 services + exact pricing
- SEO: JSON-LD HairSalon, OG tags, hreflang, sitemap
- Accessibility: prefers-reduced-motion, ARIA, WCAG
- 16 optimized Unsplash images

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build & Deploy

```bash
npm run build
npx wrangler pages deploy out --project-name=neydi-salon-v2
```

## Project Structure

```
src/
├── app/
│   ├── [lang]/          # Bilingual routes (en/es)
│   │   ├── page.tsx     # Home (7 cinematic acts)
│   │   ├── services/    # Service catalog
│   │   ├── gallery/     # Masonry gallery + lightbox
│   │   ├── about/       # Story + promise
│   │   ├── book/        # Appointment form
│   │   └── visit/       # Location + hours
│   ├── globals.css      # Design system
│   └── layout.tsx       # Root layout
├── components/
│   ├── ScrollAnimations.tsx  # GSAP components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ResponsiveImage.tsx
└── lib/
    ├── data.ts          # 21 services, prices, hours
    ├── i18n.ts          # EN/ES translations
    ├── types.ts         # TypeScript types
    └── jsonld.ts        # SEO structured data
```

## License

Private — Neydi Dominican Hair Salon
