import Layout from "@/components/Layout";
import { projects } from "@/data/projects";
import { Link, useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <p className="text-muted-foreground mb-6">
            The project you are looking for does not exist or has been moved.
          </p>
          <Link className="text-primary underline underline-offset-4" to="/projects">
            Back to Projects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <header className="mb-6">
          <p className="text-sm text-muted-foreground mb-2">{project.category}</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-foreground/80">{project.description}</p>
        </header>
        {project.details && (
          <div className="prose prose-invert prose-lg max-w-none leading-relaxed">
            {project.details.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        )}
      </article>
    </Layout>
  );
};

export default ProjectDetail;


