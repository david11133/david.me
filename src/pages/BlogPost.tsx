import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blog";
import { Link, useParams } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
          <p className="text-muted-foreground mb-6">
            The blog post you are looking for does not exist or has been moved.
          </p>
          <Link className="text-primary underline underline-offset-4" to="/blog">
            Back to Blog
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3">{post.title}</h1>
          <div className="flex items-center gap-3">
            <time className="text-sm text-muted-foreground">{post.date}</time>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </header>

        <div className="prose prose-invert prose-lg max-w-none leading-relaxed">
          {post.content.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;


