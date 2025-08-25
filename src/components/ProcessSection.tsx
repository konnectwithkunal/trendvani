import { Card } from "@/components/ui/card";

export const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Understand",
      description: "We learn about your brand and audience.",
      icon: "🔍"
    },
    {
      number: "02", 
      title: "Strategize",
      description: "Tailored plans based on trends and data.",
      icon: "📋"
    },
    {
      number: "03",
      title: "Execute",
      description: "Our team of experts brings the plan to life.",
      icon: "🚀"
    },
    {
      number: "04",
      title: "Analyze",
      description: "We measure and optimize for success.",
      icon: "📊"
    }
  ];

  return (
    <section className="py-20 relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-4xl md:text-5xl font-black mb-6 hover-scale">
            The <span className="gradient-text">TrendVaani</span> Way!
          </h2>
          <h3 className="text-2xl font-semibold mb-4">How We Work?</h3>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 4-step process ensures every project delivers exceptional results 
            that drive growth and engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
              <Card className="p-8 text-center card-elevation bg-secondary/30 border-primary/20 hover:border-primary/40 transition-all duration-300 group hover-scale hover:bg-secondary/50">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-black">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-primary">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </Card>
              
              {/* Connecting Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary text-2xl">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};