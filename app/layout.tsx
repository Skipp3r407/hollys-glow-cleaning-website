import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileQuickActions } from "@/components/layout/MobileQuickActions";
import { businessInfo } from "@/lib/site-data";
import { siteUrl } from "@/lib/seo";

const headingFont = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "House Cleaning Orlando FL | Holly's Glow Suds and Scents L.L.C.",
    template: "%s | Holly's Glow Suds and Scents L.L.C.",
  },
  description:
    "Trusted house cleaning in Orlando, FL for homes and short-term rentals. Book Glow Basic, Deep, Move, Airbnb, and Post-Construction cleaning services.",
  keywords: [
    "house cleaning Orlando FL",
    "residential cleaning Orlando",
    "Airbnb cleaning Orlando",
    "deep cleaning Orlando",
    "move out cleaning Orlando",
    "post-construction cleaning Orlando",
  ],
  applicationName: businessInfo.name,
  openGraph: {
    type: "website",
    siteName: businessInfo.name,
    title: "House Cleaning Orlando FL | Holly's Glow Suds and Scents L.L.C.",
    description:
      "Dependable residential and Airbnb cleaning with detail-focused care in Orlando and surrounding areas.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "House Cleaning Orlando FL | Holly's Glow Suds and Scents L.L.C.",
    description:
      "Dependable residential and Airbnb cleaning with detail-focused care in Orlando and surrounding areas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream text-slate-900">
        <div className="flex min-h-screen flex-col pb-20 lg:pb-0">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileQuickActions />
        </div>
      </body>
    </html>
  );
}
