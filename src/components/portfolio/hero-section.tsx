import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import heroImage from "@/assets/hero-analytics.jpg"
import { DetailedPortfolio } from "./detailed-portfolio"

export function HeroSection() {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)

  return (
    <>
      <Dialog open={isPortfolioOpen} onOpenChange={setIsPortfolioOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-lg border-border/50">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle className="text-2xl text-white">Detailed Portfolio</DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[calc(95vh-80px)]">
            <div className="px-6 pb-6">
              <DetailedPortfolio />
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            Performance Marketing Expert
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Ali <span className="text-gradient">Azzouz</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
            Data-driven strategist combining technical media buying expertise with conversion-focused creative development across EU/US markets
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="bg-white/10 text-white border-white/30">
              Finance
            </Badge>
            <Badge variant="outline" className="bg-white/10 text-white border-white/30">
              Insurance
            </Badge>
            <Badge variant="outline" className="bg-white/10 text-white border-white/30">
              COD
            </Badge>
            <Badge variant="outline" className="bg-white/10 text-white border-white/30">
              Adult
            </Badge>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white/50 hover:bg-white/10"
              onClick={() => setIsPortfolioOpen(true)}
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+34 641 715 036</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>azzouzbidriali@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Madrid, Spain</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}