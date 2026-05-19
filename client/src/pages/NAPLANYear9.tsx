import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { SampleQuestionCard, Breadcrumb, FAQAccordion, InPostCTA, FounderAvatar, EmailCapture } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL, SAMPLE_4 } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// /naplan/year-9 -- Full depth at eval bar
// Year 9 is the final NAPLAN test: highest stakes, final checkpoint
// Worry cards. Founder note. Typical week sidebar. Expanded FAQ.
// ============================================================

const YEAR9_FAQ = [
  {
    question: "Is Year 9 NAPLAN the last NAPLAN test?",
    answer: "Yes. Year 9 is the final NAPLAN test in Australia. After Year 9, students move into VCE (Victoria), HSC (NSW), ATAR (WA/SA), or equivalent senior secondary systems. Year 9 NAPLAN is your last formal benchmark before high school specialisation begins.",
  },
  {
    question: "Do Year 9 NAPLAN results affect university entry?",
    answer: "Not directly. NAPLAN results are not used for university entry. However, Year 9 NAPLAN performance often predicts performance in senior secondary exams (VCE, HSC, ATAR), which do affect university entry. Strong Year 9 results give you confidence that your child is on track for senior secondary success.",
  },
  {
    question: "How is Year 9 NAPLAN different from Year 7?",
    answer: "Year 9 NAPLAN is the hardest NAPLAN test. The numeracy section includes advanced algebra, trigonometry, and data analysis. The reading texts are longer and more sophisticated. The writing task expects mature argument development and sophisticated vocabulary. The language conventions section tests complex grammatical structures and etymology at a deeper level.",
  },
  {
    question: "What's the national average for Year 9?",
    answer: "The national average for Year 9 is typically around Band 8. The National Minimum Standard for Year 9 is Band 6. ClassUp's diagnostic tells you exactly where your child sits relative to both benchmarks and what gaps exist before the test.",
  },
  {
    question: "My Year 9 child is anxious about NAPLAN. How do I help?",
    answer: "Anxiety at Year 9 is normal — it's the final checkpoint. The best antidote is clarity. ClassUp's diagnostic removes the guesswork: your child sees exactly what they're good at and what needs work. Focused practice on real gaps builds confidence faster than generic test prep. Knowing they're working on *their* gaps, not random questions, reduces anxiety significantly.",
  },
  {
    question: "How long does Year 9 NAPLAN preparation take?",
    answer: "That depends on your child's gaps. ClassUp's diagnostic identifies the specific skills that need work. Some Year 9 students have 2-3 targeted gaps that can be closed in 6-8 weeks of consistent practice. Others benefit from a full term of coaching. The diagnostic tells you which situation you're in and gives you a realistic timeline.",
  },
  {
    question: "What are the most common gaps in Year 9 Numeracy?",
    answer: "In our beta cohort, the most common Year 9 numeracy gaps are: algebraic manipulation and solving equations, trigonometry (sine, cosine, tangent), probability and combinatorics, and interpreting statistical data. These are all skills that were introduced in Year 7-8 and are assumed knowledge in Year 9. ClassUp's diagnostic identifies which of these your child is missing.",
  },
  {
    question: "Can my child use a calculator in Year 9 NAPLAN?",
    answer: "The Year 9 Numeracy test is split into two sections: one non-calculator (about 40 minutes) and one with a calculator (about 40 minutes). This is different from Year 5 and Year 7, which are fully non-calculator. ClassUp's numeracy coaching covers both calculator and non-calculator strategies.",
  },
  {
    question: "What's the difference between Band 8 and Band 9?",
    answer: "Both are above the national average and above the National Minimum Standard. Band 9 is the highest band. The difference is in the complexity and multi-step nature of questions a student can answer correctly. Band 9 students can reliably handle complex multi-step problems, sophisticated inference questions, and advanced grammatical analysis. Band 8 students are solid on most content but may struggle with the most challenging questions.",
  },
  {
    question: "Should my Year 9 child focus on NAPLAN or their school subjects?",
    answer: "NAPLAN is a 3-hour test. Your child's school subjects are ongoing. The good news: the skills that show up in NAPLAN are the same skills they need for their school subjects. ClassUp's coaching targets the exact gaps that matter for both. Four 30-minute sessions per week is enough to close gaps without derailing school work.",
  },
];

