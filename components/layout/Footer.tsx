"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronUp, Globe } from "lucide-react";
import { BRAND_INFO } from "@/lib/constants";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="15" height="15" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="15" height="15" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="15" height="15" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const REGIONS = ["Việt Nam (₫)", "United States ($)", "France (€)", "United Kingdom (£)", "Japan (¥)", "Hong Kong ($)"];

const FOOTER_LINKS = [
  {
    title: "Dịch Vụ Khách Hàng",
    links: [
      { label: "Liên Hệ Chúng Tôi", href: "/contact" },
      { label: "Câu Hỏi Thường Gặp", href: "/contact" },
      { label: "Giao Hàng & Nhận Hàng", href: "/contact" },
      { label: "Chính Sách Đổi Trả", href: "/contact" },
      { label: "Hướng Dẫn Bảo Quản", href: "/contact" },
      { label: "Hướng Dẫn Chọn Cỡ", href: "/contact" },
    ],
  },
  {
    title: "Pháp Lý",
    links: [
      { label: "Điều Khoản Bán Hàng", href: "/contact" },
      { label: "Chính Sách Bảo Mật", href: "/contact" },
      { label: "Tùy Chọn Cookies", href: "/contact" },
      { label: "Khả Năng Tiếp Cận", href: "/contact" },
      { label: "Sơ Đồ Trang Web", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const [regionOpen, setRegionOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Việt Nam (₫)");

  return (
    <footer className="w-full text-brand-charcoal select-none">

      {/* ── MAIN FOOTER ─────────────────────────────────────── */}
      <div className="w-full bg-[#0a0a0a] border-t border-brand-gold/20 pt-14 pb-8">
      <div className="page-content flex flex-col gap-12">

        {/* Links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <p className="text-[9px] uppercase tracking-[0.35em] font-bold text-[#ffffff] mb-5 pb-2 border-b border-[#ffffff]/15">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[0.75rem] text-brand-white/55 hover:text-brand-gold font-light tracking-wide transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social column */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] font-bold text-[#ffffff] mb-5 pb-2 border-b border-[#ffffff]/15">Theo Dõi Chúng Tôi</p>
            <ul className="space-y-3.5">
              {[
                { label: "Instagram", icon: <InstagramIcon />, href: "https://instagram.com/rirao.store" },
                { label: "Facebook", icon: <FacebookIcon />, href: "https://facebook.com/riraostore" },
              ].map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[0.75rem] text-brand-white/55 hover:text-brand-gold font-light tracking-wide transition-colors duration-300"
                  >
                    <span className="text-brand-gold">{s.icon}</span>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-gold/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Region */}
          <div className="relative">
            <button
              onClick={() => setRegionOpen(!regionOpen)}
              className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-brand-white/40 hover:text-brand-gold transition-colors duration-300 focus:outline-none"
            >
              <Globe className="w-3 h-3 text-brand-gold" />
              {selectedRegion}
            </button>
            {regionOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setRegionOpen(false)} />
                <div className="absolute bottom-full left-0 mb-2 py-1.5 w-44 bg-[#141414] border border-brand-gold/20 shadow-xl z-50">
                  {REGIONS.map((r) => (
                    <button
                      key={r}
                      onClick={() => { setSelectedRegion(r); setRegionOpen(false); }}
                      className={`w-full text-left px-3.5 py-2 text-[10px] uppercase tracking-wide hover:bg-brand-white/5 hover:text-brand-gold transition-all duration-200 ${selectedRegion === r ? "text-brand-gold font-semibold" : "text-brand-white/60"}`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <span className="text-[10px] uppercase tracking-[0.18em] text-brand-white/30 text-center">
            &copy; 2026 {BRAND_INFO.name}. Bảo lưu mọi quyền.
          </span>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-brand-gold hover:text-brand-white transition-colors duration-300 focus:outline-none"
          >
            Về đầu trang
            <ChevronUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
      </div>
    </footer>
  );
}
