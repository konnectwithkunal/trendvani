import { Navigation } from "@/components/Navigation";
import { AboutSection } from "@/components/AboutSection";
import { ProcessSection } from "@/components/ProcessSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import RotatingCircle from "@/components/RotatingCircle";

const About = () => {
  return (
    <div className="min-h-screen relative animated-background">
      <Navigation />
      <div className="pt-16">
        <div className="py-20 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              About <span className="gradient-text">TrendVaani</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a passionate team of digital marketing experts dedicated to transforming trends into powerful tools for business growth.
            </p>
          </div>
        </div>
        <AboutSection />
        <ProcessSection />
        <CTASection />
      </div>
      <Footer />
      <RotatingCircle />
    </div>
  );
};

export default About;