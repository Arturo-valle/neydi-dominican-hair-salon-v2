export type Locale = "en" | "es";

export type LocalizedText = {
  en: string;
  es: string;
};

export type PriceQualifier = "fixed" | "andUp" | "perOz" | "additional" | "quoteRequired";

export type Service = {
  slug: string;
  category: string;
  categorySlug: string;
  name: LocalizedText;
  summary: LocalizedText;
  basePriceCents: number;
  priceQualifier: PriceQualifier;
  durationMinutes?: number;
  variables?: LocalizedText;
  featured: boolean;
  public: boolean;
};

export type ServiceCategory = {
  slug: string;
  name: LocalizedText;
  description: LocalizedText;
  icon: string;
};

export type BusinessHours = {
  day: string;
  dayEs: string;
  open: string;
  close: string;
};

export type Special = {
  slug: string;
  name: LocalizedText;
  description: LocalizedText;
  originalPriceCents: number;
  specialPriceCents: number;
  priceQualifier: PriceQualifier;
  validDays: string;
  active: boolean;
};
