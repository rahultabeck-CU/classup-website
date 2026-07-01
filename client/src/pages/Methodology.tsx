import React from "react";
import { PageLayout } from "@/components/PageLayout";
import { SampleQuestionCard, InPostCTA, EmailCapture, FounderAvatar } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL, SAMPLE_2, SAMPLE_3, SAMPLE_8 } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// /methodology -- Full depth at eval bar
// Expanded principles. Research spine. Honest limits. Founder voice.
// ============================================================

export default function Methodology() {
  return (
    <PageLayout>
      <SEO
        title="ClassUp's methodology — spaced retrieval, error analysis, adaptive practice"
        description="ClassUp is built on three principles: identify the exact mistake, practise the same skill differently, and space repetitions over time. Here is the research behind each one."
        canonicalPath="/methodology"
      />
      <section className="cu-section" style={{ paddingTop: 32 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div className="cu-eyebrow mb-4">METHODOLOGY</div>
          <h1 className="cu-h1 mb-4">
            How ClassUp coaching{" "}
            <em className="cu-italic-accent">actually works.</em>
          </h1>
          <p className="cu-body-large mb-6" style={{ maxWidth: 680 }}>
            ClassUp is built on four principles: diagnose first, name the specific mistake, practise the fix,
            report honestly. Here is the full methodology, including what we don't do and why.
          </p>

          {/* FOUNDER NOTE */}
          <div className="cu-card-large" style={{ padding: "24px 28px", marginBottom: 40, borderLeft: "3px solid #7F77DD" }}>
            <div className="cu-eyebrow mb-3" style={{ color: "#7F77DD" }}>WHY WE BUILT IT THIS WAY</div>
            <p style={{ fontSize: 15, fontStyle: "italic", color: "#2A2A2A", lineHeight: 1.8, marginBottom: 16 }}>
              "The standard approach to test prep is: give children more practice. More worksheets. More questions.
              More time. The assumption is that volume produces improvement.
            </p>
            <p style={{ fontSize: 15, fontStyle: "italic", color: "#2A2A2A", lineHeight: 1.8, marginBottom: 16 }}>
              But when I watched Kavya do practice worksheets, I noticed something. She was getting the same
              questions wrong every time. Not because she wasn't trying. Because nobody had told her why she
              was getting them wrong. She was practising the mistake, not the fix.
            </p>
            <p style={{ fontSize: 15, fontStyle: "italic", color: "#2A2A2A", lineHeight: 1.8, marginBottom: 16 }}>
              The methodology we built is the opposite of volume practice. It's targeted practice. Identify the
              specific gap. Name the specific mistake. Practise the specific fix. That's it. Everything else
              is implementation."
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <FounderAvatar initial="R" size={36} colour="#1A1A1A" />
              <div style={{ fontSize: 13, color: "#888" }}>Rahul, co-founder</div>
            </div>
          </div>

          {/* Principle 1 */}
          <div className="cu-card-large" style={{ padding: "40px", marginBottom: 24 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 40, alignItems: "start" }} className="method-grid">
              <div>
                <div style={{ fontSize: 48, fontWeight: 800, color: "#E8E4D8", fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1 }}>01</div>
                <h2 className="cu-h2-card mb-3">Diagnose first.</h2>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["Free", "30 minutes", "3 domains", "Skill-level output"].map((tag) => (
                    <span key={tag} style={{ background: "#EAF3DE", color: "#4A7515", fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 999 }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="cu-body-card mb-4">
                  ClassUp starts with a free diagnostic. Not a placement test. Not a quiz. A diagnostic:
                  designed to identify the specific skills your child is missing across three NAPLAN domains.
                </p>
                <p className="cu-body-card mb-4">
                  The diagnostic covers Numeracy, Reading, and Language Conventions. It takes approximately
                  30 minutes and can be paused and resumed across up to three sittings. The adaptive format
                  means the questions get harder or easier based on your child's responses, the same
                  format as the real NAPLAN test.
                </p>
                <p className="cu-body-card mb-4">
                  The output is a single-screen report that shows exactly where your child is solid and where
                  they're stuck, by skill, not just by domain. "Place value with 4-digit numbers" is
                  more useful than "Numeracy is weak." That specificity is what makes the coaching useful.
                </p>
                <div style={{ background: "#EAF3DE", borderRadius: 12, padding: "14px 18px" }}>
                  <p style={{ fontSize: 13, color: "#2A3A1A", lineHeight: 1.65, margin: 0, fontStyle: "italic" }}>
                    "The diagnostic is the most important part of the product. Without it, you're guessing what
                    to practise. With it, you're targeting the exact skills that need work. The difference in
                    outcome is significant."
                  </p>
                  <div style={{ fontSize: 11, color: "#4A7515", fontWeight: 700, marginTop: 8 }}> - Rahul Tabeck, co-founder · Kavya's dad
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Principle 2 */}
          <div className="cu-card-large" style={{ padding: "40px", marginBottom: 24 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 40, alignItems: "start" }} className="method-grid">
              <div>
                <div style={{ fontSize: 48, fontWeight: 800, color: "#E8E4D8", fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1 }}>02</div>
                <h2 className="cu-h2-card mb-3">Name the specific mistake.</h2>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["Not just 'wrong'", "Exact error", "Plain English", "Every question"].map((tag) => (
                    <span key={tag} style={{ background: "#FAEEDA", color: "#B36B0A", fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 999 }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="cu-body-card mb-4">
                  When a child gets a question wrong, ClassUp doesn't just show the correct answer. The coach
                  names the specific mistake, the exact reasoning error that led to the wrong choice.
                </p>
                <p className="cu-body-card mb-4">
                  Every question in our bank has a "common mistake" explanation written specifically for it.
                  Not a generic "check your working." The actual mistake that most children make on that
                  specific question, explained in plain English.
                </p>
                <p className="cu-body-card mb-4">
                  This is the most important part of the methodology. A child who knows why they got something
                  wrong is far more likely to get it right next time than a child who just sees the correct
                  answer. The explanation is not a consolation prize. It is the coaching.
                </p>
                <p className="cu-body-card">
                  The common mistake explanations in our question bank are developed by our content team
                  in Melbourne and reviewed by Australian educators against ACARA standards. They are
                  developed, reviewed, and refined based on what children actually say when they get
                  these questions wrong.
                </p>
              </div>
            </div>
          </div>

          {/* Sample question */}
          <div style={{ marginBottom: 24 }}>
            <div className="cu-eyebrow mb-3" style={{ textAlign: "center" }}>THE METHODOLOGY IN ACTION</div>
            <p style={{ textAlign: "center", fontSize: 14, color: "#666", marginBottom: 20 }}>
              Three questions from our bank. Each shows the common mistake explanation that the coach delivers.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }} className="samples-grid">
              <SampleQuestionCard sample={SAMPLE_2} />
              <SampleQuestionCard sample={SAMPLE_3} />
              <SampleQuestionCard sample={SAMPLE_8} />
            </div>
          </div>

          {/* Principle 3 */}
          <div className="cu-card-large" style={{ padding: "40px", marginBottom: 24 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 40, alignItems: "start" }} className="method-grid">
              <div>
                <div style={{ fontSize: 48, fontWeight: 800, color: "#E8E4D8", fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1 }}>03</div>
                <h2 className="cu-h2-card mb-3">Practise the fix.</h2>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["Different question", "Same skill", "Until solid", "No repetition"].map((tag) => (
                    <span key={tag} style={{ background: "#EEEDFE", color: "#534AB7", fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 999 }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="cu-body-card mb-4">
                  After naming the mistake, the coach gives a different question on the same skill. Not the
                  same question again, a different one. This forces genuine understanding rather than
                  answer memorisation.
                </p>
                <p className="cu-body-card mb-4">
                  The coach continues with different questions on the same skill until your child gets it
                  right consistently. "Consistently" means three correct answers in a row, from different
                  question types. Then it moves on. No wasted time on skills that are already solid. No
                  skipping skills that are still shaky.
                </p>
                <p className="cu-body-card mb-4">
                  This is adaptive practice. Every next question is chosen based on what your child got
                  wrong. The sequence is never the same for any two children. Two children who both struggle
                  with place value will see different questions, in a different order, because their specific
                  mistakes are different.
                </p>
                <p className="cu-body-card">
                  The question bank currently contains over 800 questions across all four NAPLAN domains,
                  mapped to ACARA codes. We add new questions every month. The bank is large enough that
                  a child who practises four times a week for a full term will not see the same question twice.
                </p>
              </div>
            </div>
          </div>

          {/* Principle 4 */}
          <div className="cu-card-large" style={{ padding: "40px", marginBottom: 48 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 40, alignItems: "start" }} className="method-grid">
              <div>
                <div style={{ fontSize: 48, fontWeight: 800, color: "#E8E4D8", fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1 }}>04</div>
                <h2 className="cu-h2-card mb-3">Report honestly.</h2>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["Every Friday", "Plain English", "No fluff", "Specific skills"].map((tag) => (
                    <span key={tag} style={{ background: "#EAF3DE", color: "#4A7515", fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 999 }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="cu-body-card mb-4">
                  Every Friday, parents receive an email. Three things: what improved this week, what's still
                  hard, what we're working on next week. That's it.
                </p>
                <p className="cu-body-card mb-4">
                  No marketing language. No vague "great progress this week." Specific skills, specific status.
                  If your child is still struggling with algebraic order of operations, the email says so. If
                  they have closed the gap on place value, the email says that too.
                </p>
                <p className="cu-body-card mb-4">
                  Parents also have access to a dashboard that shows the same information in more detail:
                  skill-by-skill progress, session history, and upcoming focus areas. You can see every question
                  your child answered, every mistake, and every explanation the coach gave.
                </p>
                <p className="cu-body-card">
                  The reporting is honest because we think parents deserve to know exactly what is happening.
                  If the coaching is working, you will see it in the report. If it is not working, you will
                  see that too, and you should email us. We take every stuck case seriously.
                </p>
              </div>
            </div>
          </div>

          <InPostCTA />

          {/* WHAT WE DON'T DO */}
          <div className="cu-eyebrow mb-4" style={{ marginTop: 40 }}>WHAT WE DON'T DO</div>
          <h2 className="cu-h2 mb-5">
            Honest about{" "}
            <em className="cu-italic-accent">the limits.</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }} className="limits-grid">
            {[
              {
                title: "We don't teach the full curriculum",
                body: "ClassUp covers the four NAPLAN domains: Numeracy, Reading, Language Conventions, and Writing. It does not cover Science, History, Geography, or any other subject. It is a NAPLAN preparation tool, not a general tutoring service.",
                color: "#FAEEDA",
                textColor: "#B36B0A",
              },
              {
                title: "We don't do volume practice",
                body: "ClassUp is not a worksheet generator. It does not give your child 50 questions to work through. It gives your child the specific questions that target the specific gaps. Quality over quantity is not a slogan. It is the architecture.",
                color: "#EEEDFE",
                textColor: "#534AB7",
              },
              {
                title: "We don't guarantee band scores",
                body: "No preparation tool can guarantee a specific NAPLAN band. What we can say: children who use ClassUp consistently for 6-8 weeks before NAPLAN close measurable gaps in the skills tested. The diagnostic measures this before and after.",
                color: "#EAF3DE",
                textColor: "#4A7515",
              },
              {
                title: "We don't replace specialist support",
                body: "If your child has a diagnosed learning difficulty, ClassUp will help but is not sufficient on its own. The coaching is designed for children who are capable but have gaps, not children who need specialist educational support.",
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

          {/* ACARA alignment */}
          <div className="cu-card-large" style={{ padding: "40px", marginBottom: 48 }}>
            <div className="cu-eyebrow mb-4">CONTENT QUALITY</div>
            <h2 className="cu-h2-card mb-4">ACARA-aligned. Developed in Melbourne. Reviewed by Australian educators.</h2>
            <p className="cu-body-card mb-6">
              Every question in our bank is mapped to an ACARA code, the Australian Curriculum framework
              that NAPLAN itself is built on. This means we can tell you not just that a question is "Year 5
              Numeracy" but exactly which curriculum standard it tests and why that standard appears in NAPLAN.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="acara-grid">
              {[
                { title: "ACARA code mapping", body: "Every question is mapped to an ACARA code. No generic year-level filler. No questions that test skills outside the NAPLAN framework." },
                { title: "Australian content", body: "All passages, contexts, and names are Australian. No imported US or UK content. No questions that reference non-Australian contexts or currency." },
                { title: "Common mistake research", body: "Every question's common mistake explanation is based on analysis of how Australian children actually answer that question type. Not guesswork. Not generic advice." },
                { title: "Internal review process", body: "All content undergoes strict internal review before publication. Questions that don't meet our standards don't ship. We would rather have fewer questions than wrong ones." },
              ].map((item) => (
                <div key={item.title} style={{ background: "#F5F2EC", borderRadius: 14, padding: "20px 24px" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#1A1A1A", marginBottom: 8 }}>{item.title}</div>
                  <p style={{ fontSize: 13, color: "#444", lineHeight: 1.65, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", padding: "48px 0" }}>
            <div className="cu-eyebrow mb-4">SEE IT IN ACTION</div>
            <h2 className="cu-h2 mb-4">See the methodology in action.</h2>
            <p style={{ fontSize: 15, color: "#444", marginBottom: 28 }}>The diagnostic is free. No credit card. 30 minutes.</p>
            <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>
              Start free diagnostic →
            </a>
          </div>

          {/* Email capture */}
          <div style={{ maxWidth: 700, margin: "0 auto 48px" }}>
            <EmailCapture sourcePage="methodology" />
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 767px) {
          .method-grid, .acara-grid, .limits-grid { grid-template-columns: 1fr !important; }
          .samples-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageLayout>
  );
}
