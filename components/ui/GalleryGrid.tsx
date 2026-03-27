"use client";

import { X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/cn";

type GalleryItem = {
  title: string;
  category: string;
};

type GalleryGridProps = {
  items: GalleryItem[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  const categories = useMemo(
    () => ["All", ...new Set(items.map((item) => item.category))],
    [items],
  );
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (lightbox === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, closeLightbox]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => {
          const active = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition duration-200",
                active
                  ? "bg-navy text-white shadow-md shadow-navy/20"
                  : "border border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => {
          const globalIndex = items.indexOf(item);
          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setLightbox(globalIndex)}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-dusty-blue/25 hover:shadow-xl"
            >
              <div className="grid h-56 grid-cols-2 overflow-hidden">
                <div className="relative flex items-end bg-slate-300/60 p-3 transition duration-500 group-hover:scale-105">
                  <span className="relative z-10 rounded-full bg-slate-800/90 px-2 py-1 text-xs font-semibold text-white shadow">
                    Before
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
                <div className="relative flex items-end bg-gradient-to-br from-sage/30 to-dusty-blue/30 p-3 transition duration-500 group-hover:scale-105">
                  <span className="relative z-10 rounded-full bg-sage px-2 py-1 text-xs font-semibold text-white shadow">
                    After
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {item.category}
                </p>
                <h3 className="mt-2 text-base font-semibold text-navy group-hover:text-navy/90">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-dusty-blue opacity-0 transition group-hover:opacity-100">
                  Tap to enlarge
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {lightbox !== null && items[lightbox] ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery preview"
        >
          <button
            type="button"
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={closeLightbox}
            aria-label="Close gallery"
          />
          <div className="relative z-[101] w-full max-w-3xl overflow-hidden rounded-2xl border border-white/20 bg-white shadow-2xl">
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/95 p-2 text-slate-700 shadow-md transition hover:bg-white hover:text-navy"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="grid max-h-[70vh] grid-cols-2 gap-px bg-slate-200">
              <div className="flex min-h-[200px] items-end bg-slate-300/70 p-4 sm:min-h-[240px]">
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-white">
                  Before
                </span>
              </div>
              <div className="flex min-h-[200px] items-end bg-gradient-to-br from-sage/35 to-dusty-blue/35 p-4 sm:min-h-[240px]">
                <span className="rounded-full bg-sage px-3 py-1 text-xs font-semibold text-white">
                  After
                </span>
              </div>
            </div>
            <div className="border-t border-slate-100 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {items[lightbox].category}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-navy">
                {items[lightbox].title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Replace with your photos when ready — this preview shows how
                before/after pairs will display for guests.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
