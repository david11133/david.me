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
    content: `Back in Feb 2025, I was scrolling on X (twitter), and I randomly came across a post where someone was talking about their GSoC experience. That’s how I first heard about it.
  
  I knew that Google gives a stipend for it, so obviously I got curious
  
  I started searching more about it… blogs, youtube videos, random posts everywhere. There was too much info and I got kinda lost. So if you are feeling the same, don't worry, this is basically everything I wish I had in one place.
  
  So what is GSoC?
  
  GSoC (Google Summer of Code) is kinda like a remote internship, but focused on open source.
  
  It’s mainly for students or fresh grads who maybe didn’t get much experience yet, or didn’t contribute much to open source before.
  
  You work with an open source organization on a project during the summer, and yeah, you get paid for it. Not from the org itself, but from Google
  
  Project sizes (and stipend)
  
  There are 3 project sizes:
  - Small
  - Medium
  - Large
  
  The size affects how long you’ll work and how much you get paid. Bigger project = more time + more effort (and more money too).
  
  How organizations work
  
  Organizations apply to GSoC, and Google selects which ones will participate.
  
  Each organization comes with a list of projects.
  
  Most orgs that participated before usually come back again, so a good trick is to check previous years. 
  
  You can browse them here:
   https://summerofcode.withgoogle.com/archive/2025/organizations
  
  You can switch the year in the URL.
  
  When you click any org, you’ll find their website, GitHub repo and maybe communication channels (mailing list, etc.). You can conncet with them from there.
  
  
  Choosing what you want
  
  There are a lot of orgs, so how to choose the right one?
  
  First ask yourself:
  
  - What do I actually like?
  - Backend? AI? Systems? Data?, etc.
  - What languages I'd like to use?
  
  Once you figure that out, things get a bit easier.
  
  Finding the right orgs for your interests
  
  This site helped me a lot:
   https://www.gsocorganizations.dev/
  
  You can filter orgs based on languages, technologies, categories, etc.
  
  Try to narrow it down to 2–3 orgs max.
  
  Important tip:
  
   Focus on orgs that participated in recent years.
   If an org disappeared for like 2+ years, chances are it won’t come back this year.
  
  Start engaging early
  
  Once you pick your orgs, go through their GitHub, read about their projects, try to understand what’s going on and how they communicate.
  
  Then pick a project you actually find interesting.
  
  First contributions
  
  Now comes the real work.
  
  - Set up the project locally
  - Try to run it (this alone might take time)
  - Look for issues (good first issues if available)
  - Start fixing stuff or adding small improvements
  - Talk to mentors and ask questions or to help you to start
  
  But don’t ask the kind of vague stuff like "How to start?", "I don't understand the project", etc.
  Instead, be specific and show what you tried. Ask something that leads to action.
  
  Communication matters A LOT
  
  I’d say this is actually the most important part.
  Mentors notice who is active, who communicates well, who actually tries
  
  Even small contributions + good communication = strong impression.
  
  Try to discuss ideas, ask for feedback, and stay active in chats and emails.
  
  Don’t overdo it
  
  Work on 1 or 2 projects max.
  More than that and you’ll just burn out or do everything poorly. I would even say try to work on only one project.
  
  Writing the proposal
  
  When applications open, you’ll need to write your proposal.
  
  This is where you explain:
  
  - why you chose this project
  - what you’re going to do
  - how you’ll do it (timeline)
  
  This part is very important. I would say that proposal is the second most important factor after contributions and communication.
  
  Proposal tips
  
  Follow the org’s template as most orgs have one. be specific and clear about what you are going to do. Break your timeline into weeks if possible.
  
  These repos helped me a lot:
  - https://github.com/COPS-IITBHU/GSoC-Accepted-Proposals
  - https://github.com/SammanSarkar/GSoC_archive_2025
  
  You can see real accepted proposals and get an idea of what works and how people write it.
  
  VERY important step
  
  Before submitting, SHOW YOUR PROPOSAL TO YOUR MENTOR/S
  
  Don’t skip this.
  
  They will point out mistakes and suggest improvements
  
  Trust me, your first version won’t be perfect.
  
  After submission
  
  Now you wait…
  
  But here’s the mistake many people make: they stop contributing. Don’t do that. Keep contributing and interacting with the community. that's why gsoc existed in the first place.
  
  Mentors do notice this. It shows your commitment.
  
  Final thoughts
  
  Starting early made a huge difference for me.
  Even if you don’t get selected, the experience itself is super valuable. you understand open source and build connections with very great people.
  
  that’s already a win.`
  },
];


