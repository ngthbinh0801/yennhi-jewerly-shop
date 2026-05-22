"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart, getPriceNumber } from "@/lib/cartContext";
import { CREAM_BLUR_DATA_URL } from "@/lib/constants";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalCount } = useCart();

  const subtotal = items.reduce((sum, item) => {
    const price = getPriceNumber(item.price);
    return price ? sum + price * item.quantity : sum;
  }, 0);

  const hasPOA = items.some((item) => getPriceNumber(item.price) === null);

  return (
    <div className="w-full min-h-[70vh] bg-brand-cream">
      {/* Page Header */}
      <div className="bg-brand-charcoal text-brand-white" style={{ height: "28vh", minHeight: "160px" }}>
        <div className="page-content h-full flex flex-col justify-end pb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold block mb-2">
            Your Selection
          </span>
          <h1 className="text-4xl md:text-5xl font-light font-serif tracking-wide">
            Shopping Cart
          </h1>
          {totalCount > 0 && (
            <p className="text-brand-gray text-sm mt-2 font-light">
              {totalCount} {totalCount === 1 ? "creation" : "creations"} reserved
            </p>
          )}
        </div>
      </div>

      <div className="page-content py-12 md:py-16">
        {items.length === 0 ? (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <ShoppingBag size={48} className="text-brand-gold/40 mb-6" strokeWidth={1} />
            <h2 className="text-2xl font-light font-serif text-brand-charcoal mb-3">
              Your cart is empty
            </h2>
            <p className="text-brand-gray text-sm font-light mb-8 max-w-xs leading-relaxed">
              Discover our collections and reserve exceptional creations for you.
            </p>
            <Link
              href="/collections"
              className="btn-luxury btn-luxury-burgundy flex items-center gap-2"
            >
              Explore Collections <ArrowRight size={14} />
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Cart Items — left col */}
            <div className="lg:col-span-7 flex flex-col gap-0 border-t border-brand-charcoal/10">
              <AnimatePresence initial={false}>
                {items.map((item, index) => {
                  const priceNum = getPriceNumber(item.price);
                  return (
                    <motion.div
                      key={item.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -30, height: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.07,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="flex gap-6 py-8 border-b border-brand-charcoal/10"
                    >
                      {/* Product Image */}
                      <Link
                        href={`/products/${item.slug}`}
                        className="relative w-28 h-28 md:w-36 md:h-36 shrink-0 bg-brand-white border border-brand-charcoal/5 overflow-hidden group"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="144px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          placeholder="blur"
                          blurDataURL={CREAM_BLUR_DATA_URL}
                        />
                      </Link>

                      {/* Info + Controls */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <Link
                              href={`/collections/${item.collectionSlug}`}
                              className="text-xs uppercase tracking-[0.2em] text-brand-gold font-semibold block mb-1 hover:text-brand-burgundy transition-colors duration-300"
                            >
                              {item.collectionSlug}
                            </Link>
                            <Link
                              href={`/products/${item.slug}`}
                              className="text-lg font-light font-serif text-brand-charcoal hover:text-brand-burgundy transition-colors duration-300 leading-tight"
                            >
                              {item.name}
                            </Link>
                            <div className="text-sm font-semibold uppercase tracking-wider text-brand-charcoal mt-1">
                              {item.price}
                            </div>
                          </div>

                          {/* Remove button */}
                          <button
                            onClick={() => removeFromCart(item.slug)}
                            aria-label="Remove item"
                            className="text-brand-gray hover:text-brand-burgundy transition-colors duration-300 p-1 shrink-0"
                          >
                            <X size={16} />
                          </button>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 mt-4">
                          <span className="text-xs uppercase tracking-widest text-brand-gray font-medium">Qty</span>
                          <div className="flex items-center border border-brand-charcoal/20 bg-brand-white">
                            <button
                              onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="w-11 h-11 flex items-center justify-center text-brand-charcoal hover:text-brand-burgundy disabled:opacity-30 transition-colors duration-300"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-10 text-center text-sm font-semibold text-brand-charcoal select-none">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                              className="w-11 h-11 flex items-center justify-center text-brand-charcoal hover:text-brand-burgundy transition-colors duration-300"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>

                          {priceNum !== null && (
                            <span className="text-xs text-brand-gray font-light ml-2">
                              = ${(priceNum * item.quantity).toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Order Summary — right col, sticky */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 lg:sticky lg:top-32 bg-brand-white border border-brand-charcoal/5 p-8 shadow-sm"
            >
              <h2 className="text-xl font-light font-serif text-brand-charcoal mb-6 tracking-wide">
                Order Summary
              </h2>
              <div className="w-8 h-[1px] bg-brand-gold/40 mb-6" />

              {/* Line items */}
              <div className="flex flex-col gap-3 mb-6">
                {items.map((item) => {
                  const priceNum = getPriceNumber(item.price);
                  return (
                    <div key={item.slug} className="flex justify-between items-start gap-4 text-sm">
                      <span className="text-brand-charcoal/80 font-light line-clamp-1 flex-1">
                        {item.name}
                        {item.quantity > 1 && (
                          <span className="text-brand-gray ml-1">×{item.quantity}</span>
                        )}
                      </span>
                      <span className="text-brand-charcoal font-semibold shrink-0 text-xs uppercase tracking-wider">
                        {priceNum !== null
                          ? `$${(priceNum * item.quantity).toLocaleString()}`
                          : "On request"}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-brand-charcoal/10 pt-4 mb-6">
                {subtotal > 0 && (
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs uppercase tracking-widest text-brand-gray font-medium">Subtotal</span>
                    <span className="text-base font-semibold text-brand-charcoal">${subtotal.toLocaleString()}</span>
                  </div>
                )}
                {hasPOA && (
                  <p className="text-xs text-brand-gray font-light italic mt-2 leading-relaxed">
                    * Creations marked "Price on request" will be confirmed by our concierge team.
                  </p>
                )}
                <p className="text-xs text-brand-gray font-light mt-2">
                  Shipping & taxes calculated at checkout
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col gap-3">
                <Link
                  href="/checkout"
                  className="w-full py-4 btn-luxury btn-luxury-burgundy flex items-center justify-center font-sans uppercase font-semibold text-xs tracking-widest text-center"
                >
                  Proceed to Checkout <ArrowRight size={14} className="ml-2" />
                </Link>
                <Link
                  href="/collections"
                  className="w-full py-3.5 text-center text-xs uppercase tracking-widest font-semibold text-brand-charcoal hover:text-brand-burgundy border border-brand-charcoal/20 hover:border-brand-burgundy transition-all duration-300"
                >
                  Continue Shopping
                </Link>
              </div>

              {/* Trust badges */}
              <div className="mt-6 pt-6 border-t border-brand-charcoal/10 flex flex-col gap-1.5">
                {["Secure payment · SSL encrypted", "Complimentary gift packaging", "Free returns within 30 days"].map((text) => (
                  <p key={text} className="text-xs text-brand-gray font-light tracking-wide flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-brand-gold/60 shrink-0" />
                    {text}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
