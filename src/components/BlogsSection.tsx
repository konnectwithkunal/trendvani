import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Marketing: AI-Driven Strategies",
    description: "Discover how artificial intelligence is revolutionizing digital marketing and what it means for your business growth.",
    author: "TrendVaani Team",
    date: "2024-01-15",
    category: "Digital Marketing",
    readTime: "5 min read",
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    title: "Social Media Trends That Will Dominate 2024",
    description: "Stay ahead of the curve with the latest social media trends and strategies that are shaping the digital landscape.",
    author: "Marketing Expert",
    date: "2024-01-12",
    category: "Social Media",
    readTime: "7 min read",
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    title: "Brand Identity: Building a Strong Visual Presence",
    description: "Learn the essential elements of creating a memorable brand identity that resonates with your target audience.",
    author: "Design Team",
    date: "2024-01-10",
    category: "Branding",
    readTime: "6 min read",
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    title: "Content Marketing Strategies for Maximum Engagement",
    description: "Explore proven content marketing techniques that drive engagement and convert prospects into loyal customers.",
    author: "Content Specialist",
    date: "2024-01-08",
    category: "Content Marketing",
    readTime: "8 min read",
    image: "/api/placeholder/400/250"
  }
];

export const BlogsSection = () => {
  return (
    <section id="blogs" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and strategies in digital marketing and business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(0, 3).map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 bg-card border-border overflow-hidden">
              <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {post.category}
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 group">
                  Read More 
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};