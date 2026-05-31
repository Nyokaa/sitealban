import type { MetadataRoute } from "next";
import { site, navigation } from "@/data/site";
import { expertises } from "@/data/expertises";
import { articles } from "@/data/articles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");

  const pages = [
    ...navigation.map((n) => n.href),
    "/mentions-legales",
    "/politique-de-confidentialite",
  ];

  const staticEntries = pages.map((href) => ({
    url: `${base}${href === "/" ? "" : href}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: href === "/" ? 1 : 0.7,
  }));

  const expertiseEntries = expertises.map((e) => ({
    url: `${base}/expertise/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const articleEntries = articles.map((a) => ({
    url: `${base}/actualites/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...expertiseEntries, ...articleEntries];
}
