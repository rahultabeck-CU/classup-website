import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { Breadcrumb } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// SHARED COMPONENTS
// ============================================================

const COMPARE_STYLES = `
  .compare-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 48px; align-items: start; }
  @media (max-width: 767px) { .compare-grid { grid-template-columns: 1fr !important; } }
  .compare-body p { font-size: 15px; color: #333; line-height: 1.8; margin-bottom: 20px; }
  .compare-body h2 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 22px; font-weight: 800; color: #1A1A1A; margin: 36px 0 12px; }
  .compare-body h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 17px; font-weight: 700; color: #1A1A1A; margin: 24px 0 8px; }
  .compare-table { width: 100%; border-collapse: collapse; margin: 24px 0 32px; font-size: 14px; }
  .compare-table th { background: #F5F2EC; padding: 10px 14px; text-align: left; font-weight: 700; color: #1A1A1A; border-bottom: 2px solid #E8E4D8; }
  .compare-table td { padding: 10px 14px; border-bottom: 1px solid #E8E4D8; color: #333; vertical-align: top; line-height: 1.6; }
  .compare-table tr:last-child td { border-bottom: none; }
  .compare-table td:first-child { font-weight: 600; color: #1A1A1A; width: 30%; }
  .tick { color: #639922; font-weight: 700; }
  .cross { color: #C0392B; font-weight: 700; }
  .neutral { color: #888; }
`;

