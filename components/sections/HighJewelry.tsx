"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { CHARCOAL_BLUR_DATA_URL } from "@/lib/constants";

import { SITE_IMAGES } from "@/lib/imageConfig";

export default function HighJewelry() {
  return (
    <section className="w-full bg-brand-charcoal text-brand-cream section-padding overflow-hidden">
      <div className="page-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-10 gap-12 lg:gap-16 items-center"
        >
          {/* Image */}
          <div className="relative w-full overflow-hidden border border-brand-gold/10 bg-[#222] shadow-2xl lg:col-span-6 aspect-[4/3] lg:aspect-[16/10]">
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1.0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={SITE_IMAGES.sections.highJewelryShowcase}
                alt="Haute Joaillerie Statement Piece"
                fill
                placeholder="blur"
                blurDataURL={CHARCOAL_BLUR_DATA_URL}
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </motion.div>
            <div className="absolute inset-0 ring-1 ring-brand-gold/10 ring-inset pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5 items-center lg:items-start text-center lg:text-left lg:col-span-4 lg:pl-4">
            <span className="section-label text-brand-gold">Trang Sức Cao Cấp</span>
            <h2 className="font-serif text-[2.25rem] lg:text-[3.25rem] font-light text-white leading-none tracking-[0.04em]">
              Tuyệt Tác<br className="hidden lg:block" /> Độc Bản Xuất Chúng
            </h2>
            <div className="w-8 h-px bg-brand-gold/60" />
            <p className="text-[0.8125rem] text-brand-cream/65 leading-[1.9] font-light max-w-sm">
              Kết hợp những viên đá quý hiếm có vô song với tay nghề chế tác kim loại rực rỡ, các tạo tác Trang sức Cao cấp (Haute Joaillerie) của Rì Rào Store thể hiện đỉnh cao của sự biểu đạt nghệ thuật thuần khiết. Mỗi thiết kế bất đối xứng và tuyệt tác thơ mộng đều kể một câu chuyện độc bản về phép màu, sự may mắn và tình yêu vĩnh cửu.
            </p>
            <Link
              href="/collections?search=Sao Biển Tuyết"
              className="mt-3 btn-luxury btn-luxury-gold text-[0.6875rem]"
            >
              Khám Phá Trang Sức Cao Cấp
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
