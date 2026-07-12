"use client";

import { useState } from "react";
import { Locale } from "@/lib/types";
import { uiString } from "@/lib/i18n";
import { ScrollReveal, ImageReveal } from "@/components/ScrollAnimations";
import { AnimatePresence, motion } from "motion/react";

const galleryImages = [
  { src: "/images/salon-hero.jpg", alt: "Dominican blowout", category: "blowout", span: "aspect-square" },
  { src: "/images/hair-closeup.jpg", alt: "Hair styling detail", category: "styling", span: "aspect-[3/4]" },
  { src: "/images/salon-interior.jpg", alt: "Salon interior", category: "salon", span: "aspect-square" },
  { src: "/images/braids-detail.jpg", alt: "Braids and extensions", category: "extensions", span: "aspect-[4/5]" },
  { src: "/images/hair-color-process.jpg", alt: "Color process", category: "color", span: "aspect-square" },
  { src: "/images/woman-profile.jpg", alt: "Client result", category: "styling", span: "aspect-[3/4]" },
  { src: "/images/salon-stylist.jpg", alt: "Stylist at work", category: "salon", span: "aspect-square" },
  { src: "/images/hair-shine.jpg", alt: "Healthy shiny hair", category: "treatment", span: "aspect-[4/5]" },
  { src: "/images/salon-chair.jpg", alt: "Salon chair", category: "salon", span: "aspect-square" },
  { src: "/images/treatment.jpg", alt: "Hair treatment", category: "treatment", span: "aspect-[3/4]" },
  { src: "/images/wash-set.jpg", alt: "Wash and set", category: "blowout", span: "aspect-square" },
  { src: "/images/salon-products.jpg", alt: "Professional products", category: "salon", span: "aspect-[4/5]" },
];

const filters = ["all", "blowout", "color", "styling", "extensions", "treatment", "salon"];

export default function GalleryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const [locale, setLocale] = useState<Locale>("en");
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // Resolve params
  params.then(({ lang }) => setLocale(lang === "es" ? "es" : "en"));

  const filtered = activeFilter === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50dvh] flex items-end overflow-hidden">
        <img
          src="/images/salon-hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 pt-32 w-full">
          <div className="accent-line mb-6" />
          <h1 className="text-display text-warm-white">
            {locale === "es" ? "Galería" : "Gallery"}
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section className="section-dark py-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeFilter === f
                    ? "bg-gold text-carbon"
                    : "bg-white/5 text-warm-white/50 hover:bg-white/10 hover:text-warm-white"
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="section-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="masonry-grid">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer relative rounded-xl overflow-hidden"
                onClick={() => setLightboxImg(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={1000}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${img.span}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-carbon/0 group-hover:bg-carbon/40 transition-colors duration-300 flex items-end">
                  <span className="text-warm-white text-sm font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            className="lightbox-overlay cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightboxImg(null)}
          >
            <motion.img
              src={lightboxImg}
              alt=""
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
            <button
              className="absolute top-6 right-6 text-warm-white/60 hover:text-warm-white transition-colors"
              onClick={() => setLightboxImg(null)}
              aria-label="Close"
            >
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 8l16 16M24 8L8 24" /></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
