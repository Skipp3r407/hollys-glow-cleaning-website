"use client";

import { Sparkles, X } from "lucide-react";

type ChatbotLauncherProps = {
  open: boolean;
  onToggle: () => void;
};

export function ChatbotLauncher({ open, onToggle }: ChatbotLauncherProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="relative flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-xl shadow-slate-500/40 ring-2 ring-white/30 transition hover:scale-105 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
      aria-expanded={open}
      aria-controls="holly-glow-chat-panel"
      aria-label={open ? "Close chat assistant" : "Open chat assistant"}
    >
      <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3 rounded-full bg-sage ring-2 ring-white" />
      {open ? (
        <X className="h-6 w-6" />
      ) : (
        <Sparkles className="h-7 w-7" strokeWidth={2} />
      )}
    </button>
  );
}
