import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const nextConfig = {
  images: {
    domains: ["github.com"],
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm, ["remark-toc", { heading: "The Table" }]],
    rehypePlugins: [
      "rehype-slug",
      ["rehype-katex", { strict: true, throwOnError: true }],
    ],
  },
});

export default withMDX(nextConfig);
