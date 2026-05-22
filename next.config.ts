import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  async redirects() {
    return [
      // General Navigation Redirects
      { source: "/high-jewelry", destination: "/collections", permanent: false },
      { source: "/jewelry", destination: "/collections", permanent: false },
      { source: "/watches", destination: "/collections/poetic-complications", permanent: false },
      { source: "/bridal", destination: "/collections/snowflake", permanent: false },
      { source: "/fragrance", destination: "/collections", permanent: false },
      { source: "/services", destination: "/boutiques", permanent: false },
      { source: "/account", destination: "/contact", permanent: false },
      { source: "/wishlist", destination: "/collections", permanent: false },

      // Jewelry Categories -> Collections filtering
      { source: "/jewelry/rings", destination: "/collections?category=rings", permanent: false },
      { source: "/jewelry/necklaces", destination: "/collections?category=necklaces", permanent: false },
      { source: "/jewelry/bracelets", destination: "/collections?category=bracelets", permanent: false },
      { source: "/jewelry/earrings", destination: "/collections?category=earrings", permanent: false },

      // Jewelry Collections Redirects
      { source: "/jewelry/alhambra", destination: "/collections/alhambra", permanent: false },
      { source: "/jewelry/perlee", destination: "/collections/perlee", permanent: false },
      { source: "/jewelry/frivole", destination: "/collections/frivole", permanent: false },
      { source: "/jewelry/lucky-spring", destination: "/collections/lucky-spring", permanent: false },
      { source: "/jewelry/lotus", destination: "/collections/lotus", permanent: false },
      { source: "/jewelry/fauna-flora", destination: "/collections/fauna-flora", permanent: false },
      { source: "/jewelry/magic-alhambra", destination: "/collections/alhambra", permanent: false },
      { source: "/jewelry/vintage-alhambra", destination: "/collections/alhambra", permanent: false },
      { source: "/jewelry/frivole-discover", destination: "/collections/frivole", permanent: false },

      // High Jewelry Collections
      { source: "/high-jewelry/legend", destination: "/collections/flying-butterfly", permanent: false },
      { source: "/high-jewelry/romeo-juliet", destination: "/collections/snowflake", permanent: false },
      { source: "/high-jewelry/rubies", destination: "/collections/snowflake", permanent: false },
      { source: "/high-jewelry/luck", destination: "/collections/alhambra", permanent: false },
      { source: "/high-jewelry/secret", destination: "/collections/flying-butterfly", permanent: false },
      { source: "/high-jewelry/mystery-set", destination: "/collections/poetic-complications", permanent: false },
      { source: "/high-jewelry/savoir-faire", destination: "/the-maison", permanent: false },
      { source: "/high-jewelry/gemstones", destination: "/the-maison", permanent: false },

      // Watches Collections
      { source: "/watches/poetic", destination: "/collections/poetic-complications", permanent: false },
      { source: "/watches/poetic-complications", destination: "/collections/poetic-complications", permanent: false },
      { source: "/watches/charms", destination: "/collections/poetic-complications", permanent: false },
      { source: "/watches/alhambra", destination: "/collections/poetic-complications", permanent: false },
      { source: "/watches/sweet", destination: "/collections/poetic-complications", permanent: false },
      { source: "/watches/enameling", destination: "/the-maison", permanent: false },
      { source: "/watches/painting", destination: "/the-maison", permanent: false },
      { source: "/watches/mechanics", destination: "/the-maison", permanent: false },

      // Bridal Collections
      { source: "/bridal/engagement", destination: "/collections/snowflake", permanent: false },
      { source: "/bridal/bands", destination: "/collections/snowflake", permanent: false },
      { source: "/bridal/sets", destination: "/collections/snowflake", permanent: false },
      { source: "/bridal/solitaires", destination: "/collections/snowflake", permanent: false },
      { source: "/bridal/custom", destination: "/collections/snowflake", permanent: false },
      { source: "/bridal/diamonds", destination: "/collections/snowflake", permanent: false },
      { source: "/bridal/engraving", destination: "/collections/snowflake", permanent: false },

      // Customer Services Subpages
      { source: "/service/contact-us", destination: "/contact", permanent: false },
      { source: "/service/:path*", destination: "/contact", permanent: false },

      // Maison Subpages
      { source: "/maison/our-history", destination: "/the-maison", permanent: false },
      { source: "/maison/savoir-faire", destination: "/the-maison", permanent: false },
      { source: "/maison/:path*", destination: "/the-maison", permanent: false },

      // Legal Subpages
      { source: "/legal/:path*", destination: "/contact", permanent: false },
    ];
  },
};

export default nextConfig;
