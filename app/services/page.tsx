import type { Metadata } from "next";
import { Star } from "lucide-react";
import { CTASection } from "@/components/ui/CTASection";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import {
  interactiveHover,
  interactiveHoverGold,
  interactiveHoverMuted,
  interactiveHoverShell,
} from "@/components/ui/interactiveStyles";
import {
  addOnServices,
  services,
  servicesPageTestimonials,
  servicesPricingTableSummaries,
} from "@/lib/site-data";
import { cn } from "@/lib/cn";
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
  const addOnsList = addOnServices.join(", ");

  return (
    <>
      <div className="border-b border-slate-200/80 bg-slate-100/90 py-6 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-600 sm:text-xs sm:tracking-[0.32em]">
          Holly&apos;s Glow Suds and Scents L.L.C.
        </p>
      </div>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll variant="fade-up">
            <SectionHeading
              eyebrow="Services"
              title="Professional Cleaning Packages for Homes and Rentals"
              description="Choose the service level that fits your home, timeline, and cleaning goals."
            />
          </RevealOnScroll>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <RevealOnScroll
                key={service.slug}
                variant="fade-up"
                delay={index * 70}
              >
                <ServiceCard
                  service={service}
                  showDetails
                  featured={index === 1}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/80 bg-white py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll variant="fade-up">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Service Details &amp; Add-Ons
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              Below is a detailed breakdown of our GLOW cleaning packages and
              available add-on services.
            </p>
          </RevealOnScroll>

          <RevealOnScroll variant="fade-up" delay={80}>
            <div
              className={cn(
                "mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm",
                interactiveHoverShell,
              )}
            >
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/90">
                    <th className="whitespace-nowrap px-4 py-3.5 font-semibold text-navy sm:px-5">
                      Service Type
                    </th>
                    <th className="px-4 py-3.5 font-semibold text-navy sm:px-5">
                      Inclusions
                    </th>
                    <th className="whitespace-nowrap px-4 py-3.5 font-semibold text-navy sm:px-5">
                      Price (from)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {services.map((service) => (
                    <tr key={service.slug} className="bg-white">
                      <td className="px-4 py-4 align-top text-xs font-semibold uppercase tracking-wide text-navy sm:px-5 sm:text-sm">
                        {service.name}
                      </td>
                      <td className="px-4 py-4 align-top leading-relaxed sm:px-5">
                        {servicesPricingTableSummaries[service.slug] ??
                          service.shortSummary}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 align-top font-semibold text-dusty-blue sm:px-5">
                        {service.price}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-slate-50/50">
                    <td className="px-4 py-4 align-top text-xs font-semibold uppercase tracking-wide text-navy sm:px-5 sm:text-sm">
                      Add-on services
                    </td>
                    <td className="px-4 py-4 align-top leading-relaxed sm:px-5">
                      {addOnsList}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 align-top font-semibold text-dusty-blue sm:px-5">
                      From $20
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
          <article
            className={cn(
              "rounded-2xl border border-slate-200 bg-slate-50 p-6",
              interactiveHoverMuted,
            )}
          >
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

          <article
            className={cn(
              "rounded-2xl border border-gold/40 bg-white p-6 shadow-lg shadow-gold/10",
              interactiveHoverGold,
            )}
          >
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
          <p
            className={cn(
              "rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm italic text-slate-600",
              interactiveHover,
            )}
          >
            Prices listed are baseline estimates and may vary based on home size,
            condition, and specific cleaning needs.
          </p>
        </div>
      </section>

      <section className="bg-cream py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll variant="fade-up">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-navy sm:text-3xl">
              What Our Clients Are Saying
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Recent feedback from homeowners and clients.
            </p>
          </RevealOnScroll>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {servicesPageTestimonials.map((t, index) => (
              <RevealOnScroll
                key={t.name}
                variant="fade-up"
                delay={index * 70}
              >
                <article
                  className={cn(
                    "group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",
                    interactiveHover,
                  )}
                >
                  <div className="flex items-center gap-1 text-gold" aria-hidden>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-700">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-4 border-t border-slate-100 pt-4 transition group-hover:border-dusty-blue/15">
                    <p className="text-sm font-semibold text-navy transition group-hover:text-dusty-blue">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {t.date}
                      {t.source ? ` · ${t.source}` : ""}
                    </p>
                  </div>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need Help Choosing the Right Package?"
        text="Tell us about your home and goals, and we will recommend the best service for your timeline and budget."
      />
    </>
  );
}
