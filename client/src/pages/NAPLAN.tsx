import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { FAQAccordion, EmailCapture } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// /naplan -- Full depth at eval bar
// Expanded key facts. What NAPLAN is not. Common misconceptions.
// ============================================================

const NAPLAN_DOMAINS = [
  {
    title: "Numeracy",
    href: "/naplan-year-5-numeracy",
    desc: "Number, algebra, measurement, space, statistics, and probability. The largest domain by question count. Non-calculator throughout.",
    color: "#EEEDFE",
    textColor: "#534AB7",
    pill: "#7F77DD",
  },
  {
    title: "Reading",
    href: "/naplan-year-5-reading",
    desc: "Locating, integrating, and analysing information across narrative and informational texts. Includes persuasive texts from Year 5.",
    color: "#EAF3DE",
    textColor: "#4A7515",
    pill: "#639922",
  },
  {
    title: "Language Conventions",
    href: "/naplan/language-conventions",
    desc: "Spelling, grammar, and punctuation. Includes audio dictation in the online test. Spelling is the most commonly underestimated section.",
    color: "#FAEEDA",
    textColor: "#B36B0A",
    pill: "#EF9F27",
  },
  {
    title: "Writing",
    href: "/naplan/writing",
    desc: "One extended writing piece, persuasive or narrative. Rotates each year. 42 minutes. No word limit. Marked on 10 criteria.",
    color: "#F5F2EC",
    textColor: "#444",
    pill: "#888",
  },
];

const NAPLAN_FAQ = [
  {
    question: "When is NAPLAN held?",
    answer: "NAPLAN is held in March each year, typically the second or third week. The exact dates are set by ACARA and published on the NAPLAN website. Schools notify families at least 4 weeks in advance.",
  },
  {
    question: "Is NAPLAN pass or fail?",
    answer: "No. NAPLAN is not pass or fail. Results are reported on a 10-band scale. The National Minimum Standard (NMS) is the benchmark below which students may need additional support. Meeting the NMS is not 'passing' -- it's the minimum. Most students score well above it.",
  },
  {
    question: "Does NAPLAN affect my child's school record?",
    answer: "NAPLAN results are reported to parents, schools, and ACARA. They are not part of your child's formal school record in the same way as report cards. However, some schools use NAPLAN results to inform support programs, extension classes, or subject selection. Check with your school.",
  },
  {
    question: "Can my child be exempt from NAPLAN?",
    answer: "Yes. Students with significant cognitive disabilities or who have been in Australia for less than a year may be exempt. Students with disability may also be eligible for adjustments (extra time, assistive technology). Contact your school for details.",
  },
  {
    question: "What is the adaptive online format?",
    answer: "Since 2023, NAPLAN has been conducted online using an adaptive format. This means the questions get harder or easier based on your child's responses. Two children in the same class may see very different questions. The adaptive format is more accurate than a fixed paper test -- it can measure a wider range of ability levels.",
  },
  {
    question: "What is the National Minimum Standard?",
    answer: "The National Minimum Standard (NMS) is the benchmark set by ACARA below which students are considered to need additional support. The NMS is different for each year level. For Year 5, the NMS is Band 4. For Year 7, it's Band 5. Most students score well above the NMS -- the national average is typically 2-3 bands above it.",
  },
];


