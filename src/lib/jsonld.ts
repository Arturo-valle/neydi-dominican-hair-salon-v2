import { business, hours } from "@/lib/data";

export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    "@id": `${business.domain}#business`,
    name: business.name,
    image: `https://${business.domain}/og-image.jpg`,
    url: `https://${business.domain}`,
    telephone: business.phoneFormatted,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.coordinates.lat,
      longitude: business.coordinates.lng,
    },
    openingHoursSpecification: hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.open.replace(" AM", ":00").replace(" PM", ":00"),
      closes: h.close.replace(" AM", ":00").replace(" PM", ":00"),
    })),
    sameAs: [business.instagramUrl],
    priceRange: "$$",
    servesCuisine: "Dominican hair care",
    areaServed: {
      "@type": "City",
      name: "Temple Hills",
      containedInPlace: {
        "@type": "State",
        name: "Maryland",
      },
    },
  };
}
