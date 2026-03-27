"use client";

import { ExternalLink } from "lucide-react";
import { btnPrimary } from "@/components/ui/buttonStyles";
import { cn } from "@/lib/cn";
import { GOOGLE_REVIEW_URL, isGoogleReviewUrlPlaceholder } from "@/lib/reviewsData";

const compactClass =
  "inline-flex items-center gap-1.5 text-sm font-semibold text-navy underline decoration-dusty-blue/40 underline-offset-4 transition hover:text-dusty-blue hover:decoration-dusty-blue";

type LeaveReviewButtonProps = {
  variant?: "primary" | "compact";
  className?: string;
};

export function LeaveReviewButton({
  variant = "primary",
  className,
}: LeaveReviewButtonProps) {
  const placeholder = isGoogleReviewUrlPlaceholder();
  const href = placeholder ? "#" : GOOGLE_REVIEW_URL;
  const label = "Leave a Google Review";

  if (variant === "compact") {
    return (
      <a
        href={href}
        className={cn(compactClass, className)}
        {...(!placeholder
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        onClick={placeholder ? (e) => e.preventDefault() : undefined}
        title={
          placeholder
            ? "Add NEXT_PUBLIC_GOOGLE_REVIEW_URL to enable this link"
            : undefined
        }
      >
        {label}
        <ExternalLink className="size-3.5 shrink-0 opacity-70" aria-hidden />
      </a>
    );
  }

  return (
    <a
      href={href}
      className={cn(btnPrimary, "gap-2", className)}
      {...(!placeholder ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onClick={placeholder ? (e) => e.preventDefault() : undefined}
      title={
        placeholder
          ? "Add NEXT_PUBLIC_GOOGLE_REVIEW_URL to open your Google review page"
          : undefined
      }
    >
      {label}
      <ExternalLink className="size-4 shrink-0 opacity-90" aria-hidden />
    </a>
  );
}
