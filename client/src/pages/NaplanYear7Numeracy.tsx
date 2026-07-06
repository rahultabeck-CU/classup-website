import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { FAQAccordion } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// /naplan-year-7-numeracy — Year 7 NAPLAN Numeracy domain landing
// Flat route, consistent with /naplan-year-7 hub pattern.
// All CTAs route via DIAGNOSTIC_URL (never hardcoded).
// ============================================================

const PAGE_FAQ = [
  {
    question: "Is a calculator allowed in Year 7 NAPLAN numeracy?",
    answer:
      "Partly. The test starts with a short non-calculator section, then an on-screen calculator unlocks for the remaining questions. Students can't return to the non-calculator section once the calculator is available.",
  },
  {
    question: "How long is the Year 7 numeracy test?",
    answer:
      "65 minutes, sat online. It's adaptive, so the difficulty adjusts to how your child is answering, and the exact mix of questions differs between students.",
  },
  {
    question: "What maths should a Year 7 child know for NAPLAN?",
    answer:
      "The six curriculum strands — number (fractions, decimals, percentages, ratio), beginning algebra, measurement, space, statistics and probability. The big shifts from Year 5 are algebra and ratio appearing properly, and multi-step reasoning becoming the default.",
  },
  {
    question: "What are the hardest Year 7 NAPLAN numeracy topics?",
    answer:
      "Teachers and tutors consistently point to non-calculator arithmetic, early algebra, and ratio and rate problems. All three are new or newly demanding at Year 7 — and all three respond well to targeted practice.",
  },
  {
    question: "How is Year 7 numeracy different from Year 5?",
    answer:
      "It's 15 minutes longer, includes a non-calculator section followed by a calculator section, and introduces algebra, ratio and index notation. The reasoning demand steps up to match the start of high school.",
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
    detail: "Fractions, decimals and percentages used fluently, ratio and rate, index notation, negative numbers",
  },
  {
    strand: "Algebra",
    detail: "Proper algebra begins — variables, expressions, solving simple equations, linear patterns and graphs",
  },
  {
    strand: "Measurement",
    detail: "Area and perimeter of composite shapes, volume, unit conversions, time and scale",
  },
  {
    strand: "Space",
    detail: "Angle relationships, transformations, coordinates on the Cartesian plane, 3D objects",
  },
  {
    strand: "Statistics",
    detail: "Mean, median, mode and range, interpreting real data sets and graphs",
  },
  {
    strand: "Probability",
    detail: "Sample spaces, assigning probabilities as fractions and decimals, simple experiments",
  },
];

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://classup.com.au/" },
      { "@type": "ListItem", position: 2, name: "NAPLAN", item: "https://classup.com.au/naplan" },
      { "@type": "ListItem", position: 3, name: "Year 7 NAPLAN", item: "https://classup.com.au/naplan-year-7" },
      {
        "@type": "ListItem",
        position: 4,
        name: "Year 7 NAPLAN Numeracy",
        item: "https://classup.com.au/naplan-year-7-numeracy",
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

export default function NaplanYear7Numeracy() {
  return (
    <PageLayout>
      <SEO
        title="Year 7 NAPLAN Numeracy: What's Tested & How to Prepare | ClassUp"
        description="What Year 7 NAPLAN numeracy actually tests — the calculator and non-calculator sections, the six strands, and how to prepare honestly. Free diagnostic included."
        canonicalPath="/naplan-year-7-numeracy"
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
                { label: "Year 7", href: "/naplan-year-7" },
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

          <div className="cu-eyebrow mb-4">YEAR 7 NAPLAN NUMERACY</div>
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
            Year 7 NAPLAN Numeracy: what's tested, and how to prepare{" "}
            <em style={{ fontStyle: "italic", color: "#7F77DD" }}>honestly</em>
          </h1>
          <p style={{ fontSize: 18, color: "#444", lineHeight: 1.7, maxWidth: 700, marginBottom: 32 }}>
            Year 7 numeracy is the first NAPLAN maths test of high school — longer, harder, and with a format change most
            parents don't know about: part of it is done without a calculator. Here's what it covers, where students lose marks,
            and how to find your child's real gaps before March.
          </p>
          <PrimaryCTA />
          <p style={{ fontSize: 13, color: "#888", marginTop: 14 }}>
            Free to start · Your child's first name is all we ask for · About 30 minutes
          </p>
        </div>
      </section>

      {/* ── WHAT YEAR 7 NUMERACY TESTS ── */}
      <section className="cu-section">
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={H2}>What Year 7 NAPLAN numeracy actually tests</h2>
          <p style={P}>
            The test is online, adaptive, and runs for 65 minutes — noticeably longer than Year 5's. And it comes in two sections:
            a short non-calculator section first, where your child works everything by hand, then an on-screen calculator unlocks
            for the rest. Once it unlocks, they can't go back — so those first questions have to stand on mental arithmetic alone.
          </p>
          <p style={P}>The questions draw on six strands of the Australian curriculum:</p>

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
                    What it looks like at Year 7
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
            The step up from Year 5 is real: algebra appears properly for the first time, percentages and ratio become everyday
            tools, and questions assume the multi-step reasoning high school expects.
          </p>
          <p style={P}>
            Numeracy is one of four tests in{" "}
            <Link href="/naplan-year-7" style={LINK}>Year 7 NAPLAN</Link>. The others are{" "}
            <Link href="/naplan-year-7-reading" style={LINK}>Reading</Link>, Writing, and Language Conventions (
            <Link href="/naplan-year-5-language-conventions" style={LINK}>spelling, grammar and punctuation</Link>). Compare with{" "}
            <Link href="/naplan-year-5-numeracy" style={LINK}>Year 5 numeracy</Link> to see how the maths steps up.
          </p>
        </div>
      </section>

      {/* ── WHERE STUDENTS LOSE MARKS ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={H2}>Where Year 7 students actually lose marks</h2>
          <p style={{ ...P, marginBottom: 14 }}>Teachers and tutors see the same patterns every year:</p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px", maxWidth: 760, display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              "The non-calculator section. Students who've grown reliant on a calculator lose easy marks on arithmetic they'd normally sail through — fractions, decimals and percentages by hand.",
              "Algebra basics. It's new territory. Translating a worded situation into an expression, or solving for an unknown, trips students who've only just met the idea.",
              "Ratio and rate. \"Best buy\" comparisons, speed and scale problems — conceptually new at Year 7 and heavily tested.",
              "Multi-step problems. The single most common pattern: solving step one correctly and choosing the answer that matches it, when the question asked for step two.",
            ].map((item) => (
              <li key={item.slice(0, 24)} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "#7F77DD", fontWeight: 800, marginTop: 1 }}>•</span>
                <span style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
          <p style={P}>
            NAPLAN's wrong options are built from exactly these mistakes. That's why blind practice is inefficient — a stack of
            worksheets says 6 out of 10 without telling you which of these walls your child is hitting.
          </p>
        </div>
      </section>

      {/* ── HOW CLASSUP APPROACHES ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ background: "#F5F2EC", border: "1px solid #E8E4D8", borderRadius: 20, padding: "40px 44px", maxWidth: 860 }}>
            <h2 style={{ ...H2, marginBottom: 16 }}>How ClassUp approaches Year 7 numeracy</h2>
            <p style={{ ...P, marginBottom: 16 }}>
              <strong style={{ color: "#1A1A1A" }}>Diagnose first.</strong> The free diagnostic samples questions across all
              six strands, pitched so your child feels capable rather than examined — they're adjusting to high school as it is.
              You get an honest report of where they stand, in plain English.
            </p>
            <p style={{ ...P, marginBottom: 16 }}>
              <strong style={{ color: "#1A1A1A" }}>Then practise what matters.</strong> Practice adapts to your child's actual
              gaps — more of what's wobbly, less of what's already solid. Every question comes with a clear explanation of the
              method and the trap, so a wrong answer becomes a lesson rather than a red mark.
            </p>
            <p style={{ ...P, marginBottom: 24 }}>
              <strong style={{ color: "#1A1A1A" }}>And we tell you the truth.</strong> If algebra is a problem, the report
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
              "Rebuild the by-hand muscle. A few minutes of mental arithmetic — fractions, percentages, times tables — pays off directly in the non-calculator section.",
              "Ask \"how did you work it out?\" Explaining the method out loud is where reasoning gets built, especially with new algebra ideas.",
              "Use real life. Discounts and percentages while shopping, ratios in cooking, speed and time on trips. Year 7 maths is everywhere.",
              "Keep the test small. It's a snapshot in a year full of new things — new school, new teachers, new subjects. A calm child performs closer to their real ability.",
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
                href: "/naplan-year-7",
                label: "Year 7 NAPLAN",
                desc: "The full picture of Year 7 NAPLAN — all four tests, preparation, and how ClassUp helps.",
              },
              {
                href: "/naplan-year-5-numeracy",
                label: "Year 5 numeracy",
                desc: "What Year 5 NAPLAN numeracy tests — and how the maths steps up by Year 7.",
              },
              {
                href: "/naplan-year-7-reading",
                label: "Year 7 reading",
                desc: "Longer passages, persuasive texts and evaluating skills — what the reading test actually tests.",
              },
              {
                href: "/naplan-year-5-language-conventions",
                label: "Language Conventions",
                desc: "Spelling, grammar and punctuation — what Year 7 students are expected to know.",
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
                href: "/blog/year-7-high-school-maths-shock",
                label: "Year 7 high-school maths shock",
                desc: "Algebra, ratio and multi-step reasoning arrive fast. What the Year 7 jump looks like.",
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
              Find out where your Year 7 child really stands in maths — free.
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
