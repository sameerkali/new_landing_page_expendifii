"use client";

import { useMemo, useState } from "react";
import { restaurantsData } from "@/lib/content";
import { ArrowUpRight } from "./icons";

const filters = [
  { id: "all", label: "All" },
  { id: "cafe", label: "Cafés" },
  { id: "restaurant", label: "Restaurants" },
] as const;

type FilterId = (typeof filters)[number]["id"];

export function WebsitePortfolio() {
  const [active, setActive] = useState<FilterId>("all");

  const visible = useMemo(
    () =>
      active === "all"
        ? restaurantsData
        : restaurantsData.filter((r) => r.tag === active),
    [active],
  );

  return (
    <div>
      <div
        data-reveal
        role="tablist"
        aria-label="Filter live websites by category"
        className="flex flex-wrap gap-2"
      >
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={active === f.id}
            onClick={() => setActive(f.id)}
            className={`ease-expo inline-flex h-9 items-center rounded-full border px-4 text-[13px] font-medium tracking-tight transition-all duration-300 ${
              active === f.id
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-900"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((r, i) => (
          <a
            key={r.id}
            href={r.website}
            target="_blank"
            rel="noreferrer"
            data-reveal
            data-reveal-delay={String(30 * (i % 8))}
            className="group/site ease-expo relative flex flex-col justify-between gap-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_22px_44px_-26px_rgba(15,15,15,0.2)]"
          >
            <div
              aria-hidden="true"
              className="bg-clay-tint/70 pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full blur-2xl transition-opacity duration-500 group-hover/site:opacity-100"
            />
            <div className="relative flex items-start justify-between gap-3">
              <span className="text-clay font-mono text-[11px] tracking-[0.18em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <ArrowUpRight className="ease-spring h-3.5 w-3.5 shrink-0 text-neutral-300 transition-all duration-500 group-hover/site:translate-x-0.5 group-hover/site:-translate-y-0.5 group-hover/site:text-neutral-800" />
            </div>

            <div className="relative">
              <p className="text-ink text-[15px] font-semibold tracking-tight">
                {r.name}
              </p>
              <p className="mt-1 text-[13px] text-neutral-500">
                {r.category}
              </p>
            </div>

            <div className="relative flex items-center justify-between gap-2">
              <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-neutral-400 uppercase">
                <span className="bg-clay-bright h-1.5 w-1.5 rounded-full" />
                {r.city}
              </span>
              <span className="text-[12px] font-medium text-neutral-700 group-hover/site:text-neutral-950">
                Visit website
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
