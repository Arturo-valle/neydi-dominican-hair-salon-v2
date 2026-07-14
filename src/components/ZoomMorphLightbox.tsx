"use client";

import { useCallback, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { PanInfo } from "motion/react";

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  caption?: string;
}

interface ZoomMorphLightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const GOLD = "#c4963d";
const SWIPE_THRESHOLD = 80;

export default function ZoomMorphLightbox({
  images,
  currentIndex,
  onClose,
  onNavigate,
}: ZoomMorphLightboxProps) {
  const reduceMotion = useReducedMotion();
  const image = currentIndex === null ? null : images[currentIndex];

  const navigate = useCallback(
    (direction: -1 | 1) => {
      if (currentIndex === null || images.length < 2) return;
      onNavigate((currentIndex + direction + images.length) % images.length);
    },
    [currentIndex, images.length, onNavigate]
  );

  useEffect(() => {
    if (!image) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") navigate(-1);
      if (event.key === "ArrowRight") navigate(1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [image, navigate, onClose]);

  const onDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > SWIPE_THRESHOLD || info.velocity.x > 500) navigate(-1);
    if (info.offset.x < -SWIPE_THRESHOLD || info.velocity.x < -500) navigate(1);
  };

  return (
    <AnimatePresence>
      {image && currentIndex !== null && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#111111]/95 px-4 py-20 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.15 : 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="relative flex max-h-full max-w-[92vw] flex-col items-center gap-5"
            onClick={(event) => event.stopPropagation()}
            drag={images.length > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragEnd={onDragEnd}
          >
            <motion.img
              key={image.src}
              src={image.src}
              alt={image.alt}
              layoutId={reduceMotion ? undefined : `gallery-image-${image.src}`}
              className="max-h-[72vh] max-w-[92vw] select-none object-contain shadow-2xl"
              draggable={false}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, borderRadius: 24 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, borderRadius: 12 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, borderRadius: 24 }}
              transition={{ duration: reduceMotion ? 0.15 : 0.45, ease: [0.16, 1, 0.3, 1] }}
            />

            <motion.div
              className="text-center text-warm-white"
              initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
              transition={{ duration: reduceMotion ? 0.15 : 0.28, delay: reduceMotion ? 0 : 0.08 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: GOLD }}>
                {image.category}
              </p>
              <p className="mt-2 text-sm text-warm-white/80 md:text-base">
                {image.caption ?? image.alt}
              </p>
            </motion.div>
          </motion.div>

          <button
            type="button"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-warm-white transition hover:bg-white/20 focus:outline-none focus:ring-2"
            style={{ "--tw-ring-color": GOLD } as React.CSSProperties}
            onClick={(event) => {
              event.stopPropagation();
              onClose();
            }}
            aria-label="Close lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border text-warm-white backdrop-blur transition hover:bg-[#c4963d]/35 md:flex"
                style={{ borderColor: `${GOLD}80`, backgroundColor: `${GOLD}26` }}
                onClick={(event) => {
                  event.stopPropagation();
                  navigate(-1);
                }}
                aria-label="Previous image"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border text-warm-white backdrop-blur transition hover:bg-[#c4963d]/35 md:flex"
                style={{ borderColor: `${GOLD}80`, backgroundColor: `${GOLD}26` }}
                onClick={(event) => {
                  event.stopPropagation();
                  navigate(1);
                }}
                aria-label="Next image"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