function StickyDiagnosticCTA() {
  return (
    <div style={{ position: "sticky", top: 100 }}>
      <div style={{ background: "#EEEDFE", borderRadius: 20, padding: 24, marginBottom: 20 }}>
        <div className="cu-eyebrow mb-3" style={{ color: "#7F77DD" }}>FREE DIAGNOSTIC</div>
        <p style={{ fontSize: 14, color: "#26215C", lineHeight: 1.6, marginBottom: 16 }}>
          See exactly where your child stands in Numeracy, Reading, and Language Conventions. Free. No credit card.
        </p>
        <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ width: "100%", justifyContent: "center", display: "flex" }}>
          Start free diagnostic →
        </a>
        <p style={{ fontSize: 12, color: "#7F77DD", marginTop: 10, textAlign: "center" }}>
          Free · No credit card · 30 minutes
        </p>
      </div>
      <div className="cu-card-large" style={{ padding: 24 }}>
        <div className="cu-eyebrow mb-3">OTHER COMPARISONS</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Link href="/compare/classup-vs-mathletics" style={{ textDecoration: "none" }}>
            <div style={{ padding: "10px 14px", background: "#F5F2EC", borderRadius: 10 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#1A1A1A", lineHeight: 1.3 }}>ClassUp vs Mathletics</div>
              <div style={{ fontSize: 11, color: "#888" }}>NAPLAN-focused vs broad curriculum</div>
            </div>
          </Link>
          <Link href="/compare/classup-vs-reading-eggs" style={{ textDecoration: "none" }}>
            <div style={{ padding: "10px 14px", background: "#F5F2EC", borderRadius: 10 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#1A1A1A", lineHeight: 1.3 }}>ClassUp vs Reading Eggs</div>
              <div style={{ fontSize: 11, color: "#888" }}>Year 5/7 comprehension vs foundational literacy</div>
            </div>
          </Link>
          <Link href="/compare/classup-vs-kumon" style={{ textDecoration: "none" }}>
            <div style={{ padding: "10px 14px", background: "#F5F2EC", borderRadius: 10 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#1A1A1A", lineHeight: 1.3 }}>ClassUp vs Kumon</div>
              <div style={{ fontSize: 11, color: "#888" }}>At-home adaptive vs in-centre repetition</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// PAGE 1: ClassUp vs Mathletics
// ============================================================

const SCHEMA_MATHLETICS = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ClassUp",
    "url": "https://classup.com.au",
    "description": "ClassUp is an adaptive NAPLAN diagnostic and coaching platform for Australian Year 5 and Year 7 students. It identifies specific skill gaps and provides targeted practice via AI coaches Luna and Leo.",
    "brand": { "@type": "Brand", "name": "ClassUp" },
    "offers": {
      "@type": "Offer",
      "price": "49",
      "priceCurrency": "AUD",
      "priceSpecification": { "@type": "UnitPriceSpecification", "billingIncrement": "P1M" }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ClassUp vs Mathletics: Which is better for NAPLAN preparation?",
    "url": "https://classup.com.au/compare/classup-vs-mathletics",
    "description": "An objective comparison of ClassUp and Mathletics for Australian Year 5 and Year 7 NAPLAN preparation. Covers focus, pricing, diagnostic capability, and coaching approach.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://classup.com.au" },
        { "@type": "ListItem", "position": 2, "name": "Compare", "item": "https://classup.com.au/compare" },
        { "@type": "ListItem", "position": 3, "name": "ClassUp vs Mathletics" }
      ]
    }
  }
];

export function CompareMathletics() {
  return (
    <PageLayout>
      <SEO
        title="ClassUp vs Mathletics — Which is better for NAPLAN prep? | ClassUp"
        description="Mathletics covers the full Australian maths curriculum. ClassUp focuses on diagnosing and correcting the specific NAPLAN skill gaps your child has. An objective comparison for Year 5 and Year 7 families."
        canonicalPath="/compare/classup-vs-mathletics"
        schemaMarkup={SCHEMA_MATHLETICS}
      />
      <section className="cu-section" style={{ paddingTop: 24 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Compare", href: "/compare" }, { label: "ClassUp vs Mathletics" }]} />
          <div className="compare-grid">
            <article>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                <span style={{ background: "#EEEDFE", color: "#534AB7", fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 999 }}>COMPARISON</span>
                <span style={{ fontSize: 12, color: "#888" }}>Updated May 2026</span>
                <span style={{ fontSize: 12, color: "#888" }}>·</span>
                <span style={{ fontSize: 12, color: "#888" }}>4 min read</span>
              </div>
              <h1 className="cu-h1 mb-3">ClassUp vs Mathletics</h1>
              <p style={{ fontSize: 18, color: "#666", fontStyle: "italic", marginBottom: 32, lineHeight: 1.5 }}>
                NAPLAN-focused diagnostic coaching vs broad curriculum maths practice
              </p>
              <div style={{ borderTop: "1px solid #E8E4D8", paddingTop: 32 }} className="compare-body">

                <p>
                  <strong>Mathletics covers the full Australian maths curriculum from Foundation to Year 10. ClassUp is built specifically to diagnose and close the skill gaps that appear in NAPLAN for Year 5 and Year 7 students.</strong> If your child needs broad, ongoing maths practice across all year-level topics, Mathletics is a well-established tool. If you need to know exactly which NAPLAN-tested skills your child is missing and want a coach to work on those gaps directly, ClassUp is the more targeted option.
                </p>

                <h2>What each product actually does</h2>
                <p>
                  Mathletics is a curriculum-aligned maths platform used by thousands of Australian schools. It provides structured activities, live competitions, and teacher-assigned tasks that follow the Australian Curriculum. It is designed to complement classroom learning across all year levels and covers a wide range of topics well beyond the NAPLAN testing window.
                </p>
                <p>
                  ClassUp starts with a free 30-minute diagnostic that maps your child's current skill level across the three NAPLAN domains: Numeracy, Reading, and Language Conventions. The diagnostic identifies specific gaps at the sub-skill level — not just "Numeracy is weak" but "place value with four-digit numbers and fraction comparison are the two gaps." From there, an AI coach works through those gaps in every session, adapting in real time based on what your child gets right and wrong.
                </p>

                <h2>Side-by-side comparison</h2>
                <table className="compare-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>ClassUp</th>
                      <th>Mathletics</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Primary focus</td>
                      <td>NAPLAN diagnostic and gap-targeted coaching</td>
                      <td>Full Australian Curriculum maths, all year levels</td>
                    </tr>
                    <tr>
                      <td>Year levels</td>
                      <td>Year 5 and Year 7 (Year 3 and Year 9 on roadmap)</td>
                      <td>Foundation to Year 10</td>
                    </tr>
                    <tr>
                      <td>Free diagnostic</td>
                      <td><span className="tick">Yes</span> — 30 minutes, three NAPLAN domains</td>
                      <td><span className="cross">No</span> — no standalone diagnostic tool</td>
                    </tr>
                    <tr>
                      <td>Domains covered</td>
                      <td>Numeracy, Reading, Language Conventions</td>
                      <td>Maths only</td>
                    </tr>
                    <tr>
                      <td>Adaptive coaching</td>
                      <td><span className="tick">Yes</span> — adapts to each child's specific gaps</td>
                      <td><span className="neutral">Partial</span> — adaptive within assigned activities</td>
                    </tr>
                    <tr>
                      <td>AI voice coach</td>
                      <td><span className="tick">Yes</span> — Luna (Year 5) and Leo (Year 7)</td>
                      <td><span className="cross">No</span></td>
                    </tr>
                    <tr>
                      <td>Parent reporting</td>
                      <td>Weekly Friday report with gap-level detail</td>
                      <td>Parent dashboard with activity and points data</td>
                    </tr>
                    <tr>
                      <td>Pricing (AUD)</td>
                      <td>$49/month (inc. GST), month-to-month</td>
                      <td>~$15–$20/month (student licence, varies by plan)</td>
                    </tr>
                    <tr>
                      <td>School integration</td>
                      <td><span className="cross">No</span> — direct-to-parent only</td>
                      <td><span className="tick">Yes</span> — widely used in Australian schools</td>
                    </tr>
                    <tr>
                      <td>NAPLAN-specific content</td>
                      <td><span className="tick">Yes</span> — built around ACARA NAPLAN codes</td>
                      <td><span className="neutral">Partial</span> — curriculum-aligned but not NAPLAN-specific</td>
                    </tr>
                  </tbody>
                </table>

                <h2>Which one is right for your child?</h2>
                <p>
                  The two products serve different needs and are not direct replacements for each other. Mathletics is a strong choice if your child's school already uses it, if you want broad curriculum reinforcement across the full school year, or if your child is below Year 5 and not yet in a NAPLAN year.
                </p>
                <p>
                  ClassUp is the more appropriate choice if your child is in Year 5 or Year 7, NAPLAN is approaching or has recently passed, and you want a clear answer to the question "exactly which skills does my child need to work on?" The diagnostic gives you that answer in 30 minutes, and the coaching sessions work on those specific gaps rather than covering the full curriculum.
                </p>

                <h3>A note on price</h3>
                <p>
                  Mathletics is priced lower per month, and many families already have access through their child's school at no additional cost. ClassUp is priced at $49/month because it includes a personalised diagnostic, an AI coach, and weekly parent reports — not just access to a question bank. Whether that difference in price is justified depends on how targeted you need the preparation to be.
                </p>

                <h2>The honest summary</h2>
                <p>
                  Mathletics is a well-built, widely trusted maths platform. It is not designed to tell you which NAPLAN skills your child is missing, and it does not coach across Reading or Language Conventions. ClassUp is narrower in scope and more expensive per month, but it answers a specific question that Mathletics does not: exactly where is my child's NAPLAN readiness falling short, and what should they practise next?
                </p>

                <p style={{ fontSize: 13, color: "#888", fontStyle: "italic", marginTop: 32, borderTop: "1px solid #E8E4D8", paddingTop: 16 }}>
                  Competitor information last verified May 2026. Pricing and features may have changed.
                </p>

              </div>
            </article>
            <StickyDiagnosticCTA />
          </div>
        </div>
      </section>
      <style>{COMPARE_STYLES}</style>
    </PageLayout>
  );
}

// ============================================================
// PAGE 2: ClassUp vs Reading Eggs
// ============================================================

const SCHEMA_READING_EGGS = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ClassUp",
    "url": "https://classup.com.au",
    "description": "ClassUp is an adaptive NAPLAN diagnostic and coaching platform for Australian Year 5 and Year 7 students, covering Reading comprehension and inferencing at the NAPLAN level.",
    "brand": { "@type": "Brand", "name": "ClassUp" },
    "offers": {
      "@type": "Offer",
      "price": "49",
      "priceCurrency": "AUD",
      "priceSpecification": { "@type": "UnitPriceSpecification", "billingIncrement": "P1M" }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ClassUp vs Reading Eggs: Which is better for Year 5 and Year 7 reading?",
    "url": "https://classup.com.au/compare/classup-vs-reading-eggs",
    "description": "An objective comparison of ClassUp and Reading Eggs for Australian families. Reading Eggs builds foundational literacy from age 3. ClassUp targets NAPLAN reading comprehension and inferencing for Year 5 and Year 7.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://classup.com.au" },
        { "@type": "ListItem", "position": 2, "name": "Compare", "item": "https://classup.com.au/compare" },
        { "@type": "ListItem", "position": 3, "name": "ClassUp vs Reading Eggs" }
      ]
    }
  }
];

