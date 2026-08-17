import type { Metadata } from "next";
import Script from "next/script";
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
  return (
    <>
      {/* Meta Pixel — Neydi */}
      <Script id="meta-pixel" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');fbq('init','956239053800442');fbq('track','PageView');
      `}</Script>
      <noscript><img height="1" width="1" style={{display:'none'}} src="https://www.facebook.com/tr?id=956239053800442&ev=PageView&noscript=1" /></noscript>
      {children}
    </>
  );
}
