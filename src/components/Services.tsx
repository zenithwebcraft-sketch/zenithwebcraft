import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  
  const pricingPlans = [
    {
      name: t('services.express.name'),
      price: t('services.express.price'),
      description: t('services.express.description'),
      features: [
        t('services.express.feature1'),
        t('services.express.feature2'),
        t('services.express.feature3'),
        t('services.express.feature4'),
        t('services.express.feature5'),
        t('services.express.feature6'),
        t('services.express.feature7')
      ],
      cta: t('services.express.cta')
    },
    {
      name: t('services.boost.name'),
      price: t('services.boost.price'),
      description: t('services.boost.description'),
      features: [
        t('services.boost.feature1'),
        t('services.boost.feature2'),
        t('services.boost.feature3'),
        t('services.boost.feature4'),
        t('services.boost.feature5'),
        t('services.boost.feature6')
      ],
      cta: t('services.boost.cta'),
      featured: true
    },
    {
      name: t('services.portal.name'),
      price: t('services.portal.price'),
      description: t('services.portal.description'),
      features: [
        t('services.portal.feature1'),
        t('services.portal.feature2'),
        t('services.portal.feature3'),
        t('services.portal.feature4'),
        t('services.portal.feature5'),
        t('services.portal.feature6'),
        t('services.portal.feature7')
      ],
      cta: t('services.portal.cta')
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-6xl font-heading font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('services.title')}
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
                  {t('services.recommended')}
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
            <span>{t('services.specialOffer')}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
