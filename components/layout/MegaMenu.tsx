"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface MegaMenuProps {
  activeItem: string;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

interface MegaMenuContent {
  featuredImage1: string;
  featuredTitle1: string;
  featuredSubtitle1: string;
  links: { category: string; items: { label: string; href: string }[] }[];
  featuredImage2: string;
  featuredTitle2: string;
  ctaText: string;
  ctaHref: string;
}

import { SITE_IMAGES } from "@/lib/imageConfig";

const MENU_CONTENT: Record<string, MegaMenuContent> = {
  "HIGH JEWELRY": {
    featuredImage1: SITE_IMAGES.megaMenu.highJewelryFeatured1,
    featuredTitle1: "Huyền thoại Kim cương",
    featuredSubtitle1: "Một lịch sử lộng lẫy được viết bằng vàng và bạch kim.",
    links: [
      {
        category: "Kiệt Tác Tuyệt Mỹ",
        items: [
          { label: "Huyền thoại Kim cương", href: "/collections?search=Sao Biển Tuyết" },
          { label: "Bộ sưu tập Romeo & Juliet", href: "/collections?search=Butterfly" },
          { label: "Kho báu đá Ruby đỏ", href: "/collections?search=spring" },
          { label: "Cung điện của sự may mắn", href: "/collections?search=Xà Cừ Bốn Lá" },
        ]
      },
      {
        category: "Bí Quyết Chế Tác",
        items: [
          { label: "Kỹ thuật đính đá ẩn Mystery Set™", href: "/the-maison" },
          { label: "Xưởng thủ công Savoir-Faire", href: "/the-maison" },
          { label: "Tuyển chọn đá quý độc bản", href: "/the-maison" }
        ]
      }
    ],
    featuredImage2: SITE_IMAGES.megaMenu.highJewelryFeatured2,
    featuredTitle2: "Bí mật từ Xưởng chế tác",
    ctaText: "Khám phá tay nghề thủ công",
    ctaHref: "/the-maison"
  },
  "JEWELRY": {
    featuredImage1: SITE_IMAGES.megaMenu.jewelryFeatured1,
    featuredTitle1: "Bộ sưu tập Xà Cừ Bốn Lá®",
    featuredSubtitle1: "Một biểu tượng may mắn đặc trưng được viền bằng các hạt hạt vàng tinh tế.",
    links: [
      {
        category: "Dòng Sản Phẩm Kinh Điển",
        items: [
          { label: "Xà Cừ Bốn Lá®", href: "/collections/alhambra" },
          { label: "Hoa Khơi Biển™", href: "/collections/frivole" },
          { label: "Hạt Ngọc Biển™", href: "/collections/perlee" },
          { label: "Rạn San Hô", href: "/collections/fauna-flora" }
        ]
      },
      {
        category: "Phân Loại Kiệt Tác",
        items: [
          { label: "Nhẫn", href: "/collections?category=rings" },
          { label: "Vòng cổ & Mặt dây chuyền", href: "/collections?category=necklaces" },
          { label: "Vòng tay", href: "/collections?category=bracelets" },
          { label: "Bông tai & Trâm cài", href: "/collections?category=earrings" }
        ]
      }
    ],
    featuredImage2: SITE_IMAGES.megaMenu.jewelryFeatured2,
    featuredTitle2: "Nhẫn Trái tim Hoa Khơi Biển",
    ctaText: "Khám phá Hoa Khơi Biển",
    ctaHref: "/collections/frivole"
  },
  "WATCHES": {
    featuredImage1: SITE_IMAGES.megaMenu.watchesFeatured1,
    featuredTitle1: "Mặt số Thơ mộng (Nhịp Điệu Thủy Triều)",
    featuredSubtitle1: "Câu chuyện thời gian được kể qua những mặt số cổ tích cơ khí tinh xảo.",
    links: [
      {
        category: "Các Dòng Đồng Hồ",
        items: [
          { label: "Nhịp Điệu Thủy Triều®", href: "/collections/poetic-complications" },
          { label: "Đồng hồ Charms", href: "/collections?category=watches" },
          { label: "Đồng hồ Xà Cừ Bốn Lá", href: "/collections?category=watches" },
          { label: "Sweet Xà Cừ Bốn Lá", href: "/collections?category=watches" }
        ]
      },
      {
        category: "Nghệ Thuật Chế Tác",
        items: [
          { label: "Nghệ thuật tráng men thủ công", href: "/the-maison" },
          { label: "Kỹ thuật vẽ tiểu họa", href: "/the-maison" },
          { label: "Đỉnh cao cơ khí chế tác", href: "/the-maison" }
        ]
      }
    ],
    featuredImage2: SITE_IMAGES.megaMenu.watchesFeatured2,
    featuredTitle2: "Đồng hồ Lady Yen",
    ctaText: "Khám phá Thời gian Thơ mộng",
    ctaHref: "/collections/poetic-complications"
  },
  "BRIDAL": {
    featuredImage1: SITE_IMAGES.megaMenu.bridalFeatured1,
    featuredTitle1: "Nhẫn Đính Hôn Solitaire",
    featuredSubtitle1: "Tôn vinh câu chuyện tình yêu độc nhất của bạn.",
    links: [
      {
        category: "Tác Phẩm Tình Yêu",
        items: [
          { label: "Nhẫn đính hôn", href: "/collections?category=rings" },
          { label: "Nhẫn cưới", href: "/collections?category=rings" },
          { label: "Bộ trang sức cưới", href: "/collections" },
          { label: "Nhẫn cưới Solitaire đính kim cương độc bản", href: "/collections" }
        ]
      },
      {
        category: "Cam Kết từ Xưởng Chế Tác",
        items: [
          { label: "Thiết kế nhẫn Solitaire theo yêu cầu", href: "/contact" },
          { label: "Tuyển chọn kim cương chất lượng tối cao", href: "/the-maison" },
          { label: "Dịch vụ khắc chữ kỷ niệm riêng biệt", href: "/contact" }
        ]
      }
    ],
    featuredImage2: SITE_IMAGES.megaMenu.bridalFeatured2,
    featuredTitle2: "Nhẫn cưới Platinum",
    ctaText: "Khám phá Nhẫn Cưới",
    ctaHref: "/collections"
  },
  "THE ATELIER": {
    featuredImage1: SITE_IMAGES.megaMenu.atelierFeatured1,
    featuredTitle1: "Di Sản Lộng Lẫy Từ Năm 2026",
    featuredSubtitle1: "Một câu chuyện bắt nguồn từ trung tâm của sự thanh lịch vượt thời gian.",
    links: [
      {
        category: "Lịch Sử & Di Sản",
        items: [
          { label: "Câu chuyện của chúng tôi từ năm 2026", href: "/the-maison" },
          { label: "Bộ sưu tập Bảo tàng Atelier", href: "/the-maison" },
          { label: "Triển lãm & Chương trình văn hóa nghệ thuật", href: "/the-maison" }
        ]
      },
      {
        category: "Học Viện Nghệ Thuật",
        items: [
          { label: "Học viện Nghệ thuật Trang sức", href: "/the-maison" },
          { label: "Lớp học trải nghiệm chuyên sâu", href: "/the-maison" },
          { label: "Bảo trợ tài năng nghệ nhân trẻ", href: "/the-maison" }
        ]
      }
    ],
    featuredImage2: SITE_IMAGES.megaMenu.atelierFeatured2,
    featuredTitle2: "Không gian Xưởng chế tác",
    ctaText: "Khám phá Lịch sử",
    ctaHref: "/the-maison"
  }
};

