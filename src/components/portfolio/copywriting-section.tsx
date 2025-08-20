import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, FileText, TrendingUp, Target, Zap, Users } from "lucide-react"
import dashboardImage from "@/assets/dashboard-preview.jpg"
import profileImage from "@/assets/profile-bg.jpg"

export function CopywritingSection() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
            <FileText className="mr-2 h-4 w-4" />
            Copywriting & Email Marketing
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Words That <span className="text-gradient">Convert</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            High-converting copy and email campaigns that drive results across finance, insurance, and COD verticals
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Stats & Performance */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 card-gradient border-border/50 hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">48.7%</p>
                    <p className="text-sm text-muted-foreground">Open Rate</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Email Campaigns</p>
              </Card>

              <Card className="p-6 card-gradient border-border/50 hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">32%</p>
                    <p className="text-sm text-muted-foreground">CVR</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Landing Pages</p>
              </Card>

              <Card className="p-6 card-gradient border-border/50 hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">12.3%</p>
                    <p className="text-sm text-muted-foreground">CTR</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Email CTR</p>
              </Card>

              <Card className="p-6 card-gradient border-border/50 hover-lift">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">28%</p>
                    <p className="text-sm text-muted-foreground">Increase</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Conversions</p>
              </Card>
            </div>

            {/* Performance Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Key Insights</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/30">
                  <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Seasonal urgency + social proof increased conversions by 28%</p>
                    <p className="text-xs text-muted-foreground">CleanMyMac X Campaign</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/30">
                  <Zap className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Minimalist design outperforms feature-heavy alternatives by 47%</p>
                    <p className="text-xs text-muted-foreground">B2B Tech Landing Pages</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card/50 border border-border/30">
                  <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Contextual placement optimization reduced CPM by 22%</p>
                    <p className="text-xs text-muted-foreground">Adult Network Campaigns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual Portfolio */}
          <div className="space-y-6">
            <Card className="p-6 card-gradient border-border/50 hover-lift">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img 
                  src={dashboardImage} 
                  alt="Campaign Performance Dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Campaign Performance Dashboard</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Real-time analytics showing 19x ROAS across finance verticals with optimized copy performance
              </p>
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                Finance • 19x ROAS
              </Badge>
            </Card>

            <Card className="p-6 card-gradient border-border/50 hover-lift">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img 
                  src={profileImage} 
                  alt="Email Campaign Results"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">High-Converting Email Series</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Multi-vertical email campaigns with proven conversion optimization strategies
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                  48.7% Open Rate
                </Badge>
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  12.3% CTR
                </Badge>
              </div>
            </Card>
          </div>
        </div>

        {/* Copy Samples */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12 text-foreground">
            High-Converting Copy Samples
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 card-gradient border-border/50 hover-lift">
              <Badge variant="outline" className="mb-4 border-primary/50 text-primary">Headlines</Badge>
              <div className="space-y-4">
                <blockquote className="text-lg italic text-foreground border-l-4 border-primary pl-4">
                  "Transform your relationship with money: Banking tech that anticipates your financial needs"
                </blockquote>
                <blockquote className="text-lg italic text-foreground border-l-4 border-accent pl-4">
                  "Spring-clean your Mac: Reclaim speed and storage in minutes"
                </blockquote>
              </div>
            </Card>

            <Card className="p-8 card-gradient border-border/50 hover-lift">
              <Badge variant="outline" className="mb-4 border-accent/50 text-accent">CTAs</Badge>
              <div className="space-y-4">
                <blockquote className="text-lg italic text-foreground border-l-4 border-primary pl-4">
                  "Get Your Free Analysis → Discover expense optimizations in 2 minutes"
                </blockquote>
                <blockquote className="text-lg italic text-foreground border-l-4 border-accent pl-4">
                  "Enter new possibilities → Limited access available"
                </blockquote>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-background font-semibold shadow-glow hover:shadow-glow hover:scale-105 transition-all">
            <Mail className="mr-2 h-5 w-5" />
            Request Copy Samples
          </Button>
        </div>
      </div>
    </section>
  )
}