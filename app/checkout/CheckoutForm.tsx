"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, CreditCard, QrCode, Truck, Copy, Check } from "lucide-react";
import { useCart, getPriceNumber } from "@/lib/cartContext";

type FormStatus = "idle" | "processing" | "success";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  cardName: string;
  cardNumber: string;
  subscribeNewsletter: boolean;
}

const EMPTY_FORM: FormData = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  cardName: "",
  cardNumber: "",
  subscribeNewsletter: false,
};

function formatCardNumber(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
}

function generateOrderNumber(): string {
  return "ORD-" + Math.random().toString(36).toUpperCase().slice(2, 8);
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {}
  };
  return (
    <button
      type="button"
      onClick={handleCopy}
      className="p-1 hover:bg-brand-charcoal/5 rounded transition-colors text-brand-gold hover:text-brand-burgundy flex items-center justify-center shrink-0"
      title="Sao chép"
    >
      {copied ? <Check size={12} className="text-emerald-600 animate-scale-up" /> : <Copy size={12} />}
    </button>
  );
}

const inputClass =
  "w-full bg-brand-white border border-brand-charcoal/15 px-4 py-3.5 text-sm text-brand-charcoal placeholder:text-brand-gray/50 focus:outline-none focus:border-brand-burgundy transition-all duration-300 font-light rounded-xl";
const labelClass =
  "block text-xs uppercase tracking-[0.15em] text-brand-charcoal/70 font-semibold mb-1.5";

