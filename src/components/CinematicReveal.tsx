"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CinematicRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down" | "center";
  delay?: number;
}

export default function CinematicReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: CinematicRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;

    // Set initial clip-path based on direction
    const clipPaths: Record<string, string> = {
      left: "inset(0 100% 0 0)",
      right: "inset(0 0 0 100%)",
      up: "inset(100% 0 0 0)",
      down: "inset(0 0 100% 0)",
      center: "inset(50% 50% 50% 50%)",
    };

    gsap.set(el, {
      clipPath: clipPaths[direction],
      opacity: 0,
      scale: 1.08,
    });

    const anim = gsap.to(el, {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      scale: 1,
      duration: 1.2,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: "top 20%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [direction, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
