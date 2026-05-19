import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { EmailCapture } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// /roadmap -- ClassUp product roadmap (vertical timeline)
// Design tokens: cu-btn-primary (#1A1A1A), cu-btn-secondary,
// cu-eyebrow (#7F77DD), cu-h1/h2, cu-italic-accent (#7F77DD)
// Colours: cream #F5F2EC, lavender-tint #EEEDFE, #1A1A1A
// ============================================================

const MILESTONES = [
  {
    version: "v1.0",
    label: "Adaptive AI coaching",
    status: "live",
    statusLabel: "Live now ✓",
    timeline: null,
    features: [
      "Numeracy coaching",
      "Reading coaching",
      "Language Conventions coaching",
      "Year 5 and Year 7 question banks",
      "Luna and Leo AI coaches",
      "Free diagnostic (no credit card)",
      "Friday parent email report",
      "Adaptive question selection",
      "Specific mistake explanations",
    ],
    nodeBg: "#4A7515",
    badgeBg: "#EAF3DE",
    badgeText: "#4A7515",
    cardBg: "#FFFFFF",
  },
  {
    version: "v1.1",
    label: "Parent dashboard & writing",
    status: "in-progress",
    statusLabel: "Building now",
    timeline: "Available in 1–3 months",
    features: [
      "Writing domain coaching",
      "Parent dashboard with full session history",
      "Skill-level progress tracking",
      "Email notification preferences",
      "Sibling accounts",
    ],
    nodeBg: "#7F77DD",
    badgeBg: "#EEEDFE",
    badgeText: "#534AB7",
    cardBg: "#FFFFFF",
  },
  {
    version: "v1.2",
    label: "Expanded content & schools",
    status: "planned",
    statusLabel: "Coming soon",
    timeline: "Available in 3–6 months",
    features: [
      "Speaking and Listening support",
      "Year 3 content",
      "Year 9 content",
      "School group pricing",
      "School benchmark reports",
      "Teacher portal",
    ],
    nodeBg: "#CCC",
    badgeBg: "#F5F2EC",
    badgeText: "#888",
    cardBg: "#FFFFFF",
  },
  {
    version: "v1.3",
    label: "Simulation & community",
    status: "horizon",
    statusLabel: "On the horizon",
    timeline: "Available in 9–12 months",
    features: [
      "Term-by-term progress tracking",
      "NAPLAN simulation tests",
      "Offline practice packs",
      "Parent community forum",
    ],
    nodeBg: "#CCC",
    badgeBg: "#F5F2EC",
    badgeText: "#888",
    cardBg: "#FFFFFF",
  },
];

