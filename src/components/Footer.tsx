import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-heading font-bold mb-2">ZenithWebCraft</h3>
            <p className="text-sm text-muted-foreground">Crafting Digital Serenity</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="mailto:hello@zenithwebcraft.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 ZenithWebCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
