"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CursorSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!spotlightRef.current) return;

    const spotlight = spotlightRef.current;
    const moveX = gsap.quickTo(spotlight, "x", { duration: 0.5, ease: "power2.out" });
    const moveY = gsap.quickTo(spotlight, "y", { duration: 0.5, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      moveX(e.clientX);
      moveY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block"
      style={{
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)",
        transform: "translate(-50%, -50%)",
        mixBlendMode: "screen",
      }}
      aria-hidden="true"
    />
  );
}
