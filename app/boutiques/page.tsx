import React, { Suspense } from "react";
import { Metadata } from "next";
import BoutiquesClient from "./BoutiquesClient";

export const metadata: Metadata = {
  title: "Find a Boutique Flagship Locator | Yen Nhi Jewerly",
  description: "Locate a flagship Yen Nhi Jewerly boutique globally. Explore addresses in Paris, New York Fifth Avenue, Tokyo Ginza, London Bond Street, and book a concierge appointment.",
  keywords: "Yen Nhi Jewerly boutique, luxury jewelry shop, Fifth Avenue watch store, Ginza boutique, global boutique finder",
  openGraph: {
    title: "Find a Boutique Flagship Locator | Yen Nhi Jewerly",
    description: "Locate a flagship Yen Nhi Jewerly boutique globally and book a concierge appointment.",
    type: "website",
  },
};

export default function BoutiquesPage() {
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
      <BoutiquesClient />
    </Suspense>
  );
}
