import Link from "next/link";
import type { ServiceItem } from "@/lib/site-data";
import { btnPrimary } from "@/components/ui/buttonStyles";
import { interactiveHover, interactiveHoverGold } from "@/components/ui/interactiveStyles";
import { cn } from "@/lib/cn";

type ServiceCardProps = {
  service: ServiceItem;
  featured?: boolean;
  showDetails?: boolean;
};

export function ServiceCard({
  service,
  featured = false,
  showDetails = false,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group rounded-2xl border p-6 will-change-transform",
        featured
          ? cn(
              "border-gold/45 bg-white shadow-lg shadow-gold/15 ring-1 ring-gold/20",
              interactiveHoverGold,
            )
          : cn("border-slate-200 bg-white", interactiveHover),
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <h3
          className={cn(
            "text-xl font-bold text-navy transition",
            featured
              ? "group-hover:text-gold/90"
              : "group-hover:text-dusty-blue",
          )}
        >
          {service.name}
        </h3>
        <p
          className={cn(
            "rounded-full border border-transparent bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700 transition",
            featured
              ? "group-hover:bg-gold/20 group-hover:text-navy"
              : "group-hover:border-dusty-blue/25 group-hover:bg-dusty-blue/10 group-hover:text-navy",
          )}
        >
          {service.price}
        </p>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{service.shortSummary}</p>

      {showDetails ? (
        <div className="mt-5 space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Who it&apos;s for
            </p>
            <p className="mt-2 text-sm text-slate-700">{service.whoItsFor}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              What&apos;s included
            </p>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              {service.included.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Ideal use cases
            </p>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              {service.idealUseCases.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      <div className="mt-6">
        <Link href="/contact" className={btnPrimary}>
          Book This Service
        </Link>
      </div>
    </article>
  );
}
