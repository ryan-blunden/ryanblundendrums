import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Music } from "lucide-react";

const genres = ["All", "Rock", "Pop", "Soul/Funk", "Jazz", "Blues", "Country"];

const sampleSongs = [
  { title: "Your repertoire goes here", artist: "Add your songs", genre: "Rock" },
  { title: "Add your song list", artist: "Artist name", genre: "Pop" },
  { title: "Replace these placeholders", artist: "With your actual repertoire", genre: "Soul/Funk" },
  { title: "Song Title", artist: "Artist", genre: "Jazz" },
  { title: "Song Title", artist: "Artist", genre: "Blues" },
  { title: "Song Title", artist: "Artist", genre: "Country" },
  { title: "Song Title", artist: "Artist", genre: "Rock" },
  { title: "Song Title", artist: "Artist", genre: "Pop" },
];

const Repertoire = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeGenre, setActiveGenre] = useState("All");

  const filtered = activeGenre === "All" ? sampleSongs : sampleSongs.filter((s) => s.genre === activeGenre);

  return (
    <section id="repertoire" className="py-24 md:py-32">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-body">Repertoire</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Songs & Styles</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Extensive repertoire across genres. I also learn new material quickly — just send the setlist.
          </p>
        </motion.div>

        {/* Genre filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setActiveGenre(genre)}
              className={`px-4 py-2 rounded-md text-sm font-body transition-colors ${
                activeGenre === genre
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Song list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          {filtered.map((song, i) => (
            <div
              key={i}
              className="flex items-center gap-4 py-3 border-b border-border/50 last:border-0"
            >
              <Music className="text-primary/60 shrink-0" size={16} />
              <div className="flex-1">
                <span className="text-foreground text-sm font-medium">{song.title}</span>
                <span className="text-muted-foreground text-sm"> — {song.artist}</span>
              </div>
              <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">{song.genre}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Repertoire;
