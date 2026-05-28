"use client";

import React from "react";
import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] w-full flex flex-col items-center justify-center bg-brand-cream px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-md flex flex-col items-center border border-brand-gold/15 bg-brand-white p-8 md:p-12 shadow-2xl relative"
      >
        {/* Floating Icon decorative */}
        <div className="w-14 h-14 rounded-full bg-brand-cream border border-brand-gold/20 flex items-center justify-center text-brand-burgundy mb-6">
          <Compass size={24} className="animate-spin [animation-duration:15s]" />
        </div>

        {/* Large luxury digits */}
        <h1 className="text-7xl md:text-8xl font-light font-serif text-brand-burgundy leading-none tracking-widest mb-2 select-none">
          404
        </h1>

        {/* Poetic title */}
        <h2 className="text-xl uppercase tracking-[0.2em] font-semibold text-brand-charcoal mb-4">
          Không Tìm Thấy Trang
        </h2>
        
        <div className="gold-divider bg-brand-gold w-12 my-2" />

        {/* Descriptive copy */}
        <p className="text-brand-gray text-xs md:text-sm font-light leading-relaxed mb-8 max-w-xs">
          Hành lang thơ mộng mà bạn đang tìm kiếm tạm thời không khả dụng. Liên kết có thể đã được chuyển sang danh mục cửa hàng khác hoặc đang được hoàn thiện tinh xảo bởi các nghệ nhân của chúng tôi.
        </p>

        {/* Action button triggers */}
        <div className="w-full flex flex-col gap-3">
          <Link
            href="/"
            className="w-full py-3 btn-luxury btn-luxury-burgundy text-[10px] font-semibold tracking-widest uppercase"
          >
            Quay Lại Trang Chủ
          </Link>
          <Link
            href="/collections"
            className="w-full py-3 border border-brand-charcoal/10 hover:border-brand-burgundy text-brand-charcoal hover:text-brand-burgundy text-[10px] font-semibold tracking-widest uppercase flex items-center justify-center gap-1.5 transition-all duration-300"
          >
            Khám Phá Các Bộ Sưu Tập <ArrowRight size={12} />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
