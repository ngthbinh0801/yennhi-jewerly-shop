import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { COLLECTIONS_DATA, PRODUCTS_DATA } from "@/lib/mockData";
import { CREAM_BLUR_DATA_URL } from "@/lib/constants";
import CollectionProducts from "./CollectionProducts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = COLLECTIONS_DATA.find((c) => c.slug === slug);
  
  if (!collection) {
    return {
      title: "Collection Not Found | Yen Nhi Jewerly",
    };
  }

  return {
    title: `${collection.name} Collection | Yen Nhi Jewerly`,
    description: `${collection.tagline}. ${collection.description.substring(0, 160)}...`,
    keywords: `${collection.name}, ${collection.category}, luxury collection, fine jewelry`,
  };
}

export default async function CollectionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Find collection details
  const collection = COLLECTIONS_DATA.find((c) => c.slug === slug);
  if (!collection) {
    notFound();
  }

  // Filter products belonging to this collection
  const collectionProducts = PRODUCTS_DATA.filter(
    (prod) => prod.collectionSlug === slug
  );

  return (
    <div className="w-full flex flex-col bg-brand-cream">
      {/* 1. Collection Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL={CREAM_BLUR_DATA_URL}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-3 block">
            {collection.category} Creations
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-brand-white font-serif tracking-widest leading-tight mb-4">
            {collection.name}
          </h1>
          <div className="gold-divider my-4 bg-brand-gold w-16" />
          <p className="text-brand-cream/90 text-sm md:text-base font-light max-w-2xl mx-auto font-sans tracking-wide">
            {collection.tagline}
          </p>
        </div>
      </section>
 
      {/* 2. Editorial Section */}
      <section className="page-content py-24 bg-brand-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Editorial Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <span className="text-xs uppercase tracking-[0.25em] text-brand-burgundy font-semibold mb-3">
              The Savoir-Faire of {collection.name}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light font-serif text-brand-charcoal mb-6 leading-tight">
              A Legacy of Poetry & Excellence
            </h2>
            <div className="w-12 h-[1px] bg-brand-gold mb-6" />
            <p className="text-brand-charcoal/80 text-sm md:text-base font-light leading-relaxed mb-6">
              {collection.description}
            </p>
            <p className="text-brand-gray text-sm font-light leading-relaxed">
              Every detail is meticulously perfected by our master artisans, merging the timeless elegance of natural diamonds and precious minerals with high precision gold bead borders. The result is a brilliant testament to our brand's artistic poetry.
            </p>
          </div>

          {/* Editorial Image Showcase */}
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden border border-brand-gold/15 p-2 bg-brand-white shadow-xl order-1 lg:order-2">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={collection.image}
                alt={`${collection.name} Craftsmanship`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transform scale-102 hover:scale-105 transition-transform duration-1000"
                placeholder="blur"
                blurDataURL={CREAM_BLUR_DATA_URL}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Products Grid Section */}
      <section className="page-content py-16 border-t border-brand-charcoal/10">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-semibold block mb-2">
            The Catalog
          </span>
          <h2 className="text-3xl md:text-4xl font-light font-serif text-brand-charcoal">
            Discover the Creations
          </h2>
          <div className="gold-divider bg-brand-gold w-12 my-4" />
          <p className="text-brand-gray text-xs md:text-sm font-light tracking-wide uppercase">
            Signature silhouettes defined by grace
          </p>
        </div>

        <CollectionProducts products={collectionProducts} />
      </section>
    </div>
  );
}
