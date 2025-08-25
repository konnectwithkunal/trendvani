import { Navigation } from "@/components/Navigation";
import { ServicesSection } from "@/components/ServicesSection";
import { ServiceCharacters } from "@/components/ServiceCharacters";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import RotatingCircle from "@/components/RotatingCircle";

const Services = () => {
  return (
    <div className="min-h-screen relative animated-background">
      <Navigation />
      <div className="pt-16">
        <div className="py-20 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to transform your business and drive measurable results.
            </p>
          </div>
        </div>
        <ServicesSection />
        <ServiceCharacters />
        <CTASection />
      </div>
      <Footer />
      <RotatingCircle />
    </div>
  );
};

export default Services;