import { Geist, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import ClientEffects from "@/components/ClientEffects";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Locale } from "@/lib/types";
import { generateJsonLd } from "@/lib/jsonld";
import { business } from "@/lib/data";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = (lang === "es" ? "es" : "en") as Locale;
  const description =
    locale === "es"
      ? "Salón de cabello dominicano en Temple Hills, Maryland. Blowouts, color, tratamientos, extensiones y cortes de precisión con precios claros y atención personal."
      : "Dominican hair salon in Temple Hills, Maryland. Blowouts, color, treatments, extensions and precision cuts with clear prices and personal care.";

  return {
    title: "Neydi Dominican Hair Salon — Temple Hills, MD",
    description,
    alternates: {
      languages: { en: "/en", es: "/es" },
    },
    openGraph: {
      title: "Neydi Dominican Hair Salon",
      description,
      locale: locale === "es" ? "es_ES" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_ES",
      url: `https://${business.domain}/${lang}`,
      siteName: business.name,
      type: "website",
    },
    metadataBase: new URL(`https://${business.domain}`),
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = (lang === "es" ? "es" : "en") as Locale;

  return (
    <html lang={lang} className={`${geist.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-body)" }}>
        <ClientEffects>
        <div className="grain-overlay" aria-hidden="true" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd()) }}
        />
        <Header locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
        <WhatsAppButton locale={locale} />
        </ClientEffects>
      </body>
    </html>
  );
}
