import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { FAQAccordion } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// /naplan-year-5-numeracy — Year 5 NAPLAN Numeracy domain landing
// Flat route, consistent with /naplan-year-5 hub pattern.
// All CTAs route via DIAGNOSTIC_URL (never hardcoded).
// ============================================================

const PAGE_FAQ = [
  {
    question: "Is a calculator allowed in Year 5 NAPLAN numeracy?",
    answer:
      "No. Calculators are not permitted at Year 5. Every question is designed to be solved with your child's own working. (The on-screen calculator only appears in part of the Years 7 and 9 tests.)",
  },
  {
    question: "How many questions are in the Year 5 numeracy test?",
    answer:
      "Around 42 questions, sat online in 50 minutes. Because the test is adaptive, the exact questions differ between students — the difficulty adjusts to how your child is answering.",
  },
  {
    question: "What maths should a Year 5 child know for NAPLAN?",
    answer:
      "The six curriculum strands: number (including fractions and decimals), algebra patterns, measurement, space, statistics and probability. The step up from Year 3 is multi-step reasoning — combining skills within one question.",
  },
  {
    question: "What are the hardest Year 5 NAPLAN numeracy topics?",
    answer:
      "Teachers and tutors consistently point to the same three: fractions and decimals, multi-step word problems, and unit conversions. These account for a large share of lost marks — and they're all very fixable with targeted practice.",
  },
  {
    question: "How can I help my child prepare for Year 5 numeracy?",
    answer:
      "Find the actual gaps first, then practise those specifically in short sessions. ClassUp's free diagnostic maps your child's skills across all six strands and gives you an honest starting picture.",
  },
  {
    question: "Does ClassUp cover all six numeracy strands?",
    answer:
      "Yes — the diagnostic samples across Number, Algebra, Measurement, Space, Statistics and Probability, and practice adapts to where your child needs work.",
  },
];

const STRAND_ROWS = [
  {
    strand: "Number",
    detail: "Place value into the tens of thousands, fractions and decimals, multiplication and division with larger numbers",
  },
  {
    strand: "Algebra",
    detail: "Number patterns, missing-value problems, simple rules (\"what comes next, and why?\")",
  },
  {
    strand: "Measurement",
    detail: "Length, area, perimeter, volume, mass, time — including unit conversions",
  },
  {
    strand: "Space",
    detail: "2D shapes and 3D objects, symmetry, grids, maps and simple transformations",
  },
  {
    strand: "Statistics",
    detail: "Reading tables and graphs, comparing data, drawing conclusions",
  },
  {
    strand: "Probability",
    detail: "Chance in everyday language — certain, likely, impossible — and simple experiments",
  },
];

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://classup.com.au/" },
      { "@type": "ListItem", position: 2, name: "NAPLAN", item: "https://classup.com.au/naplan" },
      { "@type": "ListItem", position: 3, name: "Year 5 NAPLAN", item: "https://classup.com.au/naplan-year-5" },
      {
        "@type": "ListItem",
        position: 4,
        name: "Year 5 NAPLAN Numeracy",
        item: "https://classup.com.au/naplan-year-5-numeracy",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PAGE_FAQ.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  },
];

const H2: React.CSSProperties = {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: "clamp(26px, 3.6vw, 40px)",
  fontWeight: 800,
  color: "#1A1A1A",
  lineHeight: 1.2,
  marginBottom: 16,
  maxWidth: 760,
};

const P: React.CSSProperties = {
  fontSize: 17,
  color: "#444",
  lineHeight: 1.75,
  maxWidth: 720,
  marginBottom: 18,
};

const LINK: React.CSSProperties = {
  color: "#534AB7",
  fontWeight: 600,
  textDecoration: "underline",
  textUnderlineOffset: 2,
};

function PrimaryCTA({ label = "Start the free diagnostic" }: { label?: string }) {
  return (
    <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 16, padding: "16px 32px" }}>
      {label} &#8594;
    </a>
  );
}

