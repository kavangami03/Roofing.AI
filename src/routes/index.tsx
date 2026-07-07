import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { ServiceDeskJobs } from "@/components/site/ServiceDeskJobs";
import { WhySwitch } from "@/components/site/WhySwitch";
import { ProblemSection } from "@/components/site/ProblemSection";
import { StormSurgeSection } from "@/components/site/StormSurgeSection";
import { AutomationSection } from "@/components/site/AutomationSection";
import { SolutionSection } from "@/components/site/SolutionSection";
import { ComparisonSection } from "@/components/site/ComparisonSection";
import { WalkthroughSection } from "@/components/site/WalkthroughSection";
import { CaseStudySection } from "@/components/site/CaseStudySection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { IntegrationSection } from "@/components/site/IntegrationSection";
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
        <ServiceDeskJobs />
        <WhySwitch />
        <ProblemSection />
        <StormSurgeSection />
        <AutomationSection />
        <SolutionSection />
        <ComparisonSection />
        <WalkthroughSection />
        <CaseStudySection />
        <TestimonialsSection />
        <IntegrationSection />
      </main>
      <SiteFooter />
    </div>
  );
}
