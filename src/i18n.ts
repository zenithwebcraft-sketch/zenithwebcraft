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
      "nav.portfolio": "Portfolio",
      "nav.about": "About",
      "nav.contact": "Contact",
      
      // Services Section
      "services.title": "SOLUTIONS FOR YOUR VISION.",
      "services.recommended": "Recommended",
      "services.specialOffer": "Special Offer: Sign up for any annual maintenance plan and get your domain name free for the first year.",
      
      // Express Launch Plan
      "services.express.name": "Express Launch",
      "services.express.price": "$149",
      "services.express.description": "Perfect for entrepreneurs and personal projects needing an elegant and effective digital business card.",
      "services.express.feature1": "Single-Page Website (One-Pager): A fluid and direct design with up to 3 sections (e.g., Home, Services, Contact).",
      "services.express.feature2": "Fully Responsive & Modern Design: A website that looks amazing on any device.",
      "services.express.feature3": "Contact Form Integration: So you never miss a business opportunity.",
      "services.express.feature4": "Social Media Links: Direct links to your profiles.",
      "services.express.feature5": "1-Week Launch: Once all content is provided.",
      "services.express.feature6": "1 Week of Post-Launch Support: Includes minor adjustments.",
      "services.express.feature7": "Optional Monthly Maintenance: $9.99/mo - Includes high-speed hosting, SSL security certificate, and one (1) minor change request per month.",
      "services.express.cta": "Get Started",
      
      // Digital Boost Plan
      "services.boost.name": "Digital Boost",
      "services.boost.price": "$300",
      "services.boost.description": "The ideal solution for growing businesses that need a complete website to showcase their brand, services, and attract their target audience.",
      "services.boost.feature1": "Everything in the Express Launch plan, plus:",
      "services.boost.feature2": "Complete Website: Up to 5 pages/sections (e.g., Home, About, Services, Blog, Contact).",
      "services.boost.feature3": "Integrated Blog Section: So you can share news and valuable content (includes setup of 3 initial posts).",
      "services.boost.feature4": "Basic SEO Optimization: We help Google understand your business from day one.",
      "services.boost.feature5": "BONUS: 1 Month of Unlimited Adjustments: Full support during the first 30 days to make your website perfect.",
      "services.boost.feature6": "Optional Monthly Maintenance: $14.99/mo - Includes high-speed hosting, SSL security certificate, and up to three (3) minor change requests per month.",
      "services.boost.cta": "Start Building",
      
      // Advanced Portal Plan
      "services.portal.name": "Advanced Portal",
      "services.portal.price": "Starting at $750",
      "services.portal.description": "For established businesses or projects that require custom functionality, such as exclusive content for members or specific integrations.",
      "services.portal.feature1": "Everything in the Digital Boost plan, plus:",
      "services.portal.feature2": "User Registration & Login System: Allow your visitors to create accounts and access private content.",
      "services.portal.feature3": "Members-Only Content Area: Website sections visible only to registered users.",
      "services.portal.feature4": "Extended Website: Up to 10 pages/sections included.",
      "services.portal.feature5": "Robust Backend Technology: We use leading solutions like Firebase or Supabase for user management, ensuring security and scalability.",
      "services.portal.feature6": "Priority Support: Preferential attention throughout the development and post-launch phases.",
      "services.portal.feature7": "Optional Monthly Maintenance: $29.99/mo - Includes high-speed hosting, SSL security certificate, and up to five (5) minor change requests per month.",
      "services.portal.cta": "Let's Discuss",
      
      // Selected Work Section
      "work.title": "SELECTED WORK.",
      "work.disuaferca.title": "Disuaferca",
      "work.disuaferca.description": "A sleek and professional web presence for an international import/export business, focused on trust and efficiency.",
      "work.people.title": "People Sin Limites",
      "work.people.description": "A warm and serene digital space for a personal coaching and tarot brand, focusing on introspection and empowerment.",
      "work.lumen.title": "Proyecto Lumen",
      "work.lumen.description": "A powerful and motivational platform for a men's transformation journey, centered on community, health, and self-discovery.",
      
      // Philosophy Section
      "philosophy.title": "THE CRAFT.",
      "philosophy.text": "I believe the best digital experiences are born from a place of calm. In a world of digital noise, my approach is a quiet one: to build with intention, to value clarity over complexity, and to craft websites that feel less like technology and more like a serene, thoughtful space. This is the craft of digital serenity.",
      
      // Contact Section
      "contact.title": "LET'S TALK.",
      "contact.subtitle": "Have a project in mind? Let's create something serene together.",
      "contact.heading": "Get in Touch",
      "contact.description": "Ready to bring your vision to life? Send me a message and I'll get back to you within 24 hours.",
      "contact.responseTime": "Response Time:",
      "contact.responseTimeValue": "Within 24 hours",
      "contact.location": "Location:",
      "contact.locationValue": "Orlando, FL",
      "contact.availability": "Availability:",
      "contact.availabilityValue": "Monday - Saturday",
      "contact.email": "contact@zenithwebcraft.com",
      "contact.linkedin": "LinkedIn Profile",
      "contact.github": "GitHub Projects",
      "contact.form.name": "Your Name",
      "contact.form.email": "Your Email",
      "contact.form.message": "Tell me about your project",
      "contact.form.submit": "Send Message",
      "contact.form.sending": "Sending...",
      "contact.form.error": "Error",
      "contact.form.errorEmpty": "Please fill in all fields.",
      "contact.form.errorEmail": "Please enter a valid email address.",
      "contact.form.success": "Message sent!",
      "contact.form.successMessage": "Thank you for reaching out. I'll get back to you soon.",
      
      // Footer
      "footer.tagline": "Crafting Digital Serenity",
      "footer.copyright": "© 2025 ZenithWebCraft. All rights reserved.",
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
      "nav.portfolio": "Portafolio",
      "nav.about": "Acerca de",
      "nav.contact": "Contacto",
      
      // Services Section
      "services.title": "SOLUCIONES PARA TU VISIÓN.",
      "services.recommended": "Recomendado",
      "services.specialOffer": "Oferta Especial: Contrata cualquier plan de mantenimiento anual y obtén tu nombre de dominio gratis el primer año.",
      
      // Express Launch Plan
      "services.express.name": "Lanzamiento Express",
      "services.express.price": "$149",
      "services.express.description": "Perfecto para emprendedores y proyectos personales que necesitan una tarjeta de presentación digital elegante y efectiva.",
      "services.express.feature1": "Sitio Web de Una Página (One-Pager): Un diseño fluido y directo con hasta 3 secciones (ej. Inicio, Servicios, Contacto).",
      "services.express.feature2": "Diseño Totalmente Responsivo y Moderno: Un sitio web que se ve increíble en cualquier dispositivo.",
      "services.express.feature3": "Integración de Formulario de Contacto: Para que nunca pierdas una oportunidad de negocio.",
      "services.express.feature4": "Enlaces a Redes Sociales: Links directos a tus perfiles.",
      "services.express.feature5": "Lanzamiento en 1 Semana: Una vez que se proporcione todo el contenido.",
      "services.express.feature6": "1 Semana de Soporte Post-Lanzamiento: Incluye ajustes menores.",
      "services.express.feature7": "Mantenimiento Mensual Opcional: $9.99/mes - Incluye hosting de alta velocidad, certificado de seguridad SSL, y una (1) solicitud de cambio menor por mes.",
      "services.express.cta": "Comenzar",
      
      // Digital Boost Plan
      "services.boost.name": "Impulso Digital",
      "services.boost.price": "$300",
      "services.boost.description": "La solución ideal para negocios en crecimiento que necesitan un sitio web completo para mostrar su marca, servicios y atraer a su público objetivo.",
      "services.boost.feature1": "Todo lo del plan Lanzamiento Express, más:",
      "services.boost.feature2": "Sitio Web Completo: Hasta 5 páginas/secciones (ej. Inicio, Acerca de, Servicios, Blog, Contacto).",
      "services.boost.feature3": "Sección de Blog Integrada: Para que puedas compartir noticias y contenido valioso (incluye configuración de 3 publicaciones iniciales).",
      "services.boost.feature4": "Optimización SEO Básica: Ayudamos a Google a entender tu negocio desde el primer día.",
      "services.boost.feature5": "BONO: 1 Mes de Ajustes Ilimitados: Soporte completo durante los primeros 30 días para hacer tu sitio web perfecto.",
      "services.boost.feature6": "Mantenimiento Mensual Opcional: $14.99/mes - Incluye hosting de alta velocidad, certificado de seguridad SSL, y hasta tres (3) solicitudes de cambios menores por mes.",
      "services.boost.cta": "Empezar a Construir",
      
      // Advanced Portal Plan
      "services.portal.name": "Portal Avanzado",
      "services.portal.price": "Desde $750",
      "services.portal.description": "Para negocios establecidos o proyectos que requieren funcionalidad personalizada, como contenido exclusivo para miembros o integraciones específicas.",
      "services.portal.feature1": "Todo lo del plan Impulso Digital, más:",
      "services.portal.feature2": "Sistema de Registro e Inicio de Sesión: Permite que tus visitantes creen cuentas y accedan a contenido privado.",
      "services.portal.feature3": "Área de Contenido Solo para Miembros: Secciones del sitio web visibles solo para usuarios registrados.",
      "services.portal.feature4": "Sitio Web Extendido: Hasta 10 páginas/secciones incluidas.",
      "services.portal.feature5": "Tecnología Backend Robusta: Usamos soluciones líderes como Firebase o Supabase para gestión de usuarios, garantizando seguridad y escalabilidad.",
      "services.portal.feature6": "Soporte Prioritario: Atención preferencial durante las fases de desarrollo y post-lanzamiento.",
      "services.portal.feature7": "Mantenimiento Mensual Opcional: $29.99/mes - Incluye hosting de alta velocidad, certificado de seguridad SSL, y hasta cinco (5) solicitudes de cambios menores por mes.",
      "services.portal.cta": "Conversemos",
      
      // Selected Work Section
      "work.title": "TRABAJOS SELECCIONADOS.",
      "work.disuaferca.title": "Disuaferca",
      "work.disuaferca.description": "Una presencia web elegante y profesional para un negocio internacional de importación/exportación, enfocado en confianza y eficiencia.",
      "work.people.title": "People Sin Límites",
      "work.people.description": "Un espacio digital cálido y sereno para una marca de coaching personal y tarot, enfocado en la introspección y el empoderamiento.",
      "work.lumen.title": "Proyecto Lumen",
      "work.lumen.description": "Una plataforma poderosa y motivacional para un viaje de transformación masculina, centrado en comunidad, salud y autodescubrimiento.",
      
      // Philosophy Section
      "philosophy.title": "EL ARTE.",
      "philosophy.text": "Creo que las mejores experiencias digitales nacen desde un lugar de calma. En un mundo de ruido digital, mi enfoque es uno tranquilo: construir con intención, valorar la claridad sobre la complejidad, y crear sitios web que se sientan menos como tecnología y más como un espacio sereno y reflexivo. Este es el arte de la serenidad digital.",
      
      // Contact Section
      "contact.title": "HABLEMOS.",
      "contact.subtitle": "¿Tienes un proyecto en mente? Creemos algo sereno juntos.",
      "contact.heading": "Ponte en Contacto",
      "contact.description": "¿Listo para dar vida a tu visión? Envíame un mensaje y te responderé dentro de 24 horas.",
      "contact.responseTime": "Tiempo de Respuesta:",
      "contact.responseTimeValue": "Dentro de 24 horas",
      "contact.location": "Ubicación:",
      "contact.locationValue": "Orlando, FL",
      "contact.availability": "Disponibilidad:",
      "contact.availabilityValue": "Lunes - Sábado",
      "contact.email": "contacto@zenithwebcraft.com",
      "contact.linkedin": "Perfil de LinkedIn",
      "contact.github": "Proyectos en GitHub",
      "contact.form.name": "Tu Nombre",
      "contact.form.email": "Tu Correo Electrónico",
      "contact.form.message": "Cuéntame sobre tu proyecto",
      "contact.form.submit": "Enviar Mensaje",
      "contact.form.sending": "Enviando...",
      "contact.form.error": "Error",
      "contact.form.errorEmpty": "Por favor completa todos los campos.",
      "contact.form.errorEmail": "Por favor ingresa un correo electrónico válido.",
      "contact.form.success": "¡Mensaje enviado!",
      "contact.form.successMessage": "Gracias por contactarme. Te responderé pronto.",
      
      // Footer
      "footer.tagline": "Creando Serenidad Digital",
      "footer.copyright": "© 2025 ZenithWebCraft. Todos los derechos reservados.",
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