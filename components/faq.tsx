import { faqs } from "@/lib/content";
import { ChevronDown } from "./icons";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
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
            id="faq-heading"
            data-reveal
            data-reveal-delay="60"
            className="text-ink mt-5 text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-5xl"
          >
            Asked and{" "}
            <span className="font-display text-clay font-normal italic">
              answered.
            </span>
          </h2>
        </div>

        <div className="divide-y divide-neutral-200 border-t border-neutral-200">
          {faqs.map((item, i) => (
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
  );
}
