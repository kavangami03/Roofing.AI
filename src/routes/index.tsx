import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { ProblemSection } from "@/components/site/ProblemSection";
import { SolutionSection } from "@/components/site/SolutionSection";
import { WorkflowSection } from "@/components/site/WorkflowSection";
import { FeaturesBento } from "@/components/site/FeaturesBento";
import { DashboardPreview } from "@/components/site/DashboardPreview";
import { ROICalculator } from "@/components/site/ROICalculator";
import { CaseStudy } from "@/components/site/CaseStudy";
import { Testimonials } from "@/components/site/Testimonials";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <SolutionSection />
        <WorkflowSection />
        <FeaturesBento />
        <DashboardPreview />
        <ROICalculator />
        <CaseStudy />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
