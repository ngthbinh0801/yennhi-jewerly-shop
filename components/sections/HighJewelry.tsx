"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { CHARCOAL_BLUR_DATA_URL } from "@/lib/constants";

export default function HighJewelry() {
  return (
    <section className="w-full bg-brand-charcoal text-brand-cream section-padding overflow-hidden">
      <div className="page-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center"
        >
          {/* Image */}
          <div className="relative w-full overflow-hidden border border-brand-gold/10 bg-[#222] shadow-2xl lg:col-span-6 aspect-[4/3] lg:aspect-[16/10]">
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1.0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=1600"
                alt="Haute Joaillerie Statement Piece"
                fill
                placeholder="blur"
                blurDataURL={CHARCOAL_BLUR_DATA_URL}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </motion.div>
            <div className="absolute inset-0 ring-1 ring-brand-gold/10 ring-inset pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-5 lg:col-span-4 lg:pl-4">
            <span className="section-label text-brand-gold">Haute Joaillerie</span>
            <h2 className="font-serif text-[2.25rem] lg:text-[3.25rem] font-light text-white leading-none tracking-[0.04em]">
              Treasures<br className="hidden lg:block" /> of Exception
            </h2>
            <div className="w-8 h-px bg-brand-gold/60" />
            <p className="text-[0.8125rem] text-brand-cream/65 leading-[1.9] font-light max-w-sm">
              Uniting rare gems of peerless character with dazzling metalwork, Yen Nhi Jewerly&rsquo;s High Jewelry creations embody the height of pure artistic expression. Each asymmetric setting and poetic complication tells a unique tale of magic, luck, and timeless love.
            </p>
            <Link
              href="/collections?search=Snowflake"
              className="mt-3 btn-luxury btn-luxury-gold text-[0.6875rem]"
            >
              Explore High Jewelry
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
