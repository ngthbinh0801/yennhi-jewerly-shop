import React from 'react';
import Hero from '@/components/sections/Hero';
import FeaturedCollections from '@/components/sections/FeaturedCollections';
import Editorial from '@/components/sections/Editorial';
import IconicCollections from '@/components/sections/IconicCollections';
import HighJewelry from '@/components/sections/HighJewelry';
import TheMaison from '@/components/sections/TheMaison';
import Services from '@/components/sections/Services';
import BoutiqueLocator from '@/components/sections/BoutiqueLocator';
import SocialFeed from '@/components/sections/SocialFeed';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-brand-cream">
      {/* 1. Hero Carousel */}
      <Hero />

      {/* 2. Featured Collections Stagger Grid */}
      <FeaturedCollections />

      {/* 3. Editorial Storytelling Section */}
      <Editorial />

      {/* 4. Iconic Collections Snap Horizontal Carousel */}
      <IconicCollections />

      {/* 5. High Jewelry Highlight Dark Statement Piece Section */}
      <HighJewelry />

      {/* 6. The Maison Heritage Column Grid */}
      <TheMaison />

      {/* 7. Luxury Maison Client Services Section */}
      <Services />

      {/* 8. Global Boutique Locator Preview */}
      <BoutiqueLocator />

      {/* 9. Instagram Social Feed Gallery */}
      <SocialFeed />
    </div>
  );
}

