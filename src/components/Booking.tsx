import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, Send } from "lucide-react";

const Booking = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", eventType: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — replace with actual form handler
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Book Ryan</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Ready to elevate your event? Get in touch and let's make it happen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Direct Contact</h3>
              <p className="text-muted-foreground mb-6">
                Prefer to get in touch directly? Call or email — I typically respond within 24 hours.
              </p>
            </div>

            <a href="tel:+61400000000" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="text-foreground font-medium">+61 400 000 000</p>
              </div>
            </a>

            <a href="mailto:ryan@example.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium">ryan@example.com</p>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {submitted ? (
              <div className="bg-card border border-primary/30 rounded-lg p-8 text-center">
                <div className="text-primary text-4xl mb-4">✓</div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Event Type</option>
                  <option value="wedding">Wedding</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="live">Live Event / Concert</option>
                  <option value="studio">Studio Session</option>
                  <option value="touring">Touring</option>
                  <option value="lessons">Private Lessons</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  placeholder="Tell me about your event..."
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                >
                  <Send size={18} /> Send Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
