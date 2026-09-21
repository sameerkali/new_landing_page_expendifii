"use client";

import Image from "next/image";
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

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((r) => (
          <a
            key={r.id}
            href={r.website}
            target="_blank"
            rel="noreferrer"
            className="group/site ease-expo relative isolate aspect-[9/7] overflow-hidden rounded-[20px] shadow-[0_18px_36px_-24px_rgba(15,15,15,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_26px_46px_-20px_rgba(15,15,15,0.5)]"
          >
            {r.image ? (
              <Image
                src={r.image}
                alt={r.name}
                fill
                unoptimized
                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover/site:scale-[1.06]"
              />
            ) : (
              <div className="from-ink via-ink-2 to-ink-3 absolute inset-0 bg-gradient-to-br" />
            )}

            {/* warm duotone wash */}
            <div
              aria-hidden="true"
              className="from-clay-bright/45 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent to-transparent mix-blend-overlay"
            />
            {/* scrim for text legibility, top and bottom */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/85"
            />

            <span className="text-clay ease-expo absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-500 group-hover/site:bg-white">
              <ArrowUpRight className="ease-spring h-3.5 w-3.5 transition-transform duration-500 group-hover/site:translate-x-0.5 group-hover/site:-translate-y-0.5" />
            </span>

            <span className="absolute inset-x-4 bottom-3.5">
              <span className="block truncate text-[14.5px] font-semibold tracking-tight text-white">
                {r.name}
              </span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
