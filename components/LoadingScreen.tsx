"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/cn";

const STORAGE_KEY = "holly-glow-splash-dismissed";

/** Visible hold before fade-out starts (ms). Total experience ≈ hold + FADE_MS. */
const HOLD_MS = 3800;
const FADE_MS = 800;
const HOLD_REDUCED_MS = 600;
const FADE_REDUCED_MS = 280;

export function LoadingScreen() {
  const [hydrated, setHydrated] = useState(false);
  /** Show overlay (only after we know session state). */
  const [active, setActive] = useState(false);
  const [entered, setEntered] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [fadeMs, setFadeMs] = useState(FADE_MS);
  const holdTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const finishedRef = useRef(false);

  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    document.body.style.overflow = "";
    setActive(false);
    setExiting(false);
    setEntered(false);
  }, []);

  useLayoutEffect(() => {
    setHydrated(true);
    let reduced = false;
    try {
      reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      reduced = false;
    }
    const fadeDuration = reduced ? FADE_REDUCED_MS : FADE_MS;
    setFadeMs(fadeDuration);

    try {
      if (sessionStorage.getItem(STORAGE_KEY) === "1") {
        return;
      }
    } catch {
      /* treat as first visit */
    }

    finishedRef.current = false;
    setActive(true);
    document.body.style.overflow = "hidden";

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setEntered(true));
    });

    const hold = reduced ? HOLD_REDUCED_MS : HOLD_MS;
    holdTimerRef.current = setTimeout(() => {
      setExiting(true);
    }, hold);

    return () => {
      cancelAnimationFrame(raf);
      if (holdTimerRef.current) clearTimeout(holdTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!active) return;
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  const onTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (e.target !== e.currentTarget) return;
      if (e.propertyName !== "opacity" || !exiting) return;
      finish();
    },
    [exiting, finish],
  );

  useEffect(() => {
    if (!exiting) return;
    const t = window.setTimeout(() => finish(), fadeMs + 120);
    return () => clearTimeout(t);
  }, [exiting, fadeMs, finish]);

  if (!hydrated || !active) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy={!exiting}
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden px-6",
        "bg-gradient-to-br from-[#0c0f14] via-[#121826] to-[#0d1118]",
      )}
      style={{
        opacity: exiting ? 0 : 1,
        transition: `opacity ${fadeMs}ms cubic-bezier(0.22, 1, 0.36, 1)`,
      }}
      onTransitionEnd={onTransitionEnd}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[min(90vw,520px)] -translate-x-1/2 rounded-full bg-dusty-blue/25 blur-[100px] splash-glow-pulse"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[min(100vw,640px)] -translate-x-1/2 translate-y-1/3 rounded-full bg-gold/15 blur-[80px]"
        aria-hidden
      />

      <div
        className={cn(
          "relative z-[1] flex max-w-lg flex-col items-center text-center",
          "transition-all duration-1000 ease-out",
          entered ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-[0.97] opacity-0",
        )}
      >
        {/* Shimmer rail */}
        <div className="relative mb-8 h-px w-[min(72vw,280px)] overflow-hidden rounded-full bg-white/10">
          <div
            className="splash-shimmer absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent"
            aria-hidden
          />
        </div>

        <h1 className="font-[family-name:var(--font-heading)] text-3xl font-extrabold tracking-[0.28em] text-white sm:text-4xl sm:tracking-[0.32em]">
          HOLLY&apos;S GLOW
        </h1>

        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.38em] text-gold/95 sm:text-base sm:tracking-[0.42em]">
          Suds and Scents
        </p>

        <p className="mt-5 max-w-sm text-xs font-medium leading-relaxed tracking-wide text-slate-400 sm:text-sm">
          Orlando Residential &amp; Airbnb Cleaning
        </p>

        <div
          className="mt-12 flex items-center gap-2"
          aria-hidden
        >
          <span className="splash-dot inline-block size-2 rounded-full bg-white/70" />
          <span className="splash-dot splash-dot-delay-1 inline-block size-2 rounded-full bg-white/70" />
          <span className="splash-dot splash-dot-delay-2 inline-block size-2 rounded-full bg-white/70" />
        </div>
      </div>

      <span className="sr-only">Loading Holly&apos;s Glow website</span>
    </div>
  );
}
