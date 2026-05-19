import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { FAQAccordion } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// /naplan-year-7 -- SEO hub page for Year 7 NAPLAN preparation
// Targets: "Year 7 NAPLAN preparation", "Year 7 NAPLAN tutoring Australia"
// Distinct from /naplan/year-7 (test-detail page).
// This page: parent-facing, high-converting, hub structure.
// ============================================================

const HUB_FAQ = [
  {
    question: "When does Year 7 NAPLAN take place?",
    answer:
      "NAPLAN is held in March each year, typically in the second or third week. For Year 7 students, this falls very early in their first year of high school — often within the first six weeks of Term 1. Schools notify families at least four weeks in advance.",
  },
  {
    question: "What domains does Year 7 NAPLAN cover?",
    answer:
      "Year 7 NAPLAN covers four domains: Numeracy, Reading, Language Conventions (spelling, grammar, and punctuation), and Writing. ClassUp currently coaches Numeracy, Reading, and Language Conventions. Writing coaching is in development.",
  },
  {
    question: "How is Year 7 Numeracy different from Year 5?",
    answer:
      "Year 7 Numeracy introduces formal algebra, negative numbers, ratio and proportion, and geometric reasoning. The shift from arithmetic to algebraic thinking is the single biggest jump between Year 5 and Year 7. Many students who performed well in primary school find this transition difficult without targeted preparation.",
  },
  {
    question: "How is Year 7 Reading assessed?",
    answer:
      "Year 7 Reading requires students to analyse complex texts — including persuasive essays, literary extracts, and multimodal texts. Questions test critical evaluation of argument, identification of bias, and synthesis of information across multiple sources. This is significantly more demanding than Year 5 Reading.",
  },
  {
    question: "How long should my child prepare before Year 7 NAPLAN?",
    answer:
      "Six to eight weeks of consistent 30-minute sessions is the sweet spot for most Year 7 families. Because NAPLAN falls early in Term 1, preparation ideally begins in Term 4 of Year 6. Starting earlier is fine — the coaching adapts to wherever your child is.",
  },
  {
    question: "Does Year 7 NAPLAN affect high school subject selection?",
    answer:
      "Not directly — NAPLAN results are not used for formal subject selection in most Australian states. However, some schools use Year 7 NAPLAN results to identify students who may benefit from additional literacy or numeracy support. Selective high school entry processes are separate and use their own assessments.",
  },
];

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://classup.com.au/" },
      { "@type": "ListItem", position: 2, name: "NAPLAN", item: "https://classup.com.au/naplan" },
      { "@type": "ListItem", position: 3, name: "Year 7 NAPLAN Preparation Hub", item: "https://classup.com.au/naplan-year-7" },
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
  { topic: "Algebra introduction", detail: "Writing and solving simple equations; using pronumerals to represent unknowns; understanding the concept of a variable for the first time." },
  { topic: "Negative numbers", detail: "Ordering and operating with integers; understanding the number line below zero; applying negatives in real-world contexts like temperature and debt." },
  { topic: "Ratio and proportion", detail: "Expressing ratios in simplest form; solving proportion problems; connecting ratio to fractions, decimals, and percentages." },
  { topic: "Geometric reasoning", detail: "Angle relationships (complementary, supplementary, vertically opposite); properties of triangles and quadrilaterals; introduction to formal proof reasoning." },
  { topic: "Percentages and rates", detail: "Calculating percentage increase and decrease; finding the original value; applying rates to real-world problems involving speed, cost, and density." },
  { topic: "Data and probability", detail: "Calculating mean, median, mode, and range; interpreting box plots and stem-and-leaf plots; understanding theoretical and experimental probability." },
];

const READING_TOPICS = [
  { topic: "Critical evaluation", detail: "Assessing the strength of an argument; identifying logical flaws, unsupported claims, and rhetorical devices used to persuade." },
  { topic: "Identifying bias", detail: "Recognising when a text presents a one-sided view; understanding how word choice and omission can shape the reader's perspective." },
  { topic: "Synthesising across texts", detail: "Year 7 NAPLAN often presents two related texts with different viewpoints. Students must compare, contrast, and draw conclusions across both." },
  { topic: "Complex inference", detail: "Drawing multi-step conclusions from implicit information; understanding what a text does not say as much as what it does." },
  { topic: "Multimodal texts", detail: "Interpreting meaning from images, diagrams, captions, and visual layouts alongside written text — a Year 7-specific NAPLAN feature." },
  { topic: "Vocabulary and register", detail: "Understanding how formal and informal register differ; interpreting technical vocabulary in context; recognising connotation and denotation." },
];

