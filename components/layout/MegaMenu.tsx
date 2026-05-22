"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface MegaMenuProps {
  activeItem: string;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

interface MegaMenuContent {
  featuredImage1: string;
  featuredTitle1: string;
  featuredSubtitle1: string;
  links: { category: string; items: { label: string; href: string }[] }[];
  featuredImage2: string;
  featuredTitle2: string;
  ctaText: string;
  ctaHref: string;
}

const MENU_CONTENT: Record<string, MegaMenuContent> = {
  "HIGH JEWELRY": {
    featuredImage1: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
    featuredTitle1: "Legend of Diamonds",
    featuredSubtitle1: "A brilliant history written in white and gold.",
    links: [
      {
        category: "Exquisite Collections",
        items: [
          { label: "Legend of Diamonds", href: "/collections?search=Snowflake" },
          { label: "Romeo & Juliet Collection", href: "/collections?search=Butterfly" },
          { label: "Treasure of Rubies", href: "/collections?search=spring" },
          { label: "Palais de la chance", href: "/collections?search=Alhambra" },
        ]
      },
      {
        category: "Our Artistry",
        items: [
          { label: "The Mystery Set™ Technique", href: "/the-maison" },
          { label: "Savoir-Faire Workshops", href: "/the-maison" },
          { label: "Unique Gemstones Selection", href: "/the-maison" }
        ]
      }
    ],
    featuredImage2: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&q=80&w=400",
    featuredTitle2: "Workshops Secret",
    ctaText: "Discover the Mastery",
    ctaHref: "/the-maison"
  },
  "JEWELRY": {
    featuredImage1: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
    featuredTitle1: "The Alhambra® Collection",
    featuredSubtitle1: "An icon of luck decorated with golden beads.",
    links: [
      {
        category: "Iconic Lines",
        items: [
          { label: "Alhambra®", href: "/collections/alhambra" },
          { label: "Frivole™", href: "/collections/frivole" },
          { label: "Perlée™", href: "/collections/perlee" },
          { label: "Fauna & Flora", href: "/collections/fauna-flora" }
        ]
      },
      {
        category: "Creations Types",
        items: [
          { label: "Rings", href: "/collections?category=rings" },
          { label: "Necklaces & Pendants", href: "/collections?category=necklaces" },
          { label: "Bracelets", href: "/collections?category=bracelets" },
          { label: "Earrings & Brooches", href: "/collections?category=earrings" }
        ]
      }
    ],
    featuredImage2: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80&w=400",
    featuredTitle2: "Frivole Heart Ring",
    ctaText: "Discover Frivole",
    ctaHref: "/collections/frivole"
  },
  "WATCHES": {
    featuredImage1: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800",
    featuredTitle1: "Poetic Complications",
    featuredSubtitle1: "A story of time told through fairy-tale dials.",
    links: [
      {
        category: "Watch Families",
        items: [
          { label: "Poetic Complications®", href: "/collections/poetic-complications" },
          { label: "Charms", href: "/collections?category=watches" },
          { label: "Alhambra Timepieces", href: "/collections?category=watches" },
          { label: "Sweet Alhambra", href: "/collections?category=watches" }
        ]
      },
      {
        category: "Craftsmanship",
        items: [
          { label: "Enameling Artistry", href: "/the-maison" },
          { label: "Miniature Painting", href: "/the-maison" },
          { label: "Mechanical Mastery", href: "/the-maison" }
        ]
      }
    ],
    featuredImage2: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80&w=400",
    featuredTitle2: "Lady Yen Watch",
    ctaText: "Explore Poetic Time",
    ctaHref: "/collections/poetic-complications"
  },
  "BRIDAL": {
    featuredImage1: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
    featuredTitle1: "Engagement Solitaires",
    featuredSubtitle1: "Celebrate your unique love story.",
    links: [
      {
        category: "Love Creations",
        items: [
          { label: "Engagement Rings", href: "/collections?category=rings" },
          { label: "Wedding Bands", href: "/collections?category=rings" },
          { label: "Bridal Sets", href: "/collections" },
          { label: "Unique Diamond Cut Solitaires", href: "/collections" }
        ]
      },
      {
        category: "Atelier Commitment",
        items: [
          { label: "Custom Solitaires Design", href: "/contact" },
          { label: "Diamond Excellence & Selection", href: "/the-maison" },
          { label: "Engraving Custom Service", href: "/contact" }
        ]
      }
    ],
    featuredImage2: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=400",
    featuredTitle2: "Platinum Wedding Band",
    ctaText: "Explore Wedding Bands",
    ctaHref: "/collections"
  },
  "THE ATELIER": {
    featuredImage1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    featuredTitle1: "Haute Legacy Since 2026",
    featuredSubtitle1: "A story born in the heart of timeless elegance.",
    links: [
      {
        category: "History & Heritage",
        items: [
          { label: "Our Story since 2026", href: "/the-maison" },
          { label: "Atelier Museum Collection", href: "/the-maison" },
          { label: "Exhibitions & Cultural Programs", href: "/the-maison" }
        ]
      },
      {
        category: "School of Arts",
        items: [
          { label: "The Academy of Jewelry Arts", href: "/the-maison" },
          { label: "Workshops & Classes", href: "/the-maison" },
          { label: "Young Jewelry Artisans Support", href: "/the-maison" }
        ]
      }
    ],
    featuredImage2: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400",
    featuredTitle2: "Artisan Workshops",
    ctaText: "Discover History",
    ctaHref: "/the-maison"
  }
};

