"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Locale } from "@/lib/types";
import { uiString } from "@/lib/i18n";
import { services, business, formatPriceWithQualifier } from "@/lib/data";

export default function BookPageClient({ locale }: { locale: Locale }) {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: preselectedService,
    date: "",
    time: "",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate submission — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <section className="py-24 md:py-32 bg-warm-white">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
              <path d="M6 16l6 6L26 8" />
            </svg>
          </div>
          <h2 className="font-display text-2xl text-carbon mb-4">
            {uiString("book.form.success", locale)}
          </h2>
          <a
            href={`tel:${business.phone}`}
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light mt-4"
          >
            {uiString("book.form.call", locale)} {business.phoneFormatted}
          </a>
        </div>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-carbon mb-2">
            {uiString("book.form.name", locale)} *
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded border border-carbon/10 bg-warm-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-carbon mb-2">
            {uiString("book.form.email", locale)} *
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded border border-carbon/10 bg-warm-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-carbon mb-2">
            {uiString("book.form.phone", locale)} *
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 rounded border border-carbon/10 bg-warm-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-carbon mb-2">
            {uiString("book.form.service", locale)} *
          </label>
          <select
            id="service"
            required
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full px-4 py-3 rounded border border-carbon/10 bg-warm-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
          >
            <option value="">{uiString("book.form.selectService", locale)}</option>
            {services
              .filter((s) => s.public)
              .map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name[locale]} — {formatPriceWithQualifier(s.basePriceCents, s.priceQualifier, locale)}
                </option>
              ))}
          </select>
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-carbon mb-2">
            {uiString("book.form.date", locale)}
          </label>
          <input
            id="date"
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="w-full px-4 py-3 rounded border border-carbon/10 bg-warm-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
          />
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-carbon mb-2">
            {uiString("book.form.time", locale)}
          </label>
          <select
            id="time"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            className="w-full px-4 py-3 rounded border border-carbon/10 bg-warm-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
          >
            <option value="">—</option>
            {Array.from({ length: 20 }, (_, i) => {
              const hour = 9 + Math.floor(i / 2);
              const min = i % 2 === 0 ? "00" : "30";
              const ampm = hour >= 12 ? "PM" : "AM";
              const h = hour > 12 ? hour - 12 : hour;
              return (
                <option key={i} value={`${h}:${min} ${ampm}`}>
                  {h}:{min} {ampm}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-carbon mb-2">
          {uiString("book.form.notes", locale)}
        </label>
        <textarea
          id="notes"
          rows={4}
          placeholder={uiString("book.form.notesPlaceholder", locale)}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          className="w-full px-4 py-3 rounded border border-carbon/10 bg-warm-white focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-gold text-carbon font-semibold py-4 rounded hover:bg-gold-light transition-colors disabled:opacity-50"
      >
        {status === "submitting"
          ? uiString("book.form.submitting", locale)
          : uiString("book.form.submit", locale)}
      </button>

      {/* Privacy notice */}
      <p className="text-xs text-charcoal/40 text-center">
        {uiString("book.form.privacy", locale)}
      </p>
    </form>
  );
}
