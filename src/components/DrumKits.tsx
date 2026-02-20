import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { VolumeX, Volume1, Volume2, Cpu } from "lucide-react";

const setups = [
  { icon: VolumeX, title: "Ultra-Quiet", desc: "Roland Octapad SPD-30 for ultra-low volume can compact setup."},
  { icon: Cpu, title: "Low Stage-volume Electric Kit", desc: "Roland VAD 506 with mesh with full-size shells with all sound routed through PA."},
  { icon: Volume1, title: "Compact Acoustic Kit", desc: "Pearl Rhythm traveller kit for tight and lower-volume settings wanting acoustic drums."},
  { icon: Volume2, title: "Full Acoustic Kit", desc: "The real deal. Mapex Black Panther kit in 4, 5 and 6 piece setups." }
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
          {/* <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">Setup Versatility</p> */}
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Right Kit for Every Venue
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From ultra-quiet electronic kits for intimate venues to full acoustic rigs for festival stages and everything in between.
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
