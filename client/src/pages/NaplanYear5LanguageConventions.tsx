import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { FAQAccordion } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// /naplan-year-5-language-conventions — Year 5 NAPLAN LC domain landing
// Flat route, consistent with /naplan-year-5-reading pattern.
// All CTAs route via DIAGNOSTIC_URL (never hardcoded).
// ============================================================

const PAGE_FAQ = [
  {
    question: "How is spelling tested in Year 5 NAPLAN?",
    answer:
      "By audio. A word is read aloud and used in a sentence, and your child types it from memory. There's no multiple choice and no visual hint. It tests recall, which is harder than recognising a correct spelling in a list.",
  },
  {
    question: "How long is the Year 5 language conventions test?",
    answer:
      "About 45 minutes, sat online. It's adaptive, so the difficulty adjusts to how your child is answering.",
  },
  {
    question: "What does Year 5 NAPLAN language conventions include?",
    answer:
      "Two parts: spelling (delivered by audio) and grammar and punctuation (word forms, tense, agreement, apostrophes, commas, speech marks and sentence structure).",
  },
  {
    question: "What are the hardest parts of Year 5 language conventions?",
    answer:
      "Teachers and tutors consistently point to audio spelling from memory, apostrophes, homophones, and punctuating direct speech. All are very fixable with targeted, little-and-often practice.",
  },
  {
    question: "How can I help my child prepare?",
    answer:
      "Practise spelling by ear (read the word aloud, have them write it), notice apostrophes and homophones in everyday text, and read aloud together. Then target the specific gaps | ClassUp's free diagnostic shows you where they are.",
  },
  {
    question: "Does ClassUp practise spelling the way NAPLAN tests it?",
    answer:
      "Yes, spelling is practised by audio, the same format as the real test, not as a pick-the-right-word list.",
  },
];