export default function Roadmap() {
  return (
    <PageLayout>
      <SEO
        title="ClassUp roadmap — what we're building next"
        description="Every feature on the ClassUp roadmap is included in your $49/month subscription. Writing coaching, Speaking and Listening, school benchmarking, and more."
        canonicalPath="/roadmap"
      />

      {/* ── HERO ── */}
      <section
        style={{
          background: "#1A1A1A",
          padding: "72px 0 64px",
        }}
      >
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#7F77DD", textTransform: "uppercase", letterSpacing: 2, marginBottom: 20 }}>
            PRODUCT ROADMAP
          </div>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.1,
              marginBottom: 20,
              maxWidth: 760,
            }}
          >
            One subscription.{" "}
            <em style={{ fontStyle: "italic", color: "#7F77DD" }}>
              Everything we build next, included.
            </em>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              maxWidth: 620,
              margin: 0,
            }}
          >
            Your $49/month grows with ClassUp. Every feature on this timeline is included — no upgrades, no extra tiers, no surprises.
          </p>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="cu-section">
        <div className="container" style={{ maxWidth: 900 }}>

          {/* Value callout */}
          <div
            style={{
              background: "#EEEDFE",
              borderRadius: 16,
              padding: "20px 28px",
              marginBottom: 56,
              borderLeft: "4px solid #7F77DD",
            }}
          >
            <p style={{ fontSize: 15, fontWeight: 700, color: "#534AB7", margin: 0, lineHeight: 1.6 }}>
              Every feature on this roadmap is included in your $49/month subscription. No extra tiers. No upgrade prompts. Your subscription grows with ClassUp.
            </p>
          </div>

          {/* Timeline */}
          <div style={{ position: "relative", paddingLeft: 48 }} className="roadmap-timeline">
            {/* Vertical spine */}
            <div
              style={{
                position: "absolute",
                left: 15,
                top: 12,
                bottom: 12,
                width: 2,
                background: "linear-gradient(to bottom, #4A7515 0%, #7F77DD 35%, #CCC 65%, #CCC 100%)",
                borderRadius: 2,
              }}
            />

            {MILESTONES.map((m, idx) => (
              <div
                key={m.version}
                style={{
                  position: "relative",
                  marginBottom: idx < MILESTONES.length - 1 ? 48 : 0,
                }}
              >
                {/* Node circle */}
                <div
                  style={{
                    position: "absolute",
                    left: -48,
                    top: 14,
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: m.status === "live" ? "#4A7515" : m.status === "in-progress" ? "#7F77DD" : "#FFFFFF",
                    border: m.status === "live" || m.status === "in-progress" ? "none" : "2px solid #CCC",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                  }}
                >
                  {m.status === "live" && (
                    <span style={{ fontSize: 14, color: "#FFF", fontWeight: 700 }}>✓</span>
                  )}
                  {m.status === "in-progress" && (
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FFF" }} />
                  )}
                </div>

                {/* Card */}
                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E8E4D8",
                    borderRadius: 20,
                    padding: "28px 32px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Header row */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: m.badgeText,
                        background: m.badgeBg,
                        borderRadius: 999,
                        padding: "3px 12px",
                        letterSpacing: 0.3,
                      }}
                    >
                      {m.statusLabel}
                    </span>
                  </div>

                  {/* Version + title */}
                  <div
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "clamp(18px, 2.5vw, 22px)",
                      fontWeight: 800,
                      color: "#1A1A1A",
                      marginBottom: 4,
                      lineHeight: 1.2,
                    }}
                  >
                    {m.version} — {m.label}
                  </div>

                  {/* Timeline estimate */}
                  {m.timeline && (
                    <div style={{ fontSize: 13, color: "#888", marginBottom: 16, display: "flex", alignItems: "center", gap: 5 }}>
                      <span>⏱</span>
                      <span>{m.timeline}</span>
                    </div>
                  )}
                  {!m.timeline && <div style={{ marginBottom: 16 }} />}

                  {/* Feature chips */}
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
                    {m.features.map((feat) => (
                      <span
                        key={feat}
                        style={{
                          fontSize: 13,
                          color: "#444",
                          background: "#F5F2EC",
                          borderRadius: 8,
                          padding: "5px 12px",
                          fontWeight: 500,
                          lineHeight: 1.4,
                        }}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Included tag */}
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ color: "#7F77DD", fontSize: 13 }}>✦</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#7F77DD" }}>Included in $49/month</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Principles */}
          <div className="cu-card-large" style={{ padding: "32px 40px", marginTop: 56, marginBottom: 48 }}>
            <div className="cu-eyebrow mb-3">HOW WE DECIDE WHAT TO BUILD</div>
            <h2 className="cu-h2-card mb-4">Roadmap principles.</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { title: "Parents tell us what's missing", body: "Every Friday report email has a reply link. We read every reply. The roadmap is shaped by what families actually ask for, not what looks good in a pitch deck." },
                { title: "We ship when it's ready", body: "We don't announce release dates we can't keep. Items move from 'planned' to 'in progress' when we start building, and from 'in progress' to 'live' when they work properly." },
                { title: "No feature is ever behind a paywall", body: "We made a deliberate decision to have one price. That means everything we build goes to every subscriber. There are no premium tiers. There are no add-ons." },
                { title: "We tell you when something changes", body: "If a planned feature gets delayed or cancelled, we will say so. No disappearing features. No silent removals." },
              ].map((p) => (
                <div key={p.title} style={{ paddingBottom: 16, borderBottom: "1px solid #E8E4D8" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#1A1A1A", marginBottom: 6 }}>{p.title}</div>
                  <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, margin: 0 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Email capture */}
          <div style={{ maxWidth: 700, margin: "0 auto 48px" }}>
            <EmailCapture sourcePage="roadmap" />
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", padding: "32px 0 48px" }}>
            <div className="cu-eyebrow mb-4">READY TO START?</div>
            <h2 className="cu-h2 mb-4">Start free. Grow with us.</h2>
            <p style={{ fontSize: 15, color: "#444", marginBottom: 28, maxWidth: 480, margin: "0 auto 28px" }}>
              One plan, $49/month. No lock-in. Every feature above is included as we ship it.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 15, padding: "14px 28px" }}>
                Start free diagnostic &#8594;
              </a>
              <Link href="/pricing" className="cu-btn-secondary" style={{ fontSize: 15, padding: "14px 28px", display: "inline-flex" }}>
                View pricing &#8594;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          .roadmap-timeline { padding-left: 36px !important; }
        }
      `}</style>
    </PageLayout>
  );
}
