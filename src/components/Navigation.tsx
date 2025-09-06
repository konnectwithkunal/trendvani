import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import logo from "@/assets/trendvanii.png"; // adjust path if needed

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="TrendVaani Logo"
                className="h-20 w-auto object-contain"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="/blogs" className="text-foreground hover:text-primary transition-colors">
              Blogs
            </a>
            <a href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </a>
          </div>

          {/* Button */}
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-background"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </nav>
  );
};
