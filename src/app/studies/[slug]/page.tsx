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
  const filePath = path.join(process.cwd(), "src/content/studies", `${slug}.mdx`);
  const file = fs.readFileSync(filePath, "utf8");
  const { data } = matter(file);

  return {
    title: data.title || "Case Studies",
    description:
      data.description ||
      "Explore detailed case studies on John Bicierro's portfolio, showcasing project insights and outcomes.",
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "src/content/studies", `${slug}.mdx`);

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
