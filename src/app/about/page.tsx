import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  GraduationCap,
  Heart,
  ShieldCheck,
  Award,
  Users,
  BookOpen,
  Lightbulb,
  Handshake,
  Star,
  Quote,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Kelsi Bailey | Bailey Therapeutics",
  description:
    "15 years on the school side of the IEP table taught me how the system works. Now I help parents navigate it. Meet Kelsi Bailey, special education advocate.",
};

/* ───────────────────────────────────────────
   Section 1 — Hero
   ─────────────────────────────────────────── */
function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80"
        alt="Classroom setting"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/95 via-brand-charcoal/80 to-brand-charcoal/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-28 lg:px-10 lg:py-44">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-sage mb-6">
            About Kelsi
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
            I used to sit on the{" "}
            <span className="text-brand-coral">school&rsquo;s side.</span>
            <br />
            Now I sit on yours.
          </h1>
          <p className="mt-6 font-body text-lg text-white/75 max-w-xl leading-relaxed animate-fade-in-up delay-100">
            15 years as a school SLP and administrator gave me a front-row seat
            to how the system works. I saw the gaps. I saw what parents were
            never told. And I decided to do something about it.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 2 — Personal Story
   ─────────────────────────────────────────── */
function PersonalStory() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Portrait */}
          <div className="relative lg:sticky lg:top-32">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Kelsi Bailey, special education advocate"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 lg:-right-8 bg-brand-teal rounded-xl p-5 shadow-xl">
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-sage mb-1">
                Based in
              </p>
              <p className="font-heading text-lg font-bold text-white">
                Utah
              </p>
              <p className="font-body text-xs text-white/60">
                Serving families everywhere
              </p>
            </div>
          </div>

          {/* Story text */}
          <div className="max-w-lg lg:max-w-none">
            <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-teal mb-4">
              My Story
            </p>
            <h2 className="font-heading text-3xl font-bold text-brand-charcoal sm:text-[40px] sm:leading-[1.15]">
              I never planned to leave the schools.
            </h2>

            <div className="mt-8 space-y-5 font-body text-[16px] leading-[1.8] text-brand-charcoal/70">
              <p>
                I started my career as a speech-language pathologist in the
                public school system. I loved the work. I loved the kids. I
                spent my days writing goals, running therapy sessions, and
                sitting in IEP meetings. Eventually I moved into
                administration, where I helped shape programs and policies for
                special education students across entire districts.
              </p>
              <p>
                But something kept bothering me. In meeting after meeting, I
                watched parents sit across the table looking overwhelmed,
                confused, and sometimes afraid to speak up. They signed forms
                they did not fully understand. They accepted recommendations
                without knowing they could ask questions. They trusted the
                system because they did not know there was another option.
              </p>
              <p>
                I knew what the school was thinking because I was the school.
                And I knew that parents deserved to understand what was
                happening in those rooms.
              </p>
              <p>
                That is why I started Bailey Therapeutics. Not to fight schools.
                Not to file lawsuits. But to sit beside parents and help them
                feel prepared, informed, and confident. To translate the jargon.
                To explain the process. To make sure your voice is heard at the
                table where decisions are being made about your child.
              </p>
            </div>

            <div className="mt-10 p-6 rounded-xl bg-brand-teal/5 border border-brand-teal/10">
              <p className="font-heading text-xl font-bold text-brand-charcoal italic leading-snug">
                &ldquo;Your gut feeling about your kid? Trust it. I will help
                you back it up.&rdquo;
              </p>
              <p className="mt-3 font-sans text-xs font-semibold uppercase tracking-widest text-brand-teal">
                Kelsi Bailey
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 3 — Why I Do This
   ─────────────────────────────────────────── */
