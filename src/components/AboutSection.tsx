import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  const stats = [
    { number: "68%", text: "of consumers begin their buying journey online" },
    { number: "14.6%", text: "conversion rate with SEO vs 1.7% for outbound methods" },
    { number: "4x", text: "higher conversion rates with social media engagement" }
  ];

  return (
    <section className="py-20 relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* About Content */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-4xl md:text-5xl font-black mb-8 hover-scale">
              Who We Are?
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                TrendVaani is not just another digital marketing agency—it's your bridge to 
                trends, connections, and results. Inspired by the evolving world of communication, 
                we craft strategies that resonate with your audience, leveraging the latest trends 
                to build personal and impactful relationships.
              </p>
              
              <div className="my-12">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Communicating Through Trends
                </h3>
                <p>
                  TrendVaani was born out of a vision to simplify digital marketing while making 
                  it engaging and impactful. We believe in using current trends as tools to tell 
                  your brand's story, ensuring a personal connection with your audience.
                </p>
              </div>
            </div>
          </div>

          {/* Market Analysis */}
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-3xl font-bold mb-8 hover-scale">Market Analysis</h3>
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 card-elevation bg-secondary/50 border-primary/20 hover:bg-secondary/70 hover:border-primary/40 transition-all duration-300 hover-scale animate-fade-in" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-black text-primary">
                      {stat.number}
                    </div>
                    <div className="text-foreground">
                      {stat.text}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-bold mb-4 gradient-text">
                Why Invest in Digital Marketing?
              </h4>
              <p className="text-muted-foreground">
                We transform trends into tools for lead generation. From content to analytics, 
                we've got you covered. Our strategies are tailored to deliver measurable results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};