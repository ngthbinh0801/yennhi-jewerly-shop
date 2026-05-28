"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, ShoppingBag, Menu, X, Heart, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { BRAND_INFO } from "@/lib/constants";
import { useCart } from "@/lib/cartContext";
import { COLLECTIONS_DATA } from "@/lib/mockData";
import MegaMenu from "./MegaMenu";
import MobileNav from "./MobileNav";

const NAV_ITEMS = [
  { key: "HIGH JEWELRY", label: "TRANG SỨC CAO CẤP" },
  { key: "JEWELRY", label: "TRANG SỨC" },
  { key: "HANDBAGS", label: "TÚI XÁCH" },
  { key: "BRIDAL", label: "BỘ SƯU TẬP CƯỚI" },
  { key: "FRAGRANCE", label: "NƯỚC HOA" },
  { key: "THE ATELIER", label: "XƯỞNG CHẾ TÁC" },
  { key: "SERVICES", label: "DỊCH VỤ" },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredCollection, setHoveredCollection] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { totalCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnterItem = (item: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setHoveredCollection(null);
    setActiveDropdown(item);
  };

  const handleMouseLeaveItem = () => {
    closeTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const handleMouseEnterMenu = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  };

  const handleMouseLeaveMenu = () => setActiveDropdown(null);

  const handleMouseEnterCollection = (slug: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setActiveDropdown(null);
    setHoveredCollection(slug);
  };

  const handleMouseLeaveCollection = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setHoveredCollection(null);
    }, 250);
  };

  const handleMouseEnterHoverCard = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
  };

  const handleMouseLeaveHoverCard = () => {
    setHoveredCollection(null);
  };

  const headerClasses = isScrolled
    ? "fixed top-0 w-full z-40 select-none transition-all duration-500 bg-brand-white/96 backdrop-blur-md border-b border-brand-gold/10 shadow-sm"
    : "absolute top-[34px] md:top-[38px] left-0 w-full z-40 select-none transition-all duration-500 bg-transparent border-b border-transparent";

  return (
    <header className={headerClasses}>
      <div
        className={`page-content transition-all duration-500 ease-in-out ${isScrolled ? "py-3" : "py-5"
          }`}
      >
        {/* ── Logo Row: flex layout guarantees true centering at every width ── */}
        <div className="flex items-center w-full">
          {/* Left ─ flex-1 so it takes equal half of remaining space */}
          <div className="flex-1 flex items-center gap-3">
            <button
              onClick={() => setMobileNavOpen(true)}
              className="md:hidden p-2.5 -ml-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-brand-charcoal hover:text-brand-burgundy transition-colors duration-300 focus:outline-none"
              aria-label="Open mobile menu"
            >
              <Menu className="w-5 h-5 text-brand-gold" />
            </button>
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden md:flex items-center gap-2 text-brand-charcoal hover:text-brand-burgundy transition-colors duration-300 focus:outline-none"
            >
              <Search className="w-4 h-4 text-brand-gold" />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Tìm kiếm</span>
            </button>
          </div>

          {/* Center ─ flex-shrink-0 so logo never compresses */}
          <div className="flex-shrink-0 flex flex-col items-center text-center px-4">
            <AnimatePresence>
              {(!isHome || isScrolled) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center"
                >
                  <Link
                    href="/"
                    className="font-serif italic font-light tracking-[0.12em] text-brand-charcoal text-xl md:text-2xl block transition-all duration-500 ease-in-out hover:text-brand-burgundy whitespace-nowrap"
                  >
                    {BRAND_INFO.name}
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right ─ flex-1 justify-end mirrors left */}
          <div className="flex-1 flex items-center justify-end gap-4">
            {/* Mobile: search icon */}
            <button
              onClick={() => setSearchOpen(true)}
              className="md:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-brand-charcoal hover:text-brand-burgundy transition-colors duration-300 focus:outline-none"
              aria-label="Search"
            >
              <Search className="w-4.5 h-4.5 text-brand-gold" />
            </button>

            {/* Desktop: Wishlist */}
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-1.5 text-brand-charcoal hover:text-brand-burgundy transition-colors duration-300"
            >
              <Heart className="w-4 h-4 text-brand-gold" />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Yêu thích</span>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="flex items-center gap-1.5 text-brand-charcoal hover:text-brand-burgundy transition-colors duration-300"
              aria-label="Shopping cart"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-brand-gold" />
                <AnimatePresence>
                  {totalCount > 0 && (
                    <motion.span
                      key={totalCount}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-brand-burgundy text-brand-white text-[7px] font-bold rounded-full flex items-center justify-center"
                    >
                      {totalCount > 9 ? "9+" : totalCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
              <span className="hidden md:inline text-[10px] font-medium uppercase tracking-[0.2em]">Giỏ hàng</span>
            </Link>
          </div>
        </div>

        {/* Collections Taskbar (only on homepage, desktop only) */}
        {isHome && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className={`hidden md:flex items-center justify-center gap-6 lg:gap-8 mt-5 pt-3.5 border-t transition-all duration-500 ${
              isScrolled ? "border-brand-gold/10" : "border-brand-gold/15"
            }`}
          >
            {COLLECTIONS_DATA.map((collection, index) => (
              <React.Fragment key={collection.slug}>
                {index > 0 && <span className="text-brand-gold/30 text-[8px] select-none">•</span>}
                <div
                  onMouseEnter={() => handleMouseEnterCollection(collection.slug)}
                  onMouseLeave={handleMouseLeaveCollection}
                  className="relative py-1"
                >
                  <Link
                    href={`/collections/${collection.slug}`}
                    className={`text-[10px] font-medium uppercase tracking-[0.25em] transition-all duration-300 relative group py-1.5 ${
                      isScrolled
                        ? "text-brand-charcoal hover:text-brand-burgundy"
                        : "text-brand-charcoal/80 hover:text-brand-burgundy"
                    }`}
                  >
                    {collection.name}
                    {/* Subtle hover underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-brand-gold/70 transition-all duration-300 ${
                        hoveredCollection === collection.slug ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        )}

      </div>

      {/* Mega Menu */}
      <AnimatePresence>
        {activeDropdown && (
          <MegaMenu
            activeItem={activeDropdown}
            onClose={() => setActiveDropdown(null)}
            onMouseEnter={handleMouseEnterMenu}
            onMouseLeave={handleMouseLeaveMenu}
          />
        )}
      </AnimatePresence>

      {/* Collections Quick View Hover Card */}
      <AnimatePresence>
        {hoveredCollection && (
          (() => {
            const collection = COLLECTIONS_DATA.find((c) => c.slug === hoveredCollection);
            if (!collection) return null;

            return (
              <motion.div
                initial={{ opacity: 0, y: -10, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                exit={{ opacity: 0, y: -10, x: "-50%" }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={handleMouseEnterHoverCard}
                onMouseLeave={handleMouseLeaveHoverCard}
                style={{
                  position: "absolute",
                  left: "50vw",
                  width: "min(92vw, 1280px)",
                  zIndex: 30,
                  overflow: "hidden",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                  borderRadius: "1rem",
                  border: "1px solid",
                  top: "100%",
                  marginTop: "0.5rem",
                }}
                className={`transition-all duration-500 ${
                  isScrolled
                    ? "bg-brand-white/95 backdrop-blur-lg border-brand-gold/15"
                    : "bg-brand-white/20 backdrop-blur-xl border-brand-white/20"
                }`}
              >
                <div
                  className="grid grid-cols-12 items-center"
                  style={{ gap: "2rem", padding: "2rem clamp(1.25rem, 4vw, 4rem)" }}
                >
                  {/* Left info column */}
                  <div className="col-span-7 flex flex-col pr-6">
                    <span className="text-[9px] uppercase tracking-[0.35em] text-brand-gold font-semibold mb-3">
                      Bộ Sưu Tập Nổi Bật
                    </span>
                    <h3 className="font-serif text-3xl font-light text-brand-charcoal tracking-wide mb-3">
                      {collection.name}
                    </h3>
                    <p className="text-xs font-serif italic text-brand-burgundy/80 tracking-wide mb-4">
                      "{collection.tagline}"
                    </p>
                    <div className="w-12 h-px bg-brand-gold/30 mb-4" />
                    <p className="text-xs text-brand-charcoal/80 leading-relaxed font-light mb-6 max-w-lg">
                      {collection.description}
                    </p>
                    <Link
                      href={`/collections/${collection.slug}`}
                      onClick={() => setHoveredCollection(null)}
                      className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-charcoal hover:text-brand-burgundy inline-flex items-center gap-2 group/btn border-b border-brand-charcoal/10 pb-1.5 self-start transition-all duration-300"
                    >
                      <span>Khám phá bộ sưu tập</span>
                      <ArrowRight className="w-3.5 h-3.5 text-brand-gold transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                    </Link>
                  </div>

                  {/* Right image column */}
                  <div className="col-span-5 relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-brand-gold/10 group shadow-md">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 30vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-brand-charcoal/5" />
                  </div>
                </div>
              </motion.div>
            );
          })()
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-0 bg-brand-white border-b border-brand-gold/20 shadow-2xl z-50 py-10 px-6 lg:px-12 flex flex-col items-center justify-center"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  setSearchOpen(false);
                  router.push(`/collections?search=${encodeURIComponent(searchQuery)}`);
                }
              }}
              className="max-w-2xl w-full flex flex-col gap-6"
            >
              <div className="flex items-center justify-between">
                <span className="section-label">Bạn đang tìm kiếm sản phẩm gì?</span>
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="p-1 text-brand-charcoal hover:text-brand-burgundy transition-colors duration-300 focus:outline-none"
                  aria-label="Close search"
                >
                  <X className="w-5 h-5 text-brand-gold" />
                </button>
              </div>

              <div className="relative border-b border-brand-gold/30 pb-3 flex items-center gap-3">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm bộ sưu tập, trang sức, đồng hồ..."
                  autoFocus
                  className="w-full bg-transparent border-none text-brand-charcoal placeholder-brand-gray/55 text-xl font-light focus:outline-none focus:ring-0 select-text font-serif"
                />
                <button type="submit" className="focus:outline-none flex-shrink-0">
                  <Search className="w-5 h-5 text-brand-gold" />
                </button>
              </div>

              <div>
                <span className="section-label mb-3 block">Xu hướng tìm kiếm</span>
                <div className="flex flex-wrap gap-2">
                  {["Mặt dây chuyền Xà Cừ Bốn Lá", "Bông tai Hoa Khơi Biển", "Vòng tay Hạt Ngọc Biển", "Nhẫn cưới Solitaire"].map((trend) => (
                    <button
                      key={trend}
                      type="button"
                      onClick={() => {
                        setSearchOpen(false);
                        router.push(`/collections?search=${encodeURIComponent(trend)}`);
                      }}
                      className="text-[11px] text-brand-charcoal/75 hover:text-brand-burgundy border border-brand-gold/20 bg-brand-cream hover:bg-brand-white px-3 py-1.5 transition-all duration-300 tracking-wide"
                    >
                      {trend}
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
