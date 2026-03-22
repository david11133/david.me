export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "google-summer-of-code-why-valuable",
    title: "Google Summer of Code - Why it is very Valuable",
    date: "Sep 26",
    excerpt:
      "In the previous article, we talked about my project in the Summer of Bitcoin internship, and today we will learn more about Summer of Bitcoin itself and the opportunities we can get from it.",
    tags: ["Internship", "Summer of Bitcoin", "Bitcoin", "Cryptocurrency", "Blockchain"],
    content: `## What is Google Summer of Code?

Google Summer of Code (GSoC) is a global program that offers stipends to university students for contributing to open-source projects. It immerses contributors in real-world engineering workflows, code reviews, and community-driven development.

## Why It's Valuable

Beyond the stipend, the true value lies in mentorship, long-term relationships with maintainers, and the recognition that comes from shipping features used by thousands.

If you're passionate about open source and learning by building, GSoC accelerates your growth dramatically.`,
  },
  {
    slug: "gsoc-2025-crocolake-work-product",
    title: "Google Summer of Code 2025: Work Product Submission",
    date: "Aug 21",
    excerpt:
      "Extending CrocoLake's available datasets with new integrations and tools for oceanographic data processing.",
    tags: ["GSoC 2025", "CrocoLake", "Datasets", "Oceanography", "Python", "Data Engineering"],
    content: `## Extending CrocoLake's available datasets

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
  `
  },
  {
    slug: "how-i-got-selected-in-gsoc-25",
    title: "How I got selected in GSoC'25",
    date: "Sep 3",
    excerpt:
      "Lessons and tactics that helped me stand out and get selected for GSoC'25.",
    tags: ["GSoC", "Open Source", "Career"],
    content: `Back in Feb 2025, I was scrolling on X (Twitter), and I randomly came across a post where someone was talking about their GSoC experience. That's how I first heard about it.

I knew that Google gives a stipend for it, so obviously I got curious. 

I started searching more about it, blogs, YouTube videos, random posts everywhere. There was too much info and I got kinda lost. 

So if you are feeling the same, don't worry, this is basically everything I wish I had in one place.

## So what is GSoC?

GSoC (Google Summer of Code) is kinda like a remote internship, but focused on open source. It's mainly for students or fresh grads who maybe didn't get much experience yet, or didn't contribute much to open source before.

You work with an open source organization on a project during the summer, and yeah, you get paid for it. not from the org itself, but from **Google**.

There are typically 3 project sizes:

- Small
- Medium
- Large

The size affects how long you'll work and how much you get paid. Bigger project = more time, more effort, more money.

## How Organizations Work

Organizations apply to GSoC, and Google selects which ones will participate. Each organization comes with a list of projects.

Most orgs that participated before usually come back again, so a good trick is to check previous years. You can browse them here:
https://summerofcode.withgoogle.com/archive/2025/organizations

You can switch the year in the URL to see previous years.

When you click any org, you'll find their website, GitHub repo, and maybe communication channels (mailing list, etc.). You can connect with them from there.

## Choosing What You Want

There are a lot of orgs, so how do you choose the right one? 

First ask yourself:

- What do I actually like? 
- Backend? AI? Systems? Data?, etc.
- What languages would I like to use?

Once you figure that out, things get a bit easier. And move to the next step.

## Finding the Right Orgs

This site helped me a lot:
https://www.gsocorganizations.dev/

You can use it to filter orgs based on languages, technologies, categories, etc. Try to narrow it down to 2-3 orgs max.

**Important:** Focus on orgs that participated in recent years. If an org disappeared for 2+ years, chances are it won't come back.

Once you pick your orgs, go through their GitHub, read about their projects and contribution rules, try to understand what's going on and how they communicate. Then pick a project you actually find interesting.

## First Contributions

Now comes the real work:

- Set up the project locally
- Try to run it (this alone might take time)
- Look for issues (good first issues if available)
- Start fixing stuff or adding small improvements
- Talk to mentors, ask questions. they will help you to start out

**Don't ask vague stuff** like "How to start?", "How do I set up the project?", etc.

Instead, be specific and show what you tried. Ask something that leads to action.

## Communication Matters A LOT

I'd say this is actually the most important part. Mentors notice who is active, who communicates well, who actually tries.

Even small contributions + good communication = strong impression.

Try to discuss ideas, ask for feedback, and stay active in chats and emails.

Also, if possible, try to have a short call with your mentor before GSoC officially begins. It can make a big difference. It shows initiative and commitment, and it helps you build a more genuine connection early on. A quick conversation can clarify expectations.

## Writing the Proposal

When applications open, you'll need to write your proposal. Don't overdo it! Work on 1 or 2 projects max. More than that and you'll just burn out or do everything poorly. I would even say try to work on only one project.

In your proposal, you will explain:

- Why you chose this project
- What you're going to do
- How you'll do it (with a timeline)

This part is very important. I'd say the proposal is the second most important factor after contributions and communication.

most orgs have proposal template that they would like you to follow. Be specific and clear about what you are going to do. Break your timeline into weeks if possible.

These repos helped me a lot:
https://github.com/COPS-IITBHU/GSoC-Accepted-Proposals
https://github.com/SammanSarkar/GSoC_archive_2025

You can see real accepted proposals and get an idea of what works and how people write it.

**VERY Important Step**: Before submitting, SHOW YOUR PROPOSAL TO YOUR MENTOR(S).

Don't skip this. They will point out mistakes and suggest improvements. 

Trust me, your first version won't be perfect.

## After Submission

Now you wait… but here's the mistake many people make: they stop contributing. Don't do that.

This period actually says a lot about you. Anyone can be active before the deadline. Very few people stay around after they have already submitted.

Keep contributing, even if it's small stuff. Fix a tiny bug, review someone's PR, help another newcomer, or just stay involved in discussions. You don't need to go crazy about it.

Also, this is a good time to refine your understanding of the project. Weather you get selected or not, you are still building real experience instead of just waiting for a result.

Mentors do notice this. Not always in a loud way, but it builds trust over time.

## Final Thoughts

Even if you don't get selected, the experience is not wasted. That sounds generic, but if you did this right, you didn't just “apply to GSoC”, you actually learned how to read a codebase, ask better questions, work and connect with people you've never met.

Also, rejection doesn't always mean you weren't good enough. Sometimes it's just limited slots in the org, or someone else had slightly more context in that specific project.

If you liked the project, you can just continue. A lot of people who didn't get selected still became long term contributors, and some even became mentors later.

So don't treat GSoC as a one shot thing. It's like an entry point for most of the people.

If you leave with better skills, a few merged PRs, and at least one real connection in the community, you're already ahead of where you started.`,
  },
];