import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-background border-t border-primary/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & About */}
          <div className="space-y-4">
            <a href="/" className="inline-block">
              <div className="text-2xl font-black">
                <span className="text-foreground">TREND</span>
                <span className="gradient-text">VAANI</span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your Voice in the Digital World. We help businesses grow through strategic digital marketing, 
              creative content, and powerful brand experiences.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Social Media Management
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Content Creation
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Brand Identity
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  SEO Services
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/blogs" className="text-muted-foreground hover:text-primary transition-colors">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to our newsletter for the latest digital marketing tips and trends.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex gap-2">
                <Input placeholder="Enter your email" className="text-sm border-border" />
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
            
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:hello@trendvaani.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer hover:scale-105 transform duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>hello@trendvaani.com</span>
              </a>
              <a 
                href="tel:+15551234567" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer hover:scale-105 transform duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </a>
              
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © 2024 TrendVaani. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>;
};