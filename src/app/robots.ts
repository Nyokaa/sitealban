import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = site.url.replace(/\/$/, "");

  // Tant que le site n'est pas agréé/publié : on bloque toute indexation.
  if (!site.indexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
