import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { SampleQuestionCard, Breadcrumb, InPostCTA, FAQAccordion, EmailCapture } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL, SAMPLE_2, SAMPLE_3 } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// /naplan/numeracy -- Full depth at eval bar
// Expanded sub-domains. Common mistakes. Founder note. FAQ.
// ============================================================

const NUMERACY_SUBDOMAINS = [
  {
    name: "Number and Algebra",
    desc: "Place value, fractions, decimals, percentages, ratios, algebraic expressions, and order of operations. This is the largest sub-domain. Year 5 focuses on fractions, decimals, and basic algebra. Year 7 extends to ratios, percentages, and multi-step algebraic problems.",
    years: "Y3-Y9",
    color: "#EEEDFE",
    textColor: "#534AB7",
  },
  {
    name: "Measurement and Geometry",
    desc: "Length, area, volume, time, angles, 2D shapes, 3D objects, and coordinate geometry. Year 5 focuses on perimeter, area, and basic angle properties. Year 7 extends to volume, surface area, and coordinate geometry.",
    years: "Y3-Y9",
    color: "#EAF3DE",
    textColor: "#4A7515",
  },
  {
    name: "Statistics and Probability",
    desc: "Data representation, data interpretation, probability, and chance. This sub-domain is introduced at Year 5. Questions typically involve reading graphs, interpreting data sets, and calculating simple probabilities.",
    years: "Y5-Y9",
    color: "#FAEEDA",
    textColor: "#B36B0A",
  },
];

const NUMERACY_FAQ = [
  {
    question: "Is NAPLAN Numeracy calculator-allowed?",
    answer: "No. NAPLAN Numeracy is entirely non-calculator. This is one of the most common surprises for children who rely on calculators in class. Mental arithmetic and written working are both important.",
  },
  {
    question: "How many Numeracy questions are there?",
    answer: "The number of questions varies because NAPLAN uses an adaptive format since 2023. The test adapts to your child's responses, so two children may see different numbers of questions. The session is 50 minutes for Year 5 and 50 minutes for Year 7.",
  },
  {
    question: "What is the most common Numeracy gap?",
    answer: "Based on our question bank data, the most common gaps are: (1) order of operations in multi-step problems, (2) place value with large numbers, and (3) fraction-decimal-percentage conversion. These three areas account for a disproportionate share of lost marks.",
  },
  {
    question: "Does ClassUp cover all Numeracy sub-domains?",
    answer: "Yes. ClassUp covers Number and Algebra, Measurement and Geometry, and Statistics and Probability for both Year 5 and Year 7. The diagnostic identifies which specific skills are weakest, and the coaching focuses on those first.",
  },
  {
    question: "How is Numeracy different between Year 5 and Year 7?",
    answer: "Year 7 Numeracy is more abstract and multi-step. Year 5 focuses on concrete operations with numbers. Year 7 introduces algebraic thinking, ratio and proportion, and more complex geometry. The adaptive test format means Year 7 students who are strong may see questions that extend into Year 9 territory.",
  },
];

const sidebarLinkStyle: React.CSSProperties = {
  display: "block",
  padding: "10px 14px",
  background: "#F5F2EC",
  borderRadius: 10,
  fontSize: 14,
  fontWeight: 600,
  color: "#444",
  textDecoration: "none",
};


