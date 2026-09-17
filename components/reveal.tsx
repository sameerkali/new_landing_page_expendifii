"use client";

import { useEffect, useRef } from "react";

/**
 * Flips data-shown="true" on every [data-reveal] descendant as it scrolls
 * into view. Staggering is read from each element's data-reveal-delay.
 * Purely additive: with JS off or reduced motion on, CSS shows everything.
 */
export function RevealRoot({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (reduce || typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.setAttribute("data-shown", "true"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = el.dataset.revealDelay;
          if (delay) el.style.setProperty("--reveal-delay", `${delay}ms`);
          el.setAttribute("data-shown", "true");
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{children}</div>;
}
