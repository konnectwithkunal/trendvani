import { Navigation } from "@/components/Navigation";
import { BlogsSection } from "@/components/BlogsSection";
import { Footer } from "@/components/Footer";
import RotatingCircle from "@/components/RotatingCircle";

const Blogs = () => {
  return (
    <div className="min-h-screen relative animated-background">
      <Navigation />
      <main className="pt-16">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-black mb-6 hover-scale">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest trends, insights, and strategies in digital marketing. 
              Discover expert tips and industry knowledge from our team.
            </p>
          </div>
        </div>
        <BlogsSection />
      </main>
      <Footer />
      <RotatingCircle />
    </div>
  );
};

export default Blogs;