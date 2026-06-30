import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { FounderAvatar, EmailCapture } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// /about -- Full depth at eval bar
// Expanded founder story. Kavitha section. Roadmap. Email capture.
// ============================================================

export default function About() {
  return (
    <PageLayout>
      <SEO
        title="About ClassUp — built by a parent, for our own kids"
        description="ClassUp was built by Rahul Tabeck after his daughter Kavya said 'Dad, you explain it like it's obvious. It's not obvious to me.' Here is the full story."
        canonicalPath="/about"
      />
      <SEO
        title="About ClassUp — built by a parent, for our own kids"
        description="ClassUp was built by Rahul Tabeck after his daughter Kavya said 'Dad, you explain it like it's obvious. It's not obvious to me.' Here is the full story."
        canonicalPath="/about"
      />
      <section className="cu-section" style={{ paddingTop: 32 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div className="cu-eyebrow mb-4">ABOUT CLASSUP</div>
          <h1 className="cu-h1 mb-4">
            Built by parents,{" "}
            <em className="cu-italic-accent">for our own kids.</em>
          </h1>
          <p className="cu-body-large mb-8" style={{ maxWidth: 680 }}>
            ClassUp is a product of DIVTAB Holdings Pty Ltd, a Melbourne-based company. We built ClassUp
            because we couldn't find what we needed for our own children. This is the full story.
          </p>

          {/* Rahul founder story */}
          <div className="cu-card-large" style={{ padding: 0, overflow: "hidden", marginBottom: 32 }} id="founder">
            <div style={{ display: "grid", gridTemplateColumns: "380px 1fr", alignItems: "stretch" }} className="about-grid">
              {/* Left: family photo */}
              <div className="about-founder-photo" style={{ position: "relative", minHeight: 460, background: "#E8E4F8" }}>
                <img
                  src="/images/family-photo.webp"
                  alt="Rahul and his family"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", position: "absolute", inset: 0 }}
                />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)", padding: "32px 20px 16px" }}>
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.95)", fontWeight: 700 }}>Rahul Tabeck</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 2 }}>CEO & Co-founder · Melbourne</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>With Kavya & family</div>
                </div>
              </div>
              {/* Right: story */}
              <div style={{ padding: "48px" }}>
                <div className="cu-eyebrow mb-3">THE STORY</div>
                <h2 className="cu-h2-card mb-4">I built ClassUp because of Kavya.</h2>
                <p className="cu-body-card mb-4">
                  Kavya is in Year 6. She's sharp, curious, and genuinely good at maths, until NAPLAN
                  prep started. I sat with her one evening, working through a practice paper, and she said
                  something I haven't forgotten: "Dad, you explain it like it's obvious. It's not obvious to me."
                </p>
                <p className="cu-body-card mb-4">
                  That was the moment I realised the problem wasn't her. It was the way we were practising.
                  Generic questions, no feedback on what specifically went wrong, no adaptation. She was doing
                  the work but not getting smarter at the gaps. She was practising the mistake, not the fix.
                </p>
                <p className="cu-body-card mb-4">
                  I looked at what was available. Tutoring centres with fixed curricula. Overseas platforms
                  with US or UK content. Generic edtech subscriptions that didn't adapt. Nothing that said:
                  here's exactly what your child got wrong, here's why, here's the next question to fix it.
                </p>
                <p className="cu-body-card mb-4">
                  So I built it. ClassUp is the product I wish existed when Kavya started Year 5 prep. A coach
                  that names the exact mistake, then gives a different question on the same skill until it's
                  solid. Not a tutor. Not a worksheet. A coach.
                </p>
                <p className="cu-body-card mb-4">
                  The first version was a spreadsheet. Then a Google Form. Then a proper app. Kavya has used
                  every version. She's the reason the feedback explanations are in plain English. She's the
                  reason the sessions are 30 minutes. She's the reason the Friday email doesn't use the word
                  "journey."
                </p>
                <p style={{ fontSize: 14, color: "#444", fontStyle: "italic", borderLeft: "3px solid #7F77DD", paddingLeft: 16, marginBottom: 16 }}>
                  "If it isn't good enough for Kavya, it doesn't ship. That's the only product principle that matters."
                </p>
                <p style={{ fontSize: 14, color: "#888" }}> - Rahul Tabeck, CEO · Melbourne, 2025
                </p>
              </div>
            </div>
          </div>

          {/* Content team note */}
          <div className="cu-card-large" style={{ padding: "40px", marginBottom: 48, background: "#F5F2EC" }}>
            <div className="cu-eyebrow mb-3">THE CONTENT TEAM</div>
            <h2 className="cu-h2-card mb-4">Every question is reviewed by Australian educators against ACARA standards.</h2>
            <p className="cu-body-card mb-4">
              Every common mistake explanation in our question bank is reviewed by Australian educators
              against ACARA standards. Our content team in Melbourne develops the explanations; Australian
              educators who have taught Year 5 and Year 7 in real classrooms then review and refine them
              based on what children actually say when they get these questions wrong.
            </p>
            <p className="cu-body-card mb-4">
              We are a small team. We don't have a large marketing department. We have a small group of
              educators who care about getting the explanations right, and a small group of parents who care
              about getting the product right. That's the whole team.
            </p>
            <p className="cu-body-card">
              If you want to contribute to the question bank, as an educator, a tutor, or a parent
              who has spotted a gap, email us at <a href="mailto:hello@classup.com.au" style={{ color: "#7F77DD" }}>hello@classup.com.au</a>.
              We read every message.
            </p>
          </div>

          {/* Company facts */}
          <div className="cu-eyebrow mb-4">THE FACTS</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 48 }} className="facts-grid">
            {[
              { label: "Founded", value: "2025", sub: "Melbourne, Victoria, Australia" },
              { label: "Entity", value: "DIVTAB Holdings Pty Ltd", sub: "Australian company, ABN registered" },
              { label: "Data hosting", value: "Australia", sub: "All data stored in Australian data centres" },
              { label: "Year levels", value: "Year 5 + Year 7", sub: "Year 3 and Year 9 on roadmap" },
              { label: "Domains", value: "3 of 4", sub: "Numeracy, Reading, Language Conventions. Writing in v1.1." },
              { label: "Beta status", value: "10 families", sub: "Founders cohort. Open to new families now." },
            ].map((fact) => (
              <div key={fact.label} style={{ background: "#FFF", border: "1px solid #E8E4D8", borderRadius: 16, padding: "20px 24px" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{fact.label}</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: "#1A1A1A", marginBottom: 2 }}>{fact.value}</div>
                <div style={{ fontSize: 13, color: "#666" }}>{fact.sub}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="cu-card-large" style={{ padding: "40px", marginBottom: 48 }}>
            <div className="cu-eyebrow mb-4">WHAT WE BELIEVE</div>
            <h2 className="cu-h2-card mb-6">Four principles. No exceptions.</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="values-grid">
              {[
                { title: "Honesty over comfort", body: "We tell parents what their child's actual gaps are, not a vague 'needs improvement'. We tell children what they got wrong and why, not just 'incorrect'. Honest feedback is the only feedback that helps. If the coaching isn't working, the Friday report says so." },
                { title: "Specificity over coverage", body: "A child who practises 200 random questions learns less than a child who practises 20 targeted questions on their specific gaps. We choose specificity every time. The diagnostic identifies the gap. The coaching closes it. Nothing else." },
                { title: "Australian content, always", body: "NAPLAN is an Australian test. Every question in our bank is written specifically for Australian Year 5 and Year 7 students, mapped to ACARA codes. No imported US or UK content. No generic filler. No questions that reference non-Australian contexts." },
                { title: "Parents deserve real information", body: "The Friday parent email is not a marketing email. It tells you what improved, what's still hard, and what we're working on next week. That's it. No upsells, no fluff, no vague 'great progress this week.' Specific skills. Specific status." },
              ].map((val) => (
                <div key={val.title} style={{ background: "#F5F2EC", borderRadius: 16, padding: "24px" }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#1A1A1A", marginBottom: 8 }}>{val.title}</div>
                  <p style={{ fontSize: 14, color: "#444", lineHeight: 1.65, margin: 0 }}>{val.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Roadmap */}
          <div className="cu-eyebrow mb-4">WHAT'S COMING</div>
          <h2 className="cu-h2 mb-5">
            The roadmap.{" "}
            <em className="cu-italic-accent">In plain English.</em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48 }}>
            {[
              { version: "v1.0 (now)", items: ["Numeracy, Reading, Language Conventions", "Year 5 and Year 7", "Luna and Leo", "Free diagnostic", "Friday parent report"], status: "live", color: "#EAF3DE", textColor: "#4A7515" },
              { version: "v1.1 (next)", items: ["Writing domain", "Parent dashboard with full session history", "Skill-level progress tracking", "Email notification preferences"], status: "in progress", color: "#EEEDFE", textColor: "#534AB7" },
              { version: "v1.2 (planned)", items: ["Year 3 content", "Year 9 content", "Sibling accounts", "School group pricing"], status: "planned", color: "#FAEEDA", textColor: "#B36B0A" },
            ].map((item) => (
              <div key={item.version} style={{ background: item.color, borderRadius: 16, padding: "20px 24px" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#1A1A1A" }}>{item.version}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: item.textColor, background: "#FFF", borderRadius: 999, padding: "2px 10px" }}>{item.status}</div>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {item.items.map((i) => (
                    <span key={i} style={{ fontSize: 13, color: item.textColor, background: "rgba(255,255,255,0.6)", borderRadius: 8, padding: "4px 10px" }}>{i}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Email capture */}
          <div style={{ maxWidth: 700, margin: "0 auto 32px" }}>
            <EmailCapture sourcePage="about" />
          </div>

          {/* Contact */}
          <div style={{ textAlign: "center", padding: "32px 0 48px" }}>
            <div className="cu-eyebrow mb-4">GET IN TOUCH</div>
            <h2 className="cu-h2 mb-4">Questions? We read every email.</h2>
            <p style={{ fontSize: 15, color: "#444", marginBottom: 28 }}>
              hello@classup.com.au · We reply within 24 hours on business days.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 15, padding: "14px 28px" }}>
                Start free diagnostic →
              </a>
              <Link href="/contact" className="cu-btn-secondary" style={{ fontSize: 15, padding: "14px 28px", display: "inline-flex" }}>
                Contact us →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 767px) {
          .about-grid, .values-grid { grid-template-columns: 1fr !important; }
          .facts-grid { grid-template-columns: 1fr 1fr !important; }
          .about-founder-photo { min-height: 300px !important; }
        }
      `}</style>
    </PageLayout>
  );
}
