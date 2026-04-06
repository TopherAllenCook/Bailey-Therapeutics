import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  FileText,
  Handshake,
  Users,
  BookOpen,
  CheckCircle,
  Clock,
  Video,
  MapPin,
  Star,
  Quote,
  ChevronDown,
  Zap,
  Heart,
  Shield,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Pricing | Bailey Therapeutics",
  description:
    "IEP consultations, meeting prep, parent coaching, and digital resources. See how Bailey Therapeutics helps parents advocate for their children.",
};

/* ───────────────────────────────────────────
   Section 1 — Hero
   ─────────────────────────────────────────── */
function ServicesHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1600&q=80"
        alt="Parent and child at school"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/95 via-brand-charcoal/80 to-brand-charcoal/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-40">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-sage mb-6">
            Services
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
            Advocacy that actually{" "}
            <span className="text-brand-coral">changes outcomes.</span>
          </h1>
          <p className="mt-6 font-body text-lg text-white/75 max-w-xl leading-relaxed animate-fade-in-up delay-100">
            Whether you need a full IEP review, meeting prep for tomorrow, or
            someone in your corner long-term, there is a path for you here.
          </p>
          <Link
            href="#packages"
            className="mt-10 inline-flex items-center justify-center rounded-md bg-brand-coral px-8 py-4 font-sans text-sm font-semibold text-white tracking-wide hover:bg-brand-coral-dark transition-colors shadow-lg shadow-brand-coral/25 animate-fade-in-up delay-200"
          >
            See Packages & Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 2 — How It Works
   ─────────────────────────────────────────── */
const steps = [
  {
    number: "01",
    title: "Book a free intro call",
    description:
      "We spend 15 minutes talking about your situation. No sales pitch. Just a conversation about where you are and what you need.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Choose the right fit",
    description:
      "Based on our call, I will recommend a service that matches your situation. A one-time consult, meeting prep, or ongoing support.",
    icon: Zap,
  },
  {
    number: "03",
    title: "Get prepared and empowered",
    description:
      "We work together so you walk into your next meeting informed, confident, and ready to advocate for your child.",
    icon: Shield,
  },
];

function HowItWorks() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-teal mb-4">
            How It Works
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-charcoal sm:text-4xl leading-tight">
            Three steps to feeling prepared
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-brand-teal/15" />
              )}
              <div className="relative z-10 w-20 h-20 rounded-full bg-brand-teal/10 flex items-center justify-center mx-auto mb-6">
                <step.icon size={28} className="text-brand-teal" />
              </div>
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-brand-coral mb-2">
                Step {step.number}
              </p>
              <h3 className="font-sans text-lg font-semibold text-brand-charcoal mb-3">
                {step.title}
              </h3>
              <p className="font-body text-[15px] leading-[1.7] text-brand-charcoal/60 max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 3 — Service Packages
   ─────────────────────────────────────────── */
