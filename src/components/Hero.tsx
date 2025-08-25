import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-digital-wave.jpg";
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline>
        <source src="/video/hero-background.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 animated-background"></div>
      </video>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 floating-dots"></div>
      
      {/* Enhanced Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/70"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Main Tagline */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-normal mb-4 tracking-wider animate-[float_3s_ease-in-out_infinite_0.5s]">
              Riding the <span className="gradient-text font-bold">WAVE</span> of
            </h2>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 animate-[float_4s_ease-in-out_infinite]">
              TRENDS
            </h1>
          </div>

          {/* Brand Name */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              <span className="text-foreground">TREND</span><span style={{
              background: 'var(--gradient-accent)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>VAANI</span>
            </h2>
            <p className="text-xl md:text-2xl font-light tracking-wide text-muted-foreground">
              YOUR VOICE IN THE DIGITAL WORLD
            </p>
          </div>

          {/* Brand Values - Redesigned */}
          <div className="mb-12">
            <div className="relative max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {['Trendy', 'Reliable', 'Engaging', 'Navigable', 'Dynamic', 'Versatile', 'Adequate', 'Authentic', 'Noteworthy', 'Innovative'].map((value, index) => (
                  <div 
                    key={index} 
                    className="bg-secondary/30 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 md:px-6 md:py-3 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 group animate-fade-in hover:scale-105 cursor-pointer floating-trends"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: `fade-in 0.6s ease-out ${index * 0.1}s both, float 3s ease-in-out infinite ${index * 0.3}s`
                    }}
                  >
                    <span className="text-primary font-semibold text-sm md:text-base group-hover:text-primary-foreground transition-colors">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mb-8">
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Blending the latest trends with your unique voice to craft impactful digital experiences.
            </p>
            <div className="flex justify-center">
              <Button variant="success" size="lg" className="px-8 py-3 text-lg font-semibold">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      
      {/* Additional floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-primary rounded-full animate-pulse delay-1000 opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary/30 rounded-full animate-pulse delay-500"></div>
    </section>;
};