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
    { label: "Bands Explained", href: "/naplan/bands-explained" },
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

// ============================================================
// BANDS EXPLAINED PAGE
// ============================================================
export function NAPLANBandsExplained() {
  return (
    <PageLayout>
      <SEO
        title="NAPLAN bands explained — what the scores mean — ClassUp"
        description="NAPLAN results are reported on a 10-band scale. Here is what each band means, what the National Minimum Standard is, and how to interpret your child's report."
        canonicalPath="/naplan/bands-explained"
      />
      <SEO
        title="NAPLAN bands explained — what the scores mean — ClassUp"
        description="NAPLAN results are reported on a 10-band scale. Here is what each band means, what the National Minimum Standard is, and how to interpret your child's report."
        canonicalPath="/naplan/bands-explained"
      />
      <section className="cu-section" style={{ paddingTop: 24 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "NAPLAN", href: "/naplan" }, { label: "Bands Explained" }]} />
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 48, alignItems: "start" }} className="domain-grid">
            <div>
              <div className="cu-eyebrow mb-4">NAPLAN BANDS EXPLAINED</div>
              <h1 className="cu-h1 mb-4">
                What NAPLAN bands{" "}
                <em className="cu-italic-accent">actually mean.</em>
              </h1>
              <p className="cu-body-large mb-6">
                NAPLAN results are reported on a scale of Bands 1 to 10. Here's what each band means, what the national benchmarks are, and what to do if your child's result isn't where you hoped.
              </p>

              <h2 className="cu-h2-card mb-3">The band scale</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 32 }}>
                {[
                  { bands: "Bands 1-2", label: "Well below the National Minimum Standard", color: "#FAEEDA", textColor: "#B36B0A", note: "Students at this level need targeted support. ClassUp's coaching is designed specifically for this." },
                  { bands: "Band 3-4", label: "At or approaching the National Minimum Standard", color: "#F5F2EC", textColor: "#444", note: "Band 4 is the NMS. Students at Band 3 are approaching it." },
                  { bands: "Bands 5-6", label: "At or above the national average", color: "#EAF3DE", textColor: "#4A7515", note: "Most Australian students fall in this range." },
                  { bands: "Bands 7-8", label: "Strong performance", color: "#EEEDFE", textColor: "#534AB7", note: "Above the national average. Students here are well-prepared for the next year level." },
                  { bands: "Bands 9-10", label: "Exceptional performance", color: "#1A1A1A", textColor: "#FFF", note: "Top performers nationally. Very few students reach Band 10." },
                ].map((item) => (
                  <div key={item.bands} style={{ background: item.color, borderRadius: 14, padding: "16px 20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 4 }}>
                      <div style={{ fontSize: 16, fontWeight: 800, color: item.textColor }}>{item.bands}</div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: item.textColor, textAlign: "right" }}>{item.label}</div>
                    </div>
                    <p style={{ fontSize: 13, color: item.textColor, opacity: 0.8, lineHeight: 1.5, margin: 0 }}>{item.note}</p>
                  </div>
                ))}
              </div>

              <h2 className="cu-h2-card mb-3">National Minimum Standards by year level</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 32 }} className="nms-grid">
                {[
                  { year: "Year 3", nms: "Band 2" },
                  { year: "Year 5", nms: "Band 4" },
                  { year: "Year 7", nms: "Band 5" },
                  { year: "Year 9", nms: "Band 6" },
                ].map((item) => (
                  <div key={item.year} style={{ background: "#F5F2EC", borderRadius: 12, padding: "16px", textAlign: "center" }}>
                    <div style={{ fontSize: 13, color: "#888", marginBottom: 4 }}>{item.year}</div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#1A1A1A" }}>{item.nms}</div>
                    <div style={{ fontSize: 11, color: "#888" }}>NMS</div>
                  </div>
                ))}
              </div>

              <div style={{ background: "#EEEDFE", borderRadius: 16, padding: "20px 24px", marginBottom: 32 }}>
                <div className="cu-eyebrow mb-2" style={{ color: "#7F77DD" }}>IMPORTANT CONTEXT</div>
                <p style={{ fontSize: 14, color: "#26215C", lineHeight: 1.65, margin: 0 }}>
                  NAPLAN bands are not pass/fail. A child at Band 3 in Year 5 is not "failing", they're approaching the minimum standard. What matters is the specific skills that are missing, not the band number. That's what ClassUp's diagnostic identifies.
                </p>
              </div>

              <InPostCTA />
            </div>
            <DomainSidebar current="Bands Explained" />
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 767px) { .domain-grid { grid-template-columns: 1fr !important; } .nms-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </PageLayout>
  );
}
