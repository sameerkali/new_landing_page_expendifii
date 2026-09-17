import Image from "next/image";
import { SpinningSpark } from "./spinning-spark";

const SANS: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "clamp(2.5rem, 7.4vw, 6.5rem)",
  lineHeight: 0.92,
  letterSpacing: "-0.055em",
  fontWeight: 600,
  display: "inline-block",
};

const SERIF: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(2.5rem, 7.4vw, 6.5rem)",
  lineHeight: 0.92,
  letterSpacing: "-0.02em",
  fontWeight: 500,
  fontStyle: "italic",
  display: "inline-block",
  color: "var(--color-clay)",
};

const PILL =
  "pointer-events-none relative inline-block overflow-hidden rounded-full shadow-[0_10px_30px_-12px_rgba(0,0,0,0.28)] ring-1 ring-black/10";

const PILL_SIZE: React.CSSProperties = {
  width: "clamp(96px, 14vw, 178px)",
  height: "clamp(38px, 5.5vw, 76px)",
};

/**
 * The tagline set as one piece of art: words, an italic serif accent and
 * photographic pills share the same baseline, so the images read as
 * letterforms rather than decoration.
 */
export function KineticHeadline() {
  return (
    <section
      id="tagline"
      aria-label="Small software for small businesses"
      className="bg-paper text-ink relative w-full scroll-mt-24 overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="bg-clay-bright/[0.05] pointer-events-none absolute bottom-1/3 -left-40 h-[28rem] w-[28rem] rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-neutral-400/[0.12] blur-3xl"
      />

      <div className="relative mx-auto flex max-w-6xl justify-center px-6 sm:px-12">
        <div className="flex flex-col items-center gap-y-1.5 text-center sm:gap-y-2.5 lg:gap-y-3">
          {/* row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6">
            <span data-reveal="blur" style={SANS}>
              Small
            </span>
            <span
              data-reveal="pop"
              data-reveal-delay="120"
              className={`${PILL} animate-float-soft`}
              style={PILL_SIZE}
              aria-hidden="true"
            >
              <Image
                src="/mock/pill-counter.svg"
                alt=""
                fill
                unoptimized
                className="object-cover"
              />
            </span>
          </div>

          {/* row 2 */}
          <div className="flex flex-wrap items-baseline justify-center gap-x-4 gap-y-2 sm:gap-x-6">
            <span data-reveal="slide" data-reveal-delay="80" style={SERIF}>
              software
            </span>
            <span data-reveal="blur" data-reveal-delay="140" style={SANS}>
              for small
            </span>
          </div>

          {/* row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-5">
            <span
              data-reveal="spark"
              data-reveal-delay="200"
              className="text-clay-bright inline-flex shrink-0"
              style={{
                width: "clamp(30px, 4.2vw, 60px)",
                height: "clamp(30px, 4.2vw, 60px)",
              }}
              aria-hidden="true"
            >
              <SpinningSpark />
            </span>
            <span data-reveal="blur" data-reveal-delay="240" style={SANS}>
              businesses.
            </span>
            <span
              data-reveal="pop"
              data-reveal-delay="300"
              className={`${PILL} animate-float-soft-delayed`}
              style={PILL_SIZE}
              aria-hidden="true"
            >
              <Image
                src="/mock/pill-road.svg"
                alt=""
                fill
                unoptimized
                className="object-cover"
              />
            </span>
          </div>

          <p
            data-reveal
            data-reveal-delay="360"
            className="mt-8 max-w-xl text-[15px] leading-relaxed text-neutral-600 sm:mt-10 sm:text-base"
          >
            Not a platform, not a suite. Three small tools that each remove one
            job someone is still doing by hand, and a phone number that answers.
          </p>
        </div>
      </div>
    </section>
  );
}
