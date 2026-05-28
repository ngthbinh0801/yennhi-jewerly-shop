# Testing and Verification: Rì Rào Store

This guide details how to verify the new seashell brand identity and product catalog locally.

---

## 1. Automated Validations

Verify that all styles, typings, and imports compile cleanly with zero failures.

```bash
# 1. Run strict linter check
npm run lint

# 2. Run clean Next.js build compile
npm run build
```

Both actions will now complete **with absolutely zero errors or warnings**.

---

## 2. Manual Visual Verifications

Start the local development server:

```bash
npm run dev
```

Then visit [http://localhost:3000](http://localhost:3000) and verify the following:

### A. Coastal Brand Styling & Palette
- Verify the soft white sand background, deep ocean teal headings, sunset coral buttons, and driftwood gray highlights.
- Verify that **zero layout elements are broken**, and the visual structure is fully cohesive.

### B. Shell Product Catalog
- Navigate to `/collections`. Verify the 9 new seashell collections (Xà Cừ Bốn Lá, Hạt Ngọc Biển, Hoa Khơi Biển, Thì Thầm Đại Dương, etc.).
- Click on any product (e.g. **Xà Cừ Bốn Lá Mặt dây chuyền 1**). Verify the seashell specifications, freshwater pearl materials, and beautiful, realistic pricing in Vietnamese Dong (`200.000 VND - 2.500.000 VND`).

### C. Curated Coastal Media
- Verify the beautiful, high-resolution Unsplash seashell necklaces, beach flatlays, and sandy landscapes across the hero sliders, collection list grids, about banners, and social feeds. All image links are fast, stable, and secure.
