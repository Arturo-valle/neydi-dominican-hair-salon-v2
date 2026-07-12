import { Locale } from "@/lib/types";
import { uiString } from "@/lib/i18n";
import { business } from "@/lib/data";
import { ScrollReveal, ParallaxImage, ImageReveal, MarqueeStrip } from "@/components/ScrollAnimations";
import Link from "next/link";

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = (lang === "es" ? "es" : "en") as Locale;

  return (
    <>
      {/* Hero — full bleed image */}
      <section className="relative min-h-[60dvh] flex items-end overflow-hidden">
        <img
          src="/images/salon-stylist.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 pt-32 w-full">
          <div className="accent-line mb-6" />
          <h1 className="text-display text-warm-white mb-4">
            {locale === "es" ? "Nuestra Historia" : "Our Story"}
          </h1>
          <p className="text-warm-white/50 text-lg max-w-lg">
            {locale === "es"
              ? "Más que un salón. Una tradición de arte capilar dominicano."
              : "More than a salon. A tradition of Dominican hair artistry."
            }
          </p>
        </div>
      </section>

      {/* Marquee */}
      <section className="section-dark py-2 relative overflow-hidden border-y border-white/5">
        <MarqueeStrip
          text={locale === "es"
            ? "Herencia · Técnica · Pasión · Comunidad"
            : "Heritage · Technique · Passion · Community"
          }
          speed={30}
        />
      </section>

      {/* Story — asymmetric split */}
      <section className="section-dark py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-5 gap-12 lg:gap-20 items-center">
            <div className="md:col-span-2">
              <ImageReveal className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="/images/hair-closeup.jpg"
                  alt="Dominican hair technique"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </ImageReveal>
            </div>
            <div className="md:col-span-3">
              <ScrollReveal>
                <div className="accent-line mb-6" />
                <h2 className="text-display-sm text-warm-white mb-6">
                  {locale === "es" ? "La Técnica Dominicana" : "The Dominican Technique"}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-warm-white/50 text-lg leading-relaxed mb-6">
                  {locale === "es"
                    ? "Neydi trae la tradición del arte capilar dominicano a Temple Hills. Cada blowout, cada color, cada corte lleva generaciones de técnica perfeccionada en salones de Santo Domingo."
                    : "Neydi brings the tradition of Dominican hair artistry to Temple Hills. Every blowout, every color, every cut carries generations of technique perfected in Santo Domingo salons."
                  }
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-warm-white/50 text-lg leading-relaxed">
                  {locale === "es"
                    ? "El resultado no es solo cabello hermoso. Es la confianza que viene de saber que estás en manos de alguien que entiende tu cabello, tu textura, tu estilo."
                    : "The result isn't just beautiful hair. It's the confidence that comes from knowing you're in the hands of someone who understands your hair, your texture, your style."
                  }
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image band */}
      <section className="relative h-[50dvh] overflow-hidden">
        <img
          src="/images/salon-interior.jpg"
          alt="Neydi Salon interior"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-carbon/40" />
      </section>

      {/* Promise */}
      <section className="section-dark py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="accent-line mb-6" />
              <h2 className="text-display-sm text-warm-white mb-6">
                {locale === "es" ? "Nuestra Promesa" : "Our Promise"}
              </h2>
              <div className="space-y-6">
                {[
                  locale === "es" ? "Precios claros antes de empezar. Sin sorpresas." : "Clear prices before we start. No surprises.",
                  locale === "es" ? "Técnica dominicana auténtica con años de experiencia." : "Authentic Dominican technique with years of experience.",
                  locale === "es" ? "Atención personalizada para tu tipo de cabello." : "Personalized attention for your hair type.",
                  locale === "es" ? "Productos profesionales que cuidan tu cabello." : "Professional products that care for your hair.",
                ].map((promise, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
                        <path d="M2 7l3.5 3.5L12 3" />
                      </svg>
                    </div>
                    <p className="text-warm-white/60 text-lg">{promise}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ParallaxImage
              src="/images/braids-detail.jpg"
              alt="Hair styling detail"
              className="aspect-[4/5] rounded-2xl"
              speed={0.15}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gradient py-24 md:py-32 relative overflow-hidden">
        <div className="honeycomb-bg absolute inset-0 opacity-10" aria-hidden="true" />
        <ScrollReveal className="relative max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-display text-warm-white mb-6">
            {locale === "es" ? "¿Lista para tu transformación?" : "Ready for Your Transformation?"}
          </h2>
          <p className="text-body-lg text-warm-white/40 mx-auto mb-10">
            {locale === "es"
              ? "Reserva tu cita o visítanos durante nuestro horario."
              : "Book your appointment or walk in during our hours."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${locale}/book`} className="btn-gold">
              <span>{uiString("hero.cta", locale)}</span>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
