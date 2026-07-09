import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { FAQAccordion } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// /naplan/proficiency-levels-explained — replaces the retired
// /naplan/bands-explained page (10-band system retired by ACARA in 2023).
// A 301 redirect from the old slug lives in App.tsx / vercel.json.
// All CTAs route via DIAGNOSTIC_URL (never hardcoded).
// ============================================================

const PAGE_FAQ = [
  {
    question: "Does NAPLAN still use bands?",
    answer:
      "No. The ten-band scale and the National Minimum Standard were retired in 2023. NAPLAN now reports four proficiency levels: Exceeding, Strong, Developing, and Needs additional support.",
  },
  {
    question: "What are the four NAPLAN proficiency levels?",
    answer:
      "Exceeding (above year-level expectations), Strong (meeting them), Developing (working towards them), and Needs additional support (not yet meeting them, and would benefit from focused help).",
  },
  {
    question: "Is \"Developing\" a bad NAPLAN result?",
    answer:
      "No. It means your child is still working towards the expected level. It's best read as an early signal: there are specific skills to build, and most of the school year to build them.",
  },
  {
    question: "Is \"Strong\" only an average result?",
    answer:
      "No, \"Strong\" means your child has met the challenging-but-reasonable standard for their year level. It's a genuinely good result and the level most parents can aim for.",
  },
  {
    question: "Can I compare my child's result to an older sibling's NAPLAN band?",
    answer:
      "Not directly. The scale was reset in 2023, so band results from 2008–2022 don't line up with the proficiency levels used from 2023 onwards.",
  },
  {
    question: "What does the shaded box on the report mean?",
    answer:
      "It shows the typical range of results for your child's year level. The black dot is your child's own result, inside the box is typical, above is above typical, below flags an area that may need support.",
  },
];

