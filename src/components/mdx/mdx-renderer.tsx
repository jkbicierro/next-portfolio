"use client";

import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/components/mdx/mdx-components";

export default function MDXRenderer({ source }: { source: string }) {
  return <MDXRemote source={source} components={useMDXComponents()} />;
}