export default function MegaMenu({ activeItem, onClose, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  const content = MENU_CONTENT[activeItem];

  if (!content) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute left-0 w-full bg-brand-white border-t border-brand-gold/15 shadow-2xl z-40 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-8 py-10 px-8 lg:px-12">
        {/* Left Side: Columns 1-6 (Span 6) - Featured Large Collection Image */}
        <div className="col-span-5 relative group min-h-[300px] bg-brand-cream border border-brand-gold/10 overflow-hidden rounded-sm">
          <Image
            src={content.featuredImage1}
            alt={content.featuredTitle1}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/70 via-brand-charcoal/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-brand-white">
            <span className="text-[9px] uppercase tracking-[0.2em] text-brand-gold font-bold mb-1 block">Kiệt Tác Nổi Bật</span>
            <h3 className="text-2xl font-light tracking-wide mb-2">{content.featuredTitle1}</h3>
            <p className="text-xs text-brand-white/80 leading-relaxed font-light max-w-sm">{content.featuredSubtitle1}</p>
          </div>
        </div>

        {/* Center: Columns 7-9 (Span 3) - Link Subcategories */}
        <div className="col-span-4 flex flex-col gap-8 py-2">
          {content.links.map((column) => (
            <div key={column.category}>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-3 border-b border-brand-gold/10 pb-1.5">
                {column.category}
              </h4>
              <ul className="space-y-2.5">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="text-xs text-brand-charcoal/80 hover:text-brand-burgundy tracking-wide font-light transition-colors duration-300 block hover:translate-x-1 transition-transform duration-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Side: Columns 10-12 (Span 3) - Secondary CTA Card */}
        <div className="col-span-3 bg-brand-cream p-5 border border-brand-gold/10 rounded-sm flex flex-col justify-between group min-h-[300px]">
          <div>
            <div className="relative w-full h-32 mb-4 overflow-hidden rounded-sm border border-brand-gold/10">
              <Image
                src={content.featuredImage2}
                alt={content.featuredTitle2}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 20vw"
              />
            </div>
            <h4 className="text-base font-light text-brand-charcoal mb-2 tracking-wide">
              {content.featuredTitle2}
            </h4>
            <p className="text-[11px] text-brand-gray leading-relaxed font-light">
              Khám phá tay nghề thủ công kiệt tác từ các nghệ nhân của Place Vendôme.
            </p>
          </div>
          <Link
            href={content.ctaHref}
            onClick={onClose}
            className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-charcoal hover:text-brand-burgundy inline-flex items-center gap-1.5 border-t border-brand-gold/10 pt-3 group-hover:gap-2.5 transition-all duration-300 w-full mt-4"
          >
            <span>{content.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
