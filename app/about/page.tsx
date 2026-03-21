import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Our Orlando Cleaning Team",
  description:
    "Learn about Holly's Glow Suds and Scents L.L.C., our mission, and the values behind our reliable residential and Airbnb cleaning service in Orlando.",
  keywords: ["residential cleaning Orlando", "trusted cleaners Orlando"],
  path: "/about",
});

const values = [
  {
    title: "Reliability",
    description:
      "We show up on schedule, communicate clearly, and deliver consistent quality.",
  },
  {
    title: "Detail",
    description:
      "We focus on the finishing touches that make a home feel truly refreshed.",
  },
  {
    title: "Professionalism",
    description:
      "Respectful service, polished results, and a process that feels easy from booking to completion.",
  },
  {
    title: "Comfort",
    description:
      "Our goal is to leave every space cleaner, calmer, and easier to enjoy.",
  },
  {
    title: "Consistency",
    description:
      "One-time cleanings and recurring schedules receive the same attention and care.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About Holly's Glow"
            title="A Local Orlando Cleaning Company Built on Trust"
            description="Holly's Glow Suds and Scents L.L.C. was founded to give busy homeowners and rental hosts a dependable way to maintain a clean, welcoming space without the stress."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-bold text-navy">Our Story</h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                We started with one clear vision: professional cleaning should
                feel both high-quality and personal. Every home is different, so
                every visit is approached with care, consistency, and a detail-first
                mindset.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                Today, we proudly serve Orlando and surrounding areas with services
                designed for modern households, families, and short-term rental
                properties.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-bold text-navy">Our Mission</h2>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                To provide dependable, detail-oriented cleaning that helps clients
                reclaim time, reduce stress, and come home to a space that feels
                fresh, comfortable, and cared for.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                Whether you need recurring home service or Airbnb turnover support,
                our focus is simple: professional results you can count on.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why We Are Different"
            title="Elevated Service with Local, Personal Care"
            description="We combine polished presentation with small-business attention, so every client feels seen and supported."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="text-lg font-semibold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Experience the Holly's Glow Difference"
        text="Book your first service and see why Orlando homeowners and hosts trust us for dependable, detail-focused cleaning."
      />
    </>
  );
}
