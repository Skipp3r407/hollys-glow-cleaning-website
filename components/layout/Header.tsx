"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { businessInfo, navLinks } from "@/lib/site-data";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dusty-blue">
            Holly&apos;s Glow
          </p>
          <p className="text-xs text-slate-600 transition-colors group-hover:text-slate-800">
            Orlando Residential & Airbnb Cleaning
          </p>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-navy"
                    : "text-slate-600 hover:text-navy focus-visible:text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={businessInfo.phoneHref}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            Call Now
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Book Your Cleaning
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex rounded-md p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-md px-2 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-slate-100 text-navy"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-3 flex gap-2 pb-1">
              <a
                href={businessInfo.phoneHref}
                className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-center text-sm font-semibold text-slate-700"
              >
                Call
              </a>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-full bg-navy px-4 py-2 text-center text-sm font-semibold text-white"
              >
                Book
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
