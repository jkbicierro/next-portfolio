import type { MDXComponents } from "mdx/types";
import { ComponentProps } from "react";

const components = {
  table: (props: ComponentProps<"table">) => (
    <table className="table-auto border-collapse border border-gray-300" {...props} />
  ),
  th: (props: ComponentProps<"th">) => <th className="border p-2" {...props} />,
  td: (props: ComponentProps<"td">) => <td className="border p-2" {...props} />,
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote className="border-l-4 pl-4 text-slate-600" {...props} />
  ),
  h1: (props: ComponentProps<"h1">) => <h1 className="text-4xl  mb-5" {...props} />,
  h2: (props: ComponentProps<"h2">) => <h2 className="text-3xl mb-4 mt-8" {...props} />,
  h3: (props: ComponentProps<"h3">) => <h3 className="text-2xl  mb-3 mt-6" {...props} />,
  p: (props: ComponentProps<"p">) => <p className="mb-4 leading-7" {...props} />,
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
