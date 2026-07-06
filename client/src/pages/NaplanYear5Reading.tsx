import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { FAQAccordion } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// /naplan-year-5-reading — Year 5 NAPLAN Reading domain landing
// Flat route, consistent with /naplan-year-5-numeracy pattern.
// All CTAs route via DIAGNOSTIC_URL (never hardcoded).
// ============================================================

const PAGE_FAQ = [
  {
    question: "How long is the Year 5 NAPLAN reading test?",
    answer:
      "50 minutes, sat online. It's adaptive, so the difficulty adjusts to how your child is answering, and the exact mix of passages differs between students.",
  },
  {
    question: "What kinds of texts are in Year 5 NAPLAN reading?",
    answer:
      "A mix of imaginative texts (stories), informative texts (factual articles), and persuasive texts (opinion pieces and arguments). The variety is deliberate — different text types demand different reading skills.",
  },
  {
    question: "What reading skills does Year 5 NAPLAN test?",
    answer:
      "Three: locating directly stated information, interpreting (inference, vocabulary in context, connecting ideas), and evaluating (author's purpose and technique). Most Year 5 marks are decided in the interpreting questions.",
  },
  {
    question: "What are the hardest Year 5 NAPLAN reading questions?",
    answer:
      "Teachers and tutors consistently point to inference questions, vocabulary in context, and author's-purpose questions. All three ask the child to go beyond what's literally written — and all three respond well to targeted practice.",
  },
  {
    question: "How can I help my child prepare for Year 5 reading?",
    answer:
      "Read with them and talk about it — asking \"why\" and \"how do you know\" builds inference better than any worksheet. Then find their specific gaps and practise those. ClassUp's free diagnostic maps all three reading skills and gives you an honest starting picture.",
  },
  {
    question: "Does ClassUp use real passages like the actual test?",
    answer:
      "Yes — the diagnostic and practice use passage-and-question sets in the same structure as NAPLAN, across imaginative, informative and persuasive text types.",
  },
];