export default function NaplanYear7Hub() {
  return (
    <PageLayout>
      <SEO
        title="Year 7 NAPLAN Preparation Hub — ClassUp"
        description="Everything Australian parents need to prepare their Year 7 child for NAPLAN. What Numeracy and Reading actually test at Year 7, how AI tutoring targets the algebra and comprehension jump, and how to start for free."
        canonicalPath="/naplan-year-7"
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
                { label: "Year 7 Hub", href: null },
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

          <div className="cu-eyebrow mb-4">YEAR 7 NAPLAN PREPARATION</div>
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
            Year 7 NAPLAN{" "}
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
            Everything Australian parents need to understand Year 7 NAPLAN — the algebra jump, advanced reading comprehension, and the high school expectations that catch students off guard. Start with a free 30-minute diagnostic.
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
              href="/naplan/year-7"
              className="cu-btn-secondary"
              style={{ fontSize: 15, padding: "15px 28px", display: "inline-flex" }}
            >
              Full Year 7 test guide &#8594;
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
            Year 7 Numeracy: the algebra jump that surprises most students.
          </h2>
          <p style={{ fontSize: 15, color: "#555", lineHeight: 1.75, marginBottom: 36, maxWidth: 700 }}>
            The Year 7 Numeracy test is non-calculator and adaptive. The biggest shift from Year 5 is the introduction of formal algebra and negative numbers — abstract thinking that many students have never encountered before. Here are the six topic areas and what each one involves.
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
            Year 7 Reading: critical thinking, not just comprehension.
          </h2>
          <p style={{ fontSize: 15, color: "#555", lineHeight: 1.75, marginBottom: 36, maxWidth: 700 }}>
            Year 7 Reading moves well beyond literal comprehension. Students are expected to critically evaluate arguments, identify bias, and synthesise information across multiple texts. This is the domain where the gap between prepared and unprepared students is widest.
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
                AI tutors Luna and Leo target the Year 7 gaps specifically.
              </h2>
              <p style={{ fontSize: 15, color: "#444", lineHeight: 1.75, marginBottom: 20 }}>
                The free diagnostic identifies exactly which Year 7 topics your child needs to work on — algebra, negative numbers, critical reading, or all three. Luna and Leo then target those specific areas in every session. No wasted time on skills already mastered.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  "Free 30-minute diagnostic — no credit card",
                  "Algebra and negative number coaching from first principles",
                  "Critical reading and argument analysis practice",
                  "Specific explanations for every wrong answer",
                  "Weekly Friday parent report with progress summary",
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
                { coach: "Luna", style: "Methodical and warm. Explains each concept step by step. Particularly effective for algebra — she builds from concrete examples before introducing abstract notation.", color: "#FAEEDA", textColor: "#B36B0A" },
                { coach: "Leo", style: "Direct and energetic. Gets to the point fast. Best for students who want to move quickly through content and prefer short, sharp explanations with minimal scaffolding.", color: "#EAF3DE", textColor: "#4A7515" },
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
            Year 7 NAPLAN questions parents ask most.
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
              { href: "/naplan/year-7", label: "Full Year 7 NAPLAN test guide", desc: "Bands, timing, sample questions, and what the NMS means for Year 7." },
              { href: "/naplan/numeracy", label: "NAPLAN Numeracy deep dive", desc: "What numeracy questions look like at Year 7 and how adaptive difficulty works." },
              { href: "/naplan/reading", label: "NAPLAN Reading deep dive", desc: "Critical reading and argument analysis explained with worked examples." },
              { href: "/blog/year-7-high-school-maths-shock", label: "The Year 7 maths shock", desc: "Why so many students who were fine in primary school struggle in Year 7 maths." },
              { href: "/naplan-year-5", label: "Year 5 NAPLAN Hub", desc: "Preparing a younger sibling? The Year 5 hub covers Numeracy and Reading at that level." },
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
              The diagnostic is free, takes 30 minutes, and shows exactly where your Year 7 child has gaps across Numeracy, Reading, and Language Conventions. No credit card required.
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
