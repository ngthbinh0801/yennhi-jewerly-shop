"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, Clock, Check, Send, AlertCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Yêu cầu Trang sức Cao cấp",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setValidationError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // Basic Validation
    if (!formData.name.trim()) {
      setValidationError("Vui lòng nhập họ và tên của bạn.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setValidationError("Vui lòng nhập địa chỉ email hợp lệ.");
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setValidationError("Vui lòng nhập nội dung tin nhắn dài ít nhất 10 ký tự.");
      return;
    }

    setFormStatus("submitting");

    // Simulate luxury server API intake latency
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "Yêu cầu Trang sức Cao cấp",
        message: ""
      });
    }, 1800);
  };

  return (
    <div className="w-full flex flex-col bg-brand-cream">
      {/* 1. Short Locator Hero */}
      <section className="relative h-[35vh] w-full flex items-center justify-center overflow-hidden bg-brand-charcoal">
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-2 block"
          >
            Dịch vụ Khách hàng Rì Rào Store
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-brand-white font-serif tracking-widest leading-none mb-3"
          >
            Liên Hệ Chúng Tôi
          </motion.h1>
          <div className="gold-divider my-3 bg-brand-gold w-12" />
        </div>
      </section>

      {/* 2. Form Intake Column Grid */}
      <section className="max-w-[1440px] w-full mx-auto px-4 md:px-8 lg:px-12 py-24 bg-brand-cream">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* LEFT SECTION (6 cols - Form) */}
          <div className="lg:col-span-6 bg-brand-white border border-brand-charcoal/5 shadow-lg relative" style={{ padding: '3rem' }}>
            <span className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-bold block mb-1">
              Biểu Mẫu Đăng Ký Yêu Cầu
            </span>
            <h2 className="text-3xl font-light font-serif text-brand-charcoal mb-4 leading-tight">
              Yêu Cầu Concierge
            </h2>
            <p className="text-brand-gray text-xs md:text-sm font-light leading-relaxed mb-8">
              Cho dù bạn muốn yêu cầu chi tiết giám tuyển trang sức cao cấp hay cần điều phối lịch hẹn cửa hàng, vui lòng gửi yêu cầu của bạn dưới đây. Các cố vấn của chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.
            </p>

            <AnimatePresence mode="wait">
              {formStatus === "success" ? (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-16 text-center flex flex-col items-center justify-center bg-brand-cream/35 border border-brand-gold/10"
                >
                  <div className="w-16 h-16 bg-brand-burgundy text-brand-white rounded-full flex items-center justify-center mb-6 shadow-md">
                    <Check size={28} />
                  </div>
                  <h3 className="text-2xl font-light font-serif text-brand-charcoal mb-2">Yêu Cầu Đã Được Gửi</h3>
                  <p className="text-brand-gray text-xs leading-relaxed max-w-sm px-6">
                    Yêu cầu của bạn đã được ghi nhận bảo mật. Một cố vấn cao cấp đã được phân công hỗ trợ bạn và sẽ sớm gửi email phản hồi thông tin chi tiết.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="mt-8 text-xs uppercase tracking-widest font-semibold text-brand-burgundy border-b border-brand-burgundy pb-0.5 hover:text-brand-charcoal hover:border-brand-charcoal transition-all"
                  >
                    Gửi Thêm Yêu Cầu Khác
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form-screen"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  {/* Alert Error Box */}
                  {validationError && (
                    <div className="bg-brand-burgundy/5 border border-brand-burgundy/25 text-brand-burgundy px-4 py-3 text-xs flex items-center gap-2">
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-brand-gray font-bold">
                      Họ và Tên <span className="text-brand-burgundy">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder=""
                      value={formData.name}
                      onChange={handleChange}
                      disabled={formStatus === "submitting"}
                      className="border border-brand-charcoal/10 px-4 py-3 text-xs rounded-none bg-brand-cream/30 focus:outline-none focus:border-brand-burgundy focus:bg-brand-white transition-all text-brand-charcoal"
                    />
                  </div>

                  {/* Email & Phone grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-brand-gray font-bold">
                        Địa Chỉ Email <span className="text-brand-burgundy">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder=""
                        value={formData.email}
                        onChange={handleChange}
                        disabled={formStatus === "submitting"}
                        className="border border-brand-charcoal/10 px-4 py-3 text-xs rounded-none bg-brand-cream/30 focus:outline-none focus:border-brand-burgundy focus:bg-brand-white transition-all text-brand-charcoal"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-brand-gray font-bold">
                        Số Điện Thoại
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder=""
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={formStatus === "submitting"}
                        className="border border-brand-charcoal/10 px-4 py-3 text-xs rounded-none bg-brand-cream/30 focus:outline-none focus:border-brand-burgundy focus:bg-brand-white transition-all text-brand-charcoal"
                      />
                    </div>
                  </div>

                  {/* Subject dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-brand-gray font-bold">
                      Mục Đích Yêu Cầu
                    </label>
                    <div className="relative bg-brand-cream/30 border border-brand-charcoal/10 px-2 py-1 focus-within:border-brand-burgundy focus-within:bg-brand-white transition-all">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={formStatus === "submitting"}
                        className="w-full bg-transparent border-none py-2 px-2 text-xs font-semibold uppercase tracking-widest text-brand-charcoal focus:outline-none cursor-pointer"
                      >
                        <option>Yêu cầu Trang sức Cao cấp</option>
                        <option>Tư vấn Trang sức Cưới</option>
                        <option>Đồng hồ & Nghệ thuật Chế tác</option>
                        <option>Tham quan Triển lãm & Di sản</option>
                        <option>Dịch vụ Cá nhân hóa chung</option>
                      </select>
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-brand-gray font-bold">
                      Nội Dung Tin Nhắn <span className="text-brand-burgundy">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder=""
                      value={formData.message}
                      onChange={handleChange}
                      disabled={formStatus === "submitting"}
                      className="border border-brand-charcoal/10 px-4 py-3 text-xs rounded-none bg-brand-cream/30 focus:outline-none focus:border-brand-burgundy focus:bg-brand-white transition-all text-brand-charcoal resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full py-4 btn-luxury btn-luxury-burgundy flex items-center justify-center gap-2 font-semibold text-xs tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-brand-white border-t-transparent rounded-full animate-spin mr-1" />
                        Đang truyền tin nhắn...
                      </>
                    ) : (
                      <>
                        <Send size={14} /> Gửi Tin Nhắn
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT SECTION (6 cols - Contact Details & Card) */}
          <div className="lg:col-span-6 flex flex-col gap-8 lg:sticky lg:top-32">
            
            {/* Customer Care Hotline Box */}
            <div className="bg-brand-white border border-brand-charcoal/5 shadow-md" style={{ padding: '3rem' }}>
              <span className="text-[9px] uppercase tracking-[0.25em] text-brand-gold font-bold block mb-3">
                Quan Hệ Khách Hàng
              </span>
              <h3 className="text-xl font-light font-serif text-brand-charcoal mb-5">
                Tổng Đài Concierge Điện Thoại Rì Rào Store
              </h3>
              <p className="text-brand-gray text-xs leading-[2] mb-8 font-light">
                Đội ngũ nhân viên quan hệ khách hàng cao cấp của chúng tôi rất hân hạnh được hỗ trợ cá nhân hóa liên quan đến đơn đặt hàng, tùy chỉnh kích thước và điều phối cửa hàng.
              </p>

              <div className="flex flex-col gap-5 font-sans text-xs">
                <a
                  href="tel:+33155041111"
                  className="flex items-center gap-3 text-brand-charcoal hover:text-brand-burgundy transition-all duration-300 font-semibold"
                >
                  <Phone size={14} className="text-brand-burgundy shrink-0" />
                  <span>+33 1 55 04 11 11</span>
                </a>
                <a
                  href="mailto:rirao_support@gmail.com"
                  className="flex items-center gap-3 text-brand-charcoal hover:text-brand-burgundy transition-all duration-300 font-semibold"
                >
                  <Mail size={14} className="text-brand-burgundy shrink-0" />
                  <span>rirao_support@gmail.com</span>
                </a>
                <div className="flex items-start gap-3 text-brand-gray">
                  <Clock size={14} className="text-brand-burgundy shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-2">
                    <span>Thứ Hai - Thứ Bảy: 9:00 sáng - 8:00 tối</span>
                    <span>Chủ Nhật: 10:00 sáng - 6:00 tối (GMT+7)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Boutique Appointment Quick link Card */}
            <div className="bg-brand-white border border-brand-charcoal/5 shadow-md flex flex-col gap-5" style={{ padding: '3rem' }}>
              <h3 className="text-xl font-light font-serif text-brand-charcoal">
                Đặt Lịch Hẹn Tư Vấn Cửa Hàng
              </h3>
              <p className="text-brand-gray text-xs leading-[2] font-light">
                Để trải nghiệm sớm các sản phẩm, các tình yêu vui lòng đặt trước lịch hẹn nhé!
              </p>
              <Link
                href="/boutiques"
                className="py-3 px-6 border border-brand-charcoal/20 text-brand-charcoal hover:border-brand-burgundy hover:text-brand-burgundy text-[10px] font-semibold uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all duration-300 self-stretch text-center"
              >
                Định Vị & Đặt Lịch Hẹn Cửa Hàng <ArrowRight size={12} />
              </Link>
            </div>

            {/* Social Channels directory */}
            <div className="bg-brand-white border border-brand-charcoal/5 shadow-md flex flex-col gap-5" style={{ padding: '3rem' }}>
              <span className="text-[9px] uppercase tracking-widest text-brand-gray font-bold">Mạng xã hội</span>
              <div className="flex flex-col gap-4 text-xs font-semibold uppercase tracking-widest text-brand-charcoal font-sans">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-burgundy transition-all">Instagram</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-burgundy transition-all">YouTube</a>
                <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-burgundy transition-all">Pinterest</a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
