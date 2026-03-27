import { Star } from "lucide-react";
import type { GoogleReviewItem } from "@/lib/reviewsData";

type ReviewCardProps = {
  review: GoogleReviewItem;
};

export function ReviewCard({ review }: ReviewCardProps) {
  const stars = Math.min(5, Math.max(1, Math.round(review.rating)));

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-dusty-blue/25 hover:shadow-lg hover:shadow-slate-400/15">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-1 text-gold transition duration-300 group-hover:scale-[1.02]">
          {Array.from({ length: stars }).map((_, idx) => (
            <Star
              key={idx}
              size={16}
              className="shrink-0"
              fill="currentColor"
              aria-hidden
            />
          ))}
        </div>
        {review.date ? (
          <span className="text-xs font-medium tabular-nums text-slate-400">
            {review.date}
          </span>
        ) : null}
      </div>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-700">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-5 border-t border-slate-100 pt-4">
        <p className="text-sm font-semibold text-navy">{review.author}</p>
        <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400">
          Google review
        </p>
      </div>
    </article>
  );
}
