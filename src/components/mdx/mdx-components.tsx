import type { MDXComponents } from "mdx/types";
import { ComponentProps } from "react";

const components = {
  table: (props: ComponentProps<"table">) => (
    <table
      className="table-auto border-collapse border border-gray-300"
      {...props}
    />
  ),
  th: (props: ComponentProps<"th">) => <th className="border p-2" {...props} />,
  td: (props: ComponentProps<"td">) => <td className="border p-2" {...props} />,
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote className="border-l-4 pl-4 text-slate-600" {...props} />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
