"use client";

import { useEffect, useRef } from "react";
import { Spark } from "./icons";

/**
 * Spins the spark icon in place as the page scrolls — faster scrolling
 * (in either direction) spins it faster, and it eases back to a stop
 * once scrolling stops. Sits inside the existing data-reveal span so
 * the pop-in reveal (its own CSS transform) isn't fought over.
 */
export function SpinningSpark({ className }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let rotation = 0;
    let velocity = 0;
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      velocity += (y - lastY) * 0.6;
      lastY = y;
    };

    let raf = 0;
    const tick = () => {
      rotation += velocity;
      velocity *= 0.12;
      if (ref.current) {
        ref.current.style.transform = `rotate(${rotation.toFixed(2)}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <span
      ref={ref}
      className={`inline-block h-full w-full will-change-transform ${className ?? ""}`}
    >
      <Spark className="h-full w-full" />
    </span>
  );
}
