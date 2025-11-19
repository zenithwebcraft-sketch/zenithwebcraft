import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Philosophy = () => {
  const { t } = useTranslation();
  
  return (
    <section id="philosophy" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2 
          className="text-4xl md:text-6xl font-heading font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t('philosophy.title')}
        </motion.h2>

        <motion.p 
          className="text-lg md:text-xl text-foreground/90 font-body leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('philosophy.text')}
        </motion.p>
      </div>
    </section>
  );
};

export default Philosophy;
