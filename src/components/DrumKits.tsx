import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { VolumeX, Volume1, Volume2, Cpu } from "lucide-react";

const setups = [
  { icon: VolumeX, title: "Silent / Ultra-Quiet", desc: "Electronic kit with mesh heads for venues with strict noise limits. Full sound through PA, zero stage volume.", tag: "Restaurants · Rooftops · Hotels" },
  { icon: Volume1, title: "Low-Volume Acoustic", desc: "Acoustic kit with low-volume cymbals and dampening. Warm, natural tone at a fraction of the volume.", tag: "Small venues · Cocktail events" },
  { icon: Volume2, title: "Full Acoustic", desc: "Professional acoustic kit, fully mic'd and ready for any stage. Powerful, dynamic, and commanding.", tag: "Concerts · Festivals · Large events" },
  { icon: Cpu, title: "Hybrid / Electronic", desc: "Acoustic core with electronic triggers and pads. Versatile setup for modern productions requiring backing tracks or click.", tag: "Productions · Corporate · Touring" },
];

const DrumKits = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="setups" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">Setup Versatility</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Right Kit for Every Venue
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I adapt my setup to match your venue's requirements — from whisper-quiet to full power.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {setups.map((setup, i) => (
            <motion.div
              key={setup.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <setup.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-bold text-foreground mb-2">{setup.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{setup.desc}</p>
              <span className="text-xs text-primary/80 font-body">{setup.tag}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DrumKits;
