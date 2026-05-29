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
      <section className="page-content flex flex-col" style={{ paddingTop: "4rem", paddingBottom: "3rem" }}>
        {/* Google Maps Embed */}
        <div style={{ position: "relative", width: "100%", height: "60vh", marginBottom: "3rem", overflow: "hidden", borderRadius: "14px", boxShadow: "0 16px 48px -12px rgba(0,0,0,0.18)" }}>
          <iframe
            key={activeBoutique.name}
            src={`https://maps.google.com/maps?q=${activeBoutique.coordinates.lat},${activeBoutique.coordinates.lng}&z=16&output=embed&hl=vi`}
            style={{ width: "100%", height: "100%", border: "none", display: "block" }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title={`Bản đồ ${activeBoutique.name}`}
          />

          {/* Info overlay card */}
          <div style={{
            position: "absolute",
            bottom: "1.25rem",
            right: "1.25rem",
            zIndex: 10,
            backgroundColor: "rgba(27,42,48,0.93)",
            border: "1px solid rgba(201,169,97,0.2)",
            padding: "1.125rem 1.375rem",
            maxWidth: "272px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
            backdropFilter: "blur(6px)",
          }}>
            <span style={{ fontSize: "0.5625rem", textTransform: "uppercase", letterSpacing: "0.22em", color: "#C9A961", fontWeight: 700, display: "block", marginBottom: "0.375rem" }}>
              Cửa Hàng Đang Chọn
            </span>
            <h4 style={{ fontSize: "0.9375rem", fontWeight: 300, fontFamily: "serif", color: "#FAF6F0", margin: "0 0 0.25rem", lineHeight: 1.3 }}>
              {activeBoutique.name}
            </h4>
            <p style={{ fontSize: "0.6875rem", color: "rgba(250,246,240,0.6)", fontWeight: 300, margin: "0 0 0.875rem", lineHeight: 1.55 }}>
              {activeBoutique.address}
            </p>
            <button
              onClick={() => handleBookAppointment(activeBoutique)}
              style={{ fontSize: "0.5625rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "#C9A961", fontWeight: 700, background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: "0.375rem" }}
            >
              Đặt lịch hẹn tư vấn <ArrowRight size={11} />
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
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
              {BOUTIQUES_DATA.map((boutique) => {
                const isActive = activeBoutiqueName === boutique.name;
                return (
                  <motion.div
                    key={boutique.name}
                    layout
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "#FFFFFF",
                      border: `1px solid ${isActive ? "#722F37" : "rgba(27,42,48,0.08)"}`,
                      boxShadow: isActive
                        ? "0 20px 40px -12px rgba(114,47,55,0.18)"
                        : "0 2px 8px rgba(0,0,0,0.04)",
                      overflow: "hidden",
                      transition: "border-color 0.3s, box-shadow 0.3s",
                    }}
                  >
                    {/* Top accent bar */}
                    <div style={{
                      height: "3px",
                      width: "100%",
                      backgroundColor: isActive ? "#722F37" : "rgba(201,169,97,0.35)",
                      transition: "background-color 0.3s",
                    }} />

                    {/* Card body */}
                    <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, padding: "2.25rem 2.5rem" }}>

                      {/* Header */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "1.75rem" }}>
                        <div>
                          <span style={{
                            fontSize: "0.5625rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.3em",
                            color: "#C9A961",
                            fontWeight: 700,
                            display: "block",
                            marginBottom: "0.5rem",
                          }}>
                            FLAGSHIP {REGION_VN[boutique.region] || boutique.region}
                          </span>
                          <h3 style={{ fontSize: "1.375rem", fontWeight: 300, fontFamily: "serif", color: "#1B2A30", lineHeight: 1.25, margin: 0 }}>
                            <button
                              onClick={() => {
                                setActiveBoutiqueName(boutique.name);
                                document.querySelector(".h-\\[60vh\\]")?.scrollIntoView({ behavior: "smooth", block: "center" });
                              }}
                              style={{ background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "inherit", fontSize: "inherit", fontWeight: "inherit", color: "inherit", textAlign: "left", transition: "color 0.2s", whiteSpace: "nowrap" }}
                            >
                              {boutique.name}
                            </button>
                          </h3>
                        </div>
                        <span style={{
                          marginTop: "0.25rem",
                          flexShrink: 0,
                          fontSize: "0.5625rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.18em",
                          fontWeight: 700,
                          color: "rgba(27,42,48,0.4)",
                          borderBottom: "1px solid rgba(27,42,48,0.12)",
                          paddingBottom: "2px",
                        }}>
                          {boutique.city}
                        </span>
                      </div>

                      {/* Info rows */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "1.125rem", flexGrow: 1, marginBottom: "2rem" }}>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
                          <MapPin size={13} style={{ color: "#722F37", flexShrink: 0, marginTop: "3px" }} />
                          <span style={{ fontSize: "0.8125rem", color: "rgba(27,42,48,0.65)", fontWeight: 300, lineHeight: 1.65 }}>{boutique.address}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                          <Phone size={13} style={{ color: "#722F37", flexShrink: 0 }} />
                          <span style={{ fontSize: "0.8125rem", color: "rgba(27,42,48,0.65)", fontWeight: 300, letterSpacing: "0.02em" }}>{boutique.phone}</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
                          <Clock size={13} style={{ color: "#722F37", flexShrink: 0, marginTop: "3px" }} />
                          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                            {boutique.hours.map((h, i) => (
                              <span key={i} style={{ fontSize: "0.8125rem", color: "rgba(27,42,48,0.65)", fontWeight: 300 }}>{h}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div style={{ display: "flex", alignItems: "stretch", gap: "0.75rem", marginTop: "auto", paddingTop: "1.5rem", borderTop: "1px solid rgba(27,42,48,0.06)" }}>
                        <button
                          onClick={() => handleBookAppointment(boutique)}
                          className="btn-luxury btn-luxury-burgundy"
                          style={{ flex: 1, padding: "0.75rem 1rem", fontSize: "0.625rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em" }}
                        >
                          Đặt Lịch Hẹn
                        </button>
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(boutique.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            flexShrink: 0,
                            fontSize: "0.625rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.12em",
                            fontWeight: 700,
                            color: "rgba(27,42,48,0.5)",
                            padding: "0.75rem 1.25rem",
                            border: "1px solid rgba(27,42,48,0.1)",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.375rem",
                            textDecoration: "none",
                            transition: "color 0.2s, border-color 0.2s",
                          }}
                        >
                          Chỉ Đường
                        </a>
                      </div>
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