const NAPLAN_HUB_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://classup.com.au/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "NAPLAN",
        "item": "https://classup.com.au/naplan"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is NAPLAN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NAPLAN is Australia's National Assessment Program for Literacy and Numeracy. It is sat by students in Years 3, 5, 7, and 9 in May each year. It tests four domains: Numeracy, Reading, Language Conventions (spelling, grammar, punctuation), and Writing."
        }
      },
      {
        "@type": "Question",
        "name": "What year levels sit NAPLAN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Students in Years 3, 5, 7, and 9 sit NAPLAN. ClassUp currently covers Year 5 and Year 7 in depth."
        }
      },
      {
        "@type": "Question",
        "name": "What does NAPLAN actually test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NAPLAN tests four domains: Numeracy (number, algebra, measurement, space, statistics, probability), Reading (comprehension of written texts), Language Conventions (spelling, grammar, punctuation), and Writing (one extended response marked on six criteria)."
        }
      },
      {
        "@type": "Question",
        "name": "What is the NAPLAN band scale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NAPLAN results are reported on a 10-band scale. Each year level has a National Minimum Standard (NMS). For Year 5 the NMS is Band 4; for Year 7 it is Band 5. Results above the NMS are reported as bands above the minimum."
        }
      },
      {
        "@type": "Question",
        "name": "Is NAPLAN compulsory?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NAPLAN participation is expected but parents can withdraw their child by submitting a written request to the school before the test window. The test is not compulsory in the legal sense but most schools strongly encourage participation."
        }
      }
    ]
  }
];
export default function NAPLAN() {
  return (
    <PageLayout>
      <SEO
        title="What NAPLAN actually tests — ClassUp"
        description="NAPLAN is Australia's national literacy and numeracy assessment for Years 3, 5, 7, and 9. Here is what it tests, what it does not test, and what the results mean."
        canonicalPath="/naplan"
      
        schemaMarkup={NAPLAN_HUB_SCHEMA}
      />
      <section className="cu-section" style={{ paddingTop: 32 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <div className="cu-eyebrow mb-4">NAPLAN EXPLAINED</div>
          <h1 className="cu-h1 mb-4">
            What NAPLAN actually{" "}
            <em className="cu-italic-accent">tests.</em>
          </h1>
          <p className="cu-body-large mb-6" style={{ maxWidth: 680 }}>
            NAPLAN is Australia's national literacy and numeracy assessment. It's sat by students in Years 3,
            5, 7, and 9. ClassUp covers Year 5 and Year 7 in depth. Here is what you need to know:
            including what NAPLAN is not.
          </p>

          {/* What NAPLAN is not */}
          <div className="cu-card-large" style={{ padding: "32px 40px", marginBottom: 40 }}>
            <div className="cu-eyebrow mb-4">WHAT NAPLAN IS NOT</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }} className="not-grid">
              {[
                { title: "Not an IQ test", body: "NAPLAN tests specific literacy and numeracy skills. It does not measure intelligence, creativity, or potential. A child can score below the national average in NAPLAN and be exceptionally capable in other ways.", color: "#FAEEDA", textColor: "#B36B0A" },
                { title: "Not a school report", body: "NAPLAN is a national standardised test. It measures your child's skills relative to the national average, not relative to their class. A child in a high-performing school might score Band 7 and still be below their class average.", color: "#EEEDFE", textColor: "#534AB7" },
                { title: "Not a verdict", body: "NAPLAN is a snapshot. It measures where your child is on a specific set of skills on a specific day. It does not predict their future academic performance. It does not determine their worth. It is useful data, not a judgment.", color: "#EAF3DE", textColor: "#4A7515" },
              ].map((item) => (
                <div key={item.title} style={{ background: item.color, borderRadius: 14, padding: "18px 20px" }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#1A1A1A", marginBottom: 8 }}>{item.title}</div>
                  <p style={{ fontSize: 13, color: item.textColor, lineHeight: 1.65, margin: 0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Year links */}
          <div className="cu-eyebrow mb-4">BY YEAR LEVEL</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 48 }} className="year-grid">
            {[
              {
                year: "Year 5",
                href: "/naplan-year-5",
                desc: "First major NAPLAN year. Results are used to identify students who need support before high school. The National Minimum Standard is Band 4. The national average is typically Band 6.",
                color: "#EEEDFE",
                textColor: "#534AB7",
                detail: "Numeracy, Reading, Language Conventions, Writing",
              },
              {
                year: "Year 7",
                href: "/naplan-year-7",
                desc: "First year of high school. Results inform school support programs and can affect subject selection at some schools. The National Minimum Standard is Band 5. The national average is typically Band 7-8.",
                color: "#EAF3DE",
                textColor: "#4A7515",
                detail: "Numeracy, Reading, Language Conventions, Writing",
              },
            ].map((item) => (
              <Link key={item.year} href={item.href} style={{ textDecoration: "none" }}>
                <div style={{ background: item.color, borderRadius: 20, padding: "28px 32px", cursor: "pointer", transition: "transform 0.15s ease", height: "100%" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "none")}
                >
                  <div style={{ fontSize: 28, fontWeight: 800, color: "#1A1A1A", fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 8 }}>{item.year}</div>
                  <p style={{ fontSize: 14, color: item.textColor, lineHeight: 1.6, marginBottom: 12 }}>{item.desc}</p>
                  <div style={{ fontSize: 12, color: item.textColor, opacity: 0.7, marginBottom: 12 }}>{item.detail}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: item.textColor }}>Full guide →</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Domains */}
          <div className="cu-eyebrow mb-4">THE FOUR DOMAINS</div>
          <p className="cu-body-card mb-6" style={{ maxWidth: 680 }}>
            NAPLAN tests four domains. ClassUp covers three of them in depth: Numeracy, Reading, and Language
            Conventions. Writing is on our roadmap for v1.1.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginBottom: 48 }} className="domains-grid">
            {NAPLAN_DOMAINS.map((domain) => (
              <Link key={domain.title} href={domain.href} style={{ textDecoration: "none" }}>
                <div style={{ background: domain.color, borderRadius: 16, padding: "24px 28px", cursor: "pointer", transition: "transform 0.15s ease", height: "100%" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "none")}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                    <div style={{ fontSize: 18, fontWeight: 800, color: "#1A1A1A", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{domain.title}</div>
                    <span style={{ background: domain.pill, color: "#FFF", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 999, textTransform: "uppercase" }}>
                      Domain
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: domain.textColor, lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: domain.desc }} />
                  <div style={{ fontSize: 13, fontWeight: 700, color: domain.textColor, marginTop: 12 }}>Explore →</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Key facts */}
          <div className="cu-card-large" style={{ padding: "40px", marginBottom: 48 }}>
            <div className="cu-eyebrow mb-4">KEY FACTS</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="facts-grid">
              {[
                { label: "When is NAPLAN?", value: "March each year", sub: "Typically the second or third week of March. Online, adaptive format since 2023." },
                { label: "How long is it?", value: "4 sessions", sub: "Writing, Reading, Language Conventions, Numeracy. Each 42-50 minutes." },
                { label: "What are bands?", value: "Bands 1-10", sub: "Results are reported on a 10-band scale. Year 5 typically spans bands 3-8. Year 7 spans bands 4-9." },
                { label: "Is it pass/fail?", value: "No", sub: "NAPLAN is not pass or fail. It reports where your child sits relative to the national average and expected level." },
                { label: "Does it count?", value: "Depends on school", sub: "NAPLAN results can affect support programs and subject selection at some schools. Check with your school." },
                { label: "Can you prepare?", value: "Yes, specifically", sub: "Generic practice helps. Targeted practice on your child's specific gaps helps more. That's what ClassUp does." },
              ].map((fact) => (
                <div key={fact.label} style={{ background: "#F5F2EC", borderRadius: 12, padding: "16px 18px" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{fact.label}</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "#1A1A1A", marginBottom: 4 }}>{fact.value}</div>
                  <div style={{ fontSize: 13, color: "#666", lineHeight: 1.5 }}>{fact.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="cu-card-large" style={{ padding: "32px 40px", marginBottom: 48 }}>
            <div className="cu-eyebrow mb-3">NAPLAN QUESTIONS</div>
            <FAQAccordion items={NAPLAN_FAQ} />
          </div>

          {/* Quick links */}
          <div className="cu-eyebrow mb-4">EXPLORE MORE</div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48 }}>
            {[
              { label: "What NAPLAN results mean", href: "/naplan/proficiency-levels-explained" },
              { label: "Year 5 NAPLAN guide", href: "/naplan-year-5" },
              { label: "Year 7 NAPLAN guide", href: "/naplan-year-7" },
              { label: "Numeracy domain", href: "/naplan-year-5-numeracy" },
              { label: "Reading domain", href: "/naplan-year-5-reading" },
              { label: "Language Conventions", href: "/naplan/language-conventions" },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 18px", background: "#FFF", border: "1px solid #E8E4D8", borderRadius: 12, textDecoration: "none", fontSize: 14, fontWeight: 600, color: "#444" }}>
                {link.label} →
              </Link>
            ))}
          </div>

          {/* Email capture */}
          <div style={{ maxWidth: 700, margin: "0 auto 32px" }}>
            <EmailCapture sourcePage="naplan-hub" />
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", padding: "32px 0 48px" }}>
            <div className="cu-eyebrow mb-4">START FOR FREE</div>
            <h2 className="cu-h2 mb-4">See exactly where your child stands.</h2>
            <p style={{ fontSize: 15, color: "#444", marginBottom: 28 }}>Free diagnostic. No credit card. Honest report.</p>
            <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>
              Start free diagnostic →
            </a>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 767px) {
          .year-grid, .domains-grid, .facts-grid, .not-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageLayout>
  );
}
