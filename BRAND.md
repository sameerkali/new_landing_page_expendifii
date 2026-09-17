# Expendifii — Brand & Design Style Guide

A quick reference for the visual language used across the site. Source of truth for copy is `landing.md`; this file covers colors, type, logo, and the other design tokens in `app/globals.css`.

## Logo

The mark is a simple duck glyph inside a circle, drawn as flat vector shapes (no gradients, no outlines).

- **Primary mark:** `public/logos/OrangeCircleLogo.svg` — white duck on a clay-orange circle. Used in the nav, the footer, and the browser favicon (`app/icon.svg`).
- Keep the mark on a plain background (paper or ink). It isn't designed to sit on photography or busy imagery.
- Minimum clear space: roughly half the mark's own width on every side.

## Color

Two neutrals (paper and ink) plus one accent (clay). No secondary accent color — clay is the only color allowed to carry meaning (links, CTAs, active states).

| Token | Hex | Use |
|---|---|---|
| `--color-paper` | `#f5f4f2` | Page background (default, light-mode only) |
| `--color-paper-2` | `#efeeec` | Slightly recessed panels, alternating section tints |
| `--color-paper-3` | `#e9e7e4` | Third-level recess, subtle dividers |
| `--color-ink` | `#0a0a0a` | Primary text, dark buttons, footer background elements |
| `--color-ink-2` | `#141414` | Dark surface hover state |
| `--color-ink-3` | `#1a1a1a` | Dark surface active/pressed state |
| `--color-clay` | `#cc5400` | Accent, deeper variant (link hover, pressed states) |
| `--color-clay-bright` | `#ff6b00` | Accent, primary (CTA highlights, focus glow, active dot) |
| `--color-clay-tint` | `#fff3ea` | Accent background wash (badges, callout boxes) |
| `--color-clay-line` | `#ffd6b8` | Accent border (pairs with `clay-tint`) |

Rules of thumb: neutrals do the heavy lifting, clay is used sparingly and only for one accent per screen. No pure black or pure white — always the off-black/off-white tokens above. The site is light-mode only by design; there's no dark theme.

## Typography

Three typefaces, each with one job. No other fonts.

| Font | Role | Where |
|---|---|---|
| **Manrope** | Body sans, UI text | Everything by default — nav, body copy, buttons, labels |
| **Playfair Display** (italic) | Accent / emphasis | One or two words inside a headline, always italic, always `clay` colored — never used for full sentences |
| **IBM Plex Mono** | Mono / technical | Eyebrows, stat labels, footer meta — small, uppercase, wide letter-spacing (weights 400/500 only) |

Headline pattern: set the line in Manrope semibold, then swap the one word that needs emphasis into italic Playfair Display, e.g. *"Small software for **small businesses.**"* — the italic word carries the accent color, the rest stays ink-black.

Type scale in practice: hero headline scales fluidly (`clamp(2.6rem, 6.4vw, 4.4rem)`), section headings sit around `text-4xl`–`text-5xl`, body copy is `text-[16px]`–`text-[17px]` with relaxed leading, and mono eyebrows are tiny (`11px`) with heavy tracking (`0.2em`–`0.22em`) and uppercase.

## Shape & elevation

- **Radius:** pills (`rounded-full`) for every button and the nav bar; `rounded-2xl`/`rounded-3xl` for cards and panels. Nothing sharp-cornered.
- **Borders:** hairline `border-neutral-200`, used instead of shadows to separate flat sections.
- **Shadows:** soft and warm-tinted, never pure black — `--shadow-lift`, `--shadow-lift-sm` for hover states on cards, `--shadow-pill` for floating buttons/nav, `--shadow-card` for elevated panels.

## Motion

- **Easing:** `--ease-expo` `cubic-bezier(0.22,1,0.36,1)` for most transitions, `--ease-spring` `cubic-bezier(0.34,1.56,0.64,1)` for playful bounce (icon nudges, logo hover), `--ease-smooth` `cubic-bezier(0.16,1,0.3,1)` for CTA/button interactions.
- **Scroll reveal:** elements fade and rise into view (`data-reveal`), with `blur`, `slide`, `pop`, and `spark` variants for different entrance styles. Always respects `prefers-reduced-motion` — motion is disabled outright for users who ask for it.
- Small ambient details: a soft floating drift on decorative elements, a sheen sweep across dark buttons on hover, a blinking caret on the WhatsApp CTA.

## Voice in one line

Plain, confident, specific — real numbers over vague claims, no filler adjectives. See `landing.md` for the full copy guide.
