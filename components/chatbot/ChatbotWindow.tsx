"use client";

import { BrushCleaning, Send, X } from "lucide-react";
import Link from "next/link";
import type { RefObject } from "react";
import { QUICK_REPLIES } from "@/lib/chatbotData";

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type ChatbotWindowProps = {
  open: boolean;
  messages: ChatMessage[];
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onQuickReply: (text: string) => void;
  onClose: () => void;
  listRef: RefObject<HTMLDivElement | null>;
};

export function ChatbotWindow({
  open,
  messages,
  input,
  onInputChange,
  onSubmit,
  onQuickReply,
  onClose,
  listRef,
}: ChatbotWindowProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      id="holly-glow-chat-panel"
      className="pointer-events-auto absolute bottom-full right-0 z-10 mb-3 w-[min(100vw-2rem,380px)] origin-bottom-right transition duration-300 ease-out"
    >
      <div className="flex h-[min(70vh,520px)] w-[min(100vw-2rem,380px)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-400/30">
        <header className="flex items-center justify-between gap-2 border-b border-slate-100 bg-navy px-4 py-3 text-white">
          <div className="flex min-w-0 items-center gap-2">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
              <BrushCleaning className="h-4 w-4 text-gold" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold">
                Holly&apos;s Glow Assistant
              </p>
              <p className="truncate text-xs text-slate-300">
                Orlando cleaning • bookings &amp; FAQs
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-white/90 transition hover:bg-white/10"
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div
          ref={listRef}
          className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-cream px-3 py-3"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-sm ${
                  m.role === "user"
                    ? "bg-navy text-white"
                    : "border border-slate-200 bg-white text-slate-800"
                }`}
              >
                {m.content.split("\n").map((line, i) => (
                  <p key={i} className={i > 0 ? "mt-2" : ""}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-100 bg-white px-3 pb-2 pt-2">
          <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-slate-400">
            Quick replies
          </p>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {QUICK_REPLIES.map((q) => (
              <button
                key={q.label}
                type="button"
                onClick={() => onQuickReply(q.message)}
                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:bg-white"
              >
                {q.label}
              </button>
            ))}
          </div>

          <form onSubmit={onSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => onInputChange(e.target.value)}
              placeholder="Ask about services, pricing, booking…"
              className="min-w-0 flex-1 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none ring-navy/20 transition placeholder:text-slate-400 focus:border-slate-300 focus:ring-2"
              aria-label="Message"
            />
            <button
              type="submit"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-white shadow-sm transition hover:bg-slate-800"
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
          <p className="mt-2 text-center text-[10px] text-slate-400">
            For the fastest booking,{" "}
            <Link
              href="/contact"
              className="font-medium text-dusty-blue underline-offset-2 hover:underline"
            >
              go to Contact
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
