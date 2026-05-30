import type { Metadata } from "next";
import "./globals.css";
import UtilityBar from "@/components/layout/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/lib/cartContext";

export const metadata: Metadata = {
  title: "Rì Rào Store | Premium Artisanal Seashell Jewelry since 2026",
  description: "Khám phá thế giới đầy chất thơ của Rì Rào Store, thương hiệu chế tác trang sức vỏ sò tự nhiên, hoa tai vỏ ốc, vòng tay bện dây thủ công và ngọc trai nước ngọt độc bản kể từ năm 2026.",
  keywords: "Rì Rào Store, trang sức vỏ sò, vòng cổ vỏ sò, hoa tai ngọc trai, vòng bện tay cô dâu, sao biển trang sức, quà tặng san hô",
  authors: [{ name: "Rì Rào Store Team" }],
  openGraph: {
    title: "Rì Rào Store | Premium Artisanal Seashell Jewelry since 2026",
    description: "Khám phá thế giới đầy chất thơ của Rì Rào Store, thương hiệu chế tác trang sức vỏ sò tự nhiên, hoa tai vỏ ốc, vòng tay bện dây thủ công và ngọc trai nước ngọt độc bản.",
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
      lang="vi"
      className="scroll-smooth"
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
