"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CREAM_BLUR_DATA_URL } from "@/lib/constants";

import { SITE_IMAGES } from "@/lib/imageConfig";

const HERITAGE_CARDS = [
  {
    id: 1,
    image: SITE_IMAGES.sections.maisonHistory,
    label: "Lịch Sử",
    title: "Từ Năm 2026",
    description: "Khởi nguồn từ tình yêu mãnh liệt với nghệ thuật đá quý, xưởng chế tác của chúng tôi thiết lập những thiết kế trang sức thủ công tinh xảo, bắt đầu một hành trình phi thường của cái đẹp và tay nghề thủ công mỹ nghệ.",
    href: "/the-maison",
  },
  {
    id: 2,
    image: SITE_IMAGES.sections.maisonCraft,
    label: "Bí Quyết Savoir-Faire",
    title: "Nghệ Thuật Thủ Công",
    description: "Những nghệ nhân bậc thầy huyền thoại của chúng tôi thổi hồn vào những bản vẽ thiết kế xuất chúng tại các xưởng chế tác tinh hoa, đính đá quý một cách tài tình và đánh bóng thủ công từng hạt viền vàng rực rỡ.",
    href: "/the-maison",
  },
  {
    id: 3,
    image: SITE_IMAGES.sections.maisonSchool,
    label: "Học Viện",
    title: "Trường Nghệ Thuật Trang Sức",
    description: "Được bảo trợ bởi Rì Rào Store, học viện của chúng tôi chào đón công chúng đến khám phá thế giới bí ẩn của ngọc học, các thiết kế trang sức lịch sử và những khóa học trải nghiệm chế tác truyền thống.",
    href: "/the-maison",
  },
];

export default function TheMaison() {
  return (
    <section className="w-full bg-brand-white section-padding">
      <div className="page-content flex flex-col gap-14">
        {/* Heading */}
        <div className="text-center max-w-xl self-center w-full">
          <h2 className="section-title text-center text-[2rem] md:text-[2.75rem] [padding-left:0.06em]">
            Xưởng Chế Tác Rì Rào Store
          </h2>
          <div className="gold-divider" />
          <p className="text-[0.8125rem] text-brand-gray font-light tracking-wide">
            Di Sản Của Chất Thơ Và Sự Tinh Hoa
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {HERITAGE_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.75, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={card.href} className="group block">
                {/* Image */}
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-brand-gold/15 bg-brand-cream rounded-2xl shadow-sm group-hover:shadow-lg group-hover:border-brand-gold/30 transition-all duration-500 mb-5">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    placeholder="blur"
                    blurDataURL={CREAM_BLUR_DATA_URL}
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 ring-1 ring-black/5 ring-inset pointer-events-none" />
                </div>

                {/* Text */}
                <span className="section-label text-brand-burgundy mb-2 block">{card.label}</span>
                <h3 className="font-serif text-[1.375rem] font-light text-brand-charcoal group-hover:text-brand-burgundy transition-colors duration-300 mb-2.5">
                  {card.title}
                </h3>
                <p className="text-[0.8125rem] text-brand-gray leading-relaxed font-light mb-4 max-w-xs">
                  {card.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-brand-gold font-semibold border-b border-transparent pb-0.5 group-hover:border-brand-gold transition-all duration-300">
                  Khám phá
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
