import Link from "next/link";
import { businessInfo } from "@/lib/site-data";
import { btnOnDark, btnOutlineOnDark } from "@/components/ui/buttonStyles";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type CTASectionProps = {
  title: string;
  text: string;
  compact?: boolean;
};

export function CTASection({ title, text, compact = false }: CTASectionProps) {
  return (
    <section className={compact ? "" : "py-16"}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <RevealOnScroll variant="fade-up">
          <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-10 text-white shadow-xl shadow-navy/25 sm:px-10">
            <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-dusty-blue/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                {text}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className={btnOnDark}>
                  Book Your Cleaning
                </Link>
                <a href={businessInfo.phoneHref} className={btnOutlineOnDark}>
                  Call {businessInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
