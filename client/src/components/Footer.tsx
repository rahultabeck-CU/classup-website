import React from "react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #E8E4D8",
        padding: "48px 0 32px",
        marginTop: 0,
      }}
    >
      <div className="container" style={{ maxWidth: 1100 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 32,
            marginBottom: 40,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 7,
                  background: "#1A1A1A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 800, color: "#7F77DD" }}>C</span>
              </div>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, fontWeight: 800, color: "#1A1A1A" }}>ClassUp</span>
            </div>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, marginBottom: 12 }}>
              NAPLAN prep that tells you the truth.
            </p>
            <p style={{ fontSize: 12, color: "#888" }}>
              Built in Melbourne by Australian parents.
            </p>
          </div>

          {/* NAPLAN */}
          <div>
            <div className="cu-eyebrow mb-3">NAPLAN</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Link href="/naplan" style={linkStyle}>NAPLAN Overview</Link>
              <Link href="/naplan/year-5" style={linkStyle}>Year 5</Link>
              <Link href="/naplan/year-7" style={linkStyle}>Year 7</Link>
              <Link href="/naplan/numeracy" style={linkStyle}>Numeracy</Link>
              <Link href="/naplan/reading" style={linkStyle}>Reading</Link>
              <Link href="/naplan/language-conventions" style={linkStyle}>Language Conventions</Link>
              <Link href="/naplan/bands-explained" style={linkStyle}>Bands Explained</Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <div className="cu-eyebrow mb-3">PRODUCT</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Link href="/coaches" style={linkStyle}>Meet the Coaches</Link>
              <Link href="/how-it-works" style={linkStyle}>How It Works</Link>
              <Link href="/methodology" style={linkStyle}>Methodology</Link>
              <Link href="/pricing" style={linkStyle}>Pricing</Link>
              <a href="https://app.classup.com.au/diagnostic/start" style={linkStyle}>Free Diagnostic</a>
            </div>
          </div>

          {/* Comparisons */}
          <div>
            <div className="cu-eyebrow mb-3">COMPARISONS</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Link href="/compare/classup-vs-mathletics" style={linkStyle}>ClassUp vs Mathletics</Link>
              <Link href="/compare/classup-vs-reading-eggs" style={linkStyle}>ClassUp vs Reading Eggs</Link>
              <Link href="/compare/classup-vs-kumon" style={linkStyle}>ClassUp vs Kumon</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="cu-eyebrow mb-3">COMPANY</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Link href="/about" style={linkStyle}>About</Link>
              <Link href="/blog" style={linkStyle}>Blog</Link>
              <Link href="/resources" style={linkStyle}>Resources</Link>
              <Link href="/contact" style={linkStyle}>Contact</Link>
              <Link href="/privacy" style={linkStyle}>Privacy Policy</Link>
              <Link href="/terms" style={linkStyle}>Terms of Service</Link>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #E8E4D8",
            paddingTop: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 12, color: "#888" }}>
            © {new Date().getFullYear()} DIVTAB Holdings Pty Ltd · ABN [TBD] · Melbourne, Victoria, Australia
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <Link href="/privacy" style={{ fontSize: 12, color: "#888", textDecoration: "none" }}>Privacy</Link>
            <Link href="/terms" style={{ fontSize: 12, color: "#888", textDecoration: "none" }}>Terms</Link>
            <Link href="/contact" style={{ fontSize: 12, color: "#888", textDecoration: "none" }}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const linkStyle: React.CSSProperties = {
  fontSize: 14,
  color: "#444",
  textDecoration: "none",
  fontWeight: 500,
  lineHeight: 1.4,
};
