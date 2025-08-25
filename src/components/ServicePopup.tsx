import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ServicePopupProps {
  children: React.ReactNode;
}

export const ServicePopup = ({ children }: ServicePopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-card border-border h-[90vh] overflow-y-auto popup-scroll">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">
            Get Started with TrendVaani
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" required />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@company.com" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input id="company" placeholder="Your Company" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="service">Service Interest</Label>
            <Select required>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="content-marketing">Content Marketing</SelectItem>
                <SelectItem value="seo">SEO</SelectItem>
                <SelectItem value="social-media">Social Media Marketing</SelectItem>
                <SelectItem value="ppc">PPC Advertising</SelectItem>
                <SelectItem value="website-dev">Website Development</SelectItem>
                <SelectItem value="creative">Creative Services</SelectItem>
                <SelectItem value="email">Email Marketing</SelectItem>
                <SelectItem value="pr">PR & Reputation Management</SelectItem>
                <SelectItem value="analytics">Analytics & Reporting</SelectItem>
                <SelectItem value="full-campaign">Full Campaign Management</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          
          <div className="space-y-2">
            <Label htmlFor="message">Project Details</Label>
            <Textarea 
              id="message" 
              placeholder="Tell us about your project goals and requirements..."
              rows={4}
              required
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button 
              type="submit" 
              className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Submit Request
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              className="px-6"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};