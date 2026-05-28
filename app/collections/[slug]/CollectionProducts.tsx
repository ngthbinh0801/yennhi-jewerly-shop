"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingBag, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/lib/mockData";
import { CREAM_BLUR_DATA_URL } from "@/lib/constants";
import { useCart } from "@/lib/cartContext";

interface CollectionProductsProps {
  products: Product[];
}

export default function CollectionProducts({ products }: CollectionProductsProps) {
  const { addToCart } = useCart();
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [hovered, setHovered] = useState<string | null>(null);
  const [added, setAdded] = useState<Record<string, boolean>>({});

  const handleAdd = (prod: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ slug: prod.slug, name: prod.name, price: prod.price, image: prod.images[0], collectionSlug: prod.collectionSlug });
    setAdded((p) => ({ ...p, [prod.slug]: true }));
    setTimeout(() => setAdded((p) => ({ ...p, [prod.slug]: false })), 1800);
  };

  if (products.length === 0) {
    return <p className="text-center text-brand-gray font-light text-sm py-12">Chưa có sản phẩm trong bộ sưu tập này.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
      {products.map((prod, i) => {
        const img = prod.images[0];
        const isAdded = !!added[prod.slug];

        return (
          <motion.div
            key={prod.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.65, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col"
            onMouseEnter={() => setHovered(prod.slug)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Image */}
            <div className="relative block aspect-[4/5] overflow-hidden bg-[#f5f0ea]">
              <Image
                src={img}
                alt={prod.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain p-6 group-hover:scale-[1.04] transition-transform duration-[900ms] ease-out"
                placeholder="blur"
                blurDataURL={CREAM_BLUR_DATA_URL}
              />
              {/* Wishlist */}
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setWishlist((p) => ({ ...p, [prod.slug]: !p[prod.slug] })); }}
                aria-label="Yêu thích"
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-white/80 backdrop-blur-sm border border-brand-charcoal/8 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <Heart size={14} className={wishlist[prod.slug] ? "fill-brand-burgundy text-brand-burgundy" : "text-brand-charcoal"} />
              </button>

              {/* Quick-add overlay */}
              <div className="absolute bottom-0 inset-x-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
                <button
                  onClick={(e) => handleAdd(prod, e)}
                  className={`w-full py-4 text-[11px] uppercase tracking-[0.25em] font-semibold flex items-center justify-center gap-2.5 transition-colors duration-300 ${
                    isAdded
                      ? "bg-brand-charcoal text-white"
                      : "bg-white/95 text-brand-charcoal hover:bg-brand-charcoal hover:text-white"
                  }`}
                >
                  {isAdded ? <><Check size={13} />Đã thêm</> : <><ShoppingBag size={13} />Thêm vào giỏ</>}
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="pt-4 flex flex-col gap-1">
              <span className="text-[9px] uppercase tracking-[0.35em] text-brand-gold font-semibold">
                {prod.material.split(",")[0].trim()}
              </span>
              <h3 className="font-serif text-[1.0625rem] font-light text-brand-charcoal leading-snug">
                {prod.name}
              </h3>
              <span className="text-[0.875rem] font-light text-brand-charcoal/70 mt-0.5">
                {prod.price}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
