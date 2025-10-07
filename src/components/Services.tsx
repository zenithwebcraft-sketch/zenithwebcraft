import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const pricingPlans = [
  {
    name: "Despegue Express",
    price: "$1,499",
    description: "Perfect for small businesses and personal projects",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Basic SEO optimization",
      "Contact form integration",
      "Social media links",
      "1 month of support"
    ],
    cta: "Get Started"
  },
  {
    name: "Impulso Digital",
    price: "$2,999",
    description: "Ideal for growing businesses",
    features: [
      "Up to 10 pages",
      "Advanced animations",
      "Enhanced SEO & analytics",
      "Content management system",
      "E-commerce ready (up to 20 products)",
      "Blog functionality",
      "3 months of support"
    ],
    cta: "Start Building",
    featured: true
  },
  {
    name: "Portal Avanzado",
    price: "$5,499",
    description: "Complete solution for enterprises",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "Advanced integrations",
      "Full e-commerce solution",
      "Multi-language support",
      "Custom admin dashboard",
      "6 months of support & maintenance"
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
                  Recomendado
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
