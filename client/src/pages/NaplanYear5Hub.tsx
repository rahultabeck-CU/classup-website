import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { FAQAccordion } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// /naplan-year-5 -- SEO hub page for Year 5 NAPLAN preparation
// Targets: "Year 5 NAPLAN preparation", "Year 5 NAPLAN tutoring Australia"
// Distinct from /naplan/year-5 (test-detail page).
// This page: parent-facing, high-converting, hub structure.
// ============================================================

const HUB_FAQ = [
  {
    question: "When does Year 5 NAPLAN take place?",
    answer:
      "NAPLAN is held in March each year, typically in the second or third week. Schools notify families at least four weeks in advance. The online adaptive test means your child's questions adjust in difficulty based on their responses.",
  },
  {
    question: "What domains does Year 5 NAPLAN cover?",
    answer:
      "Year 5 NAPLAN covers four domains: Numeracy, Reading, Language Conventions (spelling, grammar, and punctuation), and Writing. ClassUp currently coaches Numeracy, Reading, and Language Conventions. Writing coaching is in development.",
  },
  {
    question: "How is Year 5 Numeracy different from Year 3?",
    answer:
      "Year 5 Numeracy introduces fractions with unlike denominators, multi-step word problems, early algebra concepts, and measurement with decimals. The jump from Year 3 to Year 5 content is significant — many children who performed well in Year 3 find Year 5 harder without targeted preparation.",
  },
  {
    question: "How is Year 5 Reading assessed?",
    answer:
      "Year 5 Reading focuses on inferential comprehension — understanding what a text implies, not just what it states. Students are asked to identify author intent, compare viewpoints across two texts, and interpret figurative language. This is the area where most Year 5 students lose marks.",
  },
  {
    question: "How long should my child prepare before Year 5 NAPLAN?",
    answer:
      "Six to eight weeks of consistent 30-minute sessions is the sweet spot for most Year 5 families. Starting earlier is fine — the coaching adapts to wherever your child is. Consistent practice beats intensive cramming every time.",
  },
  {
    question: "Does ClassUp cover Year 5 Language Conventions?",
    answer:
      "Yes. ClassUp's Language Conventions coaching covers spelling rules, punctuation, grammar, and sentence structure at the Year 5 level. Questions are mapped to ACARA curriculum codes so you know exactly which skills are being targeted.",
  },
];

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://classup.com.au/" },
      { "@type": "ListItem", position: 2, name: "NAPLAN", item: "https://classup.com.au/naplan" },
      { "@type": "ListItem", position: 3, name: "Year 5 NAPLAN Preparation Hub", item: "https://classup.com.au/naplan-year-5" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HUB_FAQ.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  },
];

const NUMERACY_TOPICS = [
  { topic: "Fractions", detail: "Adding and subtracting fractions with unlike denominators; converting between mixed numbers and improper fractions." },
  { topic: "Decimals", detail: "Place value to thousandths; comparing, ordering, and rounding decimals; decimal operations." },
  { topic: "Multi-step problems", detail: "Word problems requiring two or more operations; identifying which operation to apply and in what order." },
  { topic: "Measurement", detail: "Area and perimeter of composite shapes; volume of rectangular prisms; converting between units." },
  { topic: "Patterns and algebra", detail: "Number patterns with rules; finding missing values; introduction to variables." },
  { topic: "Data and statistics", detail: "Reading and interpreting tables, graphs, and charts; calculating mean and range." },
];

const READING_TOPICS = [
  { topic: "Inferential comprehension", detail: "Drawing conclusions not explicitly stated in the text; understanding implied meaning." },
  { topic: "Author intent", detail: "Identifying why an author included specific information, word choices, or structural decisions." },
  { topic: "Comparing texts", detail: "Year 5 NAPLAN often presents two related texts and asks students to compare viewpoints or information." },
  { topic: "Figurative language", detail: "Identifying and interpreting similes, metaphors, personification, and hyperbole in context." },
  { topic: "Text structure", detail: "Understanding how narrative, persuasive, and informational texts are structured differently." },
  { topic: "Vocabulary in context", detail: "Determining the meaning of unfamiliar words using surrounding context clues." },
];

