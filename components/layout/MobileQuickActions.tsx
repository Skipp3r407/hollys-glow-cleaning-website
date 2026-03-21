import Link from "next/link";
import { businessInfo } from "@/lib/site-data";

export function MobileQuickActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur-sm lg:hidden">
      <div className="mx-auto flex max-w-6xl gap-2">
        <a
          href={businessInfo.phoneHref}
          className="flex-1 rounded-full border border-slate-300 px-3 py-2 text-center text-sm font-semibold text-slate-700"
        >
          Call
        </a>
        <a
          href={businessInfo.emailHref}
          className="flex-1 rounded-full border border-slate-300 px-3 py-2 text-center text-sm font-semibold text-slate-700"
        >
          Email
        </a>
        <Link
          href="/contact"
          className="flex-1 rounded-full bg-navy px-3 py-2 text-center text-sm font-semibold text-white"
        >
          Book
        </Link>
      </div>
    </div>
  );
}
