import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { FAQAccordion } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL } from "@/lib/classup";
import { SEO } from "@/components/SEO";

// ============================================================
// /naplan-year-5 -- SEO hub page for Year 5 NAPLAN preparation
// Route/slug intentionally unchanged (live URL: /naplan-year-5).
// Parent-facing, conversion-focused. All CTAs route to the
// diagnostic via the shared DIAGNOSTIC_URL constant (never hardcoded).
// ============================================================

const HUB_FAQ = [
  {
    question: "When is Year 5 NAPLAN in 2027?",
    answer:
      "NAPLAN 2027 runs from Wednesday 10 March to Monday 22 March 2027. Schools sit the tests at different points within that window.",
  },
  {
    question: "What does Year 5 NAPLAN test?",
    answer:
      "Four areas, all online: Numeracy; Reading; Writing; and Language Conventions (spelling, grammar and punctuation). The tests are adaptive, so the difficulty adjusts to your child as they answer.",
  },
  {
    question: "How can I help my Year 5 child prepare for NAPLAN?",
    answer:
      "Start by understanding where they actually stand, rather than drilling random questions. Practise the specific areas that need work, keep sessions short and calm, and remember NAPLAN measures progress — it isn't pass or fail. ClassUp's free diagnostic gives you that starting picture.",
  },
  {
    question: "Is NAPLAN practice necessary?",
    answer:
      "Cramming isn't, and most authorities advise against it. But a bit of familiarity with the format, plus targeted help on genuine gaps, can make the day far less stressful for your child. The aim is confidence and clarity, not a marathon of worksheets.",
  },
  {
    question: "Which subjects does ClassUp cover for Year 5?",
    answer:
      "ClassUp's diagnostic and practice currently cover Numeracy, Reading, and Language Conventions — the areas where targeted practice makes the most difference.",
  },
  {
    question: "How much does ClassUp cost?",
    answer:
      "The diagnostic and your first honest report are free. A ClassUp subscription is $59 a month for your first child and $49 a month for each additional child on the same account, GST included, month-to-month. You can decide after you've seen the report.",
  },
  {
    question: "Is my child's data safe?",
    answer:
      "Yes. We ask for your child's first name or a nickname and nothing more than we need to help them practise. We deliberately keep what we collect to a minimum.",
  },
];

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://classup.com.au/" },
      { "@type": "ListItem", position: 2, name: "NAPLAN", item: "https://classup.com.au/naplan" },
      { "@type": "ListItem", position: 3, name: "Year 5 NAPLAN Practice & Preparation", item: "https://classup.com.au/naplan-year-5" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HUB_FAQ.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  },
];

// Shared inline styles
const H2: React.CSSProperties = {
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: "clamp(26px, 3.6vw, 40px)",
  fontWeight: 800,
  color: "#1A1A1A",
  lineHeight: 1.2,
  marginBottom: 16,
  maxWidth: 760,
};

const P: React.CSSProperties = {
  fontSize: 17,
  color: "#444",
  lineHeight: 1.75,
  maxWidth: 720,
  marginBottom: 18,
};

const LINK: React.CSSProperties = {
  color: "#534AB7",
  fontWeight: 600,
  textDecoration: "underline",
  textUnderlineOffset: 2,
};

function PrimaryCTA({ label = "Start the free diagnostic" }: { label?: string }) {
  return (
    <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 16, padding: "16px 32px" }}>
      {label} &#8594;
    </a>
  );
}