const PART_ROWS = [
  {
    part: "Spelling",
    detail:
      "Delivered by audio: a word is read aloud and used in a sentence, and your child types it from memory. No multiple choice, no visual hint. This is the harder way to test spelling, and it's exactly how NAPLAN does it.",
  },
  {
    part: "Grammar and punctuation",
    detail:
      "Choosing the correct word form, tense or agreement; fixing or placing punctuation (apostrophes, commas, speech marks); and identifying parts of speech and correct sentence structure.",
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
        name: "Year 5 NAPLAN Language Conventions",
        item: "https://classup.com.au/naplan-year-5-language-conventions",
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

export default function NaplanYear5LanguageConventions() {
  return (
    <PageLayout>
      <SEO
        title="Year 5 NAPLAN Language Conventions: Spelling, Grammar & Punctuation | ClassUp"
        description="What Year 5 NAPLAN language conventions tests, spelling (by audio), grammar and punctuation, where children lose marks, and how to prepare honestly."
        canonicalPath="/naplan-year-5-language-conventions"
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
                { label: "Language Conventions", href: null as string | null },
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

          <div className="cu-eyebrow mb-4">YEAR 5 NAPLAN LANGUAGE CONVENTIONS</div>
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
            Year 5 NAPLAN Language Conventions: what's tested, and how to prepare{" "}
            <em style={{ fontStyle: "italic", color: "#7F77DD" }}>honestly</em>
          </h1>
          <p style={{ fontSize: 18, color: "#444", lineHeight: 1.7, maxWidth: 700, marginBottom: 32 }}>
            Language conventions is the quiet mark-winner of NAPLAN, spelling, grammar and punctuation, tested precisely.
            It's also the one section where a few targeted fixes can lift a result fast. Here's what it covers, where Year 5
            children slip, and how to find the real gaps before March.
          </p>
          <PrimaryCTA />
          <p style={{ fontSize: 13, color: "#888", marginTop: 14 }}>
            Free to start · Your child's first name is all we ask for · About 30 minutes
          </p>
        </div>
      </section>

      {/* ── WHAT YEAR 5 LC TESTS ── */}
      <section className="cu-section">
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={H2}>What Year 5 NAPLAN language conventions actually tests</h2>
          <p style={P}>
            The test is online, adaptive, and runs for about 45 minutes. It comes in two parts:
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
                    Part
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
                    What it covers
                  </th>
                </tr>
              </thead>
              <tbody>
                {PART_ROWS.map((row, i) => (
                  <tr key={row.part} style={{ background: i % 2 === 0 ? "#FFF" : "#FAFAF8" }}>
                    <td
                      style={{
                        padding: "14px 18px",
                        fontWeight: 700,
                        color: "#1A1A1A",
                        borderBottom: "1px solid #E8E4D8",
                        verticalAlign: "top",
                      }}
                    >
                      {row.part}
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
            The audio spelling format catches a lot of families off guard. Most spelling apps show the word and ask your child
            to pick the right version, NAPLAN plays the word and expects them to produce it from scratch. That's a genuinely
            different (and harder) skill, and it's worth practising the way the test actually works.
          </p>
          <p style={P}>
            Language conventions is one of four tests in{" "}
            <Link href="/naplan-year-5" style={LINK}>Year 5 NAPLAN</Link>. The others are{" "}
            <Link href="/naplan-year-5-numeracy" style={LINK}>Year 5 numeracy</Link>,{" "}
            <Link href="/naplan-year-5-reading" style={LINK}>Year 5 reading</Link>, and Writing.
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
              "Audio spelling from memory. Children who \"recognise\" the right spelling in a list can't always produce it cold. The test rewards recall, not recognition.",
              "Apostrophes. Possessives versus plurals (\"the dog's bone\" vs \"two dogs\"), and its versus it's. A reliable source of dropped marks.",
              "Homophones: there / their / they're, to / too / two, your / you're. Easy to know, easy to slip under time pressure.",
              "Verb tense and agreement. \"The team were\" vs \"the team was\"; keeping tense consistent across a sentence.",
              "Punctuating direct speech. Where the comma and speech marks go. A specific skill many children have never been taught explicitly.",
            ].map((item) => (
              <li key={item.slice(0, 24)} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: "#7F77DD", fontWeight: 800, marginTop: 1 }}>•</span>
                <span style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>{item}</span>
              </li>
            ))}
          </ul>
          <p style={P}>
            NAPLAN's wrong options are built from exactly these slips. A spelling list your child aces out loud tells you little
            about how they'll go typing words cold under time.
          </p>
        </div>
      </section>

      {/* ── HOW CLASSUP APPROACHES ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ background: "#F5F2EC", border: "1px solid #E8E4D8", borderRadius: 20, padding: "40px 44px", maxWidth: 860 }}>
            <h2 style={{ ...H2, marginBottom: 16 }}>How ClassUp approaches Year 5 language conventions</h2>
            <p style={{ ...P, marginBottom: 16 }}>
              <strong style={{ color: "#1A1A1A" }}>Diagnose first.</strong> The free diagnostic covers both parts, audio
              spelling and grammar and punctuation, pitched so your child feels capable rather than examined. You get an
              honest report of which skills are solid and which are wobbly, in plain English.
            </p>
            <p style={{ ...P, marginBottom: 16 }}>
              <strong style={{ color: "#1A1A1A" }}>Then practise what matters.</strong> Practice adapts to your child's actual
              gaps, more apostrophe work if apostrophes are the wall, less of what's already strong. Spelling is practised the
              way NAPLAN tests it: by audio. Every question comes with a clear explanation, so a wrong answer becomes a lesson.
            </p>
            <p style={{ ...P, marginBottom: 24 }}>
              <strong style={{ color: "#1A1A1A" }}>And we tell you the truth.</strong> If homophones are the problem, the report
              says so, early enough in the year to do something about it. See{" "}
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
              "Practise spelling by ear, not by sight. Read a word aloud, use it in a sentence, and have your child write it. That's the NAPLAN format. Testing them on a list they can see is easier than the real thing.",
              "Hunt apostrophes and homophones in the wild. Point them out on signs, menus and messages. Little-and-often beats a worksheet blitz.",
              "Read aloud together. Hearing how sentences are built quietly teaches grammar and punctuation without it feeling like study.",
              "Keep it calm. It's a snapshot, not a verdict. A relaxed child makes fewer careless slips.",
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
                desc: "The full picture of Year 5 NAPLAN, all four tests, preparation, and how ClassUp helps.",
              },
              {
                href: "/naplan-year-5-numeracy",
                label: "Year 5 numeracy",
                desc: "What Year 5 NAPLAN numeracy tests: the six strands and the traps that cost marks.",
              },
              {
                href: "/naplan-year-5-reading",
                label: "Year 5 reading",
                desc: "What Year 5 NAPLAN reading tests: the three reading skills and the questions that catch children out.",
              },
              {
                href: "/naplan-year-7-language-conventions",
                label: "Year 7 language conventions",
                desc: "Trickier spelling, complex-sentence punctuation, and reported speech, what steps up at Year 7.",
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
              {
                href: "/blog/how-to-read-naplan-results",
                label: "How to read NAPLAN results",
                desc: "What the four proficiency levels mean, and what to do next.",
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
              Find out where your Year 5 child really stands, free.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", marginBottom: 32, maxWidth: 560, marginLeft: "auto", marginRight: "auto", lineHeight: 1.65 }}>
              An honest diagnostic across spelling, grammar and punctuation, and a report that tells you the truth. About 30 minutes.
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