const LEVEL_ROWS = [
  {
    level: "Exceeding",
    detail: "Your child's result is above what's expected at their year level.",
  },
  {
    level: "Strong",
    detail:
      "Your child has met the challenging-but-reasonable expectations for their year level. This is a good result. It's the level most parents can aim for.",
  },
  {
    level: "Developing",
    detail:
      "Your child is working towards year-level expectations. There are specific skills to build, and it's the level where early, targeted help makes the biggest difference.",
  },
  {
    level: "Needs additional support",
    detail:
      "Your child isn't yet meeting year-level expectations and would benefit from focused help. The priority is a calm, structured plan, not pressure.",
  },
];

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://classup.com.au/" },
      { "@type": "ListItem", position: 2, name: "NAPLAN", item: "https://classup.com.au/naplan" },
      {
        "@type": "ListItem",
        position: 3,
        name: "NAPLAN Proficiency Levels Explained",
        item: "https://classup.com.au/naplan/proficiency-levels-explained",
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

export default function NaplanProficiencyLevels() {
  return (
    <PageLayout>
      <SEO
        title="NAPLAN Proficiency Levels Explained (2026) | ClassUp"
        description="NAPLAN no longer uses bands. Since 2023 results use four proficiency levels: Exceeding, Strong, Developing, Needs additional support. Here's what each means for your child."
        canonicalPath="/naplan/proficiency-levels-explained"
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
                { label: "Proficiency Levels", href: null as string | null },
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

          <div className="cu-eyebrow mb-4">NAPLAN RESULTS EXPLAINED</div>
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
            NAPLAN <em style={{ fontStyle: "italic", color: "#7F77DD" }}>proficiency levels</em> explained
          </h1>
          <p style={{ fontSize: 18, color: "#444", lineHeight: 1.7, maxWidth: 700, marginBottom: 32 }}>
            If you're looking for "NAPLAN bands", here's the first thing to know: they're gone. Since 2023, NAPLAN no longer uses
            the old ten-band scale or the "National Minimum Standard". Results now come as one of four proficiency levels. Here's
            what each one actually means, and what's worth doing next.
          </p>
          <PrimaryCTA />
          <p style={{ fontSize: 13, color: "#888", marginTop: 14 }}>
            Free to start · Your child's first name is all we ask for · About 30 minutes
          </p>
        </div>
      </section>

      {/* ── WHAT CHANGED IN 2023 ── */}
      <section className="cu-section">
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={H2}>What changed in 2023 (and why it matters)</h2>
          <p style={P}>
            Until 2022, NAPLAN reported results on a scale of ten numbered bands, with a line called the National Minimum
            Standard. It confused a lot of parents: a child could sit "above the minimum standard" and still be well behind the
            typical range for their year.
          </p>
          <p style={P}>
            From 2023, ACARA replaced that system entirely. Results from 2023 onwards use four proficiency levels and a reset
            scale, which also means results from 2023 on can't be directly compared with the old band results from 2008–2022. If
            your older child has a "Band 6" from a few years ago and your younger child has a "Strong", those aren't on the same
            scale.
          </p>
        </div>
      </section>

      {/* ── THE FOUR LEVELS ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={H2}>The four proficiency levels</h2>
          <p style={P}>
            Each test area, Numeracy, Reading, Writing, Spelling, and Grammar &amp; Punctuation, gets one of these four levels:
          </p>

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
                      width: "28%",
                    }}
                  >
                    Level
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
                    What it means
                  </th>
                </tr>
              </thead>
              <tbody>
                {LEVEL_ROWS.map((row, i) => (
                  <tr key={row.level} style={{ background: i % 2 === 0 ? "#FFF" : "#FAFAF8" }}>
                    <td
                      style={{
                        padding: "14px 18px",
                        fontWeight: 700,
                        color: "#1A1A1A",
                        borderBottom: "1px solid #E8E4D8",
                        verticalAlign: "top",
                      }}
                    >
                      {row.level}
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
            Two things parents most often misread. First, "Strong" is not second prize, it means your child is exactly where
            they should be. The proficiency standard was set by panels of teachers at a "challenging but reasonable" level, so
            Strong is a genuinely good result. Second, "Developing" is not failing. It's an early, useful signal that there are
            specific, workable gaps to close, with most of the school year ahead to close them.
          </p>
        </div>
      </section>

      {/* ── HOW TO READ THE REPORT ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={H2}>How to read the report itself</h2>
          <p style={P}>
            Your child's report shows a black dot, their result, on a scale for each test area, alongside a shaded box that
            shows the typical range for their year level. A dot inside the box is within the typical range; above the box is above
            typical; below the box flags an area that may need extra support. Some reports also show a scale score. It's a
            snapshot of tests sat in March, one useful data point, best read alongside school reports and your teacher's view.
            For a parent's walk-through, see{" "}
            <Link href="/blog/how-to-read-naplan-results" style={LINK}>how to read your child's results</Link>.
          </p>
        </div>
      </section>

      {/* ── WHAT THE LEVEL DOESN'T TELL YOU ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ background: "#F5F2EC", border: "1px solid #E8E4D8", borderRadius: 20, padding: "40px 44px", maxWidth: 860 }}>
            <h2 style={{ ...H2, marginBottom: 16 }}>What the level doesn't tell you</h2>
            <p style={{ ...P, marginBottom: 0 }}>
              This is the honest bit most guides skip. The proficiency level tells you where your child landed, not why.
              "Developing" in numeracy doesn't tell you whether the issue is fractions, multi-step problems, or simply reading the
              questions too fast. Two children with the same level can have completely different gaps. The report is a flag, not a
              diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT TO DO NEXT ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={H2}>What to do next, for each level</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px", maxWidth: 760, display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              "Exceeding or Strong: solid foundations. The focus is extension, consistency and confidence, keeping your child stretched and engaged, not catching up.",
              "Developing: this is where targeted help pays off most. Find the specific gaps and work on those, in short sessions, well before next March. Avoid the panic-buy of generic worksheet packs, practising everything is practising nothing.",
              "Needs additional support: talk to your child's teacher first, the school may already have support in motion, then build a simple, specific plan around the actual gaps. Progress here comes from precision and consistency, not volume.",
            ].map((item) => (
              <li key={item.slice(0, 24)} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "#7F77DD", fontWeight: 800, marginTop: 1 }}>•</span>
                <span style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
          <p style={P}>
            Whatever the level, the useful next step is the same: find out precisely where your child stands, skill by skill.
            That's what ClassUp's free diagnostic does: an honest report of what's solid, what's wobbly, and what to work on
            first. It's the approach behind <Link href="/how-it-works" style={LINK}>how it works</Link> and our{" "}
            <Link href="/methodology" style={LINK}>methodology</Link>, with year-specific guidance in the{" "}
            <Link href="/naplan-year-5" style={LINK}>Year 5 NAPLAN</Link> and{" "}
            <Link href="/naplan-year-7" style={LINK}>Year 7 NAPLAN</Link> hubs.
          </p>
          <div style={{ marginTop: 8 }}>
            <PrimaryCTA />
          </div>
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
                href: "/blog/how-to-read-naplan-results",
                label: "How to read your child's results",
                desc: "A parent's plain-English guide to the report and what to do next.",
              },
              {
                href: "/naplan-year-5",
                label: "Year 5 NAPLAN",
                desc: "The full picture of Year 5 NAPLAN, all four tests, preparation, and how ClassUp helps.",
              },
              {
                href: "/naplan-year-7",
                label: "Year 7 NAPLAN",
                desc: "The first NAPLAN of high school, what steps up, and how to prepare.",
              },
              {
                href: "/how-it-works",
                label: "How It Works",
                desc: "Diagnostic, honest report, then adaptive practice: the ClassUp loop end to end.",
              },
              {
                href: "/methodology",
                label: "Methodology",
                desc: "Why targeted practice outperforms generic worksheets for NAPLAN preparation.",
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
              See exactly where your child stands, free.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", marginBottom: 32, maxWidth: 560, marginLeft: "auto", marginRight: "auto", lineHeight: 1.65 }}>
              An honest, skill-by-skill diagnostic across numeracy, reading and language conventions. About 30 minutes, and the
              report tells you the truth.
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
