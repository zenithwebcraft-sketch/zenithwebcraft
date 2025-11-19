import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useTranslation();
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Abstract elegant background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/70 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-extrabold tracking-wider mb-8 sm:mb-10 text-foreground leading-tight sm:leading-none">
            {t('hero.title.line1')}<br />{t('hero.title.line2')}<br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>{t('hero.title.line3')}
          </h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-body mb-10 sm:mb-12 max-w-2xl mx-auto px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('hero.subtitle')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-lg sm:text-xl px-10 sm:px-12 py-7 sm:py-8 uppercase tracking-wide font-medium shadow-lg hover:shadow-xl"
            >
              {t('hero.cta')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
