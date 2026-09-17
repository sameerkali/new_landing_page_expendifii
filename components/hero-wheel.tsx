"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

type Slide = { src: string; alt: string };

/**
 * A vertical 3-D conveyor of product shots.
 *
 * It turns on its own. Press and drag and it stops dead under the pointer,
 * follows the hand, then coasts and picks the drift back up from wherever
 * it was let go — it never snaps back to a home position.
 *
 * The frame loop writes transforms straight to the DOM, so dragging never
 * goes through React state.
 */

const ASPECT = 1; // product screenshots are square canvases
const CARD_WIDTH = 0.38; // fraction of stage width
const STEP = 1.312; // card-heights between neighbours
// Perspective magnifies the near card and shrinks the far ones, so the swing
// is hung on the card at the front. That way the widest part of the arc is
// also the part the projection amplifies, and the distant cards stay tucked
// in rather than wandering out over the headline.
const SWEEP = 46; // % of card width the arc carries the front card right
const SPIN = 8; // deg the card cants over across the sweep
const HOME = -33; // % x offset at the top and bottom of the arc
const DRIFT = 0.09; // cards per second, idle
const DECAY = 0.935; // per 1/60s, momentum falloff
const RAMP = 0.9; // seconds to fade the drift back in

/**
 * Positions one card on the rim of the wheel.
 *
 * `d` is how many places the card sits from the front, so d = 0 is the
 * card facing the viewer and ±half is the far side. Vertical spacing stays
 * linear, which keeps the cards evenly spread, while x and rotateZ trace a
 * half-circle: a card enters at the top, swings out to the right as it
 * comes down to the front, then draws back in as it drops away. Top, right,
 * bottom — clockwise.
 */
function layout(d: number, half: number) {
  const a = Math.abs(d);
  const u = (d + half) / (2 * half); // 0 at the top of the arc, 1 at the bottom
  const swing = Math.sin(Math.PI * u); // 0 -> 1 -> 0, widest at the front
  return {
    x: HOME + SWEEP * swing,
    y: d * STEP * 100,
    z: 310 - 65 * a - 222 * d * d,
    rz: SPIN * (2 * u - 1),
    scale: Math.max(0.28, 1.197 - 0.0365 * a - 0.1288 * d * d),
    opacity: Math.min(1, Math.max(0, 1.08 - 0.2 * d * d)),
    rx: 1.8 + 0.95 * a,
    ry: -(0.28 + 1.19 * a),
    zi: Math.max(1, Math.round(100 - a * 35)),
  };
}

function wrap(value: number, n: number) {
  const half = n / 2;
  return (((value + half) % n) + n) % n - half;
}

function transformOf(l: ReturnType<typeof layout>) {
  return `translate3d(calc(-50% + ${l.x.toFixed(3)}%), calc(-50% + ${l.y.toFixed(3)}%), ${l.z.toFixed(2)}px) rotateX(${l.rx.toFixed(3)}deg) rotateY(${l.ry.toFixed(3)}deg) rotateZ(${l.rz.toFixed(3)}deg) scale(${l.scale.toFixed(4)})`;
}