export function CompareReadingEggs() {
  return (
    <PageLayout>
      <SEO
        title="ClassUp vs Reading Eggs — Year 5 and Year 7 reading | ClassUp"
        description="Reading Eggs builds foundational literacy from age 3. ClassUp targets NAPLAN reading comprehension and inferencing for Year 5 and Year 7. An objective comparison for Australian families."
        canonicalPath="/compare/classup-vs-reading-eggs"
        schemaMarkup={SCHEMA_READING_EGGS}
      />
      <section className="cu-section" style={{ paddingTop: 24 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Compare", href: "/compare" }, { label: "ClassUp vs Reading Eggs" }]} />
          <div className="compare-grid">
            <article>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                <span style={{ background: "#EEEDFE", color: "#534AB7", fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 999 }}>COMPARISON</span>
                <span style={{ fontSize: 12, color: "#888" }}>Updated May 2026</span>
                <span style={{ fontSize: 12, color: "#888" }}>·</span>
                <span style={{ fontSize: 12, color: "#888" }}>4 min read</span>
              </div>
              <h1 className="cu-h1 mb-3">ClassUp vs Reading Eggs</h1>
              <p style={{ fontSize: 18, color: "#666", fontStyle: "italic", marginBottom: 32, lineHeight: 1.5 }}>
                Foundational literacy from age 3 vs NAPLAN reading comprehension for Year 5 and Year 7
              </p>
              <div style={{ borderTop: "1px solid #E8E4D8", paddingTop: 32 }} className="compare-body">

                <p>
                  <strong>Reading Eggs is designed to build foundational reading skills from age 3 through to around Year 6, with a focus on phonics, decoding, and early comprehension. ClassUp is designed specifically for Year 5 and Year 7 students who can already read fluently but need to improve the higher-order comprehension and inferencing skills that NAPLAN tests.</strong> These two products are largely complementary rather than competing — a child who used Reading Eggs in the early years may well benefit from ClassUp as they approach a NAPLAN year.
                </p>

                <h2>What each product actually does</h2>
                <p>
                  Reading Eggs (published by Blake eLearning, an Australian company) is a well-established literacy platform covering phonological awareness, phonics, sight words, vocabulary, and reading comprehension. It is widely used in Australian primary schools and at home, particularly for children in the Foundation to Year 4 range. The platform uses a game-based format with eggs, maps, and rewards to keep younger children engaged.
                </p>
                <p>
                  ClassUp's Reading domain is not about learning to read. It is about the specific comprehension skills that NAPLAN tests at Year 5 and Year 7: inferencing (drawing conclusions not stated directly in a text), identifying the author's purpose, understanding text structure, and analysing language choices. These are skills that many children who read confidently still find difficult, and they are the skills that most commonly cause a Reading result to fall below expectation in NAPLAN.
                </p>

                <h2>Side-by-side comparison</h2>
                <table className="compare-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>ClassUp</th>
                      <th>Reading Eggs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Target age range</td>
                      <td>Year 5 and Year 7 (approx. 10–13 years)</td>
                      <td>Ages 3–13 (Foundation to Year 6 focus)</td>
                    </tr>
                    <tr>
                      <td>Reading focus</td>
                      <td>NAPLAN comprehension: inferencing, author's purpose, text structure</td>
                      <td>Phonics, decoding, sight words, early comprehension</td>
                    </tr>
                    <tr>
                      <td>NAPLAN alignment</td>
                      <td><span className="tick">Yes</span> — built around ACARA NAPLAN reading codes</td>
                      <td><span className="neutral">Partial</span> — curriculum-aligned but not NAPLAN-specific</td>
                    </tr>
                    <tr>
                      <td>Free diagnostic</td>
                      <td><span className="tick">Yes</span> — identifies specific reading sub-skill gaps</td>
                      <td><span className="cross">No</span> — placement test but not a diagnostic report</td>
                    </tr>
                    <tr>
                      <td>Domains beyond reading</td>
                      <td><span className="tick">Yes</span> — Numeracy and Language Conventions included</td>
                      <td><span className="neutral">Partial</span> — Reading Eggspress includes some writing</td>
                    </tr>
                    <tr>
                      <td>AI voice coach</td>
                      <td><span className="tick">Yes</span> — Luna (Year 5) and Leo (Year 7)</td>
                      <td><span className="cross">No</span></td>
                    </tr>
                    <tr>
                      <td>Parent reporting</td>
                      <td>Weekly Friday report with skill-gap detail</td>
                      <td>Parent dashboard with activity and progress data</td>
                    </tr>
                    <tr>
                      <td>Pricing (AUD)</td>
                      <td>$49/month (inc. GST), month-to-month</td>
                      <td>~$13–$15/month (varies by plan and number of children)</td>
                    </tr>
                    <tr>
                      <td>Engagement style</td>
                      <td>Coaching sessions with Socratic questioning</td>
                      <td>Game-based with rewards and maps</td>
                    </tr>
                  </tbody>
                </table>

                <h2>Are they complementary?</h2>
                <p>
                  In most cases, yes. A child who is in Year 4 or below and still developing fluency may benefit from Reading Eggs. A child who is in Year 5 or Year 7 and reads comfortably but struggles with the comprehension questions in NAPLAN practice papers needs something different — they need to practise the specific inferencing and analysis skills that NAPLAN tests, not more phonics or decoding work.
                </p>
                <p>
                  If your child is in Year 5 and you are unsure whether their reading difficulty is a fluency issue or a comprehension issue, ClassUp's free diagnostic is a useful starting point. It will tell you whether the Reading gap is in lower-order skills (which might suggest continuing with a foundational platform) or in higher-order comprehension (which is what ClassUp's coaching addresses directly).
                </p>

                <h3>A note on engagement</h3>
                <p>
                  Reading Eggs uses a game-based format that works well for younger children. ClassUp's coaching sessions are more structured and less game-like — they are designed to feel like a short tutoring session rather than a game. Whether that suits your child depends on their age and how they respond to different learning formats.
                </p>

                <h2>The honest summary</h2>
                <p>
                  Reading Eggs is a strong foundational literacy platform, particularly for children under 10. ClassUp is not a replacement for it in the early years. If your child is approaching Year 5 or Year 7 NAPLAN and their reading comprehension results are below where you would expect, ClassUp's diagnostic will tell you specifically which comprehension skills are the problem — and the coaching sessions will work on those skills directly.
                </p>

                <p style={{ fontSize: 13, color: "#888", fontStyle: "italic", marginTop: 32, borderTop: "1px solid #E8E4D8", paddingTop: 16 }}>
                  Competitor information last verified May 2026. Pricing and features may have changed.
                </p>

              </div>
            </article>
            <StickyDiagnosticCTA />
          </div>
        </div>
      </section>
      <style>{COMPARE_STYLES}</style>
    </PageLayout>
  );
}

// ============================================================
// PAGE 3: ClassUp vs Kumon
// ============================================================

const SCHEMA_KUMON = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ClassUp",
    "url": "https://classup.com.au",
    "description": "ClassUp is an at-home, adaptive NAPLAN coaching platform for Australian Year 5 and Year 7 students at $49/month. No driving to a centre required.",
    "brand": { "@type": "Brand", "name": "ClassUp" },
    "offers": {
      "@type": "Offer",
      "price": "49",
      "priceCurrency": "AUD",
      "priceSpecification": { "@type": "UnitPriceSpecification", "billingIncrement": "P1M" }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "ClassUp vs Kumon: At-home adaptive coaching vs in-centre repetition",
    "url": "https://classup.com.au/compare/classup-vs-kumon",
    "description": "An objective comparison of ClassUp and Kumon for Australian families. Covers cost, time commitment, NAPLAN alignment, and the at-home vs in-centre decision.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://classup.com.au" },
        { "@type": "ListItem", "position": 2, "name": "Compare", "item": "https://classup.com.au/compare" },
        { "@type": "ListItem", "position": 3, "name": "ClassUp vs Kumon" }
      ]
    }
  }
];

