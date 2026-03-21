import type { Metadata } from "next";
import { businessInfo } from "@/lib/site-data";

export const siteUrl = "https://hollysglow.com";

export function pageMetadata({
  title,
  description,
  keywords = [],
  path = "/",
}: {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
}): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${siteUrl}${cleanPath === "/" ? "" : cleanPath}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: cleanPath,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: businessInfo.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessInfo.name,
    image: `${siteUrl}/og-image.jpg`,
    url: siteUrl,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    areaServed: businessInfo.serviceArea,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: businessInfo.addressLocality,
      addressRegion: businessInfo.addressRegion,
      addressCountry: "US",
    },
    sameAs: ["https://www.facebook.com/"],
    serviceType: [
      "House cleaning Orlando FL",
      "Residential cleaning Orlando",
      "Move out cleaning Orlando",
      "Airbnb cleaning Orlando",
      "Deep cleaning Orlando",
      "Post-construction cleaning Orlando",
    ],
  };
}

export function getFaqSchema(
  questions: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