export function HeroWheel({ slides }: { slides: Slide[] }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLElement | null)[]>([]);

  const offset = useRef(0);
  const velocity = useRef(0);
  const ramp = useRef(1);
  const dragging = useRef(false);
  const pointerId = useRef<number | null>(null);
  const dragStartY = useRef(0);
  const dragStartOffset = useRef(0);
  const lastMoveY = useRef(0);
  const lastMoveT = useRef(0);
  const stepPx = useRef(1);
  const reduced = useRef(false);

  const n = slides.length;

  const measure = useCallback(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const cardHeight = stage.clientWidth * CARD_WIDTH * ASPECT;
    stepPx.current = Math.max(1, cardHeight * STEP);
  }, []);

  /* paint one frame */
  const paint = useCallback(() => {
    const items = itemsRef.current;
    const half = n / 2;
    for (let i = 0; i < items.length; i += 1) {
      const el = items[i];
      if (!el) continue;
      const d = wrap(i + offset.current, n);
      const l = layout(d, half);
      el.style.transform = transformOf(l);
      el.style.opacity = String(l.opacity);
      el.style.zIndex = String(l.zi);
      el.style.pointerEvents = Math.abs(d) < 0.5 ? "auto" : "none";
    }
  }, [n]);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    measure();
    paint();

    const stage = stageRef.current;
    const ro = stage ? new ResizeObserver(measure) : null;
    if (stage && ro) ro.observe(stage);

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      if (!dragging.current) {
        if (Math.abs(velocity.current) > 0.0004) {
          velocity.current *= Math.pow(DECAY, dt * 60);
        } else {
          velocity.current = 0;
        }
        ramp.current = Math.min(1, ramp.current + dt / RAMP);
        const drift = reduced.current ? 0 : DRIFT * ramp.current;
        offset.current += (velocity.current + drift) * dt;
      }

      paint();
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      ro?.disconnect();
    };
  }, [measure, paint]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    dragging.current = true;
    velocity.current = 0;
    ramp.current = 0;
    pointerId.current = e.pointerId;
    dragStartY.current = e.clientY;
    dragStartOffset.current = offset.current;
    lastMoveY.current = e.clientY;
    lastMoveT.current = performance.now();
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current || pointerId.current !== e.pointerId) return;
    const dy = e.clientY - dragStartY.current;
    offset.current = dragStartOffset.current + dy / stepPx.current;

    const now = performance.now();
    const dt = (now - lastMoveT.current) / 1000;
    if (dt > 0.008) {
      const dyStep = (e.clientY - lastMoveY.current) / stepPx.current;
      velocity.current = dyStep / dt;
      lastMoveY.current = e.clientY;
      lastMoveT.current = now;
    }
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerId.current !== e.pointerId) return;
    dragging.current = false;
    pointerId.current = null;
    ramp.current = 0;
    velocity.current = Math.max(-6, Math.min(6, velocity.current));
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      velocity.current = 2.4;
      ramp.current = 0;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      velocity.current = -2.4;
      ramp.current = 0;
    }
  };

  return (
    <>
      {/* ---------- desktop: the wheel ---------- */}
      <div
        className="hero-stage relative mx-auto hidden w-full max-w-[1220px] touch-pan-y select-none lg:block lg:h-[78vh] lg:max-h-[880px] xl:max-w-[1360px] xl:max-h-[980px]"
      >
        <div
          ref={stageRef}
          role="group"
          tabIndex={0}
          aria-label="Product screenshots. Drag to move, arrow keys to step."
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onKeyDown={onKeyDown}
          className="absolute inset-0 cursor-grab outline-none active:cursor-grabbing"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(3deg) rotateY(-4deg)",
          }}
        >
          {slides.map((slide, i) => {
            const initial = layout(wrap(i, n), n / 2);
            return (
              <figure
                key={slide.src}
                ref={(el) => {
                  itemsRef.current[i] = el;
                }}
                className="absolute top-1/2 left-1/2 w-[31%] will-change-transform"
                style={{
                  transform: transformOf(initial),
                  opacity: initial.opacity,
                  zIndex: initial.zi,
                }}
              >
                <Image
                  src={slide.src}
                  alt=""
                  width={1254}
                  height={1254}
                  unoptimized
                  draggable={false}
                  priority={i < 3}
                  className="aspect-square w-full rounded-[18px] object-cover shadow-[0_30px_70px_-40px_rgba(10,10,10,0.5)] ring-1 ring-black/5"
                />
              </figure>
            );
          })}
        </div>

        <p className="pointer-events-none absolute bottom-6 left-2 z-[200] inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white/70 px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase backdrop-blur-sm">
          <span aria-hidden="true" className="flex flex-col gap-[3px]">
            <span className="block h-[3px] w-[3px] rounded-full bg-neutral-400" />
            <span className="bg-clay-bright block h-[3px] w-[3px] rounded-full" />
            <span className="block h-[3px] w-[3px] rounded-full bg-neutral-400" />
          </span>
          Drag to explore
        </p>
      </div>

      {/* ---------- mobile / tablet: a flowing strip ---------- */}
      <div
        className="no-scrollbar relative w-full overflow-hidden lg:hidden"
        aria-hidden="true"
      >
        <div className="animate-marquee flex w-max gap-4 px-4">
          {[...slides, ...slides].map((slide, i) => (
            <div
              key={`${slide.src}-${i}`}
              className="aspect-square w-32.5 flex-none overflow-hidden rounded-[18px] ring-1 ring-black/5 sm:w-42.5"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1254}
                height={1254}
                unoptimized
                draggable={false}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="from-paper pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r to-transparent" />
        <div className="from-paper pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l to-transparent" />
      </div>

      {/* screen-reader equivalent of the deck */}
      <ul className="sr-only">
        {slides.map((slide) => (
          <li key={slide.src}>{slide.alt}</li>
        ))}
      </ul>
    </>
  );
}
