import { founder, inDevelopment } from "@/lib/content";

export function FounderNote() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="relative scroll-mt-28 py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:px-8">
        <div>
          <p
            data-reveal
            className="text-clay font-mono text-[11px] tracking-[0.22em] uppercase"
          >
            Why we exist
          </p>
          <h2
            id="why-heading"
            data-reveal
            data-reveal-delay="60"
            className="text-ink mt-5 max-w-lg text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-5xl"
          >
            We build what we&apos;ve watched people{" "}
            <span className="font-display text-clay font-normal italic">
              struggle with.
            </span>
          </h2>
        </div>

        <div className="max-w-xl">
          {founder.paragraphs.map((para, i) => (
            <p
              key={i}
              data-reveal
              data-reveal-delay={String(60 * i)}
              className="mt-5 text-[16px] leading-relaxed text-neutral-600 first:mt-0"
            >
              {para}
            </p>
          ))}

          <p
            data-reveal
            data-reveal-delay="220"
            className="mt-8 flex items-center gap-3 border-t border-neutral-200 pt-6"
          >
            <span className="bg-ink flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-semibold text-white">
              SF
            </span>
            <span className="text-ink text-sm font-medium tracking-tight">
              {founder.signature}
            </span>
          </p>

          {/* in development */}
          <div
            data-reveal
            data-reveal-delay="280"
            className="border-clay-line bg-clay-tint mt-10 rounded-2xl border p-6"
          >
            <p className="text-clay font-mono text-[10px] tracking-[0.2em] uppercase">
              {inDevelopment.label}
            </p>
            <p className="text-ink mt-3 text-lg font-semibold tracking-tight">
              {inDevelopment.title}
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-neutral-600">
              {inDevelopment.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
