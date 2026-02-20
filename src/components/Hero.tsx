import { motion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";
import heroBg from "@/assets/ryan-main-3.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Ryan Blunden performing live" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4"
        >
          Professional Drummer · Brisbane, Australia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-foreground mb-6 tracking-tight"
        >
          Ryan Blunden
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Professional drummer for live events, studio sessions & touring.
          <br className="hidden md:block" />
          30+ years of high-energy performances.
        </motion.p>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            Book a Call
          </a>
          <a
            href="#videos"
            className="flex items-center gap-2 border border-border text-foreground px-8 py-3 rounded-md font-semibold text-lg hover:border-primary hover:text-primary transition-colors"
          >
            <Play size={18} /> Watch Performance
          </a>
        </motion.div> */}
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-muted-foreground" size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
