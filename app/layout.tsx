import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/lib/cartContext";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yen Nhi Jewerly | Haute Joaillerie & Horlogerie since 2026",
  description: "Explore the poetic world of Yen Nhi Jewerly, creators of unique high jewelry, fine jewelry, engagement rings, and exceptional watchmaking pieces since 2026.",
  keywords: "Yen Nhi Jewerly, luxury jewelry, high jewelry, fine watches, poetic complications, bridal jewelry, engagement rings",
  authors: [{ name: "Yen Nhi Jewerly Team" }],
  openGraph: {
    title: "Yen Nhi Jewerly | Haute Joaillerie & Horlogerie since 2026",
    description: "Explore the poetic world of Yen Nhi Jewerly, creators of unique high jewelry, fine jewelry, engagement rings, and exceptional watchmaking pieces.",
    type: "website",
    locale: "vi_VN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen w-full overflow-x-hidden flex flex-col antialiased bg-brand-cream">
        <CartProvider>
          <UtilityBar />
          <Header />
          <main className="flex-1 flex flex-col w-full overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
