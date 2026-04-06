import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Download,
  FileText,
  BookOpen,
  CheckCircle,
  Lock,
  Sparkles,
  Heart,
  Mail,
  Tag,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Resources & Guides | Bailey Therapeutics",
  description:
    "Free downloads, templates, and guides for parents navigating IEPs and special education. Plus premium tools and digital products from Bailey Therapeutics.",
};

/* ───────────────────────────────────────────
   Section 1 — Hero
   ─────────────────────────────────────────── */
function ResourcesHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600&q=80"
        alt="Stack of books and notebooks"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/95 via-brand-charcoal/80 to-brand-charcoal/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-36">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-sage mb-6">
            Resources
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
            The toolkit I wish every parent{" "}
            <span className="text-brand-coral">started with.</span>
          </h1>
          <p className="mt-6 font-body text-lg text-white/75 max-w-xl leading-relaxed animate-fade-in-up delay-100">
            Free guides, templates, and checklists to help you walk into any
            IEP meeting prepared. Plus deeper resources when you need them.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 2 — Featured Lead Magnet
   ─────────────────────────────────────────── */
function FeaturedLeadMagnet() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* PDF mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white border border-brand-charcoal/5">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                alt="IEP Meeting Cheat Sheet"
                fill
                className="object-cover opacity-15"
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
                <div className="mt-6 flex items-center gap-2 flex-wrap justify-center">
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
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-sage/30 rounded-full -z-10" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-brand-coral/20 rounded-full -z-10" />
          </div>

          <div className="order-1 lg:order-2 max-w-lg">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-coral/10 px-4 py-1.5 mb-5">
              <Sparkles size={14} className="text-brand-coral" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-coral">
                Most Popular Free Download
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-brand-charcoal sm:text-[40px] sm:leading-[1.15]">
              The IEP Meeting Cheat Sheet
            </h2>
            <p className="mt-5 font-body text-[16px] leading-[1.8] text-brand-charcoal/70">
              The one-page guide I give every parent before their first IEP
              meeting. Print it, fold it, bring it with you. You will feel like
              a different person walking into that room.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                "10 questions every parent should ask",
                "Red flags in IEP language to watch for",
                "Your rights under IDEA, in plain English",
                "What to do if you disagree with the team",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={16}
                    className="text-brand-teal shrink-0 mt-0.5"
                  />
                  <span className="font-body text-[15px] text-brand-charcoal/70">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <form className="mt-9 space-y-3">
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-brand-coral px-8 py-3.5 font-sans text-sm font-semibold text-white tracking-wide hover:bg-brand-coral-dark transition-colors shadow-md shadow-brand-coral/20"
              >
                <Download size={16} />
                Get the Free Cheat Sheet
              </button>
            </form>
            <p className="mt-3 font-body text-xs text-brand-charcoal/40">
              No spam, ever. Just the PDF and the occasional helpful email.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 3 — Free Resource Library
   ─────────────────────────────────────────── */
const freeResources = [
  {
    title: "Parent Rights Quick Guide",
    description:
      "Your rights under IDEA, broken down into plain language with no legal jargon.",
    type: "PDF Guide",
    image:
      "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=600&q=80",
    icon: BookOpen,
  },
  {
    title: "Evaluation Request Template",
    description:
      "A ready-to-send letter requesting a special education evaluation for your child.",
    type: "Template",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80",
    icon: FileText,
  },
  {
    title: "IEP Goals Decoder",
    description:
      "How to read and understand the goals in your child's IEP. With real examples.",
    type: "PDF Guide",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
    icon: BookOpen,
  },
  {
    title: "Meeting Notes Worksheet",
    description:
      "A printable worksheet to help you take notes during your IEP meeting.",
    type: "Worksheet",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600&q=80",
    icon: FileText,
  },
  {
    title: "Glossary of IEP Terms",
    description:
      "FAPE, LRE, FBA, BIP. Every acronym you will hear, defined in one place.",
    type: "PDF Guide",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
    icon: BookOpen,
  },
  {
    title: "When to Push Back Checklist",
    description:
      "Signs that something in your child's IEP needs more attention before you sign.",
    type: "Checklist",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
    icon: CheckCircle,
  },
];

