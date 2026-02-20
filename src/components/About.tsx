import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// const stats = [
//   { value: "30+", label: "Years Playing" },
//   { value: "500+", label: "Live Events" },
//   { value: "15+", label: "Countries Toured" },
//   { value: "50+", label: "Artists Collaborated" },
// ];

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
              There's nothing like the feeling of being behind the kit when the band is on fire and the crowd are loving it — and after 30+ years of drumming, that feeling is as special as it ever was.
            </p>
            <p>
              Hey! I’m Ryan. I’m based in Brisbane, Australia, and with over 30 years of professional drumming experience, I’ve performed in just about every setting imaginable — from tiny clubs to dive bars, festival stages, and a stack of venues across Australia and Europe.
            </p>
            <p>
              I'll be honest. My ability to "chop" isn't amazing. And my bag of stick tricks is a bit on the light side. And Jazz isn't really my thing.
            </p>
            <p>But what I am known for — is bringing up the energy and vibes in any room or setting I play in. I thrive on creating an atmosphere that gets everyone moving and having a great time.</p>
            <p>
              I have a set of skills and intensity that lends itself well to heavier forms of music. But the genre doesn't really matter to me.
            </p>
            <p>
              It's about playing in the style that best suits the band, the occasion, and the crowd.
            </p>
          </div>
        </motion.div>

        {/* <motion.div
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
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;
