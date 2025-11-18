import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
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
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Success message
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon."
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
            LET'S TALK.
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 font-body mb-12 max-w-2xl">
            Have a project in mind? Let's create something serene together.
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
                  contact@zenithwebcraft.com
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <Linkedin className="h-6 w-6 text-primary" />
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <Github className="h-6 w-6 text-primary" />
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">
                  GitHub Projects
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
                placeholder="Your Name"
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
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>
            
            <div>
              <Textarea 
                name="message"
                placeholder="Tell me about your project"
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
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
