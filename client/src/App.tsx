import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import Coaches from "./pages/Coaches";
import CoachLuna from "./pages/CoachLuna";
import CoachLeo from "./pages/CoachLeo";
import NAPLAN from "./pages/NAPLAN";
import NAPLANYear5 from "./pages/NAPLANYear5";
import NaplanYear5Hub from "./pages/NaplanYear5Hub";
import NaplanYear5Numeracy from "./pages/NaplanYear5Numeracy";
import NaplanYear7Hub from "./pages/NaplanYear7Hub";
import NAPLANYear7 from "./pages/NAPLANYear7";
import NAPLANYear9 from "./pages/NAPLANYear9";
import NAPLANNumeracy from "./pages/NAPLANNumeracy";
import { NAPLANReading, NAPLANLanguageConventions, NAPLANWriting, NAPLANBandsExplained } from "./pages/NAPLANDomains";
import About from "./pages/About";
import Methodology from "./pages/Methodology";
import HowItWorks from "./pages/HowItWorks";
import Blog from "./pages/Blog";
import {
  BlogPostWhyWeBuilt,
  BlogPostWhatNAPLANTests,
  BlogPostGenericPrep,
  BlogPostReadResults,
  BlogPostLunaVsLeo,
  BlogPostNAPLANAnxiety,
  BlogPostYear5MathsTerm2,
  BlogPostReadingCatchup,
  BlogPostYear7MathsShock,
} from "./pages/BlogPosts";
import Pricing from "./pages/Pricing";
import Roadmap from "./pages/Roadmap";
import { Contact, Privacy, Terms, Resources } from "./pages/StaticPages";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
    <Switch>
      {/* Home */}
      <Route path="/" component={Home} />

      {/* Coaches */}
      <Route path="/coaches" component={Coaches} />
      <Route path="/coaches/luna" component={CoachLuna} />
      <Route path="/coaches/leo" component={CoachLeo} />

      {/* NAPLAN hub */}
      <Route path="/naplan" component={NAPLAN} />
      <Route path="/naplan/year-5" component={NAPLANYear5} />
      <Route path="/naplan-year-5" component={NaplanYear5Hub} />
      <Route path="/naplan-year-5-numeracy" component={NaplanYear5Numeracy} />
      <Route path="/naplan-year-7" component={NaplanYear7Hub} />
      <Route path="/naplan/year-7" component={NAPLANYear7} />
      <Route path="/naplan-year-9" component={NAPLANYear9} />
      <Route path="/naplan/numeracy" component={NAPLANNumeracy} />
      <Route path="/naplan/reading" component={NAPLANReading} />
      <Route path="/naplan/language-conventions" component={NAPLANLanguageConventions} />
      <Route path="/naplan/writing" component={NAPLANWriting} />
      <Route path="/naplan/bands-explained" component={NAPLANBandsExplained} />

      {/* About / methodology */}
      <Route path="/about" component={About} />
      <Route path="/methodology" component={Methodology} />
      <Route path="/how-it-works" component={HowItWorks} />

      {/* Blog */}
      <Route path="/blog" component={Blog} />
      <Route path="/blog/why-we-built-classup" component={BlogPostWhyWeBuilt} />
      <Route path="/blog/what-naplan-actually-tests" component={BlogPostWhatNAPLANTests} />
      <Route path="/blog/the-problem-with-generic-naplan-prep" component={BlogPostGenericPrep} />
      <Route path="/blog/how-to-read-naplan-results" component={BlogPostReadResults} />
      <Route path="/blog/luna-vs-leo" component={BlogPostLunaVsLeo} />
      <Route path="/blog/naplan-anxiety-what-parents-can-do" component={BlogPostNAPLANAnxiety} />
      <Route path="/blog/year-5-maths-struggles-term-2" component={BlogPostYear5MathsTerm2} />
      <Route path="/blog/help-child-catch-up-reading" component={BlogPostReadingCatchup} />
      <Route path="/blog/year-7-high-school-maths-shock" component={BlogPostYear7MathsShock} />

      {/* Pricing */}
      <Route path="/pricing" component={Pricing} />
      {/* Roadmap */}
      <Route path="/roadmap" component={Roadmap} />

      {/* Static / legal */}
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/resources" component={Resources} />

      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
    </>  );
}

function App() {
  return (
    <HelmetProvider>
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