function WhySection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-coral mb-4">
            Why I Do This
          </p>
          <h2 className="font-heading text-3xl font-bold text-brand-charcoal sm:text-[42px] sm:leading-[1.15]">
            Because the system was not built for parents.
          </h2>
          <p className="mt-6 font-body text-[16px] leading-[1.8] text-brand-charcoal/70 max-w-2xl mx-auto">
            The special education process is designed by educators, for
            educators. That does not make it wrong. But it does mean that
            parents are often left playing catch-up in a room full of people who
            already know the rules.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              icon: Lightbulb,
              title: "Knowledge is power",
              body: "When you understand the process, the terminology, and your rights, you stop feeling like a guest in a room where decisions are being made about your child. You become a partner.",
            },
            {
              icon: Handshake,
              title: "Advocacy, not adversary",
              body: "I do not train parents to fight schools. I help you collaborate with confidence. Schools respond better when parents show up informed, not angry. That shift changes everything.",
            },
            {
              icon: Heart,
              title: "Every child deserves it",
              body: "Your child's education should not depend on whether you happen to know a special education attorney. Every family deserves access to someone who can help them navigate this process.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-brand-cream/60 p-8 hover:bg-brand-cream transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center mb-5">
                <item.icon size={22} className="text-brand-teal" />
              </div>
              <h3 className="font-sans text-lg font-semibold text-brand-charcoal mb-3">
                {item.title}
              </h3>
              <p className="font-body text-[15px] leading-[1.75] text-brand-charcoal/65">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 4 — Credentials Timeline
   ─────────────────────────────────────────── */
const timelineItems = [
  {
    year: "2008",
    title: "Started as a School SLP",
    description:
      "Began working directly with special education students in the public school system, running therapy sessions and participating in IEP meetings.",
    icon: GraduationCap,
  },
  {
    year: "2013",
    title: "Licensed School Administrator",
    description:
      "Moved into administration to shape programs and policies for special education students across the district.",
    icon: ShieldCheck,
  },
  {
    year: "2018",
    title: "100+ IEP Meetings",
    description:
      "Reached a milestone of over 100 IEP meetings attended from the school side. Saw firsthand the patterns of what parents were never told.",
    icon: Users,
  },
  {
    year: "2021",
    title: "Pivoted to Parent Advocacy",
    description:
      "Made the decision to leave the school system and dedicate my career to helping parents navigate the IEP process from their side of the table.",
    icon: Heart,
  },
  {
    year: "2023",
    title: "Launched Bailey Therapeutics",
    description:
      "Formalized my advocacy practice. Started offering consultations, meeting prep, and educational resources for parents across the country.",
    icon: Award,
  },
  {
    year: "Today",
    title: "Growing the Mission",
    description:
      "Building a library of tools and guides, growing a community of informed parents, and working toward a future where no parent sits at the IEP table alone.",
    icon: BookOpen,
  },
];

function CredentialsTimeline() {
  return (
    <section className="bg-brand-charcoal relative overflow-hidden">
      <div className="absolute top-20 right-20 opacity-[0.03]">
        <GraduationCap size={400} className="text-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="text-center mb-16">
          <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-gold mb-4">
            Experience & Credentials
          </p>
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            15 years in the making
          </h2>
          <p className="mt-4 font-body text-base text-white/55 max-w-lg mx-auto">
            From school SLP to administrator to your advocate. Every step
            prepared me to be in your corner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timelineItems.map((item) => (
            <div
              key={item.year}
              className="group rounded-xl bg-white/5 border border-white/8 p-7 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-coral">
                  {item.year}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-teal/20 transition-colors">
                  <item.icon size={18} className="text-brand-sage" />
                </div>
              </div>
              <h3 className="font-sans text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm leading-[1.7] text-white/50">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Credentials bar */}
        <div className="mt-16 rounded-xl bg-white/5 border border-white/8 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years in Education", value: "15+" },
              { label: "IEP Meetings Attended", value: "100+" },
              { label: "Families Helped", value: "200+" },
              { label: "States Served", value: "12+" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl font-bold text-brand-coral">
                  {stat.value}
                </p>
                <p className="mt-1 font-sans text-xs font-medium uppercase tracking-widest text-white/40">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 5 — Testimonial Feature
   ─────────────────────────────────────────── */
function TestimonialFeature() {
  return (
    <section className="bg-brand-sage/20">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:py-32 text-center">
        <Quote size={48} className="mx-auto text-brand-teal/15 mb-8" />
        <blockquote className="font-heading text-2xl font-bold text-brand-charcoal sm:text-3xl sm:leading-[1.35] italic">
          &ldquo;Kelsi did not just help me understand my daughter&rsquo;s IEP.
          She helped me understand that I had every right to ask questions, push
          back, and demand better. I went from feeling helpless to feeling like
          my daughter&rsquo;s strongest advocate.&rdquo;
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
              alt="Sarah M."
              fill
              className="object-cover"
            />
          </div>
          <div className="text-left">
            <p className="font-sans text-sm font-semibold text-brand-charcoal">
              Sarah M.
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
   Section 6 — Personal Details / Get to Know Me
   ─────────────────────────────────────────── */
const personalFacts = [
  { label: "Based in", value: "Utah" },
  { label: "Morning routine", value: "Coffee before everything" },
  { label: "Superpower", value: "Translating jargon into plain English" },
  { label: "Cannot live without", value: "My planner and a good pen" },
  { label: "Favorite part of the job", value: "The look on a parent's face when they finally feel heard" },
  { label: "If not this", value: "Probably teaching, always teaching" },
];

function PersonalDetails() {
  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-teal mb-4">
              Beyond the Resume
            </p>
            <h2 className="font-heading text-3xl font-bold text-brand-charcoal sm:text-[40px] sm:leading-[1.15]">
              A few things you should know about me.
            </h2>
            <p className="mt-5 font-body text-[16px] leading-[1.8] text-brand-charcoal/65 max-w-lg">
              I believe that the best advocacy starts with trust. And trust
              starts with being real. So here is a little bit about the person
              behind Bailey Therapeutics.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-lg bg-white p-5 shadow-sm"
                >
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-[2px] text-brand-teal/70 mb-1.5">
                    {fact.label}
                  </p>
                  <p className="font-heading text-lg text-brand-charcoal italic leading-snug">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Candid photo */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=800&q=80"
                alt="Kelsi working at her desk"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-brand-sage/30 rounded-full -z-10" />
            <div className="absolute -bottom-4 -right-4 w-14 h-14 bg-brand-coral/20 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 7 — CTA
   ─────────────────────────────────────────── */
function AboutCTA() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
        alt="People collaborating"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-teal/90" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 lg:py-32 text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-sage mb-6">
          Let&rsquo;s Talk
        </p>
        <h2 className="font-heading text-3xl font-bold text-white sm:text-[44px] sm:leading-[1.12]">
          Ready to stop feeling lost in the IEP process?
        </h2>
        <p className="mt-6 font-body text-base text-white/70 max-w-xl mx-auto leading-relaxed">
          Book a free 15-minute intro call. No pressure, no jargon. Just a
          conversation about where you are and how I can help.
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
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-white/80 hover:text-white transition-colors group"
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
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <PersonalStory />
      <WhySection />
      <CredentialsTimeline />
      <TestimonialFeature />
      <PersonalDetails />
      <AboutCTA />
    </>
  );
}
