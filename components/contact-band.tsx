import { hero, site } from "@/lib/content";
import { ArrowUpRight, WhatsAppMark } from "./icons";

export function ContactBand() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-7xl scroll-mt-28 px-4 pb-20 sm:px-6 lg:px-8"
    >
      <div className="bg-ink relative overflow-hidden rounded-[28px] px-6 py-14 text-white sm:px-12 sm:py-20">
        <div
          aria-hidden="true"
          className="bg-clay-bright/20 pointer-events-none absolute -top-32 -right-24 h-[26rem] w-[26rem] rounded-full blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-24 h-[24rem] w-[24rem] rounded-full bg-white/[0.06] blur-3xl"
        />

        <div className="relative max-w-2xl">
          <p
            data-reveal
            className="font-mono text-[11px] tracking-[0.22em] text-white/45 uppercase"
          >
            Next step
          </p>
          <h2
            id="contact-heading"
            data-reveal
            data-reveal-delay="60"
            className="mt-5 text-4xl leading-[1.04] font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl"
          >
            Running by the{" "}
            <span className="font-display text-clay-bright font-normal italic">
              same week.
            </span>
          </h2>
          <p
            data-reveal
            data-reveal-delay="140"
            className="mt-6 max-w-lg text-[16px] leading-relaxed text-white/60"
          >
            {hero.micro}
          </p>

          <div
            data-reveal
            data-reveal-delay="200"
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="group/cta ease-expo relative inline-flex h-[52px] items-center gap-2.5 overflow-hidden rounded-full bg-white px-6 text-[15px] font-medium text-neutral-900 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_24px_44px_-22px_rgba(255,255,255,0.4)] active:translate-y-0 active:scale-[0.98]"
            >
              <WhatsAppMark className="h-[18px] w-[18px]" />
              {hero.cta}
              <ArrowUpRight className="ease-spring h-4 w-4 transition-transform duration-500 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </a>

            <a
              href={`mailto:${site.email}`}
              className="ease-expo inline-flex h-[52px] items-center rounded-full border border-white/20 px-6 text-[15px] font-medium text-white transition-all duration-500 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5 active:translate-y-0"
            >
              Email us instead
            </a>
          </div>

          <p
            data-reveal
            data-reveal-delay="260"
            className="mt-8 font-mono text-[12px] tracking-[0.1em] text-white/40"
          >
            {site.whatsapp} · {site.location}
          </p>
        </div>
      </div>
    </section>
  );
}
