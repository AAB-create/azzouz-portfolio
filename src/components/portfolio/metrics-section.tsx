import { MetricCard } from "@/components/ui/metric-card"
import { TrendingUp, Target, DollarSign, Users } from "lucide-react"

export function MetricsSection() {
  return (
    <section className="py-20 bg-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Performance Overview
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Consistent results across multiple verticals with data-driven optimization strategies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-reveal">
          <MetricCard
            value="22x"
            label="Peak ROAS Achieved"
            trend="Ecom Campaigns"
            icon={<TrendingUp className="h-5 w-5" />}
            variant="success"
          />
          
          <MetricCard
            value="$80K+"
            label="Total Campaign Value"
            trend="Multiple Verticals"
            icon={<DollarSign className="h-5 w-5" />}
            variant="default"
          />
          
          <MetricCard
            value="3.3%"
            label="Average CTR"
            trend="Adult Networks"
            icon={<Target className="h-5 w-5" />}
            variant="warning"
          />
          
          <MetricCard
            value="1,180+"
            label="Total Conversions"
            trend="Finance Vertical"
            icon={<Users className="h-5 w-5" />}
            variant="success"
          />
        </div>
        
        {/* Additional Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 scroll-reveal">
          <div className="text-center p-6 card-gradient border border-border/50 rounded-xl shadow-glow hover-lift">
            <div className="text-2xl font-bold text-primary mb-2">$8.90</div>
            <div className="text-sm text-muted-foreground">Average CPL</div>
            <div className="text-xs text-success mt-1">27% below industry avg</div>
          </div>
          
          <div className="text-center p-6 card-gradient border border-border/50 rounded-xl shadow-glow hover-lift">
            <div className="text-2xl font-bold text-accent mb-2">62%</div>
            <div className="text-sm text-muted-foreground">CPA Reduction</div>
            <div className="text-xs text-success mt-1">Through segmentation</div>
          </div>
          
          <div className="text-center p-6 card-gradient border border-border/50 rounded-xl shadow-glow hover-lift">
            <div className="text-2xl font-bold text-primary mb-2">83%</div>
            <div className="text-sm text-muted-foreground">Fraud Reduction</div>
            <div className="text-xs text-success mt-1">Lead scoring system</div>
          </div>
        </div>
      </div>
    </section>
  )
}