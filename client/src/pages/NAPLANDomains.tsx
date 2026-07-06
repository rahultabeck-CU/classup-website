import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { SampleQuestionCard, Breadcrumb, InPostCTA, WritingPlaceholderCard } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL } from "@/lib/classup";
import { SAMPLE_6, SAMPLE_7, SAMPLE_8, SAMPLE_9 } from "@/lib/classup";
import { SEO } from "@/components/SEO";

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

function DomainSidebar({ current }: { current: string }) {
  const links = [
    { label: "Numeracy", href: "/naplan/numeracy" },
    { label: "Reading", href: "/naplan/reading" },
    { label: "Language Conventions", href: "/naplan/language-conventions" },
    { label: "Writing", href: "/naplan/writing" },
    { label: "Proficiency Levels", href: "/naplan/proficiency-levels-explained" },
    { label: "Year 5 Guide", href: "/naplan/year-5" },
    { label: "Year 7 Guide", href: "/naplan/year-7" },
  ];
  return (
    <div style={{ position: "sticky", top: 100 }}>
      <div className="cu-card-large" style={{ padding: 24, marginBottom: 20 }}>
        <div className="cu-eyebrow mb-3">NAPLAN DOMAINS</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={{ ...sidebarLinkStyle, background: l.label === current ? "#EEEDFE" : "#F5F2EC", color: l.label === current ? "#534AB7" : "#444" }}>
              {l.label} →
            </Link>
          ))}
        </div>
      </div>
      <div style={{ background: "#EEEDFE", borderRadius: 20, padding: 24 }}>
        <div className="cu-eyebrow mb-3" style={{ color: "#7F77DD" }}>FREE DIAGNOSTIC</div>
        <p style={{ fontSize: 14, color: "#26215C", lineHeight: 1.6, marginBottom: 16 }}>
          Find your child's specific gaps. Free. No credit card.
        </p>
        <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ width: "100%", justifyContent: "center", display: "flex" }}>
          Start free diagnostic →
        </a>
      </div>
    </div>
  );
}

