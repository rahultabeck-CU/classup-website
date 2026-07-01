import React, { useState } from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { Breadcrumb } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// CONTACT PAGE
// ============================================================
export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <SEO
        title="Contact ClassUp"
        description="Get in touch with the ClassUp team. We are a small team based in Melbourne, Australia."
        canonicalPath="/contact"
      />
      <section className="cu-section" style={{ paddingTop: 32 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <div className="cu-eyebrow mb-4">CONTACT</div>
          <h1 className="cu-h1 mb-4">We read every email.</h1>
          <p className="cu-body-large mb-8">
            Questions, feedback, bug reports, or just want to say hi, we reply within 24 hours on business days.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="contact-grid">
            <div>
              {submitted ? (
                <div style={{ background: "#EAF3DE", borderRadius: 20, padding: "32px", textAlign: "center" }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
                  <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 20, fontWeight: 800, color: "#1A1A1A", marginBottom: 8 }}>Message sent.</h2>
                  <p style={{ fontSize: 14, color: "#4A7515" }}>We'll reply to {form.email} within 24 hours on business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 700, color: "#444", display: "block", marginBottom: 6 }}>Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      style={{ width: "100%", padding: "12px 14px", border: "1px solid #E8E4D8", borderRadius: 10, fontSize: 14, color: "#1A1A1A", background: "#FFF", outline: "none", boxSizing: "border-box" }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 700, color: "#444", display: "block", marginBottom: 6 }}>Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      style={{ width: "100%", padding: "12px 14px", border: "1px solid #E8E4D8", borderRadius: 10, fontSize: 14, color: "#1A1A1A", background: "#FFF", outline: "none", boxSizing: "border-box" }}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 700, color: "#444", display: "block", marginBottom: 6 }}>Subject</label>
                    <select
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      style={{ width: "100%", padding: "12px 14px", border: "1px solid #E8E4D8", borderRadius: 10, fontSize: 14, color: "#1A1A1A", background: "#FFF", outline: "none", boxSizing: "border-box" }}
                    >
                      <option value="">Select a subject</option>
                      <option value="question">Question about ClassUp</option>
                      <option value="feedback">Feedback</option>
                      <option value="bug">Bug report</option>
                      <option value="billing">Billing question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 700, color: "#444", display: "block", marginBottom: 6 }}>Message</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      style={{ width: "100%", padding: "12px 14px", border: "1px solid #E8E4D8", borderRadius: 10, fontSize: 14, color: "#1A1A1A", background: "#FFF", outline: "none", resize: "vertical", boxSizing: "border-box" }}
                      placeholder="Your message..."
                    />
                  </div>
                  <button type="submit" className="cu-btn-primary" style={{ alignSelf: "flex-start" }}>
                    Send message →
                  </button>
                </form>
              )}
            </div>
            <div>
              <div className="cu-card-large" style={{ padding: 24, marginBottom: 16 }}>
                <div className="cu-eyebrow mb-3">EMAIL</div>
                <a href="mailto:hello@classup.com.au" style={{ fontSize: 16, fontWeight: 700, color: "#7F77DD", textDecoration: "none" }}>hello@classup.com.au</a>
                <p style={{ fontSize: 13, color: "#888", marginTop: 4 }}>We reply within 24 hours on business days.</p>
              </div>
              <div className="cu-card-large" style={{ padding: 24, marginBottom: 16 }}>
                <div className="cu-eyebrow mb-3">COMPANY</div>
                <p style={{ fontSize: 14, color: "#444", lineHeight: 1.6, margin: 0 }}>
                  DIVTAB Holdings Pty Ltd<br />
                  Melbourne, Victoria, Australia<br />
                  ABN: Available on request
                </p>
              </div>
              <div className="cu-card-large" style={{ padding: 24 }}>
                <div className="cu-eyebrow mb-3">RESPONSE TIME</div>
                <p style={{ fontSize: 14, color: "#444", lineHeight: 1.6, margin: 0 }}>
                  Monday – Friday: within 24 hours<br />
                  Saturday – Sunday: within 48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 767px) { .contact-grid { grid-template-columns: 1fr !important; } }`}</style>
    </PageLayout>
  );
}

// ============================================================
// PRIVACY PAGE
// ============================================================
export function Privacy() {
  return (
    <PageLayout>
      <SEO
        title="Privacy policy — ClassUp"
        description="ClassUp's privacy policy. How we collect, use, and protect your data and your child's data."
        canonicalPath="/privacy"
      />
      <section className="cu-section" style={{ paddingTop: 32 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
          <div className="cu-eyebrow mb-4">LEGAL</div>
          <h1 className="cu-h1 mb-4">Privacy Policy</h1>
          <p style={{ fontSize: 14, color: "#888", marginBottom: 32 }}>Last updated: March 2025 · DIVTAB Holdings Pty Ltd</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {[
              {
                title: "Who we are",
                body: "ClassUp is a product of DIVTAB Holdings Pty Ltd, an Australian company based in Melbourne, Victoria. Our ABN is available on request. Contact us at hello@classup.com.au.",
              },
              {
                title: "What data we collect",
                body: "We collect: your email address and name (for account creation), your child's year level and age (for content selection), your child's answers to diagnostic and coaching questions (for personalisation), and payment information (processed by Stripe, we do not store card details). We do not collect your child's full name unless you provide it.",
              },
              {
                title: "How we use your data",
                body: "We use your data to: provide the ClassUp service, personalise coaching to your child's specific gaps, send the weekly Friday parent email, and improve our question bank and coaching methodology. We do not use your data for advertising. We do not sell your data to third parties.",
              },
              {
                title: "Where your data is stored",
                body: "All data is stored in Australian data centres. We use AWS Sydney (ap-southeast-2) for all data storage and processing. We do not transfer your data outside Australia.",
              },
              {
                title: "How your child's data is processed by AI",
                body: "When your child interacts with Luna or Leo, their answers and questions are sent to our AI processing partner so the coach can generate a response. We have configured this in three specific ways to protect your child: (1) We do not allow our AI partner to retain or use your child's data to train their AI models. Inputs are processed and discarded after the response is generated. (2) We never send identifying information to the AI partner. Your child's name, school, age, location, and account details are kept on our Australian servers and never leave Australia. Only the practice question content and your child's answer are sent for processing. (3) We do not use your child's practice history for any purpose other than improving their next coaching session. We do not analyse it for advertising. We do not sell it. We do not share it with schools, ACARA, or any third party. If you have questions about how we process your child's data, email hello@classup.com.au.",
              },
              {
                title: "Children's privacy",
                body: "ClassUp is designed for children aged 10-13 (Years 5 and 7). We collect minimal data about children, only what is necessary to provide the coaching service. We do not collect children's full names, photos, or location data. Parents have full access to all data collected about their child and can request deletion at any time.",
              },
              {
                title: "Your rights",
                body: "You have the right to: access all data we hold about you and your child, correct inaccurate data, request deletion of your data, and withdraw consent at any time. To exercise these rights, email hello@classup.com.au.",
              },
              {
                title: "Cookies",
                body: "We use essential cookies for authentication and session management. We use analytics cookies (Plausible Analytics, privacy-first) to understand how parents use the site. We do not use advertising cookies or third-party tracking pixels.",
              },
              {
                title: "Changes to this policy",
                body: "We will notify you by email if we make material changes to this policy. The current version is always available at classup.com.au/privacy.",
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, fontWeight: 800, color: "#1A1A1A", marginBottom: 10 }}>{section.title}</h2>
                <p style={{ fontSize: 15, color: "#444", lineHeight: 1.75 }}>{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

// ============================================================
// TERMS PAGE
// ============================================================
export function Terms() {
  return (
    <PageLayout>
      <SEO
        title="Terms of service — ClassUp"
        description="ClassUp's terms of service. Your rights and responsibilities as a ClassUp subscriber."
        canonicalPath="/terms"
      />
      <section className="cu-section" style={{ paddingTop: 32 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />
          <div className="cu-eyebrow mb-4">LEGAL</div>
          <h1 className="cu-h1 mb-4">Terms of Service</h1>
          <p style={{ fontSize: 14, color: "#888", marginBottom: 32 }}>Last updated: March 2025 · DIVTAB Holdings Pty Ltd</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {[
              {
                title: "Agreement",
                body: "By using ClassUp, you agree to these Terms of Service. If you do not agree, do not use ClassUp. These terms are governed by the laws of Victoria, Australia.",
              },
              {
                title: "Service description",
                body: "ClassUp is an adaptive NAPLAN coaching service for Australian students in Years 5 and 7. It includes a free diagnostic, personalised coaching sessions, and a weekly parent report. ClassUp is not a tutoring service and does not provide human tutors.",
              },
              {
                title: "Subscription and billing",
                body: "ClassUp subscriptions are billed monthly. You can cancel at any time from your account settings. Cancellation takes effect at the end of the current billing period. We do not offer refunds for partial months.",
              },
              {
                title: "Acceptable use",
                body: "You may use ClassUp only for its intended purpose: NAPLAN preparation for your child. You may not: share your account with others, use ClassUp for commercial purposes, attempt to reverse-engineer or copy our question bank or coaching methodology, or use ClassUp in any way that violates Australian law.",
              },
              {
                title: "Intellectual property",
                body: "All content in ClassUp, including questions, explanations, coaching responses, and methodology, is the intellectual property of DIVTAB Holdings Pty Ltd. You may not reproduce, distribute, or create derivative works from our content without written permission.",
              },
              {
                title: "Disclaimer",
                body: "ClassUp is designed to help children prepare for NAPLAN. We do not guarantee specific NAPLAN results. NAPLAN performance depends on many factors beyond coaching, including test-day conditions, health, and prior learning.",
              },
              {
                title: "Limitation of liability",
                body: "To the maximum extent permitted by Australian law, DIVTAB Holdings Pty Ltd is not liable for any indirect, incidental, or consequential damages arising from your use of ClassUp.",
              },
              {
                title: "Contact",
                body: "Questions about these terms? Email hello@classup.com.au.",
              },
            ].map((section) => (
              <div key={section.title}>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, fontWeight: 800, color: "#1A1A1A", marginBottom: 10 }}>{section.title}</h2>
                <p style={{ fontSize: 15, color: "#444", lineHeight: 1.75 }}>{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

// ============================================================
// RESOURCES PAGE (lead magnet hub)
// ============================================================
export function Resources() {
  return (
    <PageLayout>
      <SEO
        title="Free NAPLAN resources for parents — ClassUp"
        description="Free guides, checklists, and practice tools for Australian families preparing for NAPLAN Year 5 and Year 7."
        canonicalPath="/resources"
      />
      <section className="cu-section" style={{ paddingTop: 32 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <div className="cu-eyebrow mb-4">FREE RESOURCES</div>
          <h1 className="cu-h1 mb-4">
            Free NAPLAN resources{" "}
            <em className="cu-italic-accent">for Australian families.</em>
          </h1>
          <p className="cu-body-large mb-8" style={{ maxWidth: 680 }}>
            No email required for most of these. Just useful things we've made for Australian parents and children preparing for NAPLAN.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 48 }} className="resources-grid">
            {[
              {
                title: "NAPLAN Parent Guide",
                desc: "A plain-English guide to what NAPLAN tests, what the bands mean, and what to do if your child's result isn't where you hoped.",
                type: "PDF Guide",
                color: "#EEEDFE",
                textColor: "#534AB7",
                href: "/resources/naplan-parent-guide",
              },
              {
                title: "Year 5 Numeracy Checklist",
                desc: "The 12 specific Numeracy skills most commonly missed by Year 5 students. Use it to identify gaps before the diagnostic.",
                type: "Checklist",
                color: "#EAF3DE",
                textColor: "#4A7515",
                href: "/resources/year-5-numeracy-checklist",
              },
              {
                title: "Year 7 Numeracy Checklist",
                desc: "The 15 specific Numeracy skills most commonly missed by Year 7 students. Includes algebra, negative numbers, and proportional reasoning.",
                type: "Checklist",
                color: "#EAF3DE",
                textColor: "#4A7515",
                href: "/resources/year-7-numeracy-checklist",
              },
              {
                title: "Spelling Word List: Year 5",
                desc: "The 50 spelling words most commonly tested in Year 5 NAPLAN Language Conventions, with etymology notes.",
                type: "Word List",
                color: "#FAEEDA",
                textColor: "#B36B0A",
                href: "/resources/year-5-spelling-list",
              },
              {
                title: "Spelling Word List: Year 7",
                desc: "The 60 spelling words most commonly tested in Year 7 NAPLAN, including French and Latin-origin words.",
                type: "Word List",
                color: "#FAEEDA",
                textColor: "#B36B0A",
                href: "/resources/year-7-spelling-list",
              },
              {
                title: "NAPLAN Prep Timeline",
                desc: "A week-by-week prep timeline for families starting 8 weeks before NAPLAN. What to focus on, when.",
                type: "Timeline",
                color: "#F5F2EC",
                textColor: "#444",
                href: "/resources/prep-timeline",
              },
            ].map((resource) => (
              <Link key={resource.title} href={resource.href} style={{ textDecoration: "none" }}>
                <div
                  style={{ background: resource.color, borderRadius: 16, padding: "24px 28px", height: "100%", cursor: "pointer", transition: "transform 0.15s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "none")}
                >
                  <span style={{ background: resource.textColor, color: "#FFF", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 999, textTransform: "uppercase", marginBottom: 12, display: "inline-block" }}>{resource.type}</span>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 16, fontWeight: 800, color: "#1A1A1A", marginBottom: 8, lineHeight: 1.3 }}>{resource.title}</h3>
                  <p style={{ fontSize: 13, color: resource.textColor, lineHeight: 1.6, margin: 0 }}>{resource.desc}</p>
                  <div style={{ fontSize: 13, fontWeight: 700, color: resource.textColor, marginTop: 12 }}>Download free →</div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center", padding: "48px 0" }}>
            <div className="cu-eyebrow mb-4">THE BEST FREE RESOURCE</div>
            <h2 className="cu-h2 mb-4">The diagnostic. Free. 30 minutes.</h2>
            <p style={{ fontSize: 15, color: "#444", marginBottom: 28 }}>
              The most useful thing we offer for free is the diagnostic. It identifies your child's specific gaps, better than any checklist.
            </p>
            <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>
              Start free diagnostic →
            </a>
          </div>
        </div>
      </section>
      <style>{`@media (max-width: 767px) { .resources-grid { grid-template-columns: 1fr !important; } }`}</style>
    </PageLayout>
  );
}
