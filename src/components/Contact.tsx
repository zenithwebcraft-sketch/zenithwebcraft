import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: t('contact.form.error'),
        description: t('contact.form.errorEmpty'),
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: t('contact.form.error'),
        description: t('contact.form.errorEmail'),
        variant: "destructive"
      });
      return;
    }

    // Success message
    toast({
      title: t('contact.form.success'),
      description: t('contact.form.successMessage')
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold mb-6">
            {t('contact.title')}
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 font-body mb-12 max-w-2xl">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <a href="mailto:contact@zenithwebcraft.com" className="text-lg hover:text-primary transition-colors">
                  {t('contact.email')}
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <Linkedin className="h-6 w-6 text-primary" />
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">
                  {t('contact.linkedin')}
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <Github className="h-6 w-6 text-primary" />
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">
                  {t('contact.github')}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <Input 
                name="name"
                type="text"
                placeholder={t('contact.form.name')}
                value={formData.name}
                onChange={handleChange}
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>
            
            <div>
              <Input 
                name="email"
                type="email"
                placeholder={t('contact.form.email')}
                value={formData.email}
                onChange={handleChange}
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>
            
            <div>
              <Textarea 
                name="message"
                placeholder={t('contact.form.message')}
                value={formData.message}
                onChange={handleChange}
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground min-h-[150px]"
                required
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 uppercase tracking-wide font-medium"
            >
              {t('contact.form.submit')}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
