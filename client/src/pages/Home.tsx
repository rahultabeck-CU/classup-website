import React, { useState } from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { CoachAvatar, FounderAvatar, FAQAccordion, EmailCapture } from "@/components/ClassUpUI";
import { SAMPLE_2 } from "@/lib/classup";
import { DIAGNOSTIC_URL } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// SECTION 2 — HERO
// ============================================================
function HeroSection() {
  return (
    <section className="cu-section" style={{ paddingTop: 32, backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663609833835/REXxUTrQVxgfiFBcKDxW3x/classup-hero-bg-UrHzSHymaDqNKEgYmXGu46.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      <div className="container" style={{ maxWidth: 1100 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left, copy */}
          <div>
            <div className="cu-eyebrow mb-4" style={{ fontSize: 14, letterSpacing: 2 }}>FOR YEAR 5 AND YEAR 7 AUSTRALIAN FAMILIES</div>
            <h1 className="cu-h1 mb-5">
              NAPLAN prep that tells you{" "}
              <em className="cu-italic-accent">the truth.</em>
            </h1>
            <p className="cu-body-large mb-5">
              A 30-minute diagnostic that shows exactly where your child stands, then a coach who works on those exact gaps, every time your child practises.{" "}
              <strong>From your first session to NAPLAN day, and beyond if you want.</strong>
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 20 }}>
              <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 15, padding: "15px 28px" }}>
                Start free diagnostic →
              </a>
            </div>
            <p style={{ fontSize: 13, color: "#888", marginBottom: 24 }}>
              Free · No credit card · Pause and finish across 3 short sittings
            </p>
            {/* Rahul bridge pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#FFF",
                border: "1px solid #E8E4D8",
                borderRadius: 999,
                padding: "8px 14px",
              }}
            >
              <FounderAvatar initial="R" size={32} />
              <span style={{ fontSize: 13, color: "#444" }}>
                Hi, I'm Rahul. I built this for my daughter Kavya.{" "}
                <Link href="/about#founder" style={{ color: "#7F77DD", fontWeight: 600, textDecoration: "none" }}>
                  Read the story →
                </Link>
              </span>
            </div>
          </div>

          {/* Right, sample report card */}
          <div style={{ position: "relative" }}>
            <div
              className="cu-card-large"
              style={{
                padding: 24,
                boxShadow: "0 4px 20px rgba(127,119,221,0.10)",
              }}
            >
              <div className="cu-eyebrow mb-3">SAMPLE DIAGNOSTIC REPORT</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#1A1A1A", marginBottom: 4 }}>
                Kavya's Year 5 Report
              </div>
              <div style={{ fontSize: 13, color: "#888", marginBottom: 20 }}>
                Completed 12 April 2026 · 3 domains
              </div>

              {[
                { label: "Numeracy", status: "NEEDS SUPPORT", bg: "#FAEEDA", pill: "#EF9F27", text: "#B36B0A", note: "Place value, fractions" },
                { label: "Reading", status: "ON TRACK", bg: "#EEEDFE", pill: "#7F77DD", text: "#534AB7", note: "Inferential comprehension" },
                { label: "Language Conventions", status: "STRONG FOUNDATION", bg: "#EAF3DE", pill: "#639922", text: "#4A7515", note: "Spelling, grammar" },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 14px",
                    background: row.bg,
                    borderRadius: 12,
                    marginBottom: 8,
                    gap: 8,
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#1A1A1A" }}>{row.label}</div>
                    <div style={{ fontSize: 11, color: row.text }}>{row.note}</div>
                  </div>
                  <span
                    style={{
                      background: row.pill,
                      color: "#FFF",
                      fontSize: 9,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      padding: "3px 8px",
                      borderRadius: 999,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.status}
                  </span>
                </div>
              ))}

              <div
                style={{
                  marginTop: 16,
                  padding: "12px 14px",
                  background: "#F5F2EC",
                  borderRadius: 10,
                  fontSize: 13,
                  color: "#444",
                  lineHeight: 1.5,
                }}
              >
                <strong style={{ color: "#1A1A1A" }}>Next focus:</strong> Place value with 4-digit numbers. Luna will start here on Monday.
              </div>

              <div
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  background: "#FAEEDA",
                  color: "#B36B0A",
                  fontSize: 9,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  padding: "3px 8px",
                  borderRadius: 999,
                }}
              >
                SAMPLE · ILLUSTRATIVE
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ============================================================
// SECTION 3 — DEMO LOOP STORYBOARD
// ============================================================
function DemoLoopSection() {
  const frames = [
    {
      step: "01",
      title: "Wrong answer",
      desc: "Kavya picks option C. Luna shows the question result immediately.",
      color: "#FAEEDA",
      icon: "✗",
      iconColor: "#EF9F27",
    },
    {
      step: "02",
      title: "The common mistake",
      desc: "Luna names what went wrong, not just 'incorrect'. Kavya sees exactly where her thinking broke.",
      color: "#EEEDFE",
      icon: "⚠",
      iconColor: "#7F77DD",
    },
    {
      step: "03",
      title: "Same skill, new question",
      desc: "Not the same question again. A different question, same skill. Until it clicks.",
      color: "#EAF3DE",
      icon: "→",
      iconColor: "#639922",
    },
    {
      step: "04",
      title: "Mastered. Move on.",
      desc: "Once Kavya gets it right consistently, Luna moves to the next gap. No wasted time.",
      color: "#F5F2EC",
      icon: "✓",
      iconColor: "#4A7515",
    },
  ];

  return (
    <section className="cu-section">
      <div className="container" style={{ maxWidth: 1100 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div className="cu-eyebrow mb-3" style={{ fontSize: 14, letterSpacing: 2 }}>HOW THE COACHING WORKS</div>
          <h2 className="cu-h2">
            10 seconds. See how a wrong answer turns into{" "}
            <em className="cu-italic-accent">the next right one.</em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
          className="demo-grid"
        >
          {frames.map((frame) => (
            <div
              key={frame.step}
              className="cu-card"
              style={{ padding: 20 }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: frame.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  marginBottom: 12,
                  color: frame.iconColor,
                  fontWeight: 700,
                }}
              >
                {frame.icon}
              </div>
              <div style={{ fontSize: 10, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
                STEP {frame.step}
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#1A1A1A", marginBottom: 8 }}>
                {frame.title}
              </div>
              <p style={{ fontSize: 13, color: "#444", lineHeight: 1.6, margin: 0 }}>
                {frame.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .demo-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .demo-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ============================================================
// SECTION 4 — MECHANISM BAND (dark navy)
// ============================================================
function MechanismBand() {
  return (
    <section
      className="cu-dark-band"
      style={{ padding: "56px 0" }}
    >
      <div className="container" style={{ maxWidth: 1100 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#B8A8E8", marginBottom: 12 }}>
            THE MECHANISM
          </div>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 28,
              fontWeight: 800,
              color: "#FFF",
              lineHeight: 1.2,
              letterSpacing: -0.025,
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            See the question. Spot the common mistake. Practise the fix.
          </h2>
        </div>

        {/* Sample question on dark band */}
        <div
          style={{
            background: "rgba(255,255,255,0.07)",
            borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.12)",
            padding: 28,
            maxWidth: 680,
            margin: "0 auto",
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, color: "#B8A8E8", marginBottom: 12 }}>
            FROM OUR QUESTION BANK · Year 5 · Numeracy
          </div>
          <p style={{ fontSize: 16, fontWeight: 700, color: "#FFF", marginBottom: 16 }}>
            {SAMPLE_2.question}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
            {SAMPLE_2.options.map((opt) => (
              <div
                key={opt.letter}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: opt.letter === SAMPLE_2.correct ? "1.5px solid #9FE1CB" : "1px solid rgba(255,255,255,0.15)",
                  background: opt.letter === SAMPLE_2.correct ? "rgba(159,225,203,0.15)" : "rgba(255,255,255,0.05)",
                }}
              >
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: opt.letter === SAMPLE_2.correct ? "#9FE1CB" : "rgba(255,255,255,0.15)",
                    color: opt.letter === SAMPLE_2.correct ? "#1F2745" : "#B8A8E8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {opt.letter}
                </span>
                <span style={{ fontSize: 14, color: opt.letter === SAMPLE_2.correct ? "#FFF" : "#B8A8E8", fontWeight: opt.letter === SAMPLE_2.correct ? 600 : 400 }}>
                  {opt.text}
                </span>
                {opt.letter === SAMPLE_2.correct && (
                  <span style={{ marginLeft: "auto", fontSize: 12, color: "#9FE1CB", fontWeight: 700 }}>✓</span>
                )}
              </div>
            ))}
          </div>
          <div
            style={{
              background: "rgba(250,199,117,0.12)",
              borderRadius: 12,
              padding: "14px 18px",
              borderLeft: "3px solid #FAC775",
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 700, color: "#FAC775", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
              ⚠ THE COMMON MISTAKE
            </div>
            <p style={{ fontSize: 13, color: "#D4C8F0", lineHeight: 1.65, margin: 0 }}>
              {SAMPLE_2.commonMistake}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 5 — MEET THE COACHES
// ============================================================
function CoachesSection() {
  return (
    <section className="cu-section">
      <div className="container" style={{ maxWidth: 1100 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div className="cu-eyebrow mb-3">MEET THE COACHES</div>
          <h2 className="cu-h2">
            Pick the coach{" "}
            <em className="cu-italic-accent">your child will want to show up for.</em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            marginBottom: 20,
          }}
          className="coaches-grid"
        >
          {/* Luna */}
          <div className="cu-card" style={{ padding: 28 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
              <CoachAvatar coach="luna" size={80} />
              <div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#1A1A1A", marginBottom: 4 }}>Luna</div>
                <div style={{ fontSize: 13, color: "#7F77DD", fontWeight: 600 }}>Year 5 & Year 7 Coach</div>
              </div>
            </div>
            <p className="cu-body-card mb-4">
              Luna is methodical and warm. She explains every mistake in plain English, not just "wrong", but exactly where the thinking broke. Children who prefer a calm, step-by-step approach tend to choose Luna.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Patient", "Step-by-step", "Warm tone"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "#EEEDFE",
                    color: "#534AB7",
                    fontSize: 12,
                    fontWeight: 600,
                    padding: "4px 10px",
                    borderRadius: 999,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Leo */}
          <div className="cu-card" style={{ padding: 28 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
              <CoachAvatar coach="leo" size={80} />
              <div>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#1A1A1A", marginBottom: 4 }}>Leo</div>
                <div style={{ fontSize: 13, color: "#7F77DD", fontWeight: 600 }}>Year 5 & Year 7 Coach</div>
              </div>
            </div>
            <p className="cu-body-card mb-4">
              Leo is direct and energetic. He challenges children to think before they answer, and celebrates when they get it right. Children who like a bit of competition and quick feedback tend to choose Leo.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Direct", "Energetic", "Challenge-driven"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "#FAEEDA",
                    color: "#B36B0A",
                    fontSize: 12,
                    fontWeight: 600,
                    padding: "4px 10px",
                    borderRadius: 999,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Chat callout */}
        <div
          style={{
            background: "#EEEDFE",
            borderRadius: 16,
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 20 }}>💬</span>
          <p style={{ fontSize: 14, color: "#534AB7", fontWeight: 600, margin: 0, lineHeight: 1.5 }}>
            Luna and Leo are also one tap away. A persistent chat button on every screen, children can ask anything NAPLAN, anytime. Voice or text. Stays on topic.
          </p>
        </div>

        <p style={{ textAlign: "center", fontSize: 13, color: "#888", marginTop: 16 }}>
          Your child chooses at subscription. They can swap later.{" "}
          <Link href="/coaches" style={{ color: "#7F77DD", fontWeight: 600, textDecoration: "none" }}>
            Meet Luna and Leo in depth →
          </Link>
        </p>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .coaches-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ============================================================
// SECTION 6 — FOUNDER CARD
// ============================================================
function FounderSection() {
  return (
    <section className="cu-section" id="founder">
      <div className="container" style={{ maxWidth: 1100 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div className="cu-eyebrow mb-2">FOUNDERS · BUILT BY PARENTS, FOR OUR OWN KIDS.</div>
        </div>
        <div
          className="cu-card-large"
          style={{ padding: 0, overflow: "hidden" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "420px 1fr",
              alignItems: "stretch",
            }}
            className="founder-grid"
          >
            {/* Left: family photo */}
            <div className="founder-photo" style={{ position: "relative", minHeight: 420, background: "#E8E4F8" }}>
              <img
                src="https://d36hbw14aib5lz.cloudfront.net/310519663609833835/REXxUTrQVxgfiFBcKDxW3x/family-photo_d6b5ca9c.webp"
                alt="Rahul and his family — the reason ClassUp exists"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                  position: "absolute",
                  inset: 0,
                }}
              />
              {/* Caption overlay */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)",
                padding: "32px 20px 16px",
              }}>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>Rahul, Kavya &amp; family</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>The reason ClassUp exists.</div>
              </div>
            </div>
            {/* Right, story */}
            <div style={{ padding: "40px 40px" }}>
              <h2 className="cu-h2-card mb-4">
                I built ClassUp because of{" "}
                <em className="cu-italic-accent">Kavya.</em>
              </h2>
              <p className="cu-body-card mb-4">
                Kavya is in Year 6. She's sharp, curious, and genuinely good at maths, until NAPLAN prep started. I sat with her one evening, working through a practice paper, and she said something I haven't forgotten: "Dad, you explain it like it's obvious. It's not obvious to me."
              </p>
              <p className="cu-body-card mb-4">
                That was the moment I realised the problem wasn't her. It was the way we were practising. Generic questions, no feedback on what specifically went wrong, no adaptation. She was doing the work but not getting smarter at the gaps.
              </p>
              <p className="cu-body-card mb-4">
                So I built what I wished existed: a coach that names the exact mistake, then gives a different question on the same skill until it's solid. Not a tutor. Not a worksheet. A coach.
              </p>
              <p style={{ fontSize: 14, color: "#444", fontStyle: "italic", borderLeft: "3px solid #7F77DD", paddingLeft: 16, marginBottom: 16 }}>
                "If it isn't good enough for Kavya, it doesn't ship."
              </p>
              <p style={{ fontSize: 14, color: "#888" }}> - Rahul Tabeck, CEO · DIVTAB Holdings Pty Ltd · Melbourne
              </p>
              <Link href="/about#founder" style={{ fontSize: 14, color: "#7F77DD", fontWeight: 600, textDecoration: "none" }}>
                Read the full story →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .founder-grid { grid-template-columns: 1fr !important; }
          .founder-photo { min-height: 280px !important; }
        }
      `}</style>
    </section>
  );
}

// ============================================================
// SECTION 7 — HOW IT WORKS (3 steps)
// ============================================================
function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Free diagnostic",
      body: "~30 mins across 3 NAPLAN domains. Pause anytime. Save and resume. Finish in one go or three short sittings.",
      tagline: "Designed to feel like practice, not a test.",
      color: "#EAF3DE",
      textColor: "#4A7515",
    },
    {
      num: "02",
      title: "Personalised practice",
      body: "Every next question is chosen based on what your child got wrong yesterday, not a generic curriculum sequence. Plus a parent dashboard you can check anytime.",
      tagline: "Adapts after every question.",
      color: "#FAEEDA",
      textColor: "#B36B0A",
    },
    {
      num: "03",
      title: "Friday parent report",
      body: "Every Friday, you get an email. Three things: what improved, what's still hard, what we're working on next week. Friday parent emails. Real progress, plain English. No spam.",
      tagline: "Honest. Always.",
      color: "#EEEDFE",
      textColor: "#534AB7",
    },
  ];

  return (
    <section className="cu-section">
      <div className="container" style={{ maxWidth: 1100 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div className="cu-eyebrow mb-3">THE EXPERIENCE</div>
          <h2 className="cu-h2">
            Three steps.{" "}
            <em className="cu-italic-accent">No guesswork.</em>
          </h2>
          <p style={{ fontSize: 15, color: "#444", marginTop: 12 }}>
            Free diagnostic on day one. Personalised practice from day two. Honest report every Friday.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
          className="steps-grid"
        >
          {steps.map((step) => (
            <div key={step.num} className="cu-card" style={{ padding: 28 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: step.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 800,
                  color: step.textColor,
                  marginBottom: 16,
                }}
              >
                {step.num}
              </div>
              <h3 className="cu-h3 mb-3">{step.title}</h3>
              <p className="cu-body-card mb-3">{step.body}</p>
              <p style={{ fontSize: 13, fontStyle: "italic", color: step.textColor, fontWeight: 600 }}>
                {step.tagline}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 40, borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", border: "1px solid #E8E4D8" }}>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663609833835/REXxUTrQVxgfiFBcKDxW3x/classup-diagnostic-preview-A8fZH9eedosrdcuGzrbHRx.webp"
            alt="ClassUp diagnostic question interface"
            style={{ width: "100%", display: "block" }}
          />
        </div>
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <Link href="/how-it-works" style={{ fontSize: 14, color: "#7F77DD", fontWeight: 600, textDecoration: "none" }}>
            See the full experience →
          </Link>
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ============================================================
// SECTION 8 — FEEDBACK CARD
// ============================================================
function FeedbackCardSection() {
  return (
    <section className="cu-section">
      <div className="container" style={{ maxWidth: 1100 }}>
        <div className="cu-card-large" style={{ padding: "40px" }}>
          <div className="cu-eyebrow mb-3">HOW LUNA AND LEO LEARN</div>
          <h2 className="cu-h2-card mb-3">
            Luna and Leo learn what your child gets wrong, and adapt{" "}
            <em className="cu-italic-accent">every next question.</em>
          </h2>
          <p className="cu-body-card mb-6">
            Same mistake? Different question, same skill. Until your child gets it. Then we move on.
          </p>

          {/* Y7 LC question mockup */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              marginBottom: 20,
            }}
            className="feedback-grid"
          >
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
                QUESTION ATTEMPT
              </div>
              <div
                style={{
                  background: "#F5F2EC",
                  borderRadius: 14,
                  padding: 20,
                }}
              >
                <div style={{ fontSize: 12, color: "#7F77DD", fontWeight: 700, marginBottom: 8 }}>
                  Year 7 · Language Conventions
                </div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A", marginBottom: 12 }}>
                  Many chose postcards and replica medals as a ____.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {["souvenier", "souvanir", "souvenir", "suovenir"].map((opt, i) => (
                    <div
                      key={opt}
                      style={{
                        padding: "8px 12px",
                        borderRadius: 8,
                        background: i === 0 ? "#FAEEDA" : i === 2 ? "#EAF3DE" : "#FFF",
                        border: i === 0 ? "1px solid #EF9F27" : i === 2 ? "1px solid #639922" : "1px solid #E8E4D8",
                        fontSize: 13,
                        color: i === 0 ? "#B36B0A" : i === 2 ? "#4A7515" : "#444",
                        fontWeight: i === 0 || i === 2 ? 600 : 400,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {String.fromCharCode(65 + i)}) {opt}
                      {i === 0 && <span>✕ Selected</span>}
                      {i === 2 && <span>✓ Correct</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
                COACH FEEDBACK
              </div>
              <div
                style={{
                  background: "#F5F2EC",
                  borderRadius: 14,
                  padding: 20,
                  height: "calc(100% - 28px)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    marginBottom: 12,
                  }}
                >
                  <CoachAvatar coach="luna" size={36} />
                  <div
                    style={{
                      background: "#EEEDFE",
                      borderRadius: "0 12px 12px 12px",
                      padding: "10px 14px",
                      flex: 1,
                    }}
                  >
                    <p style={{ fontSize: 13, color: "#26215C", lineHeight: 1.6, margin: 0 }}>
                      Close, but not quite. "souvenier" adds an extra "i" before the "r". The word comes from French: sou-ve-nir. No extra "i" before the final "r". Let's try another one.
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    background: "#FAEEDA",
                    borderRadius: 10,
                    padding: "10px 14px",
                    fontSize: 12,
                    color: "#B36B0A",
                    fontWeight: 600,
                  }}
                >
                  Next: same skill, different word. French-origin spelling pattern.
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "#EEEDFE",
              borderRadius: 12,
              padding: "12px 18px",
              fontSize: 14,
              fontWeight: 600,
              color: "#534AB7",
            }}
          >
            📧 Key learning gaps feed your weekly parent email, so you see exactly where your child is improving.
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .feedback-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ============================================================
// SECTION 9 — NAPLAN BASICS
// ============================================================
function NAPLANBasicsSection() {
  return (
    <section className="cu-section">
      <div className="container" style={{ maxWidth: 1100 }}>
        <div className="cu-card-large" style={{ padding: "40px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
            }}
            className="naplan-grid"
          >
            <div>
              <div className="cu-eyebrow mb-3">WHAT'S ACTUALLY TESTED</div>
              <h2 className="cu-h2-card mb-4">
                What NAPLAN actually{" "}
                <em className="cu-italic-accent">measures.</em>
              </h2>
              <p className="cu-body-card mb-4">
                NAPLAN tests four domains: Numeracy, Reading, Language Conventions (Spelling + Grammar + Punctuation), and Writing. Year 5 and Year 7 are the years ClassUp covers deepest.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "Numeracy", desc: "Number, algebra, measurement, space, statistics, probability" },
                  { label: "Reading", desc: "Locating, integrating, and analysing information in texts" },
                  { label: "Language Conventions", desc: "Spelling, grammar, and punctuation, including audio dictation" },
                  { label: "Writing", desc: "One piece, persuasive or narrative (rotates yearly)" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                      padding: "10px 14px",
                      background: "#F5F2EC",
                      borderRadius: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#7F77DD",
                        marginTop: 6,
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#1A1A1A" }}>{item.label}</div>
                      <div style={{ fontSize: 13, color: "#666" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div
                style={{
                  background: "#EEEDFE",
                  borderRadius: 16,
                  padding: "24px",
                  marginBottom: 20,
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, color: "#7F77DD", textTransform: "uppercase", letterSpacing: 1, marginBottom: 10 }}>
                  ACARA ALIGNMENT
                </div>
                <p style={{ fontSize: 14, color: "#26215C", lineHeight: 1.65, margin: 0 }}>
                  Every question is mapped to ACARA codes, the Australian Curriculum framework NAPLAN itself is built on. No imported content. No generic year-level filler.
                </p>
              </div>
              <div style={{ borderRadius: 12, overflow: "hidden", marginBottom: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663609833835/REXxUTrQVxgfiFBcKDxW3x/classup-parent-report-C7AasRmmzP6i37gJhAnRhK.webp"
                  alt="ClassUp parent progress report"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <Link href="/naplan/year-5" style={naplanLinkStyle}>Year 5 NAPLAN guide →</Link>
                <Link href="/naplan/year-7" style={naplanLinkStyle}>Year 7 NAPLAN guide →</Link>
                <Link href="/naplan/numeracy" style={naplanLinkStyle}>Numeracy domain →</Link>
                <Link href="/naplan/reading" style={naplanLinkStyle}>Reading domain →</Link>
                <Link href="/naplan/language-conventions" style={naplanLinkStyle}>Language Conventions →</Link>
                <Link href="/naplan/bands-explained" style={naplanLinkStyle}>What NAPLAN bands mean →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .naplan-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const naplanLinkStyle: React.CSSProperties = {
  display: "block",
  padding: "10px 14px",
  background: "#FFF",
  border: "1px solid #E8E4D8",
  borderRadius: 10,
  fontSize: 14,
  fontWeight: 600,
  color: "#444",
  textDecoration: "none",
};

// ============================================================
// SECTION 10 — COMPARISON TABLE
// ============================================================
function ComparisonSection() {
  const rows = [
    { feature: "NAPLAN-specific content", generic: "Sometimes", franchise: "Sometimes", overseas: "Rarely", classup: true },
    { feature: "Australian curriculum (ACARA)", generic: "Partial", franchise: "Yes", overseas: "No", classup: true },
    { feature: "Adapts to your child's gaps", generic: "No", franchise: "No", overseas: "No", classup: true },
    { feature: "Names the specific mistake", generic: "No", franchise: "Depends on tutor", overseas: "No", classup: true },
    { feature: "Honest Friday parent report", generic: "No", franchise: "No", overseas: "No", classup: true },
  ];

  return (
    <section className="cu-section">
      <div className="container" style={{ maxWidth: 1100 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div className="cu-eyebrow mb-3">HOW WE COMPARE</div>
          <h2 className="cu-h2">
            Honest comparison,{" "}
            <em className="cu-italic-accent">not a sales pitch.</em>
          </h2>
        </div>
        <div className="cu-card-large" style={{ padding: "32px" }}>
          <div className="cu-comparison-scroll">
            <table className="cu-comparison-table" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "10px 14px", fontSize: 12, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: 1, minWidth: 200 }}>
                    Feature
                  </th>
                  <th style={{ padding: "10px 14px", textAlign: "center", minWidth: 140 }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "#7F77DD", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>
                      🇦🇺 BUILT IN MELBOURNE
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: "#1A1A1A" }}>ClassUp</div>
                    <span style={{ background: "#7F77DD", color: "#FFF", fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 999, textTransform: "uppercase" }}>
                      NEW
                    </span>
                  </th>
                  {["Generic edtech subscription", "Franchise tutoring centres", "Imported overseas platforms"].map((col) => (
                    <th key={col} style={{ padding: "10px 14px", fontSize: 12, fontWeight: 600, color: "#888", textAlign: "center", minWidth: 140 }}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.feature} style={{ borderTop: "1px solid #E8E4D8", background: i % 2 === 0 ? "#FAFAF8" : "#FFF" }}>
                    <td style={{ padding: "12px 14px", fontSize: 14, fontWeight: 600, color: "#1A1A1A" }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: "12px 14px", textAlign: "center" }}>
                      <span style={{ color: "#639922", fontSize: 16, fontWeight: 700 }}>✓</span>
                    </td>
                    {[row.generic, row.franchise, row.overseas].map((val, j) => (
                      <td key={j} style={{ padding: "12px 14px", textAlign: "center", fontSize: 13, color: "#666" }}>
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr style={{ borderTop: "1px solid #E8E4D8", background: "#EEEDFE" }}>
                  <td colSpan={1} style={{ padding: "14px 14px", textAlign: "center" }}>
                    <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 12, padding: "8px 14px" }}>
                      Start free →
                    </a>
                  </td>
                  <td colSpan={3} style={{ padding: "14px 14px", fontSize: 14, color: "#534AB7", fontStyle: "italic" }}>
                    We'll prove our value on the free diagnostic. Cancel in one tap if it isn't right.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 11 — PRICING
// ============================================================
function PricingSection() {
  return (
    <section className="cu-section">
      <div className="container" style={{ maxWidth: 1100 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div className="cu-eyebrow mb-3">PRICING</div>
          <h2 className="cu-h2">
            Simple,{" "}
            <em className="cu-italic-accent">honest pricing.</em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            maxWidth: 720,
            margin: "0 auto",
          }}
          className="pricing-grid"
        >
          {/* Featured */}
          <div
            style={{
              background: "#EEEDFE",
              borderRadius: 24,
              border: "1.5px solid #7F77DD",
              padding: 32,
              position: "relative",
            }}
          >

            <div style={{ fontSize: 13, fontWeight: 600, color: "#534AB7", marginBottom: 8 }}>
              First child
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
              <span style={{ fontSize: 42, fontWeight: 800, color: "#26215C", lineHeight: 1 }}>$59</span>
              <span style={{ fontSize: 14, color: "#534AB7" }}>/month</span>
            </div>
            <div style={{ fontSize: 12, color: "#7F77DD", marginBottom: 20 }}>
              Includes GST. Month-to-month. Cancel anytime.
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
              {["Free 30-minute diagnostic", "Year 5 or Year 7 coaching", "Adapts to your child's gaps", "Friday parent report", "Cancel in one tap"].map((feat) => (
                <div key={feat} style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 14, color: "#26215C" }}>
                  <span style={{ color: "#639922", fontWeight: 700 }}>✓</span>
                  {feat}
                </div>
              ))}
            </div>
            <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ width: "100%", justifyContent: "center", display: "flex" }}>
              Start free diagnostic →
            </a>
          </div>

          {/* Standard */}
          <div className="cu-card-large" style={{ padding: 32 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#888", marginBottom: 8 }}>
              Additional child
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
              <span style={{ fontSize: 42, fontWeight: 800, color: "#1A1A1A", lineHeight: 1 }}>$49</span>
              <span style={{ fontSize: 14, color: "#888" }}>/month</span>
            </div>
            <div style={{ fontSize: 12, color: "#888", marginBottom: 20 }}>
              per additional child on same account
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
              {["Everything in first child plan", "Separate coach selection", "Separate Friday report", "Shared parent dashboard"].map((feat) => (
                <div key={feat} style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 14, color: "#444" }}>
                  <span style={{ color: "#639922", fontWeight: 700 }}>✓</span>
                  {feat}
                </div>
              ))}
            </div>
            <a href={DIAGNOSTIC_URL} className="cu-btn-secondary" style={{ width: "100%", justifyContent: "center", display: "flex" }}>
              Start free diagnostic →
            </a>
          </div>
        </div>

        <p style={{ textAlign: "center", fontSize: 15, color: "#1A1A1A", fontWeight: 600, marginTop: 20 }}>
          Cancel in one tap from your account. No phone calls. No retention scripts. No guilt.
        </p>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ============================================================
// SECTION 12 — TRUST STRIP
// ============================================================
function TrustStripSection() {
  return (
    <section className="cu-section">
      <div className="container" style={{ maxWidth: 1100 }}>
        <div className="cu-card-large" style={{ padding: "40px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
              alignItems: "center",
            }}
            className="trust-grid"
          >
            <div>
              <div className="cu-eyebrow mb-3">BUILT IN AUSTRALIA · BUILT FOR PARENTS</div>
              <h2 className="cu-h2-card mb-4">
                Your child's data and your peace of mind,{" "}
                <em className="cu-italic-accent">both protected.</em>
              </h2>
              <p className="cu-body-card">
                ClassUp is built and hosted in Australia. We don't sell data. We don't share data. We don't use your child's practice history for anything other than making their next session better.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: "🇦🇺", title: "Australian-hosted data", desc: "All data stored in Australian data centres. Not US, not EU." },
                { icon: "🔒", title: "No data selling", desc: "Your child's practice history is theirs. We don't sell it, share it, or use it for advertising." },
                { icon: "📋", title: "Privacy by design", desc: "We collect only what's needed to make coaching work. Read our full privacy policy." },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    display: "flex",
                    gap: 14,
                    padding: "14px 18px",
                    background: "#F5F2EC",
                    borderRadius: 12,
                  }}
                >
                  <span style={{ fontSize: 20, flexShrink: 0 }} dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#1A1A1A", marginBottom: 2 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: "#666", lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .trust-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ============================================================
// SECTION 13 — FAQ
// ============================================================
const HOME_FAQ = [
  {
    question: "Who writes and checks the questions?",
    answer: "Every question is developed using our proprietary methodology to precisely match ACARA codes and NAPLAN formatting. All content undergoes strict internal review before publication. No generic filler. No imported content. Questions are written specifically for Australian Year 5 and Year 7 students.",
  },
  {
    question: "How long does the free diagnostic take?",
    answer: "The diagnostic covers three domains: Numeracy, Reading, and Language Conventions. Each domain takes approximately 10-15 minutes. You can pause and resume across up to three sittings, your child doesn't have to do it all at once. Most families complete it across two evenings.",
  },
  {
    question: "What happens after the diagnostic?",
    answer: "You receive a single-screen report showing exactly where your child is solid and where they're stuck, by skill, not just by domain. From there, your child starts their first coaching session. The coach picks up exactly where the diagnostic identified the gaps. No generic starting point.",
  },
  {
    question: "Will my child actually want to do this?",
    answer: "That's the real question, isn't it. We can't promise every child will love it, but we've designed it to feel like practice, not a test. The coach names what went wrong in plain English, not just 'incorrect'. Sessions are 30 minutes. Your child chooses their coach. That combination tends to keep children coming back.",
  },
  {
    question: "What year levels does ClassUp cover?",
    answer: "ClassUp currently covers Year 5 and Year 7 in depth, the two NAPLAN years where adaptive coaching has the most impact. Year 3 and Year 9 are on our roadmap. If you have a Year 3 or Year 9 child, you can join the waitlist and we'll let you know when we're ready.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. Cancel in one tap from your account settings. No phone calls, no retention scripts, no guilt. If you cancel mid-month, you keep access until the end of the billing period. We don't offer refunds for partial months, but we don't make it hard to leave.",
  },
  {
    question: "Is this a year-long commitment?",
    answer: "No. ClassUp is month-to-month. That said, the coaching is designed to be most useful from your first session through every term ahead, the adaptive model gets better the more your child practises. But you're never locked in.",
  },
  {
    question: "How is this different from past NAPLAN papers?",
    answer: "Past papers show you what NAPLAN looks like. They don't tell you which specific skills your child is missing, and they don't adapt based on what your child got wrong. ClassUp identifies the gaps, then gives targeted practice on exactly those gaps, not a generic sequence of questions.",
  },
];

function FAQSection() {
  return (
    <section className="cu-section">
      <div className="container" style={{ maxWidth: 1100 }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div className="cu-eyebrow mb-3">QUESTIONS</div>
          <h2 className="cu-h2">
            Questions parents{" "}
            <em className="cu-italic-accent">always ask.</em>
          </h2>
        </div>
        <div className="cu-card-large" style={{ padding: "32px 40px" }}>
          <FAQAccordion items={HOME_FAQ} defaultOpenIndexes={[0, 5]} />
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SECTION 14 — FINAL CTA BANNER
// ============================================================
function FinalCTASection() {
  return (
    <section style={{ background: "#F5F2EC", padding: "64px 0", textAlign: "center" }}>
      <div className="container" style={{ maxWidth: 640 }}>
        <div className="cu-eyebrow mb-4">START FOR FREE</div>
        <h2 className="cu-h2 mb-4">
          Ready to see where your child{" "}
          <em className="cu-italic-accent">actually stands?</em>
        </h2>
        <p style={{ fontSize: 15, color: "#444", marginBottom: 28 }}>
          No credit card. 30 minutes. Honest report.
        </p>
        <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>
          Start free diagnostic →
        </a>
      </div>
    </section>
  );
}

// ============================================================
// HOME PAGE
// ============================================================

const HOME_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "ClassUp",
    "url": "https://classup.com.au",
    "description": "ClassUp is an adaptive NAPLAN preparation tool for Australian students in Years 5 and 7. It provides a free 30-minute diagnostic and adaptive coaching via two AI coaches, Luna and Leo.",
    "parentOrganization": {
      "@type": "Organization",
      "name": "DIVTAB Holdings Pty Ltd",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Melbourne",
        "addressCountry": "AU"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "educationalCredentialAwarded": "NAPLAN preparation for Year 5 and Year 7"
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ClassUp",
    "url": "https://classup.com.au",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": [
      {
        "@type": "Offer",
        "name": "Year 5 Plan",
        "price": "59",
        "priceCurrency": "AUD",
        "billingIncrement": "P1M"
      },
      {
        "@type": "Offer",
        "name": "Year 7 Plan",
        "price": "59",
        "priceCurrency": "AUD",
        "billingIncrement": "P1M"
      }
    ],
    "description": "Adaptive NAPLAN coaching for Australian Year 5 and Year 7 students. Free diagnostic included.",
    "screenshot": "https://classup.com.au/og-image.png"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who writes and checks the questions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every question is developed using our proprietary methodology to precisely match ACARA codes and NAPLAN formatting. All content undergoes strict internal review before publication. No generic filler. No imported content. Questions are written specifically for Australian Year 5 and Year 7 students."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the free diagnostic take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The diagnostic covers three domains: Numeracy, Reading, and Language Conventions. Each domain takes approximately 10-15 minutes. You can pause and resume across up to three sittings. Most families complete it across two evenings."
        }
      },
      {
        "@type": "Question",
        "name": "What happens after the diagnostic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You receive a single-screen report showing exactly where your child is solid and where they're stuck, by skill, not just by domain. From there, your child starts their first coaching session. The coach picks up exactly where the diagnostic identified the gaps."
        }
      },
      {
        "@type": "Question",
        "name": "What year levels does ClassUp cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ClassUp currently covers Year 5 and Year 7 in depth, the two NAPLAN years where adaptive coaching has the most impact. Year 3 and Year 9 are on our roadmap."
        }
      },
      {
        "@type": "Question",
        "name": "Can I cancel anytime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Cancel in one tap from your account settings. No phone calls, no retention scripts, no guilt. If you cancel mid-month, you keep access until the end of the billing period."
        }
      },
      {
        "@type": "Question",
        "name": "How is this different from past NAPLAN papers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Past papers show you what NAPLAN looks like. They don't tell you which specific skills your child is missing, and they don't adapt based on what your child got wrong. ClassUp identifies the gaps, then gives targeted practice on exactly those gaps."
        }
      }
    ]
  }
];
export default function Home() {
  return (
    <PageLayout>
      <SEO
        title="ClassUp — NAPLAN prep that tells you the truth"
        description="A free 30-minute diagnostic that shows exactly where your child stands, then a coach who works on those exact gaps every session. For Year 5 and Year 7 Australian families."
        canonicalPath="/"
      
        schemaMarkup={HOME_SCHEMA}
      />
      <SEO
        title="ClassUp — NAPLAN prep that tells you the truth"
        description="A free 30-minute diagnostic that shows exactly where your child stands, then a coach who works on those exact gaps every session. For Year 5 and Year 7 Australian families."
        canonicalPath="/"
      />
      <HeroSection />
      <DemoLoopSection />
      <MechanismBand />
      <CoachesSection />
      <FeedbackCardSection />
      <FounderSection />
      <HowItWorksSection />
      <NAPLANBasicsSection />
      <ComparisonSection />
      <PricingSection />
      <TrustStripSection />
      <FAQSection />
      <FinalCTASection />
      <section className="cu-section" style={{ paddingTop: 32 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <EmailCapture sourcePage="homepage" />
        </div>
      </section>
    </PageLayout>
  );
}
