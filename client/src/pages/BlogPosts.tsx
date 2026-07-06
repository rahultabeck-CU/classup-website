import React from "react";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { InPostCTA, Breadcrumb } from "@/components/ClassUpUI";
import { DIAGNOSTIC_URL } from "@/lib/classup";
import { BLOG_POSTS } from "./Blog";
import { SEO } from "@/components/SEO";

function BlogLayout({ post, children }: { post: typeof BLOG_POSTS[0]; children: React.ReactNode }) {
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  return (
    <PageLayout>
      <section className="cu-section" style={{ paddingTop: 24 }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} />
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 48, alignItems: "start" }} className="blog-post-grid">
            <article>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                <span style={{ background: post.categoryColor, color: post.categoryTextColor, fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 999 }}>{post.category}</span>
                <span style={{ fontSize: 12, color: "#888" }}>{post.date}</span>
                <span style={{ fontSize: 12, color: "#888" }}>·</span>
                <span style={{ fontSize: 12, color: "#888" }}>{post.readTime}</span>
              </div>
              <h1 className="cu-h1 mb-3">{post.title}</h1>
              <p style={{ fontSize: 18, color: "#666", fontStyle: "italic", marginBottom: 32, lineHeight: 1.5 }}>{post.subtitle}</p>
              <div style={{ borderTop: "1px solid #E8E4D8", paddingTop: 32 }}>
                {children}
              </div>
            </article>
            <div style={{ position: "sticky", top: 100 }}>
              <div style={{ background: "#EEEDFE", borderRadius: 20, padding: 24, marginBottom: 20 }}>
                <div className="cu-eyebrow mb-3" style={{ color: "#7F77DD" }}>FREE DIAGNOSTIC</div>
                <p style={{ fontSize: 14, color: "#26215C", lineHeight: 1.6, marginBottom: 16 }}>
                  See exactly where your child stands. Free. No credit card.
                </p>
                <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                  Start free diagnostic →
                </a>
              </div>
              <div className="cu-card-large" style={{ padding: 24 }}>
                <div className="cu-eyebrow mb-3">MORE FROM THE BLOG</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {otherPosts.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} style={{ textDecoration: "none" }}>
                      <div style={{ padding: "10px 14px", background: "#F5F2EC", borderRadius: 10 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "#1A1A1A", marginBottom: 2, lineHeight: 1.3 }}>{p.title}</div>
                        <div style={{ fontSize: 11, color: "#888" }}>{p.readTime}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 767px) {
          .blog-post-grid { grid-template-columns: 1fr !important; }
        }
        .blog-body p { font-size: 15px; color: #333; line-height: 1.8; margin-bottom: 20px; }
        .blog-body h2 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 22px; font-weight: 800; color: #1A1A1A; margin: 36px 0 12px; }
        .blog-body h3 { font-family: 'Plus Jakarta Sans', sans-serif; font-size: 17px; font-weight: 700; color: #1A1A1A; margin: 24px 0 8px; }
        .blog-body blockquote { border-left: 3px solid #7F77DD; padding-left: 16px; margin: 24px 0; font-style: italic; color: #444; }
        .blog-body ul { margin: 0 0 20px 0; padding-left: 24px; }
        .blog-body ul li { font-size: 15px; color: #333; line-height: 1.8; margin-bottom: 8px; }
      `}</style>
    </PageLayout>
  );
}


// ============================================================
// POST 1: Why we built ClassUp (~700 words)
// ============================================================

const BLOG_WHY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Why we built ClassUp",
  "description": "Rahul Tabeck explains why he built ClassUp after sitting with his daughter Kavya through a NAPLAN practice paper.",
  "author": { "@type": "Person", "name": "Rahul Tabeck" },
  "publisher": { "@type": "Organization", "name": "ClassUp", "url": "https://classup.com.au" },
  "url": "https://classup.com.au/blog/why-we-built-classup",
  "datePublished": "2025-01-15",
  "dateModified": "2026-04-29",
  "wordCount": 700,
  "inLanguage": "en-AU"
};
export function BlogPostWhyWeBuilt() {
  const post = BLOG_POSTS.find((p) => p.slug === "why-we-built-classup")!;
  return (
    <BlogLayout post={post}>
      <SEO
        title="Why we built ClassUp - ClassUp Blog"
        description="Rahul Tabeck explains why he built ClassUp after sitting with his daughter Kavya through a NAPLAN practice paper and realising the problem was not her ability."
        canonicalPath="/blog/why-we-built-classup"
        schemaMarkup={BLOG_WHY_SCHEMA}
      />
      <div className="blog-body">
        <p>ClassUp exists because of one evening in 2024, a practice paper, and something my daughter said that I couldn't shake. We built it because nothing else on the market told parents what they actually needed to know: not just whether their child got the answer wrong, but exactly why, and exactly what to do next.</p>

        <h2>The evening that started it</h2>
        <p>Kavya is in Year 6. She is sharp, curious, and genuinely good at maths, until NAPLAN prep started. I sat with her one evening working through a practice paper. She got a place value question wrong. I explained it. She nodded. She got the next one wrong too. I explained it again, a different way. She looked at me and said something I have not forgotten:</p>
        <blockquote>"Dad, you explain it like it's obvious. It's not obvious to me."</blockquote>
        <p>She was right. I was explaining it the way it made sense to me, not the way it needed to be explained to her. And I had no idea what that actually looked like for her specific gap.</p>

        <h2>The problem with how most families prepare</h2>
        <p>We were doing what most families do: working through practice papers, checking answers, moving on. The problem is that checking answers does not tell you anything useful. You know your child got it wrong. You do not know why. And "why" is the only thing that matters for fixing it.</p>
        <p>I started looking at what was available. Tutoring centres with fixed curricula that did not adapt to Kavya's specific gaps. Overseas platforms with US or UK content that did not match Australian NAPLAN. Generic edtech subscriptions that gave more questions without any feedback on what was going wrong. Nothing that said: here is exactly what your child got wrong, here is why, here is the next question to fix it.</p>
        <p>The market had plenty of "more practice". It had almost nothing that was genuinely diagnostic.</p>

        <h2>What we built instead</h2>
        <p>ClassUp starts with a free 30-minute diagnostic that maps your child's performance across three NAPLAN domains: <Link href="/naplan/numeracy" style={{ color: "#7F77DD", fontWeight: 600 }}>Numeracy</Link>, <Link href="/naplan/reading" style={{ color: "#7F77DD", fontWeight: 600 }}>Reading</Link>, and Language Conventions. The diagnostic does not just score them. It identifies the specific sub-skills that are weak, so the coaching that follows is targeted from the first session.</p>
        <p>After the diagnostic, your child is matched with a coach, either Luna or Leo, who works on exactly those gaps. Not a fixed curriculum. Not a worksheet. A coach who gives a different question on the same skill until it is solid, and who explains the specific reasoning error, not just "incorrect".</p>
        <p>The sessions are 30 minutes, four times a week. That is two hours of targeted practice per week, which is enough to produce measurable improvement in eight to twelve weeks if the gaps are specific and the practice is consistent.</p>

        <h2>The principle we build by</h2>
        <p>Every product decision at ClassUp goes through one filter: is this good enough for Kavya?</p>
        <p>If a question explanation is vague, it does not ship. If a coach response is generic, it does not ship. If a parent report is full of marketing language instead of honest information, it does not ship. That filter has killed a lot of features that looked good on paper but would not have actually helped a real child sitting at a kitchen table at 7pm.</p>
        <p>The diagnostic is free because we wanted every family to be able to see where their child actually stands, not just the families who can afford a private tutor. The coaching is $59 per month because that is what it costs to build and maintain something that actually works at this level of specificity.</p>

        <h3>A note on what ClassUp is not</h3>
        <p>ClassUp is not a replacement for school. It is not a guarantee of a particular band score. It is a targeted preparation tool for children in <Link href="/naplan/year-5" style={{ color: "#7F77DD", fontWeight: 600 }}>Year 5</Link> and <Link href="/naplan/year-7" style={{ color: "#7F77DD", fontWeight: 600 }}>Year 7</Link> who have specific, identifiable gaps in the skills NAPLAN tests. If your child's gaps are different from what NAPLAN covers, ClassUp is not the right tool. But if they are preparing for NAPLAN and you want to know exactly where to focus, this is what we built it for.</p>
        <p>Kavya is our quality standard. She is also our most honest critic.</p>
        <InPostCTA />
      </div>
    </BlogLayout>
  );
}


// ============================================================
// POST 2: What NAPLAN actually tests (~720 words)
// ============================================================

const BLOG_WHAT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What NAPLAN actually tests",
  "description": "NAPLAN tests four domains: Numeracy, Reading, Language Conventions, and Writing. Here is what each domain covers.",
  "author": { "@type": "Person", "name": "Rahul Tabeck" },
  "publisher": { "@type": "Organization", "name": "ClassUp", "url": "https://classup.com.au" },
  "url": "https://classup.com.au/blog/what-naplan-actually-tests",
  "datePublished": "2025-02-01",
  "dateModified": "2026-04-29",
  "wordCount": 720,
  "inLanguage": "en-AU"
};
export function BlogPostWhatNAPLANTests() {
  const post = BLOG_POSTS.find((p) => p.slug === "what-naplan-actually-tests")!;
  return (
    <BlogLayout post={post}>
      <SEO
        title="What NAPLAN actually tests - ClassUp Blog"
        description="NAPLAN tests four domains: Numeracy, Reading, Language Conventions, and Writing. Here is what each domain covers and what it does not cover."
        canonicalPath="/blog/what-naplan-actually-tests"
        schemaMarkup={BLOG_WHAT_SCHEMA}
      />
      <div className="blog-body">
        <p>NAPLAN tests four specific domains: Numeracy, Reading, Language Conventions, and Writing. It does not test general intelligence, creativity, or your child's ability to learn new things. Understanding exactly what is and is not assessed is the most useful thing a parent can know before starting any preparation programme.</p>

        <p><strong>ClassUp currently covers three of these four domains: Numeracy, Reading, and Language Conventions. We do not provide Writing coaching.</strong></p>

        <h2>The four domains</h2>

        <h3>Numeracy</h3>
        <p>Numeracy covers three sub-domains: Number and Algebra, Measurement and Geometry, and Statistics and Probability. The questions are multiple choice and short answer. Since 2023, NAPLAN has been delivered as an adaptive online test, which means the difficulty of questions adjusts based on your child's responses. A child who answers correctly will see harder questions; one who struggles will see easier ones. The final score reflects both the number of correct answers and the difficulty of the questions attempted.</p>
        <p>The most common <Link href="/naplan/year-5" style={{ color: "#7F77DD", fontWeight: 600 }}>Year 5</Link> Numeracy gaps are place value with four-digit numbers, fractions and decimals, and area and perimeter. The most common <Link href="/naplan/year-7" style={{ color: "#7F77DD", fontWeight: 600 }}>Year 7</Link> gaps are algebraic order of operations, negative numbers, and proportional reasoning. Knowing which sub-domain is weak is more useful than knowing the overall Numeracy score.</p>

        <h3>Reading</h3>
        <p>Reading tests comprehension across three text types: narrative, informational, and persuasive. Questions are designed to assess three cognitive processes. The first is locating and retrieving: the answer is in the text and the child needs to find it. The second is integrating and interpreting: the child needs to connect ideas from different parts of the text. The third is reflecting and evaluating: the child needs to think beyond the text, considering the author's purpose or the effect of a particular word choice.</p>
        <p>Many children are strong at locating and retrieving but weaker at the higher-order processes. A child who reads fluently but scores below expectation in <Link href="/naplan/reading" style={{ color: "#7F77DD", fontWeight: 600 }}>Reading</Link> is usually struggling with integrating and evaluating, not with reading itself.</p>

        <h3>Language Conventions</h3>
        <p>Language Conventions covers spelling, grammar, and punctuation. The online test includes an audio component for spelling: your child hears the word read aloud and must type it correctly. This catches children who have learned to recognise correct spelling visually but cannot produce it from memory. If your child has only practised from printed materials, the audio component can be a genuine surprise.</p>
        <p>Grammar and punctuation questions cover sentence structure, verb tense, subject-verb agreement, apostrophes, commas, and capital letters. These are explicitly taught in the Australian Curriculum from Foundation year onwards, so gaps here usually reflect inconsistent practice rather than a fundamental misunderstanding.</p>

        <h3>Writing</h3>
        <p>Writing is the only domain where your child produces an extended response. One piece of writing, 42 minutes, marked against 10 criteria covering audience, text structure, ideas, vocabulary, cohesion, paragraphing, sentence structure, punctuation, spelling, and character and setting (for narrative). The text type alternates between persuasive and narrative each year, though ACARA does not announce in advance which type will appear.</p>

        <h2>What NAPLAN does not test</h2>
        <p>NAPLAN does not test general knowledge, science, history, or any subject-specific content outside literacy and numeracy. It does not test oral communication, visual arts, or physical education. It does not measure effort, curiosity, or the ability to learn new things quickly.</p>
        <p>This matters because parents sometimes interpret a low NAPLAN score as a reflection of their child's overall ability. It is not. NAPLAN is a narrow measure of specific, learnable skills that are explicitly taught in the Australian Curriculum. If your child is below the expected band for their year level, it means those specific skills need more targeted practice. It does not mean anything broader than that.</p>

        <h2>How to use this information</h2>
        <p>The most useful thing you can do with this breakdown is identify which domain and which sub-domain is weakest for your child, and then focus preparation time there. A child who is strong in <Link href="/naplan/reading" style={{ color: "#7F77DD", fontWeight: 600 }}>Reading</Link> and <Link href="/naplan/language-conventions" style={{ color: "#7F77DD", fontWeight: 600 }}>Language Conventions</Link> but weak in <Link href="/naplan/numeracy" style={{ color: "#7F77DD", fontWeight: 600 }}>Numeracy</Link> should spend most of their preparation time on Numeracy, specifically on the sub-domain where the gap is largest. Generic practice papers spread time evenly across all domains, which is inefficient if the gaps are concentrated in one area.</p>
        <InPostCTA />
      </div>
    </BlogLayout>
  );
}


// ============================================================
// POST 3: The problem with generic NAPLAN prep (~680 words)
// ============================================================

const BLOG_GENERIC_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The problem with generic NAPLAN prep",
  "description": "Most NAPLAN prep gives children more questions. ClassUp gives them the right questions - the ones that target the exact skill they got wrong.",
  "author": { "@type": "Person", "name": "Rahul Tabeck" },
  "publisher": { "@type": "Organization", "name": "ClassUp", "url": "https://classup.com.au" },
  "url": "https://classup.com.au/blog/the-problem-with-generic-naplan-prep",
  "datePublished": "2025-02-15",
  "dateModified": "2026-04-29",
  "wordCount": 680,
  "inLanguage": "en-AU"
};
export function BlogPostGenericPrep() {
  const post = BLOG_POSTS.find((p) => p.slug === "the-problem-with-generic-naplan-prep")!;
  return (
    <BlogLayout post={post}>
      <SEO
        title="The problem with generic NAPLAN prep - ClassUp Blog"
        description="Most NAPLAN prep gives children more questions. ClassUp gives them the right questions - the ones that target the exact skill they got wrong."
        canonicalPath="/blog/the-problem-with-generic-naplan-prep"
        schemaMarkup={BLOG_GENERIC_SCHEMA}
      />
      <div className="blog-body">
        <p>The core problem with most NAPLAN preparation products is not that they are low quality. It is that they are generic. They give every child the same questions in the same order, regardless of what that child already knows and what they do not. That approach wastes most of the time available for preparation.</p>

        <h2>The coverage problem</h2>
        <p>A generic NAPLAN practice paper covers all skills roughly equally across all domains. If your child is solid on 80 per cent of the content and weak on 20 per cent, a generic practice paper spends 80 per cent of the session on things they already know. That is not practice. That is confirmation of existing knowledge, which has limited value.</p>
        <p>Targeted practice identifies the 20 per cent that is weak and works on exactly that. The same amount of time produces substantially more improvement on the skills that actually need work. This is not a new idea: it is the basic principle behind deliberate practice, which has been studied extensively in skill acquisition research. The insight is simple: time spent practising skills you already have is far less valuable than time spent on skills you do not yet have.</p>

        <h2>The feedback problem</h2>
        <p>Generic practice papers show you whether your child got the answer right or wrong. They do not tell you why they got it wrong. And the "why" is the only thing that matters for fixing it.</p>
        <p>Consider a child who gets a place value question wrong. There are several distinct reasons this might happen: reading the digit instead of its positional value, confusing the hundreds and thousands columns, misreading the question stem, or a simple arithmetic slip. Each of these requires a different explanation and a different follow-up question. Generic feedback, "incorrect, the answer is C", does not help with any of them. It tells the parent and child that something went wrong without giving them any information about what to do next.</p>
        <p>Specific feedback names the reasoning error. "You identified the digit in the thousands column correctly, but you gave its face value rather than its place value" is actionable. "Incorrect" is not.</p>

        <h2>The repetition problem</h2>
        <p>Most practice products, when a child gets something wrong, give them the same question again or a very similar one. This does not work as well as it appears to. A child who got a question wrong once will often get it wrong again, not because they do not understand the skill, but because they have partially memorised the wrong reasoning. Repeating the same question reinforces the error pattern.</p>
        <p>Effective practice gives a different question on the same skill. This forces genuine understanding rather than answer memorisation. If your child can get three different questions on place value correct in a row, they understand place value. If they can only get the specific question they practised, they have memorised an answer.</p>

        <h2>The pacing problem</h2>
        <p>Generic practice products also tend to move at a fixed pace. A child who grasps a concept quickly is held back by a curriculum that assumes everyone needs the same number of repetitions. A child who needs more time on a particular skill is pushed forward before they are ready. Neither outcome is good.</p>
        <p>Adaptive practice adjusts the pace to the child. When a skill is solid, the coach moves on. When a skill is still shaky, the coach stays with it, using different questions and different explanations until it is genuinely understood.</p>

        <h2>What ClassUp does differently</h2>
        <p>ClassUp starts with a diagnostic to identify the specific skills that are missing. The coach then works on exactly those skills, with different questions each time and specific feedback on what went wrong. No time is wasted on skills that are already solid. No skills that are still shaky are skipped because the curriculum says it is time to move on.</p>
        <p>The result is that a shorter, targeted session produces more measurable improvement than a longer generic one. That is not a claim unique to ClassUp. It is what the research on deliberate practice consistently shows. We have just built a product around it.</p>
        <InPostCTA />
      </div>
    </BlogLayout>
  );
}


// ============================================================
// POST 4: How to read your child's NAPLAN results (~690 words)
// ============================================================

const BLOG_RESULTS_FAQ = [
  {
    question: "When do NAPLAN results come out?",
    answer:
      "In stages. Schools receive preliminary results from late April and full results around June. Individual Student Reports reach parents through schools in early Term 3 — around July.",
  },
  {
    question: "What replaced NAPLAN bands?",
    answer:
      "Four proficiency levels, introduced in 2023: Exceeding, Strong, Developing, and Needs additional support. The old ten-band scale and the old \"national minimum standard\" no longer apply.",
  },
  {
    question: "Is \"Developing\" a bad NAPLAN result?",
    answer:
      "It's not failing — it means your child is still working towards year-level expectations. It's best read as an early, useful signal: there are specific skills to build, and there's most of a school year to build them.",
  },
  {
    question: "Do NAPLAN results affect my child's future?",
    answer:
      "NAPLAN is mainly a progress snapshot for you, the school, and the system. Some schools consider results as one input among many, but it isn't a pass-or-fail exam and it doesn't determine your child's path.",
  },
  {
    question: "How do I find out which specific skills my child needs help with?",
    answer:
      "The NAPLAN report won't tell you — it shows levels, not causes. A skill-by-skill diagnostic (like ClassUp's free one) or a conversation with your child's teacher will get you to the specifics.",
  },
];

const BLOG_RESULTS_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to read your child's NAPLAN results — a parent's honest guide",
    "description": "What the four NAPLAN proficiency levels actually mean, what the report doesn't tell you, and what's genuinely worth doing next.",
    "author": { "@type": "Organization", "name": "ClassUp" },
    "publisher": { "@type": "Organization", "name": "ClassUp", "url": "https://classup.com.au" },
    "url": "https://classup.com.au/blog/how-to-read-naplan-results",
    "datePublished": "2026-07-03",
    "dateModified": "2026-07-03",
    "inLanguage": "en-AU",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: BLOG_RESULTS_FAQ.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  },
];

const BLOG_LINK: React.CSSProperties = { color: "#7F77DD", fontWeight: 600 };

export function BlogPostReadResults() {
  const post = BLOG_POSTS.find((p) => p.slug === "how-to-read-naplan-results")!;
  return (
    <BlogLayout post={post}>
      <SEO
        title="How to Read Your Child's NAPLAN Results (2026 Guide) | ClassUp"
        description="NAPLAN reports arrive early Term 3. What Exceeding, Strong, Developing and Needs additional support actually mean — and what to do next, honestly."
        canonicalPath="/blog/how-to-read-naplan-results"
        schemaMarkup={BLOG_RESULTS_SCHEMA}
      />
      <div className="blog-body">
        <p>Individual Student Reports arrive through schools in early Term 3, and for many parents they raise more questions than they answer. Here's what the report actually says, what it doesn't, and what's genuinely worth doing next.</p>

        <h2>The four proficiency levels (there are no more "bands")</h2>
        <p>Since 2023, NAPLAN results use four proficiency levels instead of the old ten bands. Each of your child's tests — Numeracy, Reading, Writing, and Conventions of Language — gets one of:</p>
        <ul>
          <li><strong>Exceeding</strong> — your child's result is well above what's expected at their year level.</li>
          <li><strong>Strong</strong> — your child's result meets the challenging-but-reasonable expectations for their year level. This is a good result.</li>
          <li><strong>Developing</strong> — your child is working towards the expectations for their year level. Some skills need building.</li>
          <li><strong>Needs additional support</strong> — your child's result suggests they're not yet meeting year-level expectations and would benefit from targeted help.</li>
        </ul>
        <p>Two things parents often misread. First, "Strong" is not second place — it means your child is where they should be. Second, "Developing" is not failing — it's a signal, arriving early enough in the year to act on. For a full breakdown of each level and how to read the report, see <Link href="/naplan/proficiency-levels-explained" style={BLOG_LINK}>proficiency levels explained</Link>.</p>

        <h2>What the report shows</h2>
        <p>Your child's report shows their result as a marker on a scale for each test area, positioned against the proficiency levels, along with the national average for their year level. Some versions also show the middle range of students. It's a snapshot of one test sat in March — a useful one, but one data point, not a verdict. For a plain-English look at what each test measures, see <Link href="/blog/what-naplan-actually-tests" style={BLOG_LINK}>what NAPLAN actually tests</Link>.</p>

        <h2>What NAPLAN results don't tell you</h2>
        <p>This is the part most prep companies won't say. The report tells you the level, not the cause. "Developing" in numeracy doesn't tell you whether the problem is fractions, multi-step word problems, or reading the questions too quickly. Two children with identical results can have completely different gaps. The report also can't tell you about effort, confidence, a bad night's sleep, or a child who rushes. Treat it as a flag, not a diagnosis.</p>

        <h2>What to do for each level — honestly</h2>
        <ul>
          <li><strong>Exceeding:</strong> celebrate it, then keep them stretched. Boredom is the risk, not gaps.</li>
          <li><strong>Strong:</strong> your child is on track. If you do anything, target the one or two areas where the school report or their teacher says they wobble — not a blanket program.</li>
          <li><strong>Developing:</strong> this is the level where targeted help pays off most. Find the specific gaps and work on those, in short sessions, well before next March. Avoid the panic-buy of generic worksheet packs — practising everything is practising nothing.</li>
          <li><strong>Needs additional support:</strong> talk to your child's teacher first — they see your child daily and the school may already have support in motion. Then build a simple, specific plan around the actual gaps. Progress at this level comes from precision and consistency, not volume.</li>
        </ul>
        <p>Whichever level your child sits at, the year-level hubs walk through preparation in context — <Link href="/naplan-year-5" style={BLOG_LINK}>Year 5 NAPLAN</Link> and <Link href="/naplan-year-7" style={BLOG_LINK}>Year 7 NAPLAN</Link>.</p>

        <h2>The question the report can't answer — "which gaps?"</h2>
        <p>Whatever the level, the useful next step is the same: find out precisely where your child stands, skill by skill. That's what ClassUp's free diagnostic does — it maps your child's <Link href="/naplan-year-5-numeracy" style={BLOG_LINK}>numeracy</Link>, reading, and language conventions skills and gives you an honest report: what's solid, what's wobbly, and what to work on first. No inflated promises, no green-tick theatre. If your child is struggling with something, we tell you — because that's the whole point.</p>
        <InPostCTA />

        <h2>Frequently asked questions</h2>
        {BLOG_RESULTS_FAQ.map((item) => (
          <React.Fragment key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </React.Fragment>
        ))}

        <h2>See exactly where your child stands — free.</h2>
        <p>An honest, skill-by-skill diagnostic across numeracy, reading and language conventions. About 30 minutes, and the report tells you the truth.</p>
        <InPostCTA />
      </div>
    </BlogLayout>
  );
}


// ============================================================
// POST 5: Luna vs Leo (~660 words)
// ============================================================

const BLOG_LUNA_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Luna vs Leo - which ClassUp coach is right for your child?",
  "description": "Luna coaches Year 5. Leo coaches Year 7. Here is how they differ and how to choose.",
  "author": { "@type": "Person", "name": "Rahul Tabeck" },
  "publisher": { "@type": "Organization", "name": "ClassUp", "url": "https://classup.com.au" },
  "url": "https://classup.com.au/blog/luna-vs-leo",
  "datePublished": "2025-03-15",
  "dateModified": "2026-04-29",
  "wordCount": 660,
  "inLanguage": "en-AU"
};
export function BlogPostLunaVsLeo() {
  const post = BLOG_POSTS.find((p) => p.slug === "luna-vs-leo")!;
  return (
    <BlogLayout post={post}>
      <SEO
        title="Luna vs Leo - which ClassUp coach is right for your child? - ClassUp Blog"
        description="Luna coaches Year 5. Leo coaches Year 7. Here is how they differ, what each one focuses on, and how to choose."
        canonicalPath="/blog/luna-vs-leo"
        schemaMarkup={BLOG_LUNA_SCHEMA}
      />
      <div className="blog-body">
        <p>ClassUp has two coaches: Luna and Leo. They cover the same NAPLAN content, use the same question bank, and are built on the same coaching methodology. The difference is in their style, and for some children, style is the difference between showing up to a session and finding a reason not to.</p>

        <h2>Luna</h2>
        <p>Luna is methodical and warm. She explains every mistake in plain English, not just "wrong", but exactly where the thinking broke down and why a different approach would work. She never rushes. She never repeats the same question. When a child gets something wrong, she moves to a different question on the same skill, using a different context or a different number, until the underlying concept is solid rather than the specific answer memorised.</p>
        <p>Luna is particularly effective for children who get anxious about making mistakes. Her tone does not change based on how many times a child gets something wrong. She treats the fifth incorrect attempt the same way she treats the first: as information about where the gap is, not as a reflection of the child's ability. For children who have started to believe they are "bad at maths" or "bad at writing", this consistency matters more than it might appear.</p>

        <h3>Who tends to do well with Luna</h3>
        <p>Children who prefer to understand the reason behind an answer before moving on. Children who find fast-paced sessions stressful. Children who have had negative experiences with tutors or teachers who showed frustration when they did not understand something quickly. Children who are in <Link href="/naplan/year-5" style={{ color: "#7F77DD", fontWeight: 600 }}>Year 5</Link> and still building confidence in the core skills.</p>

        <h2>Leo</h2>
        <p>Leo is direct and energetic. He names mistakes quickly, explains concisely, and moves forward. He celebrates when your child gets something right, specifically rather than generically. He keeps the session moving so it never feels like homework. His explanations are shorter than Luna's, which suits children who find long explanations frustrating or who already have a partial understanding and just need the gap identified.</p>
        <p>Leo is particularly effective for children who get bored easily or who find slower-paced sessions demotivating. He frames each correct answer as a genuine win and each mistake as a puzzle to solve rather than a failure to avoid. For children who are competitive or who respond well to a sense of momentum, Leo's style tends to produce more consistent session attendance.</p>

        <h3>Who tends to do well with Leo</h3>
        <p>Children who prefer to get an answer and move on rather than dwell on explanations. Children who find slower sessions frustrating. Children who are in <Link href="/naplan/year-7" style={{ color: "#7F77DD", fontWeight: 600 }}>Year 7</Link> and already have a reasonable foundation but need to sharpen specific skills. Children who are motivated by a sense of progress and forward movement.</p>

        <h2>How to help your child choose</h2>
        <p>Ask your child a simple question: "Do you prefer someone who explains things step by step, or someone who tells you quickly and moves on?" Most children know the answer immediately, and the answer is usually reliable.</p>
        <p>If they are not sure, they can try both. ClassUp lets children switch coaches at any time, with no fee and no limit on the number of switches. The diagnostic results and progress history carry across, so switching coaches does not mean starting again.</p>

        <h2>The honest answer</h2>
        <p>The coach matters less than the consistency of practice. Both Luna and Leo are effective. The research on skill acquisition is clear that the most important variable is not the style of instruction but the frequency and quality of practice.</p>
        <p>The best coach is the one your child will actually show up for, four times a week, for the eight to twelve weeks before NAPLAN. Read more about <Link href="/coaches/luna" style={{ color: "#7F77DD", fontWeight: 600 }}>Luna</Link> and <Link href="/coaches/leo" style={{ color: "#7F77DD", fontWeight: 600 }}>Leo</Link> on their coach pages.</p>
        <p>If your child is indifferent between the two, start with Luna. If they find her too slow after a week, switch to Leo. The goal is to find the environment where your child does their best work, and then to make sure they show up to it consistently.</p>
        <InPostCTA />
      </div>
    </BlogLayout>
  );
}


// ============================================================
// POST 6: NAPLAN anxiety - what parents can do (~710 words)
// ============================================================

const BLOG_ANXIETY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "NAPLAN anxiety - what parents can do",
  "description": "NAPLAN anxiety is real. Here is what the research says and what parents can do to help without adding pressure.",
  "author": { "@type": "Person", "name": "Rahul Tabeck" },
  "publisher": { "@type": "Organization", "name": "ClassUp", "url": "https://classup.com.au" },
  "url": "https://classup.com.au/blog/naplan-anxiety-what-parents-can-do",
  "datePublished": "2025-04-01",
  "dateModified": "2026-04-29",
  "wordCount": 710,
  "inLanguage": "en-AU"
};
export function BlogPostNAPLANAnxiety() {
  const post = BLOG_POSTS.find((p) => p.slug === "naplan-anxiety-what-parents-can-do")!;
  return (
    <BlogLayout post={post}>
      <SEO
        title="NAPLAN anxiety - what parents can do - ClassUp Blog"
        description="NAPLAN anxiety is real. Here is what the research says about test anxiety in primary school children, and what parents can do to help without adding pressure."
        canonicalPath="/blog/naplan-anxiety-what-parents-can-do"
        schemaMarkup={BLOG_ANXIETY_SCHEMA}
      />
      <div className="blog-body">
        <p>NAPLAN anxiety is real and it is common. Research on test anxiety in Australian primary school children consistently shows that a significant proportion of students experience elevated stress in the weeks before NAPLAN, and that this stress can affect both their performance on the test and their broader relationship with learning. The good news is that the most effective interventions are practical and available to any parent.</p>

        <h2>What makes NAPLAN anxiety worse</h2>

        <h3>Framing NAPLAN as high-stakes</h3>
        <p>Children are sensitive to parental anxiety. If you are worried about the results, they will be too. Framing NAPLAN as "really important" or "this will affect your future" increases anxiety without improving performance. NAPLAN is a useful diagnostic tool, but it is not a school entrance exam and it does not determine your child's educational pathway. Saying this explicitly, and meaning it, reduces the pressure your child feels.</p>

        <h3>Last-minute cramming</h3>
        <p>Intensive practice in the week before NAPLAN increases anxiety and rarely improves results. The skills tested in NAPLAN are built over months, not days. A child who has been practising consistently for eight weeks will not benefit from three extra practice papers in the final week. A child who has not been practising consistently will not close a meaningful gap in seven days. The week before NAPLAN is better spent on sleep, routine, and reassurance than on extra sessions.</p>

        <h3>Comparison with siblings or peers</h3>
        <p>"Your brother got Band 7" or "your friend finished the whole paper" are not motivating statements for most children. They are anxiety-inducing ones. NAPLAN results vary significantly between children for reasons that have nothing to do with effort or intelligence, including the specific skills that happen to be tested in a given year and the particular gaps a child has at that point in time. Comparison adds pressure without adding useful information.</p>

        <h2>What actually helps</h2>

        <h3>Preparation, started early</h3>
        <p>The most effective way to reduce NAPLAN anxiety is genuine preparation, started well before the test. Children who feel prepared are less anxious. This is not a circular argument: it reflects the well-established relationship between competence and confidence. A child who has practised <Link href="/naplan/numeracy" style={{ color: "#7F77DD", fontWeight: 600 }}>Numeracy</Link> questions until they are automatic will not feel anxious about a numeracy question on the test. A child who has never practised them will.</p>
        <p>The key word is "early". Preparation that starts in Term 1 for a March test gives eight to twelve weeks of consistent practice, which is enough time to close most specific skill gaps. Preparation that starts in the week before the test is too late to build competence and too late to reduce anxiety.</p>

        <h3>Normalising mistakes during practice</h3>
        <p>Children who are afraid of making mistakes are more anxious and learn less efficiently. If your child's practice sessions at home involve frustration when they get something wrong, that frustration is teaching them that mistakes are bad, which increases anxiety and reduces the willingness to attempt difficult questions.</p>
        <p>Explicitly telling your child that mistakes are how learning happens, and demonstrating that you mean it by staying calm when they get something wrong, reduces anxiety and improves the quality of practice. This is harder than it sounds, particularly if you are anxious about the results yourself.</p>

        <h3>Keeping perspective as a parent</h3>
        <p>NAPLAN is one data point at one moment in time. It does not define your child's intelligence, potential, or future. It measures specific, learnable skills in four domains. A low result means those skills need more practice. It does not mean anything broader than that, and saying so to your child, clearly and sincerely, is one of the most useful things you can do.</p>

        <h3>Prioritising sleep and routine in the final week</h3>
        <p>A well-rested child performs better on any cognitive task than an exhausted one. In the week before NAPLAN, prioritise consistent sleep and a calm morning routine over extra practice sessions. The marginal benefit of one more practice paper is far smaller than the benefit of your child arriving at the test rested and calm.</p>

        <h2>A note on ClassUp and anxiety</h2>
        <p>ClassUp is designed to reduce anxiety through preparation. The diagnostic tells your child exactly where they stand before the test, which removes the uncertainty that drives a lot of pre-NAPLAN anxiety. The coaching works on specific gaps across <Link href="/naplan/year-5" style={{ color: "#7F77DD", fontWeight: 600 }}>Year 5</Link> and <Link href="/naplan/year-7" style={{ color: "#7F77DD", fontWeight: 600 }}>Year 7</Link>, so your child can see their own improvement over time. Luna's coaching style is specifically designed to normalise mistakes as part of learning rather than as failures to avoid.</p>
        <p>We are not a silver bullet for test anxiety, and we would not claim to be. But consistent, targeted preparation is the most evidence-based intervention available to parents, and that is what we are built to provide.</p>
        <InPostCTA />
      </div>
    </BlogLayout>
  );
}


// ============================================================
// POST 7: Year 5 maths struggles in Term 2 (~700 words)
// ============================================================

const BLOG_Y5_MATHS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Year 5 maths struggles in Term 2: what to look out for",
  "description": "Term 2 is when Year 5 maths gets harder. Here is what the curriculum introduces, which concepts trip children up most, and what parents can do.",
  "author": { "@type": "Person", "name": "Rahul Tabeck" },
  "publisher": { "@type": "Organization", "name": "ClassUp", "url": "https://classup.com.au" },
  "url": "https://classup.com.au/blog/year-5-maths-struggles-term-2",
  "datePublished": "2026-04-29",
  "dateModified": "2026-04-29",
  "wordCount": 700,
  "inLanguage": "en-AU"
};
export function BlogPostYear5MathsTerm2() {
  const post = BLOG_POSTS.find((p) => p.slug === "year-5-maths-struggles-term-2")!;
  return (
    <BlogLayout post={post}>
      <SEO
        title="Year 5 maths struggles in Term 2: what to look out for - ClassUp Blog"
        description="Term 2 is when Year 5 maths gets harder. Here is what the curriculum introduces, which concepts trip children up most, and what parents can do about it."
        canonicalPath="/blog/year-5-maths-struggles-term-2"
        schemaMarkup={BLOG_Y5_MATHS_SCHEMA}
      />
      <div className="blog-body">
        <p>Term 2 is the point in the school year where Year 5 maths shifts from consolidating what children already know to introducing genuinely new and more demanding concepts. If your child seemed confident in Term 1 but is now coming home frustrated or avoiding maths homework, the curriculum is likely the cause, not their ability.</p>

        <h2>What changes in Term 2</h2>
        <p>The Australian Curriculum for Year 5 Numeracy introduces several concepts in Term 2 that require a solid foundation from earlier years. The most significant are fractions and decimals, multi-step problem solving, and the early stages of algebraic thinking. Each of these builds on skills from Year 3 and Year 4, which means a child who has a small gap from a previous year will often hit a wall when the new content arrives.</p>
        <p>Fractions in particular are a common sticking point. In Year 3 and Year 4, fractions are introduced as parts of a whole using simple denominators. In Year 5, children are expected to compare, order, and add fractions with different denominators, and to connect fractions to decimals and percentages. This is a significant conceptual jump, and it happens quickly.</p>

        <h3>Fractions and decimals</h3>
        <p>The most common mistake at this stage is treating the numerator and denominator as separate whole numbers. A child who adds one-half and one-third by adding 1+1 and 2+3 to get two-fifths has not understood that fractions represent a relationship, not two independent numbers. This error is extremely common and does not resolve itself without targeted explanation.</p>
        <p>Connecting fractions to decimals adds another layer. Children who understand that one-half equals 0.5 often struggle to explain why, or to extend that understanding to less familiar fractions like three-eighths. The connection between the fraction notation and the decimal notation needs to be made explicit, not assumed.</p>

        <h3>Multi-step problem solving</h3>
        <p>Term 2 also introduces problems that require two or three steps to solve, rather than the single-operation questions that dominate earlier years. The challenge here is not always the maths itself, it is knowing which operations to apply and in what order. Children who are strong at arithmetic but weak at reading comprehension often struggle with multi-step problems because they misread what the question is asking.</p>
        <p>If your child gets the arithmetic right but the answer wrong, the problem is usually in how they are reading the question. Reading the problem aloud and identifying what is being asked before attempting any calculation is a simple strategy that helps most children at this stage.</p>

        <h2>Signs your child is struggling</h2>
        <p>The signs are usually behavioural before they are academic. These are not signs of laziness. They are signs of a child who does not yet have the tools to approach the problem confidently.</p>
        <ul>
          <li>Avoiding maths homework or rushing through it without checking</li>
          <li>Becoming frustrated quickly when they cannot get the answer immediately</li>
          <li>Getting arithmetic questions right but word problems wrong</li>
          <li>Being able to do a skill in isolation but not in a mixed exercise</li>
          <li>Being unable to explain their reasoning even when they get the answer correct</li>
        </ul>
        <p>The last one is particularly telling: if your child cannot explain how they got an answer, they are likely using a memorised procedure rather than genuine understanding, which breaks down as soon as the question changes slightly.</p>

        <h2>What parents can do</h2>
        <p>The most useful thing you can do at home is not to reteach the content, but to ask your child to explain their thinking. "How did you get that?" is more useful than "let me show you how to do it." If they can explain it, they understand it. If they cannot, the gap is in the reasoning, not the arithmetic.</p>
        <p>For fractions specifically, using physical objects, dividing a piece of paper, cutting an apple, drawing a number line, makes the abstract concrete. Children who struggle with fraction notation often understand fractions perfectly well when they can see them. The notation is the barrier, not the concept.</p>
        <p>If the gaps are consistent across multiple topics, targeted practice that identifies the specific skill that is missing is more efficient than working through a textbook from the beginning. The goal is to find the exact point where the understanding breaks down and work from there, not to re-cover everything your child has already learned.</p>
        <InPostCTA />
      </div>
    </BlogLayout>
  );
}


// ============================================================
// POST 8: How to help your child catch up in reading (~690 words)
// ============================================================

const BLOG_READING_CATCHUP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to help your reluctant reader catch up without the battle",
  "description": "Comprehension strategies for reluctant readers aged 10 to 12. What actually works and what makes it worse.",
  "author": { "@type": "Person", "name": "Rahul Tabeck" },
  "publisher": { "@type": "Organization", "name": "ClassUp", "url": "https://classup.com.au" },
  "url": "https://classup.com.au/blog/help-child-catch-up-reading",
  "datePublished": "2026-04-29",
  "dateModified": "2026-04-29",
  "wordCount": 690,
  "inLanguage": "en-AU"
};
export function BlogPostReadingCatchup() {
  const post = BLOG_POSTS.find((p) => p.slug === "help-child-catch-up-reading")!;
  return (
    <BlogLayout post={post}>
      <SEO
        title="How to help your reluctant reader catch up without the battle - ClassUp Blog"
        description="Comprehension strategies for reluctant readers aged 10 to 12. What actually works and what makes it worse."
        canonicalPath="/blog/help-child-catch-up-reading"
        schemaMarkup={BLOG_READING_CATCHUP_SCHEMA}
      />
      <div className="blog-body">
        <p>If your child is a reluctant reader, you know the battle. They avoid books, they rush through reading homework, they claim they "don't understand" before they have even tried. If your child is behind in reading at age 10 to 12, they are usually not behind in decoding - they can read the words. The gap is in comprehension: understanding what the words mean together, inferring what is not stated, and thinking critically about what they have read. These are learnable skills, and they respond well to specific, low-pressure practice at home.</p>

        <h2>Why comprehension gaps are different from decoding gaps</h2>
        <p>A child who cannot decode words needs phonics intervention, which is a specific and well-researched area. A child who can decode fluently but struggles to answer comprehension questions has a different problem. They can read the text, but they are not processing it at the level the questions require.</p>
        <p>Comprehension at this age is tested across three levels. The first is literal: the answer is in the text and the child needs to find it. The second is inferential: the answer requires connecting ideas from different parts of the text, or reading between the lines. The third is evaluative: the child needs to think about the author's purpose, the effect of specific word choices, or the reliability of the information presented.</p>
        <p>Most children who are behind in reading are fine at the literal level and struggle at the inferential and evaluative levels. This is important because it means the intervention needs to focus on higher-order thinking, not on reading more text.</p>

        <h2>What makes it worse</h2>
        <p>Forcing a child to read more when they are already resistant to reading is one of the least effective interventions. It increases the association between reading and conflict, which makes the child less likely to read voluntarily, which widens the gap over time.</p>
        <p>Choosing texts that are too difficult has a similar effect. A child who is reading below their year level does not benefit from being given year-level texts and told to try harder. They benefit from texts that are slightly below their current level, where they can practise comprehension strategies without the cognitive load of struggling with the vocabulary at the same time.</p>
        <p>Asking "did you understand it?" after reading is not useful. Most children will say yes regardless of whether they understood it, because they do not want to be wrong. Asking specific questions about the text is more useful, and asking them to predict what will happen next before they read on is more useful still.</p>

        <h2>Strategies that work at home</h2>
        <ul>
          <li><strong>Read together and think aloud:</strong> Reading a text together and thinking aloud about what you are inferring is one of the most effective things a parent can do. "I wonder why the character did that" or "I think the author is trying to make us feel worried here, because of the way they described the weather" models the kind of thinking that comprehension questions require. Children who see this modelled consistently start to do it themselves.</li>
          <li><strong>Ask questions before, during, and after reading:</strong> Before reading: "What do you think this will be about based on the title?" During reading: "Why do you think that happened?" After reading: "What was the most important idea in that section?" These questions are not tests. They are invitations to think, and the goal is to make thinking about text a habit rather than an assessment.</li>
          <li><strong>Use non-fiction texts:</strong> Many children who resist fiction are happy to read about topics they are interested in: sport, animals, history, technology. Non-fiction comprehension uses the same skills as fiction comprehension. If your child will engage with a magazine article about football but not with a novel, use the football article. The skill transfers.</li>
        </ul>

        <h2>How long does it take</h2>
        <p>Comprehension gaps at this age typically close in two to four school terms with consistent, targeted practice. The key word is consistent: fifteen to twenty minutes of focused reading with discussion three or four times a week produces more improvement than an hour of silent reading once a week.</p>
        <p>The goal is not to make your child love reading, though that sometimes happens. The goal is to give them the tools to understand what they read, which is a skill they will use in every subject for the rest of their education.</p>
        <InPostCTA />
      </div>
    </BlogLayout>
  );
}


// ============================================================
// POST 9: The Year 7 transition - high school maths shock (~710 words)
// ============================================================

const BLOG_Y7_MATHS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Year 7 transition: high school maths shock",
  "description": "The jump from primary to secondary maths is real. Here is what changes, why children struggle, and how parents can support the transition.",
  "author": { "@type": "Person", "name": "Rahul Tabeck" },
  "publisher": { "@type": "Organization", "name": "ClassUp", "url": "https://classup.com.au" },
  "url": "https://classup.com.au/blog/year-7-high-school-maths-shock",
  "datePublished": "2026-04-29",
  "dateModified": "2026-04-29",
  "wordCount": 710,
  "inLanguage": "en-AU"
};
export function BlogPostYear7MathsShock() {
  const post = BLOG_POSTS.find((p) => p.slug === "year-7-high-school-maths-shock")!;
  return (
    <BlogLayout post={post}>
      <SEO
        title="The Year 7 transition: high school maths shock - ClassUp Blog"
        description="The jump from primary to secondary maths is real. Here is what changes in the curriculum, why children struggle, and how parents can support the transition without adding pressure."
        canonicalPath="/blog/year-7-high-school-maths-shock"
        schemaMarkup={BLOG_Y7_MATHS_SCHEMA}
      />
      <div className="blog-body">
        <p>The jump from primary school maths to secondary school maths is one of the most significant curriculum transitions in the Australian school system. Children who were confident in Year 6 often find themselves struggling in Year 7, not because they have forgotten what they learned, but because the pace, the abstraction, and the expectations have all changed at once.</p>

        <h2>What actually changes</h2>
        <p>In primary school, maths is largely concrete. Problems involve real objects, familiar contexts, and single operations. The curriculum moves at a pace that allows most children to consolidate each concept before the next one arrives. Teachers have more time to identify individual gaps and address them.</p>
        <p>In secondary school, maths becomes abstract much faster. Algebra, which most children encounter seriously for the first time in Year 7, requires thinking about unknown quantities and relationships rather than specific numbers. The pace of the curriculum increases significantly: a secondary maths class might cover in a week what a primary class covered in a term. And the class sizes are often larger, which means less individual attention when a child falls behind.</p>

        <h3>The algebra wall</h3>
        <p>Algebra is the concept that causes the most difficulty in Year 7. The transition from arithmetic to algebra requires a shift in thinking that many children find genuinely difficult.</p>
        <blockquote>
          <p>In arithmetic, the equals sign means "the answer is". In algebra, it means "these two things are the same".</p>
        </blockquote>
        <p>That is a subtle but important difference, and children who have not made that shift will struggle with every algebraic concept that follows.</p>
        <p>The most common algebraic errors in Year 7 are: treating variables as labels rather than unknowns, applying arithmetic rules to algebraic expressions incorrectly, and struggling with the order of operations when expressions become more complex. Each of these is fixable with targeted practice, but they need to be identified specifically rather than addressed with general "more algebra" practice.</p>

        <h3>Negative numbers</h3>
        <p>Negative numbers are another Year 7 sticking point. Most children have encountered negative numbers informally, temperature, debt, floors below ground level, but Year 7 requires them to operate with negative numbers formally: adding, subtracting, multiplying, and dividing. The rules for multiplying negative numbers in particular are counterintuitive, and children who try to apply their arithmetic intuition rather than learning the rules explicitly will make consistent errors.</p>

        <h2>Why the transition is harder than it looks</h2>
        <p>The difficulty of the Year 7 maths transition is often underestimated because children who struggled in primary school are expected to struggle, and children who were strong in primary school are expected to be fine. Neither assumption is reliable.</p>
        <p>A child who was strong in primary school maths may have been strong because they are good at following procedures. Secondary school maths requires understanding why procedures work, not just how to apply them. A child who has been successful through procedural fluency alone will often hit a wall when the procedures become more complex and the underlying concepts are required.</p>
        <p>A child who struggled in primary school may have specific, addressable gaps rather than a general weakness in maths. Identifying those gaps specifically, rather than assuming a general inability, is the more useful approach.</p>

        <h2>How parents can support the transition</h2>
        <p>The most important thing parents can do is normalise the difficulty. The Year 7 maths transition is hard for most children. It is not a sign that your child is not capable of secondary school maths. It is a sign that the curriculum has changed significantly and they need time to adjust.</p>
        <p>Practically, the most useful support is to help your child identify which specific concepts they are struggling with, rather than which topics they dislike. "I don't get algebra" is not actionable. "I don't understand why you can't just add the numbers when there's a letter in the equation" is. The more specific the gap, the more efficiently it can be addressed.</p>
        <p>If your child is in <Link href="/naplan/year-7" style={{ color: "#7F77DD", fontWeight: 600 }}>Year 7</Link> and struggling with the pace of the curriculum, the gap is almost always in one or two specific areas rather than across the board. Finding those areas and working on them specifically, with a coach who can explain the concept in a different way when the first explanation does not land, is more efficient than working through the whole curriculum again from the beginning.</p>
        <p>The transition is real, and it is hard. But it is also navigable, and most children who struggle in the first term of Year 7 find their footing by the end of the year if they get the right support early enough.</p>
        <InPostCTA />
      </div>
    </BlogLayout>
  );
}