const NAPLAN_Y9_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://classup.com.au/" },
      { "@type": "ListItem", "position": 2, "name": "NAPLAN", "item": "https://classup.com.au/naplan" },
      { "@type": "ListItem", "position": 3, "name": "Year 9", "item": "https://classup.com.au/naplan/year-9" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "ClassUp Year 9 NAPLAN Coaching",
    "description": "Adaptive NAPLAN coaching for Year 9 students. Covers Numeracy, Reading, Language Conventions, and Writing. Starts with a free 30-minute diagnostic. Year 9 is the final NAPLAN test.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "ClassUp",
      "url": "https://classup.com.au"
    },
    "educationalLevel": "Year 9",
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
        "name": "What does NAPLAN Year 9 test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NAPLAN Year 9 tests the same four domains as Year 5 and Year 7 (Numeracy, Reading, Language Conventions, Writing) but at the highest difficulty level. Year 9 is the final NAPLAN test. The National Minimum Standard for Year 9 is Band 6. Year 9 results are a final benchmark before senior secondary specialisation."
        }
      },
      {
        "@type": "Question",
        "name": "Is Year 9 NAPLAN harder than Year 7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Year 9 NAPLAN is the hardest NAPLAN test. The numeracy section includes advanced algebra, trigonometry, and data analysis. The reading passages are longer and more sophisticated. The writing task expects mature argument development. The language conventions section tests complex grammatical structures at a deeper level."
        }
      },
      {
        "@type": "Question",
        "name": "How can I help my Year 9 child prepare for NAPLAN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Start with a diagnostic to identify the specific skills your child is missing. ClassUp's free diagnostic covers Numeracy, Reading, and Language Conventions and takes approximately 30 minutes. After the diagnostic, Luna or Leo (ClassUp's Year 9 coaches) work on those exact gaps, four sessions per week."
        }
      },
      {
        "@type": "Question",
        "name": "When is Year 9 NAPLAN held?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Year 9 NAPLAN is held in May each year across Australia. Check your school's specific dates. Most schools test in the second or third week of May. ClassUp recommends starting preparation 8-10 weeks before the test date."
        }
      }
    ]
  }
];

