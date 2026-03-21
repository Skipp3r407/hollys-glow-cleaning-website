import { Sparkles } from "lucide-react";

type TrustBarProps = {
  items: string[];
};

export function TrustBar({ items }: TrustBarProps) {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-3 px-4 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2 rounded-lg px-2 py-1">
            <Sparkles size={16} className="text-gold" />
            <p className="text-sm font-medium text-slate-700">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
