"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Locale } from "@/lib/types";
import {
  HeroReveal,
  ImageReveal,
  MarqueeStrip,
  ParallaxImage,
  ScrollReveal,
  StaggerReveal,
  StickyStack,
} from "@/components/ScrollAnimations";
import TiltCard from "@/components/TiltCard";
import CinematicReveal from "@/components/CinematicReveal";
import ZoomMorphLightbox from "@/components/ZoomMorphLightbox";

gsap.registerPlugin(ScrollTrigger);

type GalleryCategory = "blowout" | "braids" | "color" | "styling" | "salon";
type GalleryImage = { src: string; alt: { en: string; es: string }; category: GalleryCategory; aspect: string; width: number; height: number };

const copy = {
  en: {
    heroTitle: "Our Work",
    heroSub: "Every style tells a story. Every client leaves transformed.",
    eyebrow: "Neydi Gallery",
    filters: { all: "All", blowout: "Blowout", braids: "Braids", color: "Color", styling: "Styling", salon: "Salon" },
    marquee: "Dominican Blowout · Silk Press · Braids · Color · Styling · Treatment",
    gridTitle: "Real texture. Real shine. Real results.",
    gridSub: "A look inside the finishes, protective styles, color work, and salon moments our clients come back for.",
    featured: "Featured transformations",
    stack: [
      ["The Dominican Blowout", "Polished movement, sealed shine, and the classic bounce that makes Dominican technique unmistakable."],
      ["Protective Braids", "Clean parts, comfortable tension, and styles built to protect your hair while keeping the look elevated."],
      ["Color Transformation", "Dimension, warmth, and glow planned around your complexion, cut, and daily styling routine."],
    ],
    ctaTitle: "Ready for Your Transformation?",
    ctaSub: "Book your chair and let Neydi bring the movement, care, and finish your hair deserves.",
    cta: "Book Now",
    phone: "Call (301) 702-7294",
    viewMore: "View More Photos",
    viewLess: "Show Less",
  },
  es: {
    heroTitle: "Nuestro Trabajo",
    heroSub: "Cada estilo cuenta una historia. Cada clienta sale transformada.",
    eyebrow: "Galería Neydi",
    filters: { all: "Todo", blowout: "Blowout", braids: "Trenzas", color: "Color", styling: "Peinado", salon: "Salón" },
    marquee: "Blowout Dominicano · Silk Press · Trenzas · Color · Peinado · Tratamiento",
    gridTitle: "Textura real. Brillo real. Resultados reales.",
    gridSub: "Una mirada a los acabados, estilos protectores, trabajos de color y momentos del salón que nuestras clientas aman.",
    featured: "Transformaciones destacadas",
    stack: [
      ["El Blowout Dominicano", "Movimiento pulido, brillo sellado y ese rebote clásico que hace única la técnica dominicana."],
      ["Trenzas Protectoras", "Particiones limpias, tensión cómoda y estilos que protegen tu cabello con un acabado elevado."],
      ["Transformación de Color", "Dimensión, calidez y brillo pensados para tu piel, corte y rutina diaria."],
    ],
    ctaTitle: "¿Lista para Tu Transformación?",
    ctaSub: "Reserva tu silla y deja que Neydi le dé a tu cabello el movimiento, cuidado y acabado que merece.",
    cta: "Reservar Ahora",
    phone: "Llama al (301) 702-7294",
    viewMore: "Ver Más Fotos",
    viewLess: "Ver Menos",
  },
} as const;

// All 67 gallery images with assigned categories and aspect ratios
const galleryImages: GalleryImage[] = Array.from({ length: 67 }, (_, i) => {
  const num = i + 1;
  const categories: GalleryCategory[] = ["blowout", "styling", "braids", "color", "salon"];
  const aspects = ["aspect-[3/4]", "aspect-[4/5]", "aspect-square", "aspect-[4/5]", "aspect-[3/4]"];
  const cat = categories[i % 5];
  const aspect = aspects[i % 5];
  return {
    src: `/images/gallery-${String(num).padStart(2, "0")}.webp`,
    alt: { en: "", es: "" },
    category: cat,
    aspect,
    width: 1080,
    height: 1440,
  };
}).filter((_, i) => i !== 9); // Remove gallery-10 (salon image user rejected)

