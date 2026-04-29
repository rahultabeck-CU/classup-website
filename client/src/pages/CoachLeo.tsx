import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { CoachAvatar, SampleQuestionCard, Breadcrumb, FAQAccordion, EmailCapture } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL, SAMPLE_3, SAMPLE_7 } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// /coaches/leo -- Full depth at eval bar
// Parent testimonials. Lean-forward moment. Expanded FAQ.
// ============================================================

const LEO_FAQ = [
  {
    question: "What makes Leo different from Luna?",
    answer: "Leo is direct and fast-paced. He names the mistake quickly and moves to the next question. Luna is more methodical -- she explains every mistake in detail before moving on. Leo works better for children who prefer to move fast and circle back to hard things. Luna works better for children who need to understand why before they can move forward.",
  },
  {
    question: "Can my child switch from Leo to Luna?",
    answer: "Yes. Your child can switch coaches at any time from the session screen. The coaching data carries over -- Leo's notes on your child's gaps are visible to Luna, and vice versa. The switch doesn't reset anything.",
  },
  {
    question: "Does Leo cover all four NAPLAN domains?",
    answer: "Leo covers Numeracy, Reading, and Language Conventions. Writing is a separate module that both Leo and Luna support, but it works differently -- the coach reviews a writing sample and gives structured feedback rather than question-by-question practice.",
  },
  {
    question: "How does Leo explain a mistake?",
    answer: "Leo names the specific mistake concisely and immediately gives a different question on the same skill. For example: 'You used the wrong operation -- this is a ratio problem, not a percentage problem. Try this one.' He doesn't dwell. He moves. Children who find Luna's explanations too long often prefer Leo's pace.",
  },
  {
    question: "Is Leo suitable for Year 5 and Year 7?",
    answer: "Yes. Leo's question bank covers both Year 5 and Year 7 content, mapped to ACARA codes for both year levels. The diagnostic determines which year level's content is most relevant for your child, and Leo adapts accordingly.",
  },
];

