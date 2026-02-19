import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Ryan brought an incredible energy to our wedding. Every guest was on the dance floor. Professional, punctual, and absolutely phenomenal behind the kit.",
    name: "Sarah & James",
    role: "Wedding Client",
  },
  {
    quote: "We've worked with many session drummers, but Ryan's feel and reliability are unmatched. He nails it every time — in the studio and on stage.",
    name: "Mark Thompson",
    role: "Producer / Bandleader",
  },
  {
    quote: "Booking Ryan for our corporate gala was the best decision we made. He read the room perfectly and elevated the entire evening.",
    name: "Lisa Chen",
    role: "Event Coordinator",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">What People Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="bg-card border border-border rounded-lg p-8 relative"
            >
              <Quote className="text-primary/20 absolute top-4 right-4" size={32} />
              <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="text-foreground font-display font-bold">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
