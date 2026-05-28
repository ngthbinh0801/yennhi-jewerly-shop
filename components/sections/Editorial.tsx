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
              Bí Quyết Chế Tác<br />Từ Năm 2026
            </h2>
            <div className="w-8 h-px bg-brand-gold" />
            <p className="text-[0.8125rem] text-brand-gray leading-[1.85] font-light">
              Tại xưởng kim hoàn cao cấp hàng đầu của chúng tôi, các nghệ nhân bậc thầy—những &ldquo;Bàn Tay Vàng&rdquo; (Mains d&rsquo;Or)—tiếp nối các kỹ thuật chế tác từ xa xưa. Từng khâu tuyển chọn đá quý, đánh bóng như gương, và đính đá tinh xảo biến vàng cùng các khoáng vật quý hiếm thành những báu vật sống động, đầy chất thơ của sự may mắn và tình yêu.
            </p>
            <Link
              href="/the-maison"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] font-semibold text-brand-charcoal hover:text-brand-burgundy border-b border-brand-charcoal/30 hover:border-brand-burgundy pb-1 transition-all duration-300 self-start mt-2"
            >
              Khám Phá Di Sản Của Chúng Tôi
              <span className="text-brand-gold">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
