"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ChevronDown, ChevronRight, X, ChevronLeft, ArrowRight, Truck, Gift, RefreshCw, ShieldCheck, ShoppingBag, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Product, Collection } from "@/lib/mockData";
import { CREAM_BLUR_DATA_URL } from "@/lib/constants";
import { useCart } from "@/lib/cartContext";

interface ProductViewProps {
  product: Product;
  collection: Collection;
  relatedProducts: Product[];
}

export default function ProductView({ product, collection, relatedProducts }: ProductViewProps) {
  const { addToCart } = useCart();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0],
      collectionSlug: collection.slug,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1800);
  };
  
  // Accordion state
  const [openAccordion, setOpenAccordion] = useState<string | null>("materials");

  // Zoom on Hover state
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({
    transformOrigin: "center center",
    transform: "scale(1)"
  });

  const mainImageRef = useRef<HTMLDivElement>(null);

  // Zoom calculations based on cursor percentage position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mainImageRef.current) return;
    const { left, top, width, height } = mainImageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2.2)"
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({
      transformOrigin: "center center",
      transform: "scale(1)"
    });
  };

  const toggleAccordion = (section: string) => {
    setOpenAccordion((prev) => (prev === section ? null : section));
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col bg-brand-cream">
      {/* Lightbox Fullscreen Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-brand-charcoal/95 backdrop-blur-md"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 text-brand-white/80 hover:text-brand-gold hover:rotate-90 transition-all duration-300"
            >
              <X size={28} />
            </button>

            {/* Left navigation arrow */}
            <button
              onClick={handlePrevImage}
              className="absolute left-6 text-brand-white/80 hover:text-brand-gold w-12 h-12 rounded-full border border-brand-white/10 hover:border-brand-gold/40 flex items-center justify-center bg-brand-charcoal/40"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Lightbox Active Image */}
            <div className="relative w-[90vw] h-[80vh] flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={product.images[activeImageIndex]}
                  alt={`${product.name} High Res`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>
            </div>

            {/* Right navigation arrow */}
            <button
              onClick={handleNextImage}
              className="absolute right-6 text-brand-white/80 hover:text-brand-gold w-12 h-12 rounded-full border border-brand-white/10 hover:border-brand-gold/40 flex items-center justify-center bg-brand-charcoal/40"
            >
              <ChevronRight size={24} />
            </button>

            {/* Gallery counter indicator */}
            <div className="absolute bottom-6 text-brand-white/60 text-xs font-sans tracking-widest uppercase">
              {activeImageIndex + 1} / {product.images.length} — {product.name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Details Wrapper */}
      <section className="page-content py-12 md:py-16">
        {/* Dynamic 2 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* LEFT SECTION (60% width - cols 7) */}
          <div className="lg:col-span-7 flex flex-col md:flex-row gap-6">
            
            {/* Desktop Vertical Thumbnails Dọc bên cạnh */}
            <div className="order-2 md:order-1 flex md:flex-col gap-3 justify-center md:justify-start w-full md:w-20 lg:w-24 shrink-0 overflow-x-auto md:overflow-x-visible">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-square w-16 md:w-20 lg:w-24 border transition-all duration-300 overflow-hidden bg-brand-white shrink-0 ${
                    activeImageIndex === idx ? "border-brand-burgundy ring-1 ring-brand-burgundy/10 shadow-sm" : "border-brand-charcoal/10 hover:border-brand-gold"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} Gallery ${idx + 1}`}
                    fill
                    sizes="100px"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={CREAM_BLUR_DATA_URL}
                  />
                </button>
              ))}
            </div>

            {/* Main Interactive Zoom Image Box */}
            <div className="order-1 md:order-2 flex-grow relative bg-brand-white border border-brand-charcoal/5 shadow-md overflow-hidden aspect-square">
              <div
                ref={mainImageRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsLightboxOpen(true)}
                className="relative w-full h-full cursor-zoom-in overflow-hidden"
              >
                <motion.div
                  style={zoomStyle}
                  className="relative w-full h-full transition-transform duration-100 ease-out"
                >
                  <Image
                    src={product.images[activeImageIndex]}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={CREAM_BLUR_DATA_URL}
                  />
                </motion.div>
              </div>

              {/* Wishlist floating toggle */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                aria-label="Wishlist toggle"
                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-brand-white/80 backdrop-blur-sm shadow-sm border border-brand-charcoal/5 hover:border-brand-burgundy/30 flex items-center justify-center transition-all duration-300 text-brand-charcoal hover:text-brand-burgundy hover:scale-105"
              >
                <Heart
                  size={20}
                  className={`transition-transform duration-300 ${
                    isWishlisted ? "fill-brand-burgundy text-brand-burgundy scale-110" : "text-brand-charcoal hover:scale-110"
                  }`}
                />
              </button>

              {/* Click to expand instruction */}
              <div className="absolute bottom-4 left-4 bg-brand-charcoal/60 backdrop-blur-sm text-brand-white text-[11px] uppercase tracking-[0.2em] px-2.5 py-1 pointer-events-none rounded-none font-medium">
                Hover to Zoom | Click to Expand
              </div>
            </div>

          </div>

          {/* RIGHT SECTION (40% width - cols 5, sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col items-start bg-brand-white border border-brand-charcoal/5 p-6 md:p-8 lg:p-10 shadow-lg">
            
            {/* Luxury Breadcrumb */}
            <nav className="text-xs uppercase tracking-[0.18em] text-brand-gray mb-6 flex flex-wrap items-center gap-1.5 font-medium">
              <Link href="/" className="hover:text-brand-burgundy">Home</Link>
              <ChevronRight size={10} className="text-brand-gold/60" />
              <Link href="/collections" className="hover:text-brand-burgundy">Collections</Link>
              <ChevronRight size={10} className="text-brand-gold/60" />
              <Link href={`/collections/${collection.slug}`} className="hover:text-brand-burgundy">{collection.name}</Link>
              <ChevronRight size={10} className="text-brand-gold/60" />
              <span className="text-brand-charcoal font-semibold">{product.name}</span>
            </nav>

            {/* Collection identifier Tag */}
            <span className="text-sm uppercase tracking-[0.2em] text-brand-burgundy font-semibold mb-2">
              {collection.name} Collection
            </span>

            {/* Product Name */}
            <h1 className="text-3xl md:text-4xl font-light font-serif text-brand-charcoal tracking-wide mb-3 leading-tight">
              {product.name}
            </h1>

            {/* Product Price */}
            <div className="text-xl font-semibold uppercase tracking-wider text-brand-charcoal mb-4">
              {product.price}
            </div>

            <div className="w-12 h-[1px] bg-brand-gold/40 mb-6" />

            {/* Poetic Short Description */}
            <p className="text-brand-charcoal/80 text-base font-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Specifications Accordion system */}
            <div className="w-full border-t border-brand-charcoal/10 mb-8 flex flex-col">
              
              {/* Accordion 1: Materials */}
              <div className="border-b border-brand-charcoal/10">
                <button
                  onClick={() => toggleAccordion("materials")}
                  className="w-full py-4 flex items-center justify-between text-left text-sm font-semibold uppercase tracking-wider text-brand-charcoal hover:text-brand-burgundy transition-colors duration-300"
                >
                  <span>Materials & Settings</span>
                  <ChevronDown
                    size={14}
                    className={`text-brand-gold transition-transform duration-300 ${
                      openAccordion === "materials" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openAccordion === "materials" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-4 text-sm text-brand-gray font-light leading-relaxed">
                        {product.specifications.materials}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Accordion 2: Dimensions */}
              <div className="border-b border-brand-charcoal/10">
                <button
                  onClick={() => toggleAccordion("dimensions")}
                  className="w-full py-4 flex items-center justify-between text-left text-sm font-semibold uppercase tracking-wider text-brand-charcoal hover:text-brand-burgundy transition-colors duration-300"
                >
                  <span>Dimensions & Fit</span>
                  <ChevronDown
                    size={14}
                    className={`text-brand-gold transition-transform duration-300 ${
                      openAccordion === "dimensions" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openAccordion === "dimensions" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-4 text-sm text-brand-gray font-light leading-relaxed">
                        {product.specifications.dimensions}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Accordion 3: Reference */}
              <div className="border-b border-brand-charcoal/10">
                <button
                  onClick={() => toggleAccordion("reference")}
                  className="w-full py-4 flex items-center justify-between text-left text-sm font-semibold uppercase tracking-wider text-brand-charcoal hover:text-brand-burgundy transition-colors duration-300"
                >
                  <span>Reference & Care</span>
                  <ChevronDown
                    size={14}
                    className={`text-brand-gold transition-transform duration-300 ${
                      openAccordion === "reference" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openAccordion === "reference" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-4 text-xs text-brand-gray font-light leading-relaxed flex flex-col gap-1">
                        <div><strong className="text-brand-charcoal/80 font-medium">Ref No:</strong> {product.specifications.reference}</div>
                        <div>Every creation is entirely handmade: stone weights and metal carats may differ slightly from one creation to another.</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

            {/* CTA Buttons */}
            <div className="w-full flex flex-col gap-4 mb-6">
              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 btn-luxury flex items-center justify-center font-sans uppercase font-semibold text-xs tracking-widest text-center transition-all duration-300 ${
                  addedToCart
                    ? "bg-brand-charcoal border-brand-charcoal text-brand-white"
                    : "btn-luxury-gold"
                }`}
              >
                <AnimatePresence mode="wait">
                  {addedToCart ? (
                    <motion.span
                      key="added"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="flex items-center gap-2"
                    >
                      <Check size={14} /> Added to Cart
                    </motion.span>
                  ) : (
                    <motion.span
                      key="add"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="flex items-center gap-2"
                    >
                      <ShoppingBag size={14} />
                      Add to Cart
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {/* Contact boutique - primary burgundy */}
              <Link
                href="/contact"
                className="w-full py-4 btn-luxury btn-luxury-burgundy flex items-center justify-center font-sans uppercase font-semibold text-xs tracking-widest text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                Contact a Boutique
              </Link>

              {/* Wishlist toggle - outline styling */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`w-full py-3.5 px-6 border text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${
                  isWishlisted
                    ? "bg-brand-burgundy/5 border-brand-burgundy text-brand-burgundy font-bold shadow-sm"
                    : "bg-transparent border-brand-charcoal/20 text-brand-charcoal hover:border-brand-burgundy hover:text-brand-burgundy"
                }`}
              >
                <Heart size={14} className={isWishlisted ? "fill-brand-burgundy text-brand-burgundy" : ""} />
                {isWishlisted ? "Saved in Wishlist" : "Add to Wishlist"}
              </button>

              {/* Book Appointment text link */}
              <Link
                href="/boutiques"
                className="w-full py-2 flex items-center justify-center gap-1.5 text-xs uppercase font-semibold tracking-widest text-brand-charcoal hover:text-brand-burgundy group transition-all duration-300"
              >
                Book an Appointment <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>

            {/* Luxury Client Services Info grid */}
            <div className="w-full grid grid-cols-2 gap-4 border-t border-brand-charcoal/10 pt-6">
              <div className="flex items-start gap-2.5">
                <Truck size={16} className="text-brand-burgundy shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-0.5">Complimentary Shipping</span>
                  <span className="text-xs text-brand-gray font-light">Free secure delivery</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Gift size={16} className="text-brand-burgundy shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-0.5">Signature Gift Wrap</span>
                  <span className="text-xs text-brand-gray font-light">Elegant packaging</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <RefreshCw size={16} className="text-brand-burgundy shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-0.5">Complimentary Returns</span>
                  <span className="text-xs text-brand-gray font-light">30-day exchange window</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck size={16} className="text-brand-burgundy shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal mb-0.5">Maison Authenticity</span>
                  <span className="text-xs text-brand-gray font-light">Certified original jewelry</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Related Creations Section ("You may also like") */}
      {relatedProducts.length > 0 && (
        <section className="w-full py-24 border-t border-brand-charcoal/10 bg-brand-white">
          <div className="page-content">
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold block mb-2">
                Select Curations
              </span>
              <h2 className="text-3xl md:text-4xl font-light font-serif text-brand-charcoal">
                You May Also Like
              </h2>
              <div className="gold-divider bg-brand-gold w-12 my-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((prod) => (
                <Link
                  key={prod.slug}
                  href={`/products/${prod.slug}`}
                  className="group flex flex-col bg-brand-cream border border-brand-charcoal/5 p-4 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-brand-white border border-brand-charcoal/5 mb-4">
                    <Image
                      src={prod.images[0]}
                      alt={prod.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 250px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      placeholder="blur"
                      blurDataURL={CREAM_BLUR_DATA_URL}
                    />
                  </div>
                  <div className="text-center flex flex-col items-center flex-grow justify-between">
                    <div className="flex flex-col items-center">
                      <span className="text-xs uppercase tracking-wider text-brand-gold font-semibold mb-1">
                        {prod.material.split(",")[0]}
                      </span>
                      <h3 className="text-base font-light font-serif text-brand-charcoal group-hover:text-brand-burgundy transition-colors duration-300 mb-1 px-1 line-clamp-1">
                        {prod.name}
                      </h3>
                    </div>
                    <span className="text-sm font-semibold text-brand-charcoal uppercase tracking-wider mt-2 block">
                      {prod.price}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
