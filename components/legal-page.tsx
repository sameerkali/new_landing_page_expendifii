import Link from "next/link";
import { RevealRoot } from "./reveal";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export type LegalBlock = { heading: string; body: string[] };

export function LegalPage({
  kicker,
  title,
  updated,
  intro,
  blocks,
  disclaimer,
}: {
  kicker: string;
  title: string;
  updated: string;
  intro?: string;
  blocks: LegalBlock[];
  disclaimer?: string;
}) {
  return (
    <>
      <SiteHeader />
      <RevealRoot>
        <main className="relative overflow-hidden pt-32 pb-20 sm:pt-36">
          <div
            aria-hidden="true"
            className="bg-clay-bright/5 pointer-events-none absolute -top-40 -right-32 h-[30rem] w-[30rem] rounded-full blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <nav
              aria-label="Breadcrumb"
              className="mb-10 flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-neutral-400 uppercase"
            >
              <Link
                href="/"
                className="transition-colors hover:text-neutral-700"
              >
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-neutral-700">{kicker}</span>
            </nav>

            <h1
              data-reveal
              className="text-ink text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.02] font-semibold tracking-[-0.045em]"
            >
              {title}
              <span className="text-clay">.</span>
            </h1>

            <p
              data-reveal
              data-reveal-delay="60"
              className="mt-4 font-mono text-[12px] tracking-[0.12em] text-neutral-500"
            >
              Last updated: {updated}
            </p>

            {disclaimer && (
              <p
                data-reveal
                data-reveal-delay="100"
                className="border-clay-line bg-clay-tint mt-8 rounded-2xl border p-5 text-[14px] leading-relaxed text-neutral-700"
              >
                {disclaimer}
              </p>
            )}

            {intro && (
              <p
                data-reveal
                data-reveal-delay="140"
                className="mt-8 text-[17px] leading-relaxed text-neutral-700"
              >
                {intro}
              </p>
            )}

            <div className="mt-12 divide-y divide-neutral-200 border-t border-neutral-200">
              {blocks.map((block, i) => (
                <section
                  key={block.heading}
                  data-reveal
                  data-reveal-delay={String(Math.min(240, 30 * i))}
                  className="py-8"
                >
                  <h2 className="text-ink flex items-baseline gap-3 text-[19px] font-semibold tracking-tight">
                    <span className="text-clay font-mono text-[11px] tracking-[0.18em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {block.heading}
                  </h2>
                  {block.body.map((para, j) => (
                    <p
                      key={j}
                      className="mt-3 text-[15px] leading-relaxed text-neutral-600"
                    >
                      {para}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </main>
      </RevealRoot>
      <SiteFooter />
    </>
  );
}
