import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  WhatsAppMark,
} from "@/components/icons";
import { WebsitePortfolio } from "@/components/website-portfolio";
import {
  addOns,
  buildProcess,
  packageComparison,
  packageGuide,
  packageWhatsappHref,
  products,
  restaurantsData,
  revisionPolicy,
  site,
  websiteFaqs,
  websiteFeatures,
  websitePackages,
  whatsIncludedItems,
  whatsNotIncluded,
  whatWeNeed,
  websiteTrustStrip,
  type Product,
} from "@/lib/content";

const comparisonCols: {
  key: "starter" | "business" | "custom";
  label: string;
}[] = [
  { key: "starter", label: "Starter" },
  { key: "business", label: "Business" },
  { key: "custom", label: "Custom" },
];

export function LandingPagesCatalog({ product }: { product: Product }) {
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <main>
      {/* ---------------- hero ---------------- */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-36 lg:pt-40">
        <div
          aria-hidden="true"
          className="bg-clay-bright/[0.06] pointer-events-none absolute -top-40 -right-32 h-[32rem] w-[32rem] rounded-full blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         

          <h1
            data-reveal
            data-reveal-delay="80"
            className="text-ink mt-6 max-w-3xl text-[clamp(2.4rem,5.6vw,4rem)] leading-[1.05] font-semibold tracking-[-0.045em]"
          >
            A professional website for your business, without the{" "}
            <span className="font-display text-clay font-normal italic">
              agency headache.
            </span>
          </h1>

          <p
            data-reveal
            data-reveal-delay="140"
            className="mt-6 max-w-xl text-[16px] leading-relaxed text-neutral-600"
          >
            Choose a ready package or tell us what you need. We design,
            build and launch fast, mobile-friendly websites for
            restaurants, shops, services and local businesses.
          </p>

          <p
            data-reveal
            data-reveal-delay="180"
            className="text-ink mt-8 text-2xl font-semibold tracking-tight"
          >
            Websites starting from{" "}
            <span className="font-display text-clay font-normal italic">
              ₹6,000
            </span>
          </p>

          <div
            data-reveal
            data-reveal-delay="220"
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#packages"
              className="group/cta bg-ink ease-expo inline-flex h-12 items-center gap-2.5 rounded-full px-5 text-[14px] font-medium text-white transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_-22px_rgba(15,15,15,0.7)]"
            >
              View Packages
              <ArrowUpRight className="ease-spring h-3.5 w-3.5 transition-transform duration-500 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </a>
            <a
              href="#live-websites"
              className="ease-expo inline-flex h-12 items-center gap-2 rounded-full border border-neutral-300 bg-white/60 px-5 text-[14px] font-medium text-neutral-800 transition-all duration-500 hover:-translate-y-0.5 hover:border-neutral-400 hover:bg-white"
            >
              See Live Demos
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <p
            data-reveal
            data-reveal-delay="260"
            className="mt-8 font-mono text-[11px] tracking-[0.16em] text-neutral-400 uppercase"
          >
            {restaurantsData.length}+ live websites · Mobile responsive ·
            WhatsApp ready
          </p>
        </div>
      </section>

      {/* ---------------- package cards ---------------- */}
      <section
        id="packages"
        className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <p
          data-reveal
          className="text-clay font-mono text-[11px] tracking-[0.22em] uppercase"
        >
          Packages
        </p>
        <h2
          data-reveal
          data-reveal-delay="60"
          className="text-ink mt-5 max-w-xl text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-5xl"
        >
          Choose the website that{" "}
          <span className="font-display text-clay font-normal italic">
            fits your business.
          </span>
        </h2>
        <p
          data-reveal
          data-reveal-delay="100"
          className="mt-5 max-w-md text-[15px] leading-relaxed text-neutral-600"
        >
          Start simple. Upgrade when your business needs more.
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {websitePackages.map((pkg, i) => (
            <div
              key={pkg.id}
              data-reveal
              data-reveal-delay={String(80 * i)}
              className={`ease-expo relative flex flex-col rounded-3xl border p-7 transition-all duration-500 ${
                pkg.highlight
                  ? "border-neutral-900 bg-neutral-900 text-white lg:-translate-y-3 lg:shadow-[0_32px_64px_-30px_rgba(15,15,15,0.45)]"
                  : "border-neutral-200 bg-white hover:border-neutral-300"
              }`}
            >
              {pkg.highlight && (
                <span className="bg-clay-bright absolute -top-3 left-7 rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.14em] text-white uppercase">
                  Most popular
                </span>
              )}

              <p
                className={`font-mono text-[11px] tracking-[0.18em] uppercase ${
                  pkg.highlight ? "text-white/50" : "text-neutral-400"
                }`}
              >
                {pkg.name}
              </p>
              <p className="mt-3 text-3xl font-semibold tracking-tight">
                {pkg.price}
              </p>
              <p
                className={`mt-4 text-[14px] leading-relaxed ${
                  pkg.highlight ? "text-white/70" : "text-neutral-600"
                }`}
              >
                {pkg.bestFor}
              </p>

              <ul
                className={`mt-7 flex-1 space-y-3 border-t pt-6 text-[14px] ${
                  pkg.highlight ? "border-white/15" : "border-neutral-200"
                }`}
              >
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${
                        pkg.highlight ? "text-clay-bright" : "text-clay"
                      }`}
                    />
                    <span
                      className={
                        pkg.highlight ? "text-white/85" : "text-neutral-700"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={
                  pkg.id === "custom"
                    ? packageWhatsappHref(pkg.name)
                    : "#live-websites"
                }
                target={pkg.id === "custom" ? "_blank" : undefined}
                rel={pkg.id === "custom" ? "noreferrer" : undefined}
                className={`ease-expo mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-[14px] font-medium transition-all duration-500 hover:-translate-y-0.5 ${
                  pkg.highlight
                    ? "bg-white text-neutral-900 hover:shadow-[0_22px_40px_-22px_rgba(255,255,255,0.4)]"
                    : "bg-ink text-white hover:shadow-[0_22px_40px_-22px_rgba(15,15,15,0.7)]"
                }`}
              >
                {pkg.cta}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* comparison */}
        <div
          data-reveal
          className="mt-14 overflow-x-auto rounded-2xl border border-neutral-200 bg-white"
        >
          <table className="w-full min-w-[560px] border-collapse text-left text-[14px]">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="px-5 py-4 font-medium text-neutral-500">
                  Feature
                </th>
                {comparisonCols.map((c) => (
                  <th
                    key={c.key}
                    className="text-ink px-5 py-4 font-semibold"
                  >
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {packageComparison.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-neutral-100 last:border-0"
                >
                  <td className="px-5 py-3.5 text-neutral-700">
                    {row.feature}
                  </td>
                  {comparisonCols.map((c) => (
                    <td
                      key={c.key}
                      className={`px-5 py-3.5 ${
                        row[c.key] === "✓"
                          ? "text-clay font-semibold"
                          : "text-neutral-400"
                      }`}
                    >
                      {row[c.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ---------------- what's included ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <p
              data-reveal
              className="text-clay font-mono text-[11px] tracking-[0.22em] uppercase"
            >
              What&apos;s included
            </p>
            <h2
              data-reveal
              data-reveal-delay="60"
              className="text-ink mt-5 text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-5xl"
            >
              Everything your{" "}
              <span className="font-display text-clay font-normal italic">
                business website
              </span>{" "}
              needs.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {websiteFeatures.map((f, i) => (
              <div
                key={f.title}
                data-reveal
                data-reveal-delay={String(50 * i)}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <p className="text-ink text-[15px] font-semibold tracking-tight">
                  {f.title}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- live websites ---------------- */}
      <section
        id="live-websites"
        className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <p
          data-reveal
          className="text-clay font-mono text-[11px] tracking-[0.22em] uppercase"
        >
          {restaurantsData.length} live sites
        </p>
        <h2
          data-reveal
          data-reveal-delay="60"
          className="text-ink mt-5 max-w-xl text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-5xl"
        >
          See real websites{" "}
          <span className="font-display text-clay font-normal italic">
            we&apos;ve built.
          </span>
        </h2>
        <p
          data-reveal
          data-reveal-delay="100"
          className="mt-5 max-w-md text-[15px] leading-relaxed text-neutral-600"
        >
          Don&apos;t just take our word for it. Explore live websites we&apos;ve
          built for real businesses.
        </p>

        <div className="mt-10">
          <WebsitePortfolio />
        </div>
      </section>

      {/* ---------------- which package do I need ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="rounded-[28px] border border-neutral-200 bg-white p-8 sm:p-12">
          <p
            data-reveal
            className="text-clay font-mono text-[11px] tracking-[0.22em] uppercase"
          >
            Not sure which one?
          </p>
          <h2
            data-reveal
            data-reveal-delay="60"
            className="text-ink mt-5 max-w-xl text-3xl leading-[1.1] font-semibold tracking-[-0.03em] sm:text-4xl"
          >
            Which package do I{" "}
            <span className="font-display text-clay font-normal italic">
              need?
            </span>
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {packageGuide.map((g, i) => (
              <div key={g.id} data-reveal data-reveal-delay={String(60 * i)}>
                <p className="text-ink text-[15px] font-semibold tracking-tight">
                  {g.title}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">
                  {g.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-neutral-200 pt-8">
            <p className="max-w-md text-[15px] leading-relaxed text-neutral-600">
              Still unsure? Send us your business details and we&apos;ll
              recommend the appropriate setup.
            </p>
            <a
              href={packageWhatsappHref()}
              target="_blank"
              rel="noreferrer"
              className="group/cta bg-ink ease-expo inline-flex h-12 shrink-0 items-center gap-2.5 rounded-full px-5 text-[14px] font-medium text-white transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_-22px_rgba(15,15,15,0.7)]"
            >
              <WhatsAppMark className="h-4 w-4" />
              Ask on WhatsApp
              <ArrowUpRight className="ease-spring h-3.5 w-3.5 transition-transform duration-500 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- add-ons ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <p
              data-reveal
              className="text-clay font-mono text-[11px] tracking-[0.22em] uppercase"
            >
              Add-ons
            </p>
            <h2
              data-reveal
              data-reveal-delay="60"
              className="text-ink mt-5 text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-5xl"
            >
              Need more than a{" "}
              <span className="font-display text-clay font-normal italic">
                standard website?
              </span>
            </h2>
            <p
              data-reveal
              data-reveal-delay="100"
              className="mt-6 max-w-sm text-[15px] leading-relaxed text-neutral-600"
            >
              Add extra functionality when your business needs it. These are
              starting prices — actual cost depends on requirements.
            </p>
          </div>

          <ul className="divide-y divide-neutral-200 border-t border-neutral-200">
            {addOns.map((a, i) => (
              <li
                key={a.name}
                data-reveal
                data-reveal-delay={String(40 * i)}
                className="flex items-center justify-between gap-4 py-4"
              >
                <span className="text-[15px] text-neutral-700">
                  {a.name}
                </span>
                <span className="text-ink font-mono text-[13px] tracking-tight whitespace-nowrap">
                  {a.price === "Get a quote" ? a.price : `From ${a.price}`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- pricing fine print ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div data-reveal className="rounded-2xl border border-neutral-200 bg-white p-7">
            <p className="text-clay font-mono text-[11px] tracking-[0.22em] uppercase">
              What you&apos;re paying for
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-neutral-600">
              Your website package includes design, development and
              deployment of the agreed website scope — it includes the
              following standard features:
            </p>
            <ul className="mt-4 space-y-2 text-[14px]">
              {whatsIncludedItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="text-clay mt-0.5 h-3.5 w-3.5 shrink-0" />
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal data-reveal-delay="80" className="rounded-2xl border border-neutral-200 bg-white p-7">
            <p className="text-clay font-mono text-[11px] tracking-[0.22em] uppercase">
              A few things to know
            </p>
            <div className="mt-4 space-y-3 text-[13px] leading-relaxed text-neutral-500">
              {whatsNotIncluded.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div data-reveal data-reveal-delay="160" className="rounded-2xl border border-neutral-200 bg-white p-7">
            <p className="text-clay font-mono text-[11px] tracking-[0.22em] uppercase">
              How revisions work
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-neutral-500">
              {revisionPolicy}
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- what we need from you ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <p
              data-reveal
              className="text-clay font-mono text-[11px] tracking-[0.22em] uppercase"
            >
              Getting started
            </p>
            <h2
              data-reveal
              data-reveal-delay="60"
              className="text-ink mt-5 text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-5xl"
            >
              What do we need to{" "}
              <span className="font-display text-clay font-normal italic">
                build your website?
              </span>
            </h2>
            <p
              data-reveal
              data-reveal-delay="100"
              className="mt-6 max-w-sm text-[15px] leading-relaxed text-neutral-600"
            >
              Don&apos;t have everything ready? No problem. We&apos;ll tell you
              exactly what is needed.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {whatWeNeed.map((item, i) => (
              <li
                key={item}
                data-reveal
                data-reveal-delay={String(30 * i)}
                className="flex items-center gap-2.5 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-[14px] text-neutral-700"
              >
                <Check className="text-clay h-3.5 w-3.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- how it works ---------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p
          data-reveal
          className="text-clay font-mono text-[11px] tracking-[0.22em] uppercase"
        >
          Process
        </p>
        <h2
          data-reveal
          data-reveal-delay="60"
          className="text-ink mt-5 max-w-xl text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-5xl"
        >
          How it{" "}
          <span className="font-display text-clay font-normal italic">
            works.
          </span>
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {buildProcess.map((s, i) => (
            <div key={s.step} data-reveal data-reveal-delay={String(60 * i)}>
              <span className="text-clay font-mono text-[11px] tracking-[0.18em]">
                {s.step}
              </span>
              <p className="text-ink mt-3 text-[15px] font-semibold tracking-tight">
                {s.title}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- faq ---------------- */}
      <section
        id="faq"
        className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div>
            <p
              data-reveal
              className="text-clay font-mono text-[11px] tracking-[0.22em] uppercase"
            >
              Questions
            </p>
            <h2
              data-reveal
              data-reveal-delay="60"
              className="text-ink mt-5 text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-5xl"
            >
              Frequently{" "}
              <span className="font-display text-clay font-normal italic">
                asked.
              </span>
            </h2>
          </div>

          <div className="divide-y divide-neutral-200 border-t border-neutral-200">
            {websiteFaqs.map((item, i) => (
              <details
                key={item.q}
                data-reveal
                data-reveal-delay={String(40 * i)}
                className="group/faq"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[16px] font-medium tracking-tight text-neutral-900 transition-colors duration-200 hover:text-black [&::-webkit-details-marker]:hidden">
                  <span>{item.q}</span>
                  <span className="ease-expo bg-paper-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-neutral-600 transition-all duration-500 group-open/faq:rotate-180 group-open/faq:bg-neutral-900 group-open/faq:text-white">
                    <ChevronDown className="h-3.5 w-3.5" />
                  </span>
                </summary>
                <p className="max-w-xl pt-1 pb-6 text-[15px] leading-relaxed text-neutral-600">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- trust strip ---------------- */}
      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
        <div
          data-reveal
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-2xl border border-neutral-200 bg-white px-6 py-6 text-center"
        >
          {websiteTrustStrip.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] tracking-[0.16em] text-neutral-500 uppercase"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ---------------- final cta ---------------- */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="mx-auto max-w-7xl scroll-mt-28 px-4 pt-12 pb-24 sm:px-6 sm:pb-28 lg:px-8"
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
              Ready to put your{" "}
              <span className="font-display text-clay-bright font-normal italic">
                business online?
              </span>
            </h2>
            <p
              data-reveal
              data-reveal-delay="140"
              className="mt-6 max-w-lg text-[16px] leading-relaxed text-white/60"
            >
              Tell us what your business needs. We&apos;ll recommend a package
              and give you an exact quote.
            </p>

            <div
              data-reveal
              data-reveal-delay="200"
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href={packageWhatsappHref()}
                target="_blank"
                rel="noreferrer"
                className="group/cta ease-expo relative inline-flex h-[52px] items-center gap-2.5 overflow-hidden rounded-full bg-white px-6 text-[15px] font-medium text-neutral-900 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_24px_44px_-22px_rgba(255,255,255,0.4)] active:translate-y-0 active:scale-[0.98]"
              >
                <WhatsAppMark className="h-[18px] w-[18px]" />
                Get a Quote on WhatsApp
                <ArrowUpRight className="ease-spring h-4 w-4 transition-transform duration-500 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
              </a>

              <a
                href={`mailto:${site.email}`}
                className="ease-expo inline-flex h-[52px] items-center rounded-full border border-white/20 px-6 text-[15px] font-medium text-white transition-all duration-500 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5 active:translate-y-0"
              >
                Email Us
              </a>
            </div>

            <p
              data-reveal
              data-reveal-delay="240"
              className="mt-8 text-[13px] text-white/40"
            >
              No complicated forms. Just tell us what you need.
            </p>

            <p
              data-reveal
              data-reveal-delay="260"
              className="mt-3 font-mono text-[12px] tracking-[0.1em] text-white/40"
            >
              {site.whatsapp} · {site.location}
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- other products ---------------- */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <p
          data-reveal
          className="font-mono text-[11px] tracking-[0.22em] text-neutral-400 uppercase"
        >
          Also from us
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {others.map((other, i) => (
            <Link
              key={other.slug}
              href={`/products/${other.slug}`}
              data-reveal
              data-reveal-delay={String(60 * i)}
              className="group/other ease-expo flex items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_22px_44px_-26px_rgba(15,15,15,0.2)]"
            >
              <span>
                <span className="text-ink block text-[15px] font-semibold tracking-tight">
                  {other.name}
                </span>
                <span className="mt-1 block text-[13px] text-neutral-500">
                  {other.summary.slice(0, 48)}…
                </span>
              </span>
              <ArrowRight className="ease-spring h-4 w-4 shrink-0 text-neutral-300 transition-all duration-500 group-hover/other:translate-x-1 group-hover/other:text-neutral-800" />
            </Link>
          ))}
        </div>
      </section>

      {/* spacer so the sticky mobile bar never covers content */}
      <div className="h-20 sm:hidden" aria-hidden="true" />

      {/* ---------------- sticky mobile whatsapp cta ---------------- */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white/95 px-4 py-3 backdrop-blur-xl sm:hidden">
        <a
          href={packageWhatsappHref()}
          target="_blank"
          rel="noreferrer"
          className="bg-ink flex h-12 w-full items-center justify-center gap-2.5 rounded-full text-[14px] font-medium text-white"
        >
          <WhatsAppMark className="h-4 w-4" />
          Get a Quote on WhatsApp
        </a>
      </div>
    </main>
  );
}
