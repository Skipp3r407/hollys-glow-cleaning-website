import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/lib/site-data";
import { getFaqSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cleaning Service FAQ | Orlando, FL",
  description:
    "Get answers about service areas, supplies, recurring schedules, Airbnb turnovers, move-in/move-out cleanings, and booking.",
  keywords: ["cleaning FAQ Orlando", "house cleaning Orlando FL"],
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={getFaqSchema(faqs)} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            eyebrow="Frequently Asked Questions"
            title="Everything You Need Before Booking"
            description="Quick answers to common questions from Orlando homeowners and short-term rental hosts."
          />
          <div className="mt-8">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="Still Have Questions?"
        text="Reach out and we will help you choose the right cleaning package for your home and schedule."
      />
    </>
  );
}
