"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useCart, getPriceNumber } from "@/lib/cartContext";
import { CREAM_BLUR_DATA_URL } from "@/lib/constants";
import CheckoutForm from "./CheckoutForm";

export default function CheckoutPage() {
  const { items } = useCart();

  const subtotal = items.reduce((sum, item) => {
    const price = getPriceNumber(item.price);
    return price ? sum + price * item.quantity : sum;
  }, 0);

  return (
    <div className="w-full min-h-[70vh] bg-brand-cream">
      {/* Page Header */}
      <div className="bg-brand-charcoal text-brand-white" style={{ height: "28vh", minHeight: "160px" }}>
        <div className="page-content h-full flex flex-col justify-end pb-10">
          <nav className="text-xs uppercase tracking-[0.2em] text-brand-white/40 mb-3 flex items-center gap-1.5 font-medium">
            <Link href="/" className="hover:text-brand-gold transition-colors duration-300">Home</Link>
            <ChevronRight size={10} className="text-brand-white/20" />
            <Link href="/cart" className="hover:text-brand-gold transition-colors duration-300">Cart</Link>
            <ChevronRight size={10} className="text-brand-white/20" />
            <span className="text-brand-gold">Checkout</span>
          </nav>
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold block mb-2">
            Secure Payment
          </span>
          <h1 className="text-4xl md:text-5xl font-light font-serif tracking-wide">
            Checkout
          </h1>
        </div>
      </div>

      <div className="page-content py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT — Checkout Form */}
          <div className="lg:col-span-7">
            <CheckoutForm />
          </div>

          {/* RIGHT — Order Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-32 bg-brand-white border border-brand-charcoal/5 p-8 shadow-sm"
          >
            <h2 className="text-xl font-light font-serif text-brand-charcoal mb-6 tracking-wide">
              Your Order
            </h2>
            <div className="w-8 h-[1px] bg-brand-gold/40 mb-6" />

            {items.length === 0 ? (
              <p className="text-brand-gray text-sm font-light">
                Your cart is empty.{" "}
                <Link href="/collections" className="text-brand-burgundy underline">
                  Browse collections
                </Link>
              </p>
            ) : (
              <>
                <div className="flex flex-col gap-5 mb-6">
                  {items.map((item) => {
                    const priceNum = getPriceNumber(item.price);
                    return (
                      <div key={item.slug} className="flex gap-4 items-start">
                        <div className="relative w-16 h-16 shrink-0 bg-brand-cream border border-brand-charcoal/5 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="64px"
                            className="object-cover"
                            placeholder="blur"
                            blurDataURL={CREAM_BLUR_DATA_URL}
                          />
                          {item.quantity > 1 && (
                            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-brand-burgundy text-brand-white text-[9px] font-bold rounded-full flex items-center justify-center">
                              {item.quantity}
                            </span>
                          )}
                        </div>
                        <div className="flex-1 flex flex-col justify-between min-h-[4rem]">
                          <div>
                            <p className="text-sm font-light font-serif text-brand-charcoal leading-tight line-clamp-1">
                              {item.name}
                            </p>
                            <p className="text-xs uppercase tracking-wider text-brand-gold font-medium mt-0.5">
                              {item.collectionSlug}
                            </p>
                          </div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal">
                            {priceNum !== null
                              ? `$${(priceNum * item.quantity).toLocaleString()}`
                              : "Price on request"}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t border-brand-charcoal/10 pt-4 flex flex-col gap-2">
                  {subtotal > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-xs uppercase tracking-widest text-brand-gray font-medium">Subtotal</span>
                      <span className="text-sm font-semibold text-brand-charcoal">${subtotal.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-xs uppercase tracking-widest text-brand-gray font-medium">Shipping</span>
                    <span className="text-xs text-brand-gold font-medium">Complimentary</span>
                  </div>
                </div>
              </>
            )}

            {/* Trust Signals */}
            <div className="mt-6 pt-6 border-t border-brand-charcoal/10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 border border-brand-gold/40 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-brand-gold/60 rounded-full" />
                </div>
                <p className="text-xs uppercase tracking-[0.15em] text-brand-gray font-medium">
                  SSL Secured Checkout
                </p>
              </div>
              <p className="text-xs text-brand-gray font-light leading-relaxed">
                Your payment information is encrypted and never stored. This is a portfolio demonstration — no real charges will occur.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
