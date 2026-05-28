import React from "react";
import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Liên Hệ Bộ Phận Chăm Sóc Khách Hàng Concierge | Rì Rào Store",
  description: "Gửi yêu cầu tới bộ phận dịch vụ khách hàng concierge tận tâm của Rì Rào Store. Yêu cầu chi tiết thiết kế trang sức cao cấp theo yêu cầu, đặt lịch hẹn xem riêng hoặc tư vấn với chuyên gia đồng hồ.",
  keywords: "Contact Rì Rào Store, high jewelry concierge, boutique support, client relations, wedding rings advisor",
  openGraph: {
    title: "Liên Hệ Bộ Phận Chăm Sóc Khách Hàng Concierge | Rì Rào Store",
    description: "Gửi yêu cầu tới bộ phận dịch vụ khách hàng concierge tận tâm của Rì Rào Store. Yêu cầu chi tiết hoặc đăng ký tư vấn.",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
