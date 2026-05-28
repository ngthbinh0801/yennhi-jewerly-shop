import React, { Suspense } from "react";
import { Metadata } from "next";
import { COLLECTIONS_DATA } from "@/lib/mockData";
import CollectionsClient from "./CollectionsClient";

export const metadata: Metadata = {
  title: "Poetic Collections | Rì Rào Store",
  description: "Browse the legendary jewelry collections of Rì Rào Store. Explore Xà Cừ Bốn Lá, Hạt Ngọc Biển, Hoa Khơi Biển, and high jewelry lines reflecting poetry and technical mastery since 2026.",
  keywords: "Rì Rào Store collections, Xà Cừ Bốn Lá clover, Hạt Ngọc Biển rings, Hoa Khơi Biển earrings, luxury jewelry",
  openGraph: {
    title: "Poetic Collections | Rì Rào Store",
    description: "Browse the legendary jewelry collections of Rì Rào Store. Explore Xà Cừ Bốn Lá, Hạt Ngọc Biển, Hoa Khơi Biển, and high jewelry lines.",
    type: "website",
  },
};

export default function CollectionsPage() {
  return (
    <Suspense fallback={
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-brand-cream text-brand-charcoal py-24">
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-semibold mb-3">
          Haute Horlogerie & Joaillerie
        </span>
        <h2 className="text-2xl font-light font-serif tracking-[0.2em] uppercase text-brand-charcoal mb-4">
          Rì Rào Store
        </h2>
        <div className="relative w-8 h-8">
          <span className="absolute inset-0 rounded-full border-2 border-brand-gold/15" />
          <span className="absolute inset-0 rounded-full border-2 border-brand-gold border-t-transparent animate-spin" />
        </div>
      </div>
    }>
      <CollectionsClient initialCollections={COLLECTIONS_DATA} />
    </Suspense>
  );
}
