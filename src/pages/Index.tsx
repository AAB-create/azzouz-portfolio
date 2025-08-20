import { HeroSection } from "@/components/portfolio/hero-section"
import { MetricsSection } from "@/components/portfolio/metrics-section"
import { ExpertiseSection } from "@/components/portfolio/expertise-section"
import { CTASection } from "@/components/portfolio/cta-section"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const Index = () => {
  const containerRef = useScrollReveal()

  return (
    <div ref={containerRef} className="min-h-screen">
      <HeroSection />
      <MetricsSection />
      <ExpertiseSection />
      <CTASection />
    </div>
  );
};

export default Index;