export function CompareKumon() {
  return (
    <PageLayout>
      <SEO
        title="ClassUp vs Kumon — Cost, flexibility, and NAPLAN prep | ClassUp"
        description="Kumon is in-centre, high-cost, and generalist. ClassUp is $49/month, at-home, and built specifically for NAPLAN Year 5 and Year 7. An objective comparison for Australian families."
        canonicalPath="/compare/classup-vs-kumon"
        schemaMarkup={SCHEMA_KUMON}
      />
      <section className="cu-section" style={{ paddingTop: 24 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Compare", href: "/compare" }, { label: "ClassUp vs Kumon" }]} />
          <div className="compare-grid">
            <article>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                <span style={{ background: "#EEEDFE", color: "#534AB7", fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 999 }}>COMPARISON</span>
                <span style={{ fontSize: 12, color: "#888" }}>Updated May 2026</span>
                <span style={{ fontSize: 12, color: "#888" }}>·</span>
                <span style={{ fontSize: 12, color: "#888" }}>5 min read</span>
              </div>
              <h1 className="cu-h1 mb-3">ClassUp vs Kumon</h1>
              <p style={{ fontSize: 18, color: "#666", fontStyle: "italic", marginBottom: 32, lineHeight: 1.5 }}>
                At-home adaptive coaching vs in-centre repetition — a practical comparison for Australian families
              </p>
              <div style={{ borderTop: "1px solid #E8E4D8", paddingTop: 32 }} className="compare-body">

                <p>
                  <strong>Kumon is a well-established in-centre tutoring programme that uses high-volume, repetitive worksheet practice to build maths and English skills incrementally. ClassUp is an at-home, adaptive coaching platform built specifically for NAPLAN Year 5 and Year 7, priced at $49/month with no travel required.</strong> The decision between them is largely practical: how much time and money can your family commit, and do you need broad skill-building or targeted NAPLAN preparation?
                </p>

                <h2>How Kumon works</h2>
                <p>
                  Kumon operates through a franchise network of local centres across Australia. Students attend a centre twice a week and complete a set of worksheets at each visit, then take additional worksheets home to complete daily. The method is built around repetition and incremental progression — students do not move to the next level until they can complete the current level accurately and within a set time.
                </p>
                <p>
                  The programme covers maths and English (reading and writing) from very early levels through to advanced secondary content. It is not designed specifically for NAPLAN. The goal is to build a strong, self-paced foundation that may eventually extend well beyond year-level expectations.
                </p>

                <h2>How ClassUp works</h2>
                <p>
                  ClassUp starts with a free 30-minute diagnostic that identifies exactly which NAPLAN skills your child is missing across Numeracy, Reading, and Language Conventions. From there, an AI coach works through those specific gaps in sessions of approximately 30 minutes, four times per week. There are no worksheets, no travel, and no fixed centre schedule. Sessions happen at home, at a time that suits your family.
                </p>
                <p>
                  The coaching uses Socratic questioning — the coach does not give answers directly but guides the child to work through the reasoning themselves. This is a different approach to Kumon's repetition model, and whether it suits your child depends on how they learn.
                </p>

                <h2>Side-by-side comparison</h2>
                <table className="compare-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>ClassUp</th>
                      <th>Kumon</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Location</td>
                      <td>At home, online</td>
                      <td>In-centre (twice weekly) plus daily homework</td>
                    </tr>
                    <tr>
                      <td>NAPLAN alignment</td>
                      <td><span className="tick">Yes</span> — built around ACARA NAPLAN codes</td>
                      <td><span className="cross">No</span> — generalist curriculum, not NAPLAN-specific</td>
                    </tr>
                    <tr>
                      <td>Free diagnostic</td>
                      <td><span className="tick">Yes</span> — 30 minutes, identifies specific gaps</td>
                      <td><span className="cross">No</span> — initial assessment at enrolment only</td>
                    </tr>
                    <tr>
                      <td>Domains covered</td>
                      <td>Numeracy, Reading, Language Conventions</td>
                      <td>Maths and English (reading and writing)</td>
                    </tr>
                    <tr>
                      <td>Teaching method</td>
                      <td>Adaptive AI coaching with Socratic questioning</td>
                      <td>Repetitive worksheet practice, self-paced progression</td>
                    </tr>
                    <tr>
                      <td>Time commitment</td>
                      <td>~30 min/session, 4 sessions/week, at home</td>
                      <td>2 centre visits/week + daily worksheets (~30–45 min/day)</td>
                    </tr>
                    <tr>
                      <td>Monthly cost (AUD)</td>
                      <td>$49/month (inc. GST)</td>
                      <td>Pricing varies by centre and subject. Contact your local Kumon centre for current fees.</td>
                    </tr>
                    <tr>
                      <td>Enrolment fee</td>
                      <td><span className="tick">None</span></td>
                      <td><span className="cross">Yes</span> — typically $50–$100 at enrolment</td>
                    </tr>
                    <tr>
                      <td>Contract / commitment</td>
                      <td>Month-to-month, cancel anytime</td>
                      <td>Typically requires notice period to exit (varies by centre)</td>
                    </tr>
                    <tr>
                      <td>Parent reporting</td>
                      <td>Weekly Friday report with skill-gap detail</td>
                      <td>Progress discussed at centre; no structured weekly report</td>
                    </tr>
                  </tbody>
                </table>

                <h2>The cost difference is significant</h2>
                <p>
                  Kumon pricing varies by centre and by how many subjects your child is enrolled in. A single subject (maths only) typically costs between $120 and $180 per month at most Australian centres, not including any enrolment fee. Two subjects (maths and English) can reach $250–$350 per month. ClassUp is $49 per month for all three NAPLAN domains combined, with no enrolment fee and no notice period to cancel.
                </p>
                <p>
                  For families where budget is a real constraint, this difference matters. For families where the priority is long-term, deep skill-building that extends well beyond NAPLAN, Kumon's higher cost may be justified by its broader scope and the in-person accountability structure.
                </p>

                <h3>The travel factor</h3>
                <p>
                  Kumon requires two centre visits per week, which means two return trips for a parent or carer. For families in areas with limited centre access, or for families managing multiple children's schedules, this is a practical constraint that ClassUp does not have. ClassUp sessions happen at home, at any time, without a booking.
                </p>

                <h2>Which one is right for your child?</h2>
                <p>
                  Kumon is a reasonable choice if you want a long-term, structured programme that builds skills incrementally over years, your child responds well to repetition and routine, and you have the budget and schedule flexibility for twice-weekly centre visits. It is not designed to tell you which NAPLAN skills are the problem, and it will not adapt its content to your child's specific NAPLAN gaps.
                </p>
                <p>
                  ClassUp is the more practical choice if your child is in Year 5 or Year 7, NAPLAN preparation is the specific goal, you want to know exactly which skills to work on, and you need a solution that fits into a busy family schedule without additional driving. The free diagnostic is a useful first step regardless of which direction you ultimately go — it will tell you whether the gaps are broad enough to warrant a generalist programme like Kumon, or specific enough that targeted NAPLAN coaching is the more efficient path.
                </p>

                <h2>The honest summary</h2>
                <p>
                  Kumon is a proven, high-commitment programme with a strong track record for children who need long-term, structured skill-building. It is not built for NAPLAN specifically. ClassUp is narrower in scope and designed to answer one question clearly: which NAPLAN skills does my child need to work on, and how do we close those gaps before the test?
                </p>

                <p style={{ fontSize: 13, color: "#888", fontStyle: "italic", marginTop: 32, borderTop: "1px solid #E8E4D8", paddingTop: 16 }}>
                  Competitor information last verified May 2026. Pricing and features may have changed.
                </p>

              </div>
            </article>
            <StickyDiagnosticCTA />
          </div>
        </div>
      </section>
      <style>{COMPARE_STYLES}</style>
    </PageLayout>
  );
}
