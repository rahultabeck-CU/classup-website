import React, { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { toast } from "sonner";
import { DIAGNOSTIC_URL, type SampleQuestion } from "@/lib/classup";

// ============================================================
// SAMPLE QUESTION CARD
// ============================================================
export function SampleQuestionCard({ sample }: { sample: SampleQuestion }) {
  return (
    <div className="cu-question-card">
      <div className="cu-eyebrow mb-3">
        FROM OUR QUESTION BANK · Year {sample.year} · {sample.domain}
      </div>
      {sample.acara && (
        <div style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>
          {sample.acara}
        </div>
      )}
      {sample.passage && (
        <div
          style={{
            background: "#F5F2EC",
            borderRadius: 12,
            padding: "14px 18px",
            marginBottom: 16,
            borderLeft: "3px solid #7F77DD",
          }}
        >
          <div style={{ fontSize: 11, fontWeight: 700, color: "#7F77DD", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
            PASSAGE EXCERPT
          </div>
          {sample.passage.split("\n\n").map((para, i) => (
            <p key={i} style={{ fontSize: 14, lineHeight: 1.7, color: "#444", marginBottom: i < sample.passage!.split("\n\n").length - 1 ? 10 : 0 }}>
              {para}
            </p>
          ))}
          {sample.passageNote && (
            <a
              href={DIAGNOSTIC_URL}
              style={{ fontSize: 13, color: "#7F77DD", fontWeight: 600, marginTop: 8, display: "inline-block" }}
            >
              {sample.passageNote} →
            </a>
          )}
        </div>
      )}
      <p style={{ fontSize: 16, fontWeight: 700, color: "#1A1A1A", marginBottom: 16, lineHeight: 1.5 }}>
        {sample.question.split("\n").map((line, i) => (
          <span key={i}>{line}{i < sample.question.split("\n").length - 1 && <br />}</span>
        ))}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
        {sample.options.map((opt) => (
          <div
            key={opt.letter}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 14px",
              borderRadius: 10,
              border: opt.letter === sample.correct ? "1.5px solid #639922" : "1px solid #E8E4D8",
              background: opt.letter === sample.correct ? "#EAF3DE" : "#FAFAF8",
            }}
          >
            <span
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: opt.letter === sample.correct ? "#639922" : "#E8E4D8",
                color: opt.letter === sample.correct ? "#FFF" : "#888",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {opt.letter}
            </span>
            <span style={{ fontSize: 14, color: "#1A1A1A", fontWeight: opt.letter === sample.correct ? 600 : 400 }}>
              {opt.text}
            </span>
            {opt.letter === sample.correct && (
              <span style={{ marginLeft: "auto", fontSize: 12, color: "#4A7515", fontWeight: 700 }}>✓</span>
            )}
          </div>
        ))}
      </div>
      <div className="cu-common-mistake">
        <div style={{ fontSize: 11, fontWeight: 700, color: "#B36B0A", textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>
          ⚠ THE COMMON MISTAKE
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.65, color: "#444", margin: 0 }}>
          {sample.commonMistake}
        </p>
      </div>
    </div>
  );
}

// ============================================================
// COACH AVATAR
// ============================================================
const COACH_IMAGES: Record<"luna" | "leo", string> = {
  luna: "/manus-storage/luna-avatar_5949aa3a.png",
  leo: "/manus-storage/leo-avatar_2aa1a13e.png",
};

export function CoachAvatar({
  coach,
  size = 96,
}: {
  coach: "luna" | "leo";
  size?: number;
}) {
  const borderR = Math.round(size * 0.25);
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: borderR,
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
        background: coach === "luna" ? "#E8E4F8" : "#EAF2D7",
      }}
    >
      <img
        src={COACH_IMAGES[coach]}
        alt={coach === "luna" ? "Luna, your reading and writing coach" : "Leo, your numeracy coach"}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top center",
          display: "block",
        }}
      />
    </div>
  );
}

