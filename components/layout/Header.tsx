"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, ShoppingBag, Menu, X, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BRAND_INFO } from "@/lib/constants";
import { useCart } from "@/lib/cartContext";
import MegaMenu from "./MegaMenu";
import MobileNav from "./MobileNav";

const NAV_ITEMS = [
  "HIGH JEWELRY",
  "JEWELRY",
  "WATCHES",
  "BRIDAL",
  "FRAGRANCE",
  "THE ATELIER",
  "SERVICES",
];

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { totalCount } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnterItem = (item: string) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setActiveDropdown(item);
  };

  const handleMouseLeaveItem = () => {
    closeTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const handleMouseEnterMenu = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
  };

  const handleMouseLeaveMenu = () => setActiveDropdown(null);

  return (
    <header className={`sticky top-0 w-full z-40 select-none transition-all duration-500 ${isScrolled
        ? "bg-brand-white/96 backdrop-blur-md border-b border-brand-gold/10 shadow-sm"
        : "bg-transparent border-b border-transparent"
      }`}>
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
              <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Search</span>
            </button>
          </div>

          {/* Center ─ flex-shrink-0 so logo never compresses */}
          <div className="flex-shrink-0 flex flex-col items-center text-center px-4">
            <Link
              href="/"
              className={`font-serif italic font-light tracking-[0.12em] text-brand-charcoal block transition-all duration-500 ease-in-out hover:text-brand-burgundy whitespace-nowrap ${isScrolled ? "text-xl md:text-2xl" : "text-2xl md:text-[3rem]"
                }`}
            >
              {BRAND_INFO.name}
            </Link>
            <AnimatePresence>
              {!isScrolled && (
                <motion.span
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-[7px] uppercase tracking-[0.35em] text-brand-gold font-light mt-0.5 block overflow-hidden"
                >
                  Place Vendôme Paris
                </motion.span>
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
              <span className="text-[10px] font-medium uppercase tracking-[0.2em]">Wishlist</span>
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
              <span className="hidden md:inline text-[10px] font-medium uppercase tracking-[0.2em]">Cart</span>
            </Link>
          </div>
        </div>

        {/* ── Desktop Navigation Bar ── */}
        <div
          className={`hidden md:block overflow-hidden transition-all duration-500 ease-in-out ${isScrolled ? "max-h-0 opacity-0 mt-0" : "max-h-12 opacity-100 mt-4"
            }`}
        >
          <nav className="flex items-center justify-center gap-7 lg:gap-9 border-t border-brand-gold/8 pt-3.5">
            {NAV_ITEMS.map((item) => {
              let href = "/collections";
              if (item === "HIGH JEWELRY") href = "/collections?search=Snowflake";
              else if (item === "WATCHES") href = "/collections?category=watches";
              else if (item === "THE ATELIER") href = "/the-maison";
              else if (item === "SERVICES") href = "/contact";
              return (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={() => handleMouseEnterItem(item)}
                  onMouseLeave={handleMouseLeaveItem}
                >
                  <Link href={href} className="nav-link">
                    {item}
                  </Link>
                </div>
              );
            })}
          </nav>
        </div>
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
                <span className="section-label">What are you looking for?</span>
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
                  placeholder="Search collections, jewelry, watches..."
                  autoFocus
                  className="w-full bg-transparent border-none text-brand-charcoal placeholder-brand-gray/55 text-xl font-light focus:outline-none focus:ring-0 select-text font-serif"
                />
                <button type="submit" className="focus:outline-none flex-shrink-0">
                  <Search className="w-5 h-5 text-brand-gold" />
                </button>
              </div>

              <div>
                <span className="section-label mb-3 block">Trending</span>
                <div className="flex flex-wrap gap-2">
                  {["Alhambra Pendant", "Frivole Earring", "Perlée Bracelet", "Bridal Solitaires"].map((trend) => (
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
