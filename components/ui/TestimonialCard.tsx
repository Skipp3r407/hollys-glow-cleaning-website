import { Star } from "lucide-react";
import { interactiveHover } from "@/components/ui/interactiveStyles";
import { cn } from "@/lib/cn";

type TestimonialCardProps = {
  testimonial: {
    name: string;
    quote: string;
    service: string;
  };
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
        interactiveHover,
      )}
    >
      <div className="mb-4 flex items-center gap-1 text-gold transition duration-300 group-hover:scale-[1.02]">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star
            key={idx}
            size={16}
            className="transition group-hover:drop-shadow-sm"
            fill="currentColor"
          />
        ))}
      </div>
      <p className="text-sm leading-7 text-slate-700">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-5 border-t border-slate-100 pt-4 transition group-hover:border-dusty-blue/15">
        <p className="text-sm font-semibold text-navy transition group-hover:text-dusty-blue">
          {testimonial.name}
        </p>
        <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
          {testimonial.service}
        </p>
      </div>
    </article>
  );
}
