import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { CoachAvatar, FAQAccordion, EmailCapture, FounderAvatar } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// /how-it-works -- Full depth at eval bar
// Typical week. Honest limits. Expanded FAQ. Parent report detail.
// ============================================================

const HOW_FAQ = [
  {
    question: "How long is the free diagnostic?",
    answer: "The diagnostic covers three domains: Numeracy, Reading, and Language Conventions. Each domain takes approximately 10-15 minutes. You can pause and resume across up to three sittings. Most families complete it across two evenings.",
  },
  {
    question: "What happens after the diagnostic?",
    answer: "You receive a report showing exactly where your child is solid and where they're stuck -- by skill, not just by domain. From there, your child starts their first coaching session. The coach picks up exactly where the diagnostic identified the gaps.",
  },
  {
    question: "How long is a typical coaching session?",
    answer: "Sessions are designed to be 30 minutes. Long enough to make real progress, short enough to fit after school. Your child can do more if they want to -- the session doesn't end at 30 minutes, but the coach is designed to deliver meaningful practice in that time.",
  },
  {
    question: "How often should my child practise?",
    answer: "4 sessions per week is the target. The adaptive model gets better the more your child practises -- more data means better question selection. But even 2 sessions per week will show progress over a term.",
  },
  {
    question: "What does the Friday parent email include?",
    answer: "Three things: what improved this week (specific skills), what's still hard (specific skills), and what the coach is working on next week. No marketing language. No vague 'great progress'. Specific, honest, useful.",
  },
  {
    question: "Can I see what questions my child is getting?",
    answer: "Yes. The parent dashboard shows the full session history -- every question, every answer, every explanation. You can see exactly what your child got wrong and what the coach said. This is intentional: we want parents to understand what's happening, not just receive a summary.",
  },
  {
    question: "What if my child gets stuck and won't continue?",
    answer: "This happens. Usually it's because a question is genuinely hard and the child is frustrated. The coach is designed to recognise this pattern and offer an easier question on the same skill before returning to the harder one. If your child closes the session, the coach picks up from the same point next time. There's no penalty for stopping.",
  },
  {
    question: "How do I know if it's working?",
    answer: "The Friday report tells you. If a skill that was red two weeks ago is now green, it's working. If a skill has been red for three weeks without movement, something isn't connecting and you should email us. We want to know. We're in beta and we take every stuck case seriously.",
  },
];