export default function NaplanYear5Numeracy() {
  return (
    <PageLayout>
      <SEO
        title="Year 5 NAPLAN Numeracy: What's Tested & How to Prepare | ClassUp"
        description="What Year 5 NAPLAN numeracy actually tests — the six strands, the common traps, and how to prepare honestly. Free diagnostic shows where your child stands."
        canonicalPath="/naplan-year-5-numeracy"
        schemaMarkup={SCHEMA}
      />

      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg, #F5F2EC 0%, #EEEDFE 100%)", padding: "64px 0 56px" }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 20 }}>
            <ol style={{ display: "flex", gap: 6, alignItems: "center", listStyle: "none", padding: 0, margin: 0, flexWrap: "wrap" }}>
              {[
                { label: "Home", href: "/" },
                { label: "NAPLAN", href: "/naplan" },
                { label: "Year 5", href: "/naplan-year-5" },
                { label: "Numeracy", href: null as string | null },
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

          <div className="cu-eyebrow mb-4">YEAR 5 NAPLAN NUMERACY</div>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(36px, 5vw, 58px)",
              fontWeight: 800,
              color: "#1A1A1A",
              lineHeight: 1.1,
              marginBottom: 20,
              maxWidth: 820,
            }}
          >
            Year 5 NAPLAN Numeracy: what's tested, and how to prepare{" "}
            <em style={{ fontStyle: "italic", color: "#7F77DD" }}>honestly</em>
          </h1>
          <p style={{ fontSize: 18, color: "#444", lineHeight: 1.7, maxWidth: 700, marginBottom: 32 }}>
            By Year 5, maths quietly shifts from counting to reasoning — fractions, decimals, and word problems that take more
            than one step. Here's what the numeracy test actually covers, where children typically lose marks, and how to find
            your child's real gaps before March.
          </p>
          <PrimaryCTA />
          <p style={{ fontSize: 13, color: "#888", marginTop: 14 }}>
            Free to start · Your child's first name is all we ask for · About 30 minutes
          </p>
        </div>
      </section>

      {/* ── WHAT YEAR 5 NUMERACY TESTS ── */}
      <section className="cu-section">
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={H2}>What Year 5 NAPLAN numeracy actually tests</h2>
          <p style={P}>
            The test is online, adaptive, and — worth knowing — no calculator is allowed at Year 5. Every answer comes from
            your child's own working.
          </p>
          <p style={P}>NAPLAN numeracy draws on six strands of the Australian curriculum:</p>

          <div style={{ overflowX: "auto", margin: "0 0 24px", maxWidth: 860 }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: 15,
                lineHeight: 1.6,
                background: "#FFF",
                border: "1px solid #E8E4D8",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <thead>
                <tr style={{ background: "#EEEDFE" }}>
                  <th
                    scope="col"
                    style={{
                      textAlign: "left",
                      padding: "14px 18px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      color: "#534AB7",
                      borderBottom: "2px solid #7F77DD",
                      width: "22%",
                    }}
                  >
                    Strand
                  </th>
                  <th
                    scope="col"
                    style={{
                      textAlign: "left",
                      padding: "14px 18px",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      color: "#534AB7",
                      borderBottom: "2px solid #7F77DD",
                    }}
                  >
                    What it looks like at Year 5
                  </th>
                </tr>
              </thead>
              <tbody>
                {STRAND_ROWS.map((row, i) => (
                  <tr key={row.strand} style={{ background: i % 2 === 0 ? "#FFF" : "#FAFAF8" }}>
                    <td
                      style={{
                        padding: "14px 18px",
                        fontWeight: 700,
                        color: "#1A1A1A",
                        borderBottom: "1px solid #E8E4D8",
                        verticalAlign: "top",
                      }}
                    >
                      {row.strand}
                    </td>
                    <td style={{ padding: "14px 18px", color: "#444", borderBottom: "1px solid #E8E4D8", verticalAlign: "top" }}>
                      {row.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={P}>
            Most questions are multiple choice, with some typed answers. And the real jump from Year 3 isn't the topics — it's
            that questions become multi-step: read a situation, decide the operation, carry a result into a second step, and
            avoid the trap option that's waiting for the child who stops one step early.
          </p>
          <p style={P}>
            Numeracy is one of four tests in{" "}
            <Link href="/naplan-year-5" style={LINK}>Year 5 NAPLAN</Link>. The others are{" "}
            <Link href="/naplan-year-5-reading" style={LINK}>Reading</Link>, Writing, and Language Conventions (
            <Link href="/naplan-year-5-language-conventions" style={LINK}>spelling, grammar and punctuation</Link>).
          </p>
        </div>
      </section>

      {/* ── WHERE STUDENTS LOSE MARKS ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={H2}>Where Year 5 students actually lose marks</h2>
          <p style={P}>
            Teachers and tutors see the same patterns every year. The most common Year 5 numeracy gaps aren't exotic — they're
            these:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px", maxWidth: 760, display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              "Fractions and decimals. The single biggest wall. A child can be fine with halves and quarters, then wobble on equivalence, comparing decimals, or placing fractions on a number line.",
              "Multi-step word problems. The maths is fine; the reading-to-maths translation isn't. Children solve step one correctly and pick the answer that matches it — not noticing the question asked for step two.",
              "Units and conversions. Metres to centimetres, minutes to hours, grams to kilograms. Small slips, real marks.",
              "Misreading graphs and tables. Reading the wrong row, missing the scale, or answering from the picture instead of the data.",
            ].map((item) => (
              <li key={item.slice(0, 24)} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "#7F77DD", fontWeight: 800, marginTop: 1 }}>•</span>
                <span style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
          <p style={P}>
            Test writers know these patterns too — the wrong options in NAPLAN aren't random, they're built from exactly these
            mistakes. That's why practising blind is inefficient: a pile of worksheets tells you your child got 6 out of 10, but
            not which of these walls they're hitting.
          </p>
        </div>
      </section>

      {/* ── HOW CLASSUP APPROACHES ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ background: "#F5F2EC", border: "1px solid #E8E4D8", borderRadius: 20, padding: "40px 44px", maxWidth: 860 }}>
            <h2 style={{ ...H2, marginBottom: 16 }}>How ClassUp approaches Year 5 numeracy</h2>
            <p style={{ ...P, marginBottom: 16 }}>
              <strong style={{ color: "#1A1A1A" }}>Diagnose first.</strong> The free diagnostic samples questions across all
              six strands, pitched so your child feels capable rather than examined. You get an honest report of where they
              stand — strengths and gaps, in plain English.
            </p>
            <p style={{ ...P, marginBottom: 16 }}>
              <strong style={{ color: "#1A1A1A" }}>Then practise what matters.</strong> Practice adapts to your child's actual
              gaps — more of what's wobbly, less of what's already solid. Every question comes with a clear explanation of the
              method and the trap, so a wrong answer becomes a lesson rather than a red mark.
            </p>
            <p style={{ ...P, marginBottom: 24 }}>
              <strong style={{ color: "#1A1A1A" }}>And we tell you the truth.</strong> If fractions are a problem, the report
              says so — early enough in the year to do something about it. No green-tick theatre. See{" "}
              <Link href="/how-it-works" style={LINK}>how it works</Link> and our{" "}
              <Link href="/methodology" style={LINK}>methodology</Link>.
            </p>
            <PrimaryCTA />
          </div>
        </div>
      </section>

      {/* ── HOW PARENTS CAN HELP ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={H2}>How parents can help at home (without drilling)</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px", maxWidth: 760, display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              "Short beats long. Two 15-minute sessions do more than one exhausting hour. Attention is the limiting ingredient at this age.",
              "Ask \"how did you work it out?\" Explaining the method out loud is where reasoning gets built — more valuable than the answer itself.",
              "Use real life. Cooking (fractions), shopping (money and change), travel (time and distance). Year 5 maths is everywhere; let them catch you using it.",
              "Keep the test small. NAPLAN is a snapshot, not a verdict. A calm child who knows what to expect performs closer to their real ability.",
            ].map((item) => (
              <li key={item.slice(0, 24)} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "#7F77DD", fontWeight: 800, marginTop: 1 }}>•</span>
                <span style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2 style={H2}>Frequently asked questions</h2>
          <div style={{ marginTop: 24 }}>
            <FAQAccordion items={PAGE_FAQ} defaultOpenIndexes={[0, 2]} />
          </div>
        </div>
      </section>

      {/* ── RELATED GUIDES ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={{ ...H2, fontSize: "clamp(22px, 3vw, 32px)" }}>Related guides and resources</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginTop: 24 }} className="links-grid">
            {[
              {
                href: "/naplan-year-5",
                label: "Year 5 NAPLAN",
                desc: "The full picture of Year 5 NAPLAN — all four tests, preparation, and how ClassUp helps.",
              },
              {
                href: "/naplan-year-7-numeracy",
                label: "Year 7 numeracy",
                desc: "What Year 7 NAPLAN numeracy tests — calculator sections, algebra, and the high-school step up.",
              },
              {
                href: "/naplan-year-5-reading",
                label: "Year 5 reading",
                desc: "What Year 5 NAPLAN reading tests — the three reading skills and the questions that catch children out.",
              },
              {
                href: "/naplan-year-5-language-conventions",
                label: "Year 5 language conventions",
                desc: "Spelling, grammar and punctuation — what Year 5 students are expected to know.",
              },
              {
                href: "/how-it-works",
                label: "How It Works",
                desc: "Diagnostic, honest report, then adaptive practice — the ClassUp loop end to end.",
              },
              {
                href: "/methodology",
                label: "Methodology",
                desc: "Why targeted practice outperforms generic worksheets for NAPLAN preparation.",
              },
              {
                href: "/blog/what-naplan-actually-tests",
                label: "What NAPLAN actually tests",
                desc: "A plain-English look at what each NAPLAN domain is really assessing.",
              },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
                <div
                  className="cu-card-large"
                  style={{ padding: "20px 24px", height: "100%", cursor: "pointer" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
                >
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#1A1A1A", marginBottom: 6, lineHeight: 1.35 }}>{link.label}</div>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, margin: 0 }}>{link.desc}</p>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#7F77DD", marginTop: 12 }}>Read &#8594;</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ background: "#1A1A1A", borderRadius: 24, padding: "48px 56px", textAlign: "center" }} className="cta-block">
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 800,
                color: "#FFF",
                lineHeight: 1.2,
                marginBottom: 16,
                maxWidth: 640,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Find out where your Year 5 child really stands in maths — free.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", marginBottom: 32, maxWidth: 560, marginLeft: "auto", marginRight: "auto", lineHeight: 1.65 }}>
              An honest diagnostic across all six numeracy strands, and a report that tells you the truth. About 30 minutes.
            </p>
            <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 17, padding: "18px 40px", background: "#7F77DD", color: "#FFF" }}>
              Start the free diagnostic &#8594;
            </a>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 14 }}>
              Free to start · Your child's first name is all we ask for · About 30 minutes
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .links-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .cta-block { padding: 36px 24px !important; }
        }
      `}</style>
    </PageLayout>
  );
}
