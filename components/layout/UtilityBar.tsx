"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, MapPin, Phone, User, ChevronDown } from "lucide-react";

const LANGUAGES = ["Tiếng Việt", "English", "Français", "日本語"];

export default function UtilityBar() {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Tiếng Việt");
  const pathname = usePathname();
  const isHome = pathname === "/";

  const utilityClasses = isHome
    ? "w-full bg-transparent border-b border-transparent select-none absolute top-0 left-0 z-50 transition-all duration-500"
    : "w-full bg-brand-white/90 backdrop-blur-sm border-b border-brand-gold/8 select-none relative z-50";

  return (
    <div className={utilityClasses}>
      <div className="page-content py-2 flex items-center justify-between">
        {/* Language selector */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-brand-charcoal hover:text-brand-burgundy transition-colors duration-300 focus:outline-none"
          >
            <Globe className="w-3 h-3 text-brand-gold" />
            <span>{selectedLang}</span>
            <ChevronDown className={`w-2.5 h-2.5 transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`} />
          </button>

          {langOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
              <div className="absolute left-0 mt-2 py-1.5 w-32 bg-brand-white border border-brand-gold/20 shadow-xl z-50">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { setSelectedLang(lang); setLangOpen(false); }}
                    className={`w-full text-left px-3.5 py-2 text-[10px] uppercase tracking-[0.12em] hover:bg-brand-cream hover:text-brand-burgundy transition-all duration-200 ${
                      selectedLang === lang ? "text-brand-gold font-semibold" : "text-brand-charcoal"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Utility links */}
        <div className="flex items-center gap-5 md:gap-7">
          <Link href="/boutiques" className="hidden sm:flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] text-brand-charcoal hover:text-brand-burgundy transition-colors duration-300">
            <MapPin className="w-3 h-3 text-brand-gold" />
            <span>Tìm Cửa Hàng</span>
          </Link>
          <Link href="/contact" className="hidden md:flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] text-brand-charcoal hover:text-brand-burgundy transition-colors duration-300">
            <Phone className="w-3 h-3 text-brand-gold" />
            <span>Liên Hệ</span>
          </Link>
          <Link href="/contact" className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] text-brand-charcoal hover:text-brand-burgundy transition-colors duration-300">
            <User className="w-3 h-3 text-brand-gold" />
            <span className="hidden md:inline">Tài Khoản</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