export default function CoachLeo() {
  return (
    <PageLayout>
      <SEO
        title="Leo — ClassUp's Year 7 NAPLAN coach"
        description="Leo is ClassUp's Year 7 coach. He specialises in numeracy and writing, and adjusts every question based on what your child got wrong."
        canonicalPath="/coaches/leo"
      />
      <SEO
        title="Leo — ClassUp's Year 7 NAPLAN coach"
        description="Leo is ClassUp's Year 7 coach. He specialises in numeracy and writing, and adjusts every question based on what your child got wrong."
        canonicalPath="/coaches/leo"
      />
      <section className="cu-section" style={{ paddingTop: 24 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Coaches", href: "/coaches" }, { label: "Leo" }]} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, alignItems: "start", marginBottom: 48 }} className="leo-grid">
            <div>
              <CoachAvatar coach="leo" size={120} />
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 36, fontWeight: 800, color: "#1A1A1A", marginTop: 20, marginBottom: 4 }}>Leo</h1>
              <div style={{ fontSize: 15, color: "#4A7515", fontWeight: 600, marginBottom: 16 }}>Year 5 & Year 7 Coach</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                {[
                  { label: "Tone", value: "Direct, clear, no-nonsense" },
                  { label: "Pace", value: "Fast, name it and move on" },
                  { label: "Domains", value: "Numeracy, Reading, Language Conventions" },
                  { label: "Best for", value: "Children who prefer to move fast and circle back" },
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
              <div className="cu-eyebrow mb-3">ABOUT LEO</div>
              <h2 className="cu-h2-card mb-4">The coach who names the mistake and moves on.</h2>
              <p className="cu-body-card mb-4">
                Leo is ClassUp's direct coaching system. He is designed for children who learn best by doing
                , who prefer to be told the mistake quickly and given another chance immediately, rather
                than receiving a detailed explanation before moving on.
              </p>
              <p className="cu-body-card mb-4">
                When your child answers a question incorrectly, Leo names the specific mistake concisely and
                immediately gives a different question on the same skill. He doesn't dwell. He doesn't repeat
                himself. He moves. Children who find Luna's explanations too long, or who get frustrated by
                extended explanations, often prefer Leo's pace.
              </p>
              <p className="cu-body-card mb-4">
                Leo is particularly effective for children who are confident but careless. He is designed to
                build the habit of checking reasoning before committing to an answer, not by lecturing,
                but by making the cost of carelessness visible and immediate.
              </p>

              {/* LEAN-FORWARD MOMENT */}
              <div style={{ background: "#EAF3DE", borderRadius: 16, padding: "24px", marginBottom: 24 }}>
                <div className="cu-eyebrow mb-3" style={{ color: "#4A7515" }}>LEO'S COACHING PHILOSOPHY</div>
                <p style={{ fontSize: 14, color: "#2A3A1A", lineHeight: 1.7, marginBottom: 12 }}>
                  Leo is built around a different observation from our beta testing. Some children,
                  particularly children who are confident and fast-moving, found Luna's detailed
                  explanations frustrating. They wanted to know the mistake and move on. They learned by doing,
                  not by reading.
                </p>
                <p style={{ fontSize: 14, color: "#2A3A1A", lineHeight: 1.7, marginBottom: 12 }}>
                  Leo's lean-forward moment is different from Luna's. It's not "oh, I see." It's "okay, let
                  me try again." The understanding comes from the second attempt, not the explanation. For
                  some children, that is the faster path.
                </p>
                <p style={{ fontSize: 14, color: "#2A3A1A", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>
                  "The fastest way to understand a mistake is to make it again, and catch yourself
                  making it. That's what the next question is for."
                </p>
                <p style={{ fontSize: 13, color: "#4A7515", marginTop: 8, fontStyle: "italic" }}>
                  - Leo's coaching system prompt
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }} className="leo-stats-grid">
                {[
                  { num: "3", label: "Domains covered", sub: "Numeracy, Reading, Language Conventions" },
                  { num: "15min", label: "Typical session length", sub: "Fast-paced, never drags" },
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
          <div className="cu-eyebrow mb-4" style={{ textAlign: "center" }}>WHAT PARENTS SAY ABOUT LEO</div>
          <h2 className="cu-h2 mb-6" style={{ textAlign: "center" }}>From our beta families.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 48 }} className="testimonials-grid">
            {[
              {
                quote: "My son hated Luna's long explanations. He just wanted to try again. Leo is perfect for him. He finishes sessions in 12 minutes and actually retains more than he did with the longer explanations.",
                name: "David L.",
                detail: "Year 7 parent, Perth",
                color: "#EAF3DE",
                textColor: "#2A3A1A",
              },
              {
                quote: "Leo is no-nonsense. My daughter is competitive and she doesn't want to be coddled. She wants to know what she got wrong and get another chance. Leo gives her exactly that.",
                name: "Michelle W.",
                detail: "Year 5 parent, Adelaide",
                color: "#EEEDFE",
                textColor: "#26215C",
              },
              {
                quote: "We tried Luna first and my son kept closing the app during the explanations. Switched to Leo and he hasn't closed it once. The pace matters more than I thought.",
                name: "Tom R.",
                detail: "Year 7 parent, Melbourne",
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
            <div className="cu-eyebrow mb-3" style={{ textAlign: "center" }}>LEO IN ACTION</div>
            <h2 className="cu-h2 mb-6" style={{ textAlign: "center" }}>See how Leo handles Year 7 questions.</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="samples-grid">
              <SampleQuestionCard sample={SAMPLE_3} />
              <SampleQuestionCard sample={SAMPLE_7} />
            </div>
          </div>

          {/* FAQ */}
          <div className="cu-card-large" style={{ padding: "32px 40px", marginBottom: 48 }}>
            <div className="cu-eyebrow mb-3">LEO QUESTIONS</div>
            <FAQAccordion items={LEO_FAQ} />
          </div>

          {/* Email capture */}
          <div style={{ maxWidth: 700, margin: "0 auto 32px" }}>
            <EmailCapture sourcePage="coach-leo" />
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", padding: "32px 0 48px" }}>
            <h2 className="cu-h2 mb-4">Start with Leo. Switch to Luna anytime.</h2>
            <p style={{ fontSize: 15, color: "#444", marginBottom: 28 }}>The diagnostic is free. Your child chooses their coach after.</p>
            <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>
              Start free diagnostic →
            </a>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 767px) {
          .leo-grid { grid-template-columns: 1fr !important; }
          .leo-stats-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .samples-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageLayout>
  );
}
