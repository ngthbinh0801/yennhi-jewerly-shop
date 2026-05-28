"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  label: string;
  title: string[];
  subtitle: string;
  cta: string;
  href: string;
  bg: string;
  dark?: boolean;
}

const HERO_SLIDES: Slide[] = [
  {
    id: 1,
    label: "Bộ Sưu Tập Hạt Ngọc Biển",
    title: ["Những hạt ngọc trai", "lấp lánh nắng khơi"],
    subtitle: "Chuỗi hạt ngọc trai nước ngọt tự nhiên kết bện thủ công mang âm hưởng bình yên từ đại dương.",
    cta: "Khám Phá Hạt Ngọc Biển",
    href: "/collections/day_chuyen_vo_so",
    bg: "#FAF6F0",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const slide = HERO_SLIDES[current];

  const startTimer = () => {
    if (HERO_SLIDES.length <= 1) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCurrent((p) => (p + 1) % HERO_SLIDES.length), 7000);
  };
  const stopTimer = () => { if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; } };

  useEffect(() => { startTimer(); return () => stopTimer(); }, []);

  const prev = () => { startTimer(); setCurrent((p) => (p === 0 ? HERO_SLIDES.length - 1 : p - 1)); };
  const next = () => { startTimer(); setCurrent((p) => (p + 1) % HERO_SLIDES.length); };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }
  };

  const mutedColor = "text-brand-charcoal/60";

  return (
    <section
      onMouseEnter={() => { setIsHovered(true); stopTimer(); }}
      onMouseLeave={() => { setIsHovered(false); startTimer(); }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
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

      {/* Full-bleed image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <video
            src="/images/collections/logo/logo_.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Subtle dark tint to help with text contrast */}
        <div className="absolute inset-0 bg-black/5" />

        {/* Bottom fade into page background */}
        <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, #FAF6F0)" }} />
      </div>


      {/* Prev / Next — desktop only, hidden since only 1 slide exists */}
      {HERO_SLIDES.length > 1 && (
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
                aria-label="Trước"
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
                aria-label="Sau"
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </>
          )}
        </AnimatePresence>
      )}

      {/* Pagination dots — hidden since only 1 slide exists */}
      {HERO_SLIDES.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[2px] rounded-full transition-all duration-500 focus:outline-none ${
                i === current ? "w-6 bg-white" : "w-2.5 bg-white/30 hover:opacity-70"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide counter — bottom right, hidden since only 1 slide exists */}
      {HERO_SLIDES.length > 1 && (
        <div className={`absolute bottom-6 right-6 hidden md:flex items-center gap-1 z-10 text-[10px] tracking-widest tabular-nums font-light ${mutedColor}`}>
          <span>{String(current + 1).padStart(2, "0")}</span>
          <span className="opacity-40 mx-0.5">/</span>
          <span className="opacity-40">{String(HERO_SLIDES.length).padStart(2, "0")}</span>
        </div>
      )}
    </section>
  );
}
