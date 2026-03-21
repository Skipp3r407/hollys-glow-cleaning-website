"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

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
            className="rounded-xl border border-slate-200 bg-white"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
            >
              <span className="text-sm font-semibold text-navy sm:text-base">
                {item.question}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-slate-500 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            {open ? (
              <div className="border-t border-slate-100 px-4 pb-4 pt-3">
                <p className="text-sm leading-7 text-slate-600">{item.answer}</p>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
