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
        <div className="mx-auto w-full max-w-6xl px-4 py-6 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
          <p>
            &copy; {year} {businessInfo.name}. All rights reserved.
          </p>
          <p className="mt-1 text-slate-400">Serving Orlando and surrounding areas.</p>
          <p className="mt-3 text-slate-400">
            Website Design by{" "}
            <a
              href="https://elevatedigitalstudios.net"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative font-medium text-gray-400 transition duration-300 hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 hover:drop-shadow-[0_0_6px_rgba(56,189,248,0.5)]"
            >
              Elevate Digital Co.
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
