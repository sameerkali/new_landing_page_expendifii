import { hero, heroDeck, site } from "@/lib/content";
import { HeroWheel } from "./hero-wheel";
import { ArrowUpRight, WhatsAppMark } from "./icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-8 sm:pt-32 lg:pt-36">
      {/* warm light behind the deck */}
      <div
        aria-hidden="true"
        className="bg-clay-bright/[0.06] pointer-events-none absolute top-[-10rem] right-[-14rem] h-[34rem] w-[34rem] rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[18rem] left-[-16rem] h-[30rem] w-[30rem] rounded-full bg-neutral-400/[0.12] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-8 lg:px-8">
        {/* ---------------- copy ---------------- */}
        <div className="max-w-xl">
          <p
            data-reveal
            className="border-clay-line bg-clay-tint text-clay inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] tracking-[0.14em] uppercase"
          >
            <span className="bg-clay-bright relative flex h-1.5 w-1.5 rounded-full">
              <span className="bg-clay-bright absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
            </span>
            {hero.eyebrow}
          </p>

          <h1
            data-reveal
            data-reveal-delay="80"
            className="text-ink mt-6 text-[clamp(2.6rem,6.4vw,4.4rem)] leading-[0.98] font-semibold tracking-[-0.045em]"
          >
            {hero.h1a}{" "}
            <span className="font-display text-clay font-normal italic">
              small businesses.
            </span>
          </h1>

          <p
            data-reveal
            data-reveal-delay="160"
            className="mt-6 max-w-lg text-[17px] leading-relaxed text-neutral-600"
          >
            {hero.sub}
          </p>

          <div
            data-reveal
            data-reveal-delay="240"
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="group/cta bg-ink ease-expo relative inline-flex h-[52px] items-center gap-2.5 overflow-hidden rounded-full px-6 text-[15px] font-medium text-white transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_24px_44px_-22px_rgba(15,15,15,0.75)] active:translate-y-0 active:scale-[0.98]"
            >
              <span
                aria-hidden="true"
                className="animate-sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-linear-to-r from-transparent via-white/25 to-transparent"
              />
              <WhatsAppMark className="relative h-[18px] w-[18px]" />
              <span className="relative">{hero.cta}</span>
              <ArrowUpRight className="ease-spring relative h-4 w-4 transition-transform duration-500 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </a>

            <a
              href="#products"
              className="ease-expo inline-flex h-[52px] items-center rounded-full border border-neutral-300 bg-white/60 px-6 text-[15px] font-medium text-neutral-800 transition-all duration-500 hover:-translate-y-0.5 hover:border-neutral-400 hover:bg-white active:translate-y-0"
            >
              See the products
            </a>
          </div>

          <p
            data-reveal
            data-reveal-delay="300"
            className="mt-5 max-w-md text-[13px] leading-relaxed text-neutral-500"
          >
            {hero.micro}
          </p>
        </div>

        {/* ---------------- the wheel ---------------- */}
        {/* clipped only on small screens, where the marquee runs; on desktop
            the wheel must overhang its column or the arc gets a hard edge */}
        <div className="relative -mx-4 min-w-0 overflow-x-clip sm:-mx-6 lg:mx-0 lg:overflow-visible">
          <HeroWheel slides={heroDeck} />
        </div>
      </div>
    </section>
  );
}
