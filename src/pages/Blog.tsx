import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blog";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-12">Blog</h1>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.slug} className="border-b border-border pb-12 last:border-b-0">
              <div className="mb-4">
                <Link to={`/blog/${post.slug}`}>
                  <h2 className="text-3xl font-bold mb-2 text-foreground opacity-30 hover:opacity-100 transition-opacity">
                    {post.title}
                  </h2>
                </Link>
                <time className="text-sm text-muted-foreground">{post.date}</time>
              </div>
              
              <p className="text-foreground leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary"
                    className="text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-4">
                <Link to={`/blog/${post.slug}`} className="text-primary underline underline-offset-4">
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
