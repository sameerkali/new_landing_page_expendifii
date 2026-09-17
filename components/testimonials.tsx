import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
        <h2
          id="testimonials-heading"
          data-reveal
          className="text-ink max-w-xl text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-5xl"
        >
          What owners{" "}
          <span className="font-display text-clay font-normal italic">
            actually say.
          </span>
        </h2>
        <p
          data-reveal
          data-reveal-delay="80"
          className="font-mono text-[11px] tracking-[0.18em] text-neutral-400 uppercase"
        >
          Placeholder quotes
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {testimonials.map((item, i) => (
          <figure
            key={item.name}
            data-reveal
            data-reveal-delay={String(80 * i)}
            className="ease-expo group flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_22px_44px_-26px_rgba(15,15,15,0.2)]"
          >
            <div>
              <span
                aria-hidden="true"
                className="font-display text-clay/25 block text-5xl leading-none"
              >
                &ldquo;
              </span>
              <blockquote className="mt-2 text-[15px] leading-relaxed text-neutral-700">
                {item.quote}
              </blockquote>
            </div>
            <figcaption className="mt-7 border-t border-neutral-200 pt-5">
              <p className="text-ink text-sm font-semibold tracking-tight">
                {item.name}
              </p>
              <p className="mt-0.5 text-[13px] text-neutral-500">{item.role}</p>
              <p className="text-clay mt-2 font-mono text-[10px] tracking-[0.18em] uppercase">
                {item.product}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
