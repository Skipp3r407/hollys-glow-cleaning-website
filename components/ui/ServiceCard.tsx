import Link from "next/link";
import type { ServiceItem } from "@/lib/site-data";

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
      className={`rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        featured
          ? "border-gold/40 bg-white shadow-lg shadow-gold/10"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-xl font-bold text-navy">{service.name}</h3>
        <p className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
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
        <Link
          href="/contact"
          className="inline-flex rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Book This Service
        </Link>
      </div>
    </article>
  );
}
