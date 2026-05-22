"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CREAM_BLUR_DATA_URL } from "@/lib/constants";

const FEATURED_CARDS = [
  {
    id: 1,
    name: "Alhambra",
    tagline: "Iconic symbols of luck",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
    href: "/collections/alhambra",
  },
  {
    id: 2,
    name: "Perlée",
    tagline: "Pearls of gold",
    image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&q=80&w=800",
    href: "/collections/perlee",
  },
  {
    id: 3,
    name: "Frivole",
    tagline: "Delicate flowers in mirror gold",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80&w=800",
    href: "/collections/frivole",
  },
  {
    id: 4,
    name: "Lucky Spring",
    tagline: "Nature's poetry",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800",
    href: "/collections/lucky-spring",
  },
  {
    id: 5,
    name: "Magic Alhambra",
    tagline: "Asymmetric elegance",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800",
    href: "/collections/flying-butterfly",
  },
  {
    id: 6,
    name: "Lotus",
    tagline: "Floral grace",
    image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&q=80&w=800",
    href: "/collections/lotus",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="w-full bg-brand-cream section-padding">
      <div className="page-content">
        {/* Section heading */}
        <div className="text-center mb-14 md:mb-18">
          <span className="section-label mb-3">New Creations</span>
          <h2 className="section-title text-[2rem] md:text-[2.75rem] lg:text-[3.25rem]">
            The Latest Creations
          </h2>
          <div className="gold-divider" />
          <p className="text-[0.8125rem] text-brand-gray leading-relaxed font-light max-w-lg mx-auto">
            Step inside our poetic universe, where exquisite design tells the story of time, grace, and timeless lucky charms.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
          {FEATURED_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.75, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={card.href} className="group block">
                {/* Image */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-white border border-brand-gold/15 shadow-sm group-hover:shadow-md group-hover:border-brand-gold/30 transition-all duration-600">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    placeholder="blur"
                    blurDataURL={CREAM_BLUR_DATA_URL}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover reveal overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-charcoal/85 via-brand-charcoal/40 to-transparent p-5 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="section-label text-brand-gold mb-1">Signature Selection</span>
                    <p className="text-[11px] text-white/90 font-light leading-relaxed">{card.tagline}</p>
                  </div>
                </div>

                {/* Label */}
                <div className="mt-4">
                  <h3 className="font-serif text-[1.25rem] font-light text-brand-charcoal group-hover:text-brand-burgundy transition-colors duration-300">
                    {card.name}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 mt-2 text-[10px] uppercase tracking-[0.2em] text-brand-gold font-semibold">
                    Discover
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
