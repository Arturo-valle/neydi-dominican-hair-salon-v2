import Link from "next/link";
import { Locale } from "@/lib/types";
import { uiString } from "@/lib/i18n";
import { categories, getServicesByCategory, formatPriceWithQualifier, getCategoryImage, getServiceImage } from "@/lib/data";
import { ScrollReveal, StaggerReveal, ImageReveal, MarqueeStrip } from "@/components/ScrollAnimations";

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = (lang === "es" ? "es" : "en") as Locale;

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50dvh] flex items-end overflow-hidden">
        <img
          src="/images/salon-hero.jpg"
          alt=""
          width={1600}
          height={900}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 pt-32 w-full">
          <div className="accent-line mb-6" />
          <h1 className="text-display text-warm-white mb-4">
            {uiString("services.title", locale)}
          </h1>
          <p className="text-warm-white/50 text-lg max-w-lg">
            {uiString("services.subtitle", locale)}
          </p>
        </div>
      </section>

      {/* Marquee */}
      <section className="section-dark py-2 relative overflow-hidden border-y border-white/5">
        <MarqueeStrip
          text={locale === "es"
            ? "Blowouts · Color · Cortes · Tratamientos · Extensiones"
            : "Blowouts · Color · Cuts · Treatments · Extensions"
          }
          speed={30}
        />
      </section>

      {/* Categories with services */}
      {categories.map((cat, catIndex) => {
        const catServices = getServicesByCategory(cat.slug);
        const catImg = getCategoryImage(cat.slug);
        const isEven = catIndex % 2 === 0;

        return (
          <section key={cat.slug} className={`py-20 md:py-28 ${isEven ? "section-dark" : "section-dark"}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
              {/* Category header — alternating layout */}
              <div className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 ${isEven ? "" : "md:[direction:rtl]"}`}>
                <div className={isEven ? "" : "md:[direction:ltr]"}>
                  <ImageReveal className="aspect-[16/10] rounded-2xl overflow-hidden">
                    <img
                      src={catImg}
                      alt={cat.name[locale]}
                      width={800}
                      height={500}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </ImageReveal>
                </div>
                <div className={isEven ? "" : "md:[direction:ltr]"}>
                  <ScrollReveal>
                    <div className="accent-line mb-6" />
                    <h2 className="text-display-sm text-warm-white mb-4">
                      {cat.name[locale]}
                    </h2>
                    <p className="text-warm-white/50 text-lg leading-relaxed">
                      {cat.description[locale]}
                    </p>
                  </ScrollReveal>
                </div>
              </div>

              {/* Service cards with images */}
              <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
                {catServices.map((service) => {
                  const imgSrc = getServiceImage(service.slug);
                  return (
                    <Link
                      key={service.slug}
                      href={`/${locale}/book?service=${service.slug}`}
                      className="service-card group block"
                    >
                      {/* Service image */}
                      <div className="h-44 relative overflow-hidden">
                        <img
                          src={imgSrc}
                          alt={service.name[locale]}
                          width={400}
                          height={220}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        <div className="service-card-accent absolute bottom-0 left-0 z-10" />
                      </div>
                      {/* Service info */}
                      <div className="p-5">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-display text-lg text-carbon group-hover:text-gold transition-colors">
                            {service.name[locale]}
                          </h3>
                          <span className="text-gold font-display text-lg font-bold flex-shrink-0 ml-3">
                            {formatPriceWithQualifier(service.basePriceCents, service.priceQualifier, locale)}
                          </span>
                        </div>
                        <p className="text-charcoal/50 text-sm leading-relaxed line-clamp-2">
                          {service.summary[locale]}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </StaggerReveal>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="section-gradient py-24 md:py-32 relative overflow-hidden">
        <div className="honeycomb-bg absolute inset-0 opacity-10" aria-hidden="true" />
        <ScrollReveal className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-display text-warm-white mb-6">
            {uiString("home.cta.title", locale)}
          </h2>
          <p className="text-body-lg text-warm-white/40 mx-auto mb-10">
            {uiString("home.cta.subtitle", locale)}
          </p>
          <Link href={`/${locale}/book`} className="btn-gold">
            <span>{uiString("hero.cta", locale)}</span>
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
