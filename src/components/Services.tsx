import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const pricingPlans = [
  {
    name: "Express Launch",
    price: "$149",
    description: "Perfect for entrepreneurs and personal projects needing an elegant and effective digital business card.",
    features: [
      "Single-Page Website (One-Pager): A fluid and direct design with up to 3 sections (e.g., Home, Services, Contact).",
      "Fully Responsive & Modern Design: A website that looks amazing on any device.",
      "Contact Form Integration: So you never miss a business opportunity.",
      "Social Media Links: Direct links to your profiles.",
      "1-Week Launch: Once all content is provided.",
      "1 Week of Post-Launch Support: Includes minor adjustments.",
      "Optional Monthly Maintenance: $9.99/mo - Includes high-speed hosting, SSL security certificate, and one (1) minor change request per month."
    ],
    cta: "Get Started"
  },
  {
    name: "Digital Boost",
    price: "$300",
    description: "The ideal solution for growing businesses that need a complete website to showcase their brand, services, and attract their target audience.",
    features: [
      "Everything in the Express Launch plan, plus:",
      "Complete Website: Up to 5 pages/sections (e.g., Home, About, Services, Blog, Contact).",
      "Integrated Blog Section: So you can share news and valuable content (includes setup of 3 initial posts).",
      "Basic SEO Optimization: We help Google understand your business from day one.",
      "BONUS: 1 Month of Unlimited Adjustments: Full support during the first 30 days to make your website perfect.",
      "Optional Monthly Maintenance: $14.99/mo - Includes high-speed hosting, SSL security certificate, and up to three (3) minor change requests per month."
    ],
    cta: "Start Building",
    featured: true
  },
  {
    name: "Advanced Portal",
    price: "Starting at $750",
    description: "For established businesses or projects that require custom functionality, such as exclusive content for members or specific integrations.",
    features: [
      "Everything in the Digital Boost plan, plus:",
      "User Registration & Login System: Allow your visitors to create accounts and access private content.",
      "Members-Only Content Area: Website sections visible only to registered users.",
      "Extended Website: Up to 10 pages/sections included.",
      "Robust Backend Technology: We use leading solutions like Firebase or Supabase for user management, ensuring security and scalability.",
      "Priority Support: Preferential attention throughout the development and post-launch phases.",
      "Optional Monthly Maintenance: $29.99/mo - Includes high-speed hosting, SSL security certificate, and up to five (5) minor change requests per month."
    ],
    cta: "Let's Discuss"
  }
];

const Services = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-6xl font-heading font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          SOLUTIONS FOR YOUR VISION.
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`bg-card border-border transition-all duration-300 hover:border-primary/50 ${
                plan.featured ? 'ring-2 ring-primary shadow-lg' : ''
              }`}
            >
              {plan.featured && (
                <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium uppercase tracking-wide">
                  Recommended
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-heading">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-heading font-bold text-foreground">{plan.price}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 uppercase tracking-wide"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-foreground/80 font-body flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span>Special Offer: Sign up for any annual maintenance plan and get your domain name free for the first year.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
