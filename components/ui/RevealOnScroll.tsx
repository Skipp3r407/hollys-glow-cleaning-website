"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export type RevealVariant = "fade-up" | "fade-in" | "slide-left" | "slide-right";

const variantMap: Record<RevealVariant, { hidden: string; shown: string }> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-8",
    shown: "opacity-100 translate-y-0",
  },
  "fade-in": {
    hidden: "opacity-0",
    shown: "opacity-100",
  },
  "slide-left": {
    hidden: "opacity-0 translate-x-8",
    shown: "opacity-100 translate-x-0",
  },
  "slide-right": {
    hidden: "opacity-0 -translate-x-8",
    shown: "opacity-100 translate-x-0",
  },
};

type RevealOnScrollProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  /** Stagger delay in ms (after reveal starts) */
  delay?: number;
};

export function RevealOnScroll({
  children,
  className,
  variant = "fade-up",
  delay = 0,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const v = variantMap[variant];

  return (
    <div
      ref={ref}
      data-reveal
      className={cn(
        "will-change-transform",
        visible ? v.shown : v.hidden,
        "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        className,
      )}
      style={{
        transitionDelay: visible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
