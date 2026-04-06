import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Heart,
  Send,
} from "lucide-react";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact & Book a Call | Bailey Therapeutics",
  description:
    "Book a free 15-minute intro call with Kelsi Bailey. Ask questions, share your situation, and find out how Bailey Therapeutics can help your family.",
};

/* ───────────────────────────────────────────
   Section 1 — Hero
   ─────────────────────────────────────────── */
function ContactHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80"
        alt="Warm meeting space"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/95 via-brand-charcoal/80 to-brand-charcoal/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-sage mb-6">
            Get in Touch
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
            Let&rsquo;s start with a{" "}
            <span className="text-brand-coral">conversation.</span>
          </h1>
          <p className="mt-6 font-body text-lg text-white/75 max-w-xl leading-relaxed animate-fade-in-up delay-100">
            No sales pitch. No pressure. Just 15 minutes to talk about where
            you are and how I can help.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 2 — Contact Info + Form
   ─────────────────────────────────────────── */
const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@baileytherapeutics.com",
    href: "mailto:hello@baileytherapeutics.com",
  },
  {
    icon: Phone,
    label: "Free Intro Call",
    value: "Book 15 minutes",
    href: "#booking",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Utah (serving families nationwide)",
    href: null,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

function ContactSection() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left column — Info */}
          <div className="lg:col-span-5">
            <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-teal mb-4">
              Reach Out
            </p>
            <h2 className="font-heading text-3xl font-bold text-brand-charcoal sm:text-[38px] sm:leading-[1.15]">
              I would love to hear from you.
            </h2>
            <p className="mt-5 font-body text-[16px] leading-[1.8] text-brand-charcoal/65 max-w-md">
              Whether you have a quick question or you are ready to book,
              send me a message. I read every single one and I will get back
              to you within 24 hours.
            </p>

            <div className="mt-10 space-y-5">
              {contactDetails.map((item) => {
                const inner = (
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-brand-teal" />
                    </div>
                    <div>
                      <p className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-charcoal/40 mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-sans text-base font-medium text-brand-charcoal">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block rounded-xl p-4 -ml-4 hover:bg-white/60 transition-colors"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="rounded-xl p-4 -ml-4"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>

            {/* Small reassurance */}
            <div className="mt-10 p-5 rounded-xl bg-brand-teal/5 border border-brand-teal/10">
              <div className="flex items-start gap-3">
                <Heart size={18} className="text-brand-coral shrink-0 mt-0.5" />
                <p className="font-body text-sm text-brand-charcoal/65 leading-relaxed">
                  Not sure what to say? That is completely okay. Just tell me
                  your child&rsquo;s age, what kind of meeting is coming up, and
                  what feels hard right now. I will take it from there.
                </p>
              </div>
            </div>
          </div>

          {/* Right column — Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white shadow-xl shadow-brand-charcoal/5 p-8 sm:p-10">
              <h3 className="font-sans text-lg font-semibold text-brand-charcoal mb-1">
                Send a message
              </h3>
              <p className="font-body text-sm text-brand-charcoal/50 mb-8">
                Fill out the form below and I will be in touch within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 3 — Calendly Booking Embed Placeholder
   ─────────────────────────────────────────── */
function BookingSection() {
  return (
    <section id="booking" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:py-32 text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-teal mb-4">
          Book a Call
        </p>
        <h2 className="font-heading text-3xl font-bold text-brand-charcoal sm:text-4xl leading-tight">
          Schedule your free intro call
        </h2>
        <p className="mt-4 font-body text-base text-brand-charcoal/60 max-w-lg mx-auto leading-relaxed">
          Pick a time that works for you. 15 minutes, no obligation. Just a
          real conversation about your family&rsquo;s needs.
        </p>

        {/* Calendly placeholder */}
        <div className="mt-12 rounded-2xl border-2 border-dashed border-brand-charcoal/10 bg-brand-cream/50 p-16 flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center mb-5">
            <Phone size={28} className="text-brand-teal" />
          </div>
          <p className="font-sans text-base font-semibold text-brand-charcoal mb-2">
            Calendly Booking Widget
          </p>
          <p className="font-body text-sm text-brand-charcoal/45 max-w-sm">
            Your Calendly embed will go here. Once you have a Calendly link,
            replace this placeholder with the embed script.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand-teal hover:text-brand-teal-dark transition-colors"
          >
            Set up Calendly <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 4 — Bottom CTA
   ─────────────────────────────────────────── */
function ContactCTA() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80"
        alt="School hallway"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-teal/90" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 lg:py-28 text-center">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          You do not have to figure this out alone.
        </h2>
        <p className="mt-5 font-body text-base text-white/70 max-w-xl mx-auto leading-relaxed">
          Every parent who reaches out tells me the same thing: &ldquo;I wish I
          had found you sooner.&rdquo; Today is sooner than tomorrow.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md bg-brand-coral px-10 py-4 font-sans text-sm font-semibold text-white tracking-wide hover:bg-brand-coral-dark transition-colors shadow-lg shadow-brand-coral/25"
          >
            View Services & Pricing
          </Link>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-white/80 hover:text-white transition-colors group"
          >
            Browse Free Resources{" "}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Page
   ─────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <BookingSection />
      <ContactCTA />
    </>
  );
}
