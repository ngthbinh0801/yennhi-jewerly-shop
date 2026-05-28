"use client";

import React, { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { useCart } from "@/lib/cartContext";
import { Product } from "@/lib/mockData";

interface CollectionAddToCartProps {
  product: Product;
}

export default function CollectionAddToCart({ product }: CollectionAddToCartProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    addToCart({
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      collectionSlug: product.collectionSlug,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAdd}
      className={`inline-flex items-center justify-center gap-2.5 text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3.5 border transition-all duration-300 focus:outline-none min-w-[220px] cursor-pointer ${
        isAdded
          ? "border-brand-charcoal bg-brand-charcoal text-brand-white"
          : "border-brand-charcoal bg-brand-charcoal text-brand-white hover:bg-transparent hover:text-brand-charcoal"
      }`}
    >
      {isAdded ? (
        <>
          <Check size={14} />
          Đã thêm vào giỏ
        </>
      ) : (
        <>
          <ShoppingBag size={14} />
          Thêm vào giỏ hàng
        </>
      )}
    </button>
  );
}
