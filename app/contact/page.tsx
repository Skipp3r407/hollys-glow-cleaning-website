import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { businessInfo } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Book Your Cleaning | Orlando, FL",
  description:
    "Book residential, Airbnb, move-out, and deep cleaning services in Orlando. Call, email, or submit a booking request online.",
  keywords: ["book house cleaning Orlando", "move out cleaning Orlando"],
  path: "/contact",
});

const hours = [
  "Monday-Friday: 8:00 AM - 6:00 PM",
  "Saturday: 9:00 AM - 4:00 PM",
  "Sunday: By request",
];

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact / Booking"
          title="Book Your Cleaning with Confidence"
          description="Fast response, easy scheduling, and dependable service for Orlando homes and rental properties."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <ContactForm />

          <aside className="space-y-5">
            <article className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-bold text-navy">Quick Contact</h2>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  <a href={businessInfo.phoneHref} className="text-navy underline">
                    {businessInfo.phone}
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a href={businessInfo.emailHref} className="text-navy underline">
                    {businessInfo.email}
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Service Area:</span>{" "}
                  {businessInfo.serviceArea}
                </p>
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-bold text-navy">Business Hours</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {hours.map((hour) => (
                  <li key={hour}>{hour}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-bold text-navy">Map Placeholder</h2>
              <div className="mt-3 flex h-44 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 text-sm text-slate-600">
                Orlando, FL Service Area Map
              </div>
            </article>

            <article className="rounded-2xl border border-gold/30 bg-gold/10 p-5">
              <h2 className="text-lg font-bold text-navy">Booking Reassurance</h2>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                We confirm details before your appointment and tailor each visit to
                your space, preferences, and schedule.
              </p>
            </article>
          </aside>
        </div>
      </div>
    </section>
  );
}
