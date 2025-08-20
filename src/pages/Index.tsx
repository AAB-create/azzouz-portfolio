import { HeroSection } from "@/components/portfolio/hero-section"
import { MetricsSection } from "@/components/portfolio/metrics-section"
import { ExpertiseSection } from "@/components/portfolio/expertise-section"
import { CopywritingSection } from "@/components/portfolio/copywriting-section"
import { CTASection } from "@/components/portfolio/cta-section"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const Index = () => {
  const containerRef = useScrollReveal()

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <HeroSection />
      <MetricsSection />
      <ExpertiseSection />
      <CopywritingSection />
      <CTASection />
    </div>
  );
};

export default Index;
