"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/95 backdrop-blur-sm border-b border-brand-charcoal/5">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="font-heading text-2xl font-bold text-brand-teal">
          Bailey Therapeutics
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium text-brand-charcoal hover:text-brand-teal transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center rounded-sm bg-brand-teal px-5 py-2.5 font-sans text-sm font-semibold text-white tracking-wide hover:bg-brand-teal-dark transition-colors"
          >
            Book a Call
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-brand-charcoal"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-brand-charcoal/5 bg-brand-cream px-6 py-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-sans text-base font-medium text-brand-charcoal hover:text-brand-teal transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-sm bg-brand-coral px-5 py-3 font-sans text-sm font-semibold text-white tracking-wide hover:bg-brand-coral/90 transition-colors"
            >
              Book a Free Intro Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
