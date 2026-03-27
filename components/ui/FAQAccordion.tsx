"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <article
            key={item.question}
            className={cn(
              "overflow-hidden rounded-xl border transition duration-300 ease-out",
              open
                ? "border-dusty-blue/35 bg-white shadow-md shadow-slate-400/10"
                : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50",
            )}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition hover:bg-slate-50/60"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
            >
              <span className="text-sm font-semibold text-navy sm:text-base">
                {item.question}
              </span>
              <ChevronDown
                size={18}
                className={cn(
                  "shrink-0 text-slate-500 transition-transform duration-300 ease-out",
                  open && "rotate-180 text-dusty-blue",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="border-t border-slate-100 px-4 pb-4 pt-3">
                  <p className="text-sm leading-7 text-slate-600">{item.answer}</p>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
