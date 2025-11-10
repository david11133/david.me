import Layout from "@/components/Layout";
import { Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

const Index = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
          Hey there!
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Who am I?</h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              I am <span className="font-bold">David</span> (or you can call me{" "}
              <span className="font-bold">Dev</span>), a hobbyist software developer, and GNU/Linux user 
              (I use Arch BTW xD). Interested in low-level programming and how the software works behind 
              the scenes and I spend my time building open-source projects and publishing them on{" "}
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                GitHub
              </a>
              , and contributing to others. Currently, I am interested in{" "}
              <span className="font-bold">the LLVM project</span> and compiler engineering and{" "}
              <span className="font-bold">have made some small contributions</span>. I intend to also 
              write about these topics in the future.
            </p>
          </div>
        </section>

        <div className="mb-12 rounded overflow-hidden border border-border">
          <img 
            src={heroImage} 
            alt="Pixelated retro artwork" 
            className="w-full"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Find me on</h2>
          <div className="flex gap-4 mb-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
          <p className="text-muted-foreground">
            If you want to contact me, please email me at{" "}
            <a 
              href="mailto:david@example.com" 
              className="text-accent hover:underline"
            >
              david@example.com
            </a>
            , or any of the above links.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
