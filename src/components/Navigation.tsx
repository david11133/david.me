import { Link } from "react-router-dom";
import { Github, Rss } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  return (
    <nav className="border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src={logo} alt="Logo" className="w-8 h-8" style={{ imageRendering: 'pixelated' }} />
            </Link>
            <div className="flex gap-6">
              <Link 
                to="/blog" 
                className="text-foreground hover:text-accent transition-colors relative hover-underline inline-block"
              >
                Blog
              </Link>
              <Link 
                to="/projects" 
                className="text-foreground hover:text-accent transition-colors relative hover-underline inline-block"
              >
                Projects
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="/rss" 
              className="text-foreground hover:text-accent transition-colors"
              aria-label="RSS Feed"
            >
              <Rss className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