export default function MegaMenu({ activeItem, onClose, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  const content = MENU_CONTENT[activeItem];

  if (!content) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute left-0 w-full bg-brand-white border-t border-brand-gold/15 shadow-2xl z-40 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-8 py-10 px-8 lg:px-12">
        {/* Left Side: Columns 1-6 (Span 6) - Featured Large Collection Image */}
        <div className="col-span-5 relative group min-h-[300px] bg-brand-cream border border-brand-gold/10 overflow-hidden rounded-sm">
          <Image
            src={content.featuredImage1}
            alt={content.featuredTitle1}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-brand-charcoal/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-brand-white">
            <span className="text-[9px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-1 block">Featured Creation</span>
            <h3 className="text-2xl font-light tracking-wide mb-2">{content.featuredTitle1}</h3>
            <p className="text-xs text-brand-white/80 leading-relaxed font-light max-w-sm">{content.featuredSubtitle1}</p>
          </div>
        </div>

        {/* Center: Columns 7-9 (Span 3) - Link Subcategories */}
        <div className="col-span-4 flex flex-col gap-8 py-2">
          {content.links.map((column) => (
            <div key={column.category}>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-3 border-b border-brand-gold/10 pb-1.5">
                {column.category}
              </h4>
              <ul className="space-y-2.5">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="text-xs text-brand-charcoal/80 hover:text-brand-burgundy tracking-wide font-light transition-colors duration-300 block hover:translate-x-1 transition-transform duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Side: Columns 10-12 (Span 3) - Secondary CTA Card */}
        <div className="col-span-3 bg-brand-cream p-5 border border-brand-gold/10 rounded-sm flex flex-col justify-between group min-h-[300px]">
          <div>
            <div className="relative w-full h-32 mb-4 overflow-hidden rounded-sm border border-brand-gold/10">
              <Image
                src={content.featuredImage2}
                alt={content.featuredTitle2}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 20vw"
              />
            </div>
            <h4 className="text-base font-light text-brand-charcoal mb-2 tracking-wide">
              {content.featuredTitle2}
            </h4>
            <p className="text-[11px] text-brand-gray leading-relaxed font-light">
              Explore the exceptional artistry of our Place Vendôme artisans.
            </p>
          </div>
          <Link
            href={content.ctaHref}
            onClick={onClose}
            className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-charcoal hover:text-brand-burgundy inline-flex items-center gap-1.5 border-t border-brand-gold/10 pt-3 group-hover:gap-2.5 transition-all duration-300 w-full mt-4"
          >
            <span>{content.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
