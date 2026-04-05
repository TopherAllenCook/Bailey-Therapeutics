import Link from "next/link";
import {
  GraduationCap,
  ShieldCheck,
  Award,
  Users,
  FileText,
  Handshake,
  BookOpen,
  Star,
  Mail,
  ArrowRight,
} from "lucide-react";

/* ───────────────────────────────────────────
   Section 1 — Hero
   ─────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative bg-brand-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40 flex flex-col items-start">
        <h1 className="font-heading text-4xl font-bold leading-tight text-brand-charcoal sm:text-5xl lg:text-[56px] lg:leading-[1.1] max-w-2xl">
          I&rsquo;ve Been on the Other Side of the IEP Table.{" "}
          <span className="text-brand-teal">Now I&rsquo;m on Yours.</span>
        </h1>
        <p className="mt-6 font-body text-lg leading-relaxed text-brand-charcoal/70 max-w-xl">
          15 years as a school SLP and administrator taught me how the system
          works. Now I help parents navigate it.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-brand-teal px-7 py-3.5 font-sans text-sm font-semibold text-white tracking-wide hover:bg-brand-teal-dark transition-colors"
          >
            Book a Free Intro Call
          </Link>
          <Link
            href="/resources"
            className="inline-flex items-center justify-center rounded-sm border-2 border-brand-teal px-7 py-3.5 font-sans text-sm font-semibold text-brand-teal tracking-wide hover:bg-brand-teal hover:text-white transition-colors"
          >
            Browse Free Resources
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 2 — Trust Bar
   ─────────────────────────────────────────── */
const trustItems = [
  { icon: GraduationCap, label: "15 Years in Special Education" },
  { icon: ShieldCheck, label: "Licensed School Administrator" },
  { icon: Award, label: "Certified SLP" },
  { icon: Users, label: "100+ IEP Meetings Attended" },
];

