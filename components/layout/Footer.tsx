import Link from "next/link";
import { businessInfo, navLinks } from "@/lib/site-data";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dusty-blue">
            {businessInfo.shortName}
          </p>
          <h2 className="mt-2 max-w-xs text-xl font-bold text-navy">
            Clean, comfortable homes with reliable local service.
          </h2>
          <p className="mt-3 text-sm text-slate-600">{businessInfo.serviceArea}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-700 transition hover:text-navy"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-700">
            <li>
              <a href={businessInfo.phoneHref} className="transition hover:text-navy">
                {businessInfo.phone}
              </a>
            </li>
            <li>
              <a href={businessInfo.emailHref} className="transition hover:text-navy">
                {businessInfo.email}
              </a>
            </li>
            <li>Orlando, FL</li>
            <li>
              <a href="https://www.facebook.com/" className="transition hover:text-navy">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 text-xs text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>
            &copy; {year} {businessInfo.name}. All rights reserved.
          </p>
          <p>Serving Orlando and surrounding areas.</p>
        </div>
        <div className="mx-auto mt-4 w-full max-w-6xl px-4 pb-6 text-center text-xs text-slate-400 sm:px-6 lg:px-8">
          Website Design by{" "}
          <a
            href="https://elevatedigitalstudios.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 transition hover:text-dusty-blue hover:underline"
          >
            Elevate Digital Co.
          </a>
        </div>
      </div>
    </footer>
  );
}
