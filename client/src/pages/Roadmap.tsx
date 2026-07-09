import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { DIAGNOSTIC_URL, CLASSUP_VERSION } from "@/lib/classup";
import { ORGANIZATION_REF } from "@/lib/schema";
import { SEO } from "@/components/SEO";

// ============================================================
// /roadmap -- Brand-statement page: "we keep getting better,
// we never charge extra". Three certainty-decreasing stages.
// Design tokens: cream #F5F2EC, lavender #7F77DD / deep #534AB7,
// near-black #1A1A1A CTA blocks, Plus Jakarta Sans.
// No hard launch dates anywhere (honesty).
// ============================================================

type StageTier = "now" | "next" | "horizon";

interface Stage {
  tier: StageTier;
  eyebrow: string;
  heading: string;
  timeline: string;
  intro: string;
  pill: string;
  items: { title: string; body: string }[];
}

const STAGES: Stage[] = [
  {
    tier: "now",
    eyebrow: "LIVE TODAY",
    heading: "Here now",
    timeline: "Live today",
    intro: "The things your child can use today. This isn't a promise — it's what's already live.",
    pill: "Live",
    items: [
      { title: "Free skill diagnostic", body: "An honest, skill-by-skill picture of where your child stands across Numeracy, Reading and Language Conventions." },
      { title: "Adaptive practice", body: "Questions that adjust to your child's actual gaps, getting easier or harder based on how they answer." },
      { title: "An explanation for every question", body: "Not just the right answer, but why the tempting wrong answers are wrong. A mistake becomes a lesson." },
      { title: "Audio-dictation spelling", body: "Spelling practised the way NAPLAN actually tests it: read aloud, typed from memory." },
      { title: "Honest parent reports", body: "Real progress and real struggles, in plain English, every week. No green-tick theatre." },
      { title: "Luna and Leo", body: "Two coaches your child chooses between, one calm and methodical, one direct and energetic." },
      { title: "Encouragement that lands", body: "Your child's coach checks in and celebrates real effort through each session, not empty confetti." },
      { title: "Years 5 and 7", body: "Full coverage across all three domains for the two key NAPLAN years." },
      { title: "Cancel in one tap", body: "No phone calls, no retention scripts, no guilt." },
    ],
  },
  {
    tier: "next",
    eyebrow: "IN PROGRESS",
    heading: "Building next",
    timeline: "Target: the next 3–4 months",
    intro: "What we're actively working on. We'd rather ship these right than rush them to hit a date — but they're in progress, not just ideas.",
    pill: "Building",
    items: [
      { title: "Voice coaching", body: "Talking through problems out loud with Luna or Leo, not just tapping answers." },
      { title: "Writing support", body: "Help with the one NAPLAN domain that's hardest to practise alone." },
      { title: "Be the Teacher", body: "After your child masters a skill, they get to spot another student's mistake (\u201cAlex answered 7 out of 12 — what went wrong?\u201d). Explaining an error is how mastery locks in." },
      { title: "Direct sign-up", body: "Start practising straight away, with a short skill-check that tailors the first session (diagnostic optional, not required)." },
      { title: "Remembers how your child likes to work", body: "Practice mode and preferences that carry across every session." },
    ],
  },
  {
    tier: "horizon",
    eyebrow: "EXPLORING",
    heading: "On the horizon",
    timeline: "Target: 4–6 months out",
    intro: "Where we're headed. The bigger ideas we're exploring, so you can see we're thinking well beyond this year.",
    pill: "Exploring",
    items: [
      { title: "Years 3 and 9", body: "Extending our honest approach to every NAPLAN year level." },
      { title: "Deeper personalisation", body: "Practice that understands your child's learning patterns more closely the more they use it." },
      { title: "Progress across the years", body: "See how your child grows across multiple NAPLAN cycles, not just one snapshot." },
      { title: "Ask your coach anything", body: "A built-in helper your child can ask for a hint or a nudge, in their own words." },
      { title: "A moment to be proud of", body: "Share your child's genuine breakthroughs with them, the honest way." },
    ],
  },
];

