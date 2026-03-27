import Link from "next/link";
import { Star } from "lucide-react";
import { btnSecondary } from "@/components/ui/buttonStyles";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import {
  googleReviews,
  googleReviewsSummary,
} from "@/lib/reviewsData";
import { LeaveReviewButton } from "./LeaveReviewButton";
import { ReviewCard } from "./ReviewCard";

type ReviewsSectionProps = {
  className?: string;
};

export function ReviewsSection({ className }: ReviewsSectionProps) {
  return (
    <section
      id="google-reviews"
      className={cn(
        "relative overflow-hidden border-y border-slate-200/80 bg-gradient-to-b from-white via-slate-50/60 to-white py-16",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-24 h-64 w-64 rounded-full bg-dusty-blue/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-gold/[0.06] blur-3xl" />

      <div className="relative z-[1] mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll variant="fade-up">
          <div className="rounded-2xl border border-slate-200/80 bg-white/90 px-5 py-6 shadow-sm backdrop-blur-sm sm:px-7 sm:py-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="flex shrink-0 items-center gap-0.5 text-gold"
                  role="img"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={22}
                      fill="currentColor"
                      className="drop-shadow-sm"
                      aria-hidden
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-navy">
                    {googleReviewsSummary.headline}
                  </p>
                  <p className="mt-0.5 max-w-xl text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {googleReviewsSummary.subline}
                  </p>
                </div>
              </div>
              <LeaveReviewButton className="w-full shrink-0 sm:w-auto" />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll variant="fade-up">
          <SectionHeading
            eyebrow="Google Reviews"
            title="What Our Clients Are Saying"
            description="Real feedback from neighbors and hosts who trust us with their homes and rentals."
          />
        </RevealOnScroll>

        <div className="-mx-4 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 lg:grid-cols-3 lg:gap-6">
          {googleReviews.map((review, index) => (
            <RevealOnScroll
              key={review.id}
              variant="fade-up"
              delay={index * 55}
              className="min-w-[min(100%,320px)] shrink-0 snap-center md:min-w-0"
            >
              <ReviewCard review={review} />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll variant="fade-in" className="mt-10">
          <div className="flex flex-col items-stretch gap-4 rounded-2xl border border-slate-200/90 bg-white/80 px-5 py-6 text-center shadow-sm sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <p className="text-sm font-medium text-navy">
                We appreciate every review and love hearing from our clients.
              </p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Your feedback helps us improve and helps neighbors find dependable
                cleaning.
              </p>
            </div>
            <Link
              href="/testimonials"
              className={`${btnSecondary} w-full shrink-0 sm:w-auto`}
            >
              More client stories
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
