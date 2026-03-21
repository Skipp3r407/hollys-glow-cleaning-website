import { Star } from "lucide-react";

type TestimonialCardProps = {
  testimonial: {
    name: string;
    quote: string;
    service: string;
  };
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex items-center gap-1 text-gold">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star key={idx} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="text-sm leading-7 text-slate-700">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-5 border-t border-slate-100 pt-4">
        <p className="text-sm font-semibold text-navy">{testimonial.name}</p>
        <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
          {testimonial.service}
        </p>
      </div>
    </article>
  );
}
