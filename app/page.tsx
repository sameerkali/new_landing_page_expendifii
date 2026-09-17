import Image from "next/image";
import { Reveal } from "./components/reveal";
import { CopyEmailButton } from "./components/copy-email-button";

const EMAIL = "hello@expendifii.com";

const NAV_LINKS = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    name: "lol.expendifii.com",
    tagline: "The first product I shipped under expendifii.",
    href: "https://lol.expendifii.com",
    seed: "expendifii-lol",
  },
  {
    name: "review.expendifii.com",
    tagline: "Built to solve a problem I kept running into myself.",
    href: "https://review.expendifii.com",
    seed: "expendifii-review",
  },
  {
    name: "biltyone.com",
    tagline: "The newest addition to the expendifii lineup.",
    href: "https://biltyone.com",
    seed: "expendifii-bilty",
  },
];

const STATS = [
  { value: "50+", label: "Happy customers" },
  { value: "3", label: "Live products" },
  { value: "1", label: "Founder" },
];

function Accent({ children }: { children: React.ReactNode }) {
  return (
    <em
      className="not-italic italic font-normal"
      style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
    >
      {children}
    </em>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Nav */}
      <header className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
        <nav className="pointer-events-auto mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-2xl border border-neutral-200/80 bg-white/80 px-3 py-2 shadow-[0_6px_18px_-6px_rgba(15,15,15,0.18)] backdrop-blur-md">
          <a
            href="#top"
            className="flex shrink-0 items-center gap-2"
            aria-label="expendifii, home"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#151515] text-sm font-semibold text-white">
              e
            </span>
            <span className="text-sm font-semibold tracking-tight text-[#0a0a0a]">
              expendifii
            </span>
          </a>
          <div className="hidden items-center gap-6 sm:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-neutral-600 transition-colors duration-200 hover:text-[#0a0a0a]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className="shrink-0 rounded-xl bg-[#0a0a0a] px-3.5 py-2 text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#1a1a1a]"
          >
            Say hello
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="mx-auto flex w-full max-w-5xl flex-col items-start px-6 pt-32 pb-20 sm:pt-40 sm:pb-28"
      >
        <h1 className="max-w-2xl text-[44px] font-semibold leading-[1.02] tracking-tight text-[#0a0a0a] sm:text-6xl lg:text-7xl lg:leading-[0.95]">
          Software, shipped <Accent>solo</Accent>.
        </h1>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-neutral-600 sm:mt-6 sm:text-lg">
          I&apos;m Sameer. I design, build, and support every product at
          expendifii, currently serving 50+ customers across three live
          apps.
        </p>
        <div className="mt-9 flex flex-col items-start gap-4">
          <CopyEmailButton email={EMAIL} />
          <a
            href="#projects"
            className="text-[14px] font-medium text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition-colors duration-200 hover:text-[#0a0a0a] hover:decoration-neutral-500"
          >
            View the work ↓
          </a>
        </div>
      </section>

      {/* Stats */}
      <Reveal className="border-y border-neutral-200/80 bg-white/50">
        <div className="mx-auto grid w-full max-w-5xl grid-cols-3 divide-x divide-neutral-200/80 px-6 py-8 sm:py-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <span className="text-2xl font-semibold tracking-tight text-[#0a0a0a] sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-[12px] text-neutral-500 sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Projects */}
      <section id="projects" className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        <Reveal>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#0a0a0a] sm:text-5xl">
            Things I&apos;ve <Accent>built</Accent>.
          </h2>
          <p className="mt-4 max-w-md text-base text-neutral-600">
            Three products, one person behind all of them.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={i * 80}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white/70 shadow-[0_1px_2px_rgba(0,0,0,0.03)] backdrop-blur-sm transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-[0_24px_50px_-30px_rgba(0,0,0,0.28)]"
              >
                <div className="relative w-full overflow-hidden aspect-[16/10]">
                  <Image
                    src={`https://picsum.photos/seed/${project.seed}/800/500`}
                    alt={`Screenshot of ${project.name}`}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                    sizes="(min-width: 640px) 33vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1.5 px-5 py-5">
                  <span className="text-[15px] font-semibold tracking-tight text-[#0a0a0a]">
                    {project.name}
                  </span>
                  <span className="text-[13px] leading-relaxed text-neutral-600">
                    {project.tagline}
                  </span>
                  <span className="mt-2 text-[12px] font-medium uppercase tracking-wider text-[#ff6b00] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Visit ↗
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        <Reveal>
          <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#0a0a0a] sm:text-5xl">
            One person, every <Accent>role</Accent>.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-700 sm:text-[17px]">
            Design, code, customer support, and everything in between,
            expendifii runs on a single founder&apos;s time. That&apos;s by
            choice: it keeps the products simple and the feedback loop
            short.
          </p>
          <div className="mt-8 max-w-md rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-[0_8px_24px_-18px_rgba(15,15,15,0.18)]">
            <p className="text-sm leading-relaxed text-neutral-700">
              <span className="font-semibold text-neutral-900">
                Every message
              </span>{" "}
              that comes in, whether it&apos;s a bug report or an idea,
              goes to one inbox: mine.
            </p>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        <Reveal className="flex flex-col items-start">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#0a0a0a] sm:text-5xl lg:text-6xl">
            Something on your <Accent>mind</Accent>?
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-600 sm:text-lg">
            Feedback on a product, a bug, or a new idea entirely, I read
            every message myself.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="group relative mt-8 inline-flex items-center gap-2.5 overflow-hidden rounded-xl px-6 py-3.5 text-sm font-semibold text-white ring-1 ring-[#0a0a0a]/15 shadow-[0_18px_36px_-12px_rgba(255,107,0,0.6),0_8px_16px_-6px_rgba(255,107,0,0.45),inset_0_1px_0_rgba(255,255,255,0.28)] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.025] active:scale-[0.98]"
            style={{ backgroundColor: "#ff6b00" }}
          >
            Say hello
          </a>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-neutral-200/80 px-6 py-10">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
            aria-label="Footer navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-semibold tracking-tight text-[#0a0a0a] transition-colors duration-200 hover:text-[#ff6b00]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
            aria-label="Products"
          >
            {PROJECTS.map((project) => (
              <a
                key={project.href}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="text-[13px] text-neutral-500 transition-colors duration-200 hover:text-[#0a0a0a]"
              >
                {project.name}
              </a>
            ))}
          </nav>
        </div>
        <p className="mx-auto mt-8 w-full max-w-5xl text-[13px] text-neutral-500">
          © 2026 expendifii, built solo by Sameer.
        </p>
      </footer>
    </div>
  );
}
