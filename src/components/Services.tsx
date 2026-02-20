import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PartyPopper, Heart, Building2, Plane, Mic2, Headphones, GraduationCap } from "lucide-react";

const services = [
  { icon: PartyPopper, title: "Live Events", desc: "High-energy drumming for concerts, festivals, and live shows. I bring the stage presence that elevates every performance." },
  { icon: Heart, title: "Weddings", desc: "Elegant or energetic — I match the mood of your special day perfectly, from ceremony to dance floor." },
  { icon: Building2, title: "Corporate Events", desc: "Professional, polished performances for galas, conferences, and brand activations. Reliable and adaptable." },
  { icon: Plane, title: "Touring", desc: "Road-tested and tour-ready. Extensive experience touring internationally with reliability and stamina." },
  { icon: Mic2, title: "Studio Sessions", desc: "Precise, efficient studio drumming. I deliver polished tracks that serve your vision." },
  { icon: Headphones, title: "Remote Recording", desc: "Professional drum tracks recorded and delivered from my studio. Fast turnaround, broadcast quality." },
  { icon: GraduationCap, title: "Private Lessons", desc: "One-on-one drum lessons for all levels. Build your technique, musicality, and confidence." },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">Services</p> */}
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Services</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <service.icon className="text-primary mb-4" size={28} />
              <h3 className="font-display font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
