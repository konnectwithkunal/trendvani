import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ServicePopup } from "@/components/ServicePopup";
import innovationIllustration from "@/assets/innovation-illustration.png";
import comprehensiveIllustration from "@/assets/comprehensive-illustration.png";
import impactIllustration from "@/assets/impact-illustration.png";
import engagingIllustration from "@/assets/engaging-illustration.png";
import trendsIllustration from "@/assets/trends-illustration.png";
export const ServicesSection = () => {
  const services = [{
    title: "Content Marketing",
    description: "Blog writing, PR articles, ad copies, and SEO content to build authority, engage audiences, and drive organic traffic.",
    icon: "📝"
  }, {
    title: "SEO (Search Engine Optimization)",
    description: "Optimize your website and content to rank higher on search engines, increase visibility, and attract targeted traffic.",
    icon: "🔍"
  }, {
    title: "Social Media Marketing",
    description: "Create and manage engaging content, run targeted campaigns, and build a loyal community on platforms like Instagram, Facebook, and LinkedIn.",
    icon: "📱"
  }, {
    title: "Pay-Per-Click (PPC) Advertising",
    description: "Launch and manage high-performing Google Ads and Facebook Ads to drive leads, conversions, and measurable ROI.",
    icon: "💰"
  }, {
    title: "Website Development",
    description: "Build user-friendly, mobile-optimized websites that represent your brand and convert visitors into customers.",
    icon: "💻"
  }, {
    title: "Creative Services",
    description: "Design impactful visuals, reels, and videos to tell your brand story and captivate your audience.",
    icon: "🎨"
  }, {
    title: "Email Marketing",
    description: "Create personalized email campaigns and newsletters to nurture leads, build relationships, and increase retention.",
    icon: "📧"
  }, {
    title: "PR and Reputation Management",
    description: "Build your brand's credibility with strategic media relations, press releases, and reputation monitoring.",
    icon: "📰"
  }, {
    title: "Analytics and Reporting",
    description: "Track campaign performance, generate actionable insights, and refine strategies for better results.",
    icon: "📊"
  }, {
    title: "Full Campaign Management",
    description: "Develop and execute cohesive marketing strategies that combine all services for long-term growth.",
    icon: "🚀"
  }];
  const approaches = [{
    title: "Innovative Approach",
    description: "We don't believe in boring marketing—we make it lively & relatable.",
    illustration: innovationIllustration,
    color: "from-primary to-primary/70"
  }, {
    title: "Comprehensive Services",
    description: "From strategy to execution, we cover every aspect of digital marketing.",
    illustration: comprehensiveIllustration,
    color: "from-accent to-accent/70"
  }, {
    title: "Impact-Driven",
    description: "Every campaign is designed to deliver measurable results and ROI.",
    illustration: impactIllustration,
    color: "from-primary to-accent"
  }, {
    title: "Engaging & Unique",
    description: "Our creative solutions ensure your brand stands out from the competition.",
    illustration: engagingIllustration,
    color: "from-accent to-primary"
  }];
  return <section className="relative py-[50px]">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        

        {/* What Makes Us Stand Out */}
        <div className="mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl blur-3xl"></div>
          
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <ServicePopup key={index}>
                <Card className="p-6 card-elevation bg-secondary/30 border-primary/20 hover:border-primary/40 transition-all duration-300 group cursor-pointer">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Button variant="default" size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Get Started
                  </Button>
                </Card>
              </ServicePopup>)}
          </div>
        </div>

        {/* Key Marketing Trends */}
        <div className="relative">
          <div className="relative text-center p-8">
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in gradient-text" style={{
            animationDelay: '0.1s'
          }}>
              Key Marketing Trends
            </h3>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              Stay ahead with the latest trends shaping the digital marketing landscape
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {["Data-driven insights drive strategies", "Social media remains the powerhouse for brand visibility", "Video content dominates engagement", "Personalization is the key to conversions"].map((trend, index) => <Badge key={index} variant="secondary" className="group relative p-6 text-center text-sm font-medium bg-gradient-to-br from-secondary/60 to-secondary/30 border-primary/30 hover:border-primary/60 transition-all duration-500 hover:scale-105 cursor-pointer animate-fade-in overflow-hidden" style={{
              animationDelay: `${0.3 + index * 0.1}s`
            }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 group-hover:text-foreground transition-colors duration-300">
                    {trend}
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </Badge>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};