// Per-tier card styling — visual weight decreases into the future.
const TIER_STYLES: Record<StageTier, {
  card: React.CSSProperties;
  title: React.CSSProperties;
  body: React.CSSProperties;
  pill: React.CSSProperties;
  eyebrow: React.CSSProperties;
}> = {
  now: {
    card: {
      background: "#EEEDFE",
      border: "1px solid #D9D5F5",
      borderRadius: 18,
      padding: "26px 28px",
      boxShadow: "0 6px 20px rgba(83,74,183,0.10)",
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    title: { fontSize: 18, fontWeight: 800, color: "#1A1A1A", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 8 },
    body: { fontSize: 14, color: "#444", lineHeight: 1.65, margin: 0 },
    pill: { background: "#534AB7", color: "#FFF" },
    eyebrow: { color: "#534AB7" },
  },
  next: {
    card: {
      background: "#F7F6FC",
      border: "1px solid #E6E3F2",
      borderRadius: 18,
      padding: "26px 28px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    title: { fontSize: 18, fontWeight: 800, color: "#2A2A2A", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 8 },
    body: { fontSize: 14, color: "#555", lineHeight: 1.65, margin: 0 },
    pill: { background: "#EEEDFE", color: "#7F77DD" },
    eyebrow: { color: "#7F77DD" },
  },
  horizon: {
    card: {
      background: "transparent",
      border: "1px dashed #D3CFE4",
      borderRadius: 18,
      padding: "26px 28px",
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    title: { fontSize: 18, fontWeight: 700, color: "#555", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 8 },
    body: { fontSize: 14, color: "#888", lineHeight: 1.65, margin: 0 },
    pill: { background: "transparent", color: "#A49FC4", border: "1px solid #D3CFE4" },
    eyebrow: { color: "#A49FC4" },
  },
};

const ROADMAP_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Our Commitment: ClassUp Keeps Getting Better",
    "description": "ClassUp keeps improving — new features, real upgrades — and we never charge extra for them. One honest price, a product that grows with your child.",
    "url": "https://classup.com.au/roadmap",
    "publisher": ORGANIZATION_REF,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://classup.com.au/" },
      { "@type": "ListItem", "position": 2, "name": "Roadmap", "item": "https://classup.com.au/roadmap" },
    ],
  },
];

