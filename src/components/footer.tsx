import Link from "next/link";
import { Heart } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "Facebook" },
  { href: "#", label: "Substack" },
];

export function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-brand-teal flex items-center justify-center">
                <span className="font-heading text-sm font-bold text-white leading-none">
                  BT
                </span>
              </div>
              <span className="font-heading text-xl font-bold text-white">
                Bailey Therapeutics
              </span>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed max-w-sm">
              Helping parents of special education students understand their
              rights and advocate for their children. Because every parent
              deserves a seat at the table.
            </p>
            <div className="mt-6 flex items-center gap-5">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans text-xs font-medium uppercase tracking-widest text-white/40 hover:text-brand-sage transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[3px] text-brand-gold mb-5">
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-white/55 hover:text-brand-sage transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CTA */}
          <div className="md:col-span-4">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[3px] text-brand-gold mb-5">
              Work With Me
            </p>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-6">
              Ready to walk into your next IEP meeting with confidence? Let&rsquo;s
              start with a conversation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-brand-coral px-7 py-3.5 font-sans text-sm font-semibold text-white tracking-wide hover:bg-brand-coral-dark transition-colors shadow-md shadow-brand-coral/20"
            >
              Book a Free Intro Call
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/30 flex items-center gap-1">
            &copy; {new Date().getFullYear()} Bailey Therapeutics. Made with{" "}
            <Heart size={10} className="text-brand-coral" /> in Utah.
          </p>
          <p className="font-body text-xs text-white/30 text-center sm:text-right max-w-md">
            Kelsi Bailey is an educational advocate, not an attorney. Services
            do not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
