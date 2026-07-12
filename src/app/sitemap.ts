import type { MetadataRoute } from "next";
import { business } from "@/lib/data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${business.domain}`;
  const routes = ["", "/services", "/gallery", "/about", "/book", "/visit"];
  const locales = ["en", "es"];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${base}/${locale}${route}`,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : route === "/book" ? 0.9 : 0.7,
      });
    }
  }

  return entries;
}
