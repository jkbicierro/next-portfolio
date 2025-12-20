import type { MDXComponents } from "mdx/types";

const components = {
  table: (props: any) => (
    <table
      className="table-auto border-collapse border border-gray-300"
      {...props}
    />
  ),
  th: (props: any) => <th className="border p-2" {...props} />,
  td: (props: any) => <td className="border p-2" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 pl-4 text-slate-600" {...props} />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
