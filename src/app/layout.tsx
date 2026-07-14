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
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
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
