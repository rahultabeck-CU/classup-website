import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { SampleQuestionCard, Breadcrumb, FAQAccordion, InPostCTA, FounderAvatar, EmailCapture } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL, SAMPLE_3, SAMPLE_7, SAMPLE_9 } from "@/lib/classup";
import { SEO } from "@/components/SEO";
import { ORGANIZATION_REF } from "@/lib/schema";

// ============================================================
// /naplan/year-7 -- Full depth at eval bar
// Worry cards. Founder note. Typical week sidebar. Expanded FAQ.
// ============================================================

const YEAR7_FAQ = [
  {
    question: "Does Year 7 NAPLAN affect high school subject selection?",
    answer: "It depends on the school and state. Some schools use Year 7 NAPLAN results to inform subject selection, extension programs, or additional support. Check with your school directly. What we can say: knowing where your child's gaps are -- before results come back -- is always useful.",
  },
  {
    question: "Is Year 7 NAPLAN harder than Year 5?",
    answer: "Yes. The content is more complex, the texts are longer, and the algebra and data questions require more multi-step reasoning. The adaptive online format means the difficulty adjusts to your child's responses, but the ceiling is higher in Year 7.",
  },
  {
    question: "What's the national average for Year 7?",
    answer: "The national average for Year 7 is typically around Band 7-8. The National Minimum Standard for Year 7 is Band 5. ClassUp's diagnostic tells you exactly where your child sits relative to both benchmarks.",
  },
  {
    question: "How long does Year 7 NAPLAN preparation take?",
    answer: "That depends on your child's gaps. ClassUp's diagnostic identifies the specific skills that need work. Some children have 2-3 targeted gaps that can be closed in 4-6 weeks of consistent practice. Others have broader gaps that benefit from a full term of coaching. The diagnostic tells you which situation you're in.",
  },
  {
    question: "My Year 7 child says NAPLAN doesn't matter. How do I motivate them?",
    answer: "Don't fight that battle. Instead, reframe it: NAPLAN is a 30-minute diagnostic that tells you and your child exactly what they're good at and what they're not. That information is useful regardless of whether the test 'matters.' ClassUp's sessions are 30 minutes. If your child will do 30 minutes four times a week, the preparation happens without the argument.",
  },
  {
    question: "What are the most common gaps in Year 7 Numeracy?",
    answer: "In our beta cohort, the most common Year 7 numeracy gaps are: algebraic order of operations (BODMAS/PEMDAS), negative number operations, ratio and proportion, and reading data from graphs and tables. These are all skills that were introduced in Year 5-6 and are assumed knowledge in Year 7. ClassUp's diagnostic identifies which of these your child is missing.",
  },
  {
    question: "Can my child use a calculator in Year 7 NAPLAN?",
    answer: "No. The Year 7 Numeracy test is non-calculator. This surprises many Year 7 students who have been using calculators in class. ClassUp's numeracy coaching is non-calculator throughout.",
  },
  {
    question: "What's the difference between Band 7 and Band 8?",
    answer: "Both are above the national average and above the National Minimum Standard. The difference is in the complexity of questions a child can answer correctly. Band 8 students can reliably handle multi-step problems, complex inference questions, and etymology-based spelling. Band 7 students are solid on the core content but may struggle with the hardest questions in each domain.",
  },
];


