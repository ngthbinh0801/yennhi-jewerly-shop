"use client";

import React, { useState, useMemo } from "react";
import { MapPin, Phone, Clock, ArrowRight, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BOUTIQUES_DATA, Boutique } from "@/lib/mockData";

const REGION_VN: Record<string, string> = {
  "North": "MIỀN BẮC",
  "Central": "MIỀN TRUNG",
  "South": "MIỀN NAM"
};

const MAP_MARKERS = [
  { name: "Rì Rào Store – Phú Quốc", x: "32%", y: "82%" },
];

export default function BoutiquesClient() {
  const [activeBoutiqueName, setActiveBoutiqueName] = useState<string | null>(
    "Rì Rào Store – Phú Quốc"
  );
  const [bookingBoutique, setBookingBoutique] = useState<Boutique | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const activeBoutique = useMemo(() => {
    return BOUTIQUES_DATA.find((b) => b.name === activeBoutiqueName) || BOUTIQUES_DATA[0];
  }, [activeBoutiqueName]);

  const handleBookAppointment = (boutique: Boutique) => {
    setBookingBoutique(boutique);
    setBookingSuccess(false);
  };

  const submitAppointment = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingBoutique(null);
      setBookingSuccess(false);
    }, 2500);
  };

  return (
    <div className="w-full flex flex-col bg-brand-cream relative">
      {/* Dynamic Appointment Modal */}
      <AnimatePresence>
        {bookingBoutique && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(27, 42, 48, 0.80)",
              backdropFilter: "blur(4px)",
              padding: "1rem",
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(190, 163, 123, 0.25)",
                padding: "2rem",
                maxWidth: "28rem",
                width: "100%",
                position: "relative",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.4)",
              }}
            >
              <button
                onClick={() => setBookingBoutique(null)}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  color: "#1B2A30",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
              >
                <X size={20} />
              </button>

              {bookingSuccess ? (
                <div style={{ textAlign: "center", padding: "2rem 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <div style={{
                    width: "4rem", height: "4rem",
                    backgroundColor: "#C7756D",
                    color: "#FFFFFF",
                    borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "1.5rem",
                  }}>
                    <Check size={32} />
                  </div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 300, fontFamily: "serif", color: "#1B2A30", marginBottom: "0.5rem" }}>
                    Lịch Hẹn Đã Thiết Lập
                  </h3>
                  <p style={{ color: "#8A999E", fontSize: "0.75rem", lineHeight: 1.6, maxWidth: "20rem" }}>
                    Cảm ơn bạn. Quản lý dịch vụ concierge của Rì Rào Store sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận thông tin chi tiết lịch hẹn tư vấn.
                  </p>
                </div>
              ) : (
                <form onSubmit={submitAppointment} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <span style={{ fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.25em", color: "#BEA37B", fontWeight: 700 }}>
                    Đăng Ký Tư Vấn Concierge
                  </span>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 300, fontFamily: "serif", color: "#1B2A30", lineHeight: 1.25 }}>
                    Ghé Thăm Flagship {bookingBoutique.city}
                  </h3>
                  <p style={{ color: "#8A999E", fontSize: "0.75rem", lineHeight: 1.6, marginBottom: "0.5rem" }}>
                    Lịch hẹn tư vấn riêng tư và cá nhân hóa tại {bookingBoutique.name}.
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <label style={{ fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#8A999E", fontWeight: 600 }}>Ngày Hẹn</label>
                    <input
                      required
                      type="date"
                      style={{ border: "1px solid rgba(27,42,48,0.10)", padding: "0.5rem 0.75rem", fontSize: "0.75rem", fontWeight: 600, background: "#FAF6F0", outline: "none" }}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <label style={{ fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#8A999E", fontWeight: 600 }}>Khung Giờ Mong Muốn</label>
                    <select
                      required
                      style={{ border: "1px solid rgba(27,42,48,0.10)", padding: "0.5rem 0.75rem", fontSize: "0.75rem", fontWeight: 600, background: "#FAF6F0", outline: "none" }}
                    >
                      <option>Buổi sáng (10:00 sáng - 12:00 trưa)</option>
                      <option>Buổi chiều (12:00 trưa - 4:00 chiều)</option>
                      <option>Buổi tối (4:00 chiều - 7:00 tối)</option>
                    </select>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                    <label style={{ fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#8A999E", fontWeight: 600 }}>Họ và Tên</label>
                    <input
                      required
                      type="text"
                      placeholder="Ví dụ: Nguyễn Yến Nhi"
                      style={{ border: "1px solid rgba(27,42,48,0.10)", padding: "0.5rem 0.75rem", fontSize: "0.75rem", background: "#FAF6F0", outline: "none" }}
                    />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", marginBottom: "0.5rem" }}>
                    <label style={{ fontSize: "0.625rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#8A999E", fontWeight: 600 }}>Địa Chỉ Email</label>
                    <input
                      required
                      type="email"
                      placeholder="Ví dụ: yennhi@gmail.com"
                      style={{ border: "1px solid rgba(27,42,48,0.10)", padding: "0.5rem 0.75rem", fontSize: "0.75rem", background: "#FAF6F0", outline: "none" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-luxury btn-luxury-burgundy"
                    style={{ width: "100%", padding: "0.75rem", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em" }}
                  >
                    Yêu Cầu Đặt Lịch Hẹn
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* 2. Map & Dynamic Location Interface */}
      <section className="page-content py-12 flex flex-col">
        {/* 60vh Stylized Visual Map Box */}
        <div className="w-full h-[60vh] bg-[#171A21] border border-brand-gold/15 relative overflow-hidden rounded-none shadow-2xl mb-12 flex items-center justify-center">
          {/* Grid lines layout backdrop for luxury feeling */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(201,169,97,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(201,169,97,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(114,47,55,0.05)_0%,transparent_70%)] pointer-events-none" />
          
          {/* Stylized high end global schematic backdrop */}
          <div className="absolute opacity-25 w-[110%] h-[110%] pointer-events-none select-none flex items-center justify-center">
            <div className="text-[200px] font-serif font-light text-brand-white/5 tracking-widest leading-none select-none rotate-6 select-none italic select-none">
              Rì Rào Store
            </div>
          </div>

          {/* Map Title overlay */}
          <div className="absolute top-4 left-4 z-10 bg-brand-charcoal/80 border border-brand-gold/15 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] font-medium text-brand-white select-none">
            Hệ Thống Cửa Hàng Rì Rào Store — Trên Khắp Việt Nam
          </div>

          {/* Stylized World Vector Dots Mapping */}
          <div className="relative w-full h-full max-w-5xl mx-auto flex items-center justify-center">
            {MAP_MARKERS.map((marker) => {
              const bData = BOUTIQUES_DATA.find((b) => b.name === marker.name);
              if (!bData) return null;
              
              const isSelected = activeBoutiqueName === marker.name;
              const matchesFilter = BOUTIQUES_DATA.some((fb) => fb.name === marker.name);

              return (
                <div
                  key={marker.name}
                  style={{ left: marker.x, top: marker.y }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500 ${
                    matchesFilter ? "opacity-100 scale-100" : "opacity-20 scale-75 pointer-events-none"
                  }`}
                >
                  <button
                    onClick={() => setActiveBoutiqueName(marker.name)}
                    className="relative group focus:outline-none"
                  >
                    {/* Ring animation */}
                    <span className={`absolute -inset-3 rounded-full border transition-all duration-500 ${
                      isSelected
                        ? "border-brand-gold scale-120 animate-ping opacity-75 bg-brand-gold/10"
                        : "border-brand-burgundy/40 group-hover:scale-110 group-hover:border-brand-gold/60"
                    }`} />
                    
                    {/* Core Point dot */}
                    <div className={`w-3.5 h-3.5 rounded-full border border-brand-white shadow-md transition-all duration-300 ${
                      isSelected
                        ? "bg-brand-gold scale-125"
                        : "bg-brand-burgundy group-hover:bg-brand-gold"
                    }`} />

                    {/* Floating Info Tooltip */}
                    <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 bg-brand-charcoal border border-brand-gold/20 px-3 py-1.5 rounded-none shadow-xl pointer-events-none transition-all duration-300 w-44 text-center z-30 ${
                      isSelected 
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0"
                    }`}>
                      <div className="text-[10px] font-bold text-brand-white truncate">{bData.name}</div>
                      <div className="text-[9px] text-brand-gold font-medium uppercase tracking-widest mt-0.5">{bData.city}</div>
                    </div>
                  </button>
                </div>
              );
            })}

            {/* Visual Radar sweep animation */}
            <div className="absolute w-[400px] h-[400px] border border-brand-gold/5 rounded-full bg-[conic-gradient(from_0deg,rgba(201,169,97,0.08)_0deg,transparent_90deg)] animate-spin [animation-duration:12s] pointer-events-none" />
            <div className="absolute w-[200px] h-[200px] border border-brand-gold/5 rounded-full pointer-events-none" />
          </div>

          {/* Active boutique status indicator */}
          <div className="absolute bottom-4 right-4 z-10 bg-brand-charcoal/80 border border-brand-gold/15 p-4 max-w-sm rounded-none shadow-xl text-brand-white">
            <span className="text-[9px] uppercase tracking-[0.2em] text-brand-gold font-bold block mb-1">
              Tọa Độ Cửa Hàng Đang Chọn
            </span>
            <h4 className="text-sm font-light font-serif mb-1 truncate text-brand-cream">{activeBoutique.name}</h4>
            <p className="text-[10px] text-brand-cream/80 font-light truncate mb-2">{activeBoutique.address}</p>
            <button
              onClick={() => handleBookAppointment(activeBoutique)}
              className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold hover:text-brand-burgundy transition-colors flex items-center gap-1.5"
            >
              Đặt lịch hẹn tư vấn <ArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* Directory Listing Below - Grid 2 columns */}
        <div className="w-full flex flex-col mb-16">
          <div className="mb-10 text-center">
            <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-semibold block mb-1">
              Danh Mục Tra Cứu
            </span>
            <h2 className="text-3xl font-light font-serif text-brand-charcoal">
              Hệ Thống Cửa Hàng Tại Việt Nam
            </h2>
            <div className="gold-divider bg-brand-gold w-12 my-3" />
          </div>

          {BOUTIQUES_DATA.length === 0 ? (
            <div className="text-center py-16 bg-brand-white border border-brand-charcoal/5">
              <p className="text-brand-gray text-sm">Không tìm thấy cửa hàng flagship nào khớp với thông tin tìm kiếm của bạn.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BOUTIQUES_DATA.map((boutique) => {
                const isActive = activeBoutiqueName === boutique.name;
                return (
                  <motion.div
                    key={boutique.name}
                    layout
                    className={`flex flex-col bg-brand-white p-6 md:p-8 border shadow-sm transition-all duration-300 ${
                      isActive
                        ? "border-brand-burgundy ring-1 ring-brand-burgundy/10 shadow-lg"
                        : "border-brand-charcoal/5 hover:border-brand-gold/40 hover:shadow-md"
                    }`}
                  >
                    {/* Header: Boutique info */}
                    <div className="flex justify-between items-start gap-4 mb-4" style={{ paddingLeft: '1rem' }}>
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-bold block mb-1">
                          FLAGSHIP {REGION_VN[boutique.region] || boutique.region}
                        </span>
                        <h3 className="text-xl font-light font-serif text-brand-charcoal hover:text-brand-burgundy transition-colors">
                          <button onClick={() => {
                            setActiveBoutiqueName(boutique.name);
                            // Scroll visual map into view on click
                            document.querySelector(".h-\\[60vh\\]")?.scrollIntoView({ behavior: "smooth", block: "center" });
                          }}>
                            {boutique.name}
                          </button>
                        </h3>
                      </div>
                      <div className="px-2.5 py-1 text-[9px] uppercase tracking-widest font-semibold border border-brand-charcoal/5 bg-brand-cream/80 text-brand-charcoal">
                        {boutique.city}
                      </div>
                    </div>

                    <div className="w-full h-[1px] bg-brand-charcoal/5 mb-4" />

                    {/* Address & Phone details */}
                    <div className="flex flex-col gap-3 flex-grow mb-6 text-xs text-brand-charcoal/80 font-light" style={{ paddingLeft: '1rem' }}>
                      <div className="flex items-start gap-2.5">
                        <MapPin size={14} className="text-brand-burgundy shrink-0 mt-0.5" />
                        <span>{boutique.address}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Phone size={14} className="text-brand-burgundy shrink-0 mt-0.5" />
                        <span>{boutique.phone}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Clock size={14} className="text-brand-burgundy shrink-0 mt-0.5" />
                        <div className="flex flex-col gap-0.5">
                          {boutique.hours.map((h, i) => (
                            <span key={i}>{h}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-4 mt-auto" style={{ paddingLeft: '1rem' }}>
                      <button
                        onClick={() => handleBookAppointment(boutique)}
                        className="btn-luxury btn-luxury-burgundy flex-1 py-2.5 text-[10px] font-semibold uppercase tracking-widest shadow-sm hover:shadow-md"
                      >
                        Đặt Lịch Hẹn
                      </button>
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(boutique.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] uppercase tracking-widest font-bold text-brand-charcoal hover:text-brand-burgundy py-2 px-4 border border-brand-charcoal/10 hover:border-brand-burgundy/30 transition-all flex items-center gap-1 shrink-0"
                      >
                        Chỉ Đường
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
