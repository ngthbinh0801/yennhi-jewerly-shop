import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS_DATA, COLLECTIONS_DATA } from "@/lib/mockData";
import ProductView from "./ProductView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate dynamic SEO metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  
  if (!product) {
    return {
      title: "Creation Not Found | Rì Rào Store",
    };
  }

  const collection = COLLECTIONS_DATA.find((c) => c.slug === product.collectionSlug);

  return {
    title: `${product.name} - ${collection?.name || ""} Jewelry | Rì Rào Store`,
    description: `${product.description.substring(0, 160)}...`,
    keywords: `${product.name}, ${collection?.name || ""}, luxury jewelry, gold jewelry`,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;

  // Find product details
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);
  if (!product) {
    notFound();
  }

  // Find matching collection details
  const collection = COLLECTIONS_DATA.find((c) => c.slug === product.collectionSlug);
  if (!collection) {
    notFound();
  }

  // Get related products from the same collection, excluding current product
  const relatedProducts = PRODUCTS_DATA.filter(
    (p) => p.collectionSlug === product.collectionSlug && p.slug !== product.slug
  ).slice(0, 4);

  return (
    <ProductView
      product={product}
      collection={collection}
      relatedProducts={relatedProducts}
    />
  );
}
