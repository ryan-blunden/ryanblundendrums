import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const videos = [
  { title: "Live at Festival Main Stage", context: "Festival performance — high-energy rock set", embedId: "dQw4w9WgXcQ" },
  { title: "Studio Session — Soul/Funk", context: "Professional studio session — soul and funk grooves", embedId: "dQw4w9WgXcQ" },
  { title: "Corporate Gala Event", context: "Corporate event — polished and professional", embedId: "dQw4w9WgXcQ" },
];

const PerformanceShowcase = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="videos" className="py-24 md:py-32">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">Performance</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">See Me Play</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="group"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden bg-card border border-border">
                <iframe
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <h3 className="font-display font-bold text-foreground mt-3">{video.title}</h3>
              <p className="text-muted-foreground text-sm">{video.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceShowcase;
