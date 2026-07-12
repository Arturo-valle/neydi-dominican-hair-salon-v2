import { Locale } from "@/lib/types";
import { uiString } from "@/lib/i18n";
import { business, hours } from "@/lib/data";
import { ScrollReveal, ParallaxImage, ImageReveal } from "@/components/ScrollAnimations";
import Link from "next/link";

export default async function VisitPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = (lang === "es" ? "es" : "en") as Locale;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50dvh] flex items-end overflow-hidden">
        <img
          src="/images/salon-interior.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 pt-32 w-full">
          <div className="accent-line mb-6" />
          <h1 className="text-display text-warm-white mb-4">
            {uiString("visit.title", locale)}
          </h1>
        </div>
      </section>

      {/* Split: Image + Info */}
      <section className="section-dark py-0">
        <div className="grid md:grid-cols-2 min-h-[80dvh]">
          <ParallaxImage
            src="/images/salon-interior.jpg"
            alt="Neydi Dominican Hair Salon interior"
            className="min-h-[50vh] md:min-h-full"
            speed={0.2}
          />

          <div className="flex items-center py-20 md:py-0">
            <div className="max-w-lg mx-auto px-8 md:px-12 lg:px-16 w-full">
              <ScrollReveal>
                <div className="accent-line mb-6" />
                <h2 className="text-display-sm text-warm-white mb-8">{uiString("visit.address", locale)}</h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <address className="not-italic text-warm-white/50 mb-6 text-lg">
                  <p>{business.address.street}</p>
                  <p>{business.address.city}, {business.address.state} {business.address.zip}</p>
                </address>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <a href={`tel:${business.phone}`} className="inline-flex items-center gap-3 text-gold hover:text-gold-light font-medium mb-4 text-lg transition-colors">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 5.5A2.5 2.5 0 015.5 3h1.382a1 1 0 01.894.553l1.11 2.22a1 1 0 01-.149 1.09l-1.329 1.494a11.05 11.05 0 004.232 4.232l1.494-1.329a1 1 0 011.09-.15l2.22 1.11a1 1 0 01.554.895V16.5A2.5 2.5 0 0116.5 19h-1C8.044 19 3 13.956 3 6.5v-1z" /></svg>
                  {business.phoneFormatted}
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-sm mb-10 inline-flex"
                >
                  <span>{uiString("visit.directions", locale)}</span>
                </a>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
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

              <ScrollReveal delay={0.3}>
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

      {/* Map */}
      <section className="section-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden aspect-[16/7] border border-white/5">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(business.address.full)}&zoom=15`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Neydi Dominican Hair Salon location"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gradient py-24 md:py-32 relative overflow-hidden">
        <div className="honeycomb-bg absolute inset-0 opacity-10" aria-hidden="true" />
        <ScrollReveal className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-display text-warm-white mb-6">
            {locale === "es" ? "¿Lista para tu transformación?" : "Ready for Your Transformation?"}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/book`} className="btn-gold">
              <span>{uiString("hero.cta", locale)}</span>
            </Link>
            <a href={`tel:${business.phone}`} className="btn-ghost">
              {uiString("visit.call", locale)}
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
