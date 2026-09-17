"use client";

import { useState } from "react";

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable, the email is still readable in the button
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy email address to clipboard"
      className="group relative flex w-full max-w-md items-center justify-between gap-4 overflow-hidden rounded-2xl bg-[#1a1a1a] px-4 py-3.5 text-left ring-1 ring-black/20 shadow-[0_14px_30px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#222] active:scale-[0.985]"
    >
      <span className="truncate font-mono text-[13px] text-neutral-300 sm:text-sm">
        <span className="mr-2 text-neutral-500">$</span>
        {email}
      </span>
      <span className="flex shrink-0 items-center text-[11px] font-medium uppercase tracking-wider text-neutral-400 transition-colors duration-300 group-hover:text-neutral-200">
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
