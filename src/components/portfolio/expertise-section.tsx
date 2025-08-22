import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  TrendingUp, 
  Shield, 
  Package, 
  Heart, 
  Car,
  BarChart3
} from "lucide-react"

const verticals = [
  {
    name: "Finance (Debt Solutions)",
    icon: <TrendingUp className="h-6 w-6" />,
    roas: "19x",
    cpl: "$13-15",
    performance: 95,
    insights: "Lead scoring system reduced fraud by 83%",
    color: "text-success"
  },
  {
    name: "Ecom Specialization",
    icon: <Package className="h-6 w-6" />,
    roas: "22x",
    cpl: "$9-10",
    performance: 98,
    insights: "Hybrid payment model increased conversion 34%",
    color: "text-primary"
  },
  {
    name: "Insurance & ACA",
    icon: <Shield className="h-6 w-6" />,
    roas: "15x",
    cpl: "$11.81",
    performance: 90,
    insights: "Dayparting strategy improved ROI 38%",
    color: "text-warning"
  },
  {
    name: "Adult Networks",
    icon: <Heart className="h-6 w-6" />,
    roas: "18x",
    cpl: "$8-9",
    performance: 92,
    insights: "Contextual placement optimization reduced CPM 22%",
    color: "text-accent"
  }
]

export function ExpertiseSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Vertical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized performance across high-converting verticals with proven strategies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 scroll-reveal">
          {verticals.map((vertical, index) => (
            <Card 
              key={vertical.name}
              className="hover-lift group card-gradient border border-border/50 shadow-glow"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-primary/10 ${vertical.color}`}>
                      {vertical.icon}
                    </div>
                    <CardTitle className="text-lg">{vertical.name}</CardTitle>
                  </div>
                  <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                    {vertical.roas} ROAS
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Performance Score</span>
                  <span className="text-sm font-semibold">{vertical.performance}%</span>
                </div>
                <Progress value={vertical.performance} className="h-2" />
                
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <div className="text-sm text-muted-foreground">CPL Range</div>
                    <div className="text-lg font-bold text-primary">{vertical.cpl}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Best ROAS</div>
                    <div className="text-lg font-bold text-success">{vertical.roas}</div>
                  </div>
                </div>
                
                <div className="pt-3 border-t border-border/50">
                  <div className="text-xs text-muted-foreground mb-1">Key Insight:</div>
                  <div className="text-sm font-medium text-white">
                    {vertical.insights}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}