const filters: Array<"all" | GalleryCategory> = ["all", "blowout", "braids", "color", "styling", "salon"];
const GRID_COUNT = 25;

export default function GalleryPage({ params }: { params: Promise<{ lang: string }> }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [activeFilter, setActiveFilter] = useState<"all" | GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    params.then(({ lang }) => setLocale(lang === "es" ? "es" : "en"));
  }, [params]);

  useEffect(() => {
    if (!heroRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const image = heroRef.current.querySelector("img");
    if (!image) return;
    const anim = gsap.to(image, { scale: 1.06, yPercent: 8, ease: "none", scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true } });
    return () => { anim.scrollTrigger?.kill(); anim.kill(); };
  }, []);

  const t = copy[locale];
  const gridImages = showAll ? galleryImages : galleryImages.slice(0, GRID_COUNT);
  const filtered = activeFilter === "all" ? gridImages : gridImages.filter((image) => image.category === activeFilter);
  const previewImages = galleryImages.slice(0, 6);
  const featured = [galleryImages[0], galleryImages[10], galleryImages[20]];
  const lightboxImages = galleryImages.map((image) => ({ src: image.src, alt: image.alt[locale], category: t.filters[image.category], caption: image.alt[locale] }));

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex items-end overflow-hidden bg-carbon">
        <img src="/images/gallery-01.webp" alt="" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover scale-110" loading="eager" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(13,59,59,0.75),transparent_35%),linear-gradient(110deg,rgba(10,10,10,0.98),rgba(10,10,10,0.72)_45%,rgba(13,59,59,0.55))]" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-carbon to-transparent" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 pb-24 md:pb-32">
          <HeroReveal delay={0.2}><p className="text-eyebrow mb-6">{t.eyebrow}</p></HeroReveal>
          <HeroReveal delay={0.4}><h1 className="text-display text-warm-white mb-6 max-w-4xl">{t.heroTitle}</h1></HeroReveal>
          <HeroReveal delay={0.6}><p className="text-body-lg text-warm-white/60 max-w-xl">{t.heroSub}</p></HeroReveal>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2" aria-hidden="true"><div className="h-16 w-px bg-gradient-to-b from-gold to-transparent" /><div className="mx-auto mt-2 h-2 w-2 rotate-45 border-b border-r border-gold/80" /></div>
      </section>

      {/* Marquee + preview strip */}
      <section className="section-dark overflow-hidden border-y border-white/5 py-2">
        <MarqueeStrip text={t.marquee} speed={36} />
        <div className="marquee-strip pb-8 pt-2">
          <div className="marquee-track flex gap-4" style={{ animationDuration: "28s" }}>
            {[...previewImages, ...previewImages].map((image, index) => (
              <div key={`${image.src}-${index}`} className="h-28 w-44 shrink-0 overflow-hidden rounded-2xl border border-white/10 opacity-75 md:h-36 md:w-56">
                <img src={image.src} alt="" width={image.width} height={image.height} loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="section-dark relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 honeycomb-bg opacity-10" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
            <ScrollReveal className="max-w-2xl"><div className="accent-line mb-6" /><h2 className="text-display-sm text-warm-white mb-4">{t.gridTitle}</h2><p className="text-warm-white/50 text-lg leading-relaxed">{t.gridSub}</p></ScrollReveal>
            <div className="flex gap-3 overflow-x-auto pb-2 md:justify-end">
              {filters.map((filter) => <button key={filter} onClick={() => setActiveFilter(filter)} className={`rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap transition-all ${activeFilter === filter ? "bg-gold text-carbon" : "bg-white/5 text-warm-white/55 hover:bg-white/10 hover:text-warm-white"}`}>{t.filters[filter]}</button>)}
            </div>
          </div>

          <StaggerReveal key={`${activeFilter}-${showAll}`} className="gallery-masonry" stagger={0.05}>
            {filtered.map((image) => {
              const originalIndex = galleryImages.findIndex((item) => item.src === image.src);
              return (
                <CinematicReveal key={image.src} direction={["left", "right", "up", "center", "down"][originalIndex % 5] as "left" | "right" | "up" | "center" | "down"} delay={0.05 * (originalIndex % 6)}>
                <TiltCard className="group mb-5 cursor-pointer rounded-[1.5rem] bg-white/5 border border-white/10 shadow-2xl shadow-black/30" onClick={() => setLightboxIndex(originalIndex)}>
                  <motion.img layoutId={`gallery-image-${image.src}`} src={image.src} alt="" width={image.width} height={image.height} loading="lazy" className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${image.aspect}`} style={{ transform: "perspective(1000px)" }} />
                  <div className="absolute inset-0 bg-carbon/0 group-hover:bg-carbon/20 transition-colors duration-300" />
                </TiltCard>
                </CinematicReveal>
              );
            })}
          </StaggerReveal>

          {/* Ver más / Ver menos button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-gold"
            >
              <span>{showAll ? t.viewLess : t.viewMore} {!showAll && `(${galleryImages.length - GRID_COUNT})`}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Featured transformations */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-20"><p className="text-eyebrow mb-4">{t.featured}</p></div>
        <StickyStack>
          {featured.map((image, index) => (
            <div key={image.src} className={`stack-card min-h-[100dvh] flex items-center overflow-hidden ${index === 1 ? "bg-deep-teal" : "bg-carbon"}`}>
              <div className="max-w-7xl mx-auto grid w-full items-center gap-10 px-6 py-20 md:grid-cols-2 md:px-12 lg:px-20 lg:gap-16">
                <ImageReveal className={`rounded-[2rem] ${index === 1 ? "md:order-2" : ""}`}><img src={image.src} alt={image.alt[locale]} width={image.width} height={image.height} loading="lazy" className="h-full min-h-[55vh] w-full object-cover" /></ImageReveal>
                <ScrollReveal className={index === 1 ? "md:order-1" : ""}><div className="accent-line mb-6" /><p className="text-eyebrow mb-4">0{index + 1}</p><h2 className="text-display-sm text-warm-white mb-6">{t.stack[index][0]}</h2><p className="text-warm-white/55 text-lg leading-relaxed max-w-md">{t.stack[index][1]}</p></ScrollReveal>
              </div>
            </div>
          ))}
        </StickyStack>
      </section>

      {/* CTA */}
      <section className="section-smoke split-cta">
        <ParallaxImage src="/images/gallery-11.webp" alt="" width={1200} height={900} className="min-h-[55dvh] md:min-h-[80dvh]" speed={0.2} />
        <div className="flex items-center px-6 py-20 md:px-12 lg:px-20"><ScrollReveal><div className="accent-line mb-6" /><h2 className="text-display-sm text-carbon mb-6">{t.ctaTitle}</h2><p className="text-charcoal/60 text-lg leading-relaxed mb-8 max-w-md">{t.ctaSub}</p><div className="flex flex-col gap-4 sm:flex-row"><Link href={`/${locale}/book`} className="btn-gold"><span>{t.cta}</span></Link><a href="tel:+13017027294" className="btn-ghost border-carbon/15 text-carbon hover:bg-carbon hover:text-warm-white">{t.phone}</a></div></ScrollReveal></div>
      </section>

      <ZoomMorphLightbox images={lightboxImages} currentIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} onNavigate={setLightboxIndex} />
    </>
  );
}
