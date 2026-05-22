import React, { Suspense } from "react";
import { Metadata } from "next";
import { COLLECTIONS_DATA } from "@/lib/mockData";
import CollectionsClient from "./CollectionsClient";

export const metadata: Metadata = {
  title: "Poetic Collections | Yen Nhi Jewerly",
  description: "Browse the legendary jewelry collections of Yen Nhi Jewerly. Explore Alhambra, Perlée, Frivole, and high jewelry lines reflecting poetry and technical mastery since 2026.",
  keywords: "Yen Nhi Jewerly collections, Alhambra clover, Perlee rings, Frivole earrings, luxury jewelry",
  openGraph: {
    title: "Poetic Collections | Yen Nhi Jewerly",
    description: "Browse the legendary jewelry collections of Yen Nhi Jewerly. Explore Alhambra, Perlée, Frivole, and high jewelry lines.",
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
          Yen Nhi Jewerly
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
