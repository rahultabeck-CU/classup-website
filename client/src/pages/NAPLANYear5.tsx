import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { SampleQuestionCard, Breadcrumb, FAQAccordion, InPostCTA, FounderAvatar, EmailCapture } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL, SAMPLE_2, SAMPLE_6, SAMPLE_8 } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// /naplan/year-5 -- Full depth at eval bar
// Worry cards. Founder note. Expanded FAQ. Correct sample mapping.
// ============================================================

const YEAR5_FAQ = [
  {
    question: "When is NAPLAN for Year 5 students?",
    answer: "NAPLAN is held in March each year, typically the second or third week. The exact dates are set by ACARA and published on the NAPLAN website. Schools notify families at least 4 weeks in advance.",
  },
  {
    question: "What score does a Year 5 student need to be 'on track'?",
    answer: "ACARA sets a National Minimum Standard (NMS) for each year level. For Year 5, the NMS is Band 4. Students at or above Band 4 are considered to have met the minimum standard. The national average for Year 5 is typically around Band 6. ClassUp's diagnostic tells you exactly where your child sits.",
  },
  {
    question: "How many questions are in the Year 5 NAPLAN test?",
    answer: "The online adaptive test doesn't have a fixed number of questions -- it adjusts based on your child's responses. The Numeracy test typically runs 45 minutes, Reading 50 minutes, Language Conventions 45 minutes, and Writing 42 minutes.",
  },
  {
    question: "Does the Year 5 NAPLAN result affect high school entry?",
    answer: "Not directly. Year 5 NAPLAN results are used to identify students who may need additional support before high school. Some selective schools may consider Year 5 results as part of their entry process, but this varies by school and state.",
  },
  {
    question: "My child is anxious about NAPLAN. What should I do?",
    answer: "This is the most common thing parents ask us. The honest answer: normalise it. Tell your child that NAPLAN is a snapshot, not a verdict. Tell them the test is designed to help teachers understand what to teach next -- not to rank children. The best preparation is quiet, regular practice that builds confidence, not last-minute cramming that builds anxiety. ClassUp's 30-minute sessions are specifically designed to feel low-stakes.",
  },
  {
    question: "How far in advance should we start preparing?",
    answer: "6 to 8 weeks before the test is the sweet spot for most Year 5 families. That's enough time to close real gaps without burning out. If you start earlier, the sessions are still useful -- the coaching adapts to wherever your child is. Earlier is better than later, but consistent is better than intense.",
  },
  {
    question: "What's the difference between NAPLAN and school tests?",
    answer: "NAPLAN is a national standardised test, which means every child in Australia in Year 3, 5, 7, and 9 sits the same test on the same day. School tests vary by teacher and curriculum. NAPLAN results are reported on a single national scale (Bands 1-10), which makes them comparable across schools and states.",
  },
  {
    question: "Can my child use a calculator in the Year 5 Numeracy test?",
    answer: "No. The Year 5 Numeracy test is non-calculator. Students are expected to work through all questions mentally or with working-out space. ClassUp's numeracy coaching is non-calculator throughout.",
  },
];


