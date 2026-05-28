import React, { Suspense } from "react";
import { Metadata } from "next";
import BoutiquesClient from "./BoutiquesClient";

export const metadata: Metadata = {
  title: "Tìm Cửa Hàng | Rì Rào Store",
  description: "Khám phá hệ thống cửa hàng Rì Rào Store tại Việt Nam — Hà Nội, Đà Nẵng, Hội An, TP. Hồ Chí Minh. Đặt lịch tư vấn trang sức vỏ sò thủ công.",
  keywords: "Rì Rào Store cửa hàng, trang sức vỏ sò Hà Nội, trang sức vỏ sò Hội An, cửa hàng trang sức Đà Nẵng, trang sức vỏ sò TP. HCM",
  openGraph: {
    title: "Tìm Cửa Hàng | Rì Rào Store",
    description: "Khám phá hệ thống cửa hàng Rì Rào Store tại Việt Nam và đặt lịch hẹn tư vấn trang sức vỏ sò.",
    type: "website",
  },
};

export default function BoutiquesPage() {
  return (
    <Suspense fallback={
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-brand-cream text-brand-charcoal py-24">
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-semibold mb-3">
          Haute Horlogerie & Joaillerie
        </span>
        <h2 className="text-2xl font-light font-serif tracking-[0.2em] uppercase text-brand-charcoal mb-4">
          Rì Rào Store
        </h2>
        <div className="relative w-8 h-8">
          <span className="absolute inset-0 rounded-full border-2 border-brand-gold/15" />
          <span className="absolute inset-0 rounded-full border-2 border-brand-gold border-t-transparent animate-spin" />
        </div>
      </div>
    }>
      <BoutiquesClient />
    </Suspense>
  );
}
