import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { DIAGNOSTIC_URL } from "@/lib/classup";
import { SEO } from "@/components/SEO";

export const BLOG_POSTS = [
  {
    slug: "why-we-built-classup",
    title: "Why we built ClassUp",
    subtitle: "The evening Kavya said 'it's not obvious to me'",
    date: "March 2025",
    readTime: "3 min read",
    category: "Founders",
    categoryColor: "#EEEDFE",
    categoryTextColor: "#534AB7",
    excerpt: "My daughter Kavya is sharp, curious, and genuinely good at maths. Until NAPLAN prep started. One evening she said something I haven't forgotten. That's why ClassUp exists.",
  },
  {
    slug: "what-naplan-actually-tests",
    title: "What NAPLAN actually tests (and what it doesn't)",
    subtitle: "A plain-English guide for Australian parents",
    date: "March 2025",
    readTime: "4 min read",
    category: "NAPLAN",
    categoryColor: "#EAF3DE",
    categoryTextColor: "#4A7515",
    excerpt: "NAPLAN is not an IQ test. It's not a measure of your child's potential. It's a specific set of literacy and numeracy skills. Here's exactly what's tested, and what isn't.",
  },
  {
    slug: "the-problem-with-generic-naplan-prep",
    title: "The problem with generic NAPLAN prep",
    subtitle: "Why 200 random questions help less than 20 targeted ones",
    date: "March 2025",
    readTime: "3–4 min read",
    category: "Methodology",
    categoryColor: "#FAEEDA",
    categoryTextColor: "#B36B0A",
    excerpt: "Most NAPLAN prep products give children more questions. ClassUp gives children the right questions. Here's why that distinction matters more than you might think.",
  },
  {
    slug: "how-to-read-naplan-results",
    title: "How to read your child's NAPLAN results",
    subtitle: "What the bands mean, what the NMS means, and what to do next",
    date: "April 2025",
    readTime: "4 min read",
    category: "NAPLAN",
    categoryColor: "#EAF3DE",
    categoryTextColor: "#4A7515",
    excerpt: "NAPLAN results come back in July. Here's a plain-English guide to what the bands mean, what the National Minimum Standard is, and what to do if your child's result isn't where you hoped.",
  },
  {
    slug: "luna-vs-leo",
    title: "Luna vs Leo: how to choose",
    subtitle: "A guide for parents helping their child pick a coach",
    date: "April 2025",
    readTime: "3 min read",
    category: "Coaches",
    categoryColor: "#EEEDFE",
    categoryTextColor: "#534AB7",
    excerpt: "Luna is methodical and warm. Leo is direct and energetic. Both cover the same content. Here's how to help your child choose.",
  },
  {
    slug: "naplan-anxiety-what-parents-can-do",
    title: "NAPLAN anxiety: what parents can actually do",
    subtitle: "Evidence-based strategies, not platitudes",
    date: "April 2025",
    readTime: "4 min read",
    category: "Wellbeing",
    categoryColor: "#F5F2EC",
    categoryTextColor: "#444",
    excerpt: "NAPLAN anxiety is real. It affects children's performance and their relationship with learning. Here are evidence-based strategies that actually help, and the things that make it worse.",
  },
  {
    slug: "year-5-maths-struggles-term-2",
    title: "Year 5 maths struggles in Term 2: what to look out for",
    subtitle: "Fractions, decimals, and multi-step problems arrive fast",
    date: "April 2026",
    readTime: "3–4 min read",
    category: "Learning",
    categoryColor: "#EAF3DE",
    categoryTextColor: "#4A7515",
    excerpt: "Term 2 is when Year 5 maths gets harder. Fractions with different denominators, multi-step problems, and early algebra all arrive at once. Here is what to look out for and what to do.",
  },
  {
    slug: "help-child-catch-up-reading",
    title: "How to help your child catch up in reading without the battle",
    subtitle: "Comprehension strategies for 10 to 12 year olds",
    date: "April 2026",
    readTime: "4 min read",
    category: "Learning",
    categoryColor: "#EAF3DE",
    categoryTextColor: "#4A7515",
    excerpt: "Children who are behind in reading at age 10 to 12 are usually not behind in decoding. The gap is in comprehension. Here are strategies that work at home, without turning reading into a battle.",
  },
  {
    slug: "year-7-high-school-maths-shock",
    title: "The Year 7 transition: high school maths shock",
    subtitle: "Why confident Year 6 students struggle in Year 7",
    date: "April 2026",
    readTime: "3 min read",
    category: "Learning",
    categoryColor: "#EAF3DE",
    categoryTextColor: "#4A7515",
    excerpt: "The jump from primary to secondary maths is real. Algebra, negative numbers, and a faster curriculum pace catch many children off guard. Here is what changes and how parents can help.",
  },
];

export default function Blog() {
  return (
    <PageLayout>
      <SEO
        title="ClassUp Blog — NAPLAN guides for Australian parents"
        description="Practical guides for Australian parents navigating NAPLAN. What the test actually measures, how to read results, and how to help without adding pressure."
        canonicalPath="/blog"
      />
      <SEO
        title="ClassUp Blog — NAPLAN guides for Australian parents"
        description="Practical guides for Australian parents navigating NAPLAN. What the test actually measures, how to read results, and how to help without adding pressure."
        canonicalPath="/blog"
      />
      <section className="cu-section" style={{ paddingTop: 32 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <div className="cu-eyebrow mb-4">CLASSUP BLOG</div>
          <h1 className="cu-h1 mb-4">
            Honest writing about{" "}
            <em className="cu-italic-accent">NAPLAN prep.</em>
          </h1>
          <p className="cu-body-large mb-8" style={{ maxWidth: 680 }}>
            No sponsored content. No affiliate links. No generic advice. Just honest writing about NAPLAN, learning, and what actually helps Australian children prepare.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="blog-grid">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <div
                  className="cu-card-large"
                  style={{ padding: "28px 32px", height: "100%", cursor: "pointer", transition: "transform 0.15s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "none")}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                    <span style={{ background: post.categoryColor, color: post.categoryTextColor, fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 999 }}>{post.category}</span>
                    <span style={{ fontSize: 12, color: "#888" }}>{post.date}</span>
                    <span style={{ fontSize: 12, color: "#888" }}>·</span>
                    <span style={{ fontSize: 12, color: "#888" }}>{post.readTime}</span>
                  </div>
                  <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 20, fontWeight: 800, color: "#1A1A1A", marginBottom: 8, lineHeight: 1.3 }}>{post.title}</h2>
                  <p style={{ fontSize: 13, color: "#888", marginBottom: 12, fontStyle: "italic" }}>{post.subtitle}</p>
                  <p style={{ fontSize: 14, color: "#444", lineHeight: 1.65, margin: 0 }}>{post.excerpt}</p>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#7F77DD", marginTop: 16 }}>Read →</div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", padding: "48px 0" }}>
            <div className="cu-eyebrow mb-4">START FOR FREE</div>
            <h2 className="cu-h2 mb-4">Ready to see where your child actually stands?</h2>
            <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>
              Start free diagnostic →
            </a>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 767px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageLayout>
  );
}