function StageSection({ stage }: { stage: Stage }) {
  const s = TIER_STYLES[stage.tier];
  return (
    <div style={{ marginBottom: 64 }}>
      <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, marginBottom: 10, ...s.eyebrow }}>
        {stage.eyebrow}
      </div>
      <h2
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "clamp(26px, 3.5vw, 36px)",
          fontWeight: 800,
          color: "#1A1A1A",
          lineHeight: 1.15,
          marginBottom: 12,
        }}
      >
        {stage.heading}
      </h2>
      <span
        style={{
          display: "inline-block",
          fontSize: 12,
          fontWeight: 700,
          borderRadius: 999,
          padding: "4px 14px",
          marginBottom: 16,
          ...s.pill,
        }}
      >
        {stage.timeline}
      </span>
      <p style={{ fontSize: 16, color: "#555", lineHeight: 1.7, maxWidth: 640, marginBottom: 28 }}>
        {stage.intro}
      </p>
      <div className="roadmap-card-grid">
        {stage.items.map((item) => (
          <div key={item.title} style={s.card}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, marginBottom: 10 }}>
              <div style={s.title}>{item.title}</div>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                  borderRadius: 999,
                  padding: "3px 10px",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  ...s.pill,
                }}
              >
                {stage.pill}
              </span>
            </div>
            <p style={s.body}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Roadmap() {
  return (
    <PageLayout>
      <SEO
        title="Our Commitment: ClassUp Keeps Getting Better | ClassUp"
        description="ClassUp keeps improving — new features, real upgrades — and we never charge extra for them. One honest price, a product that grows with your child. See what's here and what's coming."
        canonicalPath="/roadmap"
        schemaMarkup={ROADMAP_SCHEMA}
      />

      {/* ── TOP: COMMITMENT + ONE PRICE (side-by-side on desktop) ── */}
      <section className="cu-section" style={{ paddingTop: 40 }}>
        <div className="container" style={{ maxWidth: 1120 }}>
          <div className="roadmap-top-grid">
            {/* Commitment panel */}
            <div style={{ background: "#1A1A1A", borderRadius: 24, padding: "44px 44px", display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#7F77DD", textTransform: "uppercase", letterSpacing: 2, marginBottom: 20 }}>
                OUR COMMITMENT
              </div>
              <h1
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(30px, 3.6vw, 46px)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1.1,
                  marginBottom: 20,
                }}
              >
                We keep making ClassUp better.{" "}
                <em style={{ fontStyle: "italic", color: "#7F77DD" }}>We never charge you extra for it.</em>
              </h1>
              <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 28 }}>
                Like your phone: new features just show up, same price, every time.
              </p>
              <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 16, padding: "16px 32px", background: "#7F77DD", alignSelf: "flex-start" }}>
                Start the free diagnostic &#8594;
              </a>
              <div style={{ marginTop: "auto", paddingTop: 32, fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.4)" }}>
                ClassUp {CLASSUP_VERSION}
              </div>
            </div>

            {/* One price panel */}
            <div style={{ background: "#F5F2EC", borderRadius: 24, padding: "44px 44px", display: "flex", flexDirection: "column" }}>
              <div className="cu-eyebrow mb-4">ONE HONEST PRICE</div>
              <h2
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "clamp(26px, 3vw, 38px)",
                  fontWeight: 800,
                  color: "#1A1A1A",
                  lineHeight: 1.12,
                  marginBottom: 20,
                }}
              >
                One price. Everything we ship.
              </h2>
              <p style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 800, color: "#1A1A1A", fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.3, margin: "0 0 12px" }}>
                $59 a month.
              </p>
              <p style={{ fontSize: 17, color: "#444", lineHeight: 1.8, margin: "0 0 28px" }}>
                Every new feature included, forever. No upsells, no new tiers, no new invoice.
              </p>
              <div
                style={{
                  background: "#EEEDFE",
                  border: "1px solid #D9D5F5",
                  borderRadius: 16,
                  padding: "20px 24px",
                  marginTop: "auto",
                }}
              >
                <p style={{ fontSize: 16, color: "#534AB7", lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
                  And if you join us early, it costs even less to start: use the code{" "}
                  <strong style={{ fontWeight: 800 }}>FOUNDERS</strong> for $29 a month for your first six months. Our
                  way of saying thank you to the families who back us before everyone else does.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAGES ── */}
      <section className="cu-section">
        <div className="container" style={{ maxWidth: 1000 }}>
          {STAGES.map((stage) => (
            <StageSection key={stage.tier} stage={stage} />
          ))}
          <p style={{ fontSize: 13, color: "#999", lineHeight: 1.7, textAlign: "center", maxWidth: 620, margin: "8px auto 0" }}>
            These are our current targets, not fixed promises. We'd rather ship things right than rush them to hit a
            date — but we're always building.
          </p>
        </div>
      </section>

      {/* ── WHY ── */}
      <section style={{ background: "#1A1A1A", padding: "72px 0" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#7F77DD", textTransform: "uppercase", letterSpacing: 2, marginBottom: 18 }}>
            WHY WE'RE TELLING YOU ALL THIS
          </div>
          <h2
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(26px, 3.5vw, 40px)",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              marginBottom: 24,
            }}
          >
            Trust runs both ways.
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.72)", lineHeight: 1.8, margin: 0 }}>
            Because choosing a subscription for your child is an act of trust, and trust runs both ways. We want you
            to know that when you back ClassUp, you're not buying a static product — you're backing a team that
            shows up, keeps building, and keeps its promises. We're here for the long run, alongside you and your
            child.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="cu-section">
        <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
          <h2 className="cu-h2 mb-4">Start free. Grow with us.</h2>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 18 }}>
            <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 16, padding: "16px 32px" }}>
              Start the free diagnostic &#8594;
            </a>
            <Link href="/pricing" className="cu-btn-secondary" style={{ fontSize: 16, padding: "16px 32px", display: "inline-flex" }}>
              View pricing &#8594;
            </Link>
          </div>
          <p style={{ fontSize: 14, color: "#888", margin: 0 }}>
            Free to start · Your child's first name is all we ask for · About 30 minutes
          </p>
        </div>
      </section>

      <style>{`
        .roadmap-top-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: stretch;
        }
        .roadmap-card-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          align-items: stretch;
        }
        @media (max-width: 860px) {
          .roadmap-top-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 900px) {
          .roadmap-card-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .roadmap-card-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </PageLayout>
  );
}
