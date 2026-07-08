import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { FAQAccordion } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// /pricing -- Single $59/month plan. No tiers. No lock-in.
// "One plan. That's all you need."
// ============================================================

const PRICING_FAQ = [
  {
    question: "Is the diagnostic really free?",
    answer: "Yes. The diagnostic covers three NAPLAN domains and takes approximately 30 minutes. No credit card required. You get a full report showing your child's specific gaps. There is no catch.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. No lock-in contracts. Cancel from your account settings at any time. If you cancel mid-month, you keep access until the end of the billing period.",
  },
  {
    question: "Is there a family discount?",
    answer: "If you have children in both Year 5 and Year 7, email us at rahul@classup.com.au. We will set up a family plan at a reduced rate.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "Visa, Mastercard, and American Express. All payments are processed securely through Stripe. We do not store your card details.",
  },
  {
    question: "Is my child's data safe?",
    answer: "Yes. All data is stored in Australian data centres. We do not sell or share your child's data with third parties. Full details in our Privacy Policy.",
  },
  {
    question: "Does the $59 include everything on the roadmap?",
    answer: "Yes. Every feature we build -- writing coaching, Speaking and Listening support, school-specific benchmarking, and anything else on the roadmap -- is included in your $59/month subscription. We do not add tiers or charge extra for new features. Your subscription grows with ClassUp.",
  },
];

const COMPARISON = [
  { feature: "Free diagnostic", classup: true, tutoring: false, generic: false },
  { feature: "Adaptive question selection", classup: true, tutoring: "Sometimes", generic: false },
  { feature: "Specific mistake explanations", classup: true, tutoring: "Sometimes", generic: false },
  { feature: "Australian NAPLAN content", classup: true, tutoring: true, generic: "Often overseas" },
  { feature: "ACARA code mapping", classup: true, tutoring: false, generic: false },
  { feature: "Weekly parent report", classup: true, tutoring: "Sometimes", generic: false },
  { feature: "Available 24/7", classup: true, tutoring: false, generic: true },
  { feature: "No lock-in contract", classup: true, tutoring: false, generic: true },
  { feature: "Monthly cost", classup: "$59", tutoring: "$80-$150/hr", generic: "$20-$40" },
];

