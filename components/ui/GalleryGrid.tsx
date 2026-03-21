"use client";

import { useMemo, useState } from "react";

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

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

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
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "bg-navy text-white"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
          >
            <div className="grid h-56 grid-cols-2">
              <div className="flex items-end bg-slate-300/60 p-3">
                <span className="rounded-full bg-slate-700 px-2 py-1 text-xs font-semibold text-white">
                  Before
                </span>
              </div>
              <div className="flex items-end bg-gradient-to-br from-sage/25 to-dusty-blue/25 p-3">
                <span className="rounded-full bg-sage px-2 py-1 text-xs font-semibold text-white">
                  After
                </span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                {item.category}
              </p>
              <h3 className="mt-2 text-base font-semibold text-navy">{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
