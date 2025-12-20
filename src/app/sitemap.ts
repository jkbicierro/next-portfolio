import type { MetadataRoute } from "next";
import { getAllInsights } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const lastModified = new Date();
  const insights = getAllInsights();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/studies`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const insightRoutes: MetadataRoute.Sitemap = insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}`,
    lastModified: insight.date ? new Date(insight.date) : lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...insightRoutes];
}
