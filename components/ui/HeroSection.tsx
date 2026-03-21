import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { businessInfo } from "@/lib/site-data";

const trustBadges = [
  "Licensed & Insured",
  "Orlando Area Service",
  "Residential & Airbnb Cleaning",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-cream to-white">
      <div className="pointer-events-none absolute -left-20 top-20 h-56 w-56 rounded-full bg-dusty-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-56 w-56 rounded-full bg-gold/15 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 pb-16 pt-16 sm:px-6 md:pb-20 md:pt-20 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dusty-blue">
            Holly&apos;s Glow Suds and Scents L.L.C.
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Come Home to a Fresh, Glowing Space.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 sm:text-lg">
            Premium residential and Airbnb cleaning in Orlando with dependable
            scheduling, careful detail work, and service tailored to your home.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Book Your Cleaning
            </Link>
            <a
              href={businessInfo.phoneHref}
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-navy"
            >
              Call Now
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <li
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700"
              >
                <CheckCircle2 size={14} className="text-sage" />
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-300/40 md:p-6">
          <div className="rounded-2xl bg-slate-100 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Signature Packages
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { name: "Glow Basic", price: "$140" },
                { name: "Glow Deep", price: "$250" },
                { name: "Glow Air", price: "$130" },
                { name: "Glow Move", price: "$350" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3"
                >
                  <p className="text-sm font-semibold text-navy">{item.name}</p>
                  <p className="mt-1 text-sm text-slate-600">Starting at {item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
