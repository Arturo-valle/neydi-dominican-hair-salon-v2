"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  tiltAmount?: number;
  glare?: boolean;
}

export function TiltCard({
  children,
  className = "",
  style,
  onClick,
  tiltAmount = 8,
  glare = true,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const rotateX = useRef<gsap.QuickToFunc | null>(null);
  const rotateY = useRef<gsap.QuickToFunc | null>(null);
  const glareX = useRef<gsap.QuickToFunc | null>(null);
  const glareY = useRef<gsap.QuickToFunc | null>(null);
  const glareOpacity = useRef<gsap.QuickToFunc | null>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!cardRef.current || reducedMotion.current) return;

    rotateX.current = gsap.quickTo(cardRef.current, "rotateX", { duration: 0.4, ease: "power2.out" });
    rotateY.current = gsap.quickTo(cardRef.current, "rotateY", { duration: 0.4, ease: "power2.out" });

    if (glareRef.current) {
      glareX.current = gsap.quickTo(glareRef.current, "x", { duration: 0.4, ease: "power2.out" });
      glareY.current = gsap.quickTo(glareRef.current, "y", { duration: 0.4, ease: "power2.out" });
      glareOpacity.current = gsap.quickTo(glareRef.current, "opacity", { duration: 0.4, ease: "power2.out" });
    }
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || reducedMotion.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const offsetX = (x / rect.width - 0.5) * 2;
    const offsetY = (y / rect.height - 0.5) * 2;

    rotateX.current?.(-offsetY * tiltAmount);
    rotateY.current?.(offsetX * tiltAmount);
    glareX.current?.(x);
    glareY.current?.(y);
    glareOpacity.current?.(glare ? 1 : 0);
  };

  const resetTilt = () => {
    if (reducedMotion.current) return;
    rotateX.current?.(0);
    rotateY.current?.(0);
    glareOpacity.current?.(0);
  };

  return (
    <div style={{ perspective: "1000px" }}>
      <div
        ref={cardRef}
        className={className}
        style={{
          ...style,
          position: "relative",
          overflow: "hidden",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        role={onClick ? "button" : undefined}
        tabIndex={onClick ? 0 : undefined}
        onKeyDown={onClick ? (event) => event.key === "Enter" && onClick() : undefined}
      >
        {children}
        {glare && (
          <div
            ref={glareRef}
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 180,
              height: 180,
              pointerEvents: "none",
              opacity: 0,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(196, 150, 61, 0.28), rgba(196, 150, 61, 0.08) 35%, rgba(17, 17, 17, 0) 70%)",
              mixBlendMode: "screen",
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default TiltCard;