const packages = [
  {
    name: "IEP Review",
    tagline: "Understand what is actually in the document",
    price: "150",
    unit: "per session",
    description:
      "I review your child's IEP line by line and walk you through what it says, what it should say, and what questions to ask at your next meeting.",
    features: [
      "Full IEP document review",
      "Plain-language summary of goals and services",
      "List of questions and talking points",
      "Written notes you can bring to your meeting",
      "One 60-minute video call",
    ],
    cta: "Book an IEP Review",
    popular: false,
    icon: FileText,
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
  },
  {
    name: "Meeting Prep + Advocacy",
    tagline: "Walk in confident, not confused",
    price: "275",
    unit: "per meeting",
    description:
      "I prep you before your IEP meeting and can attend virtually to support you in real time. You will never sit at that table alone again.",
    features: [
      "Everything in IEP Review",
      "Pre-meeting strategy session",
      "Virtual attendance at your IEP meeting",
      "Real-time support and note-taking",
      "Post-meeting debrief and next steps",
      "Email support between sessions",
    ],
    cta: "Book Meeting Prep",
    popular: true,
    icon: Handshake,
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
  },
  {
    name: "Ongoing Support",
    tagline: "An advocate in your corner all year",
    price: "175",
    unit: "per month",
    description:
      "For families navigating complex situations or multiple meetings throughout the year. I stay with you through the entire process.",
    features: [
      "Everything in Meeting Prep",
      "Unlimited email support",
      "Monthly strategy calls",
      "Document review as needed",
      "Priority scheduling",
      "School communication support",
    ],
    cta: "Start Ongoing Support",
    popular: false,
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
];

function ServicePackages() {
  return (
    <section id="packages" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-teal mb-4">
            Packages & Pricing
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-charcoal sm:text-4xl leading-tight">
            Find the right level of support
          </h2>
          <p className="mt-4 font-body text-base text-brand-charcoal/60 leading-relaxed">
            Every family's situation is different. These packages are starting
            points. We will customize the details on our intro call.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl overflow-hidden flex flex-col ${
                pkg.popular
                  ? "ring-2 ring-brand-teal shadow-xl shadow-brand-teal/10"
                  : "border border-brand-charcoal/8 shadow-sm"
              }`}
            >
              {pkg.popular && (
                <div className="bg-brand-teal px-4 py-2 text-center">
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[2px] text-white">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Card image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <div className="w-11 h-11 rounded-full bg-brand-teal/90 flex items-center justify-center shadow-md">
                    <pkg.icon size={20} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-7">
                <h3 className="font-sans text-xl font-semibold text-brand-charcoal">
                  {pkg.name}
                </h3>
                <p className="mt-1 font-body text-sm text-brand-charcoal/50">
                  {pkg.tagline}
                </p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-heading text-4xl font-bold text-brand-charcoal">
                    ${pkg.price}
                  </span>
                  <span className="font-body text-sm text-brand-charcoal/40">
                    {pkg.unit}
                  </span>
                </div>

                <p className="mt-4 font-body text-[15px] leading-[1.7] text-brand-charcoal/65">
                  {pkg.description}
                </p>

                <ul className="mt-6 space-y-3 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle
                        size={16}
                        className="text-brand-teal shrink-0 mt-0.5"
                      />
                      <span className="font-body text-sm text-brand-charcoal/70">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`mt-8 inline-flex items-center justify-center rounded-md px-6 py-3.5 font-sans text-sm font-semibold tracking-wide transition-colors shadow-sm ${
                    pkg.popular
                      ? "bg-brand-teal text-white hover:bg-brand-teal-dark shadow-brand-teal/20"
                      : "bg-brand-charcoal/5 text-brand-charcoal hover:bg-brand-charcoal/10"
                  }`}
                >
                  {pkg.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center font-body text-sm text-brand-charcoal/45">
          Not sure which is right for you? Book a free intro call and we will
          figure it out together.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 4 — What to Expect
   ─────────────────────────────────────────── */
function WhatToExpect() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-teal mb-4">
              What to Expect
            </p>
            <h2 className="font-heading text-3xl font-bold text-brand-charcoal sm:text-[40px] sm:leading-[1.15]">
              This is not therapy. This is not legal advice. This is advocacy.
            </h2>
            <p className="mt-6 font-body text-[16px] leading-[1.8] text-brand-charcoal/70 max-w-lg">
              I help you understand what is happening in your child's education
              and give you the tools to take action. Here is what that looks
              like in practice.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: Video,
                  title: "Virtual or in-person",
                  body: "Most sessions happen over video call so I can support families everywhere. In-person attendance is available for Utah families.",
                },
                {
                  icon: Clock,
                  title: "Flexible scheduling",
                  body: "Evening and weekend sessions are available because I know you are juggling school drop-offs, work, and life.",
                },
                {
                  icon: MapPin,
                  title: "Nationwide support",
                  body: "IDEA is a federal law. Your rights are the same whether you are in Utah, Texas, or New York. I serve families across the country.",
                },
                {
                  icon: Heart,
                  title: "No judgment, ever",
                  body: "You are not behind. You are not a bad parent. You are here because you care. That is the only thing that matters.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-11 h-11 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0">
                    <item.icon size={20} className="text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-brand-charcoal">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-body text-[15px] leading-[1.7] text-brand-charcoal/60">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1587825140708-dfaf18c24c74?w=800&q=80"
                alt="Virtual consultation session"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-sage/30 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-coral/20 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 5 — FAQ Accordion
   ─────────────────────────────────────────── */
const faqs = [
  {
    q: "Do I need an advocate or an attorney?",
    a: "Most families do not need an attorney unless they are heading into due process or a formal legal complaint. An advocate helps you understand your rights, prepare for meetings, and communicate effectively with the school. If your situation requires legal support, I will tell you honestly and help you find the right referral.",
  },
  {
    q: "Can you attend my IEP meeting?",
    a: "Yes. With the Meeting Prep + Advocacy package, I can attend your IEP meeting virtually. I will be there to take notes, flag concerns, and support you in real time. Under IDEA, you have the right to bring anyone you choose to your IEP meeting.",
  },
  {
    q: "What if my child does not have an IEP yet?",
    a: "I can help with that too. If you suspect your child needs an evaluation, I will walk you through how to request one, what to expect from the process, and what your rights are along the way.",
  },
  {
    q: "Do you work with families outside of Utah?",
    a: "Absolutely. IDEA is a federal law, so the core rights and processes are the same in every state. I work with families across the country via video call. If there are state-specific nuances, I will research them for your situation.",
  },
  {
    q: "How quickly can we get started?",
    a: "I typically have availability within a week. If you have a meeting coming up sooner than that, let me know on the intro call and I will do my best to accommodate. Urgent situations are my priority.",
  },
  {
    q: "What if I cannot afford your services?",
    a: "I never want cost to be the reason a parent goes into an IEP meeting unprepared. I offer free resources on the blog and through my newsletter. I also have a limited number of reduced-rate spots each quarter. Just ask.",
  },
];

function FAQ() {
  return (
    <section className="bg-brand-charcoal">
      <div className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
        <div className="text-center mb-16">
          <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-gold mb-4">
            Common Questions
          </p>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Questions parents ask before booking
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl bg-white/5 border border-white/8 overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 font-sans text-base font-semibold text-white hover:text-brand-sage transition-colors list-none">
                {faq.q}
                <ChevronDown
                  size={18}
                  className="text-white/40 shrink-0 ml-4 group-open:rotate-180 transition-transform duration-200"
                />
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="font-body text-[15px] leading-[1.75] text-white/60">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 6 — Social Proof Strip
   ─────────────────────────────────────────── */
function SocialProof() {
  return (
    <section className="bg-brand-sage/20">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:py-28 text-center">
        <Quote size={40} className="mx-auto text-brand-teal/15 mb-6" />
        <blockquote className="font-heading text-2xl font-bold text-brand-charcoal sm:text-3xl italic leading-[1.35]">
          &ldquo;I went from dreading IEP meetings to actually looking forward
          to them. Kelsi gave me the words, the confidence, and the
          understanding I was missing.&rdquo;
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
              alt="Michelle R."
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <p className="font-sans text-sm font-semibold text-brand-charcoal">
              Michelle R.
            </p>
            <div className="flex items-center gap-1 mt-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className="fill-brand-gold text-brand-gold"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 7 — Bottom CTA
   ─────────────────────────────────────────── */
function ServicesCTA() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-5xl px-6 py-24 lg:py-32 text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-teal mb-4">
          Ready?
        </p>
        <h2 className="font-heading text-3xl font-bold text-brand-charcoal sm:text-[44px] sm:leading-[1.12] max-w-3xl mx-auto">
          Your next IEP meeting does not have to feel like you are on your own.
        </h2>
        <p className="mt-6 font-body text-lg text-brand-charcoal/60 max-w-xl mx-auto leading-relaxed">
          Book a free 15-minute call. Tell me what is going on. I will tell you
          honestly how I can help.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-brand-teal px-10 py-4 font-sans text-sm font-semibold text-white tracking-wide hover:bg-brand-teal-dark transition-colors shadow-lg shadow-brand-teal/20"
          >
            Book a Free Intro Call
          </Link>
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand-teal hover:text-brand-teal-dark transition-colors group"
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
export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <HowItWorks />
      <ServicePackages />
      <WhatToExpect />
      <FAQ />
      <SocialProof />
      <ServicesCTA />
    </>
  );
}
