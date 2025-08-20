import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, ExternalLink, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-accent to-primary-glow">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="scroll-reveal">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            Ready to Scale Your Campaigns?
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Transform Your Marketing Performance
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Open to freelance projects, strategic partnerships, or in-house leadership roles. 
            Specializing in scaling compliant campaigns across competitive verticals.
          </p>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-12">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Media Buying</div>
                  <div className="text-sm opacity-90">Full campaign management</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Campaign Audits</div>
                  <div className="text-sm opacity-90">Performance optimization</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">RevShare Models</div>
                  <div className="text-sm opacity-90">For qualified offers</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-glow font-semibold"
            >
              <Mail className="mr-2 h-5 w-5" />
              Start a Project
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white/50 hover:bg-white/10"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Schedule Call
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/80">
            <a 
              href="tel:+34641715036"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>+34 641 715 036</span>
            </a>
            <a 
              href="mailto:azzouzbidriali@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>azzouzbidriali@gmail.com</span>
            </a>
            <a 
              href="https://azzouz.site"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>azzouz.site</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}