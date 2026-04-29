import React from "react";
import { FoundersBanner, TopNav } from "./Nav";
import { Footer } from "./Footer";
import { AskLunaButton, StickyCTA } from "./ClassUpUI";

interface PageLayoutProps {
  children: React.ReactNode;
  showStickyCTA?: boolean;
  showAskLuna?: boolean;
}

export function PageLayout({
  children,
  showStickyCTA = true,
  showAskLuna = true,
}: PageLayoutProps) {
  return (
    <div style={{ minHeight: "100vh", background: "#F5F2EC" }}>
      <FoundersBanner />
      <TopNav />
      <main>{children}</main>
      <Footer />
      {showStickyCTA && <StickyCTA />}
      {showAskLuna && <AskLunaButton />}
    </div>
  );
}
