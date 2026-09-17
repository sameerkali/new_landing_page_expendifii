import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactBand } from "@/components/contact-band";
import { ArrowRight, ArrowUpRight, WhatsAppMark } from "@/components/icons";
import { RevealRoot } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { products, site } from "@/lib/content";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.headline}`,
    description: product.summary,
  };
}

export default async function ProductPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      <SiteHeader />
      <RevealRoot>
        <main>
          {/* ---------------- header ---------------- */}
          <section className="relative overflow-hidden pt-32 pb-12 sm:pt-36 lg:pt-40">
            <div
              aria-hidden="true"
              className="bg-clay-bright/[0.06] pointer-events-none absolute -top-40 -right-32 h-[32rem] w-[32rem] rounded-full blur-3xl"
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <nav
                aria-label="Breadcrumb"
                className="mb-10 flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-neutral-400 uppercase"
              >
                <Link
                  href="/#products"
                  className="transition-colors hover:text-neutral-700"
                >
                  Products
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-neutral-700">{product.name}</span>
              </nav>

              <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-end">
                <div>
                  <div
                    data-reveal
                    className="flex flex-wrap items-center gap-2.5"
                  >
                    <span className="border-clay-line bg-clay-tint text-clay inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] uppercase">
                      <span className="bg-clay-bright h-1.5 w-1.5 rounded-full" />
                      {product.status}
                    </span>
                    <span className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-neutral-600 uppercase">
                      {product.customers}
                    </span>
                    <span className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-neutral-600 lowercase">
                      {product.domain}
                    </span>
                  </div>

                  <h1
                    data-reveal
                    data-reveal-delay="80"
                    className="text-ink mt-7 max-w-2xl text-[clamp(2.4rem,5.6vw,4rem)] leading-[1] font-semibold tracking-[-0.045em]"
                  >
                    {product.name}
                    <span className="text-clay">.</span>{" "}
                    <span className="font-display block pt-3 text-[0.62em] leading-[1.1] font-normal text-neutral-600 italic">
                      {product.headline}
                    </span>
                  </h1>
                </div>

                <div data-reveal data-reveal-delay="160" className="lg:pb-2">
                  {product.body.map((para, i) => (
                    <p
                      key={i}
                      className="mt-4 text-[16px] leading-relaxed text-neutral-600 first:mt-0"
                    >
                      {para}
                    </p>
                  ))}

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={site.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="group/cta bg-ink ease-expo inline-flex h-12 items-center gap-2.5 rounded-full px-5 text-[14px] font-medium text-white transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_22px_40px_-22px_rgba(15,15,15,0.7)]"
                    >
                      <WhatsAppMark className="h-4 w-4" />
                      See a demo
                      <ArrowUpRight className="ease-spring h-3.5 w-3.5 transition-transform duration-500 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                    </a>
                    {product.href.startsWith("http") && (
                      <a
                        href={product.href}
                        target="_blank"
                        rel="noreferrer"
                        className="ease-expo inline-flex h-12 items-center gap-2 rounded-full border border-neutral-300 bg-white/60 px-5 text-[14px] font-medium text-neutral-800 transition-all duration-500 hover:-translate-y-0.5 hover:border-neutral-400 hover:bg-white"
                      >
                        Visit {product.domain}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ---------------- gallery ---------------- */}
          <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
            <div
              className={`grid gap-5 ${product.gallery.length > 1 ? "md:grid-cols-2" : ""}`}
            >
              {product.gallery.map((shot, i) => (
                <figure
                  key={shot.src}
                  data-reveal
                  data-reveal-delay={String(80 * i)}
                  className="group overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/70 backdrop-blur-sm transition-[border-color,box-shadow] duration-500 hover:border-neutral-300 hover:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.28)]"
                >
                  <div className="bg-paper-2 relative aspect-16/10 w-full overflow-hidden">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      unoptimized
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="px-6 py-5 text-sm leading-relaxed text-neutral-600">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* ---------------- what it does ---------------- */}
          <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
              <div>
                <p
                  data-reveal
                  className="text-clay font-mono text-[11px] tracking-[0.22em] uppercase"
                >
                  {product.accentIndex} · What it does
                </p>
                <h2
                  data-reveal
                  data-reveal-delay="60"
                  className="text-ink mt-5 text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-5xl"
                >
                  The short{" "}
                  <span className="font-display text-clay font-normal italic">
                    version.
                  </span>
                </h2>
                {product.audience && (
                  <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-neutral-600">
                    {product.audience}
                  </p>
                )}
              </div>

              <ul className="divide-y divide-neutral-200 border-t border-neutral-200">
                {product.bullets.map((bullet, i) => (
                  <li
                    key={bullet}
                    data-reveal
                    data-reveal-delay={String(50 * i)}
                    className="group/row flex items-start gap-5 py-5 transition-colors duration-300"
                  >
                    <span className="text-clay ease-spring mt-0.5 shrink-0 font-mono text-[11px] tracking-[0.18em] transition-transform duration-500 group-hover/row:-translate-y-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[16px] leading-relaxed text-neutral-700 transition-colors duration-300 group-hover/row:text-neutral-950">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {product.note && (
              <p
                data-reveal
                className="border-clay-line bg-clay-tint mt-12 max-w-2xl rounded-2xl border p-6 text-[15px] leading-relaxed text-neutral-700"
              >
                {product.note}
              </p>
            )}
          </section>

          {/* ---------------- other products ---------------- */}
          <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
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

          <ContactBand />
        </main>
      </RevealRoot>
      <SiteFooter />
    </>
  );
}
