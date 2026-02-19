import { Youtube, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-lg font-bold text-foreground">
              Ryan <span className="text-primary">Blunden</span>
            </p>
            <p className="text-muted-foreground text-sm">Professional Drummer · Brisbane, Australia</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube size={22} />
            </a>
            <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={22} />
            </a>
            <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook size={22} />
            </a>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Ryan Blunden. All rights reserved. Professional drummer for hire in Brisbane and beyond.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
