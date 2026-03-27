"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { getChatbotResponse } from "@/lib/chatbotMatch";
import { BackToTopButton } from "./BackToTopButton";
import { ChatbotLauncher } from "./ChatbotLauncher";
import { ChatbotWindow, type ChatMessage } from "./ChatbotWindow";

const WELCOME =
  "Hi! I'm here to help with services, pricing, and booking questions.";

function newId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: newId(), role: "assistant", content: WELCOME },
  ]);
  const listRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, []);

  useLayoutEffect(() => {
    scrollToBottom();
  }, [messages, open, scrollToBottom]);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(scrollToBottom, 50);
    return () => window.clearTimeout(t);
  }, [open, scrollToBottom]);

  const sendText = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = {
      id: newId(),
      role: "user",
      content: trimmed,
    };
    setMessages((prev) => [...prev, userMsg]);

    window.setTimeout(() => {
      const reply = getChatbotResponse(trimmed);
      setMessages((prev) => [
        ...prev,
        { id: newId(), role: "assistant", content: reply },
      ]);
    }, 0);
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendText(input);
    setInput("");
  };

  return (
    <div
      className="pointer-events-none fixed bottom-24 right-4 z-[60] flex flex-col items-end gap-3 sm:right-6 lg:bottom-8 lg:right-8"
      aria-live="polite"
    >
      <div className="pointer-events-auto">
        <BackToTopButton />
      </div>

      <div className="pointer-events-auto flex flex-col items-end gap-3">
        <ChatbotWindow
          open={open}
          messages={messages}
          input={input}
          onInputChange={setInput}
          onSubmit={onSubmit}
          onQuickReply={sendText}
          onClose={() => setOpen(false)}
          listRef={listRef}
        />

        <ChatbotLauncher open={open} onToggle={() => setOpen((v) => !v)} />
      </div>
    </div>
  );
}
