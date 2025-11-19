import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Hero Section
      "hero.title.line1": "CRAFTING",
      "hero.title.line2": "DIGITAL",
      "hero.title.line3": "SERENITY.",
      "hero.subtitle": "Professional websites, seamlessly delivered. Based in Orlando, FL.",
      "hero.cta": "Let's Talk",
      
      // Navigation
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.philosophy": "Philosophy",
      "nav.portfolio": "Portfolio",
      "nav.contact": "Contact",
      
      // Services Section
      "services.title": "SOLUTIONS FOR YOUR VISION.",
      "services.express.title": "EXPRESS LAUNCH",
      "services.express.subtitle": "Perfect for entrepreneurs and personal projects needing an elegant and effective digital business card.",
      "services.express.price": "$149",
      "services.express.feature1": "Single-Page Website (One-Pager): A fluid and direct design with up to 3 sections (e.g., Home, Services, Contact).",
      "services.express.feature2": "Fully Responsive & Modern Design: A website that looks amazing on any device.",
      "services.express.feature3": "Contact Form Integration: So you never miss a business opportunity.",
      "services.express.feature4": "Social Media Links: Direct links to your profiles.",
      "services.express.feature5": "1-Week Launch: Once all content is provided.",
      "services.express.feature6": "1 Week of Post-Launch Support: Includes minor adjustments.",
      "services.express.feature7": "Optional Monthly Maintenance: $9.99/mo - Includes high-speed hosting, guaranteed security updates, and one (1) minor change request per month.",
      
      // Add more translations as needed...
    }
  },
  es: {
    translation: {
      // Hero Section
      "hero.title.line1": "CREANDO",
      "hero.title.line2": "SERENIDAD",
      "hero.title.line3": "DIGITAL.",
      "hero.subtitle": "Sitios web profesionales, entregados sin complicaciones. Basado en Orlando, FL.",
      "hero.cta": "Hablemos",
      
      // Navigation
      "nav.home": "Inicio",
      "nav.services": "Servicios",
      "nav.philosophy": "Filosofía",
      "nav.portfolio": "Portafolio",
      "nav.contact": "Contacto",
      
      // Services Section
      "services.title": "SOLUCIONES PARA TU VISIÓN.",
      "services.express.title": "LANZAMIENTO EXPRESS",
      "services.express.subtitle": "Perfecto para emprendedores y proyectos personales que necesitan una tarjeta de presentación digital elegante y efectiva.",
      "services.express.price": "$149",
      "services.express.feature1": "Sitio Web de Una Página (One-Pager): Un diseño fluido y directo con hasta 3 secciones (ej. Inicio, Servicios, Contacto).",
      "services.express.feature2": "Diseño Totalmente Responsivo y Moderno: Un sitio web que se ve increíble en cualquier dispositivo.",
      "services.express.feature3": "Integración de Formulario de Contacto: Para que nunca pierdas una oportunidad de negocio.",
      "services.express.feature4": "Enlaces a Redes Sociales: Links directos a tus perfiles.",
      "services.express.feature5": "Lanzamiento en 1 Semana: Una vez que se proporcione todo el contenido.",
      "services.express.feature6": "1 Semana de Soporte Post-Lanzamiento: Incluye ajustes menores.",
      "services.express.feature7": "Mantenimiento Mensual Opcional: $9.99/mes - Incluye hosting de alta velocidad, actualizaciones de seguridad garantizadas, y una (1) solicitud de cambio menor por mes.",
      
      // Add more translations as needed...
    }
  }
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // Idioma por defecto si no es español
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;