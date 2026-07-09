import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { CoachAvatar, SampleQuestionCard, Breadcrumb, FAQAccordion, EmailCapture } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL, SAMPLE_6, SAMPLE_2, SAMPLE_8 } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// /coaches/luna -- Full depth at eval bar
// Parent testimonials. Lean-forward moment. Expanded FAQ.
// ============================================================

const LUNA_FAQ = [
  {
    question: "What makes Luna different from Leo?",
    answer: "Luna is methodical and patient. She explains every mistake in detail before moving on. Leo is more direct -- he names the mistake quickly and moves to the next question. Luna works better for children who get anxious about errors and need to understand why before they can move forward. Leo works better for children who prefer to move fast and circle back.",
  },
  {
    question: "Can my child switch from Luna to Leo?",
    answer: "Yes. Your child can switch coaches at any time from the session screen. The coaching data carries over -- Luna's notes on your child's gaps are visible to Leo, and vice versa. The switch doesn't reset anything.",
  },
  {
    question: "Does Luna cover all four NAPLAN domains?",
    answer: "Luna covers Numeracy, Reading, and Language Conventions. Writing is a separate module that both Luna and Leo support, but it works differently -- the coach reviews a writing sample and gives structured feedback rather than question-by-question practice.",
  },
  {
    question: "How does Luna explain a mistake?",
    answer: "Luna names the specific reasoning error, not just the correct answer. For example, if a child picks the wrong spelling because they're confusing a vowel pattern, Luna says: 'You chose 'journy' -- that's the most common mistake on this word. The pattern is -ney, not -ny. Here's a different word with the same pattern.' Then she gives a different question on the same skill.",
  },
  {
    question: "Is Luna suitable for Year 5 and Year 7?",
    answer: "Yes. Luna's question bank covers both Year 5 and Year 7 content, mapped to ACARA codes for both year levels. The diagnostic determines which year level's content is most relevant for your child, and Luna adapts accordingly.",
  },
];

