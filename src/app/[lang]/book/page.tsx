"use client";

import { useState } from "react";
import { Locale } from "@/lib/types";
import { uiString } from "@/lib/i18n";
import { services, business } from "@/lib/data";
import { ScrollReveal } from "@/components/ScrollAnimations";

export default function BookPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const [locale, setLocale] = useState<Locale>("en");
  const [selectedService, setSelectedService] = useState("");
  const [submitted, setSubmitted] = useState(false);

  params.then(({ lang }) => setLocale(lang === "es" ? "es" : "en"));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50dvh] flex items-end overflow-hidden">
        <img
          src="/images/woman-profile.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-16 pt-32 w-full">
          <div className="accent-line mb-6" />
          <h1 className="text-display text-warm-white mb-4">
            {locale === "es" ? "Reservar Cita" : "Book Appointment"}
          </h1>
          <p className="text-warm-white/50 text-lg max-w-lg">
            {locale === "es"
              ? "Selecciona tu servicio y horario preferido."
              : "Select your service and preferred time."
            }
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section-dark py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6 md:px-12">
          {submitted ? (
            <ScrollReveal className="text-center">
              <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-8">
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
                  <path d="M6 16l6.5 6.5L26 8" />
                </svg>
              </div>
              <h2 className="text-display-sm text-warm-white mb-4">
                {locale === "es" ? "¡Solicitud Enviada!" : "Request Submitted!"}
              </h2>
              <p className="text-warm-white/50 text-lg mb-8">
                {locale === "es"
                  ? "Te contactaremos pronto para confirmar tu cita."
                  : "We'll contact you soon to confirm your appointment."
                }
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-gold"
              >
                <span>{locale === "es" ? "Reservar Otra" : "Book Another"}</span>
              </button>
            </ScrollReveal>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <ScrollReveal>
                <div>
                  <label className="block text-warm-white/60 text-sm mb-2">
                    {locale === "es" ? "Nombre" : "Name"}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-warm-white placeholder-warm-white/20 focus:border-gold focus:outline-none transition-colors"
                    placeholder={locale === "es" ? "Tu nombre" : "Your name"}
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.05}>
                <div>
                  <label className="block text-warm-white/60 text-sm mb-2">
                    {locale === "es" ? "Teléfono" : "Phone"}
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-warm-white placeholder-warm-white/20 focus:border-gold focus:outline-none transition-colors"
                    placeholder="(xxx) xxx-xxxx"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div>
                  <label className="block text-warm-white/60 text-sm mb-2">
                    {uiString("book.service", locale)}
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-warm-white focus:border-gold focus:outline-none transition-colors appearance-none"
                  >
                    <option value="" className="bg-carbon">
                      {locale === "es" ? "Seleccionar servicio" : "Select service"}
                    </option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug} className="bg-carbon">
                        {s.name[locale]}
                      </option>
                    ))}
                  </select>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <div>
                  <label className="block text-warm-white/60 text-sm mb-2">
                    {locale === "es" ? "Fecha Preferida" : "Preferred Date"}
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-warm-white focus:border-gold focus:outline-none transition-colors"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div>
                  <label className="block text-warm-white/60 text-sm mb-2">
                    {locale === "es" ? "Hora Preferida" : "Preferred Time"}
                  </label>
                  <select
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-warm-white focus:border-gold focus:outline-none transition-colors appearance-none"
                  >
                    <option value="" className="bg-carbon">
                      {locale === "es" ? "Seleccionar hora" : "Select time"}
                    </option>
                    {["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"].map(
                      (t) => (
                        <option key={t} value={t} className="bg-carbon">
                          {t}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <div>
                  <label className="block text-warm-white/60 text-sm mb-2">
                    {locale === "es" ? "Notas (opcional)" : "Notes (optional)"}
                  </label>
                  <textarea
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-warm-white placeholder-warm-white/20 focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder={locale === "es" ? "Algo que debamos saber..." : "Anything we should know..."}
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <button type="submit" className="btn-gold w-full text-center">
                  <span>{uiString("book.submit", locale)}</span>
                </button>
                <p className="text-warm-white/30 text-sm text-center mt-4">
                  {locale === "es"
                    ? "O llámanos directamente al "
                    : "Or call us directly at "
                  }
                  <a href={`tel:${business.phone}`} className="text-gold hover:text-gold-light transition-colors">
                    {business.phoneFormatted}
                  </a>
                </p>
              </ScrollReveal>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
