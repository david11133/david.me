import Layout from "@/components/Layout";

interface Project {
  category: string;
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    category: "GSoC @Metacall",
    title: "MetaSSR: An SSR framework for ReactJS built on Rust & Metacall",
    description: "My project is about building an SSR framework for React.js (like Next.js and Gatsby.js) that is built on Rust using a new framework called 'nova_rs' to get a high performance, and using 'MetacalI core' to know how it's(Metacall core) good and suitable for real uses. Also, I helped find some bugs in the core and made some benchmarks before starting my project."
  },
  {
    category: "Open Source Community",
    title: "vnStat Client",
    description: "An open-source GUI client for vnstat (a traffic monitor for GNU/Linux and BSD), and built on ElectronJS & NextJS."
  },
  {
    category: "Open Source Community",
    title: "vnStat Server",
    description: "An open-source tool built to serve your vnstat (a traffic monitor for GNU/Linux and BSD) data using an HTTP connection that able you to share this data between multiple machines, and controlling in vnStat daemon."
  },
  {
    category: "Open Source Community",
    title: "PrqLite",
    description: "An open-source CLI tool built to use SQLite databases with PRQL (Pipelined Relational Query Language)."
  },
  {
    category: "Open Source Community",
    title: "Electronic document system",
    description: "A highly encrypted, minimal document storage system was originally developed as part of a proposal for the Egyptian government to accelerate digitalization efforts further."
  },
  {
    category: "Open Source Community",
    title: "Fake Society",
    description: "A frontend for a social media web application called 'Fake Society', I built it to be training for using Next.js and keeping up with ReactJs component libraries, and How I integrate Restful APIs in real world."
  }
];

const Projects = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12">Projects</h1>

        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-bold mb-8 text-foreground opacity-30">
              GSoC @Metacall
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">{projects[0].title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {projects[0].description}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-foreground opacity-30">
              Open Source Community
            </h2>
            <div className="space-y-8">
              {projects.slice(1).map((project, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
