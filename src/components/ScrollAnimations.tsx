"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════
   SCROLL REVEAL — fade + translate on scroll
   ═══════════════════════════════════════════════════ */
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const from: gsap.TweenVars = {
      opacity: 0,
      y: direction === "up" ? 60 : 0,
      x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
      scale: direction === "scale" ? 0.9 : 1,
    };

    const anim = gsap.fromTo(ref.current, from, {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      duration: 1.2,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => { anim.scrollTrigger?.kill(); anim.kill(); };
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   STAGGER REVEAL — children appear sequentially
   ═══════════════════════════════════════════════════ */
export function StaggerReveal({
  children,
  className = "",
  stagger = 0.12,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const childElements = Array.from(ref.current.children);
    if (childElements.length === 0) return;

    const anim = gsap.fromTo(
      childElements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => { anim.scrollTrigger?.kill(); anim.kill(); };
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   HERO REVEAL — cinematic clipPath + translate
   ═══════════════════════════════════════════════════ */
export function HeroReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const anim = gsap.fromTo(
      ref.current,
      { opacity: 0, y: 40, clipPath: "inset(100% 0% 0% 0%)" },
      {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.4,
        delay,
        ease: "power4.out",
      }
    );

    return () => { anim.kill(); };
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   PARALLAX IMAGE — depth on scroll
   ═══════════════════════════════════════════════════ */
export function ParallaxImage({
  src,
  alt = "",
  className = "",
  speed = 0.3,
  imgClassName = "",
  width,
  height,
}: {
  src: string;
  alt?: string;
  className?: string;
  speed?: number;
  imgClassName?: string;
  width?: number;
  height?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const img = ref.current.querySelector("img");
    if (!img) return;

    const anim = gsap.to(img, {
      yPercent: speed * 30,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    return () => { anim.scrollTrigger?.kill(); anim.kill(); };
  }, [speed]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-full object-cover scale-110 ${imgClassName}`}
        loading="lazy"
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   STICKY SCROLL STACK — cards pin and stack
   Canonical taste-skill pattern (Section 5.A)
   ═══════════════════════════════════════════════════ */
export function StickyStack({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>(".stack-card");
      cardEls.forEach((card, i) => {
        if (i === cardEls.length - 1) return;
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: cardEls[cardEls.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });
        gsap.to(card, {
          scale: 0.92,
          opacity: 0.55,
          ease: "none",
          scrollTrigger: {
            trigger: cardEls[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   HORIZONTAL PAN — vertical scroll → horizontal move
   Canonical taste-skill pattern (Section 5.B)
   ═══════════════════════════════════════════════════ */
export function HorizontalPan({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrap.current || !track.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const distance = track.current!.scrollWidth - window.innerWidth;
      gsap.to(track.current, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${distance}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={wrap} className={`relative overflow-hidden ${className}`}>
      <div ref={track} className="pan-track flex h-[100dvh] items-center">
        {children}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   MARQUEE STRIP — kinetic text scrolling
   ═══════════════════════════════════════════════════ */
export function MarqueeStrip({
  text,
  className = "",
  speed = 30,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const repeated = Array(6).fill(text).join(" \u00B7 ");

  return (
    <div className={`marquee-strip py-6 ${className}`}>
      <div
        className="marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        <span className="text-display-sm text-warm-white/10 px-8 select-none">
          {repeated}
        </span>
        <span className="text-display-sm text-warm-white/10 px-8 select-none">
          {repeated}
        </span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   ANIMATED COUNTER — numbers count up on scroll
   ═══════════════════════════════════════════════════ */
export function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  className = "",
  duration = 2,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (ref.current) ref.current.textContent = `${prefix}${target}${suffix}`;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration,
            ease: "power2.out",
            onUpdate: () => {
              if (ref.current) {
                ref.current.textContent = `${prefix}${Math.round(obj.val)}${suffix}`;
              }
            },
          });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, prefix, suffix, duration, hasAnimated]);

  return (
    <span ref={ref} className={`price-counter ${className}`}>
      {prefix}0{suffix}
    </span>
  );
}

/* ═══════════════════════════════════════════════════
   IMAGE REVEAL — cinematic wipe on scroll
   ═══════════════════════════════════════════════════ */
export function ImageReveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const img = ref.current.querySelector("img");
    if (!img) return;

    gsap.fromTo(
      ref.current,
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      img,
      { scale: 1.3 },
      {
        scale: 1,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
