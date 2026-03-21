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
    slug: "crocolake-tools-project-final-report",
    title: "CROCOLAKE Tools Project - Final Report",
    date: "Aug 29",
    excerpt:
      "Mill-IO is a lightweight event loop library for Rust that provides efficient non-blocking I/O management without relying on heavyweight async runtimes.",
    tags: ["Rust", "Event Loop", "I/O", "Concurrency", "System Programming"],
    content: `## Overview

\`\`\`python
print("hhh")
\`\`\`
In this report I summarize the objectives, architecture, and outcomes of the CROCOLAKE Tools effort. The focus was to provide ergonomic primitives for non-blocking I/O, reduce overhead, and improve developer experience.

## Methodology

We compared several strategies, validated with benchmarks, and documented trade-offs for maintainers.

## Future Work

- Polishing the API surface
- Extending platform support
- Adding integration tests for edge cases observed in the field`,
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