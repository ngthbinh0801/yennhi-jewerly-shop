"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { CREAM_BLUR_DATA_URL } from "@/lib/constants";

const ICONIC_ITEMS = [
  { id: 1, name: "Alhambra", description: "Iconic symbols of luck since 1968", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800", href: "/collections/alhambra" },
  { id: 2, name: "Perlée", description: "The sparkling radiance of golden beads", image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&q=80&w=800", href: "/collections/perlee" },
  { id: 3, name: "Frivole", description: "Poetic flowers in mirror-polished gold", image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80&w=800", href: "/collections/frivole" },
  { id: 4, name: "Lucky Spring", description: "A joyful celebration of springtime", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800", href: "/collections/lucky-spring" },
  { id: 5, name: "Magic Alhambra", description: "Playful asymmetry and bold scales", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800", href: "/collections/flying-butterfly" },
  { id: 6, name: "Vintage Alhambra", description: "Faithful celebration of the 1968 original", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800", href: "/collections/alhambra" },
  { id: 7, name: "Lotus", description: "Sacred flowers reflecting pure beauty", image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?auto=format&fit=crop&q=80&w=800", href: "/collections/lotus" },
];

export default function IconicCollections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 5);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    checkScroll();
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!containerRef.current) return;
    const w = window.innerWidth >= 768 ? 432 : 304;
    containerRef.current.scrollBy({ left: dir === "left" ? -w : w, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-brand-cream section-padding group/carousel">
      {/* Heading */}
      <div className="page-content text-center mb-12">
        <h2 className="section-title text-[2rem] md:text-[2.75rem]">Iconic Collections</h2>
        <div className="gold-divider" />
        <p className="text-[0.8125rem] text-brand-gray font-light max-w-md mx-auto">
          Timeless pieces that define the poetic heritage of Yen Nhi Jewerly
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Left arrow */}
        {canLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex p-2.5 bg-brand-white/90 hover:bg-brand-white text-brand-gold hover:text-brand-burgundy border border-brand-gold/20 shadow-md backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/carousel:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        {/* Right arrow */}
        {canRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex p-2.5 bg-brand-white/90 hover:bg-brand-white text-brand-gold hover:text-brand-burgundy border border-brand-gold/20 shadow-md backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/carousel:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Scrollable track */}
        <div
          ref={containerRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 scrollbar-hide px-[clamp(1.25rem,4vw,4rem)]"
        >
          {ICONIC_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex-none w-[272px] md:w-[384px] snap-start group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden border border-brand-gold/10 bg-brand-cream shadow-sm hover:shadow-lg hover:border-brand-gold/25 transition-all duration-500">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  placeholder="blur"
                  blurDataURL={CREAM_BLUR_DATA_URL}
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-[1100ms] ease-out"
                  sizes="(max-width: 768px) 272px, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-serif text-[1.375rem] text-white leading-tight">{item.name}</h3>
                  <p className="text-[10px] tracking-[0.15em] mt-1.5 text-brand-gold/85 font-light uppercase">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
