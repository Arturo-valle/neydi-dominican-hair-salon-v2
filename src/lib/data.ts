import { Service, ServiceCategory, BusinessHours, Special, Locale, LocalizedText } from "./types";

// ─── Business Info ───
export const business = {
  name: "Neydi Dominican Hair Salon",
  phone: "+13017027294",
  phoneFormatted: "(301) 702-7294",
  whatsapp: "13017027294", // canonical — confirm with owner
  address: {
    street: "4702 Saint Barnabas Rd",
    city: "Temple Hills",
    state: "MD",
    zip: "20748",
    country: "US",
    full: "4702 Saint Barnabas Rd, Temple Hills, MD 20748",
  },
  coordinates: {
    lat: 38.8176,
    lng: -76.9456,
  },
  domain: "neydidominicanhairsalon.com", // confirm with owner — plural domain
  instagram: "@neydidominicanhairsalon",
  instagramUrl: "https://www.instagram.com/neydidominicanhairsalon/",
};

export const hours: BusinessHours[] = [
  { day: "Monday", dayEs: "Lunes", open: "9:00 AM", close: "7:00 PM" },
  { day: "Tuesday", dayEs: "Martes", open: "9:00 AM", close: "7:00 PM" },
  { day: "Wednesday", dayEs: "Miércoles", open: "9:00 AM", close: "7:00 PM" },
  { day: "Thursday", dayEs: "Jueves", open: "9:00 AM", close: "7:00 PM" },
  { day: "Friday", dayEs: "Viernes", open: "9:00 AM", close: "7:00 PM" },
  { day: "Saturday", dayEs: "Sábado", open: "7:00 AM", close: "6:00 PM" },
  { day: "Sunday", dayEs: "Domingo", open: "8:00 AM", close: "4:00 PM" },
];

// ─── Service Categories ───
export const categories: ServiceCategory[] = [
  {
    slug: "wash-style",
    name: { en: "Wash & Style", es: "Lavado y Estilo" },
    description: {
      en: "From a fresh wash to a beautiful blowout — the foundation of Dominican hair care.",
      es: "Desde un lavado fresco hasta un hermoso blowout — la base del cuidado capilar dominicano.",
    },
    icon: "wind",
  },
  {
    slug: "conditioners-treatments",
    name: { en: "Conditioners & Treatments", es: "Acondicionadores y Tratamientos" },
    description: {
      en: "Deep nourishment and restoration for healthy-looking, resilient hair.",
      es: "Nutrición profunda y restauración para un cabello de aspecto saludable y resistente.",
    },
    icon: "droplet",
  },
  {
    slug: "color-chemical",
    name: { en: "Color & Chemical", es: "Color y Químicos" },
    description: {
      en: "Professional color, highlights and chemical services with dimensional results.",
      es: "Color profesional, mechas y servicios químicos con resultados dimensionales.",
    },
    icon: "palette",
  },
  {
    slug: "haircuts",
    name: { en: "Haircuts", es: "Cortes" },
    description: {
      en: "Precision cuts from a simple trim to a full style transformation.",
      es: "Cortes de precisión desde un recorte simple hasta una transformación completa.",
    },
    icon: "scissors",
  },
  {
    slug: "extensions-finishing",
    name: { en: "Extensions & Finishing", es: "Extensiones y Acabados" },
    description: {
      en: "Volume, length and the perfect finishing touch — from extensions to curls.",
      es: "Volumen, largo y el toque final perfecto — desde extensiones hasta rizos.",
    },
    icon: "sparkles",
  },
];