function FreeLibrary() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-teal mb-4">
            Free Library
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-charcoal sm:text-4xl leading-tight">
            Free guides, templates, and worksheets
          </h2>
          <p className="mt-4 font-body text-base text-brand-charcoal/60 leading-relaxed">
            Everything below is free. No catch. Just enter your email and I
            will send it your way.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {freeResources.map((resource) => (
            <div
              key={resource.title}
              className="group rounded-xl bg-white border border-brand-charcoal/8 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1">
                  <Tag size={11} className="text-brand-teal" />
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-brand-teal">
                    {resource.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0">
                    <resource.icon size={16} className="text-brand-teal" />
                  </div>
                  <h3 className="font-sans text-base font-semibold text-brand-charcoal leading-snug pt-1.5">
                    {resource.title}
                  </h3>
                </div>
                <p className="font-body text-sm leading-[1.7] text-brand-charcoal/60 mb-5">
                  {resource.description}
                </p>
                <button className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand-teal hover:text-brand-teal-dark transition-colors group/btn">
                  <Download size={14} />
                  Free Download
                  <ArrowRight
                    size={12}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 4 — Premium Products
   ─────────────────────────────────────────── */
const premiumProducts = [
  {
    title: "The Complete IEP Workbook",
    description:
      "A 60-page workbook that walks you through every stage of the IEP process. From evaluation to annual review. Print it, fill it out, bring it to every meeting.",
    price: "29",
    features: [
      "60 pages, fully printable",
      "Step-by-step IEP process guide",
      "Goal-tracking templates",
      "Communication scripts",
      "Lifetime access to updates",
    ],
    image:
      "https://images.unsplash.com/photo-1483546416237-76fd26bbcdd1?w=800&q=80",
    badge: "Bestseller",
  },
  {
    title: "Parent Advocacy Toolkit",
    description:
      "Everything you need to advocate confidently. Email templates, meeting scripts, sample letters, and a step-by-step guide to handling pushback from the school.",
    price: "49",
    features: [
      "12 email and letter templates",
      "Meeting prep checklists",
      "Pushback response scripts",
      "Sample written requests",
      "Bonus: video walkthroughs",
    ],
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    badge: null,
  },
];

function PremiumProducts() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-coral mb-4">
            Premium Tools
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-charcoal sm:text-4xl leading-tight">
            Go deeper with paid resources
          </h2>
          <p className="mt-4 font-body text-base text-brand-charcoal/60 leading-relaxed">
            For parents who want a complete system, not just a single guide.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {premiumProducts.map((product) => (
            <div
              key={product.title}
              className="group rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
            >
              <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden shrink-0">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 rounded-full bg-brand-coral px-3 py-1">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-white">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex-1 p-7 flex flex-col">
                <h3 className="font-heading text-2xl font-bold text-brand-charcoal leading-tight">
                  {product.title}
                </h3>
                <p className="mt-3 font-body text-[15px] leading-[1.7] text-brand-charcoal/65">
                  {product.description}
                </p>
                <ul className="mt-5 space-y-2 flex-1">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 font-body text-sm text-brand-charcoal/65"
                    >
                      <CheckCircle
                        size={14}
                        className="text-brand-teal shrink-0 mt-1"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between pt-6 border-t border-brand-charcoal/8">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-3xl font-bold text-brand-charcoal">
                      ${product.price}
                    </span>
                    <span className="font-body text-xs text-brand-charcoal/40">
                      one-time
                    </span>
                  </div>
                  <button className="inline-flex items-center gap-2 rounded-md bg-brand-teal px-6 py-3 font-sans text-sm font-semibold text-white tracking-wide hover:bg-brand-teal-dark transition-colors shadow-sm">
                    <Lock size={14} />
                    Get Access
                  </button>
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
   Section 5 — Newsletter
   ─────────────────────────────────────────── */
function Newsletter() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80"
        alt="School hallway"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-teal/92" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 lg:py-32 text-center">
        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
          <Mail size={24} className="text-white" />
        </div>
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          New resources land in your inbox first
        </h2>
        <p className="mt-5 font-body text-base text-white/75 max-w-lg mx-auto leading-relaxed">
          Subscribe to my weekly newsletter and you will be the first to know
          when I publish new templates, guides, and walkthroughs.
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
        <p className="mt-4 font-body text-xs text-white/40 flex items-center justify-center gap-1.5">
          <Clock size={11} />
          Weekly newsletter. Unsubscribe any time.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 6 — Bottom CTA
   ─────────────────────────────────────────── */
function ResourcesCTA() {
  return (
    <section className="bg-brand-charcoal">
      <div className="mx-auto max-w-5xl px-6 py-20 lg:py-28 text-center">
        <Heart size={32} className="mx-auto text-brand-coral mb-6" />
        <h2 className="font-heading text-3xl font-bold text-white sm:text-[40px] sm:leading-[1.15] max-w-3xl mx-auto">
          Resources can only take you so far. Sometimes you need a real person.
        </h2>
        <p className="mt-6 font-body text-base text-white/55 max-w-xl mx-auto leading-relaxed">
          If you have downloaded the guides and you still feel stuck, that is
          exactly when we should talk. Book a free intro call and let&rsquo;s
          figure it out together.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-brand-coral px-10 py-4 font-sans text-sm font-semibold text-white tracking-wide hover:bg-brand-coral-dark transition-colors shadow-lg shadow-brand-coral/25"
          >
            Book a Free Intro Call
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-white/70 hover:text-white transition-colors group"
          >
            View Services{" "}
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
export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <FeaturedLeadMagnet />
      <FreeLibrary />
      <PremiumProducts />
      <Newsletter />
      <ResourcesCTA />
    </>
  );
}
