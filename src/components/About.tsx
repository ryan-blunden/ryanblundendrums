import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "30+", label: "Years Playing" },
  { value: "500+", label: "Live Events" },
  { value: "15+", label: "Countries Toured" },
  { value: "50+", label: "Artists Collaborated" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">About</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Three Decades Behind the Kit
          </h2>
          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p>
              With over 30 years of professional drumming experience, I've performed across every setting
              imaginable — from intimate jazz clubs to festival main stages, elegant weddings to high-energy
              corporate events. My career has taken me across Australia and through extensive tours of Europe.
            </p>
            <p>
              I bring deep musical versatility, having spent decades playing across rock, pop, funk, soul, jazz,
              blues, and everything in between. Every performance is approached with the same commitment:
              precision, energy, and an unwavering professionalism that clients and bandmates can rely on.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-display font-black text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