export default function NaplanYear5() {
  return (
    <PageLayout>
      <SEO
        title="Year 5 NAPLAN Preparation Hub — ClassUp"
        description="Everything Australian parents need to prepare their Year 5 child for NAPLAN. What Numeracy and Reading actually test, how AI tutoring helps, and a free 30-minute diagnostic."
        canonicalPath="/naplan-year-5"
      />
      {SCHEMA.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #F5F2EC 0%, #EEEDFE 100%)",
          padding: "64px 0 56px",
        }}
      >
        <div className="container" style={{ maxWidth: 1000 }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: 20 }}>
            <ol style={{ display: "flex", gap: 6, alignItems: "center", listStyle: "none", padding: 0, margin: 0, flexWrap: "wrap" }}>
              {[
                { label: "Home", href: "/" },
                { label: "NAPLAN", href: "/naplan" },
                { label: "Year 5 Hub", href: null },
              ].map((crumb, i, arr) => (
                <li key={crumb.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  {crumb.href ? (
                    <Link href={crumb.href} style={{ fontSize: 13, color: "#7F77DD", textDecoration: "none", fontWeight: 600 }}>
                      {crumb.label}
                    </Link>
                  ) : (
                    <span style={{ fontSize: 13, color: "#888" }}>{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && <span style={{ fontSize: 13, color: "#CCC" }}>›</span>}
                </li>
              ))}
            </ol>
          </nav>

          <div className="cu-eyebrow mb-4">YEAR 5 NAPLAN PREPARATION</div>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(36px, 5vw, 58px)",
              fontWeight: 800,
              color: "#1A1A1A",
              lineHeight: 1.1,
              marginBottom: 20,
              maxWidth: 780,
            }}
          >
            Year 5 NAPLAN{" "}
            <em style={{ fontStyle: "italic", color: "#7F77DD" }}>Preparation Hub.</em>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#444",
              lineHeight: 1.7,
              maxWidth: 660,
              marginBottom: 32,
            }}
          >
            Everything Australian parents need to understand Year 5 NAPLAN — what Numeracy and Reading actually test, how AI tutoring targets the right gaps, and how to start for free in 30 minutes.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={DIAGNOSTIC_URL}
              className="cu-btn-primary"
              style={{ fontSize: 16, padding: "16px 32px" }}
            >
              Start free diagnostic &#8594;
            </a>
            <Link
              href="/naplan/year-5"
              className="cu-btn-secondary"
              style={{ fontSize: 15, padding: "15px 28px", display: "inline-flex" }}
            >
              Full Year 5 test guide &#8594;
            </Link>
          </div>
          <p style={{ fontSize: 13, color: "#888", marginTop: 14 }}>
            Free · No credit card · 30 minutes · Pause and resume
          </p>
        </div>
      </section>

      {/* ── WHAT TO EXPECT: NUMERACY ── */}
      <section className="cu-section">
        <div className="container" style={{ maxWidth: 1000 }}>
          <div className="cu-eyebrow mb-4">WHAT TO EXPECT</div>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: "#1A1A1A",
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            Year 5 Numeracy: what the test actually covers.
          </h2>
          <p style={{ fontSize: 15, color: "#555", lineHeight: 1.75, marginBottom: 36, maxWidth: 700 }}>
            The Year 5 Numeracy test is non-calculator and adaptive. Questions adjust in difficulty based on your child's responses. Here are the six topic areas and what each one involves.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
              marginBottom: 48,
            }}
            className="topics-grid"
          >
            {NUMERACY_TOPICS.map((t) => (
              <div
                key={t.topic}
                style={{
                  background: "#F5F2EC",
                  borderRadius: 16,
                  padding: "22px 24px",
                  borderTop: "3px solid #7F77DD",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 15,
                    fontWeight: 800,
                    color: "#1A1A1A",
                    marginBottom: 8,
                  }}
                >
                  {t.topic}
                </h3>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.65, margin: 0 }}>{t.detail}</p>
              </div>
            ))}
          </div>

          {/* ── WHAT TO EXPECT: READING ── */}
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: "#1A1A1A",
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            Year 5 Reading: where most children lose marks.
          </h2>
          <p style={{ fontSize: 15, color: "#555", lineHeight: 1.75, marginBottom: 36, maxWidth: 700 }}>
            Reading comprehension at Year 5 is primarily inferential — students must understand what a text implies, not just what it states. This is the domain where preparation makes the biggest measurable difference.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
              marginBottom: 56,
            }}
            className="topics-grid"
          >
            {READING_TOPICS.map((t) => (
              <div
                key={t.topic}
                style={{
                  background: "#EAF3DE",
                  borderRadius: 16,
                  padding: "22px 24px",
                  borderTop: "3px solid #4A7515",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 15,
                    fontWeight: 800,
                    color: "#1A1A1A",
                    marginBottom: 8,
                  }}
                >
                  {t.topic}
                </h3>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.65, margin: 0 }}>{t.detail}</p>
              </div>
            ))}
          </div>

          {/* ── HOW CLASSUP HELPS ── */}
          <div
            style={{
              background: "#EEEDFE",
              borderRadius: 20,
              padding: "40px 48px",
              marginBottom: 56,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
              alignItems: "center",
            }}
            className="how-grid"
          >
            <div>
              <div className="cu-eyebrow mb-3">HOW CLASSUP HELPS</div>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(24px, 3vw, 34px)",
                  fontWeight: 800,
                  color: "#1A1A1A",
                  lineHeight: 1.2,
                  marginBottom: 16,
                }}
              >
                AI tutors Luna and Leo work on your child's exact gaps.
              </h2>
              <p style={{ fontSize: 15, color: "#444", lineHeight: 1.75, marginBottom: 20 }}>
                The free diagnostic identifies which of the twelve topic areas above your child needs to work on. Luna and Leo then target those specific areas — and only those areas — in every session. No wasted time on skills your child has already mastered.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Free 30-minute diagnostic — no credit card",
                  "Adaptive questions that adjust to your child's level",
                  "Specific explanations for every wrong answer",
                  "Weekly Friday parent report with progress summary",
                  "Year 5 Numeracy, Reading, and Language Conventions",
                ].map((point) => (
                  <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "#534AB7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      <span style={{ fontSize: 11, color: "#FFF" }}>&#10003;</span>
                    </div>
                    <span style={{ fontSize: 14, color: "#333" }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { coach: "Luna", style: "Methodical and warm. Explains each concept step by step. Best for children who like to understand the 'why' before moving on.", color: "#FAEEDA", textColor: "#B36B0A" },
                { coach: "Leo", style: "Direct and energetic. Gets to the point fast. Best for children who want to move quickly and prefer short, sharp explanations.", color: "#EAF3DE", textColor: "#4A7515" },
              ].map((c) => (
                <div key={c.coach} style={{ background: c.color, borderRadius: 16, padding: "20px 24px" }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#1A1A1A", marginBottom: 6 }}>{c.coach}</div>
                  <p style={{ fontSize: 13, color: "#555", lineHeight: 1.65, margin: 0 }}>{c.style}</p>
                  <Link href={`/coaches/${c.coach.toLowerCase()}`} style={{ fontSize: 13, fontWeight: 700, color: c.textColor, textDecoration: "none", display: "inline-block", marginTop: 10 }}>
                    Meet {c.coach} &#8594;
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* ── FAQ ── */}
          <div className="cu-eyebrow mb-4">COMMON QUESTIONS</div>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 800,
              color: "#1A1A1A",
              lineHeight: 1.2,
              marginBottom: 28,
            }}
          >
            Year 5 NAPLAN questions parents ask most.
          </h2>
          <div style={{ marginBottom: 56 }}>
            <FAQAccordion items={HUB_FAQ} defaultOpenIndexes={[0, 2]} />
          </div>

          {/* ── RELATED LINKS ── */}
          <div className="cu-eyebrow mb-4">EXPLORE MORE</div>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 800,
              color: "#1A1A1A",
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            Related guides and resources.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 56 }} className="links-grid">
            {[
              { href: "/naplan/year-5", label: "Full Year 5 NAPLAN test guide", desc: "Bands, timing, sample questions, and what the NMS means for Year 5." },
              { href: "/naplan/numeracy", label: "NAPLAN Numeracy deep dive", desc: "What numeracy questions look like and how adaptive difficulty works." },
              { href: "/naplan/reading", label: "NAPLAN Reading deep dive", desc: "Inferential comprehension explained with worked examples." },
              { href: "/blog/year-5-maths-struggles-term-2", label: "Year 5 maths struggles in Term 2", desc: "Fractions, decimals, and multi-step problems arrive fast. What to look out for." },
              { href: "/blog/help-child-catch-up-reading", label: "Catch up in reading without the battle", desc: "Comprehension strategies for 10 to 12 year olds that work at home." },
              { href: "/methodology", label: "ClassUp methodology", desc: "Why targeted practice outperforms generic worksheets for NAPLAN prep." },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
                <div
                  className="cu-card-large"
                  style={{ padding: "20px 24px", height: "100%", cursor: "pointer" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
                >
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#1A1A1A", marginBottom: 6, lineHeight: 1.35 }}>{link.label}</div>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, margin: 0 }}>{link.desc}</p>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#7F77DD", marginTop: 12 }}>Read &#8594;</div>
                </div>
              </Link>
            ))}
          </div>

          {/* ── CTA ── */}
          <div
            style={{
              background: "#1A1A1A",
              borderRadius: 24,
              padding: "48px 56px",
              textAlign: "center",
              marginBottom: 16,
            }}
            className="cta-block"
          >
            <div style={{ fontSize: 11, fontWeight: 700, color: "#7F77DD", textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>
              START FOR FREE
            </div>
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 800,
                color: "#FFF",
                lineHeight: 1.2,
                marginBottom: 16,
                maxWidth: 600,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Start a free 30-minute diagnostic with AI tutors Luna &amp; Leo.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", marginBottom: 32, maxWidth: 520, marginLeft: "auto", marginRight: "auto", lineHeight: 1.65 }}>
              The diagnostic is free, takes 30 minutes, and shows exactly where your Year 5 child has gaps across Numeracy, Reading, and Language Conventions. No credit card required.
            </p>
            <a
              href={DIAGNOSTIC_URL}
              className="cu-btn-primary"
              style={{ fontSize: 17, padding: "18px 40px", background: "#7F77DD", color: "#FFF" }}
            >
              Start free diagnostic &#8594;
            </a>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 14 }}>
              Free · No credit card · Pause and resume across up to 3 short sittings
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .topics-grid { grid-template-columns: 1fr 1fr !important; }
          .links-grid { grid-template-columns: 1fr 1fr !important; }
          .how-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .topics-grid { grid-template-columns: 1fr !important; }
          .links-grid { grid-template-columns: 1fr !important; }
          .cta-block { padding: 36px 24px !important; }
        }
      `}</style>
    </PageLayout>
  );
}
