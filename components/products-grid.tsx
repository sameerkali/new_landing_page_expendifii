import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/content";
import { ArrowUpRight } from "./icons";

export function ProductsGrid() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="relative z-10 w-full scroll-mt-28 py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 sm:mb-16">
          <h2
            id="products-heading"
            data-reveal
            className="text-ink max-w-2xl text-5xl leading-tight font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Three products,{" "}
            <span className="font-display text-clay font-normal italic">
              live today.
            </span>
          </h2>
          <p
            data-reveal
            data-reveal-delay="100"
            className="max-w-sm text-[15px] leading-relaxed text-neutral-600"
          >
            Each one is ours end to end. Nothing here is resold, white-labelled,
            or waiting on someone else&apos;s roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {products.map((product, i) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              data-reveal
              data-reveal-delay={String(80 * i)}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/70 shadow-[0_1px_2px_rgba(0,0,0,0.03)] backdrop-blur-sm transition-[border-color,box-shadow,transform] duration-500 hover:border-neutral-300 hover:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.28)]"
            >
              <div className="bg-paper-2 relative aspect-16/10 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  unoptimized
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-neutral-200/80 bg-white/90 px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] text-neutral-700 uppercase backdrop-blur-sm">
                  <span className="bg-clay-bright h-1.5 w-1.5 rounded-full" />
                  {product.status}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 p-6">
                <div className="min-w-0">
                  <p className="text-ink text-lg font-semibold tracking-tight">
                    {product.name}
                  </p>
                  <p className="mt-1 font-mono text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                    {product.customers}
                  </p>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-600">
                    {product.summary}
                  </p>
                </div>

                <span className="ease-expo bg-paper-2 text-ink flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-500 group-hover:-rotate-[10deg] group-hover:scale-[1.06] group-hover:bg-neutral-900 group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
