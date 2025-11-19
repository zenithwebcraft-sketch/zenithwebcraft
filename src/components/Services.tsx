import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { trackCTAClick } from '@/analytics';

const Services = () => {
  const { t } = useTranslation();
  
  const pricingPlans = [
    {
      name: t('services.express.name'),
      price: t('services.express.price'),
      description: t('services.express.description'),
      features: [
        "Single-page website (up to 3 sections)",
        "Fully responsive design",
        "Contact form integration",
        "Social media links",
        "1-week launch time",
        "1 week post-launch support",
        "Optional maintenance: $9.99/mo"
      ],
      featuresEs: [
        "Sitio web de una página (hasta 3 secciones)",
        "Diseño totalmente responsive",
        "Integración de formulario de contacto",
        "Enlaces a redes sociales",
        "Lanzamiento en 1 semana",
        "1 semana de soporte post-lanzamiento",
        "Mantenimiento opcional: $9.99/mes"
      ],
      cta: t('services.express.cta')
    },
    {
      name: t('services.boost.name'),
      price: t('services.boost.price'),
      description: t('services.boost.description'),
      features: [
        "Everything in Express Launch",
        "Complete website (up to 5 pages)",
        "Integrated blog section (3 posts included)",
        "Basic SEO optimization",
        "BONUS: 1 month unlimited adjustments",
        "Optional maintenance: $14.99/mo"
      ],
      featuresEs: [
        "Todo lo del Lanzamiento Express",
        "Sitio web completo (hasta 5 páginas)",
        "Sección de blog integrada (3 posts incluidos)",
        "Optimización SEO básica",
        "BONO: 1 mes de ajustes ilimitados",
        "Mantenimiento opcional: $14.99/mes"
      ],
      cta: t('services.boost.cta'),
      featured: true
    },
    {
      name: t('services.portal.name'),
      price: t('services.portal.price'),
      description: t('services.portal.description'),
      features: [
        "Everything in Digital Boost",
        "User registration & login system",
        "Members-only content area",
        "Extended website (up to 10 pages)",
        "Robust backend (Firebase/Supabase)",
        "Priority support",
        "Optional maintenance: $29.99/mo"
      ],
      featuresEs: [
        "Todo lo del Impulso Digital",
        "Sistema de registro e inicio de sesión",
        "Área de contenido solo para miembros",
        "Sitio web extendido (hasta 10 páginas)",
        "Backend robusto (Firebase/Supabase)",
        "Soporte prioritario",
        "Mantenimiento opcional: $29.99/mes"
      ],
      cta: t('services.portal.cta')
    }
  ];

  const scrollToContact = () => {
    trackCTAClick('Services', 'Get Started / Start Building / Let\'s Discuss');
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
          {pricingPlans.map((plan, index) => {
            const isSpanish = t('services.title') === 'SOLUCIONES PARA TU VISIÓN.';
            const features = isSpanish ? plan.featuresEs : plan.features;
            
            return (
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
                  <CardDescription className="text-muted-foreground min-h-[60px]">{plan.description}</CardDescription>
                  <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                    <span className="text-5xl font-heading font-bold text-primary">{plan.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {features.map((feature, featureIndex) => (
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
            );
          })}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-foreground/80 font-body flex items-center justify-center gap-2 flex-wrap">
            <Sparkles className="h-5 w-5 text-primary" />
            <span>{t('services.specialOffer')}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
