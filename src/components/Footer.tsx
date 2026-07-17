import Link from "next/link";
import { Locale } from "@/lib/types";
import { uiString } from "@/lib/i18n";
import { business, hours, formatPrice } from "@/lib/data";

export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="bg-carbon text-warm-white pb-20 md:pb-0">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <img
              src="/neydi-logo-header.png"
              alt="Neydi Dominican Hair Salon"
              width={56}
              height={56}
              className="mb-3"
              loading="lazy"
            />
            <p className="text-warm-white/50 text-sm leading-relaxed">
              {uiString("footer.tagline", locale)}
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-white/40 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gold mb-4">
              {uiString("footer.services", locale)}
            </h4>
            <ul className="space-y-2">
              {["wash-style", "conditioners-treatments", "color-chemical", "haircuts", "extensions-finishing"].map(
                (slug) => (
                  <li key={slug}>
                    <Link
                      href={`/${locale}/services#${slug}`}
                      className="text-sm text-warm-white/50 hover:text-gold transition-colors"
                    >
                      {slug
                        .split("-")
                        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                        .join(" ")}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gold mb-4">
              {uiString("footer.contact", locale)}
            </h4>
            <address className="not-italic space-y-2 text-sm text-warm-white/50">
              <p>{business.address.street}</p>
              <p>
                {business.address.city}, {business.address.state} {business.address.zip}
              </p>
              <p className="mt-3">
                <a href={`tel:${business.phone}`} className="hover:text-gold transition-colors">
                  {business.phoneFormatted}
                </a>
              </p>
            </address>
            <div className="mt-4 text-sm text-warm-white/40">
              {hours.slice(0, 5).map((h, i) => (
                <div key={i} className="flex justify-between max-w-[200px]">
                  <span>{locale === "es" ? h.dayEs.slice(0, 3) : h.day.slice(0, 3)}</span>
                  <span>
                    {h.open}–{h.close}
                  </span>
                </div>
              ))}
              <div className="flex justify-between max-w-[200px]">
                <span>{locale === "es" ? "Sáb" : "Sat"}</span>
                <span>
                  {hours[5].open}–{hours[5].close}
                </span>
              </div>
              <div className="flex justify-between max-w-[200px]">
                <span>{locale === "es" ? "Dom" : "Sun"}</span>
                <span>
                  {hours[6].open}–{hours[6].close}
                </span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gold mb-4">
              {uiString("footer.legal", locale)}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/privacy`} className="text-sm text-warm-white/50 hover:text-gold transition-colors">
                  {uiString("footer.policies", locale)}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/privacy`} className="text-sm text-warm-white/50 hover:text-gold transition-colors">
                  {uiString("footer.privacy", locale)}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/accessibility`} className="text-sm text-warm-white/50 hover:text-gold transition-colors">
                  {uiString("footer.accessibility", locale)}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-warm-white/30">{uiString("footer.copyright", locale)}</p>
          <Link
            href={`/${locale === "en" ? "es" : "en"}`}
            className="text-xs text-warm-white/30 hover:text-gold transition-colors"
          >
            {uiString("common.language", locale)}
          </Link>
        </div>
      </div>
    </footer>
  );
}
