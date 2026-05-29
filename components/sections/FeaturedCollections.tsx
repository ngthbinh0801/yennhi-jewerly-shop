"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CREAM_BLUR_DATA_URL } from "@/lib/constants";

import { SITE_IMAGES } from "@/lib/imageConfig";

const FEATURED_CARDS = [
  {
    id: 1,
    name: "Dây Chuyền",
    tagline: "",
    image: SITE_IMAGES.collections.perlee,
    href: "/collections/day_chuyen_vo_so",
  },
  {
    id: 3,
    name: "Nhẫn Vỏ Ốc",
    tagline: "",
    image: SITE_IMAGES.collections.nhan,
    href: "/collections/nhan_vo_oc",
  },
  {
    id: 2,
    name: "Phụ Kiện Tóc & Túi",
    tagline: "",
    image: SITE_IMAGES.collections.alhambra,
    href: "/collections/gio_vo_so",
  },
  {
    id: 4,
    name: "Phụ Kiện Lifestyle",
    tagline: "",
    image: SITE_IMAGES.collections.guong,
    href: "/collections/guong_vo_so",
  },
  {
    id: 5,
    name: "Khuyên Tai",
    tagline: "Ánh xà cừ lung linh đung đưa bên khóe mắt",
    image: SITE_IMAGES.collections.khuyen_tai,
    href: "/collections/khuyen_tai",
  },
  {
    id: 6,
    name: "Vòng Tay",
    tagline: "",
    image: SITE_IMAGES.collections.vong_tay,
    href: "/collections/vong_tay",
  },
];

export default function FeaturedCollections() {
  return (
    <section className="w-full bg-brand-cream section-padding">
      <div className="page-content">
        {/* Section heading */}
        <div className="flex flex-col items-center text-center mb-14 md:mb-18">
          <span className="section-label mb-3">Tác Phẩm Mới</span>
          <h2 className="section-title text-[2rem] md:text-[2.75rem] lg:text-[3.25rem]">
            Những Kiệt Tác Mới Nhất
          </h2>
          <div className="gold-divider" />
          <p className="text-[0.8125rem] text-brand-gray leading-relaxed font-light max-w-lg text-center">
            Hãy bước vào vũ trụ đầy chất thơ của chúng tôi, nơi thiết kế tinh xảo kể câu chuyện về thời gian, sự duyên dáng và những lá bùa may mắn vĩnh cửu.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
          {FEATURED_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.75, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={card.href} className="group block">
                {/* Image */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-white border border-brand-gold/15 rounded-2xl shadow-sm group-hover:shadow-md group-hover:border-brand-gold/30 transition-all duration-500">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    placeholder="blur"
                    blurDataURL={CREAM_BLUR_DATA_URL}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover reveal overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brand-charcoal/85 via-brand-charcoal/40 to-transparent p-5 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="section-label text-brand-gold mb-1">Bộ Sưu Tập Tiêu Biểu</span>
                    <p className="text-[11px] text-white/90 font-light leading-relaxed">{card.tagline}</p>
                  </div>
                </div>

                {/* Label */}
                <div className="mt-4">
                  <h3 className="font-serif text-[1.25rem] font-light text-brand-charcoal group-hover:text-brand-burgundy transition-colors duration-300">
                    {card.name}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 mt-2 text-[10px] uppercase tracking-[0.2em] text-brand-gold font-semibold">
                    Khám phá
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