// ============================================================
// READING PAGE
// ============================================================
export function NAPLANReading() {
  return (
    <PageLayout>
      <SEO
        title="NAPLAN Reading — what is tested and how to improve — ClassUp"
        description="NAPLAN Reading tests a student's ability to understand and interpret written texts. Here is what the test covers, common mistakes, and how ClassUp's coaches address them."
        canonicalPath="/naplan/reading"
      />
      <section className="cu-section" style={{ paddingTop: 24 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "NAPLAN", href: "/naplan" }, { label: "Reading" }]} />
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 48, alignItems: "start" }} className="domain-grid">
            <div>
              <div className="cu-eyebrow mb-4">NAPLAN READING</div>
              <h1 className="cu-h1 mb-4">
                NAPLAN Reading:{" "}
                <em className="cu-italic-accent">what's actually tested.</em>
              </h1>
              <p className="cu-body-large mb-6">
                Reading tests how well your child can find, understand, and analyse information in texts. It's not about reading speed, it's about comprehension precision.
              </p>

              <h2 className="cu-h2-card mb-3">The three text types</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {[
                  { type: "Narrative", desc: "Stories, personal recounts, and literary texts. Questions focus on character motivation, plot, and language choices.", color: "#EAF3DE", textColor: "#4A7515" },
                  { type: "Informational", desc: "Reports, explanations, procedures, and descriptions. Questions focus on locating facts, understanding structure, and interpreting diagrams.", color: "#EEEDFE", textColor: "#534AB7" },
                  { type: "Persuasive", desc: "Arguments, opinions, and editorials. Questions focus on identifying the author's position, evaluating evidence, and recognising persuasive techniques.", color: "#FAEEDA", textColor: "#B36B0A" },
                ].map((item) => (
                  <div key={item.type} style={{ background: item.color, borderRadius: 14, padding: "18px 20px" }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#1A1A1A", marginBottom: 6 }}>{item.type}</div>
                    <p style={{ fontSize: 13, color: item.textColor, lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="cu-h2-card mb-3">The three cognitive processes</h2>
              <p className="cu-body-card mb-4">
                NAPLAN Reading questions are classified by cognitive process, what type of thinking they require:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
                {[
                  { process: "Locate and retrieve", desc: "Find information that is directly stated in the text. The answer is in the text, your child needs to find it." },
                  { process: "Integrate and interpret", desc: "Combine information from different parts of the text to understand meaning. The answer requires connecting ideas." },
                  { process: "Reflect and evaluate", desc: "Think beyond the text, consider the author's purpose, the effectiveness of language choices, or the quality of arguments." },
                ].map((item) => (
                  <div key={item.process} style={{ display: "flex", gap: 12, padding: "12px 16px", background: "#F5F2EC", borderRadius: 12 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#639922", marginTop: 6, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#1A1A1A", marginBottom: 2 }}>{item.process}</div>
                      <div style={{ fontSize: 13, color: "#666", lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <InPostCTA />

              <div className="cu-eyebrow mb-3">SAMPLE READING QUESTIONS</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <SampleQuestionCard sample={SAMPLE_8} />
                <SampleQuestionCard sample={SAMPLE_9} />
              </div>
            </div>
            <DomainSidebar current="Reading" />
          </div>
        </div>
      </section>
      <style>{`.domain-grid { @media (max-width: 767px) { grid-template-columns: 1fr !important; } }`}</style>
    </PageLayout>
  );
}

// ============================================================
// LANGUAGE CONVENTIONS PAGE
// ============================================================
export function NAPLANLanguageConventions() {
  return (
    <PageLayout>
      <SEO
        title="NAPLAN Language Conventions — spelling, grammar, punctuation — ClassUp"
        description="NAPLAN Language Conventions tests spelling, grammar, and punctuation. Here is what Year 5 and Year 7 students are expected to know."
        canonicalPath="/naplan/language-conventions"
      />
      <section className="cu-section" style={{ paddingTop: 24 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "NAPLAN", href: "/naplan" }, { label: "Language Conventions" }]} />
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 48, alignItems: "start" }} className="domain-grid">
            <div>
              <div className="cu-eyebrow mb-4">NAPLAN LANGUAGE CONVENTIONS</div>
              <h1 className="cu-h1 mb-4">
                Language Conventions:{" "}
                <em className="cu-italic-accent">spelling, grammar, punctuation.</em>
              </h1>
              <p className="cu-body-large mb-6">
                Language Conventions is the most predictable NAPLAN domain, the same skill types appear every year. That makes it the most improvable with targeted practice.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {[
                  { sub: "Spelling", desc: "Multiple choice and audio dictation. Year 5: common patterns, homophones, compound words. Year 7: etymology (French, Latin, Greek origin words), morphology.", color: "#FAEEDA", textColor: "#B36B0A" },
                  { sub: "Grammar", desc: "Sentence structure, verb tense, subject-verb agreement, pronoun usage, and parts of speech. Year 7 adds clauses and modifiers.", color: "#EEEDFE", textColor: "#534AB7" },
                  { sub: "Punctuation", desc: "Commas, apostrophes (possessive and contraction), colons, semicolons, and speech marks. Year 7 adds more complex sentence punctuation.", color: "#EAF3DE", textColor: "#4A7515" },
                ].map((item) => (
                  <div key={item.sub} style={{ background: item.color, borderRadius: 14, padding: "18px 20px" }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#1A1A1A", marginBottom: 6 }}>{item.sub}</div>
                    <p style={{ fontSize: 13, color: item.textColor, lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ background: "#FAEEDA", borderRadius: 16, padding: "20px 24px", marginBottom: 32 }}>
                <div className="cu-eyebrow mb-2" style={{ color: "#B36B0A" }}>AUDIO DICTATION</div>
                <p style={{ fontSize: 14, color: "#7A4A00", lineHeight: 1.65, margin: 0 }}>
                  The online NAPLAN test includes an audio dictation component for spelling. A sentence is read aloud and students type the missing word. ClassUp's question bank includes audio dictation practice, your child hears the word, not just reads it.
                </p>
              </div>

              <InPostCTA />

              <div className="cu-eyebrow mb-3">SAMPLE LANGUAGE CONVENTIONS QUESTIONS</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <SampleQuestionCard sample={SAMPLE_7} />
                <SampleQuestionCard sample={SAMPLE_6} />
              </div>
            </div>
            <DomainSidebar current="Language Conventions" />
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 767px) { .domain-grid { grid-template-columns: 1fr !important; } }`}</style>
    </PageLayout>
  );
}

// ============================================================
// WRITING PAGE
// ============================================================
export function NAPLANWriting() {
  return (
    <PageLayout>
      <SEO
        title="NAPLAN Writing — what markers look for — ClassUp"
        description="NAPLAN Writing is marked on six criteria: audience, text structure, ideas, vocabulary, cohesion, and paragraphing. Here is what each criterion means."
        canonicalPath="/naplan/writing"
      />
      <section className="cu-section" style={{ paddingTop: 24 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "NAPLAN", href: "/naplan" }, { label: "Writing" }]} />
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 48, alignItems: "start" }} className="domain-grid">
            <div>
              <div className="cu-eyebrow mb-4">NAPLAN WRITING</div>
              <h1 className="cu-h1 mb-4">
                NAPLAN Writing:{" "}
                <em className="cu-italic-accent">one piece, high stakes.</em>
              </h1>
              <p className="cu-body-large mb-6">
                Writing is the only NAPLAN domain where your child produces an extended response. One piece, 42 minutes, marked against 10 criteria. Here's what matters.
              </p>

              <div style={{ background: "#FAEEDA", borderRadius: 16, padding: "20px 24px", marginBottom: 32 }}>
                <div className="cu-eyebrow mb-2" style={{ color: "#B36B0A" }}>CLASSUP WRITING STATUS</div>
                <p style={{ fontSize: 14, color: "#7A4A00", lineHeight: 1.65, marginBottom: 12 }}>
                  Writing coaching is in v1.1 development. We're building it carefully, writing feedback requires a different approach to multiple-choice coaching. We'll email you when it's ready.
                </p>
                <a href={DIAGNOSTIC_URL} style={{ fontSize: 13, color: "#B36B0A", fontWeight: 700, textDecoration: "none" }}>
                  Join the waitlist →
                </a>
              </div>

              <h2 className="cu-h2-card mb-3">What NAPLAN Writing tests</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {[
                  { criterion: "Text type", desc: "Persuasive or narrative (alternates each year). Students must meet the requirements of the specified text type." },
                  { criterion: "Audience", desc: "Writing must be appropriate for the intended audience. Formal or informal register, depending on the prompt." },
                  { criterion: "Ideas", desc: "Quality and relevance of ideas. Persuasive: strength of argument. Narrative: originality and development of story." },
                  { criterion: "Structure and cohesion", desc: "Logical organisation, paragraphing, and flow between ideas." },
                  { criterion: "Vocabulary", desc: "Range, precision, and appropriateness of word choice." },
                  { criterion: "Sentence structure", desc: "Variety and complexity of sentences. Simple, compound, and complex sentences." },
                  { criterion: "Punctuation", desc: "Correct use of punctuation to support meaning." },
                  { criterion: "Spelling", desc: "Accuracy of spelling, particularly for common and complex words." },
                ].map((item) => (
                  <div key={item.criterion} style={{ display: "flex", gap: 12, padding: "12px 16px", background: "#F5F2EC", borderRadius: 12 }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#EF9F27", marginTop: 6, flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#1A1A1A", marginBottom: 2 }}>{item.criterion}</div>
                      <div style={{ fontSize: 13, color: "#666", lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <WritingPlaceholderCard />
            </div>
            <DomainSidebar current="Writing" />
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 767px) { .domain-grid { grid-template-columns: 1fr !important; } }`}</style>
    </PageLayout>
  );
}

// The former "NAPLAN Bands Explained" page (10-band system + National Minimum
// Standard, both retired by ACARA in 2023) has been replaced by the accurate
// "NAPLAN proficiency levels explained" page — see
// client/src/pages/NaplanProficiencyLevels.tsx (route /naplan/proficiency-levels-explained).
