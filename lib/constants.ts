export interface NavigationItem {
  label: string;
  href: string;
  dropdownItems?: { label: string; href: string }[];
}

export interface CollectionItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
  year?: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: "High Jewelry",
    href: "/high-jewelry",
    dropdownItems: [
      { label: "Legend of Diamonds", href: "/high-jewelry/legend-of-diamonds" },
      { label: "The Collection", href: "/high-jewelry/collection" },
      { label: "Our Savoir-Faire", href: "/high-jewelry/savoir-faire" },
    ],
  },
  {
    label: "Jewelry",
    href: "/jewelry",
    dropdownItems: [
      { label: "Alhambra", href: "/jewelry/alhambra" },
      { label: "Frivole", href: "/jewelry/frivole" },
      { label: "Perlée", href: "/jewelry/perlee" },
      { label: "Fauna & Flora", href: "/jewelry/fauna-flora" },
      { label: "Bouton d'or", href: "/jewelry/bouton-dor" },
      { label: "All Jewelry Creations", href: "/jewelry/all" },
    ],
  },
  {
    label: "Watches",
    href: "/watches",
    dropdownItems: [
      { label: "Poetic Complications", href: "/watches/poetic-complications" },
      { label: "Charms", href: "/watches/charms" },
      { label: "Alhambra Watches", href: "/watches/alhambra" },
      { label: "High Jewelry Timepieces", href: "/watches/high-jewelry" },
    ],
  },
  {
    label: "Bridal",
    href: "/bridal",
    dropdownItems: [
      { label: "Engagement Rings", href: "/bridal/engagement-rings" },
      { label: "Wedding Bands", href: "/bridal/wedding-bands" },
      { label: "Bridal Sets", href: "/bridal/sets" },
      { label: "Unique Solitaires", href: "/bridal/unique-solitaires" },
    ],
  },
  {
    label: "The Atelier",
    href: "/the-maison",
    dropdownItems: [
      { label: "Since 2026", href: "/the-maison" },
      { label: "Our Story", href: "/the-maison" },
      { label: "Exhibitions & Events", href: "/the-maison" },
      { label: "The Academy of Jewelry Arts", href: "/the-maison" },
    ],
  },
];

export const COLLECTIONS: CollectionItem[] = [
  {
    id: "alhambra",
    name: "Alhambra",
    tagline: "An Icon of Luck Since 1968",
    description: "Created in 1968, the Alhambra collection has established itself as an enduring symbol of luck. Elegant, timeless, and feminine, it is adorned with borders of golden beads and showcases beautiful natural materials in a four-leaf clover motif.",
    image: "/images/collections/alhambra.jpg",
    href: "/jewelry/alhambra",
    year: "1968",
  },
  {
    id: "frivole",
    name: "Frivole",
    tagline: "A Luminous and Graphic Bouquet",
    description: "Like a bouquet of flowers dancing in the wind, the Frivole collection stands out with its airy and graphic style. Mirror-polished gold structures give each heart-shaped petal an intense glow, reflecting the brilliant light of precious diamonds.",
    image: "/images/collections/frivole.jpg",
    href: "/jewelry/frivole",
    year: "2003",
  },
  {
    id: "perlee",
    name: "Perlée",
    tagline: "The Joyful Sparkle of Golden Beads",
    description: "Embodying a legacy of playfulness and sophistication, the Perlée collection features infinitely refined golden beads. From delicate rings to bold bracelets, each piece is handcrafted, catching the light with unmatched radiance and endless combinations.",
    image: "/images/collections/perlee.jpg",
    href: "/jewelry/perlee",
    year: "2008",
  },
  {
    id: "fauna",
    name: "Fauna & Flora",
    tagline: "Nature's Benevolent Beauty",
    description: "Celebrating the poetry of nature, Yen Nhi Jewerly pays tribute to the animal and botanical worlds. Butterflies, ladybugs, and flowers are brought to life through extraordinary gems, capturing the constant movement and graceful elegance of life.",
    image: "/images/collections/fauna-flora.jpg",
    href: "/jewelry/fauna-flora",
  },
];

export const BRAND_INFO = {
  name: "Yen Nhi Jewerly",
  tagline: "Haute Joaillerie & Horlogerie since 2026",
  founded: "2026",
  place: "Vietnam",
  footerQuote: "Since 2026, Yen Nhi Jewerly has combined excellence, poetry, and creativity in the service of unique jewelry and watchmaking collections.",
};

// Base64 Solid Color Placeholders for Next.js Image Component
// Warm Cream (#FAF8F5)
export const CREAM_BLUR_DATA_URL = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNGQUY4RjUiLz48L3N2Zz4=";

// Charcoal Black (#1A1A1A)
export const CHARCOAL_BLUR_DATA_URL = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxQTFBMUEiLz48L3N2Zz4=";

