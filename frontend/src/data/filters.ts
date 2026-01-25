export interface Filter {
  key: string;
  label: string;
}

export const FILTERS: Filter[] = [
  { key: "all", label: "All Projects" },
  { key: "featured", label: "Featured" },
  { key: "react", label: "React" },
  { key: "nextjs", label: "Next.js" },
  { key: "javascript", label: "JavaScript" },
  { key: "html", label: "HTML" },
  { key: "css", label: "CSS" },
];

export const FILTER_TYPES = {
  ALL: "all",
  FEATURED: "featured",
  REACT: "react",
  NEXTJS: "nextjs",
  JAVASCRIPT: "javascript",
  HTML: "html",
  CSS: "css",
} as const;