export default function HowItWorks() {
  return (
    <PageLayout>
      <SEO
        title="How ClassUp works — free diagnostic, adaptive coaching, weekly report"
        description="ClassUp starts with a free 30-minute diagnostic that maps your child's exact gaps. Then Luna or Leo works on those gaps every session, four times a week."
        canonicalPath="/how-it-works"
      />
      <section className="cu-section" style={{ paddingTop: 32 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div className="cu-eyebrow mb-4">HOW IT WORKS</div>
          <h1 className="cu-h1 mb-4">
            Three steps.{" "}
            <em className="cu-italic-accent">No guesswork.</em>
          </h1>
          <p className="cu-body-large mb-8" style={{ maxWidth: 680 }}>
            Free diagnostic on day one. Personalised practice from day two. Honest report every Friday.
            Here is exactly what happens, in the order it happens.
          </p>

          {/* Step 1 */}
          <div className="cu-card-large" style={{ padding: "40px", marginBottom: 24 }}>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "start" }} className="step-grid">
              <div style={{ textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: 20, background: "#EAF3DE", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 800, color: "#4A7515", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  01
                </div>
              </div>
              <div>
                <h2 className="cu-h2-card mb-3">Free diagnostic</h2>
                <p className="cu-body-card mb-4">
                  The diagnostic is free. It covers three NAPLAN domains: Numeracy, Reading, and Language
                  Conventions. It takes approximately 30 minutes and can be paused and resumed across up to
                  three sittings. Most families do it over two evenings.
                </p>
                <p className="cu-body-card mb-4">
                  The diagnostic is designed to feel like practice, not a test. Your child won't know they
                  are being assessed, they will just be answering questions. The adaptive format means
                  the questions get harder or easier based on their responses. This is the same adaptive
                  format as the real NAPLAN test.
                </p>
                <p className="cu-body-card mb-4">
                  At the end of the diagnostic, you receive a report. The report shows exactly which skills
                  your child has solid, which are shaky, and which are missing entirely. Not "weak in
                  numeracy": "missing place value in 4-digit numbers and fraction comparison." That
                  specificity is what makes the coaching useful.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {["Free", "No credit card", "Pause and resume", "3 domains", "30 minutes", "Adaptive format"].map((tag) => (
                    <span key={tag} style={{ background: "#EAF3DE", color: "#4A7515", fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: 999 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="cu-card-large" style={{ padding: "40px", marginBottom: 24 }}>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "start" }} className="step-grid">
              <div style={{ textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: 20, background: "#FAEEDA", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 800, color: "#B36B0A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  02
                </div>
              </div>
              <div>
                <h2 className="cu-h2-card mb-3">Personalised practice</h2>
                <p className="cu-body-card mb-4">
                  After the diagnostic, your child starts coaching. They choose their coach. Luna or
                  Leo, and the first session begins. The coach picks up exactly where the diagnostic
                  identified the gaps. Not from the beginning of the curriculum. From the specific skill
                  that needs work.
                </p>
                <p className="cu-body-card mb-4">
                  Every next question is chosen based on what your child got wrong. Not a generic curriculum
                  sequence. Not random practice. Targeted practice on the specific skills that need work.
                  When your child gets something wrong, the coach names the specific mistake and gives a
                  different question on the same skill. When they get it right consistently, the coach moves on.
                </p>
                <p className="cu-body-card mb-4">
                  Sessions are 30 minutes. The coach remembers every session. Tuesday's session starts
                  from where Monday's ended. There is no reset. There is no starting over. There is only
                  forward.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {["Adaptive", "30-minute sessions", "Luna or Leo", "Specific feedback", "Parent dashboard", "No reset"].map((tag) => (
                    <span key={tag} style={{ background: "#FAEEDA", color: "#B36B0A", fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: 999 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="cu-card-large" style={{ padding: "40px", marginBottom: 48 }}>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "start" }} className="step-grid">
              <div style={{ textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: 20, background: "#EEEDFE", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 800, color: "#534AB7", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  03
                </div>
              </div>
              <div>
                <h2 className="cu-h2-card mb-3">Friday parent report</h2>
                <p className="cu-body-card mb-4">
                  Every Friday, you get an email. Three things: what improved this week, what's still hard,
                  and what the coach is working on next week. That's it.
                </p>
                <p className="cu-body-card mb-4">
                  No marketing language. No vague "great progress this week." Specific skills, specific
                  status. If your child is still struggling with algebraic order of operations, the email
                  says so. If they have closed the gap on place value, the email says that too.
                </p>
                <p className="cu-body-card mb-4">
                  You also have access to a parent dashboard that shows the same information in more detail
                  Skill-by-skill progress, session history, and upcoming focus areas. You can see
                  every question your child answered, every mistake, and every explanation the coach gave.
                </p>
                <div style={{ background: "#EEEDFE", borderRadius: 12, padding: "16px 20px", marginBottom: 20 }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#7F77DD", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>EXAMPLE FRIDAY REPORT</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { label: "Improved this week", value: "Place value (4-digit numbers): 8 correct in a row", color: "#4A7515" },
                      { label: "Still hard", value: "Algebraic order of operations: 3 sessions, 40% accuracy", color: "#B36B0A" },
                      { label: "Working on next week", value: "Order of operations (different question types) + fraction comparison", color: "#534AB7" },
                    ].map((item) => (
                      <div key={item.label} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: "#7F77DD", minWidth: 130, paddingTop: 2 }}>{item.label}</div>
                        <div style={{ fontSize: 13, color: item.color, lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: item.value }} />
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {["Every Friday", "Plain English", "Specific skills", "Parent dashboard", "No spam"].map((tag) => (
                    <span key={tag} style={{ background: "#EEEDFE", color: "#534AB7", fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: 999 }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* TYPICAL WEEK */}
          <div className="cu-eyebrow mb-4">WHAT A TYPICAL WEEK LOOKS LIKE</div>
          <h2 className="cu-h2 mb-6">
            30 minutes, four times a week.{" "}
            <em className="cu-italic-accent">That's the target.</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 24 }} className="week-grid">
            {[
              {
                day: "Monday",
                task: "30-min session",
                detail: "Coach picks up from last week. Works on the specific skill that needs the most attention.",
                color: "#EAF3DE",
                textColor: "#4A7515",
              },
              {
                day: "Tuesday",
                task: "30-min session",
                detail: "Different domain. Continues from Monday's gaps.",
                color: "#FAEEDA",
                textColor: "#B36B0A",
              },
              {
                day: "Wednesday",
                task: "30-min session",
                detail: "Coach continues from Tuesday. If Monday's skill is now solid, moves to the next gap.",
                color: "#EEEDFE",
                textColor: "#534AB7",
              },
            ].map((item) => (
              <div key={item.day} style={{ background: item.color, borderRadius: 16, padding: "20px" }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#1A1A1A", marginBottom: 4 }}>{item.day}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: item.textColor, marginBottom: 8 }}>{item.task}</div>
                <p style={{ fontSize: 12, color: item.textColor, lineHeight: 1.6, margin: 0 }}>{item.detail}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 24 }} className="week-grid">
            {[
              {
                day: "Thursday",
                task: "30-min session",
                detail: "Final session of the week. Light review + new questions on the next gap.",
                color: "#F5F2EC",
                textColor: "#444",
              },
              {
                day: "Friday",
                task: "Parent report",
                detail: "Session optional on Friday. Parent report arrives by email. Three things: improved, still hard, next week.",
                color: "#EEEDFE",
                textColor: "#534AB7",
              },
              {
                day: "Weekend",
                task: "Optional",
                detail: "One extra session if time allows. Not required.",
                color: "#F5F2EC",
                textColor: "#888",
              },
            ].map((item) => (
              <div key={item.day} style={{ background: item.color, borderRadius: 16, padding: "20px" }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#1A1A1A", marginBottom: 4 }}>{item.day}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: item.textColor, marginBottom: 8 }}>{item.task}</div>
                <p style={{ fontSize: 12, color: item.textColor, lineHeight: 1.6, margin: 0 }}>{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Two hours rationale */}
          <div style={{ background: "#F5F2EC", borderRadius: 16, padding: "20px 28px", marginBottom: 48, borderLeft: "4px solid #7F77DD" }}>
            <p style={{ fontSize: 15, color: "#333", lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>
              "Two hours a week. That is the realistic effort. Less than that and you should expect awareness,
              not improvement. More than that and the diminishing returns kick in for most Year 5 and Year 7
              children. Two hours, well-targeted by the diagnostic, is the sweet spot."
            </p>
          </div>

          {/* HONEST LIMITS */}
          <div className="cu-eyebrow mb-4">WHAT WE DON'T DO</div>
          <h2 className="cu-h2 mb-5">
            Honest about{" "}
            <em className="cu-italic-accent">what ClassUp is not.</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }} className="limits-grid">
            {[
              {
                title: "Not a replacement for school",
                body: "ClassUp is a practice and coaching layer. It works best alongside a good classroom teacher. If your child's school is struggling, ClassUp will help at the margins, but it won't fix a structural problem.",
                color: "#FAEEDA",
                textColor: "#B36B0A",
              },
              {
                title: "Not a homework helper",
                body: "Luna and Leo are NAPLAN coaches. They don't help with school assignments, general maths homework, or other subjects. They are focused on the four NAPLAN domains. That focus is a feature, not a limitation.",
                color: "#EEEDFE",
                textColor: "#534AB7",
              },
              {
                title: "Not a silver bullet",
                body: "If your child has significant learning difficulties, ClassUp will help but won't be sufficient on its own. We're honest about this. The coaching is designed for children who are capable but have gaps, not children who need specialist support.",
                color: "#EAF3DE",
                textColor: "#4A7515",
              },
              {
                title: "Not a one-week fix",
                body: "The coaching works over weeks, not days. A child who starts one week before NAPLAN will not see the same results as a child who starts 8 weeks before. The earlier you start, the more gaps you can close. Last-minute cramming is not what we're designed for.",
                color: "#F5F2EC",
                textColor: "#444",
              },
            ].map((item) => (
              <div key={item.title} style={{ background: item.color, borderRadius: 16, padding: "20px 24px" }}>
                <div style={{ fontSize: 15, fontWeight: 800, color: "#1A1A1A", marginBottom: 8 }}>{item.title}</div>
                <p style={{ fontSize: 13, color: item.textColor, lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="cu-card-large" style={{ padding: "32px 40px", marginBottom: 48 }}>
            <div className="cu-eyebrow mb-3">QUESTIONS</div>
            <FAQAccordion items={HOW_FAQ} />
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", padding: "48px 0" }}>
            <div className="cu-eyebrow mb-4">START FOR FREE</div>
            <h2 className="cu-h2 mb-4">Start on day one. Free.</h2>
            <p style={{ fontSize: 15, color: "#444", marginBottom: 28 }}>The diagnostic is free. No credit card. 30 minutes. Pause and resume.</p>
            <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>
              Start free diagnostic →
            </a>
          </div>

          {/* Email capture */}
          <div style={{ maxWidth: 700, margin: "0 auto 48px" }}>
            <EmailCapture sourcePage="how-it-works" />
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 767px) {
          .step-grid { grid-template-columns: 1fr !important; }
          .week-grid { grid-template-columns: 1fr 1fr !important; }
          .limits-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageLayout>
  );
}
