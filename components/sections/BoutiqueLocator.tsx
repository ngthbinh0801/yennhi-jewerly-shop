"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { CREAM_BLUR_DATA_URL } from "@/lib/constants";
import { useRouter } from "next/navigation";

import { SITE_IMAGES } from "@/lib/imageConfig";

const FEATURED_BOUTIQUES = [
  { city: "Phú Quốc", address: "12 Trần Hưng Đạo, Dương Đông" },
];

export default function BoutiqueLocator() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) router.push(`/boutiques?search=${encodeURIComponent(query)}`);
  };

  return (
    <section className="w-full bg-brand-white section-padding overflow-hidden">
      <div className="page-content">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center"
        >
          {/* Image */}
          <div className="relative w-full overflow-hidden border border-brand-gold/15 bg-brand-cream rounded-2xl shadow-md lg:col-span-6 aspect-[4/3] lg:aspect-[16/10]">
            <Image
              src={SITE_IMAGES.sections.boutiqueLocator}
              alt="Cửa hàng Rì Rào Store"
              fill
              placeholder="blur"
              blurDataURL={CREAM_BLUR_DATA_URL}
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 ring-1 ring-brand-gold/10 ring-inset pointer-events-none" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-5 items-center lg:items-start text-center lg:text-left lg:col-span-4">
            <span className="section-label text-brand-burgundy">Cửa Hàng</span>
            <h2 className="section-title text-[2rem] lg:text-[2.75rem] leading-none">
              Ghé Thăm Cửa Hàng<br className="hidden lg:block" /> Tại Phú Quốc
            </h2>
            <div className="w-8 h-px bg-brand-gold" />
            <p className="text-[0.8125rem] text-brand-gray leading-[1.85] font-light max-w-sm">
              Hãy bước vào các không gian đầy chất thơ của chúng tôi. Trải nghiệm tư vấn trang sức cao cấp riêng biệt, định hướng bộ sưu tập cưới, và sự hiếu khách đẳng cấp từ đội ngũ nhân viên.
            </p>

            {/* Search form */}
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 mt-1">
              <div className="flex items-center gap-2 border-b border-brand-gold/30 pb-2.5 focus-within:border-brand-burgundy transition-colors duration-300">
                <input
                  type="text"
                  placeholder="Tìm kiếm theo thành phố hoặc quốc gia"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none text-[0.8125rem] text-brand-charcoal placeholder-brand-gray/55 font-light focus:outline-none select-text"
                />
                <MapPin className="w-4 h-4 text-brand-gold/70 flex-shrink-0" />
              </div>
              <button type="submit" className="btn-luxury w-full">
                Tìm Cửa Hàng
              </button>
            </form>

            {/* Featured boutiques */}
            <div className="w-full border-t border-brand-gold/10 pt-5 mt-1">
              <span className="section-label text-brand-gold mb-4 block text-left">Cửa Hàng Nổi Bật</span>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-left">
                {FEATURED_BOUTIQUES.map((b) => (
                  <button
                    key={b.city}
                    type="button"
                    onClick={() => router.push(`/boutiques?search=${encodeURIComponent(b.city)}`)}
                    className="group text-left focus:outline-none"
                  >
                    <p className="font-serif text-[0.875rem] text-brand-charcoal group-hover:text-brand-burgundy transition-colors duration-300 flex items-center gap-1">
                      {b.city}
                      <span className="text-brand-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300 text-[11px]">→</span>
                    </p>
                    <p className="text-[10px] text-brand-gray leading-relaxed font-light mt-0.5">{b.address}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