// ─── Services Catalog ───
export const services: Service[] = [
  // Wash & Style
  {
    slug: "wash-and-set",
    category: "Wash & Style",
    categorySlug: "wash-style",
    name: { en: "Wash & Set", es: "Lavado y Set" },
    summary: {
      en: "Professional wash with roller set for defined, voluminous curls.",
      es: "Lavado profesional con set de rodillos para rizos definidos y voluminosos.",
    },
    basePriceCents: 4500,
    priceQualifier: "andUp",
    variables: {
      en: "Price varies by hair length, density and condition.",
      es: "El precio varía según largo, densidad y condición del cabello.",
    },
    featured: true,
    public: true,
  },
  {
    slug: "wash-and-blow-dry",
    category: "Wash & Style",
    categorySlug: "wash-style",
    name: { en: "Wash & Blow Dry", es: "Lavado y Brushing" },
    summary: {
      en: "Signature Dominican blowout — silky, full of movement and shine.",
      es: "Blowout dominicano insignia — sedoso, lleno de movimiento y brillo.",
    },
    basePriceCents: 6500,
    priceQualifier: "andUp",
    variables: {
      en: "Price varies by hair length, density and condition.",
      es: "El precio varía según largo, densidad y condición del cabello.",
    },
    featured: true,
    public: true,
  },
  {
    slug: "wash-only",
    category: "Wash & Style",
    categorySlug: "wash-style",
    name: { en: "Wash Only", es: "Solo Lavado" },
    summary: {
      en: "Professional shampoo and scalp cleanse.",
      es: "Champú profesional y limpieza de cuero cabelludo.",
    },
    basePriceCents: 1500,
    priceQualifier: "fixed",
    featured: false,
    public: true,
  },

  // Conditioners & Treatments
  {
    slug: "deep-conditioner",
    category: "Conditioners & Treatments",
    categorySlug: "conditioners-treatments",
    name: { en: "Deep Conditioner", es: "Acondicionamiento Profundo" },
    summary: {
      en: "Intensive moisture treatment to restore softness and elasticity.",
      es: "Tratamiento intensivo de humectación para restaurar suavidad y elasticidad.",
    },
    basePriceCents: 1500,
    priceQualifier: "fixed",
    featured: false,
    public: true,
  },
  {
    slug: "steamer-conditioner",
    category: "Conditioners & Treatments",
    categorySlug: "conditioners-treatments",
    name: { en: "Steamer Conditioner", es: "Acondicionador con Vapor" },
    summary: {
      en: "Deep conditioning with professional steamer for maximum absorption.",
      es: "Acondicionamiento profundo con vapor profesional para máxima absorción.",
    },
    basePriceCents: 2000,
    priceQualifier: "fixed",
    featured: false,
    public: true,
  },
  {
    slug: "treatment-leave-in",
    category: "Conditioners & Treatments",
    categorySlug: "conditioners-treatments",
    name: { en: "Treatment Leave-In", es: "Tratamiento Sin Enjuague" },
    summary: {
      en: "Lightweight leave-in treatment for ongoing protection and shine.",
      es: "Tratamiento ligero sin enjuague para protección continua y brillo.",
    },
    basePriceCents: 1500,
    priceQualifier: "fixed",
    featured: false,
    public: true,
  },

  // Color & Chemical
  {
    slug: "semi-permanent-color",
    category: "Color & Chemical",
    categorySlug: "color-chemical",
    name: { en: "Semi-Permanent Color", es: "Color Semipermanente" },
    summary: {
      en: "Gloss and tone deposit for vibrant, shiny results without commitment.",
      es: "Depósito de brillo y tono para resultados vibrantes y brillantes sin compromiso.",
    },
    basePriceCents: 9500,
    priceQualifier: "andUp",
    variables: {
      en: "Price varies by hair length, density and amount of product needed.",
      es: "El precio varía según largo, densidad y cantidad de producto necesario.",
    },
    featured: true,
    public: true,
  },
  {
    slug: "permanent-color",
    category: "Color & Chemical",
    categorySlug: "color-chemical",
    name: { en: "Permanent Color", es: "Color Permanente" },
    summary: {
      en: "Full permanent color application for long-lasting, rich coverage.",
      es: "Aplicación de color permanente completo para una cobertura duradera y rica.",
    },
    basePriceCents: 10500,
    priceQualifier: "andUp",
    variables: {
      en: "Price varies by hair length, density and amount of product needed.",
      es: "El precio varía según largo, densidad y cantidad de producto necesario.",
    },
    featured: false,
    public: true,
  },
  {
    slug: "highlights",
    category: "Color & Chemical",
    categorySlug: "color-chemical",
    name: { en: "Highlights", es: "Mechas" },
    summary: {
      en: "Dimensional foils and highlights for depth and natural-looking movement.",
      es: "Foil dimensional y mechas para profundidad y movimiento de aspecto natural.",
    },
    basePriceCents: 15000,
    priceQualifier: "andUp",
    variables: {
      en: "Price varies by number of foils, hair length and desired result.",
      es: "El precio varía según cantidad de foils, largo del cabello y resultado deseado.",
    },
    featured: true,
    public: true,
  },
  {
    slug: "keratin-botox",
    category: "Color & Chemical",
    categorySlug: "color-chemical",
    name: { en: "Keratin or Botox Treatment", es: "Tratamiento de Keratina o Botox" },
    summary: {
      en: "Smoothing treatment for frizz control, shine and easier daily styling.",
      es: "Tratamiento alisador para control del frizz, brillo y peinado diario más fácil.",
    },
    basePriceCents: 6500,
    priceQualifier: "perOz",
    variables: {
      en: "Priced per ounce. Total depends on hair length and density.",
      es: "Precio por onza. El total depende del largo y densidad del cabello.",
    },
    featured: true,
    public: true,
  },
  {
    slug: "relaxer",
    category: "Color & Chemical",
    categorySlug: "color-chemical",
    name: { en: "Relaxer", es: "Relajante" },
    summary: {
      en: "Professional relaxer for smooth, manageable texture.",
      es: "Relajante profesional para una textura suave y manejable.",
    },
    basePriceCents: 8500,
    priceQualifier: "andUp",
    variables: {
      en: "Price varies by hair length, density and condition.",
      es: "El precio varía según largo, densidad y condición del cabello.",
    },
    featured: false,
    public: true,
  },

  // Haircuts
  {
    slug: "trim",
    category: "Haircuts",
    categorySlug: "haircuts",
    name: { en: "Trim", es: "Recorte" },
    summary: {
      en: "Clean up ends while keeping your current length and shape.",
      es: "Limpieza de puntas manteniendo el largo y forma actual.",
    },
    basePriceCents: 1000,
    priceQualifier: "fixed",
    featured: false,
    public: true,
  },
  {
    slug: "layers",
    category: "Haircuts",
    categorySlug: "haircuts",
    name: { en: "Layers", es: "Capas" },
    summary: {
      en: "Layered cut for volume, movement and a lighter feel.",
      es: "Corte en capas para volumen, movimiento y una sensación más ligera.",
    },
    basePriceCents: 1500,
    priceQualifier: "fixed",
    featured: false,
    public: true,
  },
  {
    slug: "hair-style-cut",
    category: "Haircuts",
    categorySlug: "haircuts",
    name: { en: "Hair Style Cut", es: "Corte de Estilo" },
    summary: {
      en: "Complete style cut — shape, texture and finish tailored to you.",
      es: "Corte de estilo completo — forma, textura y acabado personalizados para ti.",
    },
    basePriceCents: 2500,
    priceQualifier: "fixed",
    featured: false,
    public: true,
  },

  // Extensions & Finishing
  {
    slug: "glue-hair-extension",
    category: "Extensions & Finishing",
    categorySlug: "extensions-finishing",
    name: { en: "Glue Hair Extension", es: "Extensión con Adhesivo" },
    summary: {
      en: "Full glue-in hair extensions for instant length and volume.",
      es: "Extensiones completas con adhesivo para largo y volumen instantáneo.",
    },
    basePriceCents: 12500,
    priceQualifier: "andUp",
    variables: {
      en: "Price varies by amount of hair and desired fullness.",
      es: "El precio varía según cantidad de cabello y llenura deseada.",
    },
    featured: false,
    public: true,
  },
  {
    slug: "glue-per-track",
    category: "Extensions & Finishing",
    categorySlug: "extensions-finishing",
    name: { en: "Glue Hair Per Track", es: "Extensión por Track" },
    summary: {
      en: "Individual track glue-in for customizable placement.",
      es: "Colocación individual por track para un diseño personalizado.",
    },
    basePriceCents: 1000,
    priceQualifier: "fixed",
    featured: false,
    public: true,
  },
  {
    slug: "clip-on-extensions",
    category: "Extensions & Finishing",
    categorySlug: "extensions-finishing",
    name: { en: "Clip-On Extensions", es: "Extensiones Clip-On" },
    summary: {
      en: "Temporary clip-in extensions for instant transformation.",
      es: "Extensiones temporales clip-on para una transformación instantánea.",
    },
    basePriceCents: 9500,
    priceQualifier: "andUp",
    featured: false,
    public: true,
  },
  {
    slug: "micro-ring-extensions",
    category: "Extensions & Finishing",
    categorySlug: "extensions-finishing",
    name: { en: "Micro Ring Extensions", es: "Extensiones con Micro Anillos" },
    summary: {
      en: "Semi-permanent micro bead extensions for natural-looking length.",
      es: "Extensiones semipermanentes con micro beads para un largo de aspecto natural.",
    },
    basePriceCents: 25000,
    priceQualifier: "andUp",
    featured: false,
    public: true,
  },
  {
    slug: "sew-in-extensions",
    category: "Extensions & Finishing",
    categorySlug: "extensions-finishing",
    name: { en: "Sew-In Hair Extensions (2 bundles)", es: "Extensiones Cosidas (2 paquetes)" },
    summary: {
      en: "Professional sew-in with braided base and two bundles for full coverage.",
      es: "Extensión cosida profesional con base trenzada y dos paquetes para cobertura completa.",
    },
    basePriceCents: 18500,
    priceQualifier: "andUp",
    variables: {
      en: "Price varies by hair type, length and number of bundles.",
      es: "El precio varía según tipo de cabello, largo y cantidad de paquetes.",
    },
    featured: false,
    public: true,
  },
  {
    slug: "extension-removal",
    category: "Extensions & Finishing",
    categorySlug: "extensions-finishing",
    name: { en: "Hair Extensions Removed", es: "Retiro de Extensiones" },
    summary: {
      en: "Safe, professional removal of existing extensions.",
      es: "Retiro seguro y profesional de extensiones existentes.",
    },
    basePriceCents: 2500,
    priceQualifier: "fixed",
    featured: false,
    public: true,
  },
  {
    slug: "curl",
    category: "Extensions & Finishing",
    categorySlug: "extensions-finishing",
    name: { en: "Curl", es: "Rizo" },
    summary: {
      en: "Finishing curls with styling tools for bounce and definition.",
      es: "Rizos de acabado con herramientas de estilo para rebote y definición.",
    },
    basePriceCents: 500,
    priceQualifier: "fixed",
    featured: false,
    public: true,
  },
];