// ============================================================
// FOUNDER AVATAR
// ============================================================
export function FounderAvatar({
  initial,
  size = 64,
  colour = "#7F77DD",
}: {
  initial: string;
  size?: number;
  colour?: string;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: colour,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: size * 0.45,
          fontWeight: 700,
          color: "#FFF",
          lineHeight: 1,
        }}
      >
        {initial}
      </span>
    </div>
  );
}

// ============================================================
// TRUST STRIP
// ============================================================
export function TrustStrip() {
  return (
    <div className="cu-trust-strip">
      <span>🇦🇺 Built in Melbourne</span>
      <span style={{ color: "#D3D1C7" }}>·</span>
      <span>ACARA-aligned content</span>
      <span style={{ color: "#D3D1C7" }}>·</span>
      <span>Australian-hosted data</span>
      <span style={{ color: "#D3D1C7" }}>·</span>
      <span>By parents, for Australian families</span>
    </div>
  );
}

// ============================================================
// EMAIL CAPTURE
// ============================================================
export function EmailCapture({ sourcePage }: { sourcePage: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="cu-email-capture">
      <div className="cu-eyebrow mb-2">FREE RESOURCE</div>
      <h3 className="cu-h3 mb-2">Get the honest NAPLAN parent guide.</h3>
      <p style={{ fontSize: 15, color: "#444", marginBottom: 20 }}>
        8-page PDF. Year 5 and Year 7 specifics. No spam. Unsubscribe with one click.
      </p>
      {submitted ? (
        <div
          style={{
            background: "#EAF3DE",
            borderRadius: 12,
            padding: "16px 20px",
            color: "#4A7515",
            fontWeight: 600,
            fontSize: 15,
          }}
        >
          Sent. Check your inbox.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            aria-label="Email address"
            style={{
              flex: "1 1 220px",
              padding: "12px 16px",
              borderRadius: 999,
              border: "1px solid #D3D1C7",
              fontSize: 14,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              outline: "none",
              background: "#FFF",
            }}
          />
          <button
            type="submit"
            disabled={loading}
            className="cu-btn-primary"
            style={{ flexShrink: 0 }}
          >
            {loading ? "Sending..." : "Send me the guide"}
          </button>
        </form>
      )}
      <p style={{ fontSize: 12, color: "#888", marginTop: 10 }}>
        We'll email it within a minute. Hosted in Australia.
      </p>
    </div>
  );
}

// ============================================================
// STICKY CTA BAR
// ============================================================
export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`cu-sticky-cta${visible ? " visible" : ""}`}
      role="complementary"
      aria-label="Start free diagnostic"
    >
      <span style={{ fontSize: 14, fontWeight: 600 }}>
        Free diagnostic for Year 5 and Year 7
      </span>
      <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ background: "#FFF", color: "#1A1A1A" }}>
        Start free diagnostic →
      </a>
    </div>
  );
}

// ============================================================
// ASK LUNA FLOATING BUTTON
// ============================================================
export function AskLunaButton() {
  return (
    <button
      className="cu-ask-luna"
      onClick={() => toast("Ask Luna is coming soon.", {
        description: "Start your free diagnostic to meet Luna and Leo in person.",
        action: {
          label: "Start free diagnostic",
          onClick: () => window.open(DIAGNOSTIC_URL, "_blank"),
        },
        duration: 6000,
      })}
      aria-label="Ask Luna — coaching assistant"
    >
      <span style={{ fontSize: 16 }}>💬</span>
      Ask Luna
    </button>
  );
}

