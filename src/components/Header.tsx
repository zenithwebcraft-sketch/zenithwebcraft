import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-heading font-extrabold tracking-wider hover:text-primary transition-colors"
          >
            ZenithWebCraft
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('selected-work')}
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('philosophy')}
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium uppercase tracking-wide"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('selected-work')}
                className="text-left text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide py-2"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('philosophy')}
                className="text-left text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-sm font-medium hover:text-primary transition-colors uppercase tracking-wide py-2"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium uppercase tracking-wide w-full"
              >
                Let's Talk
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
