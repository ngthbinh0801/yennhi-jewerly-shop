# Changes Made: Rebranding to Rì Rào Store

This document details the modifications applied across the codebase to fully rebrand the e-commerce store to **Rì Rào Store**, a premium beachwear-coastal seashell & pearl jewelry boutique.

---

## 1. Visual Identity & Color System
- **globals.css**: Re-mapped Tailwind `@theme` color tokens to coastal tones:
  - Cream sand: `#FAF6F0`
  - Ocean depth/Charcoal: `#1B2A30`
  - Sunset coral/Burgundy: `#C7756D` (keeping name `burgundy` for TSX compatibility)
  - Sand gold/Gold: `#BEA37B` (keeping name `gold` for TSX compatibility)
  - Driftwood gray: `#8A999E`

---

## 2. Branding Navigation, Constants & Copy
- **constants.ts**:
  - Renamed brand to **Rì Rào Store**.
  - Rewrote About Us statements, footers, and sitemaps to celebrate natural shellcraft.
  - Re-mapped navigation tabs into Vietnamese organic seashell jewelry categories.
  - Updated solid color base64 loading placeholders to match new HEX codes.

---

## 3. Curated Image Map Config
- **imageConfig.ts**:
  - Replaced all local diamond/gold assets with premium, high-resolution royalty-free Unsplash photo CDN links depicting hand-made shell necklaces, beach flatlays, corals, sand, and ocean panoramas.

---

## 4. Product Database & Catalog
- **mockData.ts**:
  - Transformed 9 collections into coastal shell equivalents (Xà Cừ Bốn Lá, Hạt Ngọc Biển, Hoa Khơi Biển, Thì Thầm Đại Dương, Rạn San Hô, Sao Biển Tuyết, etc.).
  - Rewrote product generator materials to focus on freshwater pearls, polished scallops, abalone shell, cowrie, and bện dây thủ công.
  - Changed pricing from luxury diamond dollars to highly accessible premium Vietnamese Dong (`200.000 VND - 2.500.000 VND`).
  - Rewrote brand history timeline milestones to follow Rì Rào Store milestones.

---

## 5. SEO & Hardcoded Elements
- **layout.tsx**: Updated SEO title and description meta tags to capture sea shell jewelry intents.
- **Old Brand Scrubber**: Substituted hardcoded strings `Yen Nhi Jewelry` and `Yen Nhi Jewerly` across all layout pages, boutique locator maps, timelines, headers, footers, services, and sliders to `Rì Rào Store`.
- **Hero.tsx**: Refined home page Hero carousel slide titles and descriptions to tell beachside stories.