// ─── Monday & Tuesday Specials ───
export const specials: Special[] = [
  {
    slug: "special-wash-set",
    name: { en: "Monday & Tuesday — Wash & Set", es: "Lunes y Martes — Lavado y Set" },
    description: {
      en: "Start your week with a beautiful set at a special price.",
      es: "Comienza la semana con un hermoso set a un precio especial.",
    },
    originalPriceCents: 4500,
    specialPriceCents: 3500,
    priceQualifier: "andUp",
    validDays: "Monday–Tuesday",
    active: true, // toggle when confirmed with owner
  },
  {
    slug: "special-wash-blow-dry",
    name: { en: "Monday & Tuesday — Wash & Blow Dry", es: "Lunes y Martes — Lavado y Brushing" },
    description: {
      en: "Our signature blowout at a special weekday price.",
      es: "Nuestro blowout insignia a un precio especial entre semana.",
    },
    originalPriceCents: 6500,
    specialPriceCents: 5500,
    priceQualifier: "andUp",
    validDays: "Monday–Tuesday",
    active: true, // toggle when confirmed with owner
  },
];

// --- Service Images ---
export const serviceImageMap: Record<string, string> = {
  "wash-and-set": "/images/svc-wash-set.jpg",
  "wash-and-blow-dry": "/images/svc-blow-dry.jpg",
  "wash-only": "/images/svc-wash-only.jpg",
  "deep-conditioner": "/images/svc-deep-conditioner.jpg",
  "steamer-conditioner": "/images/svc-steamer.jpg",
  "treatment-leave-in": "/images/svc-leave-in.jpg",
  "semi-permanent-color": "/images/svc-semi-color.jpg",
  "permanent-color": "/images/svc-perm-color.jpg",
  "highlights": "/images/svc-highlights.jpg",
  "keratin-botox": "/images/svc-keratin.jpg",
  "relaxer": "/images/svc-relaxer.jpg",
  "trim": "/images/svc-trim.jpg",
  "layers": "/images/svc-layers.jpg",
  "hair-style-cut": "/images/svc-haircut.jpg",
  "glue-hair-extension": "/images/svc-glue-ext.jpg",
  "glue-per-track": "/images/svc-glue-ext.jpg",
  "clip-on-extensions": "/images/svc-clip-on.jpg",
  "micro-ring-extensions": "/images/svc-sew-in.jpg",
  "sew-in-extensions": "/images/svc-sew-in.jpg",
  "extension-removal": "/images/svc-glue-ext.jpg",
  "curl": "/images/svc-curl.jpg",
};

