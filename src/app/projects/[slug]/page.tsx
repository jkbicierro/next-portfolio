import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";
import MDXRenderer from "@/components/mdx/mdx-renderer";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/content/projects", `${slug}.mdx`);
  const file = fs.readFileSync(filePath, "utf8");
  const { data } = matter(file);

  return {
    title: data.title || "Projects",
    description:
      data.description ||
      "A collection of projects showcasing my work in web development, design, and technology. Explore case studies, insights, and innovative solutions I've crafted to solve real-world problems.",
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/content/projects", `${slug}.mdx`);

  try {
    const file = fs.readFileSync(filePath, "utf8");
    const { content } = matter(file);

    return (
      <>
        <section className="border py-[200px] flex justify-center">
          <div className="w-[650px] border">
            <MDXRenderer source={content} />
          </div>
        </section>
      </>
    );
  } catch {
    return notFound();
  }
}