export default function NaplanYear5Hub() {
  return (
    <PageLayout>
      <SEO
        title="Year 5 NAPLAN Practice & Preparation | ClassUp"
        description="Year 5 NAPLAN preparation built on an honest picture of your child. A free diagnostic shows real strengths and gaps, then targeted practice helps them build. Start free."
        canonicalPath="/naplan-year-5"
        schemaMarkup={SCHEMA}
      />

      {/* ── HERO ── */}
      <section style={{ background: "linear-gradient(135deg, #F5F2EC 0%, #EEEDFE 100%)", padding: "64px 0 56px" }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 20 }}>
            <ol style={{ display: "flex", gap: 6, alignItems: "center", listStyle: "none", padding: 0, margin: 0, flexWrap: "wrap" }}>
              {[
                { label: "Home", href: "/" },
                { label: "NAPLAN", href: "/naplan" },
                { label: "Year 5", href: null as string | null },
              ].map((crumb, i, arr) => (
                <li key={crumb.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  {crumb.href ? (
                    <Link href={crumb.href} style={{ fontSize: 13, color: "#7F77DD", textDecoration: "none", fontWeight: 600 }}>
                      {crumb.label}
                    </Link>
                  ) : (
                    <span style={{ fontSize: 13, color: "#888" }}>{crumb.label}</span>
                  )}
                  {i < arr.length - 1 && <span style={{ fontSize: 13, color: "#CCC" }}>›</span>}
                </li>
              ))}
            </ol>
          </nav>

          <div className="cu-eyebrow mb-4">YEAR 5 NAPLAN PREPARATION</div>
          <h1
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "clamp(36px, 5vw, 58px)",
              fontWeight: 800,
              color: "#1A1A1A",
              lineHeight: 1.1,
              marginBottom: 20,
              maxWidth: 820,
            }}
          >
            Year 5 NAPLAN practice that{" "}
            <em style={{ fontStyle: "italic", color: "#7F77DD" }}>tells you the truth.</em>
          </h1>
          <p style={{ fontSize: 18, color: "#444", lineHeight: 1.7, maxWidth: 680, marginBottom: 32 }}>
            A free diagnostic shows you exactly where your Year 5 child stands — the strengths and the gaps — then targeted
            practice helps them build on it. No inflated promises. Just an honest picture and a clear next step.
          </p>
          <PrimaryCTA />
          <p style={{ fontSize: 13, color: "#888", marginTop: 14 }}>
            Free to start · Your child's first name is all we ask for · About 30 minutes
          </p>
        </div>
      </section>

      {/* ── WHAT YEAR 5 NAPLAN ACTUALLY TESTS ── */}
      <section className="cu-section">
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={H2}>What Year 5 NAPLAN actually tests</h2>
          <p style={P}>
            NAPLAN 2027 runs from Wednesday 10 March to Monday 22 March 2027. Your Year 5 child sits four tests, all online:
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px", maxWidth: 760, display: "flex", flexDirection: "column", gap: 14 }}>
            <li style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: "#7F77DD", fontWeight: 800, marginTop: 1 }}>•</span>
              <span style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
                <Link href="/naplan-year-5-numeracy" style={LINK}>Year 5 Numeracy</Link> — number, algebra, measurement, space,
                statistics and probability. By Year 5 this steps up: fractions, decimals, multi-step problems and reasoning,
                not just arithmetic.
              </span>
            </li>
            <li style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: "#7F77DD", fontWeight: 800, marginTop: 1 }}>•</span>
              <span style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
                <Link href="/naplan-year-5-reading" style={LINK}>Reading</Link> — longer and more varied passages than Year 3,
                testing whether your child can locate information, connect ideas across a text, and read between the lines.
              </span>
            </li>
            <li style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: "#7F77DD", fontWeight: 800, marginTop: 1 }}>•</span>
              <span style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
                Writing — one writing task, marked against a set of criteria.
              </span>
            </li>
            <li style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: "#7F77DD", fontWeight: 800, marginTop: 1 }}>•</span>
              <span style={{ fontSize: 16, color: "#444", lineHeight: 1.7 }}>
                Language Conventions —{" "}
                <Link href="/naplan/language-conventions" style={LINK}>spelling, grammar and punctuation</Link>, including
                spelling delivered by audio.
              </span>
            </li>
          </ul>
          <p style={P}>
            NAPLAN is adaptive: the questions a child sees adjust to how they're answering. It isn't a pass-or-fail exam —
            it's a snapshot of where literacy and numeracy skills sit against the national standard. The most useful thing
            you can do as a parent isn't to cram. It's to understand where your child actually is, and help where it counts.
          </p>
        </div>
      </section>

      {/* ── WHY GENERIC PREP FALLS SHORT ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={H2}>Why generic NAPLAN prep falls short</h2>
          <p style={P}>
            Most NAPLAN prep is a pile of worksheets or a wall of practice questions. Your child grinds through them, you have
            no real idea what stuck, and the gaps that matter stay hidden.
          </p>
          <p style={P}>
            Even education authorities caution against excessive coaching — and they're right that drilling for its own sake
            doesn't help. But there's a difference between cramming and understanding. A worksheet can't tell you that your
            child has fractions sorted but loses marks on multi-step word problems, or reads fluently but misses inference
            questions. Without that, you're practising blind.
          </p>
          <p style={P}>
            ClassUp starts the other way around. First we work out what your child needs. Then we practise it. It's an approach
            we explain in our <Link href="/methodology" style={LINK}>methodology</Link>.
          </p>
        </div>
      </section>

      {/* ── HOW CLASSUP HELPS (3 STEPS) ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={H2}>How ClassUp helps your Year 5 child</h2>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, margin: "12px 0 20px" }}
            className="steps-grid"
          >
            {[
              {
                n: "1",
                title: "A free diagnostic",
                body: "Your child works through a short, friendly diagnostic across Numeracy, Reading and Language Conventions. It's designed to feel achievable, not like an exam — the point is to read their skills, not rattle them.",
              },
              {
                n: "2",
                title: "An honest parent report",
                body: "You get a plain-English report on where your child stands: what they've got, what's wobbly, and what to focus on. Real progress and real struggles — written for a parent, not a teacher.",
              },
              {
                n: "3",
                title: "Practice that adapts",
                body: "From there, your child practises with a coach that adjusts to how they're going — leaning into the areas that need work, easing off the ones that don't. Each question comes with a clear explanation, so practice actually teaches rather than just tests.",
              },
            ].map((step) => (
              <div key={step.n} style={{ background: "#EEEDFE", borderRadius: 16, padding: "24px 26px", borderTop: "3px solid #7F77DD" }}>
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: "#534AB7",
                    color: "#FFF",
                    fontWeight: 800,
                    fontSize: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 14,
                  }}
                >
                  {step.n}
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 18, fontWeight: 800, color: "#1A1A1A", marginBottom: 8 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 14, color: "#555", lineHeight: 1.7, margin: 0 }}>{step.body}</p>
              </div>
            ))}
          </div>
          <p style={P}>
            It's built to strengthen the specific skills your Year 5 child needs, in the time you've got before March. See
            the full picture of <Link href="/how-it-works" style={LINK}>how it works</Link>.
          </p>
        </div>
      </section>

      {/* ── HONEST REPORT ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ background: "#F5F2EC", border: "1px solid #E8E4D8", borderRadius: 20, padding: "40px 44px", maxWidth: 860 }}>
            <h2 style={{ ...H2, marginBottom: 16 }}>An honest report, not a feel-good one</h2>
            <p style={{ ...P, marginBottom: 16 }}>
              Here's the part most platforms won't say out loud: a lot of NAPLAN products are designed to make you feel good so
              you keep paying. Green ticks everywhere. Everything's "great."
            </p>
            <p style={{ ...P, marginBottom: 0 }}>
              ClassUp doesn't do that. If your child is struggling with something, we tell you — clearly, and early enough to
              do something about it. If they're tracking well, we tell you that too. The honesty is the product. It's the whole
              reason we built it, and it's the thing you can't get from a worksheet pack.
            </p>
          </div>
        </div>
      </section>

      {/* ── A COACH YOUR CHILD WILL LIKE ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={H2}>A coach your child will actually like</h2>
          <p style={P}>
            Your child practises alongside one of two coaches —{" "}
            <Link href="/coaches/luna" style={LINK}>Luna</Link>, who's calm and encouraging, or{" "}
            <Link href="/coaches/leo" style={LINK}>Leo</Link>, who's direct and full of energy. They pick the one that suits
            them. The coach explains, nudges and keeps things moving, in language a Year 5 child gets.
          </p>
          <p style={P}>
            We ask for your child's first name or a nickname, and nothing more than we need. No surnames, no school, no clutter.
          </p>
        </div>
      </section>

      {/* ── IS YOUR CHILD READY ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={H2}>Is your Year 5 child ready?</h2>
          <p style={P}>
            By Year 5, the curriculum has quietly shifted up a gear. Maths moves into fractions, decimals and multi-step
            reasoning. Reading passages get longer and ask harder questions. Spelling and grammar expectations climb. Plenty of
            children who sailed through Year 3 hit a few walls in Year 5 — and that's normal.
          </p>
          <p style={P}>
            You don't need to know where the gaps are. That's what the diagnostic is for. Twenty minutes in, you'll have a
            clearer picture of your child's literacy and numeracy than a term of worksheets would give you.
          </p>
          <div style={{ marginTop: 8 }}>
            <PrimaryCTA />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <h2 style={H2}>Frequently asked questions</h2>
          <div style={{ marginTop: 24 }}>
            <FAQAccordion items={HUB_FAQ} defaultOpenIndexes={[0, 1]} />
          </div>
        </div>
      </section>

      {/* ── RELATED GUIDES ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <h2 style={{ ...H2, fontSize: "clamp(22px, 3vw, 32px)" }}>Related guides and resources</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, marginTop: 24 }} className="links-grid">
            {[
              { href: "/how-it-works", label: "How It Works", desc: "Diagnostic, honest report, then adaptive practice — the ClassUp loop end to end." },
              { href: "/methodology", label: "Methodology", desc: "Why targeted practice outperforms generic worksheets for NAPLAN preparation." },
              { href: "/blog/what-naplan-actually-tests", label: "What NAPLAN actually tests", desc: "A plain-English look at what each NAPLAN domain is really assessing." },
              { href: "/blog/how-to-read-naplan-results", label: "How to read NAPLAN results", desc: "Make sense of bands and the national standard — and what to do next." },
            ].map((link) => (
              <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
                <div
                  className="cu-card-large"
                  style={{ padding: "20px 24px", height: "100%", cursor: "pointer" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
                >
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#1A1A1A", marginBottom: 6, lineHeight: 1.35 }}>{link.label}</div>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, margin: 0 }}>{link.desc}</p>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#7F77DD", marginTop: 12 }}>Read &#8594;</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="cu-section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ background: "#1A1A1A", borderRadius: 24, padding: "48px 56px", textAlign: "center" }} className="cta-block">
            <h2
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 800,
                color: "#FFF",
                lineHeight: 1.2,
                marginBottom: 16,
                maxWidth: 640,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              See where your Year 5 child really stands — free.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", marginBottom: 32, maxWidth: 560, marginLeft: "auto", marginRight: "auto", lineHeight: 1.65 }}>
              No card games, no inflated promises. Just an honest diagnostic and a report you can trust, in about 30 minutes.
            </p>
            <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 17, padding: "18px 40px", background: "#7F77DD", color: "#FFF" }}>
              Start the free diagnostic &#8594;
            </a>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginTop: 14 }}>
              Free to start · Your child's first name is all we ask for · About 30 minutes
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .links-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .cta-block { padding: 36px 24px !important; }
        }
      `}</style>
    </PageLayout>
  );
}
