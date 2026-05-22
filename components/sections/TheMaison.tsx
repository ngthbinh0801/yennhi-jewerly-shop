"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CREAM_BLUR_DATA_URL } from "@/lib/constants";

const HERITAGE_CARDS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800",
    label: "History",
    title: "Since 2026",
    description: "Born from an exquisite love of gemstone artistry, our atelier establishes custom jewelry designs, starting an exceptional journey of beauty and fine craft.",
    href: "/the-maison",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800",
    label: "Savoir-Faire",
    title: "Our Craftsmanship",
    description: "Our legendary master artisans bring exceptional drawings to life at our elite workshops, masterfully setting precious stones and hand-polishing pure gold beads.",
    href: "/the-maison",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&q=80&w=800",
    label: "Academy",
    title: "School of Jewelry Arts",
    description: "Supported by Yen Nhi Jewerly, our academy invites the public to discover the secret worlds of gemology, historical jewelry designs, and ancestral crafting workshops.",
    href: "/the-maison",
  },
];

export default function TheMaison() {
  return (
    <section className="w-full bg-brand-white section-padding">
      <div className="page-content flex flex-col gap-14">
        {/* Heading */}
        <div className="text-center max-w-xl self-center w-full">
          <h2 className="section-title text-center text-[2rem] md:text-[2.75rem] [padding-left:0.06em]">
            The Yen Nhi Jewerly Atelier
          </h2>
          <div className="gold-divider" />
          <p className="text-[0.8125rem] text-brand-gray font-light tracking-wide">
            A Heritage of Poetry and Excellence
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {HERITAGE_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.75, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={card.href} className="group block">
                {/* Image */}
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-brand-gold/15 bg-brand-cream shadow-sm group-hover:shadow-lg group-hover:border-brand-gold/30 transition-all duration-500 mb-5">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    placeholder="blur"
                    blurDataURL={CREAM_BLUR_DATA_URL}
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 ring-1 ring-black/5 ring-inset pointer-events-none" />
                </div>

                {/* Text */}
                <span className="section-label text-brand-burgundy mb-2 block">{card.label}</span>
                <h3 className="font-serif text-[1.375rem] font-light text-brand-charcoal group-hover:text-brand-burgundy transition-colors duration-300 mb-2.5">
                  {card.title}
                </h3>
                <p className="text-[0.8125rem] text-brand-gray leading-relaxed font-light mb-4 max-w-xs">
                  {card.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-brand-gold font-semibold border-b border-transparent pb-0.5 group-hover:border-brand-gold transition-all duration-300">
                  Discover
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
