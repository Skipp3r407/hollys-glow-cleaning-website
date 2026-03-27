import Image from "next/image";
import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import {
  interactiveHover,
  interactiveHoverMedia,
} from "@/components/ui/interactiveStyles";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Our Orlando Cleaning Team",
  description:
    "Meet Holly's Glow Suds and Scents L.L.C.—our story, team, and mission for reliable, eco-conscious cleaning in Orlando.",
  keywords: ["residential cleaning Orlando", "trusted cleaners Orlando"],
  path: "/about",
});

/** Placeholder photos — swap for files in /public/images/about/ when available. */
const storyHeroImage = {
  src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80",
  alt: "Bright kitchen with marble surfaces and a welcoming home feel",
};

const team = [
  {
    name: "Holly McNulty",
    role: "Founder & Director",
    bio: "Providing reliable, detail-focused cleaning services with care, consistency, and eco-friendly products families can trust.",
    image: {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      alt: "Holly McNulty, Founder and Director",
    },
  },
  {
    name: "Joel Harrison",
    role: "Senior Cleaner",
    bio: "Trained, background-checked, and committed to delivering high-quality results.",
    image: {
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      alt: "Joel Harrison, Senior Cleaner",
    },
  },
] as const;

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
      <div className="border-b border-slate-200/80 bg-slate-100/90 py-6 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-600 sm:text-xs sm:tracking-[0.32em]">
          Holly&apos;s Glow Suds and Scents L.L.C.
        </p>
      </div>

      <section className="bg-cream py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
            <RevealOnScroll variant="slide-left" className="lg:col-span-5">
              <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-navy sm:text-5xl">
                Our Story
              </h1>
            </RevealOnScroll>
            <RevealOnScroll variant="slide-right" className="lg:col-span-7">
              <p className="text-base leading-8 text-slate-700 sm:text-lg sm:leading-8">
                Holly&apos;s Glow Suds and Scents L.L.C. was founded with a simple
                goal: to provide reliable, detail-focused cleaning services families
                can trust. We proudly serve Orlando, Florida, using kid- and
                pet-safe, eco-friendly products to create clean, healthy spaces.
                Every home is treated with care, consistency, and respect — because
                a clean home should feel good in every way.
              </p>
            </RevealOnScroll>
          </div>

          <RevealOnScroll variant="fade-up" className="mt-10 sm:mt-12">
            <div
              className={cn(
                "relative aspect-[21/10] overflow-hidden rounded-2xl bg-slate-200 shadow-lg shadow-slate-900/10 sm:aspect-[2/1] lg:aspect-[21/9]",
                interactiveHoverMedia,
              )}
            >
              <Image
                src={storyHeroImage.src}
                alt={storyHeroImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1152px) 100vw, 1152px"
                priority
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll variant="fade-up">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-navy sm:text-3xl">
              Our Team
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              The people behind every detail-focused visit.
            </p>
          </RevealOnScroll>

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
            {team.map((member, index) => (
              <RevealOnScroll
                key={member.name}
                variant="fade-up"
                delay={index * 90}
              >
                <article
                  className={cn(
                    "group flex flex-col gap-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-stretch sm:p-6",
                    interactiveHover,
                  )}
                >
                  <div className="relative mx-auto aspect-square w-full max-w-[280px] shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:mx-0 sm:h-56 sm:w-56 sm:max-w-none">
                    <Image
                      src={member.image.src}
                      alt={member.image.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-center sm:pl-1">
                    <h3 className="text-xl font-bold text-navy transition group-hover:text-dusty-blue">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-dusty-blue">
                      {member.role}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-700">
                      {member.bio}
                    </p>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <SectionHeading
              eyebrow="Why We Are Different"
              title="Elevated Service with Local, Personal Care"
              description="We combine polished presentation with small-business attention, so every client feels seen and supported."
            />
          </RevealOnScroll>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <RevealOnScroll key={value.title} variant="fade-up" delay={index * 70}>
                <article
                  className={cn(
                    "group h-full rounded-xl border border-slate-200 bg-white p-5",
                    interactiveHover,
                  )}
                >
                  <h3 className="text-lg font-semibold text-navy transition group-hover:text-dusty-blue">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {value.description}
                  </p>
                </article>
              </RevealOnScroll>
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
