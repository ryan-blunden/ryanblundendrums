import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What's your travel radius?", a: "I'm based in Brisbane, Australia, and regularly perform across South East Queensland. I'm available for national and international bookings — travel and accommodation to be discussed." },
  { q: "Do you provide your own kit?", a: "Yes. I bring a full professional setup including drums, cymbals, hardware, and any required amplification. I also carry backup gear for peace of mind." },
  { q: "Can you learn specific songs for my event?", a: "Absolutely. Send me your setlist and I'll have it nailed before the gig. I'm a fast learner with a huge existing repertoire." },
  { q: "What styles do you play?", a: "Rock, pop, funk, soul, jazz, blues, country, R&B, and more. 30+ years of versatility means I'm comfortable in any genre." },
  { q: "Do you play with a click or backing tracks?", a: "Yes, I'm fully comfortable playing to click and backing tracks. My hybrid setup is designed for seamless integration with modern productions." },
  { q: "How far in advance should I book?", a: "As early as possible. Popular dates (especially weekends and holidays) book fast. I recommend reaching out at least 4–6 weeks in advance." },
  { q: "What about volume concerns at my venue?", a: "I have multiple setups ranging from silent electronic kits to low-volume acoustic options. We'll match the right kit to your venue's requirements." },
];

const FAQ = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Common Questions</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-4 bg-card">
                <AccordionTrigger className="text-foreground font-display font-semibold text-left hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
