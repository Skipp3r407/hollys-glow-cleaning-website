import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Client Testimonials | Orlando Cleaning Service",
  description:
    "Read what Orlando homeowners and Airbnb hosts say about Holly's Glow cleaning service and detail-focused results.",
  keywords: ["residential cleaning Orlando reviews", "Airbnb cleaning Orlando"],
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll variant="fade-up">
            <SectionHeading
              eyebrow="Testimonials"
              title="Trusted by Orlando Homeowners and Hosts"
              description="We focus on dependable service, clear communication, and polished results clients can feel immediately."
            />
          </RevealOnScroll>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <RevealOnScroll
                key={testimonial.name}
                variant="fade-up"
                delay={index * 65}
              >
                <TestimonialCard testimonial={testimonial} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Become Our Next Happy Client?"
        text="Request your quote or book your cleaning today and experience reliable, detail-driven service."
      />
    </>
  );
}
