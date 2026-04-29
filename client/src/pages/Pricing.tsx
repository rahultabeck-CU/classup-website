import React, { useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { FAQAccordion } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL } from "@/lib/classup";
import { SEO } from "@/components/SEO";

const PRICING_FAQ = [
  {
    question: "Is the diagnostic really free?",
    answer: "Yes. The diagnostic covers three NAPLAN domains and takes approximately 30 minutes. No credit card required. You get a full report showing your child's specific gaps. There is no catch.",
  },
  {
    question: "What's the difference between the two plans?",
    answer: "The Year 5 plan ($49/month) covers Year 5 NAPLAN content. The Year 7 plan ($39/month) covers Year 7 NAPLAN content. Both plans include the same coaching features, parent dashboard, and Friday email. Year 7 is priced lower because the question bank is smaller (Year 7 launched after Year 5).",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. No lock-in contracts. Cancel from your account settings at any time. If you cancel mid-month, you keep access until the end of the billing period.",
  },
  {
    question: "Is there a family discount?",
    answer: "If you have children in both Year 5 and Year 7, email us at hello@classup.com.au. We'll set up a family plan at a reduced rate.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "Visa, Mastercard, and American Express. All payments are processed securely through Stripe. We do not store your card details.",
  },
  {
    question: "Is my child's data safe?",
    answer: "Yes. All data is stored in Australian data centres. We do not sell or share your child's data with third parties. Full details in our Privacy Policy.",
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
  { feature: "Monthly cost", classup: "$39-$49", tutoring: "$80-$150/hr", generic: "$20-$40" },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "term">("monthly");

  return (
    <PageLayout>
      <SEO
        title="ClassUp pricing — $49/month for Year 5, $39/month for Year 7"
        description="ClassUp costs $49/month for Year 5 and $39/month for Year 7. Free 30-minute diagnostic included. No lock-in. Cancel anytime."
        canonicalPath="/pricing"
      />
      <SEO
        title="ClassUp pricing — $49/month for Year 5, $39/month for Year 7"
        description="ClassUp costs $49/month for Year 5 and $39/month for Year 7. Free 30-minute diagnostic included. No lock-in. Cancel anytime."
        canonicalPath="/pricing"
      />
      <section className="cu-section" style={{ paddingTop: 32 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <div className="cu-eyebrow mb-4">PRICING</div>
          <h1 className="cu-h1 mb-4">
            Simple, honest{" "}
            <em className="cu-italic-accent">pricing.</em>
          </h1>
          <p className="cu-body-large mb-8" style={{ maxWidth: 680 }}>
            The diagnostic is always free. Coaching is $49/month for Year 5, $39/month for Year 7. No lock-in. Cancel anytime.
          </p>

          {/* Plans */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 48 }} className="plans-grid">
            {/* Year 5 */}
            <div className="cu-card-large" style={{ padding: "40px", border: "2px solid #7F77DD" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                <div>
                  <div className="cu-eyebrow mb-2">YEAR 5</div>
                  <div style={{ fontSize: 48, fontWeight: 800, color: "#1A1A1A", fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1 }}>$49</div>
                  <div style={{ fontSize: 14, color: "#888", marginTop: 4 }}>per month · cancel anytime</div>
                </div>
                <span style={{ background: "#EEEDFE", color: "#534AB7", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 999 }}>MOST POPULAR</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {[
                  "Free diagnostic included",
                  "Year 5 NAPLAN question bank",
                  "Numeracy, Reading, Language Conventions",
                  "Luna or Leo coaching",
                  "Adaptive question selection",
                  "Specific mistake explanations",
                  "Parent dashboard",
                  "Weekly Friday email",
                  "Persistent chat (Luna or Leo)",
                ].map((feature) => (
                  <div key={feature} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#EAF3DE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontSize: 11, color: "#4A7515" }}>✓</span>
                    </div>
                    <span style={{ fontSize: 14, color: "#333" }}>{feature}</span>
                  </div>
                ))}
              </div>
              <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ width: "100%", justifyContent: "center", display: "flex", fontSize: 15 }}>
                Start free diagnostic →
              </a>
              <p style={{ fontSize: 12, color: "#888", textAlign: "center", marginTop: 12 }}>No credit card for diagnostic</p>
            </div>

            {/* Year 7 */}
            <div className="cu-card-large" style={{ padding: "40px" }}>
              <div style={{ marginBottom: 24 }}>
                <div className="cu-eyebrow mb-2">YEAR 7</div>
                <div style={{ fontSize: 48, fontWeight: 800, color: "#1A1A1A", fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1 }}>$39</div>
                <div style={{ fontSize: 14, color: "#888", marginTop: 4 }}>per month · cancel anytime</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {[
                  "Free diagnostic included",
                  "Year 7 NAPLAN question bank",
                  "Numeracy, Reading, Language Conventions",
                  "Luna or Leo coaching",
                  "Adaptive question selection",
                  "Specific mistake explanations",
                  "Parent dashboard",
                  "Weekly Friday email",
                  "Persistent chat (Luna or Leo)",
                ].map((feature) => (
                  <div key={feature} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#EAF3DE", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontSize: 11, color: "#4A7515" }}>✓</span>
                    </div>
                    <span style={{ fontSize: 14, color: "#333" }}>{feature}</span>
                  </div>
                ))}
              </div>
              <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ width: "100%", justifyContent: "center", display: "flex", fontSize: 15, background: "#1A1A1A" }}>
                Start free diagnostic →
              </a>
              <p style={{ fontSize: 12, color: "#888", textAlign: "center", marginTop: 12 }}>No credit card for diagnostic</p>
            </div>
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

          {/* FAQ */}
          <div className="cu-card-large" style={{ padding: "32px 40px", marginBottom: 48 }}>
            <div className="cu-eyebrow mb-3">PRICING QUESTIONS</div>
            <FAQAccordion items={PRICING_FAQ} />
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", padding: "48px 0" }}>
            <h2 className="cu-h2 mb-4">Start free. No credit card.</h2>
            <p style={{ fontSize: 15, color: "#444", marginBottom: 28 }}>The diagnostic is always free. See where your child stands before you decide.</p>
            <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>
              Start free diagnostic →
            </a>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 767px) {
          .plans-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageLayout>
  );
}
