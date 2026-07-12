import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neydi Dominican Hair Salon — Temple Hills, MD",
  description:
    "Dominican hair salon in Temple Hills, Maryland. Blowouts, color, treatments, extensions and precision cuts with clear prices and personal care.",
  keywords: [
    "Dominican hair salon",
    "Temple Hills",
    "blowout",
    "hair color",
    "highlights",
    "hair extensions",
    "keratin treatment",
    "Maryland",
  ],
  openGraph: {
    title: "Neydi Dominican Hair Salon",
    description: "Dominican technique. Beautiful movement. Temple Hills, Maryland.",
    type: "website",
    locale: "en_US",
    alternateLocale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
