import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail } from "lucide-react";

const Booking = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">Get in Touch</p> */}
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Direct Contact</h3>
              <p className="text-muted-foreground mb-6">
                Prefer to get in touch directly? Call or email — I typically respond within 24 hours.
              </p>
            </div> */}

            <a href="tel:+61400000000" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium">0466 021 134</p>
              </div>
            </a>

            <a href="mailto:ryan@example.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium"><a href="mailto:ryan@ryanblundendrums.com">ryan@ryanblundendrums.com</a></p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
