import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const CTASection = () => {
  const reasons = [
    "A collaborative approach with transparent communication",
    "Personalized solutions tailored to your unique goals", 
    "Proven track record of delivering measurable results",
    "Expertise across multiple digital channels"
  ];

  return (
    <section className="py-20 relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="container mx-auto px-6">
        
        {/* Why Choose Us */}
        <div className="text-center mb-20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-4xl md:text-5xl font-black mb-12 hover-scale">
            Your Trusted Partner for <span className="gradient-text">Growth</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reasons.map((reason, index) => (
              <Card key={index} className="p-6 text-left card-elevation bg-secondary/30 border-primary/20 hover:bg-secondary/50 hover:border-primary/40 transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-background font-bold text-sm mt-1">
                    ✓
                  </div>
                  <p className="text-foreground">{reason}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Card className="p-12 md:p-16 card-elevation bg-gradient-to-r from-secondary/50 to-secondary/30 border-primary/40 hover:from-secondary/60 hover:to-secondary/40 hover:border-primary/60 transition-all duration-300 hover-scale">
            <h3 className="text-3xl md:text-4xl font-black mb-6">
              Partner with Us for Your Next Big Leap
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to take your business to new heights? Let's craft your success story together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="hero-glow px-8 py-6 text-lg">
                Get Started Today
              </Button>
              <div className="text-muted-foreground">
                or email us at{" "}
                <a href="mailto:Trendvaani1@gmail.com" className="text-primary hover:underline font-semibold">
                  Trendvaani1@gmail.com
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};