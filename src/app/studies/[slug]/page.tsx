import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Metadata } from "next";
import MDXRenderer from "@/components/mdx/mdx-renderer";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    const { content, data } = matter(file);

    return (
      <>
        <section className="py-[200px] flex flex-col items-center ">
          <div className="flex flex-col gap-3">
            {/* Header */}
            <div className="flex gap-3 items-center">
              <Avatar className="w-[25px] h-[25px]">
                <AvatarImage
                  src="https://github.com/jkbicierro.png"
                  alt="John Bicierro"
                />
                <AvatarFallback>JB</AvatarFallback>
              </Avatar>
              <span className="text-sm">John Bicierro</span>
            </div>

            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <small className="uppercase text-xs">{data.type} · 12 mins read</small>
          </div>

          <div className="mt-20">
            <MDXRenderer source={content} />
          </div>
        </section>
      </>
    );
  } catch {
    return notFound();
  }
}
