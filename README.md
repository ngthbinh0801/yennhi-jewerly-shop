# Yen Nhi Jewerly — Haute Joaillerie Web Experience

A high-fidelity luxury brand catalog for **Yen Nhi Jewerly**, crafted using **Next.js 16 (App Router)**, **Tailwind CSS v4**, **TypeScript**, and **Framer Motion**. Designed to offer a premium digital curation experience defined by poetry, grace, and exquisite craftsmanship.

> [!NOTE]
> This project is designed exclusively for educational and portfolio demonstration purposes. All jewelry asset links are linked to Unsplash placeholder images.

---

## 💎 Tech Stack & Architecture

- **Framework**: Next.js 16.2.6 (App Router & React 19)
- **Styling**: Tailwind CSS v4 & custom HSL warm-cream variables
- **Animations**: Framer Motion 12.4.0 (Route transitions, drag-carousel, and magnifiers)
- **Icons**: Lucide React 1.16.0
- **Dynamic Routing**: Promise-based Next.js 15+ dynamic route parameters (safe compilation)

---

## 🎨 Design System & Styling Tokens

All variables are configured under `@theme` inside [globals.css](file:///home/thanhbinhngo0801/.gemini/antigravity-ide/scratch/vancleef-clone/app/globals.css) and mapped globally:

- **Warm Cream Background** (`#FAF8F5`): Imbues a premium classical museum-like atmosphere.
- **Charcoal Black Text** (`#1A1A1A`): Soft charcoal provides elite readability compared to raw black.
- **Accent Burgundy** (`#722F37`): Deep red representing royalty, utilized for buttons and interactive active pills.
- **Gold Accent Lines** (`#C9A961`): Thin borders and divider marks mirroring gold jewelry beads.
- **Serif Typography**: *Cormorant Garamond* (lightweights `font-light` with wide tracking and letters).
- **Sans-Serif Typography**: *Inter* (high readability for secondary descriptions).

---

## 📁 Directory Structure

```
vancleef-clone/
├── app/
│   ├── collections/
│   │   ├── [slug]/
│   │   │   ├── CollectionProducts.tsx   # Interactive products grid (wishlist & double hover)
│   │   │   └── page.tsx                 # Dynamic collection detail server page
│   │   ├── CollectionsClient.tsx        # Client side search & category filter pills
│   │   └── page.tsx                     # Collections category listing
│   ├── products/
│   │   └── [slug]/
│   │       ├── ProductView.tsx          # Full magnifier zoom, specs accordion & lightbox
│   │       └── page.tsx                 # Dynamic product detail server page
│   ├── the-maison/
│   │   └── page.tsx                     # Cinematic milestones, history & video player
│   ├── boutiques/
│   │   ├── BoutiquesClient.tsx          # interactive locator directory & stylized dot maps
│   │   └── page.tsx                     # Boutiques locator page routing
│   ├── contact/
│   │   ├── ContactForm.tsx              # Curation intakes & concierge validation form
│   │   └── page.tsx                     # Contact concierge router
│   ├── globals.css                      # Core layout styles & scrollbar tweaks
│   ├── layout.tsx                       # Main shell setup (utility headers & footers)
│   ├── template.tsx                     # Framer Motion dynamic route transitions
│   ├── loading.tsx                      # Brand logo pulse route loader
│   ├── not-found.tsx                    # Custom 404 luxury page
│   └── page.tsx                         # High-fidelity multi-component homepage
├── components/
│   ├── layout/
│   │   ├── Header.tsx                   # Centered logo & sticky co-transitions
│   │   ├── MegaMenu.tsx                 # Desktop dropdown categories
│   │   ├── MobileNav.tsx                # Sliding tablet mobile overlay
│   │   ├── UtilityBar.tsx               # Small multi-action header ribbon
│   │   └── Footer.tsx                   # Classical boutique links & brand signature
│   └── sections/
│       ├── Hero.tsx                     # 100vh automatic carousel
│       ├── FeaturedCollections.tsx      # Staggered entry showcase
│       └── IconicCollections.tsx        # Snap swipe collection slides
├── lib/
│   ├── constants.ts                     # Solid blur base64 strings
│   └── mockData.ts                      # Centralized 9 collections, 100 products & flagships
└── tailwind.config.ts                   # Core breakpoints and configurations
```

---

## 🚀 Getting Started

### 1. Installation
Clone the workspace files and install all package dependencies:
```bash
npm install
```

### 2. Launch Local Development Server
Execute the Next.js Turbo bundler to start previewing local pages:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Compile Verification
Confirm compilation correctness and generate production assets:
```bash
npm run build
```

---

## ✨ Outstanding Curation Features Implemented

1. **Magnifying Interactive Zoom**: Inside product detail view, hovering over the main display photo automatically scales the image (`2.2x`) while anchoring the `transform-origin` dynamically to match your mouse relative percentage coordinate position.
2. **Double-Image Catalog Hover**: Hovering over product items inside a catalog grid smoothly swaps index `0` with secondary index `1` in the visual deck.
3. **Stylized Dot Radar Maps**: Inside boutique locators, a custom global coordinates matrix displays flagship locations Paris, London, and New York with pulsing glowing rings.
4. **Cinematic Heritage Theater**: The Maison page contains a custom overlay playing craftsmanship cinema, with historical milestones sliding horizontally.
