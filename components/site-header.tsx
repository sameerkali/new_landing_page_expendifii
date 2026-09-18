"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/content";
import { ArrowUpRight, ChevronDown, WhatsAppMark } from "./icons";
import { Logo } from "./logo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-start px-4 pt-4 sm:pt-5">
      <nav
        className={`ease-expo pointer-events-auto flex h-12 w-full items-center justify-between gap-4 rounded-full pr-1.5 pl-3.5 transition-all duration-500 sm:w-[85%] sm:pl-4 md:w-2/3 lg:w-1/2 lg:max-w-3xl ${
          scrolled
            ? "border border-neutral-200/90 bg-white/80 shadow-[0_14px_40px_-28px_rgba(15,15,15,0.4)] backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="group/logo flex items-center gap-2.5"
          aria-label="Expendifii, home"
        >
          <Logo size={26} />
          <span className="text-sm font-semibold tracking-tight text-neutral-900">
            Expendifii
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group/nav ease-spring relative inline-flex h-8 items-center rounded-full px-3 text-[13px] font-medium tracking-tight text-neutral-700 transition-all duration-300 hover:-translate-y-px hover:text-neutral-950 hover:shadow-[0_6px_16px_-8px_rgba(15,15,15,0.22)] active:translate-y-0 active:scale-[0.98]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="group/cta bg-ink ease-expo relative inline-flex h-9 items-center gap-1.5 overflow-hidden rounded-full px-3.5 text-[12px] font-medium text-white transition-all duration-500 hover:-translate-y-px hover:shadow-[0_14px_30px_-16px_rgba(15,15,15,0.7)] active:translate-y-0 active:scale-[0.98]"
          >
            <span
              aria-hidden="true"
              className="animate-sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-linear-to-r from-transparent via-white/25 to-transparent"
            />
            <WhatsAppMark className="relative h-3.5 w-3.5" />
            <span className="relative hidden sm:inline">See a demo</span>
            <ArrowUpRight className="ease-spring relative h-3 w-3 transition-transform duration-500 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white/70 text-neutral-800 transition-colors duration-200 hover:bg-white sm:hidden"
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </nav>

      {open && (
        <div className="pointer-events-auto fixed inset-x-4 top-24 z-40 rounded-3xl border border-neutral-200 bg-white/95 p-3 shadow-[0_30px_60px_-40px_rgba(15,15,15,0.5)] backdrop-blur-xl sm:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium text-neutral-800 transition-colors hover:bg-neutral-50"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400" />
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
