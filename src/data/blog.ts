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
    content:
      "Google Summer of Code (GSoC) is a global program that offers stipends to university students for contributing to open-source projects. It is valuable because it immerses contributors in real-world engineering workflows, code reviews, and community-driven development.\n\nBeyond the stipend, the true value lies in mentorship, long-term relationships with maintainers, and the recognition that comes from shipping features used by thousands. If you’re passionate about open source and learning by building, GSoC accelerates your growth dramatically.",
  },
  {
    slug: "crocolake-tools-project-final-report",
    title: "CROCOLAKE Tools Project - Final Report",
    date: "Aug 29",
    excerpt:
      "Mill-IO is a lightweight event loop library for Rust that provides efficient non-blocking I/O management without relying on heavyweight async runtimes.",
    tags: ["Rust", "Event Loop", "I/O", "Concurrency", "System Programming"],
    content:
      "In this report I summarize the objectives, architecture, and outcomes of the CROCOLAKE Tools effort. The focus was to provide ergonomic primitives for non-blocking I/O, reduce overhead, and improve developer experience. We compared several strategies, validated with benchmarks, and documented trade-offs for maintainers.\n\nFuture work includes polishing the API surface, extending platform support, and adding integration tests for edge cases observed in the field.",
  },
  {
    slug: "how-i-got-selected-in-gsoc-25",
    title: "How I've got selected in GSoC'25",
    date: "Aug 29",
    excerpt:
      "Lessons and tactics that helped me stand out and get selected for GSoC'25.",
    tags: ["Open Source", "GSoC", "Career"],
    content:
      "My journey to GSoC'25 began months before applications opened. I started by contributing small improvements, writing clear PR descriptions, and asking thoughtful questions. I tailored my proposal to the project's roadmap, highlighted measurable milestones, and stayed responsive.\n\nKey takeaways: start early, be consistent, communicate clearly, and show that you can deliver.",
  },
];


