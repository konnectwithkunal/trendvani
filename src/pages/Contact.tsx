import { Navigation } from "@/components/Navigation";
import { ContactSection } from "@/components/ContactSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import RotatingCircle from "@/components/RotatingCircle";

const Contact = () => {
  return (
    <div className="min-h-screen relative animated-background">
      <Navigation />
      <div className="pt-16">
        <div className="py-20 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your digital presence? Let's discuss how we can help your business grow.
            </p>
          </div>
        </div>
        <ContactSection />
        <CTASection />
      </div>
      <Footer />
      <RotatingCircle />
    </div>
  );
};

export default Contact;