import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Ear, Shield, Users, Music, Star } from "lucide-react";

const differentiators = [
  { icon: Zap, title: "High-Energy Performance", desc: "Every show gets full commitment — I play like every gig is the biggest of my career." },
  { icon: Ear, title: "Reads the Room", desc: "30+ years of experience means I instinctively know when to push and when to pull back." },
  { icon: Shield, title: "Rock-Solid Reliability", desc: "Professional preparation, punctual, and consistent — no surprises, only great performances." },
  { icon: Music, title: "Musicality Over Flash", desc: "Serving the song and the moment, not showing off. Feel and groove come first." },
  { icon: Users, title: "Stage Presence", desc: "I don't just sit behind the kit — I connect with the band, the audience, and the energy." },
  { icon: Star, title: "International Pedigree", desc: "Extensive touring across Europe and Australia — tested on every kind of stage." },
];

const WhyMe = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">Why Book Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Sets Me Apart
          </h2>
          <p className="text-xl md:text-2xl text-primary font-display font-semibold italic">
            "I don't just keep time — I elevate the entire performance."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors"
            >
              <item.icon className="text-primary mb-4" size={28} />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
