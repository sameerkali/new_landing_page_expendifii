import { numbers } from "@/lib/content";

export function NumbersStrip() {
  return (
    <section
      aria-label="Expendifii by the numbers"
      className="bg-ink relative w-full overflow-hidden py-16 text-white sm:py-20"
    >
      <div
        aria-hidden="true"
        className="bg-clay-bright/15 pointer-events-none absolute -top-40 left-1/3 h-[30rem] w-[30rem] rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(120% 100% at 50% 0, #ffffff 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p
          data-reveal
          className="font-mono text-[11px] tracking-[0.22em] text-white/45 uppercase"
        >
          Where we are
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {numbers.map((item, i) => (
            <div
              key={item.label}
              data-reveal
              data-reveal-delay={String(70 * i)}
              className="border-t border-white/12 pt-6"
            >
              <dt className="sr-only">{item.label}</dt>
              <dd className="text-[clamp(2.4rem,5vw,3.6rem)] leading-none font-semibold tracking-[-0.04em]">
                {item.value}
              </dd>
              <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-white/55">
                {item.label}
              </p>
            </div>
          ))}
        </dl>

        <p
          data-reveal
          data-reveal-delay="300"
          className="mt-12 max-w-xl text-[15px] leading-relaxed text-white/60"
        >
          Built and run by us, not resold or white-labelled. India-wide, based in
          Noida.
        </p>
      </div>
    </section>
  );
}
