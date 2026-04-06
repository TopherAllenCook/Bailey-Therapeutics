import Image from "next/image";
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
  Quote,
  Heart,
  CheckCircle,
} from "lucide-react";

/* ───────────────────────────────────────────
   Section 1 — Hero (with background image)
   ─────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1600&q=80"
        alt="Parent and child walking together"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/90 via-brand-charcoal/70 to-brand-charcoal/40" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 py-28 lg:px-10 lg:py-40">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-sage mb-6">
            Special Education Advocacy
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[60px] lg:leading-[1.08]">
            I&rsquo;ve Been on the Other Side of the IEP Table.{" "}
            <span className="text-brand-coral">Now I&rsquo;m on Yours.</span>
          </h1>
          <p className="mt-6 font-body text-lg leading-relaxed text-white/80 max-w-xl animate-fade-in-up delay-100">
            15 years as a school SLP and administrator taught me how the system
            works. Now I help parents navigate it.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-200">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-brand-coral px-8 py-4 font-sans text-sm font-semibold text-white tracking-wide hover:bg-brand-coral-dark transition-colors shadow-lg shadow-brand-coral/25"
            >
              Book a Free Intro Call
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/30 px-8 py-4 font-sans text-sm font-semibold text-white tracking-wide hover:bg-white/10 transition-colors"
            >
              Browse Free Resources
            </Link>
          </div>
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
    <section className="bg-brand-teal">
      <div className="mx-auto max-w-7xl px-6 py-5 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-14">
          {trustItems.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <item.icon size={18} className="text-brand-sage shrink-0" />
              <span className="font-sans text-[13px] font-medium text-white/90">
                {item.label}
              </span>
              {i < trustItems.length - 1 && (
                <span className="hidden lg:block ml-8 h-4 w-px bg-white/20" />
              )}
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
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
  },
  {
    icon: Handshake,
    title: "Meeting Prep & Advocacy",
    description:
      "I'll prep you for your next IEP meeting so you walk in confident and prepared.",
    href: "/services",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
  },
  {
    icon: BookOpen,
    title: "Tools & Guides",
    description:
      "Grab templates, checklists, and guides that make the process less overwhelming.",
    href: "/resources",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&q=80",
  },
];

function ServiceCards() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-teal mb-4">
            How I Help
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-charcoal sm:text-4xl leading-tight">
            Advocacy that meets you where you are
          </h2>
          <p className="mt-4 font-body text-base text-brand-charcoal/60 leading-relaxed">
            Whether you need a full IEP review or just someone to talk you through your next meeting, I have a path for you.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((svc) => (
            <Link
              key={svc.title}
              href={svc.href}
              className="group rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-teal/10">
                    <svc.icon size={20} className="text-brand-teal" />
                  </div>
                  <h3 className="font-sans text-lg font-semibold text-brand-charcoal">
                    {svc.title}
                  </h3>
                </div>
                <p className="font-body text-[15px] leading-relaxed text-brand-charcoal/65">
                  {svc.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-brand-teal group-hover:gap-3 transition-all duration-300">
                  Learn more <ArrowRight size={14} />
                </span>
              </div>
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
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Portrait photo */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Kelsi Bailey, special education advocate"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-brand-teal rounded-xl p-5 shadow-xl">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-sage mb-1">
                Experience
              </p>
              <p className="font-heading text-3xl font-bold text-white">15+</p>
              <p className="font-body text-sm text-white/70">Years in schools</p>
            </div>
          </div>

          <div className="max-w-lg lg:max-w-none">
            <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-teal mb-4">
              My Story
            </p>
            <h2 className="font-heading text-3xl font-bold text-brand-charcoal sm:text-[42px] sm:leading-[1.15]">
              I Know What the School{" "}
              <span className="text-brand-coral">Isn&rsquo;t Telling You.</span>
            </h2>
            <p className="mt-7 font-body text-[16px] leading-[1.75] text-brand-charcoal/70">
              For 15 years, I sat on the school side of the IEP table. I wrote
              the goals. I presented the data. I watched parents nod along, not
              because they agreed, but because they did not know they could push
              back.
            </p>
            <p className="mt-4 font-body text-[16px] leading-[1.75] text-brand-charcoal/70">
              Now I sit on your side. I help parents understand what is actually
              in the IEP, what should be there, and how to advocate for the
              services their child deserves. Your gut feeling about your kid?
              Trust it. I will help you back it up.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="flex items-center gap-2.5">
                <CheckCircle size={18} className="text-brand-teal shrink-0" />
                <span className="font-sans text-sm font-medium text-brand-charcoal">
                  IEP Review & Strategy
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle size={18} className="text-brand-teal shrink-0" />
                <span className="font-sans text-sm font-medium text-brand-charcoal">
                  Meeting Preparation
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle size={18} className="text-brand-teal shrink-0" />
                <span className="font-sans text-sm font-medium text-brand-charcoal">
                  Parent Coaching
                </span>
              </div>
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-2.5 font-sans text-sm font-semibold text-brand-teal hover:text-brand-teal-dark transition-colors group"
            >
              Read My Full Story{" "}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
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
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote:
      "I went into that meeting terrified. Kelsi prepped me the night before and I walked out feeling like a completely different parent.",
    name: "James T.",
    detail: "Parent of a 5th grader",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    quote:
      "She has been on the other side. She knows exactly what the school is thinking, and she taught me how to respond.",
    name: "Michelle R.",
    detail: "Parent of a high schooler",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

