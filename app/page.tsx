import Link from "next/link";
import type { Metadata } from "next";
import { btnPrimary, btnSecondary } from "@/components/ui/buttonStyles";
import { CTASection } from "@/components/ui/CTASection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { HeroSection } from "@/components/ui/HeroSection";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";
import { TrustBar } from "@/components/ui/TrustBar";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  faqs,
  galleryItems,
  services,
  trustPoints,
  whyChooseUsPoints,
} from "@/lib/site-data";
import { getLocalBusinessSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "House Cleaning Orlando FL",
  description:
    "Book trusted house cleaning in Orlando, FL for recurring home care, deep cleaning, Airbnb turnovers, move-out service, and post-construction cleanup.",
  keywords: [
    "house cleaning Orlando FL",
    "residential cleaning Orlando",
    "Airbnb cleaning Orlando",
    "deep cleaning Orlando",
  ],
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={getLocalBusinessSchema()} />
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white via-cream/50 to-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-dusty-blue/[0.06] to-transparent" />
        <div className="relative mx-auto flex min-h-[58vh] w-full max-w-6xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="hero-entrance-1 text-sm font-semibold uppercase tracking-[0.2em] text-dusty-blue">
            Holly&apos;s Glow Suds and Scents L.L.C.
          </p>
          <h1 className="hero-entrance-2 mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Professional Cleaning Services in Orlando, FL
          </h1>
          <p className="hero-entrance-3 mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Reliable, detail-oriented cleaning for homes, rentals, move-ins,
            move-outs, and post-construction refreshes.
          </p>
          <div className="hero-entrance-4 mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className={btnPrimary}>
              Book Your Cleaning
            </Link>
            <a href="tel:+13215506592" className={btnSecondary}>
              Call 321-550-6592
            </a>
          </div>
        </div>
      </section>
      <HeroSection />
      <TrustBar items={trustPoints} />

      <section className="section-surface-alt section-fade-edge relative py-16">
        <div className="relative z-[1] mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll variant="fade-up">
            <SectionHeading
              eyebrow="Services Overview"
              title="Cleaning Packages Built Around Your Home and Schedule"
              description="Choose from our core packages with transparent starting prices and flexible service options."
            />
          </RevealOnScroll>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <RevealOnScroll
                key={service.slug}
                variant="fade-up"
                delay={index * 85}
              >
                <ServiceCard
                  service={service}
                  featured={index === 1}
                  showDetails={false}
                />
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll variant="fade-in">
            <p className="mt-5 text-sm text-slate-500">
              Prices listed are baseline estimates and may vary based on home
              size, condition, and specific cleaning needs.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll variant="slide-right">
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Dependable Cleaning with a Detail-Driven Standard"
              description="Our process is built for consistent quality, clear communication, and a home that feels fresh every time."
            />
          </RevealOnScroll>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUsPoints.map((point, index) => (
              <RevealOnScroll
                key={point}
                variant="fade-up"
                delay={index * 75}
              >
                <div className="h-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-dusty-blue/25 hover:shadow-lg">
                  {point}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <RevealOnScroll variant="slide-left">
            <div>
              <SectionHeading
                eyebrow="About Holly's Glow"
                title="Local Service, Elevated Experience"
                description="We help Orlando homeowners and hosts enjoy cleaner, more comfortable spaces with dependable scheduling, thoughtful service, and polished results."
              />
              <Link href="/about" className={`${btnPrimary} mt-6`}>
                Learn More
              </Link>
            </div>
          </RevealOnScroll>
          <RevealOnScroll variant="slide-right">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 to-cream p-8 shadow-inner transition duration-500 hover:border-gold/20 hover:shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Brand Promise
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <li>- Reliable arrivals and clear communication.</li>
                <li>- Professional care with attention to detail.</li>
                <li>- Flexible support for homes and short-term rentals.</li>
                <li>- A polished finish you can see and feel.</li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-surface-alt py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll variant="fade-up">
            <SectionHeading
              eyebrow="Results Preview"
              title="Before and After Transformations"
              description="Explore sample transformations across kitchens, bathrooms, bedrooms, living spaces, and turnover cleanings."
            />
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" delay={100}>
            <div className="mt-8">
              <GalleryGrid items={galleryItems.slice(0, 4)} />
            </div>
          </RevealOnScroll>
          <RevealOnScroll variant="fade-in">
            <Link href="/gallery" className={`${btnSecondary} mt-6`}>
              View Full Gallery
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <ReviewsSection />

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll variant="slide-left">
            <SectionHeading
              eyebrow="FAQ"
              title="Quick Answers Before You Book"
              description="Common questions about areas served, supplies, scheduling, and what to expect."
            />
          </RevealOnScroll>
          <RevealOnScroll variant="fade-up" delay={80}>
            <div className="mt-8">
              <FAQAccordion items={faqs.slice(0, 4)} />
            </div>
          </RevealOnScroll>
          <Link href="/faq" className={`${btnSecondary} mt-6 inline-flex`}>
            View Full FAQ
          </Link>
        </div>
      </section>

      <CTASection
        title="Ready for a Cleaner, Brighter Home?"
        text="Book your cleaning today and get dependable service tailored to your home, rental property, and schedule."
      />
    </>
  );
}
