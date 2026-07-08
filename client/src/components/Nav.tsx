import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { APP_URL, DIAGNOSTIC_URL, FOUNDERS_CODE } from "@/lib/classup";

// ============================================================
// FOUNDERS BANNER
// ============================================================
export function FoundersBanner() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(FOUNDERS_CODE).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="cu-founders-banner">
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
          maxWidth: 1100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 2,
              color: "#7F77DD",
            }}
          >
            FOUNDERS
          </span>
          <span style={{ fontSize: 13, color: "#CCC" }}>
            Introductory offer: use code{" "}
            <button
              onClick={handleCopy}
              style={{
                fontFamily: "monospace",
                fontSize: 12,
                fontWeight: 700,
                background: "#2A2A2A",
                color: "#7F77DD",
                border: "1px solid #444",
                borderRadius: 6,
                padding: "2px 8px",
                cursor: "pointer",
              }}
              aria-label="Copy founders code"
            >
              {copied ? "Copied!" : FOUNDERS_CODE}
            </button>{" "}
            for $29/month for your first 6 months.
          </span>
        </div>
        <a
          href={DIAGNOSTIC_URL}
          className="founders-cta-link"
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "#7F77DD",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Start free diagnostic →
        </a>
      </div>
    </div>
  );
}

// ============================================================
// TOP NAV
// ============================================================
const NAV_LINKS = [
  { label: "NAPLAN", href: "/naplan" },
  { label: "Coaches", href: "/coaches" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Blog", href: "/blog" },
];

export function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div style={{ padding: "12px 0" }}>
      <div className="container" style={{ maxWidth: 1100 }}>
        <nav className="cu-nav" aria-label="Main navigation">
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "#1A1A1A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 16,
                  fontWeight: 800,
                  color: "#7F77DD",
                }}
              >
                C
              </span>
            </div>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 16,
                fontWeight: 800,
                color: "#1A1A1A",
                letterSpacing: -0.5,
              }}
            >
              ClassUp
            </span>
          </Link>

          {/* Desktop nav links — hidden on mobile via CSS */}
          <div className="nav-desktop-links">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: location === link.href ? "#1A1A1A" : "#666",
                  textDecoration: "none",
                  padding: "6px 12px",
                  borderRadius: 999,
                  background: location === link.href ? "#F5F2EC" : "transparent",
                  transition: "background 0.15s ease",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* Sign in — desktop only */}
            <a
              href={`${APP_URL}/sign-in`}
              className="nav-desktop-links"
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#444",
                textDecoration: "none",
                padding: "6px 12px",
              }}
            >
              Sign in
            </a>
            {/* CTA — desktop only */}
            <a
              href={DIAGNOSTIC_URL}
              className="cu-btn-primary nav-cta-desktop"
              style={{ fontSize: 13, padding: "10px 18px" }}
            >
              Start free diagnostic →
            </a>
            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="nav-hamburger"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <div style={{ width: 22, height: 2, background: "#1A1A1A", marginBottom: 5, borderRadius: 2 }} />
              <div style={{ width: 22, height: 2, background: "#1A1A1A", marginBottom: 5, borderRadius: 2 }} />
              <div style={{ width: 22, height: 2, background: "#1A1A1A", borderRadius: 2 }} />
            </button>
          </div>
        </nav>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "#7F77DD",
              zIndex: 200,
              display: "flex",
              flexDirection: "column",
              padding: "24px",
              overflowY: "auto",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#FFF",
                }}
              >
                ClassUp
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                style={{ background: "none", border: "none", color: "#FFF", fontSize: 32, cursor: "pointer", lineHeight: 1, padding: "0 4px" }}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: 24,
                    fontWeight: 800,
                    color: "#FFF",
                    textDecoration: "none",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.2)",
                    display: "block",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/about"
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#FFF",
                  textDecoration: "none",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                  display: "block",
                }}
              >
                About
              </Link>
            </div>
            <div style={{ marginTop: "auto", paddingTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href={DIAGNOSTIC_URL}
                className="cu-btn-primary"
                style={{ background: "#FFF", color: "#1A1A1A", textAlign: "center", justifyContent: "center", display: "block", padding: "16px 24px", fontSize: 16 }}
              >
                Start free diagnostic →
              </a>
              <a
                href={`${APP_URL}/sign-in`}
                style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", textAlign: "center", textDecoration: "none", padding: "8px 0" }}
              >
                Sign in
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        /* Desktop: show nav links and CTA, hide hamburger */
        .nav-desktop-links {
          display: flex;
          align-items: center;
          gap: 4;
        }
        .nav-cta-desktop {
          display: inline-flex;
        }
        .nav-hamburger {
          display: none;
          background: none;
          border: none;
          padding: 6px;
          cursor: pointer;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        /* Mobile: hide desktop nav, show hamburger */
        @media (max-width: 767px) {
          .nav-desktop-links {
            display: none !important;
          }
          .nav-cta-desktop {
            display: none !important;
          }
          .nav-hamburger {
            display: flex !important;
          }
          .founders-cta-link {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