function TestimonialStrip() {
  return (
    <section className="bg-brand-charcoal relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-10 left-10 opacity-5">
        <Quote size={200} className="text-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="text-center mb-16">
          <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-gold mb-4">
            From Parents Like You
          </p>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            What families are saying
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    className="fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>
              <p className="font-body text-[15px] leading-[1.75] text-white/80 mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-white">
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-white/50">
                    {t.detail}
                  </p>
                </div>
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
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* PDF mockup */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white border border-brand-charcoal/5">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                alt="IEP Meeting preparation checklist"
                fill
                className="object-cover opacity-20"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
                <div className="w-16 h-16 rounded-full bg-brand-coral/10 flex items-center justify-center mb-5">
                  <FileText size={28} className="text-brand-coral" />
                </div>
                <p className="font-heading text-2xl font-bold text-brand-charcoal text-center">
                  The IEP Meeting Cheat Sheet
                </p>
                <p className="mt-2 font-body text-sm text-brand-charcoal/50 text-center">
                  Free PDF Download
                </p>
                <div className="mt-6 flex items-center gap-2">
                  <CheckCircle size={14} className="text-brand-teal" />
                  <span className="font-body text-xs text-brand-charcoal/60">
                    What to bring
                  </span>
                  <CheckCircle size={14} className="text-brand-teal ml-3" />
                  <span className="font-body text-xs text-brand-charcoal/60">
                    What to ask
                  </span>
                  <CheckCircle size={14} className="text-brand-teal ml-3" />
                  <span className="font-body text-xs text-brand-charcoal/60">
                    What to watch for
                  </span>
                </div>
              </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-sage/30 rounded-full -z-10" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-brand-coral/20 rounded-full -z-10" />
          </div>

          <div className="max-w-lg">
            <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-coral mb-4">
              Free Download
            </p>
            <h2 className="font-heading text-3xl font-bold text-brand-charcoal sm:text-[40px] sm:leading-[1.15]">
              The IEP Meeting Cheat Sheet
            </h2>
            <p className="mt-5 font-body text-[16px] leading-[1.75] text-brand-charcoal/70">
              What to bring, what to ask, and what to watch for. This one-page
              guide will make you feel prepared before your next meeting.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Know your rights before you sit down",
                "Questions that get real answers",
                "Red flags to watch for in IEP language",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Heart
                    size={16}
                    className="text-brand-coral shrink-0 mt-0.5"
                  />
                  <span className="font-body text-sm text-brand-charcoal/70">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <form className="mt-8 space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="First name"
                  className="flex-1 rounded-md border border-brand-charcoal/10 bg-white px-4 py-3.5 font-body text-sm text-brand-charcoal placeholder:text-brand-charcoal/35 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal/30 transition-shadow"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 rounded-md border border-brand-charcoal/10 bg-white px-4 py-3.5 font-body text-sm text-brand-charcoal placeholder:text-brand-charcoal/35 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal/30 transition-shadow"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto rounded-md bg-brand-coral px-8 py-3.5 font-sans text-sm font-semibold text-white tracking-wide hover:bg-brand-coral-dark transition-colors shadow-md shadow-brand-coral/20"
              >
                Get the Free Cheat Sheet
              </button>
            </form>
            <p className="mt-3 font-body text-xs text-brand-charcoal/40">
              No spam, ever. Unsubscribe any time.
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
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80"
        alt="School hallway"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-teal/90" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 lg:py-32 text-center">
        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
          <Mail size={24} className="text-white" />
        </div>
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          Get IEP Tips in Your Inbox Every Week
        </h2>
        <p className="mt-5 font-body text-base text-white/75 max-w-lg mx-auto leading-relaxed">
          Short, actionable advice from someone who has been in the room.
          Join hundreds of parents who are learning to advocate with confidence.
        </p>
        <form className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full rounded-md bg-white/15 border border-white/25 px-5 py-3.5 font-body text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 transition-shadow"
          />
          <button
            type="submit"
            className="w-full sm:w-auto shrink-0 rounded-md bg-brand-coral px-8 py-3.5 font-sans text-sm font-semibold text-white tracking-wide hover:bg-brand-coral-dark transition-colors shadow-lg shadow-brand-coral/25"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 font-body text-xs text-white/40">
          Weekly newsletter. Unsubscribe any time.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 8 — CTA Banner
   ─────────────────────────────────────────── */
function CTABanner() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-5xl px-6 py-24 lg:py-32 text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-teal mb-4">
          Ready to Get Started?
        </p>
        <h2 className="font-heading text-3xl font-bold text-brand-charcoal sm:text-[44px] sm:leading-[1.15] max-w-3xl mx-auto">
          Your child deserves an advocate who knows the system inside and out.
        </h2>
        <p className="mt-6 font-body text-lg text-brand-charcoal/60 max-w-xl mx-auto leading-relaxed">
          Book a free 15-minute intro call. No pressure, no sales pitch. Just
          a conversation about where you are and how I can help.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-brand-teal px-10 py-4 font-sans text-sm font-semibold text-white tracking-wide hover:bg-brand-teal-dark transition-colors shadow-lg shadow-brand-teal/20"
          >
            Book a Free Intro Call
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand-teal hover:text-brand-teal-dark transition-colors group"
          >
            View All Services{" "}
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
      <CTABanner />
    </>
  );
}
