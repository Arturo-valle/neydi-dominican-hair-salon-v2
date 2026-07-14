"use client";

import { useState } from "react";
import Link from "next/link";
import { Locale } from "@/lib/types";
import { uiString } from "@/lib/i18n";

const navLinks = [
  { key: "nav.home", href: "" },
  { key: "nav.services", href: "/services" },
  { key: "nav.gallery", href: "/gallery" },
  { key: "nav.about", href: "/about" },
  { key: "nav.visit", href: "/visit" },
];

export default function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const otherLang = locale === "en" ? "es" : "en";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-carbon/80 backdrop-blur-xl border-b border-white/[0.04]">
        <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 group"
          >
            <img
              src="/neydi-logo-circle.png"
              alt="Neydi Dominican Hair Salon"
              width={44}
              height={44}
              className="rounded-full transition-transform duration-300 group-hover:scale-110"
              loading="eager"
            />
            <span className="font-display text-xl tracking-[0.25em] text-warm-white group-hover:text-gold transition-colors duration-300 hidden sm:inline">
              NEYDI
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={`/${locale}${link.href}`}
                className="text-[13px] text-warm-white/50 hover:text-warm-white transition-colors duration-300 tracking-wide uppercase"
              >
                {uiString(link.key, locale)}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Link
              href={`/${otherLang}`}
              className="text-[11px] text-warm-white/30 hover:text-gold transition-colors border border-white/10 rounded px-2 py-1 tracking-wider"
              aria-label={uiString("common.language", locale)}
            >
              {otherLang.toUpperCase()}
            </Link>
            <Link
              href={`/${locale}/book`}
              className="hidden md:inline-flex btn-gold text-xs py-2 px-5"
            >
              <span>{uiString("nav.book", locale)}</span>
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-warm-white p-2"
              onClick={() => setOpen(!open)}
              aria-label={uiString("common.menu", locale)}
              aria-expanded={open}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                {open ? (
                  <path d="M5 5l10 10M5 15L15 5" />
                ) : (
                  <path d="M3 6h14M3 10h14M3 14h14" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-carbon/95 backdrop-blur-xl border-t border-white/[0.04] px-6 pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={`/${locale}${link.href}`}
                className="block py-4 text-warm-white/60 hover:text-gold transition-colors border-b border-white/[0.04] text-sm tracking-wide"
                onClick={() => setOpen(false)}
              >
                {uiString(link.key, locale)}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16" />

      {/* Mobile bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-carbon/90 backdrop-blur-xl border-t border-white/[0.06] flex">
        <a
          href={`tel:+13017027294`}
          className="flex-1 flex flex-col items-center py-3 text-warm-white/40 hover:text-gold text-[10px] tracking-wider transition-colors"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-1">
            <path d="M3 5.5A2.5 2.5 0 015.5 3h1.382a1 1 0 01.894.553l1.11 2.22a1 1 0 01-.149 1.09l-1.329 1.494a11.05 11.05 0 004.232 4.232l1.494-1.329a1 1 0 011.09-.15l2.22 1.11a1 1 0 01.554.895V16.5A2.5 2.5 0 0116.5 19h-1C8.044 19 3 13.956 3 6.5v-1z" />
          </svg>
          {uiString("visit.call", locale)}
        </a>
        <Link
          href={`/${locale}/book`}
          className="flex-1 flex flex-col items-center py-3 bg-gold text-carbon text-[10px] font-semibold tracking-wider"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-1">
            <rect x="3" y="4" width="12" height="12" rx="2" />
            <path d="M3 8h12M7 2v3M11 2v3" />
          </svg>
          {uiString("nav.book", locale)}
        </Link>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=4702+Saint+Barnabas+Rd,+Temple+Hills,+MD+20748`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center py-3 text-warm-white/40 hover:text-gold text-[10px] tracking-wider transition-colors"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-1">
            <path d="M9 2C5.686 2 3 4.686 3 8c0 4.5 6 9 6 9s6-4.5 6-9c0-3.314-2.686-6-6-6z" />
            <circle cx="9" cy="8" r="2" />
          </svg>
          {uiString("visit.directions", locale)}
        </a>
      </div>
    </>
  );
}
