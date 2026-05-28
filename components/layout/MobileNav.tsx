"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ChevronDown, MapPin, Phone, User, Globe } from "lucide-react";
import { BRAND_INFO } from "@/lib/constants";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MobileMenuItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

const MOBILE_MENU_ITEMS: MobileMenuItem[] = [
  {
    label: "Trang Sức",
    href: "/collections",
    subItems: [
      { label: "Dây Chuyền Vỏ Sò", href: "/collections/day_chuyen_vo_so" },
      { label: "Nhẫn Vỏ Ốc", href: "/collections/nhan_vo_oc" },
      { label: "Khuyên Tai Vỏ Sò", href: "/collections/khuyen_tai" },
      { label: "Vòng Tay Vỏ Sò", href: "/collections/vong_tay" },
      { label: "Tất cả Trang sức", href: "/collections" }
    ]
  },
  {
    label: "Đồ Thủ Công",
    href: "/collections",
    subItems: [
      { label: "Giỏ Vỏ Sò", href: "/collections/gio_vo_so" },
      { label: "Gương Đính Vỏ Sò", href: "/collections/guong_vo_so" },
      { label: "Tất cả Đồ Thủ Công", href: "/collections" }
    ]
  },
  {
    label: "Bộ Sưu Tập Cưới",
    href: "/collections",
    subItems: [
      { label: "Nhẫn đính hôn", href: "/collections?category=rings" },
      { label: "Vòng tay cô dâu", href: "/collections/vong_tay" },
      { label: "Bộ trang sức cưới", href: "/collections" }
    ]
  },
  {
    label: "Xưởng Chế Tác",
    href: "/the-maison",
    subItems: [
      { label: "Di sản của chúng tôi", href: "/the-maison" },
      { label: "Nghệ thuật thủ công", href: "/the-maison" },
      { label: "Triển lãm & Sự kiện văn hóa", href: "/the-maison" }
    ]
  },
  {
    label: "Dịch Vụ",
    href: "/contact"
  }
];

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-charcoal z-40 md:hidden"
          />

          {/* Sidebar Drawer Container */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 bottom-0 w-[85vw] max-w-sm bg-brand-white shadow-2xl z-50 overflow-y-auto flex flex-col md:hidden"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-brand-gold/15 flex items-center justify-between">
              <div>
                <span className="text-sm font-light tracking-[0.15em] text-brand-charcoal uppercase block">
                  {BRAND_INFO.name}
                </span>
                <span className="text-[7px] uppercase tracking-[0.2em] text-brand-gold block mt-0.5">
                  Paris
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1 text-brand-charcoal hover:text-brand-burgundy transition-colors duration-300 focus:outline-none"
                aria-label="Close navigation"
              >
                <X className="w-6 h-6 text-brand-gold" />
              </button>
            </div>

            {/* Navigation Body List */}
            <nav className="p-6 flex-1 flex flex-col gap-5">
              {MOBILE_MENU_ITEMS.map((item, index) => {
                const isExpanded = expandedIndex === index;
                const hasSubItems = item.subItems && item.subItems.length > 0;

                return (
                  <div key={item.label} className="border-b border-brand-gold/5 pb-3">
                    {hasSubItems ? (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="w-full flex items-center justify-between text-left focus:outline-none py-1 text-brand-charcoal"
                      >
                        <span className="font-serif text-xl font-light tracking-wide hover:text-brand-burgundy transition-colors duration-300">
                          {item.label}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-brand-gold transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="font-serif text-xl font-light tracking-wide text-brand-charcoal hover:text-brand-burgundy transition-colors duration-300 block py-1"
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Accordion Expandable Sub-items */}
                    <AnimatePresence>
                      {hasSubItems && isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden bg-brand-cream/50 rounded-sm mt-2 ml-2 pl-4 border-l border-brand-gold/10"
                        >
                          <div className="py-2 flex flex-col gap-2.5">
                            {item.subItems?.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={onClose}
                                className="text-xs text-brand-charcoal/80 hover:text-brand-burgundy tracking-wide font-light transition-colors duration-300 block"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* Mobile Footer Area */}
            <div className="p-6 border-t border-brand-gold/15 bg-brand-cream/80 flex flex-col gap-4">
              <Link
                href="/boutiques"
                onClick={onClose}
                className="flex items-center gap-3 text-xs uppercase tracking-wider hover:text-brand-burgundy transition-colors duration-300"
              >
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>Tìm Cửa Hàng</span>
              </Link>

              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center gap-3 text-xs uppercase tracking-wider hover:text-brand-burgundy transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>Liên Hệ Chúng Tôi</span>
              </Link>

              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center gap-3 text-xs uppercase tracking-wider hover:text-brand-burgundy transition-colors duration-300"
              >
                <User className="w-4 h-4 text-brand-gold" />
                <span>Tài Khoản Của Tôi</span>
              </Link>

              <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-brand-gray border-t border-brand-gold/10 pt-4 mt-2">
                <Globe className="w-3.5 h-3.5 text-brand-gold" />
                <span>Tiếng Việt</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
