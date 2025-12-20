import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllProjects() {
  const dir = path.join(process.cwd(), "src/content/projects");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const source = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(source);
      return {
        slug: file.replace(/\.mdx$/, ""),
        small: data.small || "",
        title: data.title || "Untitled",
        description: data.description || "",
        image: data.image || null,
        alt: data.alt || "",
        date: data.date || null,
      };
    })
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}
