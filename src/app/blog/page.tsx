import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Clock, Tag, Mail, Sparkles } from "lucide-react";
import { posts, formatDate } from "@/lib/posts";
import { BlogList } from "./blog-list";

export const metadata: Metadata = {
  title: "Blog | Bailey Therapeutics",
  description:
    "IEP tips, parent rights, life skills, and behind-the-scenes insights from a former school administrator turned parent advocate.",
};

/* ───────────────────────────────────────────
   Section 1 — Hero
   ─────────────────────────────────────────── */
function BlogHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600&q=80"
        alt="Open notebook with pen"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/95 via-brand-charcoal/80 to-brand-charcoal/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-sage mb-6">
            The Blog
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
            Real talk about IEPs,{" "}
            <span className="text-brand-coral">written for parents.</span>
          </h1>
          <p className="mt-6 font-body text-lg text-white/75 max-w-xl leading-relaxed animate-fade-in-up delay-100">
            No jargon. No lectures. Just practical advice from someone who has
            spent 15 years in special education classrooms and meeting rooms.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 2 — Featured Post
   ─────────────────────────────────────────── */
function FeaturedPost() {
  const featured = posts.find((p) => p.featured) ?? posts[0];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles size={16} className="text-brand-coral" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-coral">
            Featured Article
          </p>
        </div>

        <Link
          href={`/blog/${featured.slug}`}
          className="group grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center rounded-2xl overflow-hidden hover:bg-brand-cream/30 transition-colors p-6 -m-6"
        >
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-teal/10 px-3 py-1 mb-5">
              <Tag size={11} className="text-brand-teal" />
              <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-brand-teal">
                {featured.category}
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-brand-charcoal sm:text-[40px] sm:leading-[1.15] group-hover:text-brand-teal transition-colors">
              {featured.title}
            </h2>
            <p className="mt-5 font-body text-[16px] leading-[1.8] text-brand-charcoal/65">
              {featured.excerpt}
            </p>
            <div className="mt-7 flex items-center gap-4 font-body text-sm text-brand-charcoal/45">
              <span>{formatDate(featured.publishedAt)}</span>
              <span className="w-1 h-1 rounded-full bg-brand-charcoal/20" />
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {featured.readTime} min read
              </span>
            </div>
            <span className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand-teal group-hover:gap-3 transition-all">
              Read the full article
              <ArrowRight size={14} />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Section 3 — Newsletter CTA
   ─────────────────────────────────────────── */
function BlogNewsletter() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80"
        alt="School hallway"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-teal/92" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 lg:py-28 text-center">
        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
          <Mail size={24} className="text-white" />
        </div>
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          Get new articles in your inbox
        </h2>
        <p className="mt-5 font-body text-base text-white/75 max-w-lg mx-auto leading-relaxed">
          One email a week. Real advice for real parents. No fluff.
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
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────
   Page
   ─────────────────────────────────────────── */
export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <FeaturedPost />
      <BlogList />
      <BlogNewsletter />
    </>
  );
}