const NAPLAN_Y5_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://classup.com.au/" },
      { "@type": "ListItem", "position": 2, "name": "NAPLAN", "item": "https://classup.com.au/naplan" },
      { "@type": "ListItem", "position": 3, "name": "Year 5", "item": "https://classup.com.au/naplan/year-5" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "ClassUp Year 5 NAPLAN Coaching",
    "description": "Adaptive NAPLAN coaching for Year 5 students. Covers Numeracy, Reading, Language Conventions, and Writing. Starts with a free 30-minute diagnostic.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "ClassUp",
      "url": "https://classup.com.au"
    },
    "educationalLevel": "Year 5",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseSchedule": {
        "@type": "Schedule",
        "repeatFrequency": "P1W",
        "repeatCount": 4
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "59",
      "priceCurrency": "AUD",
      "billingIncrement": "P1M"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does NAPLAN Year 5 test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NAPLAN Year 5 tests four domains: Numeracy, Reading, Language Conventions (spelling, grammar, punctuation), and Writing. The test is sat online in May. Results are reported on a 10-band scale; the National Minimum Standard for Year 5 is Band 4."
        }
      },
      {
        "@type": "Question",
        "name": "When is NAPLAN Year 5?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NAPLAN is held in May each year, typically over a two-week window. The exact dates are set by ACARA and published at the start of the school year."
        }
      },
      {
        "@type": "Question",
        "name": "How hard is NAPLAN Year 5 numeracy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Year 5 Numeracy is non-calculator and covers number and algebra, measurement and space, and statistics and probability. The most common gaps are fractions, place value, and multi-step word problems. ClassUp's diagnostic identifies which of these your child is missing."
        }
      },
      {
        "@type": "Question",
        "name": "How can I help my Year 5 child prepare for NAPLAN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most effective preparation is targeted practice on the specific skills your child is missing, not generic question sets. ClassUp starts with a free diagnostic to identify those gaps, then coaches your child on exactly those skills, four sessions per week of 30 minutes each."
        }
      }
    ]
  }
];
export default function NAPLANYear5() {
  return (
    <PageLayout>
      <SEO
        title="NAPLAN Year 5 prep — ClassUp"
        description="Year 5 NAPLAN covers Numeracy, Reading, Language Conventions, and Writing. Here is what is tested, common gaps, and how ClassUp helps your child prepare."
        canonicalPath="/naplan/year-5"
        schemaMarkup={NAPLAN_Y5_SCHEMA}
      />
      <section className="cu-section" style={{ paddingTop: 24 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "NAPLAN", href: "/naplan" }, { label: "Year 5" }]} />

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 48, alignItems: "start", marginBottom: 48 }} className="y5-grid">
            <div>
              <div className="cu-eyebrow mb-4">YEAR 5 NAPLAN GUIDE</div>
              <h1 className="cu-h1 mb-4">
                Year 5 NAPLAN:{" "}
                <em className="cu-italic-accent">what to expect.</em>
              </h1>
              <p className="cu-body-large mb-6">
                Year 5 is the first NAPLAN year where results start to matter for school support programs.
                Here is what is tested, what the scores mean, and how ClassUp helps.
              </p>

              {/* FOUNDER NOTE */}
              <div className="cu-card-large" style={{ padding: "24px 28px", marginBottom: 32, borderLeft: "3px solid #7F77DD" }}>
                <div className="cu-eyebrow mb-3" style={{ color: "#7F77DD" }}>FOUNDER NOTE</div>
                <p style={{ fontSize: 15, fontStyle: "italic", color: "#2A2A2A", lineHeight: 1.8, marginBottom: 16 }}>
                  "Kavya sat Year 5 NAPLAN the year before we built ClassUp. I remember the week before the test.
                  She was anxious. Not because she wasn't prepared, she was. But because she didn't know
                  what to expect. She didn't know what 'Band 6' meant. She didn't know if her school was above
                  or below average. She just knew it was important and she didn't want to let us down.
                </p>
                <p style={{ fontSize: 15, fontStyle: "italic", color: "#2A2A2A", lineHeight: 1.8, marginBottom: 16 }}>
                  That's what this page is for. Not to add pressure. To remove it. If you know what's tested,
                  what the bands mean, and what a realistic preparation looks like, the test becomes manageable.
                  It's still a test. But it's not a mystery."
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <FounderAvatar initial="R" size={36} colour="#1A1A1A" />
                  <div style={{ fontSize: 13, color: "#888" }}>Rahul, co-founder. Kavya's dad</div>
                </div>
              </div>

              <h2 className="cu-h2-card mb-3">What's tested in Year 5</h2>
              <p className="cu-body-card mb-4">
                Year 5 NAPLAN covers four domains: Numeracy, Reading, Language Conventions (Spelling, Grammar,
                and Punctuation), and Writing. The online test is adaptive, questions get harder or easier
                based on your child's responses. This means two children in the same class may see very different
                questions, and that is by design.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {[
                  { domain: "Numeracy", content: "Number and algebra, measurement and geometry, statistics and probability. Year 5 focus: place value, fractions, area and perimeter, data interpretation. Non-calculator throughout.", color: "#EEEDFE", textColor: "#534AB7" },
                  { domain: "Reading", content: "Narrative texts (stories), informational texts (reports, explanations), and persuasive texts. Year 5 focus: locating information, making inferences, identifying the author's purpose.", color: "#EAF3DE", textColor: "#4A7515" },
                  { domain: "Language Conventions", content: "Spelling (including audio dictation), grammar, and punctuation. Year 5 focus: common spelling patterns, sentence structure, punctuation in complex sentences.", color: "#FAEEDA", textColor: "#B36B0A" },
                  { domain: "Writing", content: "One extended piece -- persuasive or narrative. Year 5 focus: clear structure, vocabulary, and meeting the prompt requirements. 42 minutes. No word limit.", color: "#F5F2EC", textColor: "#444" },
                ].map((item) => (
                  <div key={item.domain} style={{ background: item.color, borderRadius: 14, padding: "18px 20px" }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#1A1A1A", marginBottom: 6 }}>{item.domain}</div>
                    <p style={{ fontSize: 13, color: item.textColor, lineHeight: 1.65, margin: 0 }}>{item.content}</p>
                  </div>
                ))}
              </div>

              <InPostCTA />

              {/* WORRY CARDS */}
              <div className="cu-eyebrow mb-3" style={{ marginTop: 32 }}>WHAT PARENTS WORRY ABOUT</div>
              <h2 className="cu-h2-card mb-4">The three things we hear most.</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
                {[
                  {
                    worry: "\"My child is smart but freezes in tests.\"",
                    response: "This is the most common thing we hear. The freeze usually comes from unfamiliarity, not inability. When a child has seen 200 questions in the same format as NAPLAN, the test format stops being a source of anxiety. ClassUp's questions are formatted exactly like NAPLAN. The goal is to make the real test feel like Tuesday's practice session.",
                    color: "#EEEDFE",
                    textColor: "#26215C",
                  },
                  {
                    worry: "\"We don't have time for tutoring.\"",
                    response: "ClassUp is designed for 30 minutes after school. Not 90-minute sessions. Not weekend commitments. 30 minutes, four times a week, for 6-8 weeks. That's the target. If you miss a day, the coach picks up where you left off. There's no 'falling behind' the schedule because there is no schedule.",
                    color: "#EAF3DE",
                    textColor: "#2A3A1A",
                  },
                  {
                    worry: "\"I don't know what my child actually needs.\"",
                    response: "That's exactly what the free diagnostic is for. It takes about 30 minutes, covers all four domains, and tells you specifically which skills your child is missing. Not 'weak in numeracy' -- 'missing place value in 4-digit numbers and fraction comparison.' That specificity is what makes the coaching useful.",
                    color: "#FAEEDA",
                    textColor: "#7A4A00",
                  },
                ].map((item) => (
                  <div key={item.worry} style={{ background: item.color, borderRadius: 16, padding: "20px 24px" }}>
                    <div style={{ fontSize: 15, fontWeight: 800, color: "#1A1A1A", marginBottom: 10, fontStyle: "italic" }}>{item.worry}</div>
                    <p style={{ fontSize: 14, color: item.textColor, lineHeight: 1.7, margin: 0 }}>{item.response}</p>
                  </div>
                ))}
              </div>

              <h2 className="cu-h2-card mb-3">What the bands mean for Year 5</h2>
              <p className="cu-body-card mb-4">
                NAPLAN results are reported on a scale of Bands 1 to 10. For Year 5, the National Minimum
                Standard is Band 4. The national average is typically around Band 6. A result in Band 7 or
                above indicates strong performance. Bands 9 and 10 are exceptional.
              </p>
              <p className="cu-body-card mb-4">
                One important note: the bands are not grades. A Band 5 is not a C. The bands describe a
                child's position on a national scale, not their performance relative to their class. A child
                in a high-performing school might be Band 7 and still be below their class average. The
                diagnostic tells you both.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 32 }} className="bands-grid">
                {[
                  { band: "Band 1-3", label: "Below minimum standard", color: "#FAEEDA", textColor: "#B36B0A" },
                  { band: "Band 4", label: "National Minimum Standard", color: "#F5F2EC", textColor: "#444" },
                  { band: "Band 5-6", label: "At or above national average", color: "#EAF3DE", textColor: "#4A7515" },
                  { band: "Band 7-8", label: "Strong performance", color: "#EEEDFE", textColor: "#534AB7" },
                  { band: "Band 9-10", label: "Exceptional performance", color: "#1A1A1A", textColor: "#FFF" },
                ].map((b) => (
                  <div key={b.band} style={{ background: b.color, borderRadius: 10, padding: "12px 14px" }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: b.textColor }}>{b.band}</div>
                    <div style={{ fontSize: 12, color: b.textColor, opacity: 0.8 }}>{b.label}</div>
                  </div>
                ))}
              </div>

              <h2 className="cu-h2-card mb-3">How ClassUp helps Year 5 students</h2>
              <p className="cu-body-card mb-4">
                ClassUp's free diagnostic identifies exactly which skills your Year 5 child is missing:
                not just which domain, but which specific skill within that domain. Then the coaching adapts
                every session to work on those exact gaps.
              </p>
              <p className="cu-body-card mb-4">
                Most families start 6-8 weeks before NAPLAN. But the coaching is designed to be useful
                year-round, the earlier you start, the more gaps you can close before March. A child
                who starts in Term 1 and does 30 minutes four times a week will have seen approximately
                500 questions before the test. That is not drilling. That is fluency.
              </p>
              <p className="cu-body-card mb-6">
                The coach, Luna or Leo, your child's choice, remembers every question your
                child has answered. Every mistake. Every skill that needed a second pass. The session on
                Wednesday starts from where Tuesday ended. There is no reset. There is no starting over.
                There is only forward.
              </p>

              {/* FAQ */}
              <div className="cu-card-large" style={{ padding: "28px 32px", marginBottom: 32 }}>
                <div className="cu-eyebrow mb-3">YEAR 5 QUESTIONS</div>
                <FAQAccordion items={YEAR5_FAQ} />
              </div>
            </div>

            {/* Right sidebar */}
            <div style={{ position: "sticky", top: 100 }}>
              <div className="cu-card-large" style={{ padding: 24, marginBottom: 20 }}>
                <div className="cu-eyebrow mb-3">QUICK LINKS</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <Link href="/naplan/numeracy" style={sidebarLinkStyle}>Numeracy domain →</Link>
                  <Link href="/naplan/reading" style={sidebarLinkStyle}>Reading domain →</Link>
                  <Link href="/naplan/language-conventions" style={sidebarLinkStyle}>Language Conventions →</Link>
                  <Link href="/naplan/writing" style={sidebarLinkStyle}>Writing domain →</Link>
                  <Link href="/naplan/bands-explained" style={sidebarLinkStyle}>Bands explained →</Link>
                  <Link href="/naplan/year-7" style={sidebarLinkStyle}>Year 7 guide →</Link>
                </div>
              </div>
              <div style={{ background: "#EEEDFE", borderRadius: 20, padding: 24, marginBottom: 20 }}>
                <div className="cu-eyebrow mb-3" style={{ color: "#7F77DD" }}>FREE DIAGNOSTIC</div>
                <p style={{ fontSize: 14, color: "#26215C", lineHeight: 1.6, marginBottom: 16 }}>
                  See exactly where your Year 5 child stands. Free. No credit card.
                </p>
                <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                  Start free diagnostic →
                </a>
              </div>
              <div style={{ background: "#F5F2EC", borderRadius: 20, padding: 24 }}>
                <div className="cu-eyebrow mb-3">TYPICAL WEEK</div>
                <p style={{ fontSize: 13, color: "#444", lineHeight: 1.65, marginBottom: 12 }}>
                  What a preparation week looks like for most Year 5 families:
                </p>
                {[
                  { day: "Mon", task: "30 min session with Luna or Leo" },
                  { day: "Tue", task: "30 min session (coach picks up from Mon)" },
                  { day: "Wed", task: "30 min session (different domain)" },
                  { day: "Thu", task: "30 min session + parent report preview" },
                  { day: "Fri", task: "Parent report arrives by email" },
                  { day: "Weekend", task: "Optional: catch-up session if any day was missed" },
                ].map((item) => (
                  <div key={item.day} style={{ display: "flex", gap: 10, marginBottom: 8, alignItems: "flex-start" }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: "#7F77DD", background: "#EEEDFE", borderRadius: 6, padding: "2px 7px", flexShrink: 0, marginTop: 2 }}>{item.day}</div>
                    <div style={{ fontSize: 13, color: "#444", lineHeight: 1.5 }}>{item.task}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sample questions */}
          <div style={{ marginBottom: 48 }}>
            <div className="cu-eyebrow mb-3" style={{ textAlign: "center" }}>SAMPLE YEAR 5 QUESTIONS</div>
            <h2 className="cu-h2 mb-6" style={{ textAlign: "center" }}>Questions from our Year 5 bank.</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }} className="samples-grid">
              <SampleQuestionCard sample={SAMPLE_2} />
              <SampleQuestionCard sample={SAMPLE_6} />
              <SampleQuestionCard sample={SAMPLE_8} />
            </div>
          </div>

          {/* Related Reading */}
          <div style={{ maxWidth: 860, margin: "0 auto 48px" }}>
            <div className="cu-eyebrow mb-3" style={{ textAlign: "center" }}>RELATED READING</div>
            <h2 className="cu-h2 mb-6" style={{ textAlign: "center" }}>From the ClassUp blog.</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="y5-grid">
              <Link href="/blog/year-5-maths-struggles-term-2" style={{ textDecoration: "none" }}>
                <div className="cu-card-large" style={{ padding: "24px 28px", cursor: "pointer", height: "100%" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "none")}>
                  <span style={{ background: "#EAF3DE", color: "#4A7515", fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 999, display: "inline-block", marginBottom: 12 }}>Learning</span>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, fontWeight: 800, color: "#1A1A1A", marginBottom: 8, lineHeight: 1.3 }}>Year 5 maths struggles in Term 2: what to look out for</h3>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, margin: 0 }}>Fractions, decimals, and multi-step problems arrive fast. Here is what the curriculum introduces and what parents can do.</p>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#7F77DD", marginTop: 14 }}>Read →</div>
                </div>
              </Link>
              <Link href="/blog/help-child-catch-up-reading" style={{ textDecoration: "none" }}>
                <div className="cu-card-large" style={{ padding: "24px 28px", cursor: "pointer", height: "100%" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "none")}>
                  <span style={{ background: "#EAF3DE", color: "#4A7515", fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 999, display: "inline-block", marginBottom: 12 }}>Learning</span>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, fontWeight: 800, color: "#1A1A1A", marginBottom: 8, lineHeight: 1.3 }}>How to help your child catch up in reading without the battle</h3>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, margin: 0 }}>Comprehension strategies for 10 to 12 year olds that work at home without conflict.</p>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#7F77DD", marginTop: 14 }}>Read →</div>
                </div>
              </Link>
            </div>
          </div>
          {/* Email capture */}
          <div style={{ maxWidth: 700, margin: "0 auto 48px" }}>
            <EmailCapture sourcePage="naplan-year-5" />
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 767px) {
          .y5-grid { grid-template-columns: 1fr !important; }
          .bands-grid { grid-template-columns: 1fr 1fr !important; }
          .samples-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </PageLayout>
  );
}

const sidebarLinkStyle: React.CSSProperties = {
  display: "block",
  padding: "10px 14px",
  background: "#F5F2EC",
  borderRadius: 10,
  fontSize: 14,
  fontWeight: 600,
  color: "#444",
  textDecoration: "none",
};