const SKILL_ROWS = [
  {
    strand: "Locating",
    detail:
      "Finding directly stated information — the \"it says so right here\" questions. The easiest skill, and the one most children arrive with.",
  },
  {
    strand: "Interpreting",
    detail:
      "Reading between the lines: making inferences, working out word meanings from context, connecting ideas across paragraphs. This is where Year 5 lives — and where most marks are won and lost.",
  },
  {
    strand: "Evaluating",
    detail:
      "Stepping outside the text: why did the author write this, what technique are they using, is this fact or opinion?",
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
        name: "Year 5 NAPLAN Reading",
        item: "https://classup.com.au/naplan-year-5-reading",
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

export default function NaplanYear5Reading() {
  return (
    <PageLayout>
      <SEO
        title="Year 5 NAPLAN Reading: What's Tested & How to Prepare | ClassUp"
        description="What Year 5 NAPLAN reading actually tests — the three reading skills, the question types that catch children out, and how to prepare honestly."
        canonicalPath="/naplan-year-5-reading"
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
                { label: "Reading", href: null as string | null },
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

          <div className="cu-eyebrow mb-4">YEAR 5 NAPLAN READING</div>
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
            Year 5 NAPLAN Reading: what's tested, and how to prepare{" "}
            <em style={{ fontStyle: "italic", color: "#7F77DD" }}>honestly</em>
          </h1>
          <p style={{ fontSize: 18, color: "#444", lineHeight: 1.7, maxWidth: 700, marginBottom: 32 }}>
            By Year 5, reading questions stop asking "what happened?" and start asking "what does it mean?" Here's what the
            reading test actually measures, where children typically lose marks, and how to find your child's real gaps before
            March.
          </p>
          <PrimaryCTA />
          <p style={{ fontSize: 13, color: "#888", marginTop: 14 }}>
            Free to start · Your child's first name is all we ask for · About 30 minutes
          </p>
        </div>
      </section>

      {/* ── WHAT YEAR 5 READING TESTS ── */}
      <section className="cu-section">
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={H2}>What Year 5 NAPLAN reading actually tests</h2>
          <p style={P}>
            The test is online, adaptive, and runs for 50 minutes. Your child reads a series of passages — stories, factual
            articles, and persuasive pieces — and answers questions about each one.
          </p>
          <p style={P}>Underneath, every question is testing one of three reading skills:</p>

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
                    Reading skill
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
                {SKILL_ROWS.map((row, i) => (
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
            The passages themselves step up from Year 3: longer texts, richer vocabulary, and a mix of imaginative, informative
            and persuasive writing — because reading a story and reading an argument are different skills.
          </p>
          <p style={P}>
            Reading is one of four tests in{" "}
            <Link href="/naplan-year-5" style={LINK}>Year 5 NAPLAN</Link>. The others are{" "}
            <Link href="/naplan-year-5-numeracy" style={LINK}>Year 5 numeracy</Link>, Writing, and Language Conventions (
            <Link href="/naplan/language-conventions" style={LINK}>spelling, grammar and punctuation</Link>).
          </p>
        </div>
      </section>

      {/* ── WHERE STUDENTS LOSE MARKS ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={H2}>Where Year 5 students actually lose marks</h2>
          <p style={{ ...P, marginBottom: 14 }}>Teachers and tutors see the same patterns every year:</p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px", maxWidth: 760, display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              "Inference questions. The answer isn't written anywhere — it has to be worked out. Children who read fluently but literally pick the option that copies words from the text, which is usually the trap.",
              "Vocabulary in context. \"What does 'reluctant' mean in this sentence?\" Guessing from the word alone instead of the sentence around it.",
              "Connecting across a text. Questions that need paragraph two and paragraph five held together. Children answer from whichever paragraph they read last.",
              "Author's purpose and technique. \"Why did the author include this?\" is a new kind of question at Year 5, and it catches children who've only ever been asked \"what happened?\"",
              "Rushing the passage. Skimming, then answering from memory of the skim. The wrong options are written for exactly this reader.",
            ].map((item) => (
              <li key={item.slice(0, 24)} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "#7F77DD", fontWeight: 800, marginTop: 1 }}>•</span>
                <span style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
          <p style={P}>
            A stack of comprehension worksheets tells you your child got 7 out of 10 — but not whether the three they missed were
            inference, vocabulary, or author's purpose. And those need different practice.
          </p>
        </div>
      </section>

      {/* ── HOW CLASSUP APPROACHES ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ background: "#F5F2EC", border: "1px solid #E8E4D8", borderRadius: 20, padding: "40px 44px", maxWidth: 860 }}>
            <h2 style={{ ...H2, marginBottom: 16 }}>How ClassUp approaches Year 5 reading</h2>
            <p style={{ ...P, marginBottom: 16 }}>
              <strong style={{ color: "#1A1A1A" }}>Diagnose first.</strong> The free diagnostic uses real passage-and-question
              sets — the same structure as NAPLAN itself — and reads which of the three skills are solid and which are wobbly.
              You get an honest report in plain English.
            </p>
            <p style={{ ...P, marginBottom: 16 }}>
              <strong style={{ color: "#1A1A1A" }}>Then practise what matters.</strong> Practice adapts to your child's actual
              gaps — more inference work if inference is the wall, less of what's already strong. Every question comes with a
              clear explanation of the reasoning and the trap, so a wrong answer becomes a lesson.
            </p>
            <p style={{ ...P, marginBottom: 24 }}>
              <strong style={{ color: "#1A1A1A" }}>And we tell you the truth.</strong> If your child reads fluently but struggles
              to read between the lines, the report says exactly that — early enough in the year to do something about it. See{" "}
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
              "Read together, then talk. The single best reading practice is conversation: \"Why do you think she did that?\" \"How do you know?\" — that's inference training in disguise.",
              "Ask for evidence. When your child answers a question about a book or show, ask \"what makes you say that?\" Pointing to evidence is exactly what NAPLAN rewards.",
              "Mix the diet. Stories build one muscle; news articles, instructions and opinion pieces build others. Year 5 tests all of them.",
              "Keep it calm. A child who knows the test is a snapshot, not a verdict, reads more carefully than an anxious one.",
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
                href: "/naplan-year-5-numeracy",
                label: "Year 5 numeracy",
                desc: "What Year 5 NAPLAN numeracy tests — the six strands and the traps that cost marks.",
              },
              {
                href: "/naplan-year-7-reading",
                label: "Year 7 reading",
                desc: "Longer passages, persuasive texts and evaluating skills — what steps up at Year 7.",
              },
              {
                href: "/naplan/language-conventions",
                label: "Language Conventions",
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
                href: "/blog/how-to-read-naplan-results",
                label: "How to read NAPLAN results",
                desc: "What the four proficiency levels mean — and what to do next.",
              },
              {
                href: "/blog/help-child-catch-up-reading",
                label: "Help your child catch up on reading",
                desc: "Practical ways to build reading skills when your child has fallen behind.",
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
              Find out where your Year 5 child really stands in reading — free.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", marginBottom: 32, maxWidth: 560, marginLeft: "auto", marginRight: "auto", lineHeight: 1.65 }}>
              An honest diagnostic across all three reading skills, and a report that tells you the truth. About 30 minutes.
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
