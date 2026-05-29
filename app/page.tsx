import React from 'react';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import FeaturedCollections from '@/components/sections/FeaturedCollections';
import Editorial from '@/components/sections/Editorial';
import IconicCollections from '@/components/sections/IconicCollections';
import Services from '@/components/sections/Services';
import BoutiqueLocator from '@/components/sections/BoutiqueLocator';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-brand-cream">
      {/* 1. Hero Carousel */}
      <Hero />

      {/* 1b. Hero Text Band */}
      <div className="w-full bg-brand-cream">
        <div className="page-content py-16 md:py-20 flex flex-col items-center text-center gap-5">
          <span className="text-[11px] uppercase tracking-[0.3em] font-semibold text-brand-charcoal/70">
            Bộ Sưu Tập Hạt Ngọc Biển
          </span>
          <h2 className="font-serif font-normal leading-[1.15] text-brand-charcoal" style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)" }}>
            Những hạt ngọc trai<br />lấp lánh nắng khơi
          </h2>
          <p className="text-[0.9rem] md:text-[1rem] leading-relaxed text-brand-charcoal/75 max-w-lg mx-auto">
            Chuỗi hạt ngọc trai nước ngọt tự nhiên kết bện thủ công mang âm hưởng bình yên từ đại dương.
          </p>
          <Link
            href="/collections/day_chuyen_vo_so"
            className="mt-2 text-xs md:text-[13px] uppercase tracking-[0.25em] font-bold border-b-2 pb-2 text-brand-charcoal border-brand-charcoal/20 hover:border-brand-burgundy hover:text-brand-burgundy transition-all duration-300"
          >
            Khám Phá Hạt Ngọc Biển
          </Link>
        </div>
      </div>

      {/* 2. Featured Collections Stagger Grid */}
      <FeaturedCollections />

      {/* 3. Editorial Storytelling Section */}
      <Editorial />

      {/* 4. Iconic Collections Snap Horizontal Carousel */}
      <IconicCollections />

      {/* 7. Luxury Maison Client Services Section */}
      <Services />

      {/* 8. Global Boutique Locator Preview */}
      <BoutiqueLocator />


    </div>
  );
}

