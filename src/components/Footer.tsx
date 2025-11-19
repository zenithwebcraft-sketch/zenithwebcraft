import { Mail } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="py-12 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-2">ZenithWebCraft</h3>
            <p className="text-sm text-muted-foreground mb-4">{t('footer.tagline')}</p>
            <p className="text-sm text-muted-foreground">
              Orlando, FL<br/>
              Professional web design & development
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-bold mb-4 uppercase tracking-wide">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection('selected-work')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                {t('nav.portfolio')}
              </button>
              <button
                onClick={() => scrollToSection('philosophy')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                {t('nav.contact')}
              </button>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-heading font-bold mb-4 uppercase tracking-wide">Contact</h4>
            <div className="flex items-start gap-3">
              <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <a 
                href="mailto:contact@zenithwebcraft.com" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
              >
                contact@zenithwebcraft.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