// ============================================================
// FAQ ACCORDION
// ============================================================
export function FAQAccordion({
  items,
  defaultOpenIndexes,
}: {
  items: { question: string; answer: string }[];
  defaultOpenIndexes?: number[];
}) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(
    new Set(defaultOpenIndexes ?? [0])
  );

  const toggle = (i: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  };

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="cu-faq-item">
          <button
            onClick={() => toggle(i)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "18px 0",
              background: "none",
              border: "none",
              textAlign: "left",
              cursor: "pointer",
              gap: 16,
            }}
            aria-expanded={openIndexes.has(i)}
          >
            <span
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#1A1A1A",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                lineHeight: 1.4,
              }}
            >
              {item.question}
            </span>
            <span
              style={{
                flexShrink: 0,
                width: 24,
                height: 24,
                borderRadius: "50%",
                border: "1.5px solid #D3D1C7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                color: "#888",
                transition: "transform 0.2s ease",
                transform: openIndexes.has(i) ? "rotate(45deg)" : "none",
              }}
            >
              +
            </span>
          </button>
          {openIndexes.has(i) && (
            <div
              style={{
                paddingBottom: 18,
                fontSize: 14,
                lineHeight: 1.7,
                color: "#444",
              }}
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ============================================================
// FINAL CTA BANNER
// ============================================================
export function FinalCTABanner({
  headline,
  subline,
}: {
  headline: React.ReactNode;
  subline?: string;
}) {
  return (
    <section
      style={{
        background: "#F5F2EC",
        padding: "64px 0",
        textAlign: "center",
      }}
    >
      <div className="container" style={{ maxWidth: 640 }}>
        <div className="cu-eyebrow mb-4">START FOR FREE</div>
        <h2 className="cu-h2 mb-4">{headline}</h2>
        {subline && (
          <p style={{ fontSize: 15, color: "#444", marginBottom: 28 }}>{subline}</p>
        )}
        <a href={DIAGNOSTIC_URL} className="cu-btn-primary" style={{ fontSize: 16, padding: "16px 32px" }}>
          Start free diagnostic →
        </a>
        <p style={{ fontSize: 13, color: "#888", marginTop: 14 }}>
          No credit card. 30 minutes. Honest report.
        </p>
      </div>
    </section>
  );
}

// ============================================================
// IN-POST CTA CARD
// ============================================================
export function InPostCTA() {
  return (
    <div
      style={{
        background: "#EEEDFE",
        borderRadius: 16,
        padding: "24px 28px",
        margin: "32px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        flexWrap: "wrap",
      }}
    >
      <div>
        <p style={{ fontSize: 15, fontWeight: 700, color: "#26215C", marginBottom: 4 }}>
          Want to see how your child actually stacks up?
        </p>
        <p style={{ fontSize: 14, color: "#534AB7", margin: 0 }}>
          The diagnostic is free. No card needed.
        </p>
      </div>
      <a href={DIAGNOSTIC_URL} className="cu-btn-primary">
        Start free diagnostic →
      </a>
    </div>
  );
}

// ============================================================
// BREADCRUMB
// ============================================================
export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
      <ol
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          listStyle: "none",
          padding: 0,
          margin: 0,
          fontSize: 12,
          color: "#888",
        }}
      >
        {items.map((item, i) => (
          <li key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {i > 0 && <span>/</span>}
            {item.href ? (
              <Link href={item.href} style={{ color: "#7F77DD", textDecoration: "none", fontWeight: 600 }}>
                {item.label}
              </Link>
            ) : (
              <span style={{ color: "#444" }}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// ============================================================
// WRITING PLACEHOLDER CARD
// ============================================================
export function WritingPlaceholderCard() {
  return (
    <div className="cu-question-card" style={{ textAlign: "center", padding: "32px 28px" }}>
      <div className="cu-eyebrow mb-3">FROM OUR QUESTION BANK · Writing</div>
      <div
        style={{
          background: "#FAEEDA",
          borderRadius: 12,
          padding: "20px 24px",
          display: "inline-block",
        }}
      >
        <p style={{ fontSize: 15, fontWeight: 600, color: "#B36B0A", margin: 0 }}>
          Writing samples coming soon.
        </p>
        <p style={{ fontSize: 14, color: "#B36B0A", marginTop: 6, marginBottom: 0 }}>
          Our Writing coaching is in v1.1 development.
        </p>
      </div>
    </div>
  );
}
