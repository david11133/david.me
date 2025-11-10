import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    title: "Summer of Bitcoin Internship Program: Why it is More Valuable Than Gold",
    date: "Sep 26",
    excerpt: "In the previous article, we talked about my project in the Summer of Bitcoin internship, and today we will learn more about Summer of Bitcoin itself and the opportunities we can get from it. It's a great chance to gain experience, network with industry professionals, and contribute to real-world projects that are shaping the future of finance and technology. If you love open source, blockchain, and Bitcoin, this internship is more valuable than gold!",
    tags: ["Internship", "Summer of Bitcoin", "Bitcoin", "Cryptocurrency", "Blockchain"]
  },
  {
    title: "Mill-IO: Event-loop Library for Rust!",
    date: "Aug 29",
    excerpt: "Mill-IO is a lightweight event loop library for Rust that provides efficient non-blocking I/O management without relying on heavyweight async runtimes. It's a reactor-based event loop implementation built on top of mio-rs. In this article, we'll discuss it, the problem it solves, why it exists, and more!",
    tags: ["Rust", "Event Loop", "I/O", "Concurrency", "System Programming"]
  }
];

const Blog = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12">Blog</h1>

        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="border-b border-border pb-12 last:border-b-0">
              <div className="mb-4">
                <h2 className="text-3xl font-bold mb-2 text-foreground opacity-30 hover:opacity-100 transition-opacity cursor-pointer">
                  {post.title}
                </h2>
                <time className="text-sm text-muted-foreground">{post.date}</time>
              </div>
              
              <p className="text-foreground leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, tagIndex) => (
                  <Badge 
                    key={tagIndex} 
                    variant="secondary"
                    className="text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
