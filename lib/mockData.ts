export interface Collection {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  itemCount: number;
  category: "necklaces" | "bracelets" | "earrings" | "rings" | "watches";
}

export interface Product {
  slug: string;
  name: string;
  collectionSlug: string;
  material: string;
  price: string;
  description: string;
  images: string[];
  specifications: {
    materials: string;
    dimensions: string;
    reference: string;
  };
  featured?: boolean;
}

export interface Boutique {
  name: string;
  city: string;
  region: "Asia" | "Europe" | "Americas" | "Middle East";
  address: string;
  phone: string;
  hours: string[];
  coordinates: { lat: number; lng: number };
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  image: string;
}

// 9 Luxury Collections
export const COLLECTIONS_DATA: Collection[] = [
  {
    slug: "alhambra",
    name: "Alhambra",
    tagline: "An Enduring Icon of Luck Since 1968",
    description: "Elegant, timeless, and feminine, the Alhambra collection is adorned with borders of golden beads and showcases beautiful natural materials in a four-leaf clover motif, symbolizing luck, love, and health.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
    itemCount: 12,
    category: "necklaces"
  },
  {
    slug: "perlee",
    name: "Perlée",
    tagline: "The Radiance of Golden Beads",
    description: "Joyful and sophisticated, the Perlée collection features infinitely refined gold beads. Handcrafted with precision, each pearl catches and mirrors the light for an unmatched play of reflections.",
    image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&q=80&w=800",
    itemCount: 10,
    category: "rings"
  },
  {
    slug: "frivole",
    name: "Frivole",
    tagline: "A Luminous and Airy Floral Bouquet",
    description: "Like a bouquet of flowers dancing in the wind, the Frivole collection stands out with its graphic and airy style. Mirror-polished gold structures give each heart-shaped petal intense shimmer.",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80&w=800",
    itemCount: 9,
    category: "earrings"
  },
  {
    slug: "lucky-spring",
    name: "Lucky Spring",
    tagline: "A Poetic Springtime Awakening",
    description: "A tribute to nature's rebirth, the Lucky Spring collection brings together ladybugs, flowers, and leaves in a bright array of rose gold, carnelian, and mother-of-pearl.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800",
    itemCount: 10,
    category: "bracelets"
  },
  {
    slug: "lotus",
    name: "Lotus",
    tagline: "A Sacred Floral Sacred Grace",
    description: "Symbolizing purity, wisdom, and beauty, the Lotus collection showcases delicate, diamond-paved layers of gold, reflecting the light like morning dew on sacred petals.",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
    itemCount: 9,
    category: "necklaces"
  },
  {
    slug: "fauna-flora",
    name: "Fauna & Flora",
    tagline: "Celebrating Nature's Grace",
    description: "Inspired by the movement and grace of living creatures, this line captures butterflies and ladybugs in exceptional precious gems, illustrating the poetry of wild gardens.",
    image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&q=80&w=800",
    itemCount: 11,
    category: "brooches" as any
  },
  {
    slug: "poetic-complications",
    name: "Poetic Complications",
    tagline: "Time Telling Through Enchantment",
    description: "Redefining the mechanical wonders of Swiss horology, this watchmaking marvel depicts stories of lovers, fairies, and stars across poetic hand-painted gold dials.",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800",
    itemCount: 9,
    category: "watches"
  },
  {
    slug: "snowflake",
    name: "Snowflake",
    tagline: "Dazzling Shimmer of Winter Glow",
    description: "Inspired by snow-draped landscapes, this high-jewelry creation arrays round-cut white diamonds in geometric openworks resembling frozen crystals reflecting morning rays.",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800",
    itemCount: 9,
    category: "rings"
  },
  {
    slug: "flying-butterfly",
    name: "Flying Butterfly",
    tagline: "Asymmetric Flight of Precious Wings",
    description: "With their openwork details and dynamic angles, these asymmetrical earrings and rings capture the flutter of butterflies in a shimmering cage of gold and white diamonds.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
    itemCount: 9,
    category: "rings"
  }
];

// High-Fidelity Products (9-12 items sample)
export const PRODUCTS_DATA: Product[] = [];

// Helper to generate mock products for each collection dynamically to maintain high fidelity
COLLECTIONS_DATA.forEach((col) => {
  const materials = [
    "18K Yellow Gold, Mother-of-pearl",
    "18K Rose Gold, Carnelian",
    "18K White Gold, Onyx, Diamonds",
    "18K Yellow Gold, Malachite, Diamonds",
    "18K Rose Gold, Diamonds"
  ];
  
  const baseImages = [
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800"
  ];

  for (let i = 1; i <= col.itemCount; i++) {
    const material = materials[(i - 1) % materials.length];
    
    // Choose product-specific Unsplash gallery items
    const imgIndex = (i - 1) % baseImages.length;
    const secondImgIndex = (i) % baseImages.length;
    const thirdImgIndex = (i + 1) % baseImages.length;
    const fourthImgIndex = (i + 2) % baseImages.length;

    const price = i % 3 === 0 ? "Price on request" : `$${(4500 + i * 1350).toLocaleString()}`;

    PRODUCTS_DATA.push({
      slug: `${col.slug}-item-${i}`,
      name: `${col.name.replace("®", "").replace("™", "")} ${i === 1 ? "Pendant" : i === 2 ? "Bracelet" : i === 3 ? "Earrings" : i === 4 ? "Ring" : i === 5 ? "Clip" : "Creation"} ${i}`,
      collectionSlug: col.slug,
      material: material,
      price: price,
      description: `An exquisite creation of fine artistry from the ${col.name} collection. Masterfully set with high-grade natural gemstones, this luxury piece catches the light beautifully and reflects the poetic di sản of our Place Vendôme artisans. Perfect for celebrating luck, love, and sophisticated styling.`,
      images: [
        baseImages[imgIndex],
        baseImages[secondImgIndex],
        baseImages[thirdImgIndex],
        baseImages[fourthImgIndex]
      ],
      specifications: {
        materials: material,
        dimensions: `${15 + i * 2}mm clover motif size, chain length: ${40 + i}cm`,
        reference: `VCARD${89000 + i * 142}`
      },
      featured: i === 1 || i === 3
    });
  }
});

