import { motion } from "framer-motion";
import { useState } from "react";
import portfolioDisuaferca from "@/assets/portfolio-disuaferca.jpg";
import portfolioTarot from "@/assets/portfolio-tarot.jpg";
import portfolioLumen from "@/assets/portfolio-lumen.jpg";
import portfolioRealty from "@/assets/portfolio-realty.jpg";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const projects = [
  {
    title: "Disuaferca",
    image: portfolioDisuaferca,
    description: "Modern e-commerce platform with elegant dark aesthetics and seamless product showcase."
  },
  {
    title: "Carmen Cecilia Tarot",
    image: portfolioTarot,
    description: "Mystical and spiritual website with custom booking system and content management."
  },
  {
    title: "Proyecto Lumen",
    image: portfolioLumen,
    description: "Architectural portfolio showcasing luminous modern design and interactive galleries."
  },
  {
    title: "Serene Spaces Realty",
    image: portfolioRealty,
    description: "Premium real estate platform with property listings and virtual tour integration."
  }
];

const SelectedWork = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="selected-work" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-6xl font-heading font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          SELECTED WORK.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer relative overflow-hidden rounded-lg aspect-video"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {selectedProject?.description}
            </DialogDescription>
          </DialogHeader>
          {selectedProject && (
            <div className="mt-4">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SelectedWork;
