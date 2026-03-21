import Link from "next/link";
import type { Metadata } from "next";
import { HeroSection } from "@/components/ui/HeroSection";
import { TrustBar } from "@/components/ui/TrustBar";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  faqs,
  services,
  testimonials,
  trustPoints,
  whyChooseUsPoints,
  galleryItems,
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
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex min-h-[58vh] w-full max-w-6xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dusty-blue">
            Holly&apos;s Glow Suds and Scents L.L.C.
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Professional Cleaning Services in Orlando, FL
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Reliable, detailed cleaning for homes, rentals, and move-ins
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Book Your Cleaning
            </Link>
            <a
              href="tel:+13215506592"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-navy"
            >
              321-550-6592
            </a>
          </div>
        </div>
      </section>
      <HeroSection />
      <TrustBar items={trustPoints} />

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services Overview"
            title="Cleaning Packages Built Around Your Home and Schedule"
            description="Choose from our core packages with transparent starting prices and flexible service options."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                featured={index === 1}
                showDetails={false}
              />
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-500">
            Prices listed are baseline estimates and may vary based on home size,
            condition, and specific cleaning needs.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Dependable Cleaning with a Detail-Driven Standard"
            description="Our process is built for consistent quality, clear communication, and a home that feels fresh every time."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUsPoints.map((point) => (
              <div
                key={point}
                className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="About Holly's Glow"
              title="Local Service, Elevated Experience"
              description="We help Orlando homeowners and hosts enjoy cleaner, more comfortable spaces with dependable scheduling, thoughtful service, and polished results."
            />
            <Link
              href="/about"
              className="mt-6 inline-flex rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Learn More
            </Link>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 to-cream p-8">
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
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Results Preview"
            title="Before and After Transformations"
            description="Explore sample transformations across kitchens, bathrooms, bedrooms, living spaces, and turnover cleanings."
          />
          <div className="mt-8">
            <GalleryGrid items={galleryItems.slice(0, 4)} />
          </div>
          <Link
            href="/gallery"
            className="mt-6 inline-flex rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-navy"
          >
            View Full Gallery
          </Link>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Orlando Clients Say"
            description="Real feedback from homeowners, families, and short-term rental hosts."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
          <Link
            href="/testimonials"
            className="mt-6 inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-navy"
          >
            Read More Reviews
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Quick Answers Before You Book"
            description="Common questions about areas served, supplies, scheduling, and what to expect."
          />
          <div className="mt-8">
            <FAQAccordion items={faqs.slice(0, 4)} />
          </div>
          <Link
            href="/faq"
            className="mt-6 inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-navy"
          >
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