// 8 Flagship Global Boutiques
export const BOUTIQUES_DATA: Boutique[] = [
  {
    name: "Place Vendôme Flagship Boutique",
    city: "Paris",
    region: "Europe",
    address: "22 Place Vendôme, 75001 Paris, France",
    phone: "+33 1 55 04 11 11",
    hours: [
      "Monday - Saturday: 10:30 AM - 7:00 PM",
      "Sunday: Closed"
    ],
    coordinates: { lat: 48.86725, lng: 2.32943 }
  },
  {
    name: "Fifth Avenue Boutique",
    city: "New York",
    region: "Americas",
    address: "712 Fifth Avenue, New York, NY 10019, USA",
    phone: "+1 212 896 9000",
    hours: [
      "Monday - Saturday: 10:00 AM - 6:00 PM",
      "Sunday: 12:00 PM - 5:00 PM"
    ],
    coordinates: { lat: 40.76214, lng: -73.97412 }
  },
  {
    name: "Ginza Flagship Boutique",
    city: "Tokyo",
    region: "Asia",
    address: "5-6-15 Ginza, Chuo-ku, Tokyo 104-0061, Japan",
    phone: "+81 3 3569 1906",
    hours: [
      "Monday - Sunday: 11:00 AM - 8:00 PM"
    ],
    coordinates: { lat: 35.67055, lng: 139.76345 }
  },
  {
    name: "New Bond Street Boutique",
    city: "London",
    region: "Europe",
    address: "150 New Bond Street, London W1S 2TU, United Kingdom",
    phone: "+44 20 7429 2700",
    hours: [
      "Monday - Saturday: 10:00 AM - 6:00 PM",
      "Sunday: Closed"
    ],
    coordinates: { lat: 51.51263, lng: -0.14421 }
  },
  {
    name: "The Landmark Prince's Boutique",
    city: "Hong Kong",
    region: "Asia",
    address: "Shop G23-26, G/F, Prince's Building, Central, Hong Kong",
    phone: "+852 2522 9677",
    hours: [
      "Monday - Sunday: 10:00 AM - 7:30 PM"
    ],
    coordinates: { lat: 22.28156, lng: 114.15934 }
  },
  {
    name: "Marina Bay Sands Duplex",
    city: "Singapore",
    region: "Asia",
    address: "2 Bayfront Avenue, B1-41/42, Singapore 018972",
    phone: "+65 6688 7377",
    hours: [
      "Monday - Sunday: 11:00 AM - 10:00 PM"
    ],
    coordinates: { lat: 1.28475, lng: 103.85963 }
  },
  {
    name: "Rue du Rhône Salon",
    city: "Geneva",
    region: "Europe",
    address: "31 Rue du Rhône, 1204 Geneva, Switzerland",
    phone: "+41 22 310 37 37",
    hours: [
      "Monday - Friday: 10:00 AM - 6:30 PM",
      "Saturday: 10:00 AM - 5:00 PM",
      "Sunday: Closed"
    ],
    coordinates: { lat: 46.20455, lng: 6.14812 }
  },
  {
    name: "Dubai Mall Boutique",
    city: "Dubai",
    region: "Middle East",
    address: "Fashion Avenue, The Dubai Mall, Downtown Dubai, UAE",
    phone: "+971 4 339 8000",
    hours: [
      "Monday - Thursday: 10:00 AM - 11:00 PM",
      "Friday - Sunday: 10:00 AM - 12:00 AM"
    ],
    coordinates: { lat: 25.19725, lng: 55.27963 }
  }
];

// Timeline Milestones
export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: "2026",
    title: "Atelier Establishment",
    description: "The founders of Yen Nhi Jewerly establish the very first luxury design atelier, starting an exquisite journey of pure love and fine gemstone artistry.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2027",
    title: "Signature Invisible Setting",
    description: "The Atelier introduces its iconic invisible gemstone settings, an exceptional framework that holds precious gems seamlessly to elevate the brilliant fire of diamonds.",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2028",
    title: "Empress Collection",
    description: "Yen Nhi Jewerly introduces the Empress clover necklace, set with four-leaf clover motifs outlined with gold beads, cementing it as an enduring signature icon of luck and love.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2029",
    title: "Poetic Complications",
    description: "Celebrating decades of mastery, the Atelier introduces poetic watchmaking compilations that display romantic mechanical theater on precious diamond dials.",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2030",
    title: "High Jewelry Exhibition",
    description: "The Atelier launches its latest artistic high-jewelry curation, demonstrating the continuing power of masterful hand craftsmanship to shape rare natural stones.",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=800"
  }
];
