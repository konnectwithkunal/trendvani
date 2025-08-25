import { Card } from "@/components/ui/card";

export const ServiceCharacters = () => {
  const characters = [
    {
      name: "Penelope Pages",
      title: "The Content Realm",
      services: "Blog Writing, Screenplay Writing, SEO Content, Ad Copies, Social Copies, Social Media Captions, Press Releases, Author Articles",
      platforms: "Company website for blogs and SEO content, Social media platforms for captions and copies (Instagram, LinkedIn, Twitter), News portals and media outlets for PR articles",
      benefits: [
        "Improves online visibility with SEO-rich content",
        "Strengthens brand voice and storytelling",
        "Attracts and retains your target audience through engaging, relevant content"
      ],
      icon: "✍️"
    },
    {
      name: "Sergey Searchington",
      title: "The Digital Wizards",
      services: "SEO, Google Ads, Facebook Ads, LinkedIn Boost Campaigns",
      platforms: "Google Search, Google Ads Manager, Facebook Ads Manager",
      benefits: [
        "Brings your brand in front of the right audience at the right time",
        "Reduces ad spend wastage with precise targeting",
        "Delivers measurable results through data-driven strategies"
      ],
      icon: "🧙‍♂️"
    },
    {
      name: "Artie Animation",
      title: "The Creative Studio",
      services: "Social Media Content, Creatives, Small Reels, Videos",
      platforms: "Instagram, YouTube, and Facebook for videos and reels, Canva, Adobe Creative Suite for designing graphics",
      benefits: [
        "Enhances your brand's social media presence",
        "Increases audience retention and shares through compelling visuals",
        "Improves engagement and conversion rates"
      ],
      icon: "🎬"
    },
    {
      name: "Cody Constructo",
      title: "The Web Builders",
      services: "Website Development, SEO for Websites",
      platforms: "WordPress, Shopify, custom CMS solutions for development, Google Search Console, Ahrefs, SEMrush for SEO optimization",
      benefits: [
        "Provides a strong digital storefront that boosts credibility",
        "Attracts and retains visitors with seamless website navigation",
        "Drives conversions with optimized website structures"
      ],
      icon: "🔧"
    },
    {
      name: "SM Socialite",
      title: "The Social Strategists",
      services: "Social Media Marketing- Facebook & Instagram, LinkedIn",
      platforms: "Instagram, Facebook, LinkedIn, Twitter, Pinterest",
      benefits: [
        "Increases brand visibility with creative and relatable content",
        "Builds lasting customer relationships through direct engagement",
        "Generates leads and conversions via social media advertising"
      ],
      icon: "📲"
    },
    {
      name: "Elli Inbox",
      title: "The Engagement Enthusiasts",
      services: "Email Marketing, Newsletters",
      platforms: "Mailchimp, HubSpot, ActiveCampaign for email automation",
      benefits: [
        "Keeps your brand top-of-mind for potential and existing customers",
        "Improves lead nurturing with segmentation and targeting",
        "Generates measurable ROI with minimal investment"
      ],
      icon: "💌"
    },
    {
      name: "Admiral Clicksworth",
      title: "The Ad Masters",
      services: "Google Ads, Facebook Ads, LinkedIn Ads",
      platforms: "Google Ads Manager, Facebook Business Manager, LinkedIn Ads",
      benefits: [
        "Delivers top-notch ad placements with competitive CPCs",
        "Expands your audience reach with tailored ads",
        "Maximizes revenue with cost-efficient ad spending"
      ],
      icon: "⚓"
    },
    {
      name: "Analytics Ally",
      title: "The Analytics",
      services: "Analytics, Reporting, Insights",
      platforms: "Google Analytics, Tableau, Microsoft Power BI",
      benefits: [
        "Understands what works and what doesn't in your marketing efforts",
        "Makes data-driven decisions for maximum impact",
        "Delivers comprehensive reports for better transparency and collaboration"
      ],
      icon: "📈"
    },
    {
      name: "Cammy Creator",
      title: "The Campaign Architect",
      services: "Full Campaign Management (All Services Combined)",
      platforms: "All combined platforms (Google, Facebook, email, other social media platforms)",
      benefits: [
        "Saves time with an all-in-one marketing partner",
        "Delivers synergy across all channels for maximum results",
        "Ensures consistent messaging and branding throughout"
      ],
      icon: "🏗️"
    },
    {
      name: "PR Prestigo",
      title: "The PR and Reputation Guardians",
      services: "PR and Reputation Management",
      platforms: "Media outlets and press release distribution channels, Social media listening and monitoring tools",
      benefits: [
        "Enhances credibility and trust with targeted media coverage",
        "Increases brand visibility and reach through strategic PR efforts",
        "Safeguards your online reputation with proactive monitoring and management"
      ],
      icon: "🛡️"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Meet Our Service <span className="gradient-text">Characters!</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each character represents our specialized expertise in different areas of digital marketing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {characters.map((character, index) => (
            <Card key={index} className="p-6 card-elevation bg-secondary/30 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{character.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">{character.title}</h3>
                  <h4 className="text-lg font-semibold mb-2">{character.name}</h4>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <h5 className="font-semibold text-foreground mb-2">Services:</h5>
                  <p className="text-muted-foreground">{character.services}</p>
                </div>

                <div>
                  <h5 className="font-semibold text-foreground mb-2">Platforms Used:</h5>
                  <p className="text-muted-foreground">{character.platforms}</p>
                </div>

                <div>
                  <h5 className="font-semibold text-foreground mb-2">Benefits:</h5>
                  <ul className="space-y-1 text-muted-foreground">
                    {character.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};