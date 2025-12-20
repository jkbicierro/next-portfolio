import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/components/ui/mdx-components";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const filePath = path.join(
    process.cwd(),
    "src/content/insights",
    `${params.slug}.mdx`
  );
  const file = fs.readFileSync(filePath, "utf8");
  const { data } = matter(file);

  return {
    title: data.title + " - John Bicierro" || "Insights - John Bicierro",
    description:
      data.description ||
      "A collection of insightful articles and blog posts by John Bicierro, sharing knowledge and experiences.",
  };
}

export default async function Post({ params }: Props) {
  const filePath = path.join(
    process.cwd(),
    "src/content/insights",
    `${params.slug}.mdx`
  );
  const file = fs.readFileSync(filePath, "utf8");
  const { content } = matter(file);

  return (
    <>
      <section className="border py-[200px] flex justify-center">
        <div className="w-[650px] border">
          <MDXRemote {...{ source: content, components: useMDXComponents() }} />
        </div>
      </section>
    </>
  );
}
