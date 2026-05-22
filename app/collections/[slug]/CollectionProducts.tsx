"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, ShoppingBag, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/lib/mockData";
import { CREAM_BLUR_DATA_URL } from "@/lib/constants";
import { useCart } from "@/lib/cartContext";

interface CollectionProductsProps {
  products: Product[];
}

export default function CollectionProducts({ products }: CollectionProductsProps) {
  const router = useRouter();
  const { addToCart } = useCart();
  const [visibleCount, setVisibleCount] = useState(6);
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const [addedSlugs, setAddedSlugs] = useState<Record<string, boolean>>({});

  const handleAddToCart = (prod: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      slug: prod.slug,
      name: prod.name,
      price: prod.price,
      image: prod.images[0],
      collectionSlug: prod.collectionSlug,
    });
    setAddedSlugs((prev) => ({ ...prev, [prod.slug]: true }));
    setTimeout(() => {
      setAddedSlugs((prev) => ({ ...prev, [prod.slug]: false }));
    }, 1600);
  };

  const toggleWishlist = (slug: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setWishlist((prev) => ({
      ...prev,
      [slug]: !prev[slug]
    }));
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, products.length));
  };

  const visibleProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full mb-12">
        {visibleProducts.map((prod, index) => {
          const isWishlisted = !!wishlist[prod.slug];
          const isHovered = hoveredProduct === prod.slug;
          const isAdded = !!addedSlugs[prod.slug];
          const displayImage = isHovered && prod.images[1] ? prod.images[1] : prod.images[0];

          return (
            <motion.div
              key={prod.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col bg-brand-white border border-brand-charcoal/5 shadow-sm hover:shadow-lg transition-all duration-300 relative"
              onMouseEnter={() => setHoveredProduct(prod.slug)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image with Aspect Ratio 1:1 */}
              <Link href={`/products/${prod.slug}`} className="relative block aspect-square w-full overflow-hidden bg-brand-cream">
                <Image
                  src={displayImage}
                  alt={prod.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[800ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL={CREAM_BLUR_DATA_URL}
                />

                {/* Wishlist Button Overlay */}
                <button
                  onClick={(e) => toggleWishlist(prod.slug, e)}
                  aria-label="Add to wishlist"
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-brand-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center text-brand-charcoal hover:text-brand-burgundy transition-all duration-300 border border-brand-charcoal/5"
                >
                  <Heart
                    size={18}
                    className={`transition-all duration-300 ${
                      isWishlisted ? "fill-brand-burgundy text-brand-burgundy scale-110" : "text-brand-charcoal hover:scale-110"
                    }`}
                  />
                </button>
              </Link>

              {/* Product Info details */}
              <div className="p-6 text-center flex flex-col items-center justify-between flex-grow">
                <div className="flex flex-col items-center">
                  <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-medium mb-1.5">
                    {prod.material.split(",")[0]}
                  </span>
                  <h3 className="text-lg font-light font-serif text-brand-charcoal group-hover:text-brand-burgundy transition-colors duration-300 mb-1 px-2 line-clamp-1">
                    <Link href={`/products/${prod.slug}`}>
                      {prod.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-brand-gray font-light mb-4 line-clamp-1">
                    {prod.material}
                  </p>
                </div>
                
                <span className="text-sm font-semibold uppercase tracking-wider text-brand-charcoal mb-3">
                  {prod.price}
                </span>

                {/* Quick-add to cart — appears on hover */}
                <motion.button
                  onClick={(e) => handleAddToCart(prod, e)}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 6 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-semibold px-4 py-2 border transition-all duration-300 ${
                    isAdded
                      ? "border-brand-charcoal bg-brand-charcoal text-brand-white"
                      : "border-brand-charcoal/30 text-brand-charcoal hover:border-brand-burgundy hover:text-brand-burgundy"
                  }`}
                  aria-label={isAdded ? "Added to cart" : "Add to cart"}
                  tabIndex={isHovered ? 0 : -1}
                >
                  {isAdded ? (
                    <><Check size={11} /> Added</>
                  ) : (
                    <><ShoppingBag size={11} /> Add to Cart</>
                  )}
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <motion.button
          onClick={handleLoadMore}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-luxury border-brand-charcoal hover:border-brand-burgundy"
        >
          Load More Creations
        </motion.button>
      )}
    </div>
  );
}
