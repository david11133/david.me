---
title: "Google Summer of Code 2025: Work Product Submission"
date: "2025-8-21"
excerpt: "Extending CrocoLake's available datasets with new integrations and tools for oceanographic data processing."
tags: ["GSoC 2025", "CrocoLake", "Datasets", "Oceanography", "Python", "Data Engineering"]
---

## Extending CrocoLake's available datasets

  ---

  ### Table of Contents
  - [Project Overview](#project-overview)
  - [Goals](#goals)
  - [Contributions](#contributions)
    - [Saildrones Dataset Integration](#saildrones-dataset-integration)
    - [Oleander Dataset Integration](#oleander-dataset-integration)
    - [Shared Tools and Workflows](#shared-tools-and-workflows)
  - [Challenges and Solutions](#challenges-and-solutions)
  - [GitHub Contributions](#github-contributions)
  - [Current State and Future Work](#current-state-and-future-work)
  - [Conclusions](#conclusions)
  - [References](#references)

  ---

  ## Project Overview
  This project is part of CrocoLake, which provides a unified database of oceanographic observations. CrocoLake’s main goal is to make it easier for researchers and developers to access and work with different types of ocean data. Normally, these datasets come in various formats like NetCDF, CSV, or Parquet, and combining them can be time consuming and complex. CrocoLake solves this problem by converting them into a single, consistent Parquet format, so users can focus on analyzing the data instead of dealing with complicated file formats.

  ---

  ## Goals
  The main goal of my GSoC project was to bring in new datasets and make them compatible with CrocoLake’s unified schema. Here’s what I set out to do:

  1. **Foundation work (Pre GSoC)**
    - Familiarized myself with the CrocoLake codebase and understood the workflow of the converters pipeline.
    - Developed a converter for the Continuous Plankton Recorder (CPR) Survey dataset, provided by the Marine Biological Association of the UK. This dataset includes observations from the Western North Atlantic Ocean spanning 1958 to 2022.

  2. **New dataset integrations**
    - Implement converters for two additional datasets:
      - Saildrones dataset
      - Oleander dataset

  3. **Testing and validation**
    - Write unit tests to ensure that individual components (methods or steps in the conversion process) work as expected.

  4. **Documentation**
    - Add documentation for the newly added converters to CrocoLakeDocs.

  ---

  ## Contributions

  ### Saildrones Dataset Integration
  I worked on building a converter for the Saildrones dataset, which supports both physical (PHY) and biogeochemical (BGC) data. The converter processes NetCDF files into the CrocoLake standard schema. Key features include:

  - **Parallel Processing:** Used Dask for processing files in parallel and chunking large dataframes to manage memory.
  - **Data Processing:** Some data required special processing like merging data from multiple sensors (e.g., temperature readings from different instruments) into a single standardized variable, prioritizing non-null values using backfill.
  - **Depth Assignment:** Assigned sensor readings to fixed depths based on metadata, since Saildrones files lack direct depth measurements.

  Example test for sensor-merging functionality:

  \`\`\`python
  def test_converter_saildrones_sensor_merging(self):
      """Test multi-sensor data fusion with backfill logic"""
      converter = ConverterSaildrones(db_type="PHY")
      
      # dummy data with NaN patterns to test backfill
      dummy_data = {
          "TEMP_CTD_RBR_MEAN": [20.5, pd.NA, 21.0],
          "TEMP_SBE37_MEAN": [pd.NA, 20.2, pd.NA],
      }
      result_df = converter.process_df(pd.DataFrame(dummy_data), invars)
      
      # verify merged TEMP column contains readings from both data variables
      assert list(result_df["TEMP"]) == [20.5, 20.2, 21.0]
  \`\`\`

  ### Oleander Dataset Integration
  For the Oleander dataset, we created both a downloader (\`downloaderOleander.py\`) and a converter (\`converterOleander.py\`). The downloader is necessary due to the large number of files (the ship has been in operation since the 1970s), making manual downloading impractical.

  - **Downloader:** Automatically fetches files from the official [ERDDAP server](https://www.ncei.noaa.gov/erddap/index.html), unzips them, and saves to a specified folder.
  - **Converter:** Processes Oleander NetCDF data using Dask for parallel processing and converts it to the CrocoLake standard schema.

  CLI usage examples:

  \`\`\`bash
  # Download all available data with 8 threads
  download_oleander --threads 8

  # Download data for specific years
  download_oleander --start_year 2020 --end_year 2025 --threads 8

  # Download files from a list of URLs in a txt file
  download_oleander --url_file urls.txt --threads 8
  \`\`\`

  ---

  ### Shared Tools and Workflows

  1. **CLI tool:** Created scripts (\`saildrones2parquet.py\` and \`oleander2parquet.py\`) for converting files to Parquet, supporting custom paths and configurations.
    \`\`\`bash
    saildrones2parquet --config
    oleander2parquet --config
    \`\`\`

  2. **Dask integration:** Used for parallel processing, lazy evaluation (\`@dask.delayed\`), and chunking large files to prevent memory overflows.

  3. **Data test cases:** Developed automated tests with pytest to ensure correctness, check duplicates, and validate profiles.

  ---

  ## Challenges and Solutions

  1. **Multi-Sensor Data Merging:**  
    Saildrones data had multiple sensors for the same variable. Implemented backfill strategy:

  \`\`\`python
  def process_df(self, df, invars):
      reverse_map = defaultdict(list)
      for sensor_var, croco_var in params.params["Saildrones2CROCOLAKE"].items():
          reverse_map[croco_var].append(sensor_var)
      
      for croco_var, sensor_vars in reverse_map.items():
          existing = [v for v in sensor_vars if v in df.columns]
          if len(existing) > 1:
              df[croco_var] = df[existing].bfill(axis=1).iloc[:, 0]
              df.drop(columns=[col for col in existing if col != croco_var],
                    inplace=True, errors='ignore')
  \`\`\`

  2. **Memory Management:**  
    Used Dask chunked processing for large dataframes:

  \`\`\`python
  @dask.delayed(nout=1)
  def process_df_chunked(self, df, invars, rows_per_chunk=50000):
      if len(df) > rows_per_chunk:
          chunks = [df[i:i + rows_per_chunk] for i in range(0, len(df), rows_per_chunk)]
          delayed_chunks = [dask.delayed(self.process_df)(chunk, invars) for chunk in chunks]
          processed_chunks = dask.compute(*delayed_chunks)
          return pd.concat(processed_chunks, ignore_index=True)
  \`\`\`

  3. **Depth Assignment:**  
    Saildrones lacked direct depth measurements. Used metadata and hardcoded known depths in \`params.py\`.

  \`\`\`python
  def assign_depths(self, df):
      df_long = df.melt(id_vars=id_vars, value_vars=value_vars, 
                        var_name='variable', value_name='value')
      df_long['depth'] = df_long['variable'].map(depth_map)
      df_pivoted = df_long.pivot_table(
          index=id_vars + ['depth'],
          columns='variable',
          values='value'
      ).reset_index()
  \`\`\`

  ---

  ## GitHub Contributions

  **Issues:**
  - [ISSUE #3]: Add ConverterCPR module for CPR data conversion
  - [ISSUE #14]: [BUG] QC flags are assigned to null values
  - [ISSUE #28]: [Test] Add test cases for Saildrones
  - [ISSUE #33]: [Test] Add functional tests for Saildrones converter

  **Pull Requests:**
  | PR | Description | Status |
  |----|------------|--------|
  | PR #1 | Add ConverterCPR module for CPR data conversion | Merged |
  | PR #6 | Add ConverterSaildrones module for Saildrones data conversion | Merged |
  | PR #27 | Add ConverterOleander for converting Oleander NetCDF Data | Open |
  | PR #31 | Add Saildrone Data Validation Tests | Merged |
  | PR #32 | fix: do not assign QC flags to null values in add_qc_flags | Merged |
  | PR #34 | Add tests for sensor merging and depth assignment in converterSaildrones | Merged |

  ---

  ## Current State and Future Work
  By the end of GSoC, I completed the project and achieved all milestones.

  **Future possibilities:**
  - **Improving Converter Testing Code:** Make testing code more flexible and dataset-agnostic.
  - **Integrating Additional Datasets:** Add new datasets like GDP to expand CrocoLake’s coverage.

  ---

  ## Conclusions
  This was one of the best summers I spent. I enjoyed every part of the project, including the challenges. The CrocoLake community and my mentor, Enrico Milanese, provided incredible guidance and support. Thanks to Google for enabling this experience.

  Working on CrocoLake improved both technical and soft skills, including coding, self-review, and communication.

  ---
  ## References
  - CrocoLake official documentation and dataset sources.