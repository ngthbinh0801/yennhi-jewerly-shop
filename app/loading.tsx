"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-cream text-brand-charcoal">
      {/* Brand logo container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center px-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-semibold mb-3">
          Haute Horlogerie & Joaillerie
        </span>
        <h2 className="text-3xl md:text-4xl font-light font-serif tracking-[0.2em] uppercase text-brand-charcoal mb-4">
          Yen Nhi Jewerly
        </h2>
        
        {/* Circling Gold Loader */}
        <div className="relative w-8 h-8 mt-4">
          <span className="absolute inset-0 rounded-full border-2 border-brand-gold/15" />
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-brand-gold border-t-transparent shadow-sm"
          />
        </div>
      </motion.div>
    </div>
  );
}
