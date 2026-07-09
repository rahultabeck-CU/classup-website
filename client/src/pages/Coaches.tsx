import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { CoachAvatar, FounderAvatar, EmailCapture, FAQAccordion, SampleQuestionCard } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL, SAMPLE_2, SAMPLE_7 } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// Left-column identity stack for a coach card — avatar, name, traits and
// profile link all centred on one axis. Flex centring is required because
// CoachAvatar is a fixed-width block that text-align alone can't centre.
function CoachIdentity({
  coach,
  name,
  traits,
  href,
  accent,
}: {
  coach: "luna" | "leo";
  name: string;
  traits: string;
  href: string;
  accent: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <CoachAvatar coach={coach} size={96} />
      <div style={{ marginTop: 10, fontSize: 18, fontWeight: 800, color: "#1A1A1A" }}>{name}</div>
      <div style={{ fontSize: 12, color: accent, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>{traits}</div>
      <Link href={href} style={{ fontSize: 12, color: accent, textDecoration: "none", display: "block", marginTop: 6 }}>
        Full profile →
      </Link>
    </div>
  );
}

// ============================================================
// /coaches -- Full narrative depth at eval bar
// Sunday afternoon scene. Lean-forward moment. Founder voice spine.
// ============================================================

const COACHES_FAQ = [
  {
    question: "Can my child switch coaches?",
    answer: "Yes, at any time. You choose Luna or Leo at the start of your first session. If your child tries one and wants to switch, you can do that from the parent dashboard. Some children try both in the first week before settling. That's fine. The coaching quality is identical -- the difference is pace and tone, not rigour.",
  },
  {
    question: "Are Luna and Leo real teachers?",
    answer: "No. Luna and Leo are AI coaches. The questions, the trap analysis, and the explanations are reviewed by Australian educators on our content team. The coaching itself -- the question selection, the mistake identification, the next-question logic -- is AI. We say this clearly because we think parents deserve to know exactly what they're paying for.",
  },
  {
    question: "What if my child doesn't like either coach?",
    answer: "That's useful information. Tell us. We're in beta with a small group of families and we take feedback seriously. If neither coach is landing, we want to know why. Email us at rahul@classup.com.au. We read every message.",
  },
  {
    question: "How long is a coaching session?",
    answer: "30 minutes. That's the design target. Some sessions run 25 minutes, some run 35. We don't cut off mid-question. The goal is a session that fits after school, before dinner, without drama. Not a 90-minute commitment that requires scheduling.",
  },
  {
    question: "Do Luna and Leo remember what my child got wrong last time?",
    answer: "Yes. That's the core of the product. Every session starts from where the last one ended. If your child got place value wrong on Tuesday, Wednesday's session will come back to place value -- from a different angle, with a different question, until it sticks. The coach doesn't reset. It accumulates.",
  },
];

export default function Coaches() {
  return (
    <PageLayout>
      <SEO
        title="Luna and Leo — ClassUp's NAPLAN coaches"
        description="Meet Luna (Year 5) and Leo (Year 7), ClassUp's two adaptive coaches. Each one specialises in a different year level and adjusts every question based on what your child got wrong."
        canonicalPath="/coaches"
      />
      {/* HERO */}
      <section className="cu-section" style={{ paddingTop: 32, paddingBottom: 0 }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="cu-eyebrow mb-4">MEET THE COACHES</div>
          <h1 className="cu-h1 mb-5">
            Pick the coach your child will{" "}
            <em className="cu-italic-accent">want to show up for.</em>
          </h1>
          <p className="cu-body-large" style={{ maxWidth: 680, marginBottom: 0 }}>
            Luna is calm and methodical. Leo is direct and fast. Both are honest. Both are rigorous.
            Neither has a face. Here is why that matters, and how I chose them.
          </p>
        </div>
      </section>

      {/* THE MOMENT IT BECAME CLEAR */}
      <section className="cu-section">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="cu-card-large" style={{ padding: "40px 48px" }}>
            <div className="cu-eyebrow mb-4">THE MOMENT IT BECAME CLEAR</div>
            <div style={{ fontSize: 17, lineHeight: 1.8, color: "#2A2A2A", fontStyle: "italic", borderLeft: "3px solid #7F77DD", paddingLeft: 24, marginBottom: 32 }}>
              <p style={{ marginBottom: 16 }}>
                Kavya was nine. She had been doing maths worksheets with me on Sunday afternoons for three weeks,
                and she had started saying quietly, not dramatically: "I don't want to do this with you."
                Not because she didn't want to do maths. Because she didn't want to do it with me watching.
              </p>
              <p style={{ marginBottom: 16 }}>
                I asked around. A neighbour's older daughter, who had just finished Year 7, said something I have
                thought about ever since: "The problem with parents helping is that they already know the answer.
                You can see on their face when you get it wrong. A tutor doesn't do that. A tutor just asks the
                next question."
              </p>
              <p style={{ marginBottom: 0 }}>
                That was the realisation. It wasn't about knowledge. It was about the relationship. Kavya needed
                a coach who had no stake in the outcome except her progress. Someone who wouldn't sigh. Someone
                who would just ask the next question.
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <FounderAvatar initial="R" size={44} colour="#1A1A1A" />
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#1A1A1A" }}>Rahul</div>
                <div style={{ fontSize: 12, color: "#888" }}>Co-founder, ClassUp, Kavya's dad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET LUNA */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "start", marginBottom: 48 }} className="coach-grid">
            <CoachIdentity coach="luna" name="Luna" traits="Calm · Methodical" href="/coaches/luna" accent="#7F77DD" />
            <div>
              <div className="cu-eyebrow mb-3">MEET LUNA</div>
              <p className="cu-body-card mb-4">
                Luna is the coach who slows down at the hard part. When a child gets a question wrong, Luna
                doesn't rush to the explanation. She names the specific mistake first. "You looked at the digit.
                The question is asking about the position." Then she asks the same question from a different angle.
                Then another angle. Until the concept is solid, not just remembered.
              </p>
              <p className="cu-body-card mb-4">
                Luna's pace is deliberate. She doesn't skip steps. She doesn't assume a child has understood
                something because they got it right once. She comes back. She checks. She builds the foundation
                before she builds on it. Children who get anxious about getting things wrong tend to choose Luna
                because she normalises mistakes as part of the process, not a verdict on ability.
              </p>
              <div style={{ background: "#EEEDFE", borderRadius: 14, padding: "16px 20px", borderLeft: "3px solid #7F77DD" }}>
                <p style={{ fontSize: 14, fontStyle: "italic", color: "#26215C", lineHeight: 1.7, margin: 0 }}>
                  "Kavya picked Luna without hesitation. I asked her why. She said: 'Luna doesn't make me feel
                  stupid when I get it wrong. She just tells me what I missed.' That's the whole product, right there."
                </p>
                <div style={{ fontSize: 12, color: "#7F77DD", fontWeight: 600, marginTop: 8 }}> - Rahul, founder note
                </div>
              </div>
            </div>
          </div>

          {/* MEET LEO */}
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "start" }} className="coach-grid">
            <CoachIdentity coach="leo" name="Leo" traits="Direct · Fast" href="/coaches/leo" accent="#639922" />
            <div>
              <div className="cu-eyebrow mb-3">MEET LEO</div>
              <p className="cu-body-card mb-4">
                Leo is the coach for children who find slow explanations patronising. He gets to the point.
                He names the mistake, gives the correct approach in two sentences, and moves on. He trusts
                children to keep up. Most of them do.
              </p>
              <p className="cu-body-card mb-4">
                Leo works well for children who already have some confidence and want to build speed. He is
                also good for children who disengage when a session feels too easy. Leo keeps the
                pace high enough that there is no room to drift. He is not impatient. He is efficient. Children
                who like a bit of competition and quick feedback tend to choose Leo. He makes progress feel
                like winning.
              </p>
              <div style={{ background: "#EAF3DE", borderRadius: 14, padding: "16px 20px", borderLeft: "3px solid #639922" }}>
                <p style={{ fontSize: 14, fontStyle: "italic", color: "#2A3A1A", lineHeight: 1.7, margin: 0 }}>
                  "Some kids tried Luna first and switched to Leo after a week. Some went the other way. The
                  ones who stayed with Leo longest were the ones who said 'I like that he doesn't repeat himself.'
                  That's a real preference. We built for it."
                </p>
                <div style={{ fontSize: 12, color: "#639922", fontWeight: 600, marginTop: 8 }}> - Rahul, founder note
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I WATCHED THE FIRST TIME */}
      <section className="cu-section" style={{ background: "#F5F2EC" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="cu-eyebrow mb-4">WHAT I WATCHED, THE FIRST TIME KAVYA GOT COACHED</div>
          <h2 className="cu-h2 mb-6">
            The Sunday afternoon.{" "}
            <em className="cu-italic-accent">The lean-forward.</em>
          </h2>

          <div style={{ fontSize: 16, lineHeight: 1.85, color: "#2A2A2A" }}>
            <p style={{ marginBottom: 20 }}>
              It was a Sunday afternoon in March. Kavya was at the kitchen table with the laptop. I was
              pretending to read in the next room. I could see her through the doorway.
            </p>
            <p style={{ marginBottom: 20 }}>
              The question was a place value question. "What is the value of 4 in 9481?" She picked
              C: 4 thousands. Wrong. Luna's response came back: "You looked at the digit. The
              question is asking about the position. In 9481, the 9 is in thousands, the 4 is in hundreds,
              the 8 is in tens, the 1 is in ones. So 4 represents 4 hundreds, which is 400."
            </p>
            <p style={{ marginBottom: 20 }}>
              I watched Kavya's jaw tighten. That's the look she gets when she is annoyed at herself.
              Not at the question. At herself. She read the explanation again. Then she clicked Next.
            </p>
            <p style={{ marginBottom: 20 }}>
              The next question was different, different number, same trap. "What is the value of
              7 in 3742?" She paused. I could see her lips moving slightly. She was running through the
              positions. She picked B: 7 hundreds. Correct.
            </p>
            <p style={{ marginBottom: 20 }}>
              Then she leaned forward.
            </p>
            <p style={{ marginBottom: 20 }}>
              Not a dramatic lean. Just a small shift in posture. The kind that means: I want to see
              what comes next. The kind that means the session has stopped being a task and started
              being a puzzle.
            </p>
            <div style={{ background: "#EEEDFE", borderRadius: 16, padding: "24px 28px", margin: "28px 0", borderLeft: "4px solid #7F77DD" }}>
              <p style={{ fontSize: 17, fontStyle: "italic", color: "#26215C", lineHeight: 1.8, margin: 0, fontWeight: 600 }}>
                "That lean-forward moment is what we're building for. Not the correct answer. The lean-forward.
                The moment a child stops performing and starts thinking."
              </p>
              <div style={{ fontSize: 13, color: "#7F77DD", fontWeight: 700, marginTop: 12 }}> - Rahul, founder
              </div>
            </div>
            <p style={{ marginBottom: 0 }}>
              I have watched that moment happen dozens of times in our beta families. It doesn't happen every
              session. But when it does, you know the product is doing what it is supposed to do. Not
              drilling. Not testing. Coaching.
            </p>
          </div>
        </div>
      </section>

      {/* WHY TWO COACHES, NOT ONE */}
      <section className="cu-section">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="cu-eyebrow mb-4">WHY TWO COACHES, NOT ONE</div>
          <h2 className="cu-h2 mb-5">
            Children don't experience personality{" "}
            <em className="cu-italic-accent">on a slider.</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="why-two-grid">
            <div>
              <p className="cu-body-card mb-4">
                The easy version of this product has one coach. You adjust the pace with a slider. Slow
                to fast. Gentle to direct. That is how most edtech products think about personalisation.
              </p>
              <p className="cu-body-card">
                But children don't experience a coach as a setting. They experience a coach as a who.
                Luna and Leo are not the same coach at different speeds. They have different rhythms,
                different ways of naming mistakes, different senses of when to repeat and when to move on.
                A child who clicks with Luna doesn't just want "slower." They want Luna.
              </p>
            </div>
            <div>
              <p className="cu-body-card mb-4">
                Both coaches are honest. Both are rigorous. Neither will tell a child they are doing well
                when they are not. Neither will skip the explanation to keep the session moving. The
                difference is not quality. it is relationship.
              </p>
              <p className="cu-body-card">
                We are planning a third coach for v1.2. We will announce when it is ready. For now: try both.
                Most children know within two sessions which one they want to come back to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SAMPLE QUESTION */}
      <section className="cu-section" style={{ background: "#F5F2EC", paddingTop: 40, paddingBottom: 40 }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="cu-eyebrow mb-3" style={{ textAlign: "center" }}>FROM OUR QUESTION BANK</div>
          <h2 className="cu-h2 mb-6" style={{ textAlign: "center" }}>
            The kind of question Luna and Leo work with.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="samples-grid">
            <SampleQuestionCard sample={SAMPLE_2} />
            <SampleQuestionCard sample={SAMPLE_7} />
          </div>
        </div>
      </section>

      {/* WHAT WE DON'T DO (YET) */}
      <section className="cu-section">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="cu-eyebrow mb-4">WHAT WE DON'T DO (YET)</div>
          <h2 className="cu-h2 mb-5">
            Honest about{" "}
            <em className="cu-italic-accent">the gaps.</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 32 }} className="limits-grid">
            {[
              {
                title: "No video calls",
                body: "Luna and Leo are text-based coaches. There are no video sessions, no live calls, no scheduled appointments. This is a deliberate choice for v1.0. We wanted to build something that works in 30 minutes after school, not something that requires booking.",
                color: "#FAEEDA",
                textColor: "#B36B0A",
              },
              {
                title: "No voice chat (yet)",
                body: "Voice coaching is on the roadmap for v1.1. We are being careful here, the audio dictation component of NAPLAN is important, and we want to get voice right rather than ship it fast. We will announce when it is ready.",
                color: "#EEEDFE",
                textColor: "#534AB7",
              },
              {
                title: "We don't replace teachers",
                body: "Luna and Leo are a practice and coaching layer, not a school. They work best alongside a good classroom teacher, not instead of one. If your child's school is struggling, ClassUp will help at the margins, but it won't fix a structural problem.",
                color: "#EAF3DE",
                textColor: "#4A7515",
              },
              {
                title: "For the in-between hours",
                body: "30 minutes after school. A weekend session. The night before the test. That is what ClassUp is for. Not the 6 hours of school. Not the homework. The gap in between, where practice either happens or doesn't.",
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
        </div>
      </section>

      {/* FAQ */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="cu-card-large" style={{ padding: "32px 40px", marginBottom: 40 }}>
            <div className="cu-eyebrow mb-4">QUESTIONS PARENTS ASK</div>
            <FAQAccordion items={COACHES_FAQ} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cu-section" style={{ background: "#1A1A1A", paddingTop: 56, paddingBottom: 56 }}>
        <div className="container" style={{ maxWidth: 700, textAlign: "center" }}>
          <div className="cu-eyebrow mb-4" style={{ color: "#7F77DD" }}>READY TO START</div>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: "#FFF", lineHeight: 1.2, marginBottom: 16 }}>
            See which coach your child{" "}
            <em style={{ color: "#7F77DD", fontStyle: "italic" }}>actually picks.</em>
          </h2>
          <p style={{ fontSize: 15, color: "#AAA", lineHeight: 1.7, marginBottom: 28 }}>
            The free diagnostic takes about 30 minutes. At the end, your child meets Luna and Leo and
            chooses. Most children know immediately. Some take a session with each. Either way, you will
            know by the end of week one.
          </p>
          <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 16, padding: "16px 36px", display: "inline-flex" }}>
            Start free diagnostic →
          </a>
          <p style={{ fontSize: 13, color: "#666", marginTop: 16 }}>
            Free · No credit card · Pause and finish across 3 short sittings
          </p>
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <section className="cu-section">
        <div className="container" style={{ maxWidth: 700 }}>
          <EmailCapture sourcePage="coaches" />
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .coach-grid { grid-template-columns: 1fr !important; }
          .why-two-grid { grid-template-columns: 1fr !important; }
          .limits-grid { grid-template-columns: 1fr !important; }
          .samples-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageLayout>
  );
}
