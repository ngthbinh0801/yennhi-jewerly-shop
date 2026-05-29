import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE_IMAGES } from "@/lib/imageConfig";

export default function Editorial() {
  return (
    <section className="w-full bg-brand-white section-padding">
      <div className="page-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-brand-gold/15 rounded-2xl bg-brand-cream shadow-md">
            <Image
              src={SITE_IMAGES.sections.editorial}
              alt="Atelier Chế tác Thủ công"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5 lg:gap-6 max-w-md">
            <span className="section-label">Nghệ Thuật Chế Tác Thủ Công</span>
            <h2 className="section-title text-[2.5rem] lg:text-[3.25rem] leading-none">
              Bí Quyết Chế Tác
            </h2>
            <div className="w-8 h-px bg-brand-gold" />
            <p className="text-[0.8125rem] text-brand-gray leading-[1.85] font-light">
              Tại Rì Rào Store, mỗi sản phẩm được tạo nên từ những vỏ ốc, vỏ sò mang vẻ đẹp tự nhiên của biển cả. Chúng tôi tỉ mỉ lựa chọn từng chất liệu, làm sạch, xử lý bề mặt và kết hợp cùng ngọc trai, dây đan, kim loại hoặc vải ren để tạo nên những món phụ kiện và đồ trang trí độc đáo. Từ dây chuyền, nhẫn, bông tai đến túi, gương và rương trang sức, mỗi thiết kế đều gửi gắm sự mềm mại, tinh tế và tình yêu dành cho biển.
            </p>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] font-semibold text-brand-charcoal hover:text-brand-burgundy border-b border-brand-charcoal/30 hover:border-brand-burgundy pb-1 transition-all duration-300 self-start mt-2"
            >
              Khám Phá Bộ Sưu Tập
              <span className="text-brand-gold">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
