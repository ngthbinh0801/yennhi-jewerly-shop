import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    minimumCacheTTL: 0,
    unoptimized: process.env.NODE_ENV === "development",
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
      { source: "/watches", destination: "/collections/vong_tay", permanent: false },
      { source: "/bridal", destination: "/collections", permanent: false },
      { source: "/fragrance", destination: "/collections", permanent: false },
      { source: "/services", destination: "/boutiques", permanent: false },
      { source: "/account", destination: "/contact", permanent: false },
      { source: "/wishlist", destination: "/collections", permanent: false },

      // Jewelry Categories -> Collections filtering
      { source: "/jewelry/rings", destination: "/collections?category=rings", permanent: false },
      { source: "/jewelry/necklaces", destination: "/collections?category=necklaces", permanent: false },
      { source: "/jewelry/bracelets", destination: "/collections?category=bracelets", permanent: false },
      { source: "/jewelry/earrings", destination: "/collections?category=earrings", permanent: false },

      // Jewelry Collections Redirects (old Van Cleef slugs → Rì Rào equivalents)
      { source: "/jewelry/alhambra", destination: "/collections/gio_vo_so", permanent: false },
      { source: "/jewelry/perlee", destination: "/collections/day_chuyen_vo_so", permanent: false },
      { source: "/jewelry/frivole", destination: "/collections/khuyen_tai", permanent: false },
      { source: "/jewelry/lucky-spring", destination: "/collections", permanent: false },
      { source: "/jewelry/lotus", destination: "/collections", permanent: false },
      { source: "/jewelry/fauna-flora", destination: "/collections/nhan_vo_oc", permanent: false },
      { source: "/jewelry/magic-alhambra", destination: "/collections/gio_vo_so", permanent: false },
      { source: "/jewelry/vintage-alhambra", destination: "/collections/gio_vo_so", permanent: false },
      { source: "/jewelry/frivole-discover", destination: "/collections/khuyen_tai", permanent: false },

      // High Jewelry Collections
      { source: "/high-jewelry/legend", destination: "/collections", permanent: false },
      { source: "/high-jewelry/romeo-juliet", destination: "/collections", permanent: false },
      { source: "/high-jewelry/rubies", destination: "/collections", permanent: false },
      { source: "/high-jewelry/luck", destination: "/collections/gio_vo_so", permanent: false },
      { source: "/high-jewelry/secret", destination: "/collections", permanent: false },
      { source: "/high-jewelry/mystery-set", destination: "/collections/vong_tay", permanent: false },
      { source: "/high-jewelry/savoir-faire", destination: "/the-maison", permanent: false },
      { source: "/high-jewelry/gemstones", destination: "/the-maison", permanent: false },

      // Watches Collections
      { source: "/watches/poetic", destination: "/collections/vong_tay", permanent: false },
      { source: "/watches/poetic-complications", destination: "/collections/vong_tay", permanent: false },
      { source: "/watches/charms", destination: "/collections/vong_tay", permanent: false },
      { source: "/watches/alhambra", destination: "/collections/gio_vo_so", permanent: false },
      { source: "/watches/sweet", destination: "/collections/vong_tay", permanent: false },
      { source: "/watches/enameling", destination: "/the-maison", permanent: false },
      { source: "/watches/painting", destination: "/the-maison", permanent: false },
      { source: "/watches/mechanics", destination: "/the-maison", permanent: false },

      // Bridal Collections
      { source: "/bridal/engagement", destination: "/collections/nhan_vo_oc", permanent: false },
      { source: "/bridal/bands", destination: "/collections/vong_tay", permanent: false },
      { source: "/bridal/sets", destination: "/collections", permanent: false },
      { source: "/bridal/solitaires", destination: "/collections/nhan_vo_oc", permanent: false },
      { source: "/bridal/custom", destination: "/contact", permanent: false },
      { source: "/bridal/diamonds", destination: "/collections/nhan_vo_oc", permanent: false },
      { source: "/bridal/engraving", destination: "/contact", permanent: false },

      // Old Van Cleef collection slugs → direct redirect to Rì Rào equivalents
      { source: "/collections/alhambra", destination: "/collections/gio_vo_so", permanent: false },
      { source: "/collections/perlee", destination: "/collections/day_chuyen_vo_so", permanent: false },
      { source: "/collections/frivole", destination: "/collections/khuyen_tai", permanent: false },
      { source: "/collections/fauna-flora", destination: "/collections/nhan_vo_oc", permanent: false },
      { source: "/collections/poetic-complications", destination: "/collections/vong_tay", permanent: false },
      { source: "/collections/snowflake", destination: "/collections/guong_vo_so", permanent: false },
      { source: "/collections/flying-butterfly", destination: "/collections", permanent: false },
      { source: "/collections/lucky-spring", destination: "/collections", permanent: false },
      { source: "/collections/lotus", destination: "/collections", permanent: false },

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
