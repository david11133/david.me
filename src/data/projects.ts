export interface Project {
  slug: string;
  category: string;
  title: string;
  description: string;
  details?: string;
}

export const projects: Project[] = [
  {
    slug: "extend-crocolake-tools-datasets",
    category: "GSoC @IOOS",
    title: "Extend CROCOLAKE Tools Datasets",
    description:
      "Part of CrocoLake, providing a unified database of oceanographic observations by converting diverse formats into a consistent Parquet format.",
    details:
      "This project focused on expanding dataset coverage and improving ingestion reliability. We designed a modular pipeline for NetCDF/CSV/Parquet normalization, added validation checks, and documented schemas. The result was faster onboarding of new datasets and improved reproducibility.",
  },
  {
    slug: "nasa-data-pipelines-real-time-api",
    category: "Personal Project",
    title: "NASA Data Pipelines - Real Time API",
    description:
      "End-to-end streaming pipeline using NASA NEOWS, Kafka, Airflow, Spark, and Cassandra running in Docker.",
    details:
      "A reproducible dev environment with Docker Compose coordinates the services. Airflow schedules ingestion, Kafka handles buffering, Spark transforms streams, and Cassandra stores queryable state. This demo highlights patterns for building resilient data platforms.",
  },
  {
    slug: "uber-etl-pipeline",
    category: "Personal Project",
    title: "Uber ETL Pipeline",
    description:
      "GCP-centric pipeline with Mage-AI, Snowflake, and Looker for analytics over Uber trip data.",
    details:
      "We implemented ingestion with Mage-AI, transformations for partitioned data in Snowflake, and dashboards with Looker. Emphasis was on lineage, cost awareness, and clear dimensional modeling.",
  },
];


