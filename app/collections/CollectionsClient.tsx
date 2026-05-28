"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, ArrowUpDown, ChevronRight, X } from "lucide-react";
import { Collection } from "@/lib/mockData";
import { CREAM_BLUR_DATA_URL } from "@/lib/constants";
import { useSearchParams, useRouter } from "next/navigation";

interface CollectionsClientProps {
  initialCollections: Collection[];
}

const CATEGORIES = [
  { label: "Tất cả", value: "all" },
  { label: "Vòng cổ", value: "necklaces" },
  { label: "Vòng tay", value: "bracelets" },
  { label: "Bông tai", value: "earrings" },
  { label: "Nhẫn", value: "rings" },
  { label: "Túi xách", value: "handbags" },
  { label: "Gương", value: "mirrors" },
];

const SORT_OPTIONS = [
  { label: "Nổi bật", value: "featured" },
  { label: "Mới nhất trước", value: "newest" },
  { label: "Thứ tự A-Z", value: "az" }
];

export default function CollectionsClient({ initialCollections }: CollectionsClientProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchQuery = searchParams.get("search") || "";
  const selectedCategory = searchParams.get("category") || "all";

  const [selectedSort, setSelectedSort] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Custom setter for category which updates the URL query string
  const setSelectedCategory = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    // reset pagination
    params.delete("page");
    router.push(`/collections?${params.toString()}`);
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    router.push(`/collections?${params.toString()}`);
    setCurrentPage(1);
  };

  // Filter & Sort collections logic
  const filteredAndSortedCollections = useMemo(() => {
    let result = [...initialCollections];

    // Filter by Search query parameter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (col) =>
          col.name.toLowerCase().includes(q) ||
          col.description.toLowerCase().includes(q) ||
          col.category.toLowerCase().includes(q) ||
          (col.tagline && col.tagline.toLowerCase().includes(q))
      );
    }

    // Filter by Category
    if (selectedCategory !== "all") {
      result = result.filter(
        (col) => col.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Sort by selection
    if (selectedSort === "featured") {
      // featured is defined by original array order
    } else if (selectedSort === "newest") {
      result.reverse();
    } else if (selectedSort === "az") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [initialCollections, selectedCategory, selectedSort, searchQuery]);



  // Pagination calculation
  const totalItems = filteredAndSortedCollections.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const paginatedCollections = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedCollections.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedCollections, currentPage, itemsPerPage]);

  return (
    <div className="w-full flex flex-col bg-brand-cream">
      {/* Hero Banner (40vh) */}
      <section className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1200"
          alt="Luxury Jewelry Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL={CREAM_BLUR_DATA_URL}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-light text-brand-white font-serif tracking-widest leading-tight"
          >
            Bộ Sưu Tập
          </motion.h1>
          <div className="gold-divider my-4 bg-brand-gold w-16" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-brand-cream/80 text-sm md:text-base font-sans tracking-[0.15em] uppercase"
          >
            Chất Thơ Vượt Thời Gian, Sự Tinh Hoa Chế Tác
          </motion.p>
        </div>
      </section>

      {/* Main Listing Section */}
      <section className="page-content py-16 flex flex-col">
        {/* Search Query Banner */}
        <AnimatePresence>
          {searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="w-full bg-brand-white border border-brand-gold/25 p-5 mb-8 flex items-center justify-between shadow-sm relative overflow-hidden backdrop-blur-sm"
            >
              {/* Luxury Accent Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-gold" />
              <div className="flex flex-col md:flex-row md:items-center gap-2 pl-4">
                <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-bold">
                  Kết Quả Tìm Kiếm
                </span>
                <span className="hidden md:inline text-brand-gold/60">•</span>
                <p className="text-xs text-brand-charcoal font-light">
                  Đang hiển thị <span className="font-serif italic font-medium text-brand-burgundy text-sm">&ldquo;{searchQuery}&rdquo;</span> trong <span className="font-semibold text-brand-burgundy">{selectedCategory === 'all' ? 'Tất cả Bộ sưu tập' : CATEGORIES.find(c => c.value === selectedCategory)?.label}</span> (Tìm thấy {totalItems} kết quả)
                </p>
              </div>
              <button
                onClick={handleClearSearch}
                className="flex items-center gap-1.5 px-3 py-1.5 border border-brand-gold/15 bg-brand-cream hover:bg-brand-white text-xs uppercase tracking-widest text-brand-charcoal hover:text-brand-burgundy transition-all duration-300 font-semibold rounded-sm"
              >
                Xóa Tìm Kiếm <X size={12} className="text-brand-gold" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Filters and Sorting bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-brand-charcoal/10" style={{ paddingTop: "2.5rem", paddingBottom: "2.5rem", marginBottom: "4rem" }}>
          {/* Categories Pills */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="uppercase tracking-widest text-brand-gray mr-2 flex items-center gap-2 font-medium" style={{ fontSize: "0.875rem" }}>
              <SlidersHorizontal size={15} className="text-brand-burgundy" /> Danh mục:
            </span>
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  style={{ fontSize: "0.875rem", padding: "0.5rem 1.25rem" }}
                  className={`rounded-full font-medium uppercase tracking-widest transition-all duration-300 ${
                    isActive
                      ? "bg-brand-burgundy text-brand-white shadow-md shadow-brand-burgundy/15"
                      : "bg-brand-white text-brand-charcoal hover:bg-brand-cream border border-brand-charcoal/5 hover:border-brand-gold/40"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Sort Dropdown & Display Counter */}
          <div className="flex flex-wrap items-center justify-between w-full lg:w-auto gap-4">
            <span className="uppercase tracking-widest text-brand-gray font-medium" style={{ fontSize: "0.875rem" }}>
              Đang hiển thị <span className="text-brand-charcoal font-semibold">{totalItems}</span> bộ sưu tập
            </span>
            <div className="flex items-center gap-2 bg-brand-white border border-brand-charcoal/5 rounded-md shadow-sm" style={{ padding: "0.5rem 0.75rem" }}>
              <ArrowUpDown size={14} className="text-brand-gold" />
              <select
                value={selectedSort}
                onChange={(e) => {
                  setSelectedSort(e.target.value);
                  setCurrentPage(1);
                }}
                style={{ fontSize: "0.875rem" }}
                className="bg-transparent font-semibold uppercase tracking-widest text-brand-charcoal focus:outline-none cursor-pointer pr-1"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-brand-white text-brand-charcoal font-sans text-xs">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Collection Grid */}
        <AnimatePresence mode="popLayout">
          {totalItems === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-24 bg-brand-white rounded-lg border border-brand-charcoal/5"
            >
              <h3 className="text-2xl font-light font-serif text-brand-charcoal/60 mb-2">Không Tìm Thấy Bộ Sưu Tập Nào</h3>
              <p className="text-brand-gray text-sm">Vui lòng thử chọn một danh mục lọc khác hoặc xóa tìm kiếm.</p>
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            >
              {paginatedCollections.map((col, index) => (
                <motion.div
                  key={col.slug}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex flex-col bg-brand-white border border-brand-charcoal/5 shadow-sm hover:shadow-xl rounded-none overflow-hidden transition-all duration-500"
                >
                  {/* Image Aspect 3:4 */}
                  <Link href={`/collections/${col.slug}`} className="relative block aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={col.image}
                      alt={col.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-[1.06]"
                      placeholder="blur"
                      blurDataURL={CREAM_BLUR_DATA_URL}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Floating Count Badge */}
                    <div className="absolute top-4 right-4 bg-brand-white/90 backdrop-blur-sm border border-brand-gold/20 px-3 py-1 text-xs uppercase tracking-[0.2em] font-semibold text-brand-burgundy shadow-sm">
                      {col.itemCount} Tác phẩm
                    </div>
                  </Link>

                  {/* Details Card */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow text-center items-center justify-between border-t border-brand-charcoal/5 bg-brand-white relative">
                    <div className="flex flex-col items-center">
                      <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-2">
                        {CATEGORIES.find(c => c.value === col.category)?.label || col.category}
                      </span>
                      <h2 className="text-2xl font-light font-serif text-brand-charcoal group-hover:text-brand-burgundy transition-colors duration-300 mb-3">
                        <Link href={`/collections/${col.slug}`}>
                          {col.name}
                        </Link>
                      </h2>
                      <div className="w-8 h-[1px] bg-brand-gold/30 mb-4" />
                      <p className="text-brand-gray text-xs md:text-sm font-light leading-relaxed mb-6 line-clamp-3">
                        {col.description}
                      </p>
                    </div>

                    <Link
                      href={`/collections/${col.slug}`}
                      className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-charcoal hover:text-brand-burgundy group-hover:translate-x-1 transition-all duration-300 flex items-center gap-1.5 border-b border-brand-charcoal/10 pb-0.5 hover:border-brand-burgundy"
                    >
                      Khám Phá Bộ Sưu Tập <ChevronRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pagination Section */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-16 pt-8 border-t border-brand-charcoal/10">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest border transition-all duration-300 ${
                currentPage === 1
                  ? "border-brand-charcoal/10 text-brand-gray/50 cursor-not-allowed"
                  : "border-brand-charcoal/20 text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-white"
              }`}
            >
              Trang trước
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                const isActive = currentPage === page;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-brand-burgundy text-brand-white font-bold"
                        : "bg-brand-white text-brand-charcoal hover:bg-brand-cream border border-brand-charcoal/5"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest border transition-all duration-300 ${
                currentPage === totalPages
                  ? "border-brand-charcoal/10 text-brand-gray/50 cursor-not-allowed"
                  : "border-brand-charcoal/20 text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-white"
              }`}
            >
              Trang sau
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
