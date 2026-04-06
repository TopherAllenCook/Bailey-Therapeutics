import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowLeft,
  Clock,
  Tag,
  Calendar,
  Share2,
  Mail,
} from "lucide-react";
import { posts, getPost, getRelatedPosts, formatDate } from "@/lib/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post Not Found | Bailey Therapeutics" };
  return {
    title: `${post.title} | Bailey Therapeutics`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/70 via-brand-charcoal/85 to-brand-charcoal/95" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 lg:px-10 lg:py-36">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest text-brand-sage hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to all articles
          </Link>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1 mb-6">
            <Tag size={11} className="text-brand-sage" />
            <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-brand-sage">
              {post.category}
            </span>
          </div>

          <h1 className="font-heading text-3xl font-bold text-white sm:text-5xl lg:text-[52px] lg:leading-[1.1]">
            {post.title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-5 font-body text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Calendar size={14} />
              {formatDate(post.publishedAt)}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              {post.readTime} min read
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-brand-cream">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:py-28">
          {/* Author byline */}
          <div className="flex items-center gap-4 pb-10 mb-10 border-b border-brand-charcoal/8">
            <div className="w-12 h-12 rounded-full bg-brand-teal flex items-center justify-center">
              <span className="font-heading text-base font-bold text-white">
                KB
              </span>
            </div>
            <div>
              <p className="font-sans text-sm font-semibold text-brand-charcoal">
                Kelsi Bailey
              </p>
              <p className="font-body text-xs text-brand-charcoal/50">
                Special Education Advocate
              </p>
            </div>
            <button className="ml-auto inline-flex items-center gap-2 rounded-full border border-brand-charcoal/15 bg-white px-4 py-2 font-sans text-xs font-semibold text-brand-charcoal/70 hover:bg-brand-teal hover:text-white hover:border-brand-teal transition-colors">
              <Share2 size={12} />
              Share
            </button>
          </div>

          {/* Lead paragraph (drop cap) */}
          <p className="font-body text-[19px] leading-[1.75] text-brand-charcoal/80 first-letter:font-heading first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-brand-teal">
            {post.content[0]}
          </p>

          {/* Rest of body */}
          <div className="mt-8 space-y-7">
            {post.content.slice(1).map((paragraph, i) => (
              <p
                key={i}
                className="font-body text-[17px] leading-[1.8] text-brand-charcoal/75"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* End of article CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-brand-teal/5 border border-brand-teal/10">
            <h3 className="font-heading text-2xl font-bold text-brand-charcoal mb-3">
              Need help applying this to your situation?
            </h3>
            <p className="font-body text-base text-brand-charcoal/65 leading-relaxed mb-6">
              Every family is different. If you want to talk through how this
              applies to your child specifically, book a free 15-minute intro
              call. No pressure.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-brand-teal px-7 py-3.5 font-sans text-sm font-semibold text-white tracking-wide hover:bg-brand-teal-dark transition-colors shadow-md shadow-brand-teal/15"
            >
              Book a Free Intro Call
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[3px] text-brand-teal mb-3">
                Keep Reading
              </p>
              <h2 className="font-heading text-3xl font-bold text-brand-charcoal sm:text-4xl">
                More articles for you
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand-teal hover:text-brand-teal-dark transition-colors group"
            >
              View all
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-xl bg-white border border-brand-charcoal/8 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1">
                    <Tag size={11} className="text-brand-teal" />
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-brand-teal">
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-lg font-bold text-brand-charcoal leading-snug mb-3 group-hover:text-brand-teal transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-body text-sm leading-[1.7] text-brand-charcoal/55 flex-1">
                    {p.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-3 font-body text-xs text-brand-charcoal/40">
                    <span>{formatDate(p.publishedAt)}</span>
                    <span className="w-1 h-1 rounded-full bg-brand-charcoal/20" />
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {p.readTime} min
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80"
          alt="School hallway"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-teal/92" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-20 lg:py-28 text-center">
          <Mail size={32} className="mx-auto text-white/70 mb-6" />
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Never miss a new article
          </h2>
          <p className="mt-5 font-body text-base text-white/75 max-w-lg mx-auto leading-relaxed">
            Subscribe to my weekly newsletter and get fresh advice straight to
            your inbox.
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
    </>
  );
}