export function getServiceImage(slug: string): string {
  return serviceImageMap[slug] || "/images/salon-hero.jpg";
}

// --- Category Images ---
export const categoryImageMap: Record<string, string> = {
  "wash-style": "/images/svc-blow-dry.jpg",
  "conditioners-treatments": "/images/svc-deep-conditioner.jpg",
  "color-chemical": "/images/svc-highlights.jpg",
  "haircuts": "/images/svc-haircut.jpg",
  "extensions-finishing": "/images/svc-sew-in.jpg",
};

export function getCategoryImage(slug: string): string {
  return categoryImageMap[slug] || "/images/salon-hero.jpg";
}

// ─── Helpers ───
export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(0)}`;
}

export function formatPriceWithQualifier(cents: number, qualifier: string, locale: Locale): string {
  const price = formatPrice(cents);
  switch (qualifier) {
    case "andUp":
      return locale === "es" ? `${price} en adelante` : `${price} & up`;
    case "perOz":
      return locale === "es" ? `${price} por onza` : `${price} per oz`;
    case "additional":
      return locale === "es" ? `${price} adicional` : `+${price}`;
    case "quoteRequired":
      return locale === "es" ? "Consultar" : "Request quote";
    default:
      return price;
  }
}

export function t(text: LocalizedText, locale: Locale): string {
  return text[locale] || text.en;
}

export function getServicesByCategory(categorySlug: string): Service[] {
  return services.filter((s) => s.categorySlug === categorySlug && s.public);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured && s.public);
}

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
