export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
}

function parseFrontmatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw.trim() };

  const frontmatter = match[1];
  const content = match[2].trim();
  const data: Record<string, unknown> = {};

  for (const line of frontmatter.split("\n")) {
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1).trim();

    if (value.startsWith("[")) {
      // Parse array like: ["tag1", "tag2"] or [tag1, tag2]
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""));
    } else {
      // Strip surrounding quotes if present
      data[key] = value.replace(/^["']|["']$/g, "");
    }
  }

  return { data, content };
}

const files = import.meta.glob("/src/content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const blogPosts: BlogPost[] = Object.entries(files)
  .map(([filepath, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const slug = filepath.split("/").pop()!.replace(".md", "");
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      tags: (data.tags as string[]) ?? [],
      content,
    };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());