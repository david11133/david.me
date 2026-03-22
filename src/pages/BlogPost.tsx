import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blog";
import { Link, useParams } from "react-router-dom";

// Renders a single line with inline formatting: **bold**, `code`, [text](url)
function renderInline(text: string, key?: number) {
  const parts: React.ReactNode[] = [];
  // Regex matches **bold**, `code`, [label](url)
  const regex = /(\*\*(.+?)\*\*|`([^`]+)`|\[([^\]]+)\]\((https?:\/\/[^\)]+)\))/g;
  let last = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    if (match[2]) {
      // **bold**
      parts.push(<strong key={match.index} className="font-semibold text-foreground">{match[2]}</strong>);
    } else if (match[3]) {
      // `code`
      parts.push(
        <code key={match.index} className="bg-muted text-foreground font-mono text-sm px-1.5 py-0.5 rounded">
          {match[3]}
        </code>
      );
    } else if (match[4] && match[5]) {
      // [label](url)
      parts.push(
        <a
          key={match.index}
          href={match[5]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity break-all"
        >
          {match[4]}
        </a>
      );
    }
    last = match.index + match[0].length;
  }

  if (last < text.length) {
    parts.push(text.slice(last));
  }

  return <span key={key}>{parts.length > 0 ? parts : text}</span>;
}

// Detects bare URLs on their own and renders them as links
function renderBareUrl(text: string, key: number) {
  const trimmed = text.trim();
  if (/^https?:\/\/\S+$/.test(trimmed)) {
    return (
      <a
        key={key}
        href={trimmed}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-primary underline underline-offset-4 hover:opacity-80 transition-opacity break-all text-sm my-1"
      >
        {trimmed}
      </a>
    );
  }
  return null;
}

function ContentRenderer({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let keyCounter = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip blank lines between blocks
    if (trimmed === "") {
      elements.push(
        <div key={keyCounter++} className="h-6" />
      );
      i++;
      continue;
    }

    // Horizontal rule (---)
    if (trimmed === "---") {
      elements.push(
        <hr key={keyCounter++} className="my-8 border-border" />
      );
      i++;
      continue;
    }

    // Heading: line of all caps or ends with ? that is short = treat as section header
    // Explicit markdown headings
    if (trimmed.startsWith("# ")) {
      elements.push(
        <h1 key={keyCounter++} className="text-3xl font-bold mt-10 mb-4 text-foreground">
          {renderInline(trimmed.slice(2))}
        </h1>
      );
      i++;
      continue;
    }

    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={keyCounter++} className="text-2xl font-bold mt-8 mb-3 text-foreground">
          {renderInline(trimmed.slice(3))}
        </h2>
      );
      i++;
      continue;
    }

    if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={keyCounter++} className="text-xl font-semibold mt-6 mb-2 text-foreground">
          {renderInline(trimmed.slice(4))}
        </h3>
      );
      i++;
      continue;
    }

    // Bare URL on its own line
    const bareUrl = renderBareUrl(trimmed, keyCounter);
    if (bareUrl) {
      elements.push(bareUrl);
      keyCounter++;
      i++;
      continue;
    }

    if (trimmed.startsWith("```")) {
      const language = trimmed.slice(3).trim(); // e.g., "python"
      i++; // move to next line
      const codeLines: string[] = [];
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <pre key={keyCounter++} className="bg-muted rounded-md p-4 overflow-x-auto my-4">
          <code className={`language-${language} font-mono text-sm`}>
            {codeLines.join("\n")}
          </code>
        </pre>
      );
      continue;
    }

    // Bullet list: lines starting with - or *
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const items: React.ReactNode[] = [];
      while (
        i < lines.length &&
        (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))
      ) {
        const itemText = lines[i].trim().slice(2);
        items.push(
          <li key={keyCounter++} className="mb-1">
            {renderInline(itemText)}
          </li>
        );
        i++;
      }
      elements.push(
        <ul key={keyCounter++} className="list-disc list-inside space-y-1 my-4 pl-2 text-foreground/90">
          {items}
        </ul>
      );
      continue;
    }

    // Numbered list: lines starting with 1. 2. etc.
    if (/^\d+\.\s/.test(trimmed)) {
      const items: React.ReactNode[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        const itemText = lines[i].trim().replace(/^\d+\.\s/, "");
        items.push(
          <li key={keyCounter++} className="mb-1">
            {renderInline(itemText)}
          </li>
        );
        i++;
      }
      elements.push(
        <ol key={keyCounter++} className="list-decimal list-inside space-y-1 my-4 pl-2 text-foreground/90">
          {items}
        </ol>
      );
      continue;
    }

    // Short standalone lines (≤60 chars, no sentence-ending punctuation in the middle)
    // that look like section labels — treat as h3-style headings
    const looksLikeHeading =
      trimmed.length <= 70 &&
      !trimmed.includes(". ") &&
      (trimmed === trimmed.trim()) &&
      /^[A-Z]/.test(trimmed) &&
      // Make sure the next line is not blank (i.e., it leads into content)
      i + 1 < lines.length &&
      lines[i + 1].trim() !== "";

    if (looksLikeHeading) {
      // Peek ahead: if next line is a paragraph, this is a section heading
      elements.push(
        <h3 key={keyCounter++} className="text-xl font-semibold mt-8 mb-2 text-foreground">
          {renderInline(trimmed)}
        </h3>
      );
      i++;
      continue;
    }

    // Collect consecutive non-empty, non-list, non-heading lines into a paragraph
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].trim().startsWith("- ") &&
      !lines[i].trim().startsWith("* ") &&
      !/^\d+\.\s/.test(lines[i].trim()) &&
      !lines[i].trim().startsWith("#") &&
      !/^https?:\/\/\S+$/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }

    if (paraLines.length > 0) {
      const paraText = paraLines.join("\n");
      elements.push(
        <p
          key={keyCounter++}
          className="text-foreground/90 leading-relaxed whitespace-pre-line mb-4"
        >
          {renderInline(paraText)}
        </p>
      );
    }
  }

  return <div className="space-y-1">{elements}</div>;
}

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
        <header className="mb-10">
          <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors mb-6 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-3 flex-wrap">
            <time className="text-sm text-muted-foreground">{post.date}</time>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <hr className="mt-8 border-border" />
        </header>

        <div className="text-base sm:text-lg">
          <ContentRenderer content={post.content} />
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;