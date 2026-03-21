import type { Metadata } from "next";
import { CTASection } from "@/components/ui/CTASection";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryItems } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Before and After Cleaning Gallery",
  description:
    "View sample before-and-after cleaning transformations for kitchens, bathrooms, bedrooms, living areas, move-out cleans, and Airbnb refreshes.",
  keywords: ["deep cleaning Orlando", "Airbnb cleaning Orlando"],
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Gallery / Results"
            title="See the Difference a Detailed Clean Makes"
            description="These sample placeholders are ready to be replaced with your real before-and-after photos."
          />
          <div className="mt-8">
            <GalleryGrid items={galleryItems} />
          </div>
        </div>
      </section>

      <CTASection
        title="Want Results Like These in Your Home?"
        text="Book your service and let us help you create a cleaner, brighter, guest-ready space."
      />
    </>
  );
}