const NAPLAN_Y7_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://classup.com.au/" },
      { "@type": "ListItem", "position": 2, "name": "NAPLAN", "item": "https://classup.com.au/naplan" },
      { "@type": "ListItem", "position": 3, "name": "Year 7", "item": "https://classup.com.au/naplan/year-7" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "ClassUp Year 7 NAPLAN Coaching",
    "description": "Adaptive NAPLAN coaching for Year 7 students. Covers Numeracy, Reading, Language Conventions, and Writing. Starts with a free 30-minute diagnostic.",
    "provider": ORGANIZATION_REF,
    "educationalLevel": "Year 7",
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
        "name": "What does NAPLAN Year 7 test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NAPLAN Year 7 tests the same four domains as Year 5 (Numeracy, Reading, Language Conventions, Writing) but at a higher difficulty level. The National Minimum Standard for Year 7 is Band 5. Year 7 results can be used as part of selective school and scholarship applications."
        }
      },
      {
        "@type": "Question",
        "name": "Do Year 7 NAPLAN results affect high school placement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NAPLAN results are not used for general high school placement. However, selective public schools and some private schools use NAPLAN results as one component of their entry assessment. Results can also affect scholarship applications."
        }
      },
      {
        "@type": "Question",
        "name": "How is Year 7 NAPLAN different from Year 5?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Year 7 NAPLAN is harder than Year 5 across all four domains. The numeracy section introduces more complex algebra and geometry. The reading passages are longer and more complex. The writing task expects more sophisticated text structure and vocabulary."
        }
      },
      {
        "@type": "Question",
        "name": "How can I help my Year 7 child prepare for NAPLAN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Start with a diagnostic to identify the specific skills your child is missing. ClassUp's free diagnostic covers Numeracy, Reading, and Language Conventions and takes approximately 30 minutes. After the diagnostic, Leo (ClassUp's Year 7 coach) works on those exact gaps, four sessions per week."
        }
      }
    ]
  }
];
export default function NAPLANYear7() {
  return (
    <PageLayout>
      <SEO
        title="NAPLAN Year 7 prep — ClassUp"
        description="Year 7 NAPLAN is the first test where results can affect selective school and scholarship applications. Here is what is tested and how to prepare."
        canonicalPath="/naplan/year-7"
        schemaMarkup={NAPLAN_Y7_SCHEMA}
      />
      <section className="cu-section" style={{ paddingTop: 24 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "NAPLAN", href: "/naplan" }, { label: "Year 7" }]} />

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 48, alignItems: "start", marginBottom: 48 }} className="y7-grid">
            <div>
              <div className="cu-eyebrow mb-4">YEAR 7 NAPLAN GUIDE</div>
              <h1 className="cu-h1 mb-4">
                Year 7 NAPLAN:{" "}
                <em className="cu-italic-accent">what's different.</em>
              </h1>
              <p className="cu-body-large mb-6">
                Year 7 is the first NAPLAN year in high school. The content is more complex, the stakes are
                higher, and the gaps from primary school become more visible. Here is what you need to know.
              </p>

              {/* FOUNDER NOTE */}
              <div className="cu-card-large" style={{ padding: "24px 28px", marginBottom: 32, borderLeft: "3px solid #7F77DD" }}>
                <div className="cu-eyebrow mb-3" style={{ color: "#7F77DD" }}>FOUNDER NOTE</div>
                <p style={{ fontSize: 15, fontStyle: "italic", color: "#2A2A2A", lineHeight: 1.8, marginBottom: 16 }}>
                  "Year 7 hits different. The work in Year 5 was hard sometimes, but it made sense. In Year 7
                  the questions assume you remember everything from Year 5 and then add a layer on top.
                  Like, fractions were already confusing, and now they want me to do ratios with them?
                </p>
                <p style={{ fontSize: 15, fontStyle: "italic", color: "#2A2A2A", lineHeight: 1.8, marginBottom: 16 }}>
                  The thing that actually helped was when the coach showed me exactly where I went wrong.
                  Not just 'incorrect.' Like, 'you did the addition before the multiplication, here's why
                  that changes the answer.' Once I saw the actual mistake it made sense. I just needed
                  someone to name it properly."
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", overflow: "hidden", flexShrink: 0, background: "#E8E4F8" }}>
                    <img src="https://d36hbw14aib5lz.cloudfront.net/310519663609833835/REXxUTrQVxgfiFBcKDxW3x/kavya-photo_ae6ad241.png" alt="Kavya" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
                  </div>
                  <div style={{ fontSize: 13, color: "#888" }}>Kavya, age 12, Year 7 student</div>
                </div>
              </div>

              <h2 className="cu-h2-card mb-3">What's different in Year 7</h2>
              <p className="cu-body-card mb-4">
                Year 7 NAPLAN covers the same four domains as Year 5, but the difficulty is significantly higher.
                The adaptive online format means the difficulty adjusts to your child's responses, but the ceiling
                is higher in Year 7. Here is what changes in each domain:
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {[
                  { domain: "Numeracy", content: "Multi-step algebra, negative numbers, ratios, percentages, coordinate geometry, and probability. Year 7 focus: algebraic reasoning, proportional thinking, and data analysis. Non-calculator throughout.", color: "#EEEDFE", textColor: "#534AB7" },
                  { domain: "Reading", content: "Longer, more complex texts. More inferential and analytical questions. Year 7 focus: identifying implicit meaning, analysing author's choices, and evaluating arguments in persuasive texts.", color: "#EAF3DE", textColor: "#4A7515" },
                  { domain: "Language Conventions", content: "More complex spelling patterns (etymology, morphology), advanced grammar (clauses, modifiers), and punctuation in complex sentences. Year 7 focus: French and Latin-origin words, complex sentence structures.", color: "#FAEEDA", textColor: "#B36B0A" },
                  { domain: "Writing", content: "Same format as Year 5, but marking criteria are stricter. Year 7 focus: sophisticated vocabulary, complex sentence structures, and clear argument development in 42 minutes.", color: "#F5F2EC", textColor: "#444" },
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
              <h2 className="cu-h2-card mb-4">The three things we hear most from Year 7 families.</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
                {[
                  {
                    worry: "\"My child did fine in Year 5. Why is Year 7 harder?\"",
                    response: "Because the content assumes everything from Year 5 is solid. Year 7 Numeracy doesn't re-teach fractions -- it uses fractions to teach ratios. Year 7 Reading doesn't re-teach how to find information -- it expects children to analyse and evaluate. The jump is real. The diagnostic tells you exactly where the floor has dropped.",
                    color: "#EEEDFE",
                    textColor: "#26215C",
                  },
                  {
                    worry: "\"My child is in Year 7 and says they're too busy.\"",
                    response: "30 minutes. That's the session length. We designed ClassUp specifically for secondary students who have homework, sport, and social commitments. The coach picks up where the last session ended. There's no 'catching up.' There's no schedule to fall behind on. Just 30 minutes, whenever it fits.",
                    color: "#EAF3DE",
                    textColor: "#2A3A1A",
                  },
                  {
                    worry: "\"We don't know if the Year 7 result will affect anything.\"",
                    response: "It depends on the school. Some schools use Year 7 NAPLAN results for subject selection or extension programs. Some don't. What we know for certain: the skills tested in Year 7 NAPLAN -- algebraic reasoning, reading comprehension, spelling -- are the same skills that determine performance in Year 8, 9, and 10. The test is a proxy for those skills. Improving those skills is always worth doing.",
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

              <h2 className="cu-h2-card mb-3">The gaps that show up in Year 7</h2>
              <p className="cu-body-card mb-4">
                Year 7 NAPLAN is where primary school gaps become visible. Children who had a shaky understanding
                of fractions in Year 5 will struggle with ratios and percentages in Year 7. Children who had
                inconsistent spelling will struggle with etymology-based words.
              </p>
              <p className="cu-body-card mb-4">
                ClassUp's diagnostic identifies these gaps specifically, not just "Numeracy is weak" but
                "algebraic order of operations is the specific gap." That specificity is what makes the coaching
                useful. You are not practising numeracy. You are practising the exact skill that is missing.
              </p>
              <p className="cu-body-card mb-6">
                In our beta cohort, the most common Year 7 gaps are: algebraic order of operations, negative
                number operations, ratio and proportion, reading inference questions, and etymology-based spelling.
                These are all skills that were introduced in Year 5-6 and are assumed knowledge in Year 7.
              </p>

              {/* FAQ */}
              <div className="cu-card-large" style={{ padding: "28px 32px", marginBottom: 32 }}>
                <div className="cu-eyebrow mb-3">YEAR 7 QUESTIONS</div>
                <FAQAccordion items={YEAR7_FAQ} />
              </div>
            </div>

            {/* Right sidebar */}
            <div style={{ position: "sticky", top: 100 }}>
              <div className="cu-card-large" style={{ padding: 24, marginBottom: 20 }}>
                <div className="cu-eyebrow mb-3">QUICK LINKS</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <Link href="/naplan-year-5-numeracy" style={sidebarLinkStyle}>Numeracy domain →</Link>
                  <Link href="/naplan-year-5-reading" style={sidebarLinkStyle}>Reading domain →</Link>
                  <Link href="/naplan/language-conventions" style={sidebarLinkStyle}>Language Conventions →</Link>
                  <Link href="/naplan/writing" style={sidebarLinkStyle}>Writing domain →</Link>
                  <Link href="/naplan/proficiency-levels-explained" style={sidebarLinkStyle}>Proficiency levels →</Link>
                  <Link href="/naplan-year-5" style={sidebarLinkStyle}>Year 5 guide →</Link>
                </div>
              </div>
              <div style={{ background: "#EEEDFE", borderRadius: 20, padding: 24, marginBottom: 20 }}>
                <div className="cu-eyebrow mb-3" style={{ color: "#7F77DD" }}>FREE DIAGNOSTIC</div>
                <p style={{ fontSize: 14, color: "#26215C", lineHeight: 1.6, marginBottom: 16 }}>
                  See exactly where your Year 7 child stands. Free. No credit card.
                </p>
                <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                  Start free diagnostic →
                </a>
              </div>
              <div style={{ background: "#F5F2EC", borderRadius: 20, padding: 24 }}>
                <div className="cu-eyebrow mb-3">TYPICAL WEEK</div>
                <p style={{ fontSize: 13, color: "#444", lineHeight: 1.65, marginBottom: 12 }}>
                  What a preparation week looks like for most Year 7 families:
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
            <div className="cu-eyebrow mb-3" style={{ textAlign: "center" }}>SAMPLE YEAR 7 QUESTIONS</div>
            <h2 className="cu-h2 mb-6" style={{ textAlign: "center" }}>Questions from our Year 7 bank.</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }} className="samples-grid">
              <SampleQuestionCard sample={SAMPLE_3} />
              <SampleQuestionCard sample={SAMPLE_7} />
            </div>
            <div style={{ marginTop: 8 }}>
              <div className="cu-eyebrow mb-3" style={{ textAlign: "center" }}>YEAR 7 READING EXAMPLE</div>
              <SampleQuestionCard sample={SAMPLE_9} />
            </div>
          </div>

          {/* Related Reading */}
          <div style={{ maxWidth: 700, margin: "0 auto 48px" }}>
            <div className="cu-eyebrow mb-3" style={{ textAlign: "center" }}>RELATED READING</div>
            <h2 className="cu-h2 mb-6" style={{ textAlign: "center" }}>From the ClassUp blog.</h2>
            <Link href="/blog/year-7-high-school-maths-shock" style={{ textDecoration: "none" }}>
              <div className="cu-card-large" style={{ padding: "24px 28px", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-2px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "none")}>
                <span style={{ background: "#EAF3DE", color: "#4A7515", fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 999, display: "inline-block", marginBottom: 12 }}>Learning</span>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, fontWeight: 800, color: "#1A1A1A", marginBottom: 8, lineHeight: 1.3 }}>The Year 7 transition: high school maths shock</h3>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, margin: 0 }}>The jump from primary to secondary maths is real. Algebra, negative numbers, and a faster curriculum pace catch many children off guard. Here is what changes and how parents can help.</p>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#7F77DD", marginTop: 14 }}>Read →</div>
              </div>
            </Link>
          </div>
          {/* Email capture */}
          <div style={{ maxWidth: 700, margin: "0 auto 48px" }}>
            <EmailCapture sourcePage="naplan-year-7" />
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 767px) {
          .y7-grid { grid-template-columns: 1fr !important; }
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
