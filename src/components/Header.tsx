import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-heading font-extrabold tracking-wider">
          ZenithWebCraft
        </h1>
        
        <Button 
          onClick={scrollToContact}
          className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium uppercase tracking-wide"
        >
          Let's Talk
        </Button>
      </div>
    </header>
  );
};

export default Header;
