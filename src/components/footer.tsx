import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-heading text-2xl font-bold text-white">
              Bailey Therapeutics
            </p>
            <p className="mt-3 font-body text-sm text-white/60 leading-relaxed max-w-xs">
              Helping parents of special education students understand their
              rights and advocate for their children.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-gold mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-white/70 hover:text-brand-sage transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-gold mb-4">
              Work With Me
            </p>
            <p className="font-body text-sm text-white/60 leading-relaxed mb-5">
              Ready to walk into your next IEP meeting with confidence?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-brand-coral px-6 py-3 font-sans text-sm font-semibold text-white tracking-wide hover:bg-brand-coral/90 transition-colors"
            >
              Book a Free Intro Call
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/40">
            &copy; {new Date().getFullYear()} Bailey Therapeutics. All rights
            reserved.
          </p>
          <p className="font-body text-xs text-white/40">
            Kelsi Bailey is an educational advocate, not an attorney. Services
            do not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
