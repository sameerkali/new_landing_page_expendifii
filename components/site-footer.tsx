import Link from "next/link";
import { products, site } from "@/lib/content";
import { ArrowUpRight } from "./icons";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="group/logo flex items-center gap-2.5">
              <Logo size={30} />
              <span className="text-[15px] font-semibold tracking-tight text-neutral-900">
                Expendifii
              </span>
            </Link>
            <p className="mt-4 max-w-[15rem] text-sm leading-relaxed text-neutral-500">
              {site.footerLine}
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
              Products
            </p>
            <ul className="mt-4 space-y-2.5">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="group/link inline-flex items-center gap-1.5 text-sm text-neutral-600 transition-colors duration-200 hover:text-neutral-950"
                  >
                    {product.name}
                    <ArrowUpRight className="h-3 w-3 text-neutral-300 transition-all duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-neutral-600" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-neutral-600">
              <li>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-200 hover:text-neutral-950"
                >
                  WhatsApp {site.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors duration-200 hover:text-neutral-950"
                >
                  {site.email}
                </a>
              </li>
              <li>{site.location}</li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-200 hover:text-neutral-950"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
              Legal
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-neutral-600">
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors duration-200 hover:text-neutral-950"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="transition-colors duration-200 hover:text-neutral-950"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-6">
          <p className="font-mono text-[11px] tracking-[0.1em] text-neutral-400">
            © {site.year} Expendifii {site.footerLine}
          </p>
          <p className="font-mono text-[11px] tracking-[0.1em] text-neutral-400">
            Noida, India
          </p>
        </div>
      </div>
    </footer>
  );
}
