import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ServiceCharacters } from "@/components/ServiceCharacters";
import { ContactSection } from "@/components/ContactSection";
import { CTASection } from "@/components/CTASection";
import { BlogsSection } from "@/components/BlogsSection";
import { Footer } from "@/components/Footer";
import RotatingCircle from "@/components/RotatingCircle";

const Index = () => {
  return (
    <div className="min-h-screen relative animated-background">
      <Navigation />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ServiceCharacters />
      <ContactSection />
      <CTASection />
      <BlogsSection />
      <Footer />
      <RotatingCircle />
    </div>
  );
};

export default Index;
