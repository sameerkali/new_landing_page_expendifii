import type { SVGProps } from "react";

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} strokeWidth={2.4} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function WhatsAppMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.87 9.87 0 0 0 4.74 1.2h.01c5.46 0 9.9-4.43 9.9-9.9 0-2.64-1.03-5.12-2.9-6.99A9.82 9.82 0 0 0 12.04 2Zm0 1.85a8.02 8.02 0 0 1 5.7 2.36 8 8 0 0 1 2.35 5.69c0 4.44-3.61 8.05-8.05 8.05a8.2 8.2 0 0 1-4.13-1.13l-.3-.18-3.07.8.82-3-.19-.3a8 8 0 0 1-1.23-4.24c0-4.44 3.61-8.05 8.1-8.05Zm-3.4 4.1c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.43-.59 1.63-1.15.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28-.24-.12-1.43-.7-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.37-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.32-.74-1.8-.19-.46-.39-.4-.53-.41h-.5Z" />
    </svg>
  );
}

export function Spark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0c.4 5.6 2.3 8.6 6.9 9.6l5.1 1.1c.1.6.1 1.2 0 1.8l-5.1 1.1c-4.6 1-6.5 4-6.9 9.6-.6.1-1.2.1-1.8 0-.4-5.6-2.3-8.6-6.9-9.6L0 12.5c-.1-.6-.1-1.2 0-1.8l3.3-.7C7.9 9 9.8 6 10.2 0c.6-.1 1.2-.1 1.8 0Z" />
    </svg>
  );
}

/* ---------------- audience marks ---------------- */

export function CupMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h12v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
      <path d="M16 9.5h1.8a2.7 2.7 0 0 1 0 5.4H16" />
      <path d="M7 3.2c.7.9.7 1.6 0 2.4M11 3.2c.7.9.7 1.6 0 2.4" />
    </svg>
  );
}

export function PlateMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="13" r="7" />
      <circle cx="12" cy="13" r="3.2" />
      <path d="M4 3v5M20 3v5" />
    </svg>
  );
}

export function ShopMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 9.5V20h17V9.5" />
      <path d="M2 9.5 4 4h16l2 5.5a3 3 0 0 1-5 1.6 3 3 0 0 1-5 0 3 3 0 0 1-5 0 3 3 0 0 1-5-1.6Z" />
      <path d="M9.5 20v-5.5h5V20" />
    </svg>
  );
}

export function ScissorsMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="6.5" r="2.6" />
      <circle cx="6" cy="17.5" r="2.6" />
      <path d="M8.3 7.9 20 18M8.3 16.1 20 6" />
    </svg>
  );
}

export function TruckMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M2 6.5h11v10H2z" />
      <path d="M13 9.5h4l3 3.2v3.8h-7z" />
      <circle cx="6.5" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </svg>
  );
}

export const audienceMarks = {
  cup: CupMark,
  plate: PlateMark,
  shop: ShopMark,
  scissors: ScissorsMark,
  truck: TruckMark,
} as const;
