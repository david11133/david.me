import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-foreground transition-colors">
            Blog
          </Link>
          <span>/</span>
          <Link to="/projects" className="hover:text-foreground transition-colors">
            Projects
          </Link>
          <span>/</span>
          <a 
            href="https://linkedin.com/in/david-nady" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <span>/</span>
          <a 
            href="https://github.com/david11133" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>
        <div className="text-sm text-muted-foreground">
          CC BY-NC-SA 4.0 © 2025 David.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
