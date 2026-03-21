import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { addOnServices, services } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cleaning Services and Pricing in Orlando",
  description:
    "Explore Glow Basic, Glow Deep, Glow Air, Glow Move, and Glow Post-Construction cleaning services in Orlando with baseline pricing and booking options.",
  keywords: [
    "residential cleaning Orlando",
    "move out cleaning Orlando",
    "Airbnb cleaning Orlando",
    "post-construction cleaning Orlando",
  ],
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Professional Cleaning Packages for Homes and Rentals"
            description="Choose the service level that fits your home, timeline, and cleaning goals."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                showDetails
                featured={index === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-navy">Add-On Services</h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Add-ons start from $20 and can be included with any package.
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {addOnServices.map((addOn) => (
                <li key={addOn}>- {addOn}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-gold/40 bg-white p-6 shadow-lg shadow-gold/10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Featured Package
            </p>
            <h3 className="mt-2 text-2xl font-bold text-navy">Glow Deep</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Our most popular reset for homes that need extra detail and buildup
              removal.
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-800">
              Baseline Price: $250
            </p>
          </article>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-600">
            Prices listed are baseline estimates and may vary based on home size,
            condition, and specific cleaning needs.
          </p>
        </div>
      </section>

      <CTASection
        title="Need Help Choosing the Right Package?"
        text="Tell us about your home and goals, and we will recommend the best service for your timeline and budget."
      />
    </>
  );
}
