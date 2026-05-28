"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CREAM_BLUR_DATA_URL } from "@/lib/constants";

import { SITE_IMAGES } from "@/lib/imageConfig";

const POSTS = [
  { id: 1, image: SITE_IMAGES.social[0] },
  { id: 2, image: SITE_IMAGES.social[1] },
  { id: 3, image: SITE_IMAGES.social[2] },
  { id: 4, image: SITE_IMAGES.social[3] },
  { id: 5, image: SITE_IMAGES.social[4] },
  { id: 6, image: SITE_IMAGES.social[5] },
];

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function SocialFeed() {
  return (
    <section className="w-full bg-brand-white py-16 md:py-20">
      <div className="page-content flex flex-col gap-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="section-title text-[1.625rem] md:text-[2rem]">
            Theo Dõi Hành Trình Của Chúng Tôi
          </h2>
          <p className="text-[0.75rem] uppercase tracking-[0.22em] text-brand-gold font-light mt-1.5">
            @yennhi.jewelry
          </p>
          <div className="gold-divider" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {POSTS.map((post, i) => (
            <motion.a
              key={post.id}
              href="#"
              onClick={(e) => e.preventDefault()}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: "easeOut" }}
              className="group relative aspect-square w-full overflow-hidden border border-brand-gold/10 bg-brand-cream shadow-sm block"
            >
              <Image
                src={post.image}
                alt={`Rì Rào Store ${post.id}`}
                fill
                placeholder="blur"
                blurDataURL={CREAM_BLUR_DATA_URL}
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 33vw, 16vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-400 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-350">
                  <InstagramIcon />
                </div>
              </div>
              <div className="absolute inset-0 ring-1 ring-black/5 ring-inset pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
