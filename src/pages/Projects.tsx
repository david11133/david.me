import Layout from "@/components/Layout";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";

const Projects = () => {
  const gsoc = projects.filter((p) => p.category === "GSoC @IOOS");
  const personal = projects.filter((p) => p.category === "Personal Project");

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12">Projects</h1>

        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-bold mb-8 text-foreground opacity-30">
              GSoC @IOOS
            </h2>
            <div className="space-y-6">
              {gsoc.map((project) => (
                <div key={project.slug}>
                  <Link to={`/projects/${project.slug}`}>
                    <h3 className="text-xl font-bold mb-2 text-foreground opacity-80 hover:opacity-100 transition-opacity">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-2">
                    <Link to={`/projects/${project.slug}`} className="text-primary underline underline-offset-4">
                      View details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8 text-foreground opacity-30">
              Personal Projects
            </h2>
            <div className="space-y-8">
              {personal.map((project) => (
                <div key={project.slug}>
                  <Link to={`/projects/${project.slug}`}>
                    <h3 className="text-xl font-bold mb-2 text-foreground opacity-80 hover:opacity-100 transition-opacity">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-2">
                    <Link to={`/projects/${project.slug}`} className="text-primary underline underline-offset-4">
                      View details
                    </Link>
                  </div>
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