export default function CheckoutForm() {
  const { items, clearCart } = useCart();
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "qr" | "cod">("card");
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    setOrderNumber(generateOrderNumber());
  }, []);

  const subtotal = items.reduce((sum, item) => {
    const price = getPriceNumber(item.price);
    return price ? sum + price * item.quantity : sum;
  }, 0);
  const hasPOA = items.some((i) => getPriceNumber(i.price) === null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (name === "cardNumber") {
      setForm((prev) => ({ ...prev, cardNumber: formatCardNumber(value) }));
      return;
    }
    if (type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: checked }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("processing");
    // Giả lập xử lý thanh toán 1.6s
    await new Promise((r) => setTimeout(r, 1600));
    setStatus("success");
    clearCart();
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        /* Success Screen */
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-brand-white border border-brand-charcoal/5 p-10 md:p-14 shadow-sm flex flex-col items-center text-center rounded-2xl"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <CheckCircle size={56} className="text-brand-burgundy mb-6" strokeWidth={1.5} />
          </motion.div>

          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold block mb-3">
            Đơn Hàng Đã Xác Nhận
          </span>
          <h2 className="text-3xl md:text-4xl font-light font-serif text-brand-charcoal mb-2 tracking-wide">
            Cảm Ơn Bạn
          </h2>
          <p className="text-brand-gray text-sm font-light leading-relaxed mt-1 mb-6 max-w-sm">
            Đơn đặt hàng của bạn đã được ghi nhận thành công và đang được chuẩn bị đóng gói với sự chăm sóc chu đáo nhất từ Rì Rào Store.
          </p>

          <div className="bg-brand-cream border border-brand-gold/20 px-8 py-5 mb-8 text-center rounded-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-gray font-medium mb-1">Mã Đơn Hàng</p>
            <p className="text-xl font-semibold font-serif text-brand-charcoal tracking-widest">{orderNumber}</p>
          </div>

          <p className="text-[12px] text-brand-gray font-light leading-relaxed mb-8 max-w-sm">
            Thông tin xác nhận đơn hàng sẽ sớm được gửi tới <strong className="text-brand-charcoal font-medium">{form.email || "email của bạn"}</strong>.
            Đội ngũ concierge của chúng tôi sẽ liên hệ với bạn qua số điện thoại <strong className="text-brand-charcoal font-medium">{form.phone || "số điện thoại của bạn"}</strong> để sắp xếp giao nhận sản phẩm.
          </p>

          <div className="w-8 h-[1px] bg-brand-gold/40 mb-8" />

          <Link
            href="/collections"
            className="btn-luxury btn-luxury-burgundy flex items-center gap-2"
          >
            Tiếp Tục Khám Phá <ArrowRight size={14} />
          </Link>
        </motion.div>
      ) : (
        /* Checkout Form */
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="bg-brand-white border border-brand-charcoal/5 p-8 md:p-10 shadow-sm flex flex-col gap-8 rounded-2xl"
          noValidate
        >
          {/* Section 1: Billing */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-brand-charcoal font-semibold mb-1">
              Thông Tin Giao Hàng
            </h3>
            <div className="w-6 h-[1px] bg-brand-gold/40 mb-6" />

            <div className="flex flex-col gap-4">
              <div>
                <label className={labelClass}>Họ và Tên *</label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Số Điện Thoại *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Địa chỉ Email (Không bắt buộc)</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Địa chỉ Nhận Hàng *</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Section 2: Payment Method Selection */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-brand-charcoal font-semibold mb-2">
              Phương Thức Thanh Toán
            </h3>
            <div className="w-6 h-[1px] bg-brand-gold/40 mb-5" />

            {/* Selection Tabs with soft rounded corners & luxury styling */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { id: "card", label: "Thẻ ghi nợ", icon: CreditCard },
                { id: "qr", label: "Quét mã QR", icon: QrCode },
                { id: "cod", label: "Khi nhận hàng", icon: Truck }
              ].map((method) => {
                const IconComponent = method.icon;
                return (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setPaymentMethod(method.id as any)}
                    className={`py-3.5 px-2 border text-center transition-all duration-300 rounded-xl text-[10px] md:text-xs font-semibold uppercase tracking-wider flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-2 ${
                      paymentMethod === method.id
                        ? "border-brand-burgundy bg-brand-burgundy/5 text-brand-burgundy font-bold shadow-sm"
                        : "border-brand-charcoal/10 bg-transparent text-brand-charcoal/70 hover:border-brand-burgundy/30"
                    }`}
                  >
                    <IconComponent size={14} className={paymentMethod === method.id ? "text-brand-burgundy" : "text-brand-gray/80"} />
                    <span className="truncate">{method.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Sub-form Render depending on active tab with Framer Motion transitions */}
            <div className="min-h-[140px]">
              <AnimatePresence mode="wait">
                {paymentMethod === "card" && (
                  <motion.div
                    key="card"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-4"
                  >
                    {/* Interactive Credit Card Mockup */}
                    <div className="relative w-full max-w-[320px] aspect-[1.58/1] rounded-2xl p-5 text-brand-white overflow-hidden shadow-md border border-brand-gold/20 bg-gradient-to-br from-brand-charcoal to-[#1f1f1f] flex flex-col justify-between mx-auto mb-4 select-none">
                      {/* Card Glow Effect */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-burgundy/10 rounded-full blur-3xl pointer-events-none" />

                      {/* Card Header */}
                      <div className="flex justify-between items-start z-10">
                        <span className="font-serif font-light text-[11px] tracking-[0.2em] text-brand-gold">RÌ RÀO STORE</span>
                        <div className="w-8 h-5.5 bg-brand-white/10 rounded backdrop-blur-sm flex items-center justify-center">
                          <CreditCard size={12} className="text-brand-gold" />
                        </div>
                      </div>

                      {/* Card Chip */}
                      <div className="w-9 h-7 bg-gradient-to-br from-brand-gold/70 to-brand-gold/40 rounded-md relative z-10 shadow-inner">
                        <div className="absolute inset-y-0 left-2.5 w-[1px] bg-brand-charcoal/20" />
                        <div className="absolute inset-y-0 right-2.5 w-[1px] bg-brand-charcoal/20" />
                        <div className="absolute inset-x-0 top-2.5 h-[1px] bg-brand-charcoal/20" />
                        <div className="absolute inset-x-0 bottom-2.5 h-[1px] bg-brand-charcoal/20" />
                      </div>

                      {/* Card Info */}
                      <div className="z-10 flex flex-col gap-2">
                        {/* Card Number */}
                        <div className="font-mono text-sm tracking-[0.18em] text-brand-white/90">
                          {form.cardNumber || "•••• •••• •••• ••••"}
                        </div>
                        {/* Cardholder Name & Expiry */}
                        <div className="flex justify-between items-end">
                          <div className="flex flex-col gap-0.5">
                            <span className="text-[7px] uppercase tracking-widest text-brand-white/40">Chủ thẻ</span>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-brand-white/90 truncate max-w-[170px]">
                              {form.cardName || "TEN CHU THE"}
                            </span>
                          </div>
                          <div className="flex flex-col gap-0.5 items-end">
                            <span className="text-[7px] uppercase tracking-widest text-brand-white/40">Hạn dùng</span>
                            <span className="font-mono text-[10px] text-brand-white/90">12/32</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Số Thẻ Thanh Toán</label>
                        <div className="relative">
                          <input
                            type="text"
                            name="cardNumber"
                            value={form.cardNumber}
                            onChange={handleChange}
                            className={inputClass + " pl-10"}
                          />
                          <CreditCard
                            size={16}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-gray/50 pointer-events-none"
                          />
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>Tên Trên Thẻ</label>
                        <input
                          type="text"
                          name="cardName"
                          value={form.cardName}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {paymentMethod === "qr" && (
                  <motion.div
                    key="qr"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-brand-cream/50 border border-brand-gold/15 p-5 md:p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6"
                  >
                    {/* Stylized QR Code SVG */}
                    <div className="w-28 h-28 bg-brand-white border border-brand-gold/20 p-2 rounded-xl shadow-inner shrink-0 flex items-center justify-center relative select-none">
                      <svg viewBox="0 0 100 100" className="w-full h-full text-brand-charcoal">
                        <rect width="24" height="24" x="5" y="5" stroke="currentColor" strokeWidth="4.5" fill="none" />
                        <rect width="8" height="8" x="13" y="13" fill="currentColor" />
                        <rect width="24" height="24" x="71" y="5" stroke="currentColor" strokeWidth="4.5" fill="none" />
                        <rect width="8" height="8" x="79" y="13" fill="currentColor" />
                        <rect width="24" height="24" x="5" y="71" stroke="currentColor" strokeWidth="4.5" fill="none" />
                        <rect width="8" height="8" x="13" y="79" fill="currentColor" />
                        
                        <path d="M 35 5 h 4 v 4 h -4 z M 45 5 h 4 v 4 h -4 z M 55 5 h 4 v 4 h -4 z M 65 5 h 4 v 4 h -4 z" fill="currentColor" />
                        <path d="M 35 15 h 4 v 4 h -4 z M 45 15 h 4 v 4 h -4 z M 55 15 h 4 v 4 h -4 z M 65 15 h 4 v 4 h -4 z" fill="currentColor" />
                        <path d="M 35 25 h 4 v 4 h -4 z M 50 25 h 4 v 4 h -4 z M 60 25 h 4 v 4 h -4 z" fill="currentColor" />
                        <path d="M 5 35 h 4 v 4 h -4 z M 15 35 h 4 v 4 h -4 z M 25 35 h 4 v 4 h -4 z M 35 35 h 4 v 4 h -4 z M 45 35 h 4 v 4 h -4 z M 55 35 h 4 v 4 h -4 z M 65 35 h 4 v 4 h -4 z M 75 35 h 4 v 4 h -4 z M 85 35 h 4 v 4 h -4 z M 91 35 h 4 v 4 h -4 z" fill="currentColor" />
                        <path d="M 5 45 h 4 v 4 h -4 z M 20 45 h 4 v 4 h -4 z M 40 45 h 4 v 4 h -4 z M 50 45 h 4 v 4 h -4 z M 70 45 h 4 v 4 h -4 z M 80 45 h 4 v 4 h -4 z M 91 45 h 4 v 4 h -4 z" fill="currentColor" />
                        <path d="M 10 55 h 4 v 4 h -4 z M 30 55 h 4 v 4 h -4 z M 40 55 h 4 v 4 h -4 z M 60 55 h 4 v 4 h -4 z M 85 55 h 4 v 4 h -4 z" fill="currentColor" />
                        <path d="M 5 65 h 4 v 4 h -4 z M 15 65 h 4 v 4 h -4 z M 25 65 h 4 v 4 h -4 z M 35 65 h 4 v 4 h -4 z M 55 65 h 4 v 4 h -4 z M 65 65 h 4 v 4 h -4 z M 75 65 h 4 v 4 h -4 z M 85 65 h 4 v 4 h -4 z M 91 65 h 4 v 4 h -4 z" fill="currentColor" />
                        <path d="M 35 75 h 4 v 4 h -4 z M 45 75 h 4 v 4 h -4 z M 55 75 h 4 v 4 h -4 z M 65 75 h 4 v 4 h -4 z M 80 75 h 4 v 4 h -4 z" fill="currentColor" />
                        <path d="M 35 85 h 4 v 4 h -4 z M 45 85 h 4 v 4 h -4 z M 55 85 h 4 v 4 h -4 z M 65 85 h 4 v 4 h -4 z M 75 85 h 4 v 4 h -4 z M 91 85 h 4 v 4 h -4 z" fill="currentColor" />
                        <path d="M 35 91 h 4 v 4 h -4 z M 45 91 h 4 v 4 h -4 z M 55 91 h 4 v 4 h -4 z M 65 91 h 4 v 4 h -4 z M 85 91 h 4 v 4 h -4 z" fill="currentColor" />
                      </svg>
                      {/* Logo center */}
                      <div className="absolute inset-0 m-auto w-6.5 h-6.5 rounded bg-brand-charcoal border border-brand-gold/30 flex items-center justify-center shadow">
                        <span className="font-serif text-[6px] font-bold text-brand-gold">RÌ RÀO</span>
                      </div>
                    </div>

                    {/* QR Details */}
                    <div className="flex-1 w-full text-left flex flex-col gap-2">
                      <p className="text-xs uppercase tracking-[0.15em] text-brand-gold font-bold">
                        Quét Mã QR Chuyển Khoản
                      </p>
                      <div className="grid grid-cols-3 gap-y-1 text-xs">
                        <span className="text-brand-gray font-light">Ngân hàng:</span>
                        <span className="col-span-2 font-medium text-brand-charcoal">Vietcombank</span>

                        <span className="text-brand-gray font-light">Số tài khoản:</span>
                        <span className="col-span-2 font-medium text-brand-charcoal flex items-center gap-1.5 font-mono">
                          1023456789
                          <CopyButton text="1023456789" />
                        </span>

                        <span className="text-brand-gray font-light">Chủ tài khoản:</span>
                        <span className="col-span-2 font-medium text-brand-charcoal uppercase">NGUYEN YEN NHI</span>

                        <span className="text-brand-gray font-light">Nội dung CK:</span>
                        <span className="col-span-2 font-medium text-brand-charcoal flex items-center gap-1.5 font-mono">
                          {orderNumber}
                          <CopyButton text={orderNumber} />
                        </span>
                      </div>
                      <p className="text-[10px] text-brand-gray/80 font-light leading-relaxed mt-1.5 border-t border-brand-gold/10 pt-1.5">
                        * Bạn có thể chuyển khoản trực tiếp qua ngân hàng. Hệ thống của chúng tôi sẽ tự động phê duyệt đơn hàng ngay khi bấm hoàn tất đặt hàng.
                      </p>
                    </div>
                  </motion.div>
                )}

                {paymentMethod === "cod" && (
                  <motion.div
                    key="cod"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-brand-cream/50 border border-brand-gold/15 p-5 md:p-6 rounded-2xl flex flex-col items-center gap-4 text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shadow-inner shrink-0">
                      <Truck size={22} strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-1 max-w-sm">
                      <h4 className="text-xs uppercase tracking-[0.15em] text-brand-gold font-bold">
                        Giao Hàng Miễn Phí & Kiểm Tra Tại Chỗ
                      </h4>
                      <p className="text-xs font-serif italic text-brand-gray/80 mt-0.5">
                        &ldquo;Tuyệt tác trao tay, an tâm tuyệt đối&rdquo;
                      </p>
                      <p className="text-[11px] text-brand-gray font-light leading-relaxed mt-1.5">
                        Các tạo tác của Rì Rào Store sẽ được vận chuyển bảo mật cao miễn phí. Bạn hoàn toàn có quyền kiểm tra tính toàn vẹn của sản phẩm trước khi thanh toán bằng tiền mặt trực tiếp cho nhân viên điều phối.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Order total recap */}
          {subtotal > 0 && (
            <div className="border-t border-brand-charcoal/10 pt-5 flex justify-between items-center">
              <span className="text-xs uppercase tracking-widest text-brand-gray font-medium">Tổng tiền thanh toán</span>
              <span className="text-base font-semibold text-brand-charcoal">{subtotal.toLocaleString('vi-VN')} VND</span>
            </div>
          )}
          {hasPOA && (
            <p className="text-[11px] text-brand-gray font-light italic -mt-4">
              * Các tạo tác đánh dấu &ldquo;Liên hệ để biết giá&rdquo; sẽ được bộ phận dịch vụ khách hàng liên hệ tư vấn và xác nhận riêng biệt.
            </p>
          )}

          {/* Newsletter opt-in */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <div className="relative mt-0.5 shrink-0">
              <input
                type="checkbox"
                name="subscribeNewsletter"
                checked={form.subscribeNewsletter}
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="w-4 h-4 border border-brand-charcoal/25 rounded peer-checked:bg-brand-burgundy peer-checked:border-brand-burgundy transition-all duration-200 flex items-center justify-center">
                {form.subscribeNewsletter && (
                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>
            <span className="text-[0.75rem] text-brand-charcoal/60 font-light leading-relaxed group-hover:text-brand-charcoal/80 transition-colors">
              Tôi muốn nhận thông tin về các bộ sưu tập mới nhất, triển lãm và ưu đãi độc quyền từ Rì Rào Store qua email.
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "processing"}
            className="w-full py-4 btn-luxury btn-luxury-burgundy flex items-center justify-center font-sans uppercase font-semibold text-xs tracking-widest disabled:opacity-60 disabled:cursor-not-allowed rounded-xl"
          >
            {status === "processing" ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-brand-white/40 border-t-brand-white rounded-full animate-spin mr-2.5" />
                Đang chuẩn bị đơn hàng...
              </>
            ) : (
              <>
                Hoàn Tất Đặt Hàng <ArrowRight size={14} className="ml-2" />
              </>
            )}
          </button>

          <p className="text-xs text-brand-gray/60 text-center font-light -mt-3">
            Đây là phiên bản trải nghiệm mua sắm mô phỏng — đơn hàng của bạn sẽ luôn được đặt thành công.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
