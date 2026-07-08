import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { ServiceDeskJobs } from "@/components/site/ServiceDeskJobs";
import { WhySwitch } from "@/components/site/WhySwitch";
import { RoiCalculatorSection } from "@/components/site/RoiCalculatorSection";
import { ProblemSection } from "@/components/site/ProblemSection";
import { StormSurgeSection } from "@/components/site/StormSurgeSection";
import { AutomationSection } from "@/components/site/AutomationSection";
import { SolutionSection } from "@/components/site/SolutionSection";
import { ComparisonSection } from "@/components/site/ComparisonSection";
import { FoundingOfferSection } from "@/components/site/FoundingOfferSection";
import { PricingSection } from "@/components/site/PricingSection";
import { FaqSection } from "@/components/site/FaqSection";
import { CtaSection } from "@/components/site/CtaSection";
import { WalkthroughSection } from "@/components/site/WalkthroughSection";
import { CaseStudySection } from "@/components/site/CaseStudySection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { IntegrationSection } from "@/components/site/IntegrationSection";
import { DashboardSection } from "@/components/site/DashboardSection";
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
        <RoiCalculatorSection />
        <ProblemSection />
        <StormSurgeSection />
        <AutomationSection />
        <SolutionSection />
        <WalkthroughSection />
        <CaseStudySection />
        <TestimonialsSection />
        <IntegrationSection />
        <DashboardSection />
        <ComparisonSection />
        <FoundingOfferSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
