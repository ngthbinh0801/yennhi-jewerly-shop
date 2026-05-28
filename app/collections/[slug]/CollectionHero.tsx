"use client";

import Image from "next/image";

interface CollectionHeroProps {
  heroSrc: string;
  name: string;
  heroBg: string;
  isDark: boolean;
  blurDataURL: string;
}

export default function CollectionHero({
  heroSrc,
  name,
  heroBg,
  isDark,
  blurDataURL,
}: CollectionHeroProps) {
  return (
    <section
      className="relative min-h-[78vh] w-full overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: heroBg }}
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
    </section>
  );
}
