"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Locale } from "@/lib/types";

gsap.registerPlugin(ScrollTrigger);

const copy = {
  en: {
    title: "We Accept Payments By:",
    cash: "Cash",
    subtitle: "All payment methods are secure and protected",
  },
  es: {
    title: "Aceptamos Pagos Con:",
    cash: "Efectivo",
    subtitle: "Todos los métodos de pago son seguros y protegidos",
  },
};

const cardPayments = [
  { name: "Visa", src: "/images/payments/visa.svg", bg: "#fff", w: 90, h: 55 },
  { name: "Mastercard", src: "/images/payments/mastercard.svg", bg: "#fff", w: 90, h: 55 },
  { name: "Maestro", src: "/images/payments/maestro.svg", bg: "#fff", w: 90, h: 55 },
  { name: "Visa Debit", src: "/images/payments/visa.svg", bg: "#fff", w: 90, h: 55 },
  { name: "American Express", src: "/images/payments/amex.svg", bg: "#fff", w: 90, h: 55 },
];

const digitalPayments = [
  { name: "Apple Pay", src: "/images/payments/apple-pay.svg", bg: "#000", w: 90, h: 55 },
  { name: "Cash App", src: "/images/payments/cashapp.svg", bg: "#fff", w: 90, h: 55 },
  { name: "Klarna", src: "/images/payments/klarna.svg", bg: "#FFB3C7", w: 90, h: 55 },
];

const bnplPayments = [
  { name: "Affirm", src: "/images/payments/affirm.svg", bg: "#fff", w: 90, h: 55 },
  { name: "Zelle", src: "/images/payments/zelle.svg", bg: "#6C1CD1", w: 90, h: 55 },
  { name: "Sezzle", src: "/images/payments/sezzle.svg", bg: "#3D2B7E", w: 90, h: 55 },
];

function PaymentCard({ payment, index }: { payment: typeof cardPayments[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // Entrance animation
    gsap.from(el, {
      y: 40,
      opacity: 0,
      rotateY: -10,
      scale: 0.95,
      duration: 0.5,
      delay: 0.08 * index,
      scrollTrigger: {
        trigger: el.closest("section"),
        start: "top 75%",
      },
    });

    // Floating animation
    gsap.to(el, {
      y: -5,
      duration: 2.5 + Math.random() * 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: Math.random() * 2,
    });

    // 3D tilt on hover
    const handleEnter = () => {
      gsap.to(el, {
        scale: 1.08,
        rotateY: 5,
        rotateX: -3,
        boxShadow: "0 20px 40px rgba(212, 175, 55, 0.25)",
        duration: 0.3,
      });
    };
    const handleLeave = () => {
      gsap.to(el, {
        scale: 1,
        rotateY: 0,
        rotateX: 0,
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        duration: 0.3,
      });
    };

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="rounded-xl overflow-hidden border border-white/15 cursor-pointer"
      style={{
        background: payment.bg,
        perspective: "1000px",
        transformStyle: "preserve-3d",
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
      }}
    >
      <img
        src={payment.src}
        alt={payment.name}
        width={payment.w}
        height={payment.h}
        className="w-full h-auto p-2"
        loading="lazy"
      />
      <p className="text-center text-[10px] font-medium pb-2 px-1"
        style={{ color: payment.bg === "#fff" || payment.bg === "#FFB3C7" ? "#333" : "#fff" }}>
        {payment.name}
      </p>
    </div>
  );
}

export default function PaymentMethods({ locale }: { locale: Locale }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(".payment-heading", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.from(".cash-box", {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const t = copy[locale];

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Top black header with gold accents */}
      <div className="bg-[#0a0a0a] py-12 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
        <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[#C9A227] rounded-tl" />
        <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#C9A227] rounded-tr" />
        {/* Gold fleur-de-lis */}
        <div className="flex justify-center mb-4">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#C9A227" opacity="0.8">
            <path d="M12 2C12 2 8 6 8 9c0 2 1.5 3.5 3 4v7h2v-7c1.5-.5 3-2 3-4 0-3-4-7-4-7z"/>
            <path d="M12 2C12 2 16 6 16 9c0 2-1.5 3.5-3 4v7h-2v-7c-1.5-.5-3-2-3-4 0-3 4-7 4-7z" opacity="0.5"/>
          </svg>
        </div>
      </div>

      {/* White middle section */}
      <div className="bg-[#f8f8f8] py-16 px-6 relative">
        {/* Subtle wave pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q25 0 50 10 Q75 20 100 10' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 20px",
        }} />

        <div className="max-w-5xl mx-auto relative">
          {/* Title */}
          <h2 className="payment-heading text-center text-2xl md:text-3xl font-serif text-[#222] mb-2">
            {t.title}
          </h2>
          {/* Gold divider with fleur-de-lis */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-16 bg-[#C9A227]" />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#C9A227" opacity="0.6">
              <path d="M12 2C12 2 8 6 8 9c0 2 1.5 3.5 3 4v7h2v-7c1.5-.5 3-2 3-4 0-3-4-7-4-7z"/>
            </svg>
            <div className="h-px w-16 bg-[#C9A227]" />
          </div>

          {/* Cash box */}
          <div className="cash-box flex justify-center mb-10">
            <div className="relative rounded-xl px-12 py-5 border-2 border-[#C9A227]"
              style={{ background: "#1a1a1a", boxShadow: "inset 0 0 0 4px #1a1a1a, inset 0 0 0 6px #C9A227" }}>
              <span className="text-[#C9A227] text-2xl md:text-3xl font-serif font-semibold tracking-wide">
                {t.cash}
              </span>
            </div>
          </div>

          {/* Card payments row */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6">
            {cardPayments.map((p, i) => (
              <div key={p.name} className="w-[90px] md:w-[100px]">
                <PaymentCard payment={p} index={i} />
              </div>
            ))}
          </div>

          {/* Digital payments row */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6">
            {digitalPayments.map((p, i) => (
              <div key={p.name} className="w-[90px] md:w-[100px]">
                <PaymentCard payment={p} index={i + 5} />
              </div>
            ))}
          </div>

          {/* BNPL/P2P row */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            {bnplPayments.map((p, i) => (
              <div key={p.name} className="w-[90px] md:w-[100px]">
                <PaymentCard payment={p} index={i + 8} />
              </div>
            ))}
          </div>

          <p className="text-center text-[#888] text-xs mt-6">{t.subtitle}</p>
        </div>
      </div>

      {/* Bottom black section */}
      <div className="bg-[#0a0a0a] py-8 px-6 relative">
        <div className="flex justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#C9A227" opacity="0.8">
            <path d="M12 2C12 2 8 6 8 9c0 2 1.5 3.5 3 4v7h2v-7c1.5-.5 3-2 3-4 0-3-4-7-4-7z"/>
            <path d="M12 2C12 2 16 6 16 9c0 2-1.5 3.5-3 4v7h-2v-7c-1.5-.5-3-2-3-4 0-3 4-7 4-7z" opacity="0.5"/>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
        <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#C9A227] rounded-bl" />
        <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[#C9A227] rounded-br" />
      </div>
    </section>
  );
}
