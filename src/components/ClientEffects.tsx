"use client";

import SmoothScroll from "@/components/SmoothScroll";
import CursorSpotlight from "@/components/CursorSpotlight";

export default function ClientEffects({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <CursorSpotlight />
      {children}
    </SmoothScroll>
  );
}
