"use client";

import { useState } from "react";
import Image from "next/image";

interface CollectionHeroProps {
  heroSrc: string;
  name: string;
  categoryLabel: string;
  tagline: string;
  heroBg: string;
  isDark: boolean;
  heroText: string;
  heroMuted: string;
  blurDataURL: string;
}

export default function CollectionHero({
  heroSrc,
  name,
  categoryLabel,
  tagline,
  heroBg,
  isDark,
  heroText,
  heroMuted,
  blurDataURL,
}: CollectionHeroProps) {
  const [visible, setVisible] = useState(false);

  return (
    <section
      className="relative min-h-[78vh] w-full overflow-hidden flex items-center justify-center cursor-pointer"
      style={{ backgroundColor: heroBg }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => setVisible((v) => !v)}
    >
      <Image
        src={heroSrc}
        alt={name}
        fill
        priority
        sizes="100vw"
        className="object-contain object-center"
        placeholder="blur"
        blurDataURL={blurDataURL}
      />

      {/* Lateral fades */}
      <div
        className="absolute inset-y-0 left-0 w-20 md:w-48 lg:w-72 pointer-events-none z-10"
        style={{ background: `linear-gradient(to right, ${heroBg}, transparent)` }}
      />
      <div
        className="absolute inset-y-0 right-0 w-20 md:w-48 lg:w-72 pointer-events-none z-10"
        style={{ background: `linear-gradient(to left, ${heroBg}, transparent)` }}
      />

      {/* Bottom fade → charcoal */}
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-b from-transparent to-[#1B2A30] pointer-events-none z-20" />

      {/* Text — hiện khi hover / tap */}
      <div
        className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-6 transition-opacity duration-500"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <span
          className="inline-block text-[9px] uppercase tracking-[0.45em] font-semibold mb-5"
          style={{ color: heroMuted }}
        >
          {categoryLabel} · Thủ Công Mỹ Nghệ
        </span>
        <h1
          className="font-serif text-[2.75rem] md:text-[4.5rem] lg:text-[5.5rem] font-light tracking-[0.04em] leading-none mb-5"
          style={{ color: heroText }}
        >
          {name}
        </h1>
        <div className="flex items-center justify-center gap-2.5 mb-4">
          <div className="w-8 h-px bg-brand-gold/70" />
          <div className="w-1 h-1 rounded-full bg-brand-gold/50" />
          <div className="w-8 h-px bg-brand-gold/70" />
        </div>
        <p
          className="text-[0.8125rem] font-light tracking-[0.1em] max-w-xs mx-auto"
          style={{ color: heroMuted }}
        >
          {tagline}
        </p>
      </div>
    </section>
  );
}