export default function CoachLuna() {
  return (
    <PageLayout>
      <SEO
        title="Luna | ClassUp's Year 5 NAPLAN coach"
        description="Luna is ClassUp's Year 5 coach. She specialises in reading and language conventions, and adjusts every question based on what your child got wrong."
        canonicalPath="/coaches/luna"
      />
      <section className="cu-section" style={{ paddingTop: 24 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Coaches", href: "/coaches" }, { label: "Luna" }]} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, alignItems: "start", marginBottom: 48 }} className="luna-grid">
            <div>
              <CoachAvatar coach="luna" size={120} />
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 36, fontWeight: 800, color: "#1A1A1A", marginTop: 20, marginBottom: 4 }}>Luna</h1>
              <div style={{ fontSize: 15, color: "#7F77DD", fontWeight: 600, marginBottom: 16 }}>Year 5 & Year 7 Coach</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                {[
                  { label: "Tone", value: "Warm, patient, encouraging" },
                  { label: "Pace", value: "Methodical, never rushed" },
                  { label: "Domains", value: "Numeracy, Reading, Language Conventions" },
                  { label: "Best for", value: "Children who prefer calm, step-by-step explanations" },
                ].map((item) => (
                  <div key={item.label} style={{ background: "#F5F2EC", borderRadius: 10, padding: "10px 14px" }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: 1 }}>{item.label}</div>
                    <div style={{ fontSize: 14, color: "#1A1A1A", fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: item.value }} />
                  </div>
                ))}
              </div>
              <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                Start free diagnostic →
              </a>
            </div>

            <div>
              <div className="cu-eyebrow mb-3">ABOUT LUNA</div>
              <h2 className="cu-h2-card mb-4">The coach who explains the mistake, not just the answer.</h2>
              <p className="cu-body-card mb-4">
                Luna is ClassUp's methodical coaching system. She is designed for children who learn best when
                they understand exactly what went wrong, not just that they got it wrong.
              </p>
              <p className="cu-body-card mb-4">
                When your child answers a question incorrectly, Luna doesn't just show the correct answer. She
                names the specific mistake, the exact reasoning error that led to the wrong choice.
                and then gives a different question on the same skill. Not the same question again. A different
                one. Until the skill is solid.
              </p>
              <p className="cu-body-card mb-4">
                Luna is particularly effective for children who get anxious about making mistakes. She normalises
                errors as part of learning, and her tone never changes based on how many times a child gets
                something wrong. The tenth wrong answer gets the same patient explanation as the first.
              </p>

              {/* LEAN-FORWARD MOMENT */}
              <div style={{ background: "#EEEDFE", borderRadius: 16, padding: "24px", marginBottom: 24 }}>
                <div className="cu-eyebrow mb-3" style={{ color: "#7F77DD" }}>THE LEAN-FORWARD MOMENT</div>
                <p style={{ fontSize: 14, color: "#26215C", lineHeight: 1.7, marginBottom: 12 }}>
                  Luna is designed around a specific moment we observed in our beta testing. A child would get
                  a question wrong, see the correct answer, and move on, without understanding why they
                  got it wrong. Two questions later, they'd get the same type of question wrong again.
                </p>
                <p style={{ fontSize: 14, color: "#26215C", lineHeight: 1.7, marginBottom: 12 }}>
                  The lean-forward moment is when a child reads Luna's mistake explanation and says "oh, I see."
                  Not "I got it wrong." Not "the answer is X." But "I see what I was thinking and why that was
                  wrong." That moment is what Luna is designed to produce.
                </p>
                <p style={{ fontSize: 14, color: "#26215C", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                  "A wrong answer is information. It tells us exactly where to go next. There's no such thing
                  as a wasted question, every mistake is a map."
                </p>
                <p style={{ fontSize: 13, color: "#7F77DD", marginTop: 8, fontStyle: "italic" }}> - Luna's coaching system prompt
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }} className="luna-stats-grid">
                {[
                  { num: "3", label: "Domains covered", sub: "Numeracy, Reading, Language Conventions" },
                  { num: "15min", label: "Typical session length", sub: "Designed to fit after school" },
                  { num: "Y5 + Y7", label: "Year levels", sub: "Deep ACARA alignment for both" },
                  { num: "Always", label: "Adapts to gaps", sub: "Every next question is personalised" },
                ].map((stat) => (
                  <div key={stat.label} style={{ background: "#F5F2EC", borderRadius: 12, padding: "16px 18px" }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: "#1A1A1A", marginBottom: 2 }}>{stat.num}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#444", marginBottom: 2 }}>{stat.label}</div>
                    <div style={{ fontSize: 12, color: "#888" }}>{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PARENT TESTIMONIALS */}
          <div className="cu-eyebrow mb-4" style={{ textAlign: "center" }}>WHAT PARENTS SAY ABOUT LUNA</div>
          <h2 className="cu-h2 mb-6" style={{ textAlign: "center" }}>From our beta families.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 48 }} className="testimonials-grid">
            {[
              {
                quote: "My daughter was getting the same spelling questions wrong every week with her previous tutor. Luna explained exactly what she was doing wrong and within two sessions she had it. I couldn't believe it.",
                name: "Priya M.",
                detail: "Year 5 parent, Melbourne",
                color: "#EEEDFE",
                textColor: "#26215C",
              },
              {
                quote: "My son has anxiety and test prep usually makes it worse. Luna's tone is so calm and consistent. He actually looks forward to his sessions now. That's not something I expected.",
                name: "James T.",
                detail: "Year 7 parent, Sydney",
                color: "#EAF3DE",
                textColor: "#2A3A1A",
              },
              {
                quote: "The Friday report is what sold me. It's not 'great week!' It's 'still struggling with order of operations, here's what we're doing about it.' That's what I need to know.",
                name: "Sarah K.",
                detail: "Year 5 parent, Brisbane",
                color: "#FAEEDA",
                textColor: "#7A4A00",
              },
            ].map((item) => (
              <div key={item.name} style={{ background: item.color, borderRadius: 16, padding: "20px 24px" }}>
                <p style={{ fontSize: 14, color: item.textColor, lineHeight: 1.7, marginBottom: 16, fontStyle: "italic" }}>"{item.quote}"</p>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#1A1A1A" }}>{item.name}</div>
                <div style={{ fontSize: 12, color: "#888" }}>{item.detail}</div>
              </div>
            ))}
          </div>

          {/* Sample questions */}
          <div style={{ marginBottom: 48 }}>
            <div className="cu-eyebrow mb-3" style={{ textAlign: "center" }}>LUNA IN ACTION</div>
            <h2 className="cu-h2 mb-6" style={{ textAlign: "center" }}>See how Luna explains mistakes.</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="samples-grid">
              <SampleQuestionCard sample={SAMPLE_6} />
              <SampleQuestionCard sample={SAMPLE_2} />
            </div>
          </div>

          {/* FAQ */}
          <div className="cu-card-large" style={{ padding: "32px 40px", marginBottom: 48 }}>
            <div className="cu-eyebrow mb-3">LUNA QUESTIONS</div>
            <FAQAccordion items={LUNA_FAQ} />
          </div>

          {/* Email capture */}
          <div style={{ maxWidth: 700, margin: "0 auto 32px" }}>
            <EmailCapture sourcePage="coach-luna" />
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", padding: "32px 0 48px" }}>
            <h2 className="cu-h2 mb-4">Start with Luna. Switch to Leo anytime.</h2>
            <p style={{ fontSize: 15, color: "#444", marginBottom: 28 }}>The diagnostic is free. Your child chooses their coach after.</p>
            <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>
              Start free diagnostic →
            </a>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 767px) {
          .luna-grid { grid-template-columns: 1fr !important; }
          .luna-stats-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .samples-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageLayout>
  );
}
