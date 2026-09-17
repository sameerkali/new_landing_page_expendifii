import { audiences, site } from "@/lib/content";
import { ArrowUpRight, audienceMarks } from "./icons";

/**
 * Five tiles. On hover the card lifts, a sheen wipes down, the index and
 * arrow wake up, the label underlines itself, and the icon chip grows a
 * little and tips off-axis — the shape changes size and position together.
 */
export function AudienceRow() {
  return (
    <section
      aria-labelledby="audience-heading"
      className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="audience-heading"
          data-reveal
          className="text-ink text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-5xl"
        >
          Works where your counter{" "}
          <span className="font-display text-clay font-normal italic">
            already is.
          </span>
        </h2>
        <p
          data-reveal
          data-reveal-delay="80"
          className="mt-5 text-[16px] leading-relaxed text-neutral-600"
        >
          One demo, one setup. If a customer stands in front of you, or a truck
          leaves your yard, there is something here that fits.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5">
        {audiences.map((item, i) => {
          const Mark = audienceMarks[item.icon];
          return (
            <a
              key={item.id}
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              data-reveal
              data-reveal-delay={String(60 * i)}
              aria-label={`${item.name} — ${item.line}. Ask for a demo on WhatsApp.`}
              className="group/tile ease-expo relative flex flex-col items-center justify-center gap-3.5 overflow-hidden rounded-2xl border border-neutral-200 bg-white px-4 py-7 transition-[transform,border-color,box-shadow] duration-[600ms] will-change-transform hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_24px_48px_-28px_rgba(15,15,15,0.22),0_2px_6px_-2px_rgba(15,15,15,0.06)] active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
            >
              {/* sheen wipe */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-y-full bg-linear-to-b from-neutral-900/[0.025] via-transparent to-transparent transition-transform duration-700 ease-out group-hover/tile:translate-y-0"
              />

              {/* index */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-3 left-3 font-mono text-[9px] tracking-[0.2em] text-neutral-300 uppercase transition-colors duration-300 ease-out group-hover/tile:text-neutral-700"
              >
                {item.index}
              </span>

              {/* arrow */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-3 right-3 inline-flex h-4 w-4 items-center justify-center text-neutral-400 opacity-0 transition-opacity duration-500 ease-out group-hover/tile:text-neutral-700 group-hover/tile:opacity-100"
              >
                <ArrowUpRight className="h-[11px] w-[11px]" />
              </span>

              {/* the chip: bigger and tipped on hover */}
              <span className="relative inline-flex h-11 w-11 items-center justify-center">
                <span className="ease-spring absolute inset-0 inline-flex items-center justify-center rounded-2xl bg-neutral-50 ring-1 ring-neutral-200/80 transition-[transform,background-color,box-shadow] duration-500 group-hover/tile:-rotate-[7deg] group-hover/tile:scale-[1.12] group-hover/tile:bg-white group-hover/tile:shadow-[0_8px_18px_-10px_rgba(15,15,15,0.28)] motion-reduce:transform-none">
                  <Mark className="text-clay ease-spring h-[22px] w-[22px] transition-transform duration-500 group-hover/tile:rotate-[7deg] group-hover/tile:scale-[1.04] motion-reduce:transform-none" />
                </span>
              </span>

              <span className="relative inline-block text-center">
                <span className="relative z-10 block text-[12.5px] font-medium tracking-tight text-neutral-700 transition-colors duration-300 ease-out group-hover/tile:text-neutral-950">
                  {item.name}
                </span>
                <span
                  aria-hidden="true"
                  className="ease-smooth bg-ink absolute -bottom-0.5 left-1/2 h-[1.5px] w-0 -translate-x-1/2 rounded-full transition-[width] duration-500 group-hover/tile:w-full"
                />
              </span>

              <span className="relative -mt-2 text-[11px] text-neutral-400 transition-colors duration-300 group-hover/tile:text-neutral-600">
                {item.line}
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
