"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    id: 1,
    name: "Personalization",
    description: "Make your creations truly unique with our bespoke engraving and custom design services.",
    href: "/contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /><path d="m15 5 3 3" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Repair & Care",
    description: "Preserve the exceptional radiance of your precious jewelry with our expert restoration and polishing.",
    href: "/contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M6 3h12l4 6-10 12L2 9Z" /><path d="M11 3 8 9l4 12" /><path d="M13 3l3 6-4 12" /><path d="M2 9h20" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Private Appointment",
    description: "Book a private appointment in one of our global boutiques for personalized expert guidance.",
    href: "/boutiques",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Authentication",
    description: "Acquire an official certificate of authenticity verifying the value and heritage of your pieces.",
    href: "/contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="w-full bg-brand-cream section-padding">
      <div className="page-content flex flex-col gap-14">
        {/* Heading */}
        <div className="text-center max-w-xl self-center w-full">
          <h2 className="section-title text-center text-[2rem] md:text-[2.75rem]">Our Services</h2>
          <div className="gold-divider" />
          <p className="text-[0.8125rem] text-brand-gray font-light">
            Dedicated care and bespoke guidance to preserve your Yen Nhi Jewerly creations
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={s.href}
                className="group flex flex-col items-center text-center bg-brand-white border border-brand-gold/10 p-8 shadow-sm hover:shadow-lg hover:border-brand-gold/25 transition-all duration-500 h-full min-h-[320px] justify-between"
              >
                {/* Icon */}
                <div className="text-brand-burgundy group-hover:text-brand-gold transition-colors duration-500 p-4 bg-brand-cream/60 group-hover:bg-brand-cream rounded-full transition-all duration-500 mb-2">
                  {s.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 flex-1 justify-center py-4">
                  <h3 className="font-serif text-[1.1875rem] font-light text-brand-charcoal group-hover:text-brand-burgundy transition-colors duration-300">
                    {s.name}
                  </h3>
                  <p className="text-[0.75rem] text-brand-gray leading-relaxed font-light max-w-[210px] mx-auto">
                    {s.description}
                  </p>
                </div>

                {/* Link */}
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-brand-gold font-semibold mt-auto">
                  Learn more
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
