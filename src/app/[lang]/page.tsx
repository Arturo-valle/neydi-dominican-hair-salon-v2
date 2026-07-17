import Link from "next/link";
import { Locale } from "@/lib/types";
import { uiString } from "@/lib/i18n";
import {
  business,
  hours,
  specials,
  getFeaturedServices,
  formatPriceWithQualifier,
  getServiceImage,
} from "@/lib/data";
import {
  ScrollReveal,
  StaggerReveal,
  HeroReveal,
  ParallaxImage,
  StickyStack,
  HorizontalCarousel,
  MarqueeStrip,
  AnimatedCounter,
  ImageReveal,
} from "@/components/ScrollAnimations";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = (lang === "es" ? "es" : "en") as Locale;
  const featured = getFeaturedServices();

  return (
    <>
      {/* ═══ ACT 1: HERO — Cinematic Full-Viewport ═══ */}
      <section className="hero-section">
        <div className="hero-mesh" aria-hidden="true" />

        {/* Parallax background image */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <img
            src="/images/salon-hero.jpg"
            alt=""
            width={1600}
            height={1000}
            className="absolute inset-0 w-full h-full object-cover scale-110"
            style={{ willChange: "transform" }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/85 to-carbon/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/50" />
        </div>

        {/* Content — left-aligned, asymmetric */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 lg:py-0 w-full">
          <div className="max-w-2xl">
            <HeroReveal delay={0.3}>
              <p className="text-eyebrow mb-6">{uiString("hero.tagline", locale)}</p>
            </HeroReveal>
            <HeroReveal delay={0.5}>
              <h1 className="text-display text-warm-white mb-6" style={{ lineHeight: 1.1 }}>
                {uiString("hero.h1", locale)}
              </h1>
            </HeroReveal>
            <HeroReveal delay={0.7}>
              <p className="text-body-lg text-warm-white/50 mb-10 max-w-lg">
                {uiString("hero.sub", locale)}
              </p>
            </HeroReveal>
            <HeroReveal delay={0.9}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/${locale}/book`} className="btn-gold">
                  <span>{uiString("hero.cta", locale)}</span>
                </Link>
                <Link href={`/${locale}/services`} className="btn-ghost">
                  {uiString("hero.cta2", locale)}
                </Link>
              </div>
            </HeroReveal>
          </div>
        </div>

        {/* Scroll indicator — subtle gold line */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-16 bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </section>

      {/* ═══ ACT 2: MARQUEE — Kinetic Ambiance ═══ */}
      <section className="section-dark py-2 relative overflow-hidden border-y border-white/5">
        <MarqueeStrip
          text={locale === "es"
            ? "Técnica Dominicana · Movimiento Hermoso · Temple Hills, Maryland"
            : "Dominican Technique · Beautiful Movement · Temple Hills, Maryland"
          }
          speed={35}
        />
      </section>

      {/* ═══ ACT 3: THE NEYDI DIFFERENCE — Sticky Scroll Stack ═══ */}
      <section className="section-dark">
        <StickyStack>
          {/* Card 1: Split image-left / text-right */}
          <div className="stack-card min-h-[100dvh] flex items-center bg-carbon relative overflow-hidden">
            <div className="absolute inset-0 honeycomb-bg opacity-10" aria-hidden="true" />
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
              <ImageReveal className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="/images/hair-closeup.jpg"
                  alt="Dominican blowout technique"
                  width={1200}
                  height={1600}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </ImageReveal>
              <div>
                <div className="accent-line mb-6" />
                <h2 className="text-display-sm text-warm-white mb-6">
                  {uiString("home.why.1.title", locale)}
                </h2>
                <p className="text-warm-white/50 text-lg leading-relaxed max-w-md">
                  {uiString("home.why.1.desc", locale)}
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Full-width image with text overlay */}
          <div className="stack-card min-h-[100dvh] flex items-center justify-center relative overflow-hidden">
            <img
              src="/images/salon-stylist.jpg"
              alt=""
              width={1200}
              height={800}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-carbon/70" />
            <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
              <div className="accent-line mx-auto mb-6" />
              <h2 className="text-display text-warm-white mb-6">
                {uiString("home.why.2.title", locale)}
              </h2>
              <p className="text-warm-white/60 text-lg leading-relaxed max-w-lg mx-auto">
                {uiString("home.why.2.desc", locale)}
              </p>
            </div>
          </div>

          {/* Card 3: Bento asymmetric */}
          <div className="stack-card min-h-[100dvh] flex items-center bg-deep-teal relative overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
              <div className="grid md:grid-cols-5 gap-6 lg:gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="accent-line mb-6" />
                  <h2 className="text-display-sm text-warm-white mb-6">
                    {uiString("home.why.3.title", locale)}
                  </h2>
                  <p className="text-warm-white/50 text-lg leading-relaxed">
                    {uiString("home.why.3.desc", locale)}
                  </p>
                </div>
                <div className="md:col-span-3 grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img src="/images/braids-detail.jpg" alt="" width={600} height={600} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden mt-8">
                    <img src="/images/hair-shine.jpg" alt="" width={600} height={600} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden -mt-4">
                    <img src="/images/salon-chair.jpg" alt="" width={600} height={600} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden mt-4">
                    <img src="/images/woman-profile.jpg" alt="" width={600} height={600} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StickyStack>
      </section>

      {/* ═══ ACT 4: SERVICES — Featured Carousel ═══ */}
      <section className="section-smoke">
        <ScrollReveal className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-28 md:pt-36 pb-12">
          <div className="accent-line mb-6" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-display-sm text-carbon mb-3">{uiString("home.services.title", locale)}</h2>
              <p className="text-charcoal/50 max-w-md">{uiString("home.services.subtitle", locale)}</p>
            </div>
            <Link href={`/${locale}/services`} className="mt-6 md:mt-0 inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium transition-colors">
              {uiString("home.services.viewAll", locale)}
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </Link>
          </div>
        </ScrollReveal>

        {/* Horizontal scroll carousel — no scroll hijack */}
        <HorizontalCarousel className="pb-16 px-6 md:px-12 lg:px-20">
          {featured.map((service, i) => {
            const imgSrc = getServiceImage(service.slug);
            return (
              <div key={service.slug} className="snap-center flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[50vw] pr-6">
                <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-center bg-white rounded-2xl overflow-hidden border border-carbon/5">
                  <div className={`aspect-[4/5] rounded-2xl overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    <img
                      src={imgSrc}
                      alt={service.name[locale]}
                      width={800}
                      height={1000}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className={`p-6 lg:p-10 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <p className="text-eyebrow mb-4 opacity-60">{locale === "es" ? "Servicio" : "Service"}</p>
                    <h3 className="font-display text-3xl md:text-4xl text-carbon mb-4">
                      {service.name[locale]}
                    </h3>
                    <p className="text-charcoal/50 text-lg leading-relaxed mb-6 max-w-md">
                      {service.summary[locale]}
                    </p>
                    <p className="text-gold font-display text-3xl font-bold mb-8">
                      {formatPriceWithQualifier(service.basePriceCents, service.priceQualifier, locale)}
                    </p>
                    <Link href={`/${locale}/book?service=${service.slug}`} className="btn-gold">
                      <span>{uiString("hero.cta", locale)}</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </HorizontalCarousel>
      </section>

      {/* ═══ ACT 5: SPECIALS — Animated Counters, Asymmetric ═══ */}
      <section className="section-dark py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 honeycomb-bg opacity-15" aria-hidden="true" />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(13,59,59,0.3), transparent)",
        }} aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal className="mb-16">
            <div className="accent-line mb-6" />
            <h2 className="text-display-sm text-warm-white mb-3">{uiString("home.specials.title", locale)}</h2>
            <p className="text-warm-white/40 max-w-md">{uiString("home.specials.subtitle", locale)}</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {specials.map((special, i) => (
              <ScrollReveal key={special.slug} delay={i * 0.15}>
                <div className="special-card flex flex-col md:flex-row items-center gap-8 text-left">
                  {/* Big price */}
                  <div className="flex-shrink-0 text-center md:text-left">
                    <p className="text-warm-white/30 text-sm mb-2 line-through">
                      {formatPriceWithQualifier(special.originalPriceCents, special.priceQualifier, locale)}
                    </p>
                    <div className="text-gold font-display text-5xl md:text-6xl font-bold">
                      <AnimatedCounter
                        target={special.specialPriceCents / 100}
                        prefix="$"
                        duration={1.5}
                      />
                    </div>
                  </div>
                  {/* Info */}
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-eyebrow mb-3 opacity-60">{uiString("home.specials.days", locale)}</p>
                    <h3 className="font-display text-xl text-warm-white mb-4">{special.name[locale]}</h3>
                    <Link href={`/${locale}/book?service=${special.slug.replace("special-", "")}`} className="btn-gold text-sm">
                      <span>{uiString("hero.cta", locale)}</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Price Clarity — Quick section ═══ */}
      <section className="section-gradient py-24 md:py-32 relative overflow-hidden">
        <div className="honeycomb-bg absolute inset-0 opacity-10" aria-hidden="true" />
        <ScrollReveal className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-display-sm text-warm-white mb-6">{uiString("home.priceClarity.title", locale)}</h2>
          <p className="text-body-lg text-warm-white/50 mx-auto mb-8">
            {uiString("home.priceClarity.subtitle", locale)}
          </p>
          <div className="inline-block bg-white/5 border border-white/10 rounded-2xl px-10 py-6 backdrop-blur-sm">
            <p className="text-gold font-display text-xl">{uiString("home.priceClarity.honest", locale)}</p>
          </div>
        </ScrollReveal>
      </section>

      {/* ═══ ACT 6: GALLERY PREVIEW — Immersive Grid ═══ */}
      <section className="section-dark py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(13,59,59,0.15), transparent)",
        }} aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal className="mb-16 text-center">
            <div className="accent-line mx-auto mb-6" />
            <h2 className="text-display-sm text-warm-white mb-3">{uiString("home.gallery.title", locale)}</h2>
            <p className="text-warm-white/40 max-w-lg mx-auto">{uiString("home.gallery.subtitle", locale)}</p>
          </ScrollReveal>

          {/* Masonry-style grid with varied sizes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[240px]">
            {/* Large feature image — top left */}
            <ScrollReveal className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden group cursor-pointer">
              <Link href={`/${locale}/gallery`} className="block w-full h-full relative">
                <img
                  src="/images/gallery-01.webp"
                  alt="Dominican blowout result"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-carbon/0 group-hover:bg-carbon/30 transition-colors duration-500 flex items-end">
                  <span className="text-warm-white text-sm font-medium p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Dominican Blowout</span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Top right - small */}
            <ScrollReveal delay={0.1} className="rounded-2xl overflow-hidden group cursor-pointer">
              <Link href={`/${locale}/gallery`} className="block w-full h-full relative">
                <img
                  src="/images/gallery-03.webp"
                  alt="Cornrow braids"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-carbon/0 group-hover:bg-carbon/30 transition-colors duration-500" />
              </Link>
            </ScrollReveal>

            {/* Top right - small */}
            <ScrollReveal delay={0.15} className="rounded-2xl overflow-hidden group cursor-pointer">
              <Link href={`/${locale}/gallery`} className="block w-full h-full relative">
                <img
                  src="/images/gallery-02.webp"
                  alt="Soft curls styling"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-carbon/0 group-hover:bg-carbon/30 transition-colors duration-500" />
              </Link>
            </ScrollReveal>

            {/* Bottom left */}
            <ScrollReveal delay={0.2} className="rounded-2xl overflow-hidden group cursor-pointer">
              <Link href={`/${locale}/gallery`} className="block w-full h-full relative">
                <img
                  src="/images/gallery-06.webp"
                  alt="Protective braids"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-carbon/0 group-hover:bg-carbon/30 transition-colors duration-500" />
              </Link>
            </ScrollReveal>

            {/* Bottom center */}
            <ScrollReveal delay={0.25} className="rounded-2xl overflow-hidden group cursor-pointer">
              <Link href={`/${locale}/gallery`} className="block w-full h-full relative">
                <img
                  src="/images/gallery-04.webp"
                  alt="Silk press result"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-carbon/0 group-hover:bg-carbon/30 transition-colors duration-500" />
              </Link>
            </ScrollReveal>

            {/* Bottom right — wide */}
            <ScrollReveal delay={0.3} className="md:col-span-2 rounded-2xl overflow-hidden group cursor-pointer">
              <Link href={`/${locale}/gallery`} className="block w-full h-full relative">
                <img
                  src="/images/gallery-05.webp"
                  alt="Hair styling result"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-carbon/0 group-hover:bg-carbon/30 transition-colors duration-500 flex items-end">
                  <span className="text-warm-white text-sm font-medium p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Color & Styling</span>
                </div>
              </Link>
            </ScrollReveal>
          </div>

          {/* CTA */}
          <ScrollReveal className="mt-12 text-center">
            <Link href={`/${locale}/gallery`} className="btn-gold inline-flex items-center gap-3">
              <span>{uiString("home.gallery.viewAll", locale)}</span>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9h12M11 5l4 4-4 4" /></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ ACT 7: VISIT — Split with Parallax ═══ */}
      <section className="section-dark py-0">
        <div className="grid md:grid-cols-2 min-h-[80dvh]">
          {/* Left: parallax image */}
          <ParallaxImage
            src="/images/salon-interior.jpg"
            alt="Neydi Dominican Hair Salon interior"
            width={1200}
            height={800}
            className="w-full h-full object-cover"
            speed={0.2}
          />

          {/* Right: info */}
          <div className="flex items-center py-20 md:py-0">
            <div className="max-w-lg mx-auto px-8 md:px-12 lg:px-16">
              <ScrollReveal>
                <div className="accent-line mb-6" />
                <h2 className="text-display-sm text-warm-white mb-8">{uiString("home.visit.title", locale)}</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h3 className="font-display text-lg text-warm-white mb-3">{uiString("visit.address", locale)}</h3>
                <address className="not-italic text-warm-white/50 mb-6 text-base">
                  <p>{business.address.street}</p>
                  <p>{business.address.city}, {business.address.state} {business.address.zip}</p>
                </address>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <a href={`tel:${business.phone}`} className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-medium mb-8 transition-colors">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 5.5A2.5 2.5 0 015.5 3h1.382a1 1 0 01.894.553l1.11 2.22a1 1 0 01-.149 1.09l-1.329 1.494a11.05 11.05 0 004.232 4.232l1.494-1.329a1 1 0 011.09-.15l2.22 1.11a1 1 0 01.554.895V16.5A2.5 2.5 0 0116.5 19h-1C8.044 19 3 13.956 3 6.5v-1z" /></svg>
                  {business.phoneFormatted}
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <h3 className="font-display text-lg text-warm-white mb-4 mt-8">{uiString("visit.hours", locale)}</h3>
                <div className="space-y-0">
                  {hours.map((h, i) => (
                    <div key={i} className="flex justify-between py-3 border-b border-white/5">
                      <span className="text-warm-white/50">{locale === "es" ? h.dayEs : h.day}</span>
                      <span className="text-warm-white font-medium">{h.open} - {h.close}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="mt-8 bg-gold/5 border border-gold/10 rounded-xl p-5">
                  <p className="text-sm text-warm-white/50">
                    <strong className="text-warm-white">{uiString("visit.walkins", locale)}</strong>{" - "}{uiString("visit.walkins.desc", locale)}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ACT 7: CTA — Cinematic Split ═══ */}
      <section className="split-cta">
        {/* Left: image with parallax */}
        <ParallaxImage
          src="/images/cta-portrait.jpg"
          alt=""
          width={800}
          height={1200}
          className="w-full h-full object-cover"
          speed={0.25}
        />

        {/* Right: CTA content */}
        <div className="flex items-center bg-deep-teal">
          <div className="px-8 md:px-12 lg:px-20 py-20 md:py-0">
            <ScrollReveal>
              <div className="accent-line mb-6" />
              <h2 className="text-display text-warm-white mb-6">
                {uiString("home.cta.title", locale)}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-body-lg text-warm-white/50 mb-10 max-w-md">
                {uiString("home.cta.subtitle", locale)}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`/${locale}/book`} className="btn-gold">
                  <span>{uiString("hero.cta", locale)}</span>
                </Link>
                <a href={`tel:${business.phone}`} className="btn-ghost">
                  {uiString("visit.call", locale)}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
