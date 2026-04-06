"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Clock, ArrowRight, Tag } from "lucide-react";
import { posts, categories, formatDate, type Post } from "@/lib/posts";

export function BlogList() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    return posts.filter((post: Post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const matchesSearch =
        search === "" ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        {/* Search + Categories */}
        <div className="mb-12 flex flex-col gap-6">
          <div className="relative max-w-xl">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-charcoal/40"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-full border border-brand-charcoal/10 bg-white pl-12 pr-5 py-4 font-body text-sm text-brand-charcoal placeholder:text-brand-charcoal/40 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal/30 transition-shadow shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 font-sans text-[13px] font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-brand-teal text-white shadow-md shadow-brand-teal/20"
                    : "bg-white text-brand-charcoal/70 hover:bg-brand-teal/5 hover:text-brand-teal border border-brand-charcoal/8"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="font-body text-sm text-brand-charcoal/45 mb-8">
          {filtered.length} {filtered.length === 1 ? "article" : "articles"}
          {activeCategory !== "All" && ` in ${activeCategory}`}
          {search && ` matching "${search}"`}
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-heading text-2xl font-bold text-brand-charcoal mb-2">
              No articles found
            </p>
            <p className="font-body text-base text-brand-charcoal/50">
              Try a different search or category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl bg-white border border-brand-charcoal/8 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1">
                    <Tag size={11} className="text-brand-teal" />
                    <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-brand-teal">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3 font-body text-xs text-brand-charcoal/45">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span className="w-1 h-1 rounded-full bg-brand-charcoal/20" />
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {post.readTime} min read
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-brand-charcoal leading-snug mb-3 group-hover:text-brand-teal transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm leading-[1.7] text-brand-charcoal/60 mb-5 flex-1">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand-teal group-hover:gap-3 transition-all">
                    Read article
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
