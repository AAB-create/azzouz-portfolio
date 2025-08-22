import { useState, useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Target, 
  Shield, 
  Truck, 
  EyeOff, 
  Lightbulb,
  Mail,
  Phone,
  Globe,
  ArrowRight,
  ChartLine,
  PenTool,
  Palette,
  Network
} from "lucide-react"

// Counter component with animation
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        setCount(Math.floor(end * progress))
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [inView, end, duration])

  return <div ref={ref}>{count}{suffix}</div>
}

// Mermaid diagram component
const MermaidDiagram = ({ chart }: { chart: string }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const renderChart = async () => {
      if (ref.current && typeof window !== 'undefined') {
        try {
          const mermaid = (await import('mermaid')).default
          mermaid.initialize({
            startOnLoad: false,
            theme: 'dark',
            securityLevel: 'loose',
            fontFamily: 'Inter, sans-serif',
            flowchart: {
              useMaxWidth: true,
              htmlLabels: true,
              curve: 'basis'
            }
          })
          
          const { svg } = await mermaid.render('mermaid-' + Math.random(), chart)
          if (ref.current) {
            ref.current.innerHTML = svg
          }
        } catch (error) {
          console.error('Mermaid rendering error:', error)
        }
      }
    }
    
    renderChart()
  }, [chart])

  return <div ref={ref} className="w-full overflow-x-auto" />
}

