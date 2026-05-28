"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TIMELINE_DATA } from "@/lib/mockData";
import { CREAM_BLUR_DATA_URL, CHARCOAL_BLUR_DATA_URL } from "@/lib/constants";

export default function TheMaisonPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="w-full flex flex-col bg-brand-cream overflow-hidden">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
          alt="Classical Architecture Paris"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL={CREAM_BLUR_DATA_URL}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-brand-gold font-semibold mb-4 block"
          >
            Di Sản Lộng Lẫy Từ Năm 2026
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-light text-brand-white font-serif tracking-widest leading-none mb-6"
          >
            Xưởng Chế Tác
          </motion.h1>
          <div className="gold-divider my-6 bg-brand-gold w-20 h-[2px]" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-brand-cream/80 text-sm md:text-base font-sans tracking-[0.25em] uppercase"
          >
            Thiết Kế Mỹ Nghệ & Tay Nghề Thủ Công Cao Cấp
          </motion.p>
        </div>
      </section>

      {/* 2. "Our Story" Section */}
      <section className="page-content py-24 bg-brand-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-brand-burgundy font-semibold mb-3">
              Câu Chuyện Của Chúng Tôi
            </span>
            <h2 className="text-4xl md:text-5xl font-light font-serif text-brand-charcoal mb-6 leading-tight">
              Mối Tình Lãng Mạn Viết Bằng Đá Quý
            </h2>
            <div className="w-12 h-[1px] bg-brand-gold mb-6" />
            <p className="text-brand-charcoal/80 text-sm md:text-base font-light leading-relaxed mb-6">
              Lịch sử của Rì Rào Store được bắt đầu với tình yêu mãnh liệt dành cho kỹ nghệ đá quý. Được nuôi dưỡng từ di sản gia đình của các chuyên gia cắt đá và giám tuyển đá quý bậc thầy, thương hiệu của chúng tôi là sự giao hòa giữa niềm đam mê, chất thơ và tay nghề kim hoàn gia truyền tinh xảo.
            </p>
            <p className="text-brand-charcoal/80 text-sm md:text-base font-light leading-relaxed mb-8">
              Được thành lập như một xưởng chế tác trang sức cao cấp hàng đầu, Rì Rào Store đã nhanh chóng tạo dựng được danh tiếng uy tín thu hút những người sành sỏi trang sức tinh xảo. Được dẫn dắt bởi chất thơ và niềm đam mê với những viên đá quý hiếm có, các nghệ nhân của chúng tôi tạo nên những tác phẩm phản chiếu sự may mắn, vẻ đẹp và phép màu kỹ thuật chế tác.
            </p>
            <Link
              href="/collections"
              className="btn-luxury self-start border-brand-charcoal hover:border-brand-burgundy text-xs"
            >
              Khám Phá Tạo Tác Kinh Điển
            </Link>
          </motion.div>

          {/* Vintage Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-square md:aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden border border-brand-gold/15 p-2.5 bg-brand-white shadow-xl"
          >
            <div className="relative w-full h-full overflow-hidden bg-brand-cream">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800"
                alt="Rì Rào Store Founders Legacy"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transform hover:scale-103 transition-transform duration-[1200ms]"
                placeholder="blur"
                blurDataURL={CREAM_BLUR_DATA_URL}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Horizontal Drag-Scrollable Timeline */}
      <section className="w-full bg-brand-white py-24 border-t border-b border-brand-charcoal/10 overflow-hidden">
        <div className="page-content mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-2 block">
            Dòng Thời Gian Di Sản
          </span>
          <h2 className="text-3xl md:text-4xl font-light font-serif text-brand-charcoal">
            Các Cột Mốc Lịch Sử
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold my-4" />
          <p className="text-xs text-brand-gray uppercase tracking-widest">
            Kéo hoặc vuốt ngang để khám phá các cột mốc tạo tác qua từng năm tháng
          </p>
        </div>

        {/* Timeline Row */}
        <div className="relative w-full overflow-x-auto pb-10 scrollbar-thin px-4 md:px-8 lg:px-12 flex gap-8 md:gap-12 cursor-grab active:cursor-grabbing">
          {TIMELINE_DATA.map((milestone, idx) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex-shrink-0 w-[280px] md:w-[350px] flex flex-col bg-brand-cream border border-brand-charcoal/5 p-6 shadow-md"
            >
              {/* Year large text */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-light font-serif text-brand-gold mb-3">
                {milestone.year}
              </div>
              
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-brand-gold/10 mb-4 bg-brand-white">
                <Image
                  src={milestone.image}
                  alt={milestone.title}
                  fill
                  sizes="350px"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={CREAM_BLUR_DATA_URL}
                />
              </div>

              {/* Milestone Details */}
              <h3 className="text-lg font-light font-serif text-brand-charcoal mb-2">
                {milestone.title}
              </h3>
              <p className="text-brand-gray text-[12px] md:text-xs font-light leading-relaxed">
                {milestone.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. "Savoir-Faire" Section (Cinematic Dark Section with Video Lightbox) */}
      <section className="w-full bg-brand-charcoal text-brand-white py-24 relative overflow-hidden">
        <div className="page-content flex flex-col items-center text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-3">
            Bàn Tay Vàng (Mains d&apos;Or)
          </span>
          <h2 className="text-4xl md:text-5xl font-light font-serif text-brand-cream tracking-wide mb-6">
            Tinh Thần Của Nghệ Thuật Savoir-Faire
          </h2>
          <div className="gold-divider bg-brand-gold w-12 my-2" />
          
          <p className="text-brand-cream/80 max-w-2xl text-sm md:text-base font-light leading-relaxed mb-12">
            Những bàn tay điêu luyện của các nghệ nhân bậc thầy Rì Rào Store, nổi tiếng với sự khéo léo kỳ diệu, truyền giữ các bí mật gia truyền trong các xưởng chế tác khép kín, uốn nắn những kim loại quý và tuyển chọn các khoáng vật tự nhiên lộng lẫy để thổi hồn vào các câu chuyện cơ khí chế tác phức tạp.
          </p>

          {/* Video Placeholder Box */}
          <div className="relative w-full max-w-4xl aspect-video overflow-hidden border border-brand-gold/20 bg-brand-charcoal shadow-2xl group">
            <Image
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=1200"
              alt="Chế tác trang sức tinh xảo cận cảnh"
              fill
              sizes="(max-width: 1024px) 100vw, 1000px"
              className="object-cover opacity-85 transition-transform duration-1000 group-hover:scale-102"
              placeholder="blur"
              blurDataURL={CHARCOAL_BLUR_DATA_URL}
            />
            
            {/* Play Button overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-all duration-300 group-hover:bg-black/45">
              <button
                onClick={() => setIsVideoOpen(true)}
                className="relative z-10 w-20 h-20 rounded-full border border-brand-gold bg-brand-charcoal/80 text-brand-gold flex items-center justify-center shadow-lg hover:scale-105 hover:bg-brand-burgundy hover:border-brand-burgundy hover:text-brand-white transition-all duration-300 focus:outline-none"
              >
                <Play size={28} className="ml-1" />
                <span className="absolute -inset-2 rounded-full border border-brand-gold/30 animate-ping opacity-75" />
              </button>
            </div>

            {/* Floating Title details */}
            <div className="absolute bottom-4 left-4 bg-brand-charcoal/80 backdrop-blur-sm text-[9px] uppercase tracking-[0.25em] text-brand-gold px-3 py-1 text-left font-medium">
              Phim Tài Liệu: Nghệ Thuật Chế Tác Xà Cừ Bốn Lá
            </div>
          </div>

          <span className="text-brand-cream/60 text-xs font-light tracking-wide mt-6">
            Bàn tay Nghệ nhân — Sự sắp đặt đá quý bậc thầy định nghĩa đỉnh cao Trang sức Cao cấp.
          </span>
        </div>
      </section>

      {/* Video Lightbox Player Overlay */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-brand-charcoal/98 backdrop-blur-md"
            onClick={() => setIsVideoOpen(false)}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 text-brand-white hover:text-brand-gold transition-all duration-300"
            >
              <X size={28} />
            </button>
            
            {/* Embedded video mock structure */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-[90vw] max-w-4xl aspect-video bg-black shadow-2xl border border-brand-gold/20 flex flex-col justify-center items-center text-center p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Nghệ thuật Chế tác Điện ảnh Rì Rào Store"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. "Jewelry Arts Academy" Section */}
      <section className="page-content py-24 bg-brand-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* School Image Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-square md:aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden border border-brand-gold/15 p-2 bg-brand-white shadow-xl"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800"
                alt="L'École Academy Classroom"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transform hover:scale-103 transition-transform duration-1000"
                placeholder="blur"
                blurDataURL={CREAM_BLUR_DATA_URL}
              />
            </div>
          </motion.div>

          {/* School Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-brand-burgundy font-semibold mb-3">
              Học Viện Nghệ Thuật Trang Sức
            </span>
            <h2 className="text-4xl md:text-5xl font-light font-serif text-brand-charcoal mb-6 leading-tight">
              Học Viện Rì Rào Store
            </h2>
            <div className="w-12 h-[1px] bg-brand-gold mb-6" />
            <p className="text-brand-charcoal/80 text-sm md:text-base font-light leading-relaxed mb-6">
              Được thành lập để chia sẻ vẻ đẹp của ngọc học và nghệ thuật thủ công với công chúng, Học viện Nghệ thuật Trang sức của chúng tôi cung cấp các khóa học thực hành về lịch sử đá quý, thiết kế và kỹ thuật chế tác nghệ nhân. Với sự hỗ trợ từ Rì Rào Store, học viện chào đón những người yêu thích kim cương cũng như những người mới bắt đầu đến khám phá những bí mật của trang sức cao cấp.
            </p>
            <p className="text-brand-charcoal/80 text-sm md:text-base font-light leading-relaxed mb-8">
              Với các cơ sở giảng dạy mở rộng đến Tokyo, Paris và Hồng Kông, Học viện tổ chức các cuộc triển lãm quốc tế, hợp tác với các viện nghiên cứu và hỗ trợ các nhà thiết kế trẻ trên toàn thế giới, thúc đẩy văn hóa mở về sự trân trọng lịch sử trang sức.
            </p>
            <Link
              href="/boutiques"
              className="btn-luxury self-start border-brand-charcoal hover:border-brand-burgundy text-xs"
            >
              Tìm Cửa Hàng Học Viện
            </Link>
          </motion.div>

        </div>
      </section>

      {/* 6. Quote Section */}
      <section className="w-full bg-brand-cream border-t border-brand-charcoal/10 py-24 flex flex-col items-center justify-center">
        <div className="max-w-4xl px-6 text-center">
          <div className="w-10 h-[1px] bg-brand-gold/60 mx-auto mb-8" />
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light font-serif italic text-brand-charcoal leading-relaxed mb-6"
          >
            &ldquo;Trong mỗi viên ngọc quý, có một bài thơ đang chờ được thưởng thức, một câu chuyện về sự may mắn và tình yêu được chế tác bằng vàng.&rdquo;
          </motion.blockquote>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold"
          >
            — Giám tuyển Rì Rào Store
          </motion.div>
          <div className="w-10 h-[1px] bg-brand-gold/60 mx-auto mt-8" />
        </div>
      </section>
    </div>
  );
}