export default function Pricing() {
  return (
    <PageLayout>
      <SEO
        title="ClassUp pricing -- $59/month, one plan, everything included"
        description="ClassUp is $59/month for Year 5 and Year 7 families. Free 30-minute diagnostic included. No lock-in. Cancel anytime. Every future feature included."
        canonicalPath="/pricing"
      />
      <section className="cu-section" style={{ paddingTop: 32 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div className="cu-eyebrow mb-4">PRICING</div>
          <h1 className="cu-h1 mb-4">
            One plan.{" "}
            <em className="cu-italic-accent">That's all you need.</em>
          </h1>
          <p className="cu-body-large mb-8" style={{ maxWidth: 680 }}>
            The diagnostic is always free. Coaching is $59/month. No lock-in. Cancel anytime. Every feature we build is included.
          </p>

          {/* Two Pricing Cards */}
          <div className="pricing-cards" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "stretch", marginBottom: 20 }}>
            {/* Card 1 — First child */}
            <div className="cu-card-large" style={{ padding: "40px", border: "2px solid #7F77DD", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                <div>
                  <div className="cu-eyebrow mb-2">FIRST CHILD</div>
                  <div style={{ fontSize: 52, fontWeight: 800, color: "#1A1A1A", fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1 }}>$59</div>
                  <div style={{ fontSize: 15, color: "#555", marginTop: 6, fontWeight: 600 }}>per month</div>
                  <div style={{ fontSize: 14, color: "#888", marginTop: 2 }}>Includes GST. Month-to-month. Cancel anytime.</div>
                </div>
                <span style={{ background: "#EEEDFE", color: "#534AB7", fontSize: 11, fontWeight: 700, padding: "6px 12px", borderRadius: 999, whiteSpace: "nowrap" }}>ONE PLAN</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                {[
                  "Free diagnostic included (no credit card)",
                  "Year 5 and Year 7 NAPLAN question banks",
                  "Numeracy, Reading, Language Conventions",
                  "Luna or Leo adaptive coaching",
                  "Specific mistake explanations",
                  "Parent dashboard with full session history",
                  "Weekly Friday email report",
                  "Every future feature as we build it",
                ].map((feature) => (
                  <div key={feature} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#EAF3DE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontSize: 12, color: "#4A7515" }}>&#10003;</span>
                    </div>
                    <span style={{ fontSize: 15, color: "#333" }}>{feature}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: "#EEEDFE", borderRadius: 12, padding: "12px 16px", marginBottom: 20 }}>
                <span style={{ fontSize: 13, color: "#534AB7", fontWeight: 600 }}>
                  Introductory offer: use code FOUNDERS for $29/month for your first 6 months.
                </span>
              </div>

              <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ width: "100%", justifyContent: "center", display: "flex", fontSize: 16, padding: "16px 0", marginTop: "auto" }}>
                Start free diagnostic &#8594;
              </a>
              <p style={{ fontSize: 13, color: "#888", textAlign: "center", marginTop: 12 }}>No credit card for diagnostic</p>
            </div>

            {/* Card 2 — Additional child */}
            <div className="cu-card-large" style={{ padding: "40px", border: "1px solid #E8E4D8", display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                <div>
                  <div className="cu-eyebrow mb-2">ADDITIONAL CHILD</div>
                  <div style={{ fontSize: 52, fontWeight: 800, color: "#1A1A1A", fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1 }}>$49</div>
                  <div style={{ fontSize: 15, color: "#555", marginTop: 6, fontWeight: 600 }}>per month</div>
                  <div style={{ fontSize: 14, color: "#888", marginTop: 2 }}>Per additional child on the same account.</div>
                </div>
                <span style={{ background: "#EAF3DE", color: "#4A7515", fontSize: 11, fontWeight: 700, padding: "6px 12px", borderRadius: 999, whiteSpace: "nowrap" }}>PER CHILD</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                {[
                  "Everything in the first child plan",
                  "Separate coach selection",
                  "Separate progress reports",
                  "Shared parent dashboard",
                ].map((feature) => (
                  <div key={feature} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#EAF3DE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontSize: 12, color: "#4A7515" }}>&#10003;</span>
                    </div>
                    <span style={{ fontSize: 15, color: "#333" }}>{feature}</span>
                  </div>
                ))}
              </div>

              <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ width: "100%", justifyContent: "center", display: "flex", fontSize: 16, padding: "16px 0", marginTop: "auto" }}>
                Start free diagnostic &#8594;
              </a>
              <p style={{ fontSize: 13, color: "#888", textAlign: "center", marginTop: 12 }}>No credit card for diagnostic</p>
            </div>
          </div>

          <p style={{ fontSize: 14, color: "#888", textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
            Cancel in one tap from your account. No phone calls. No retention scripts. No guilt.
          </p>

          {/* Roadmap teaser */}
          <div className="cu-card-large" style={{ padding: "32px 40px", marginBottom: 48, borderLeft: "4px solid #7F77DD" }}>
            <div className="cu-eyebrow mb-3">YOUR $59 INCLUDES EVERYTHING WE BUILD NEXT</div>
            <h2 className="cu-h2-card mb-4">Your subscription grows with ClassUp.</h2>
            <p style={{ fontSize: 15, color: "#444", lineHeight: 1.75, marginBottom: 20 }}>
              We are actively building. Writing coaching, Speaking and Listening support, school-specific benchmarking, and more are on the roadmap. Every one of those features is included in your $59/month -- no extra tiers, no upgrade prompts.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="roadmap-grid">
              {[
                { label: "Now live", items: ["Numeracy coaching", "Reading coaching", "Language Conventions", "Free diagnostic", "Friday parent email"], color: "#EAF3DE", textColor: "#4A7515" },
                { label: "Coming soon", items: ["Writing coaching", "Speaking and Listening", "School benchmark reports", "Sibling accounts"], color: "#FAEEDA", textColor: "#B36B0A" },
                { label: "On the horizon", items: ["Teacher portal", "Term-by-term progress tracking", "NAPLAN simulation tests", "Offline practice packs"], color: "#EEEDFE", textColor: "#534AB7" },
              ].map((col) => (
                <div key={col.label} style={{ background: col.color, borderRadius: 16, padding: "20px 24px" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: col.textColor, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>{col.label}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {col.items.map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: 11, color: col.textColor }}>&#8250;</span>
                        <span style={{ fontSize: 13, color: "#333" }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 13, color: "#888", marginTop: 16 }}>
              Want to see the full roadmap?{" "}
              <Link href="/roadmap" style={{ color: "#7F77DD", fontWeight: 600 }}>
                View the ClassUp roadmap &#8594;
              </Link>
            </p>
          </div>

          {/* Comparison */}
          <div className="cu-card-large" style={{ padding: "40px", marginBottom: 48 }}>
            <div className="cu-eyebrow mb-4">HONEST COMPARISON</div>
            <h2 className="cu-h2-card mb-6">ClassUp vs tutoring vs generic prep apps.</h2>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: "10px 16px", fontSize: 12, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: 1, borderBottom: "1px solid #E8E4D8" }}>Feature</th>
                    <th style={{ textAlign: "center", padding: "10px 16px", fontSize: 12, fontWeight: 700, color: "#7F77DD", textTransform: "uppercase", letterSpacing: 1, borderBottom: "1px solid #E8E4D8", background: "#EEEDFE" }}>ClassUp</th>
                    <th style={{ textAlign: "center", padding: "10px 16px", fontSize: 12, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: 1, borderBottom: "1px solid #E8E4D8" }}>Tutoring</th>
                    <th style={{ textAlign: "center", padding: "10px 16px", fontSize: 12, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: 1, borderBottom: "1px solid #E8E4D8" }}>Generic apps</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row, i) => (
                    <tr key={row.feature} style={{ background: i % 2 === 0 ? "#FAFAF8" : "#FFF" }}>
                      <td style={{ padding: "12px 16px", fontSize: 14, color: "#333", fontWeight: 500 }}>{row.feature}</td>
                      <td style={{ padding: "12px 16px", textAlign: "center", background: "#EEEDFE" }}>
                        {typeof row.classup === "boolean" ? (
                          <span style={{ fontSize: 16, color: row.classup ? "#4A7515" : "#CC3333" }}>{row.classup ? "✓" : "✗"}</span>
                        ) : (
                          <span style={{ fontSize: 13, fontWeight: 700, color: "#534AB7" }}>{row.classup}</span>
                        )}
                      </td>
                      <td style={{ padding: "12px 16px", textAlign: "center" }}>
                        {typeof row.tutoring === "boolean" ? (
                          <span style={{ fontSize: 16, color: row.tutoring ? "#4A7515" : "#CC3333" }}>{row.tutoring ? "✓" : "✗"}</span>
                        ) : (
                          <span style={{ fontSize: 13, color: "#888" }}>{row.tutoring}</span>
                        )}
                      </td>
                      <td style={{ padding: "12px 16px", textAlign: "center" }}>
                        {typeof row.generic === "boolean" ? (
                          <span style={{ fontSize: 16, color: row.generic ? "#4A7515" : "#CC3333" }}>{row.generic ? "✓" : "✗"}</span>
                        ) : (
                          <span style={{ fontSize: 13, color: "#888" }}>{row.generic}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ -- defaultOpenIndexes: index 1 = "Can I cancel anytime?", index 4 = "Is my child's data safe?" */}
          <div className="cu-card-large" style={{ padding: "32px 40px", marginBottom: 48 }}>
            <div className="cu-eyebrow mb-3">PRICING QUESTIONS</div>
            <FAQAccordion items={PRICING_FAQ} defaultOpenIndexes={[1, 4]} />
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", padding: "48px 0" }}>
            <h2 className="cu-h2 mb-4">Start free. No credit card.</h2>
            <p style={{ fontSize: 15, color: "#444", marginBottom: 28 }}>The diagnostic is always free. See where your child stands before you decide.</p>
            <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>
              Start free diagnostic &#8594;
            </a>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 767px) {
          .roadmap-grid { grid-template-columns: 1fr !important; }
          .pricing-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageLayout>
  );
}
