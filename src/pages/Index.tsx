import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
// import SelectedWork from "@/components/SelectedWork";
// import Philosophy from "@/components/Philosophy";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      {/* Comentamos temporalmente los otros componentes para aislar el problema */}
      {/* <SelectedWork /> */}
      {/* <Philosophy /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
      <div className="py-20 text-center">
        <h2 className="text-4xl font-heading font-bold text-foreground">Sitio funcionando correctamente</h2>
        <p className="text-muted-foreground mt-4">Si ves esto, el problema podría estar en SelectedWork, Philosophy, Contact o Footer.</p>
      </div>
    </div>
  );
};

export default Index;
