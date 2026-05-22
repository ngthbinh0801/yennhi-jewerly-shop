"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CREAM_BLUR_DATA_URL, CHARCOAL_BLUR_DATA_URL } from "@/lib/constants";

interface Slide {
  id: number;
  label: string;
  title: string[];
  subtitle: string;
  cta: string;
  href: string;
  image: string;
  bg: string;
  dark?: boolean;
}

const HERO_SLIDES: Slide[] = [
  {
    id: 1,
    label: "Perlée Collection",
    title: ["Golden beads meet", "precious stones"],
    subtitle: "The Perlée collection combines pure lines and refined craftsmanship",
    cta: "Compose Your Set",
    href: "/collections/perlee",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=85&w=1400",
    bg: "#C9D5C1",
  },
  {
    id: 2,
    label: "Alhambra",
    title: ["Icons of luck", "since 1968"],
    subtitle: "Four-leaf clover motifs that have symbolised luck for generations",
    cta: "Discover Alhambra",
    href: "/collections/alhambra",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=85&w=1400",
    bg: "#EDE8DD",
  },
  {
    id: 3,
    label: "Haute Joaillerie",
    title: ["Treasures", "of Exception"],
    subtitle: "Each creation embodies the height of pure artistic expression",
    cta: "Explore High Jewelry",
    href: "/collections?search=Snowflake",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=85&w=1400",
    bg: "#1E1E1E",
    dark: true,
  },
  {
    id: 4,
    label: "Lucky Spring",
    title: ["An ode to", "nature's renewal"],
    subtitle: "Floral creations that capture the poetry of the natural world",
    cta: "Discover the Collection",
    href: "/collections/lucky-spring",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=85&w=1400",
    bg: "#E4EBDF",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const slide = HERO_SLIDES[current];

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent((p) => (p + 1) % HERO_SLIDES.length), 7000);
  };
  const stopTimer = () => { if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; } };

  useEffect(() => { startTimer(); return () => stopTimer(); }, []);

  const prev = () => setCurrent((p) => (p === 0 ? HERO_SLIDES.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p + 1) % HERO_SLIDES.length);

  const textColor = slide.dark ? "text-white" : "text-brand-charcoal";
  const mutedColor = slide.dark ? "text-white/60" : "text-brand-charcoal/55";
  const labelColor = slide.dark ? "text-white/50" : "text-brand-charcoal/45";
  const ctaColor = slide.dark
    ? "text-white border-white/50 hover:border-white"
    : "text-brand-charcoal border-brand-charcoal/40 hover:border-brand-charcoal";
  const dotBase = slide.dark ? "bg-white/30" : "bg-brand-charcoal/25";
  const dotActive = slide.dark ? "bg-white" : "bg-brand-charcoal";

  return (
    <section
      onMouseEnter={() => { setIsHovered(true); stopTimer(); }}
      onMouseLeave={() => { setIsHovered(false); startTimer(); }}
      className="relative w-full overflow-hidden select-none"
      style={{ backgroundColor: slide.bg, height: "100svh", minHeight: 560 }}
    >
      {/* Background color crossfade */}
      <AnimatePresence>
        <motion.div
          key={`bg-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0"
          style={{ backgroundColor: slide.bg }}
        />
      </AnimatePresence>

      {/* Split layout */}
      <div className="relative h-full grid grid-cols-1 lg:grid-cols-[58fr_42fr]">

        {/* ── Left: Image ── */}
        <div className="relative h-[50%] lg:h-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${current}`}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.title.join(" ")}
                fill
                priority
                placeholder="blur"
                blurDataURL={slide.dark ? CHARCOAL_BLUR_DATA_URL : CREAM_BLUR_DATA_URL}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Soft right-edge fade into background color on desktop */}
          <div
            className="absolute inset-y-0 right-0 w-24 hidden lg:block pointer-events-none"
            style={{ background: `linear-gradient(to right, transparent, ${slide.bg})` }}
          />
        </div>

        {/* ── Right: Text ── */}
        <div className="flex flex-col justify-center px-8 md:px-12 lg:px-14 xl:px-20 py-10 lg:py-0 h-[50%] lg:h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4 lg:gap-5 max-w-sm"
            >
              {/* Label */}
              <span className={`text-[10px] uppercase tracking-[0.25em] font-medium ${labelColor}`}>
                {slide.label}
              </span>

              {/* Heading */}
              <h2 className={`font-serif font-light leading-[1.05] ${textColor}`}
                style={{ fontSize: "clamp(2rem, 3.5vw, 3.25rem)" }}>
                {slide.title.map((line, i) => (
                  <React.Fragment key={i}>{line}{i < slide.title.length - 1 && <br />}</React.Fragment>
                ))}
              </h2>

              {/* Subtitle */}
              <p className={`text-[0.8125rem] leading-relaxed font-light max-w-[22rem] ${mutedColor}`}>
                {slide.subtitle}
              </p>

              {/* CTA */}
              <Link
                href={slide.href}
                className={`self-start mt-2 text-[0.6875rem] uppercase tracking-[0.22em] font-medium border-b pb-1 transition-all duration-300 focus:outline-none ${ctaColor}`}
              >
                {slide.cta}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Prev / Next — desktop only, on hover */}
      <AnimatePresence>
        {isHovered && (
          <>
            <motion.button
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={prev}
              className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex p-2.5 rounded-full border transition-all duration-300 focus:outline-none backdrop-blur-sm ${
                slide.dark
                  ? "border-white/20 text-white hover:border-white bg-black/10 hover:bg-black/30"
                  : "border-brand-charcoal/15 text-brand-charcoal hover:border-brand-charcoal/50 bg-white/20 hover:bg-white/50"
              }`}
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={next}
              className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex p-2.5 rounded-full border transition-all duration-300 focus:outline-none backdrop-blur-sm ${
                slide.dark
                  ? "border-white/20 text-white hover:border-white bg-black/10 hover:bg-black/30"
                  : "border-brand-charcoal/15 text-brand-charcoal hover:border-brand-charcoal/50 bg-white/20 hover:bg-white/50"
              }`}
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Pagination dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[2px] rounded-full transition-all duration-500 focus:outline-none ${
              i === current ? `w-6 ${dotActive}` : `w-2.5 ${dotBase} hover:opacity-70`
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter — bottom right */}
      <div className={`absolute bottom-6 right-6 hidden md:flex items-center gap-1 z-10 text-[10px] tracking-widest tabular-nums font-light ${mutedColor}`}>
        <span>{String(current + 1).padStart(2, "0")}</span>
        <span className="opacity-40 mx-0.5">/</span>
        <span className="opacity-40">{String(HERO_SLIDES.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
