export interface Project {
  slug: string;
  category: string;
  title: string;
  description: string;
  details?: string;
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

    // Strip surrounding quotes if present
    data[key] = value.replace(/^["']|["']$/g, "");
  }

  return { data, content };
}

const files = import.meta.glob("/src/content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

export const projects: Project[] = Object.entries(files).map(
  ([filepath, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const slug = filepath.split("/").pop()!.replace(".md", "");
    return {
      slug,
      title: data.title as string,
      category: data.category as string,
      description: data.description as string,
      details: content || undefined,
    };
  }
);