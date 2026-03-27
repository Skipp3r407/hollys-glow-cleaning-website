import { Sparkles } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type TrustBarProps = {
  items: string[];
};

export function TrustBar({ items }: TrustBarProps) {
  return (
    <section className="border-y border-slate-200/80 bg-gradient-to-r from-white via-cream to-white">
      <div className="mx-auto grid w-full max-w-6xl gap-3 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item, index) => (
          <RevealOnScroll key={item} variant="fade-in" delay={index * 70}>
            <div className="group flex items-center gap-2 rounded-xl px-2 py-2 transition duration-300 hover:bg-white/60">
              <Sparkles
                size={16}
                className="shrink-0 text-gold transition duration-300 group-hover:scale-110"
              />
              <p className="text-sm font-medium text-slate-700">{item}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