function TrustBar() {
  return (
    <section className="bg-brand-sage/40">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <item.icon size={20} className="text-brand-teal shrink-0" />
              <span className="font-sans text-sm font-medium text-brand-charcoal">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 3 — How I Help (Service Cards)
   ─────────────────────────────────────────── */
const services = [
  {
    icon: FileText,
    title: "IEP Consultations",
    description:
      "Not sure if your child's IEP is right? Let's review it together and make a plan.",
    href: "/services",
  },
  {
    icon: Handshake,
    title: "Meeting Prep & Advocacy",
    description:
      "I'll prep you for your next IEP meeting and sit beside you (virtually or in person).",
    href: "/services",
  },
  {
    icon: BookOpen,
    title: "Tools & Guides",
    description:
      "Grab templates, checklists, and guides that make the process less overwhelming.",
    href: "/resources",
  },
];

function ServiceCards() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-teal mb-3">
          How I Help
        </p>
        <h2 className="font-sans text-3xl font-semibold text-brand-charcoal sm:text-[32px]">
          Advocacy that meets you where you are
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((svc) => (
            <Link
              key={svc.title}
              href={svc.href}
              className="group rounded-lg bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <svc.icon size={32} className="text-brand-teal mb-5" />
              <h3 className="font-sans text-xl font-semibold text-brand-charcoal mb-3">
                {svc.title}
              </h3>
              <p className="font-body text-base leading-relaxed text-brand-charcoal/70">
                {svc.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-brand-teal group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 4 — The Story
   ─────────────────────────────────────────── */
function StorySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Image placeholder */}
          <div className="aspect-[4/5] rounded-lg bg-brand-sage/30 flex items-center justify-center">
            <span className="font-sans text-sm text-brand-teal/50">
              Photo of Kelsi
            </span>
          </div>

          <div className="max-w-lg">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-teal mb-3">
              My Story
            </p>
            <h2 className="font-heading text-3xl font-bold text-brand-charcoal sm:text-4xl leading-tight">
              I Know What the School{" "}
              <span className="text-brand-coral">Isn&rsquo;t Telling You.</span>
            </h2>
            <p className="mt-6 font-body text-base leading-[1.7] text-brand-charcoal/70">
              For 15 years, I sat on the school side of the IEP table. I wrote
              the goals. I presented the data. I watched parents nod along, not
              because they agreed, but because they did not know they could push
              back.
            </p>
            <p className="mt-4 font-body text-base leading-[1.7] text-brand-charcoal/70">
              Now I sit on your side. I help parents understand what is actually
              in the IEP, what should be there, and how to advocate for the
              services their child deserves. Your gut feeling about your kid?
              Trust it. I will help you back it up.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand-teal hover:text-brand-teal-dark transition-colors"
            >
              Read My Full Story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 5 — Testimonials
   ─────────────────────────────────────────── */
const testimonials = [
  {
    quote:
      "Kelsi walked me through every line of my daughter's IEP. For the first time, I actually understood what was happening and what to ask for.",
    name: "Sarah M.",
    detail: "Parent of a 2nd grader",
  },
  {
    quote:
      "I went into that meeting terrified. Kelsi prepped me the night before and I walked out feeling like a completely different parent.",
    name: "James T.",
    detail: "Parent of a 5th grader",
  },
  {
    quote:
      "She has been on the other side. She knows exactly what the school is thinking, and she taught me how to respond.",
    name: "Michelle R.",
    detail: "Parent of a high schooler",
  },
];

function TestimonialStrip() {
  return (
    <section className="bg-brand-sage/30">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="text-center font-sans text-xs font-semibold uppercase tracking-widest text-brand-teal mb-3">
          From Parents Like You
        </p>
        <h2 className="text-center font-sans text-3xl font-semibold text-brand-charcoal sm:text-[32px] mb-14">
          What families are saying
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-lg bg-white p-8 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>
              <p className="font-body text-base leading-[1.7] text-brand-charcoal/80 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-sans text-sm font-semibold text-brand-charcoal">
                  {t.name}
                </p>
                <p className="font-body text-xs text-brand-charcoal/50">
                  {t.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 6 — Featured Free Resource
   ─────────────────────────────────────────── */
function FreeResource() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* PDF mockup placeholder */}
          <div className="aspect-[4/3] rounded-lg bg-white shadow-lg flex items-center justify-center border border-brand-charcoal/5">
            <div className="text-center">
              <FileText size={48} className="mx-auto text-brand-teal/40 mb-3" />
              <span className="font-sans text-sm text-brand-charcoal/40">
                IEP Meeting Cheat Sheet Preview
              </span>
            </div>
          </div>

          <div className="max-w-lg">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-coral mb-3">
              Free Download
            </p>
            <h2 className="font-heading text-3xl font-bold text-brand-charcoal sm:text-4xl leading-tight">
              The IEP Meeting Cheat Sheet
            </h2>
            <p className="mt-4 font-body text-base leading-[1.7] text-brand-charcoal/70">
              What to bring, what to ask, and what to watch for. This one-page
              guide will make you feel prepared before your next meeting.
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="First name"
                className="flex-1 rounded-sm border border-brand-charcoal/15 bg-white px-4 py-3 font-body text-sm text-brand-charcoal placeholder:text-brand-charcoal/40 focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
              />
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 rounded-sm border border-brand-charcoal/15 bg-white px-4 py-3 font-body text-sm text-brand-charcoal placeholder:text-brand-charcoal/40 focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
              />
              <button
                type="submit"
                className="rounded-sm bg-brand-coral px-6 py-3 font-sans text-sm font-semibold text-white tracking-wide hover:bg-brand-coral/90 transition-colors"
              >
                Send It
              </button>
            </form>
            <p className="mt-3 font-body text-xs text-brand-charcoal/40">
              No spam. Unsubscribe any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 7 — Newsletter CTA
   ─────────────────────────────────────────── */
function NewsletterCTA() {
  return (
    <section className="bg-brand-teal">
      <div className="mx-auto max-w-3xl px-6 py-20 lg:py-28 text-center">
        <Mail size={36} className="mx-auto text-white/60 mb-5" />
        <h2 className="font-sans text-3xl font-semibold text-white sm:text-[32px]">
          Get IEP Tips in Your Inbox Every Week
        </h2>
        <p className="mt-4 font-body text-base text-white/70 max-w-lg mx-auto">
          Short, actionable advice from someone who has been in the room.
          Join hundreds of parents who are learning to advocate with confidence.
        </p>
        <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full rounded-sm bg-white/10 border border-white/20 px-4 py-3 font-body text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <button
            type="submit"
            className="w-full sm:w-auto shrink-0 rounded-sm bg-brand-coral px-6 py-3 font-sans text-sm font-semibold text-white tracking-wide hover:bg-brand-coral/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Page
   ─────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServiceCards />
      <StorySection />
      <TestimonialStrip />
      <FreeResource />
      <NewsletterCTA />
    </>
  );
}