const NAPLAN_NUMERACY_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://classup.com.au/" },
      { "@type": "ListItem", "position": 2, "name": "NAPLAN", "item": "https://classup.com.au/naplan" },
      { "@type": "ListItem", "position": 3, "name": "Numeracy", "item": "https://classup.com.au/naplan/numeracy" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does NAPLAN Numeracy test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NAPLAN Numeracy covers six sub-domains: Number and Algebra, Measurement and Space, Statistics and Probability. It is non-calculator for all year levels. Questions include multiple choice, short answer, and drag-and-drop interactive formats."
        }
      },
      {
        "@type": "Question",
        "name": "Is NAPLAN Numeracy calculator-free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. NAPLAN Numeracy is entirely non-calculator for all year levels (Years 3, 5, 7, and 9). Students must perform all calculations mentally or on paper."
        }
      },
      {
        "@type": "Question",
        "name": "What are the most common NAPLAN Numeracy mistakes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most common mistakes in NAPLAN Numeracy are: misreading multi-step word problems, errors with fractions and decimals, confusion between area and perimeter, and misinterpreting data displays. ClassUp's diagnostic identifies which of these your child is making."
        }
      }
    ]
  }
];
export default function NAPLANNumeracy() {
  return (
    <PageLayout>
      <SEO
        title="NAPLAN Numeracy: what is tested and how to improve | ClassUp"
        description="NAPLAN Numeracy covers number, algebra, measurement, space, statistics, and probability. Non-calculator throughout. Here are the most common mistakes and how ClassUp addresses them."
        canonicalPath="/naplan/numeracy"
        schemaMarkup={NAPLAN_NUMERACY_SCHEMA}
      />
      <section className="cu-section" style={{ paddingTop: 24 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "NAPLAN", href: "/naplan" }, { label: "Numeracy" }]} />

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 48, alignItems: "start" }} className="num-grid">
            <div>
              <div className="cu-eyebrow mb-4">NAPLAN NUMERACY</div>
              <h1 className="cu-h1 mb-4">
                NAPLAN Numeracy:{" "}
                <em className="cu-italic-accent">what's actually tested.</em>
              </h1>
              <p className="cu-body-large mb-6">
                Numeracy is the largest NAPLAN domain by question count. It covers three sub-domains across
                all year levels. Here's what your child needs to know, and the specific mistakes that
                cost children the most marks.
              </p>

              {/* Sub-domains */}
              <h2 className="cu-h2-card mb-4">The three Numeracy sub-domains</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {NUMERACY_SUBDOMAINS.map((sub) => (
                  <div key={sub.name} style={{ background: sub.color, borderRadius: 14, padding: "18px 20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                      <div style={{ fontSize: 15, fontWeight: 800, color: "#1A1A1A" }}>{sub.name}</div>
                      <span style={{ background: "#7F77DD", color: "#FFF", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 999 }}>{sub.years}</span>
                    </div>
                    <p style={{ fontSize: 13, color: sub.textColor, lineHeight: 1.65, margin: 0 }}>{sub.desc}</p>
                  </div>
                ))}
              </div>

              {/* Common mistakes */}
              <h2 className="cu-h2-card mb-3">The most common Numeracy mistakes</h2>
              <p className="cu-body-card mb-4">
                ClassUp's question bank is built around the specific mistakes Australian children make on
                NAPLAN Numeracy questions. Every question includes a "common mistake" explanation:
                not just the correct answer, but exactly where the thinking typically breaks.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                {[
                  { mistake: "Place value confusion", example: "Picking the digit instead of its position. '4 in 9481' → selecting '4 ones' instead of '4 hundreds'." },
                  { mistake: "Order of operations errors", example: "Adding before multiplying in word problems. 'Twice Grace's age plus 5' → calculating (16+5)×2 instead of 2×16+5." },
                  { mistake: "Negative number sign errors", example: "Dropping the negative sign when multiplying. 4 × (&minus;8) → selecting 32 instead of &minus;32." },
                  { mistake: "Fraction-decimal conversion", example: "Confusing the numerator and denominator when converting. 3/4 → 0.34 instead of 0.75." },
                  { mistake: "Multi-step problem shortcuts", example: "Solving only the first step of a two-step problem. 'How much change from $20 after buying 3 items at $4.50?' → calculating 3×4.50 but forgetting to subtract from 20." },
                ].map((item) => (
                  <div key={item.mistake} style={{ background: "#FAEEDA", borderRadius: 12, padding: "14px 18px" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#B36B0A", marginBottom: 4 }}>Common mistake: {item.mistake}</div>
                    <p style={{ fontSize: 13, color: "#7A4A00", lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: item.example }} />
                  </div>
                ))}
              </div>

              <InPostCTA />

              {/* Founder note */}
              <div style={{ background: "#F5F2EC", borderRadius: 16, padding: "24px", marginBottom: 32, borderLeft: "4px solid #7F77DD" }}>
                <div className="cu-eyebrow mb-3" style={{ color: "#7F77DD" }}>A NOTE FROM KAVITHA</div>
                <p style={{ fontSize: 14, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
                  In six years of teaching Year 7 Maths, the most common Numeracy gap I saw was not
                  "doesn't understand fractions." It was "understands fractions in isolation but can't
                  apply them in a word problem." The skill was there. The transfer wasn't.
                </p>
                <p style={{ fontSize: 14, color: "#444", lineHeight: 1.7, marginBottom: 12 }}>
                  NAPLAN Numeracy tests transfer, not recall. It asks children to apply skills in
                  unfamiliar contexts, under time pressure, without a calculator. That's a different
                  skill from knowing the content.
                </p>
                <p style={{ fontSize: 14, color: "#444", lineHeight: 1.7, margin: 0 }}>
                  ClassUp's Numeracy questions are designed to test transfer, not recall. Every question
                  is a word problem or a multi-step application. We don't ask "what is 3/4 as a decimal?"
                  We ask "Mia has 3/4 of a litre of juice. She pours 0.6L into a glass. How much is left?"
                </p>
                <p style={{ fontSize: 13, color: "#888", marginTop: 12 }}> - Rahul Tabeck, co-founder · Kavya's dad
                </p>
              </div>

              {/* How ClassUp coaches Numeracy */}
              <h2 className="cu-h2-card mb-3">How ClassUp coaches Numeracy</h2>
              <p className="cu-body-card mb-4">
                ClassUp's Numeracy coaching starts with the diagnostic. We identify which specific
                sub-domain skills your child is missing, not just "Numeracy is weak" but "place
                value with 4-digit numbers is the specific gap."
              </p>
              <p className="cu-body-card mb-4">
                Then the coach works on exactly those gaps. Every question is chosen based on what your
                child got wrong. Every wrong answer gets a specific explanation. Every skill gets
                practised until it's solid.
              </p>
              <p className="cu-body-card mb-6">
                The Friday parent report tells you which Numeracy skills improved that week, which are
                still being worked on, and what the plan is for next week. No vague "making progress."
                Specific skills. Specific status.
              </p>

              {/* Sample questions */}
              <div className="cu-eyebrow mb-3">SAMPLE NUMERACY QUESTIONS</div>
              <p className="cu-body-card mb-4">
                These are examples from our Year 5 and Year 7 question banks. Each includes the question,
                the most common wrong answer, and the explanation Luna or Leo gives.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
                <SampleQuestionCard sample={SAMPLE_2} />
                <SampleQuestionCard sample={SAMPLE_3} />
              </div>

              {/* FAQ */}
              <div className="cu-card-large" style={{ padding: "32px 40px", marginBottom: 32 }}>
                <div className="cu-eyebrow mb-3">NUMERACY QUESTIONS</div>
                <FAQAccordion items={NUMERACY_FAQ} />
              </div>

              {/* Email capture */}
              <EmailCapture sourcePage="naplan-numeracy" />
            </div>

            {/* Sidebar */}
            <div style={{ position: "sticky", top: 100 }}>
              <div className="cu-card-large" style={{ padding: 24, marginBottom: 20 }}>
                <div className="cu-eyebrow mb-3">NUMERACY BY YEAR</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <Link href="/naplan-year-5-numeracy" style={sidebarLinkStyle}>Year 5 Numeracy →</Link>
                  <Link href="/naplan-year-7-numeracy" style={sidebarLinkStyle}>Year 7 Numeracy →</Link>
                </div>
              </div>
              <div className="cu-card-large" style={{ padding: 24, marginBottom: 20 }}>
                <div className="cu-eyebrow mb-3">OTHER DOMAINS</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <Link href="/naplan-year-5-reading" style={sidebarLinkStyle}>Reading →</Link>
                  <Link href="/naplan-year-5-language-conventions" style={sidebarLinkStyle}>Language Conventions →</Link>
                  <Link href="/naplan/writing" style={sidebarLinkStyle}>Writing →</Link>
                </div>
              </div>
              <div style={{ background: "#EEEDFE", borderRadius: 20, padding: 24 }}>
                <div className="cu-eyebrow mb-3" style={{ color: "#7F77DD" }}>FREE DIAGNOSTIC</div>
                <p style={{ fontSize: 14, color: "#26215C", lineHeight: 1.6, marginBottom: 16 }}>
                  Find your child's specific Numeracy gaps. Free. No credit card.
                </p>
                <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                  Start free diagnostic →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 767px) {
          .num-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageLayout>
  );
}
