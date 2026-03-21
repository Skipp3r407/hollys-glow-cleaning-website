import Link from "next/link";
import { businessInfo } from "@/lib/site-data";

type CTASectionProps = {
  title: string;
  text: string;
  compact?: boolean;
};

export function CTASection({ title, text, compact = false }: CTASectionProps) {
  return (
    <section className={compact ? "" : "py-16"}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy px-6 py-10 text-white sm:px-10">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
            {text}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy transition hover:bg-slate-100"
            >
              Book Your Cleaning
            </Link>
            <a
              href={businessInfo.phoneHref}
              className="rounded-full border border-slate-300/50 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Call {businessInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
