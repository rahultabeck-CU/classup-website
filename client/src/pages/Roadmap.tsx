import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { EmailCapture } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// /roadmap -- ClassUp product roadmap
// "Your subscription grows with ClassUp."
// Every feature on the roadmap is included in $49/month.
// ============================================================

const ROADMAP_ITEMS = [
  {
    version: "v1.0 (now live)",
    items: [
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
    status: "live",
    color: "#EAF3DE",
    textColor: "#4A7515",
    statusBg: "#4A7515",
  },
  {
    version: "v1.1 (in progress)",
    items: [
      "Writing domain coaching",
      "Parent dashboard with full session history",
      "Skill-level progress tracking",
      "Email notification preferences",
      "Sibling accounts",
    ],
    status: "in progress",
    color: "#EEEDFE",
    textColor: "#534AB7",
    statusBg: "#534AB7",
  },
  {
    version: "v1.2 (planned)",
    items: [
      "Speaking and Listening support",
      "Year 3 content",
      "Year 9 content",
      "School group pricing",
      "School benchmark reports",
      "Teacher portal",
    ],
    status: "planned",
    color: "#FAEEDA",
    textColor: "#B36B0A",
    statusBg: "#B36B0A",
  },
  {
    version: "v1.3 (on the horizon)",
    items: [
      "Term-by-term progress tracking",
      "NAPLAN simulation tests",
      "Offline practice packs",
      "Parent community forum",
    ],
    status: "on the horizon",
    color: "#F5F2EC",
    textColor: "#555",
    statusBg: "#888",
  },
];

export default function Roadmap() {
  return (
    <PageLayout>
      <SEO
        title="ClassUp roadmap -- what we're building next"
        description="Every feature on the ClassUp roadmap is included in your $49/month subscription. Writing coaching, Speaking and Listening, school benchmarking, and more."
        canonicalPath="/roadmap"
      />
      <section className="cu-section" style={{ paddingTop: 32 }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="cu-eyebrow mb-4">PRODUCT ROADMAP</div>
          <h1 className="cu-h1 mb-4">
            What we're building.{" "}
            <em className="cu-italic-accent">In plain English.</em>
          </h1>
          <p className="cu-body-large mb-4" style={{ maxWidth: 680 }}>
            ClassUp is actively being built. Here is exactly what is live, what is in progress, and what is planned. No vague promises. No version numbers that never ship.
          </p>

          {/* Key message */}
          <div style={{ background: "#EEEDFE", borderRadius: 16, padding: "20px 28px", marginBottom: 48, borderLeft: "4px solid #7F77DD" }}>
            <p style={{ fontSize: 16, fontWeight: 700, color: "#534AB7", margin: 0 }}>
              Every feature on this roadmap is included in your $49/month subscription. No extra tiers. No upgrade prompts. Your subscription grows with ClassUp.
            </p>
          </div>

          {/* Roadmap cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 48 }}>
            {ROADMAP_ITEMS.map((item) => (
              <div key={item.version} style={{ background: item.color, borderRadius: 20, padding: "28px 32px" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                  <div style={{ fontSize: 17, fontWeight: 800, color: "#1A1A1A" }}>{item.version}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#FFF", background: item.statusBg, borderRadius: 999, padding: "3px 12px" }}>{item.status}</div>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {item.items.map((feat) => (
                    <span key={feat} style={{ fontSize: 13, color: item.textColor, background: "rgba(255,255,255,0.65)", borderRadius: 8, padding: "5px 12px", fontWeight: 500 }}>{feat}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Principles */}
          <div className="cu-card-large" style={{ padding: "32px 40px", marginBottom: 48 }}>
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
            <h2 className="cu-h2 mb-4">Start free. See where your child stands.</h2>
            <p style={{ fontSize: 15, color: "#444", marginBottom: 28 }}>
              The diagnostic is free. No credit card. 30 minutes. Pause and resume.
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
    </PageLayout>
  );
}
