import Layout from "@/components/Layout";
import { Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-image.gif";

const Index = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
          Less noise. More meaning.
        </h2>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Who am I?</h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            <p>
              I am <span className="font-bold">David</span>, a junior Data Engineer graduate with about a year of hands on experience. 
              I build and automate boring tasks. mostly data pipelines, infra, and random scripts that make life easier.
              I love open source projects and got to be part of <span className="font-bold">Google Summer of Code 2025</span>,
              Now I'm exploring new data tools, trying to understand how things fit together, and breaking stuff along the way.
              the scenes and I spend my time building open-source projects and publishing them on my{" "}
              <a 
                href="https://github.com/david11133" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                GitHub
              </a>.
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
              href="https://github.com/david11133" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground hover:text-accent transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/david-nady" 
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
              href="mailto:david.naddie@gmail.com" 
              className="text-accent hover:underline"
            >
              david.naddie@gmail.com
            </a>
            , or any of the above links.
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default Index;