export function DetailedPortfolio() {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.1 } }
  }

  return (
    <div ref={ref} className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <motion.div 
        className="text-center py-12 hero-gradient rounded-2xl text-white"
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        <motion.div variants={fadeInUp}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Ali Azzouz</h1>
          <p className="text-xl md:text-2xl font-light mb-6 opacity-90">Performance Marketing Expert</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge className="bg-white/20 text-white border-white/30">
              <ChartLine className="w-4 h-4 mr-2" />
              Media Buying
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              <Target className="w-4 h-4 mr-2" />
              Funnel Optimization
            </Badge>
            <Badge className="bg-white/20 text-white border-white/30">
              <PenTool className="w-4 h-4 mr-2" />
              Copywriting
            </Badge>
          </div>
        </motion.div>
      </motion.div>

      {/* Performance Dashboard */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={staggerChildren}
      >
        <Card className="card-gradient border-0 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              Media Buying Performance Dashboard
            </CardTitle>
            <p className="text-muted-foreground">Core metrics across verticals (2022-2024)</p>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-3 px-4 text-muted-foreground">Metric</th>
                    <th className="text-left py-3 px-4 text-muted-foreground">Auto Insurance</th>
                    <th className="text-left py-3 px-4 text-muted-foreground">Finance</th>
                    <th className="text-left py-3 px-4 text-muted-foreground">Ecom</th>
                    <th className="text-left py-3 px-4 text-muted-foreground">Adult</th>
                    <th className="text-left py-3 px-4 text-muted-foreground">Industry Avg</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/30 hover:bg-accent/20">
                    <td className="py-3 px-4 font-medium text-white">Avg. CPM</td>
                    <td className="py-3 px-4 text-muted-foreground">$17-22</td>
                    <td className="py-3 px-4 text-muted-foreground">$50-55</td>
                    <td className="py-3 px-4 text-muted-foreground">$18-20</td>
                    <td className="py-3 px-4 text-muted-foreground">$25-30</td>
                    <td className="py-3 px-4 text-muted-foreground">$30-35</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-accent/20">
                    <td className="py-3 px-4 font-medium text-white">CTR (All)</td>
                    <td className="py-3 px-4 text-muted-foreground">1.6-1.8%</td>
                    <td className="py-3 px-4 text-muted-foreground">1.1-1.3%</td>
                    <td className="py-3 px-4 text-muted-foreground">2.8-3.0%</td>
                    <td className="py-3 px-4 text-muted-foreground">3.2-3.3%</td>
                    <td className="py-3 px-4 text-muted-foreground">1.7-1.9%</td>
                  </tr>
                  <tr className="border-b border-border/30 hover:bg-accent/20">
                    <td className="py-3 px-4 font-medium text-white">Cost per Lead</td>
                    <td className="py-3 px-4 text-muted-foreground">$11-12</td>
                    <td className="py-3 px-4 text-muted-foreground">$13-15</td>
                    <td className="py-3 px-4 text-muted-foreground">$9-10</td>
                    <td className="py-3 px-4 text-muted-foreground">$8-9</td>
                    <td className="py-3 px-4 text-muted-foreground">$18-20</td>
                  </tr>
                  <tr className="hover:bg-accent/20">
                    <td className="py-3 px-4 font-medium text-white">ROAS</td>
                    <td className="py-3 px-4 text-primary font-bold">15x</td>
                    <td className="py-3 px-4 text-primary font-bold">11-12x</td>
                    <td className="py-3 px-4 text-primary font-bold">22x</td>
                    <td className="py-3 px-4 text-primary font-bold">18x</td>
                    <td className="py-3 px-4 text-muted-foreground">6-7x</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-accent/20 rounded-lg border border-accent/30">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="text-white font-medium">Strategic Insight:</p>
                  <p className="text-muted-foreground">Audience segmentation reduced CPA by 62% while scaling qualified traffic</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Vertical Expertise */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={staggerChildren}
      >
        <Card className="card-gradient border-0 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Vertical Expertise & Campaign Execution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Finance Card */}
              <motion.div variants={fadeInUp} className="metric-card p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold text-white">Finance (Debt Solutions)</h3>
                </div>
                
                <div className="mb-4 p-3 bg-background/50 rounded-lg">
                  <MermaidDiagram chart={`
                    graph LR
                        A[Targeted CPM] --> B[Optimized CTR]
                        B --> C[Efficient CPC]
                        C --> D[Competitive CPL]
                        D --> E[Premium ROAS]
                  `} />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-primary/20 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">
                      <AnimatedCounter end={19} suffix="x" />
                    </div>
                    <div className="text-sm text-muted-foreground">ROAS</div>
                  </div>
                  <div className="text-center p-3 bg-primary/20 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">
                      <AnimatedCounter end={1180} suffix="+" />
                    </div>
                    <div className="text-sm text-muted-foreground">Conversions</div>
                  </div>
                </div>

                <div className="p-3 bg-accent/20 rounded-lg border border-accent/30">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-accent mt-0.5" />
                    <div>
                      <p className="text-white font-medium text-sm">Key Insight:</p>
                      <p className="text-white text-sm">Lead scoring system reduced fraud by 83%</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* COD Card */}
              <motion.div variants={fadeInUp} className="metric-card p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold text-white">Ecom Specialization</h3>
                </div>
                
                <div className="mb-4 p-3 bg-background/50 rounded-lg">
                  <MermaidDiagram chart={`
                    graph LR
                        A[Pre-Qualified Traffic] --> B[Ecom Placement]
                        B --> C[Post-Delivery Verification]
                  `} />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-primary/20 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">
                      <AnimatedCounter end={14} suffix="K+" />
                    </div>
                    <div className="text-sm text-muted-foreground">Daily Sales</div>
                  </div>
                  <div className="text-center p-3 bg-primary/20 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">
                      <AnimatedCounter end={7.4} suffix="%" />
                    </div>
                    <div className="text-sm text-muted-foreground">MoM Growth</div>
                  </div>
                </div>

                <div className="p-3 bg-accent/20 rounded-lg border border-accent/30">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-accent mt-0.5" />
                    <div>
                      <p className="text-white font-medium text-sm">Key Insight:</p>
                      <p className="text-white text-sm">Hybrid payment model increased conversion 34%</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Adult Networks Card */}
              <motion.div variants={fadeInUp} className="metric-card p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <EyeOff className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold text-white">Adult Networks</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-primary/20 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">
                      <AnimatedCounter end={3.25} suffix="%" />
                    </div>
                    <div className="text-sm text-muted-foreground">CTR (2.1x benchmark)</div>
                  </div>
                  <div className="text-center p-3 bg-primary/20 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">
                      $<AnimatedCounter end={8.90} />
                    </div>
                    <div className="text-sm text-muted-foreground">CPL (27% below avg)</div>
                  </div>
                </div>

                <div className="p-3 bg-accent/20 rounded-lg border border-accent/30">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-accent mt-0.5" />
                    <div>
                      <p className="text-white font-medium text-sm">Key Insight:</p>
                      <p className="text-white text-sm">Contextual placement optimization reduced CPM 22%</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Insurance Card */}
              <motion.div variants={fadeInUp} className="metric-card p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold text-white">Insurance & ACA</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-primary/20 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">
                      <AnimatedCounter end={15} suffix="x" />
                    </div>
                    <div className="text-sm text-muted-foreground">ROAS</div>
                  </div>
                  <div className="text-center p-3 bg-primary/20 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">
                      $<AnimatedCounter end={11.81} />
                    </div>
                    <div className="text-sm text-muted-foreground">CPL</div>
                  </div>
                </div>

                <div className="p-3 bg-accent/20 rounded-lg border border-accent/30">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 text-accent mt-0.5" />
                    <div>
                      <p className="text-white font-medium text-sm">Key Insight:</p>
                      <p className="text-white text-sm">Dayparting strategy improved ROI 38%</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Creative Portfolio */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        <Card className="card-gradient border-0 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Palette className="w-6 h-6" />
              Creative Portfolio
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <PenTool className="w-5 h-5" />
                Landing Page Design - Foundation Labs
              </h3>
              <p className="text-muted-foreground mb-3">32% conversion rate (B2B tech niche)</p>
              <div className="p-3 bg-accent/20 rounded-lg border border-accent/30">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-accent mt-0.5" />
                  <div>
                    <p className="text-white font-medium text-sm">Key Insight:</p>
                    <p className="text-white text-sm">Minimalist design outperforms feature-heavy alternatives by 47% in high-value B2B</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="bg-border/30" />

            <div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Campaign - CleanMyMac X
              </h3>
              <p className="text-muted-foreground mb-3">48.7% open rate • 12.3% CTR</p>
              <div className="p-3 bg-accent/20 rounded-lg border border-accent/30">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-accent mt-0.5" />
                  <div>
                    <p className="text-white font-medium text-sm">Key Insight:</p>
                    <p className="text-white text-sm">Seasonal urgency + social proof increased conversions by 28% vs. standard offers</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="bg-border/30" />

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Copywriting Samples</h3>
              <div className="space-y-3">
                <div className="p-3 bg-background/50 rounded-lg">
                  <p className="text-white font-medium text-sm mb-1">High-Converting Headlines:</p>
                  <p className="text-muted-foreground text-sm">"Transform your relationship with money: Banking tech that anticipates your financial needs"</p>
                  <p className="text-muted-foreground text-sm">"Spring-clean your Mac: Reclaim speed and storage in minutes"</p>
                </div>
                <div className="p-3 bg-background/50 rounded-lg">
                  <p className="text-white font-medium text-sm mb-1">Effective CTAs:</p>
                  <p className="text-muted-foreground text-sm">"Get Your Free Analysis → Discover expense optimizations in 2 minutes"</p>
                  <p className="text-muted-foreground text-sm">"Enter new possibilities → Limited access available"</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Campaign Management System */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        <Card className="card-gradient border-0 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-white flex items-center gap-2">
              <Network className="w-6 h-6" />
              Campaign Management System
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6 p-4 bg-background/50 rounded-lg">
              <MermaidDiagram chart={`
                graph TB
                    A[Strategic Traffic Acquisition] --> B[Pre-Lander Optimization]
                    B --> C[Conversion Rate Maximization]
                    C --> D[Payment/Verification Systems]
                    D --> E[ROAS Analysis & Scaling]
              `} />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <Network className="w-5 h-5" />
                Network Experience
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-background/50 rounded-lg">
                  <p className="text-white font-medium text-sm">Finance:</p>
                  <p className="text-muted-foreground text-sm">MarketCall, Debt Solutions Network</p>
                </div>
                <div className="p-3 bg-background/50 rounded-lg">
                  <p className="text-white font-medium text-sm">Ecom:</p>
                  <p className="text-muted-foreground text-sm">DrCash, TerraLeads, AdCombo</p>
                </div>
                <div className="p-3 bg-background/50 rounded-lg">
                  <p className="text-white font-medium text-sm">Insurance:</p>
                  <p className="text-muted-foreground text-sm">Perform[CB], MaxBounty</p>
                </div>
                <div className="p-3 bg-background/50 rounded-lg">
                  <p className="text-white font-medium text-sm">Adult:</p>
                  <p className="text-muted-foreground text-sm">Slick Revenue (Private Network)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        <Card className="hero-gradient border-0 shadow-2xl text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 transform -skew-y-3" />
          <CardContent className="relative z-10 text-center py-12">
            <h2 className="text-3xl font-bold mb-4">Let's Transform Your Campaigns</h2>
            <p className="text-xl opacity-90 mb-6">Open to freelance projects, strategic partnerships, or in-house leadership roles</p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 hover-lift">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Contact Footer */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        <Card className="metric-card border-0">
          <CardContent className="text-center py-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+34 641 715 036</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>azzouzbidriali@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span>https://azzouz.site</span>
              </div>
            </div>
            <p className="text-muted-foreground">Specializing in scaling compliant campaigns in competitive verticals</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}