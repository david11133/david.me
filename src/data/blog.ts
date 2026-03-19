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
    title: "How I got selected in GSoC",
    date: "Aug 29",
    excerpt:
      "Lessons and tactics that helped me stand out and get selected for GSoC'25.",
    tags: ["Open Source", "GSoC", "Career"],
    content:
      "Back in Feb 2025, I was scrolling on X (twitter), and I randomly came across a post where someone was talking about their GSoC experience. That’s how I first heard about it.\n\nI knew that Google gives a stipend for it, so obviously I got curious\n\nI started searching more about it… blogs, youtube videos, random posts everywhere. There was too much info and I got kinda lost. So if you are feeling the same, don't worry, this is basically everything I wish I had in one place.\n\nSo what is GSoC?\n\nGSoC (Google Summer of Code) is kinda like a remote internship, but focused on open source.\n\nIt’s mainly for students or fresh grads who maybe didn’t get much experience yet, or didn’t contribute much to open source before.\n\nYou work with an open source organization on a project during the summer, and yeah, you get paid for it. Not from the org itself, but from Google\n\nProject sizes (and stipend)\n\nThere are 3 project sizes:\n- Small\n- Medium\n- Large\n\nThe size affects how long you’ll work and how much you get paid. Bigger project = more time + more effort (and more money too).\n\nHow organizations work\n\nOrganizations apply to GSoC, and Google selects which ones will participate.\n\nEach organization comes with a list of projects.\n\nMost orgs that participated before usually come back again, so a good trick is to check previous years. \n\nYou can browse them here:\n https://summerofcode.withgoogle.com/archive/2025/organizations\n\nYou can switch the year in the URL.\n\nWhen you click any org, you’ll find their website, GitHub repo and maybe communication channels (mailing list, etc.). You can conncet with them from there.\n\n\nChoosing what you want\n\nThere are a lot of orgs, so how to choose the right one?\n\nFirst ask yourself:\n\n- What do I actually like?\n- Backend? AI? Systems? Data?, etc.\n- What languages I'd like to use?\n\nOnce you figure that out, things get a bit easier.\n\nFinding the right orgs for your interests\n\nThis site helped me a lot:\n https://www.gsocorganizations.dev/\n\nYou can filter orgs based on languages, technologies, categories, etc.\n\nTry to narrow it down to 2–3 orgs max.\n\nImportant tip:\n\n Focus on orgs that participated in recent years.\n If an org disappeared for like 2+ years, chances are it won’t come back this year.\n\nStart engaging early\n\nOnce you pick your orgs, go through their GitHub, read about their projects, try to understand what’s going on and how they communicate.\n\nThen pick a project you actually find interesting.\n\nFirst contributions\n\nNow comes the real work.\n\n- Set up the project locally\n- Try to run it (this alone might take time)\n- Look for issues (good first issues if available)\n- Start fixing stuff or adding small improvements\n- Talk to mentors and ask questions or to help you to start\n\nBut don’t ask the kind of vague stuff like \"How to start?\", \"I don't understand the project\", etc.\nInstead, be specific and show what you tried. Ask something that leads to action.\n\nCommunication matters A LOT\n\nI’d say this is actually the most important part.\nMentors notice who is active, who communicates well, who actually tries\n\nEven small contributions + good communication = strong impression.\n\nTry to discuss ideas, ask for feedback, and stay active in chats and emails.\n\nDon’t overdo it\n\nWork on 1 or 2 projects max.\nMore than that and you’ll just burn out or do everything poorly. I would even say try to work on only one project.\n\nWriting the proposal\n\nWhen applications open, you’ll need to write your proposal.\n\nThis is where you explain:\n\n- why you chose this project\n- what you’re going to do\n- how you’ll do it (timeline)\n\nThis part is very important. I would say that proposal is the second most important factor after contributions and communication.\n\nProposal tips\n\nFollow the org’s template as most orgs have one. be specific and clear about what you are going to do. Break your timeline into weeks if possible.\n\nThese repos helped me a lot:\n- https://github.com/COPS-IITBHU/GSoC-Accepted-Proposals\n- https://github.com/SammanSarkar/GSoC_archive_2025\n\nYou can see real accepted proposals and get an idea of what works and how people write it.\n\nVERY important step\n\nBefore submitting, SHOW YOUR PROPOSAL TO YOUR MENTOR/S\n\nDon’t skip this.\n\nThey will point out mistakes and suggest improvements\n\nTrust me, your first version won’t be perfect.\n\nAfter submission\n\nNow you wait…\n\nBut here’s the mistake many people make: they stop contributing. Don’t do that. Keep contributing and interacting with the community. that's why gsoc existed in the first place.\n\nMentors do notice this. It shows your commitment.\n\nFinal thoughts\n\nStarting early made a huge difference for me.\nEven if you don’t get selected, the experience itself is super valuable. you understand open source and build connections with very great people.\n\nthat’s already a win.\n",
  },
];


