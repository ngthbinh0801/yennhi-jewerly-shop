"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, CreditCard } from "lucide-react";
import { useCart, getPriceNumber } from "@/lib/cartContext";

type FormStatus = "idle" | "processing" | "success";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  cardName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

const EMPTY_FORM: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  country: "",
  cardName: "",
  cardNumber: "",
  expiry: "",
  cvv: "",
};

function formatCardNumber(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 3) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return digits;
}

function generateOrderNumber(): string {
  return "ORD-" + Math.random().toString(36).toUpperCase().slice(2, 8);
}

const inputClass =
  "w-full bg-brand-white border border-brand-charcoal/20 px-4 py-3 text-sm text-brand-charcoal placeholder:text-brand-gray/60 focus:outline-none focus:border-brand-burgundy transition-colors duration-300 font-light";
const labelClass =
  "block text-xs uppercase tracking-[0.15em] text-brand-charcoal/80 font-semibold mb-1.5";

export default function CheckoutForm() {
  const { items, clearCart } = useCart();
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [validationError, setValidationError] = useState<string | null>(null);
  const [orderNumber, setOrderNumber] = useState("");

  const subtotal = items.reduce((sum, item) => {
    const price = getPriceNumber(item.price);
    return price ? sum + price * item.quantity : sum;
  }, 0);
  const hasPOA = items.some((i) => getPriceNumber(i.price) === null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValidationError(null);

    if (name === "cardNumber") {
      setForm((prev) => ({ ...prev, cardNumber: formatCardNumber(value) }));
      return;
    }
    if (name === "expiry") {
      setForm((prev) => ({ ...prev, expiry: formatExpiry(value) }));
      return;
    }
    if (name === "cvv") {
      setForm((prev) => ({ ...prev, cvv: value.replace(/\D/g, "").slice(0, 4) }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): string | null => {
    if (!form.firstName.trim() || !form.lastName.trim()) return "Please enter your full name.";
    if (!form.email.trim() || !form.email.includes("@")) return "Please enter a valid email address.";
    if (!form.address.trim()) return "Please enter your billing address.";
    if (!form.city.trim()) return "Please enter your city.";
    if (!form.country.trim()) return "Please select your country.";
    if (!form.cardName.trim()) return "Please enter the cardholder name.";
    const rawCard = form.cardNumber.replace(/\s/g, "");
    if (rawCard.length < 13) return "Please enter a valid card number.";
    if (form.expiry.length < 5) return "Please enter a valid expiry date (MM/YY).";
    if (form.cvv.length < 3) return "Please enter a valid CVV.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setValidationError(error);
      return;
    }
    setStatus("processing");
    setOrderNumber(generateOrderNumber());
    await new Promise((r) => setTimeout(r, 2200));
    setStatus("success");
    clearCart();
  };

  const isCardVisa = form.cardNumber.replace(/\s/g, "").startsWith("4");
  const isCardMaster = /^5[1-5]/.test(form.cardNumber.replace(/\s/g, ""));

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        /* Success Screen */
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="bg-brand-white border border-brand-charcoal/5 p-10 md:p-14 shadow-sm flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <CheckCircle size={56} className="text-brand-burgundy mb-6" strokeWidth={1.5} />
          </motion.div>

          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold block mb-3">
            Order Confirmed
          </span>
          <h2 className="text-3xl md:text-4xl font-light font-serif text-brand-charcoal mb-2 tracking-wide">
            Thank You
          </h2>
          <p className="text-brand-gray text-sm font-light leading-relaxed mt-1 mb-6 max-w-sm">
            Your order has been received and is being prepared with the utmost care.
          </p>

          <div className="bg-brand-cream border border-brand-gold/20 px-8 py-5 mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-gray font-medium mb-1">Order Reference</p>
            <p className="text-xl font-semibold font-serif text-brand-charcoal tracking-widest">{orderNumber}</p>
          </div>

          <p className="text-[12px] text-brand-gray font-light leading-relaxed mb-8 max-w-sm">
            A confirmation will be sent to <strong className="text-brand-charcoal font-medium">{form.email}</strong>.
            Our concierge team will be in touch to arrange delivery.
          </p>

          <div className="w-8 h-[1px] bg-brand-gold/40 mb-8" />

          <Link
            href="/collections"
            className="btn-luxury btn-luxury-burgundy flex items-center gap-2"
          >
            Continue Exploring <ArrowRight size={14} />
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
          className="bg-brand-white border border-brand-charcoal/5 p-8 md:p-10 shadow-sm flex flex-col gap-8"
          noValidate
        >
          {/* Validation Error Banner */}
          <AnimatePresence>
            {validationError && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="bg-brand-burgundy/5 border border-brand-burgundy/30 text-brand-burgundy text-sm font-medium px-4 py-3 tracking-wide"
              >
                {validationError}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Section 1: Billing */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-brand-charcoal font-semibold mb-1">
              Billing Information
            </h3>
            <div className="w-6 h-[1px] bg-brand-gold/40 mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelClass}>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Marie"
                  autoComplete="given-name"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Dupont"
                  autoComplete="family-name"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={labelClass}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="marie@example.com"
                  autoComplete="email"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  autoComplete="tel"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className={labelClass}>Street Address *</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="12 Rue de la Paix"
                autoComplete="street-address"
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>City *</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Paris"
                  autoComplete="address-level2"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Country *</label>
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className={inputClass + " cursor-pointer"}
                  autoComplete="country-name"
                >
                  <option value="">Select country</option>
                  {["France", "United States", "United Kingdom", "Germany", "Italy", "Japan", "Singapore", "Australia", "Canada", "Switzerland", "Vietnam"].map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Payment */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-xs uppercase tracking-[0.25em] text-brand-charcoal font-semibold">
                Payment Details
              </h3>
              {/* Card type badges */}
              <div className="flex items-center gap-2">
                <span
                  className={`text-[11px] font-bold tracking-widest px-2 py-0.5 border transition-all duration-300 ${
                    isCardVisa
                      ? "border-brand-burgundy bg-brand-burgundy text-brand-white"
                      : "border-brand-charcoal/20 text-brand-gray/60"
                  }`}
                >
                  VISA
                </span>
                <span
                  className={`text-[11px] font-bold tracking-widest px-2 py-0.5 border transition-all duration-300 ${
                    isCardMaster
                      ? "border-brand-burgundy bg-brand-burgundy text-brand-white"
                      : "border-brand-charcoal/20 text-brand-gray/60"
                  }`}
                >
                  MC
                </span>
              </div>
            </div>
            <div className="w-6 h-[1px] bg-brand-gold/40 mb-6" />

            <div className="mb-4">
              <label className={labelClass}>Cardholder Name *</label>
              <input
                type="text"
                name="cardName"
                value={form.cardName}
                onChange={handleChange}
                placeholder="MARIE DUPONT"
                autoComplete="cc-name"
                className={inputClass}
              />
            </div>

            <div className="mb-4 relative">
              <label className={labelClass}>Card Number *</label>
              <div className="relative">
                <input
                  type="text"
                  name="cardNumber"
                  value={form.cardNumber}
                  onChange={handleChange}
                  placeholder="4242 4242 4242 4242"
                  autoComplete="cc-number"
                  inputMode="numeric"
                  className={inputClass + " pl-10"}
                />
                <CreditCard
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-gray/50 pointer-events-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Expiry Date *</label>
                <input
                  type="text"
                  name="expiry"
                  value={form.expiry}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  autoComplete="cc-exp"
                  inputMode="numeric"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>CVV *</label>
                <input
                  type="text"
                  name="cvv"
                  value={form.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  autoComplete="cc-csc"
                  inputMode="numeric"
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          {/* Order total recap */}
          {subtotal > 0 && (
            <div className="border-t border-brand-charcoal/10 pt-4 flex justify-between items-center">
              <span className="text-xs uppercase tracking-widest text-brand-gray font-medium">Total Due</span>
              <span className="text-base font-semibold text-brand-charcoal">${subtotal.toLocaleString()}</span>
            </div>
          )}
          {hasPOA && (
            <p className="text-[11px] text-brand-gray font-light italic -mt-4">
              * Creations marked "Price on request" will be confirmed separately.
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "processing"}
            className="w-full py-4 btn-luxury btn-luxury-burgundy flex items-center justify-center font-sans uppercase font-semibold text-xs tracking-widest disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "processing" ? (
              <>
                <span className="w-3.5 h-3.5 border-2 border-brand-white/40 border-t-brand-white rounded-full animate-spin mr-2.5" />
                Processing Payment...
              </>
            ) : (
              <>
                Place Order <ArrowRight size={14} className="ml-2" />
              </>
            )}
          </button>

          <p className="text-xs text-brand-gray/70 text-center font-light -mt-3">
            This is a demonstration. No real payment will be processed.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
