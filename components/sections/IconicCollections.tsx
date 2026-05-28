"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { CREAM_BLUR_DATA_URL } from "@/lib/constants";

import { SITE_IMAGES } from "@/lib/imageConfig";

const ICONIC_ITEMS = [
  { id: 1, name: "Dây Chuyền Vỏ Sò", description: "Chất thơ đại dương trên đôi vai trần gợi cảm", image: SITE_IMAGES.collections.perlee, href: "/collections/day_chuyen_vo_so" },
  { id: 2, name: "Nhẫn Vỏ Ốc", description: "Ánh cầu vồng lấp lánh đọng trên ngón tay xinh", image: SITE_IMAGES.collections.nhan, href: "/collections/nhan_vo_oc" },
  { id: 3, name: "Giỏ Vỏ Sò", description: "Giỏ tre bện mây khảm sò biển mộc mạc và hoang sơ", image: SITE_IMAGES.collections.alhambra, href: "/collections/gio_vo_so" },
  { id: 4, name: "Gương Đính Vỏ Sò", description: "Khung gương nghệ thuật làm từ ngàn vỏ điệp biển sâu", image: SITE_IMAGES.collections.guong, href: "/collections/guong_vo_so" },
  { id: 5, name: "Khuyên Tai Vỏ Sò", description: "Ánh xà cừ lung linh đung đưa bên khóe mắt", image: SITE_IMAGES.collections.khuyen_tai, href: "/collections/khuyen_tai" },
  { id: 6, name: "Vòng Tay Vỏ Sò", description: "Nhịp điệu sóng vỗ dịu êm bện chặt cổ tay", image: SITE_IMAGES.collections.vong_tay, href: "/collections/vong_tay" },
];

export default function IconicCollections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 5);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    checkScroll();
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!containerRef.current) return;
    const w = window.innerWidth >= 768 ? 432 : 304;
    containerRef.current.scrollBy({ left: dir === "left" ? -w : w, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-brand-cream section-padding group/carousel">
      {/* Heading */}
      <div className="page-content flex flex-col items-center text-center mb-16">
        <h2 className="section-title text-[2rem] md:text-[2.75rem]">Bộ Sưu Tập Kinh Điển</h2>
        <div className="gold-divider" />
        <p className="text-[0.8125rem] text-brand-gray font-light max-w-lg">
          Những tác phẩm vượt thời gian tạo nên di sản đầy chất thơ của Rì Rào Store
        </p>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Right scroll hint fade — mobile only */}
        <div className="absolute right-0 top-0 bottom-2 w-16 bg-gradient-to-l from-brand-cream to-transparent pointer-events-none md:hidden z-10" />
        {/* Left arrow */}
        {canLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex p-2.5 bg-brand-white/90 hover:bg-brand-white text-brand-gold hover:text-brand-burgundy border border-brand-gold/20 shadow-md backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/carousel:opacity-100"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        {/* Right arrow */}
        {canRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex p-2.5 bg-brand-white/90 hover:bg-brand-white text-brand-gold hover:text-brand-burgundy border border-brand-gold/20 shadow-md backdrop-blur-sm transition-all duration-300 opacity-0 group-hover/carousel:opacity-100"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Scrollable track */}
        <div
          ref={containerRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 scrollbar-hide px-[clamp(1.25rem,4vw,4rem)]"
        >
          {ICONIC_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex-none w-[272px] md:w-[384px] snap-start group block"
            >
              <div className="relative aspect-[3/4] overflow-hidden border border-brand-gold/10 bg-brand-cream rounded-2xl shadow-sm hover:shadow-lg hover:border-brand-gold/25 transition-all duration-500">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  placeholder="blur"
                  blurDataURL={CREAM_BLUR_DATA_URL}
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-[1100ms] ease-out"
                  sizes="(max-width: 768px) 272px, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="font-serif text-[1.375rem] text-white leading-tight">{item.name}</h3>
                  <p className="text-[10px] tracking-[0.15em] mt-1.5 text-brand-gold/85 font-light uppercase">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
