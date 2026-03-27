/**
 * Placeholder Google Reviews data — swap for API or embed when connected.
 * Set your shareable review URL from Google Business Profile:
 *   NEXT_PUBLIC_GOOGLE_REVIEW_URL=https://...
 * Or edit GOOGLE_REVIEW_URL_FALLBACK below.
 */

export const GOOGLE_REVIEW_URL =
  process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL?.trim() || "#";

/** True when no real URL is configured (placeholder). */
export function isGoogleReviewUrlPlaceholder(): boolean {
  const u = GOOGLE_REVIEW_URL.trim();
  return u === "" || u === "#";
}

export type GoogleReviewItem = {
  id: string;
  author: string;
  rating: number;
  text: string;
  /** Display label, e.g. "Jan 2026" */
  date?: string;
};

export const googleReviewsSummary = {
  headline: "Highly rated by local clients",
  subline:
    "Trusted by Orlando-area homeowners, families, and short-term rental hosts.",
};

export const googleReviews: GoogleReviewItem[] = [
  {
    id: "1",
    author: "Michelle R.",
    rating: 5,
    date: "Jan 2026",
    text:
      "We booked a deep clean before hosting family and the house smelled fresh for days. Baseboards and bathrooms looked like they’d been reset. Communication was easy from the first message.",
  },
  {
    id: "2",
    author: "James T.",
    rating: 5,
    date: "Dec 2025",
    text:
      "Move-out clean in Dr. Phillips — deposit-related stress gone. They hit the kitchen, floors, and inside of appliances thoroughly. On time and professional.",
  },
  {
    id: "3",
    author: "Ana L.",
    rating: 5,
    date: "Nov 2025",
    text:
      "Our Airbnb near the parks turns over fast; Holly’s team keeps turnovers tight and guest-ready. Linens straight, surfaces wiped, nothing missed in the bathrooms.",
  },
  {
    id: "4",
    author: "David K.",
    rating: 5,
    date: "Oct 2025",
    text:
      "Post-renovation dust was everywhere. They didn’t rush — vents, ledges, and floors got real attention. Place finally felt livable again.",
  },
  {
    id: "5",
    author: "Priya S.",
    rating: 5,
    date: "Sep 2025",
    text:
      "Reliable for recurring service every other week. Same high standard each visit; I like that I don’t have to micromanage what “clean” means.",
  },
  {
    id: "6",
    author: "Elena M.",
    rating: 5,
    date: "Aug 2025",
    text:
      "Booking was straightforward and they confirmed details before arriving. Attention to detail in the kitchen and primary bath really stood out.",
  },
  {
    id: "7",
    author: "Chris P.",
    rating: 5,
    date: "Jul 2025",
    text:
      "We needed a move-in clean on short notice near Winter Park. Floors, cabinets, and baths were spotless — exactly what we wanted before unpacking boxes.",
  },
  {
    id: "8",
    author: "Rachel H.",
    rating: 5,
    date: "Jun 2025",
    text:
      "Friendly, respectful of our home, and the whole place just felt lighter afterward. Guests even commented on how nice the rental smelled.",
  },
];
