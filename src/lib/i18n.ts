import { Locale } from "./types";

const ui: Record<string, Record<Locale, string>> = {
  // Navigation
  "nav.home": { en: "Home", es: "Inicio" },
  "nav.services": { en: "Services", es: "Servicios" },
  "nav.gallery": { en: "Results", es: "Resultados" },
  "nav.about": { en: "About", es: "Nosotros" },
  "nav.visit": { en: "Visit", es: "Visítanos" },
  "nav.book": { en: "Book", es: "Reservar" },
  "nav.bookNow": { en: "Book an Appointment", es: "Reservar Cita" },

  // Home — Hero
  "hero.tagline": { en: "Temple Hills, Maryland", es: "Temple Hills, Maryland" },
  "hero.h1": {
    en: "Dominican technique. Beautiful movement.",
    es: "Técnica dominicana. Movimiento que se nota.",
  },
  "hero.sub": {
    en: "Blowouts, color, cuts, treatments and extensions — with clear starting prices and personal care.",
    es: "Blowouts, color, cortes, tratamientos y extensiones, con precios iniciales claros y atención personal.",
  },
  "hero.cta": { en: "Book an Appointment", es: "Reservar Cita" },
  "hero.cta2": { en: "Explore Services", es: "Ver Servicios" },

  // Home — Sections
  "home.why.title": { en: "The Neydi Difference", es: "La Diferencia Neydi" },
  "home.why.subtitle": {
    en: "Where Dominican technique meets personal attention.",
    es: "Donde la técnica dominicana se encuentra con la atención personal.",
  },
  "home.why.1.title": { en: "Real Results", es: "Resultados Reales" },
  "home.why.1.desc": {
    en: "Every style shown is a real client, real technique, real transformation.",
    es: "Cada estilo mostrado es una clienta real, técnica real, transformación real.",
  },
  "home.why.2.title": { en: "Clear Prices", es: "Precios Claros" },
  "home.why.2.desc": {
    en: "Starting prices shown upfront. We explain what affects the total before we begin.",
    es: "Precios iniciales claros. Explicamos qué afecta el total antes de comenzar.",
  },
  "home.why.3.title": { en: "Personal Care", es: "Atención Personal" },
  "home.why.3.desc": {
    en: "We listen to what you want, explain what works, and make sure you love the result.",
    es: "Escuchamos lo que quieres, explicamos lo que funciona y nos aseguramos de que ames el resultado.",
  },

  "home.services.title": { en: "Signature Services", es: "Servicios Insignia" },
  "home.services.subtitle": {
    en: "Our most popular services — each one with a clear starting price.",
    es: "Nuestros servicios más populares — cada uno con un precio inicial claro.",
  },
  "home.services.viewAll": { en: "View All Services", es: "Ver Todos los Servicios" },

  "home.specials.title": { en: "This Week's Specials", es: "Especiales de la Semana" },
  "home.specials.subtitle": {
    en: "Start your week with us — special prices every Monday & Tuesday.",
    es: "Comienza la semana con nosotros — precios especiales cada lunes y martes.",
  },
  "home.specials.days": { en: "Monday & Tuesday", es: "Lunes y Martes" },

  "home.priceClarity.title": { en: "How Pricing Works", es: "Cómo Funcionan los Precios" },
  "home.priceClarity.subtitle": {
    en: "\"Starting at\" means the base price. The final total depends on your hair's length, density and the time needed.",
    es: "\"Desde\" significa el precio base. El total final depende del largo, densidad del cabello y el tiempo necesario.",
  },
  "home.priceClarity.honest": {
    en: "We always confirm the total before starting. No surprises.",
    es: "Siempre confirmamos el total antes de empezar. Sin sorpresas.",
  },

  "home.visit.title": { en: "Come See Us", es: "Ven a Visitar" },

  "home.cta.title": { en: "Ready for Your Transformation?", es: "¿Lista para Tu Transformación?" },
  "home.cta.subtitle": {
    en: "Book your appointment or walk in during our hours. We're here to make you feel amazing.",
    es: "Reserva tu cita o ven directamente durante nuestro horario. Estamos aquí para que te sientas increíble.",
  },

  // Services page
  "services.title": { en: "Our Services", es: "Nuestros Servicios" },
  "services.subtitle": {
    en: "Every service with clear pricing. Select a category to explore.",
    es: "Cada servicio con precios claros. Selecciona una categoría para explorar.",
  },
  "services.from": { en: "from", es: "desde" },
  "services.bookThis": { en: "Book this service", es: "Reservar este servicio" },
  "services.viewDetails": { en: "View details", es: "Ver detalles" },
  "services.variables": { en: "What affects the price?", es: "¿Qué afecta el precio?" },
  "services.duration": { en: "Duration", es: "Duración" },
  "services.minutes": { en: "min", es: "min" },

  // Gallery
  "gallery.title": { en: "Our Work", es: "Nuestro Trabajo" },
  "gallery.subtitle": {
    en: "Real clients, real results. Every photo shows actual work done in our salon.",
    es: "Clientas reales, resultados reales. Cada foto muestra trabajo real hecho en nuestro salón.",
  },
  "gallery.filter.all": { en: "All", es: "Todos" },

  // About
  "about.title": { en: "About Neydi", es: "Sobre Neydi" },
  "about.subtitle": {
    en: "A Dominican hair salon built on technique, care and real results.",
    es: "Un salón de cabello dominicano construido sobre técnica, cuidado y resultados reales.",
  },
  "about.story.title": { en: "Our Story", es: "Nuestra Historia" },
  "about.story.p1": {
    en: "Neydi Dominican Hair Salon brings the art of Dominican hair care to Temple Hills, Maryland. Our focus is simple: beautiful, healthy-looking hair with results you can see and feel.",
    es: "Neydi Dominican Hair Salon trae el arte del cuidado capilar dominicano a Temple Hills, Maryland. Nuestro enfoque es simple: cabello hermoso de aspecto saludable con resultados que puedes ver y sentir.",
  },
  "about.story.p2": {
    en: "We specialize in blowouts, color, treatments, extensions and precision cuts — all with the warmth and attention that defines Dominican salon culture.",
    es: "Nos especializamos en blowouts, color, tratamientos, extensiones y cortes de precisión — todo con la calidez y atención que define la cultura del salón dominicano.",
  },
  "about.technique.title": { en: "The Technique", es: "La Técnica" },
  "about.technique.desc": {
    en: "Dominican hair technique is known worldwide for creating volume, shine and movement. It's a combination of expert hands, the right products and years of practice.",
    es: "La técnica capilar dominicana es conocida mundialmente por crear volumen, brillo y movimiento. Es una combinación de manos expertas, los productos correctos y años de práctica.",
  },
  "about.promise.title": { en: "Our Promise", es: "Nuestra Promesa" },
  "about.promise.desc": {
    en: "We'll always explain the process, confirm the price before starting, and make sure you leave loving your hair.",
    es: "Siempre explicaremos el proceso, confirmaremos el precio antes de comenzar y nos aseguraremos de que salgas amando tu cabello.",
  },

  // Book
  "book.title": { en: "Book an Appointment", es: "Reservar una Cita" },
  "book.subtitle": {
    en: "Request your appointment and we'll confirm within 24 hours. For same-day availability, call us directly.",
    es: "Solicita tu cita y confirmaremos dentro de 24 horas. Para disponibilidad el mismo día, llámanos directamente.",
  },
  "book.form.name": { en: "Full Name", es: "Nombre Completo" },
  "book.form.email": { en: "Email", es: "Correo Electrónico" },
  "book.form.phone": { en: "Phone", es: "Teléfono" },
  "book.form.service": { en: "Service", es: "Servicio" },
  "book.form.selectService": { en: "Select a service...", es: "Selecciona un servicio..." },
  "book.form.date": { en: "Preferred Date", es: "Fecha Preferida" },
  "book.form.time": { en: "Preferred Time", es: "Hora Preferida" },
  "book.form.notes": { en: "Notes (optional)", es: "Notas (opcional)" },
  "book.form.notesPlaceholder": {
    en: "Tell us about your hair goals, current hair condition, or any questions...",
    es: "Cuéntanos sobre tus objetivos capilares, condición actual del cabello, o cualquier pregunta...",
  },
  "book.form.submit": { en: "Request Appointment", es: "Solicitar Cita" },
  "book.form.submitting": { en: "Sending...", es: "Enviando..." },
  "book.form.success": {
    en: "Your request has been received! We'll confirm your appointment within 24 hours.",
    es: "¡Tu solicitud ha sido recibida! Confirmaremos tu cita dentro de 24 horas.",
  },
  "book.form.call": {
    en: "Prefer to call? Reach us at",
    es: "¿Prefieres llamar? Comunícate al",
  },
  "book.form.privacy": {
    en: "Your information is only used to schedule your appointment. We never share your data.",
    es: "Tu información solo se usa para programar tu cita. Nunca compartimos tus datos.",
  },

  // Visit
  "visit.title": { en: "Visit Us", es: "Visítanos" },
  "visit.subtitle": {
    en: "We're easy to find on Saint Barnabas Road in Temple Hills.",
    es: "Somos fáciles de encontrar en Saint Barnabas Road en Temple Hills.",
  },
  "visit.address": { en: "Address", es: "Dirección" },
  "visit.hours": { en: "Hours", es: "Horario" },
  "visit.phone": { en: "Phone", es: "Teléfono" },
  "visit.walkins": { en: "Walk-ins Welcome", es: "Se Aceptan Sin Cita" },
  "visit.walkins.desc": {
    en: "Walk-ins are welcome based on availability. For guaranteed service, we recommend booking in advance.",
    es: "Se aceptan visitas sin cita según disponibilidad. Para servicio garantizado, recomendamos reservar con anticipación.",
  },
  "visit.directions": { en: "Get Directions", es: "Cómo Llegar" },
  "visit.call": { en: "Call Us", es: "Llamar" },

  // Footer
  "footer.tagline": {
    en: "Dominican technique. Beautiful movement.",
    es: "Técnica dominicana. Movimiento que se nota.",
  },
  "footer.services": { en: "Services", es: "Servicios" },
  "footer.contact": { en: "Contact", es: "Contacto" },
  "footer.legal": { en: "Legal", es: "Legal" },
  "footer.privacy": { en: "Privacy Policy", es: "Política de Privacidad" },
  "footer.accessibility": { en: "Accessibility", es: "Accesibilidad" },
  "footer.policies": { en: "Policies", es: "Políticas" },
  "footer.copyright": {
    en: "© 2026 Neydi Dominican Hair Salon. All rights reserved.",
    es: "© 2026 Neydi Dominican Hair Salon. Todos los derechos reservados.",
  },

  // Common
  "common.backToHome": { en: "Back to Home", es: "Volver al Inicio" },
  "common.seeMore": { en: "See more", es: "Ver más" },
  "common.close": { en: "Close", es: "Cerrar" },
  "common.menu": { en: "Menu", es: "Menú" },
  "common.language": { en: "Español", es: "English" },
};

export function uiString(key: string, locale: Locale): string {
  return ui[key]?.[locale] || ui[key]?.["en"] || key;
}

export function getLocaleFromPath(pathname: string): Locale {
  if (pathname.startsWith("/es")) return "es";
  return "en";
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en";
}

export function getLocalizedPath(path: string, locale: Locale): string {
  const cleanPath = path.replace(/^\/(en|es)/, "") || "/";
  return `/${locale}${cleanPath === "/" ? "" : cleanPath}`;
}
