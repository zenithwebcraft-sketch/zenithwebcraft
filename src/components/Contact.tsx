import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import portfolioDisuaferca from "@/assets/portfolio-disuaferca.jpg";
import portfolioDisuafercaProductos from "@/assets/portfolio-disuaferca-productos.jpg";
import portfolioDisuafercaImportacion from "@/assets/portfolio-disuaferca-importacion.jpg";
import portfolioDisuafercaBlog from "@/assets/portfolio-disuaferca-blog.jpg";
import portfolioPeopleFront from "@/assets/portfolio-people-front.jpg";
import portfolioPeopleMagia from "@/assets/portfolio-people-magia.jpg";
import portfolioPeopleCamino from "@/assets/portfolio-people-camino.jpg";
import portfolioPeopleContacto from "@/assets/portfolio-people-contacto.jpg";
import portfolioLumenFront from "@/assets/portfolio-lumen-front.jpg";
import portfolioLumenContacto from "@/assets/portfolio-lumen-contacto.jpg";
import portfolioLumenFuerza from "@/assets/portfolio-lumen-fuerza.jpg";
import portfolioLumenVitalidad from "@/assets/portfolio-lumen-vitalidad.jpg";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageGallery = ({ images, title }: { images: string[], title: string }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full">
      <img
        src={images[currentImageIndex]}
        alt={`${title} - Image ${currentImageIndex + 1}`}
        className="w-full rounded-lg"
      />

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
            onClick={prevImage}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
            onClick={nextImage}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-primary' : 'bg-primary/50'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const SelectedWork = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    images: string[];
    description: string;
  } | null>(null);

  const projects = [
    {
      title: t('work.disuaferca.title'),
      images: [
        portfolioDisuaferca,
        portfolioDisuafercaProductos,
        portfolioDisuafercaImportacion,
        portfolioDisuafercaBlog
      ],
      description: t('work.disuaferca.description')
    },
    {
      title: t('work.people.title'),
      images: [
        portfolioPeopleFront,
        portfolioPeopleMagia,
        portfolioPeopleCamino,
        portfolioPeopleContacto
      ],
      description: t('work.people.description')
    },
    {
      title: t('work.lumen.title'),
      images: [
        portfolioLumenFront,
        portfolioLumenFuerza,
        portfolioLumenVitalidad,
        portfolioLumenContacto
      ],
      description: t('work.lumen.description')
    },
  ];

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
          {t('work.title')}
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
                src={project.images[0]}
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
        <DialogContent className="bg-card border-border max-w-4xl">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {selectedProject?.description}
            </DialogDescription>
          </DialogHeader>
          {selectedProject && (
            <div className="mt-4">
              <ImageGallery images={selectedProject.images} title={selectedProject.title} />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default SelectedWork;
