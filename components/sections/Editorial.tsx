import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Editorial() {
  return (
    <section className="w-full bg-brand-white section-padding">
      <div className="page-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-brand-gold/15 bg-brand-cream shadow-md">
            <Image
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=1200"
              alt="Atelier Craftsmanship"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5 lg:gap-6 max-w-md">
            <span className="section-label">The Art of Craftsmanship</span>
            <h2 className="section-title text-[2.5rem] lg:text-[3.25rem] leading-none">
              Savoir-Faire<br />Since 2026
            </h2>
            <div className="w-8 h-px bg-brand-gold" />
            <p className="text-[0.8125rem] text-brand-gray leading-[1.85] font-light">
              Within our elite high jewelry workshop, our master jewelers—the &ldquo;Main d&rsquo;Or&rdquo;—perpetuate ancestral techniques. Every stone selection, mirror polish, and delicate setting transforms gold and precious minerals into poetic, living treasures of luck and love.
            </p>
            <Link
              href="/the-maison"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] font-semibold text-brand-charcoal hover:text-brand-burgundy border-b border-brand-charcoal/30 hover:border-brand-burgundy pb-1 transition-all duration-300 self-start mt-2"
            >
              Explore Our Heritage
              <span className="text-brand-gold">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