export default function NAPLANYear9() {
  return (
    <PageLayout>
      <SEO
        title="NAPLAN Year 9 prep — ClassUp"
        description="Year 9 NAPLAN is the final NAPLAN test and your last formal benchmark before senior secondary. Here is what is tested and how to prepare."
        canonicalPath="/naplan/year-9"
        schemaMarkup={NAPLAN_Y9_SCHEMA}
      />
      <section className="cu-section" style={{ paddingTop: 24 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "NAPLAN", href: "/naplan" }, { label: "Year 9" }]} />

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 48, alignItems: "start", marginBottom: 48 }} className="y9-grid">
            <div>
              <div className="cu-eyebrow mb-4">YEAR 9 NAPLAN GUIDE</div>
              <h1 className="cu-h1 mb-4">
                Year 9 NAPLAN:{" "}
                <em className="cu-italic-accent">the final checkpoint.</em>
              </h1>
              <p className="cu-body-large mb-6">
                Year 9 is the last NAPLAN test. It's also the hardest. The content is more complex, the stakes are higher, and this is your final formal benchmark before senior secondary specialisation begins. Here is what you need to know.
              </p>

              {/* FOUNDER NOTE */}
              <div className="cu-card-large" style={{ padding: "24px 28px", marginBottom: 32, borderLeft: "3px solid #7F77DD" }}>
                <div className="cu-eyebrow mb-3" style={{ color: "#7F77DD" }}>FOUNDER NOTE</div>
                <p style={{ fontSize: 15, fontStyle: "italic", color: "#2A2A2A", lineHeight: 1.8, marginBottom: 16 }}>
                  "Year 9 is different. It's the last one. Parents start asking: 'Is my child on track for senior secondary?' Teachers are thinking about streaming and subject selection. Students feel the weight of it — this is the final checkpoint before things get real.
                </p>
                <p style={{ fontSize: 15, fontStyle: "italic", color: "#2A2A2A", lineHeight: 1.8, marginBottom: 16 }}>
                  That's exactly why the diagnostic matters. You don't want to guess about your child's readiness. You want to know. And if there are gaps, you want to close them now, not in Year 10 when they're juggling five subjects and trying to figure out which ones they want to specialise in.
                </p>
                <p style={{ fontSize: 15, fontStyle: "italic", color: "#2A2A2A", lineHeight: 1.8, marginBottom: 16 }}>
                  Year 9 NAPLAN is a 3-hour test. The gaps it reveals are the gaps that matter for the next three years. ClassUp finds them, names them, and closes them. That's what we built this for."
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", overflow: "hidden", flexShrink: 0, background: "#E8E4F8" }}>
                    <img src="https://d36hbw14aib5lz.cloudfront.net/310519663609833835/REXxUTrQVxgfiFBcKDxW3x/rahul-photo_ae6ad241.png" alt="Rahul" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
                  </div>
                  <div style={{ fontSize: 13, color: "#888" }}>Rahul, Founder & CEO</div>
                </div>
              </div>

              <h2 className="cu-h2-card mb-3">What's different in Year 9</h2>
              <p className="cu-body-card mb-4">
                Year 9 NAPLAN covers the same four domains as Year 5 and Year 7, but the difficulty is significantly higher. This is the final NAPLAN test. Here is what changes in each domain:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {[
                  { domain: "Numeracy", content: "Advanced algebra (solving equations, expanding brackets), trigonometry (sine, cosine, tangent), probability, combinatorics, and data analysis. Year 9 focus: algebraic reasoning, trigonometric problem-solving, and statistical interpretation. Split test: non-calculator (40 min) + calculator (40 min).", color: "#EEEDFE", textColor: "#534AB7" },
                  { domain: "Reading", content: "Longer, more sophisticated texts. Complex inferential and analytical questions. Year 9 focus: identifying implicit meaning in complex texts, analysing author's choices and intent, evaluating arguments in persuasive and analytical texts, and synthesising information across multiple sources.", color: "#EAF3DE", textColor: "#4A7515" },
                  { domain: "Language Conventions", content: "Complex spelling patterns (etymology, morphology, Latin and Greek roots), advanced grammar (complex clauses, modifiers, voice), and punctuation in sophisticated sentences. Year 9 focus: French and Latin-origin words, complex sentence structures, and stylistic choices.", color: "#FAEEDA", textColor: "#B36B0A" },
                  { domain: "Writing", content: "Same format as Year 5 and Year 7, but marking criteria are stricter. Year 9 focus: sophisticated vocabulary, complex sentence structures, clear argument development, and mature tone in 42 minutes.", color: "#F5F2EC", textColor: "#444" },
                ].map((item) => (
                  <div key={item.domain} style={{ padding: "20px 24px", borderRadius: 12, backgroundColor: item.color }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: item.textColor, marginBottom: 8 }}>{item.domain}</div>
                    <div style={{ fontSize: 13, color: item.textColor, lineHeight: 1.6 }}>{item.content}</div>
                  </div>
                ))}
              </div>

              {/* WORRY CARDS */}
              <h2 className="cu-h2-card mb-3">What parents worry about (and what actually matters)</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {[
                  {
                    worry: "Year 9 is the final test. If my child doesn't do well, is it too late?",
                    answer: "Year 9 NAPLAN is a snapshot, not a prediction. A lower Year 9 result tells you your child has gaps that need closing before senior secondary. That's useful information. ClassUp's diagnostic identifies those gaps. Four weeks of focused coaching closes most of them. It's not too late — it's exactly the right time to know.",
                  },
                  {
                    worry: "My child is strong in Year 8 but anxious about Year 9. Is that normal?",
                    answer: "Yes. Year 9 anxiety is normal — it's the final checkpoint. The best antidote is clarity. ClassUp's diagnostic removes the guesswork. Your child sees exactly what they're good at and what needs work. Focused practice on real gaps builds confidence faster than generic test prep.",
                  },
                  {
                    worry: "My Year 9 child is juggling school subjects and extracurriculars. Is there time for NAPLAN prep?",
                    answer: "Yes. ClassUp is four 30-minute sessions per week. That's 2 hours per week. It's less time than most extracurriculars. And because the coaching targets your child's exact gaps, the practice is efficient — no wasted time on things they already know.",
                  },
                ].map((item, idx) => (
                  <div key={idx} style={{ padding: "20px 24px", borderRadius: 12, backgroundColor: "#F5F2EC", borderLeft: "3px solid #7F77DD" }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#1A1A1A", marginBottom: 8 }}>{item.worry}</div>
                    <div style={{ fontSize: 13, color: "#5C5750", lineHeight: 1.6 }}>{item.answer}</div>
                  </div>
                ))}
              </div>

              {/* SAMPLE QUESTION */}
              <h2 className="cu-h2-card mb-3">Sample Year 9 Question</h2>
              <p className="cu-body-card mb-4">
                Here is a real Year 9 NAPLAN numeracy question. This is the level of reasoning expected in the test.
              </p>
              <SampleQuestionCard question={SAMPLE_4} />

              {/* FAQ */}
              <h2 className="cu-h2-card mb-3" style={{ marginTop: 48 }}>
                Frequently asked questions
              </h2>
              <FAQAccordion items={YEAR9_FAQ} defaultOpenIndexes={[0, 4]} />

              {/* FINAL CTA */}
              <InPostCTA
                headline="Ready to see where your Year 9 child actually stands?"
                subheadline="Start with a free 30-minute diagnostic. No credit card required."
                ctaText="Start Free Diagnostic"
                ctaHref={DIAGNOSTIC_URL}
              />
            </div>

            {/* SIDEBAR */}
            <div>
              <div className="cu-card-large" style={{ padding: "24px 28px", marginBottom: 24, position: "sticky", top: 100 }}>
                <div className="cu-eyebrow mb-3">A TYPICAL WEEK</div>
                <div style={{ fontSize: 13, color: "#5C5750", lineHeight: 1.8 }}>
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontWeight: 700, color: "#1A1A1A" }}>Monday</div>
                    <div>15-min session (Numeracy)</div>
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontWeight: 700, color: "#1A1A1A" }}>Tuesday</div>
                    <div>15-min session (Reading)</div>
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontWeight: 700, color: "#1A1A1A" }}>Wednesday</div>
                    <div>Rest day</div>
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontWeight: 700, color: "#1A1A1A" }}>Thursday</div>
                    <div>15-min session (Language Conventions)</div>
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontWeight: 700, color: "#1A1A1A" }}>Friday</div>
                    <div>Parent report + progress summary</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: "#1A1A1A" }}>Sat / Sun</div>
                    <div>Free</div>
                  </div>
                </div>
              </div>

              <div className="cu-card-large" style={{ padding: "24px 28px", backgroundColor: "#EAF3DE" }}>
                <div className="cu-eyebrow mb-3" style={{ color: "#4A7515" }}>KEY DATES</div>
                <div style={{ fontSize: 13, color: "#4A7515", lineHeight: 1.8 }}>
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontWeight: 700 }}>NAPLAN Test</div>
                    <div>May (typically week 2–3)</div>
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    <div style={{ fontWeight: 700 }}>Results Released</div>
                    <div>August–September</div>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700 }}>Recommended Start</div>
                    <div>8–10 weeks before test</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <EmailCapture
        headline="Year 9 NAPLAN prep checklist"
        subheadline="Get a free checklist of what to focus on in the final weeks before the test."
      />
    </PageLayout>
  );
}
