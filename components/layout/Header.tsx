"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { businessInfo, navLinks } from "@/lib/site-data";
import { btnNavCta, btnNavOutline } from "@/components/ui/buttonStyles";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300 ease-out",
        scrolled
          ? "border-slate-200/90 bg-white/95 shadow-md shadow-slate-900/[0.06] backdrop-blur-md"
          : "border-transparent bg-cream/75 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-dusty-blue transition group-hover:text-navy">
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
                className={cn(
                  "relative text-sm font-medium transition duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-navy after:transition after:duration-300 hover:after:scale-x-100",
                  active
                    ? "text-navy after:scale-x-100"
                    : "text-slate-600 hover:text-navy",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={businessInfo.phoneHref} className={btnNavOutline}>
            Call Now
          </a>
          <Link href="/contact" className={btnNavCta}>
            Book Your Cleaning
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex rounded-xl p-2.5 text-slate-700 transition hover:bg-white/60 active:scale-95 lg:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-x-0 bottom-0 top-16 z-[55] bg-slate-900/45 backdrop-blur-[2px] transition-opacity lg:hidden"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu overlay"
          />
          <nav
            className="fixed left-0 right-0 top-16 z-[56] max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-slate-200/80 bg-white/98 px-4 pb-6 pt-2 shadow-2xl shadow-slate-900/10 backdrop-blur-xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link, index) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ animationDelay: `${80 + index * 45}ms` }}
                  className={cn(
                    "nav-link-stagger block rounded-xl px-3 py-3 text-base font-medium transition",
                    active
                      ? "bg-slate-100 text-navy"
                      : "text-slate-700 hover:bg-slate-50",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-4 flex gap-2">
              <a
                href={businessInfo.phoneHref}
                className="flex-1 rounded-full border border-slate-300 py-3 text-center text-sm font-semibold text-slate-700 transition hover:bg-slate-50 active:scale-[0.98]"
              >
                Call
              </a>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-full bg-navy py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-slate-800 active:scale-[0.98]"
              >
                Book
              </Link>
            </div>
          </nav>
        </>
      ) : null}
    </header>
  );
}
