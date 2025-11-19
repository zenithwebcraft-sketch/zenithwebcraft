import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Sparkles, Code, Palette, Rocket } from "lucide-react";

const Philosophy = () => {
  const { t } = useTranslation();
  
  const values = [
    {
      icon: Sparkles,
      titleEn: "Simplicity",
      titleEs: "Simplicidad",
      descEn: "Clean, intuitive designs that users love",
      descEs: "Diseños limpios e intuitivos que los usuarios aman"
    },
    {
      icon: Code,
      titleEn: "Quality",
      titleEs: "Calidad",
      descEn: "Modern, maintainable code built to last",
      descEs: "Código moderno y mantenible construido para durar"
    },
    {
      icon: Palette,
      titleEn: "Aesthetics",
      titleEs: "Estética",
      descEn: "Beautiful interfaces that reflect your brand",
      descEs: "Interfaces hermosas que reflejan tu marca"
    },
    {
      icon: Rocket,
      titleEn: "Performance",
      titleEs: "Rendimiento",
      descEn: "Fast, optimized sites that convert",
      descEs: "Sitios rápidos y optimizados que convierten"
    }
  ];
  
  return (
    <section id="philosophy" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-heading font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('philosophy.title')}
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Main text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-foreground/90 font-body leading-relaxed mb-8">
                {t('philosophy.text')}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <p className="text-4xl font-bold text-primary mb-2">5+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <p className="text-4xl font-bold text-primary mb-2">20+</p>
                  <p className="text-sm text-muted-foreground">Projects Delivered</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <p className="text-4xl font-bold text-primary mb-2">100%</p>
                  <p className="text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <p className="text-4xl font-bold text-primary mb-2">24h</p>
                  <p className="text-sm text-muted-foreground">Response Time</p>
                </div>
              </div>
            </motion.div>

            {/* Values grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <Icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-lg font-heading font-bold mb-2">
                      {t('philosophy.title') === 'EL ARTE.' ? value.titleEs : value.titleEn}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t('philosophy.title') === 'EL ARTE.' ? value.descEs : value.descEn}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
