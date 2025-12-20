import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllInsights() {
  const dir = path.join(process.cwd(), "src/content/insights");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const source = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(source);
      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date || null,
      };
    })
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}
