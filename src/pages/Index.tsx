import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyMe from "@/components/WhyMe";
import PerformanceShowcase from "@/components/PerformanceShowcase";
import PhotoGallery from "@/components/PhotoGallery";
import Services from "@/components/Services";
import DrumKits from "@/components/DrumKits";
import Repertoire from "@/components/Repertoire";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <WhyMe />
      <PerformanceShowcase />
      <PhotoGallery />
      <Services />
      <DrumKits />
      <Repertoire />
      <Testimonials />
      <FAQ />
      <Booking />
      <Footer />
    </main>
  );
};

export default Index;
