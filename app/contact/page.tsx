import React from "react";
import { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Client Services Concierge | Yen Nhi Jewerly",
  description: "Inquire with our dedicated Yen Nhi Jewerly client service concierge. Request custom high jewelry details, schedule private viewings, or consult with horology advisors.",
  keywords: "Contact Yen Nhi Jewerly, high jewelry concierge, boutique support, client relations, wedding rings advisor",
  openGraph: {
    title: "Contact Client Services Concierge | Yen Nhi Jewerly",
    description: "Inquire with our dedicated Yen Nhi Jewerly client service concierge. Request details or book consultation slots.",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
