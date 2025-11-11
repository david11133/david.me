import Layout from "@/components/Layout";

interface Project {
  category: string;
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    category: "GSoC @IOOS",
    title: "Extend CROCOLAKE Tools Datasets",
    description: "This project is part of the CrocoLake, which provides a unified database of oceanographic observations. CrocoLake's main goal is to make it easier for researchers and developers to access and work with different types of ocean data. Normally, these datasets come in various formats like NetCDF, CSV, or Parquet, and combining them can be time consuming and complex. CrocoLake solves this problem by converting them into a single, consistent Parquet format, so users can focus on analyzing the data instead of dealing with complicated file formats."
  },
  {
    category: "Personal Project",
    title: "NASA Data Pipelines - Real Time API",
    description: "This project demonstrates a real-time data streaming and processing pipeline using NASA's NEOWS (Near Earth Object Web Service) APIs to generate dynamic data on near-Earth objects. A Python script fetches data from the NEOWS APIs, publishing it to a Kafka topic for efficient management. We orchestrate this process with Apache Airflow, scheduling the data generation script to run regularly. Spark Structured Streaming is then utilized to consume and modify the data from Kafka, which is ultimately stored in a Cassandra database. All components run within Docker containers, ensuring a consistent and scalable development environment."
  },
  {
    category: "Personal Project",
    title: "Uber ETL Pipeline",
    description: "The Uber Data Engineering Pipeline is designed to analyze Uber data by utilizing Google Cloud Platform (GCP) services including Mage-AI, Snowflake, and Looker. This pipeline covers the entire process from data ingestion to visualization, showcasing a full data engineering workflow."
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
              GSoC @IOOS
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
              Personal Projects
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
