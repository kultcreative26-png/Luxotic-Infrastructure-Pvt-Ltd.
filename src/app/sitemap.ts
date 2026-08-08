import { MetadataRoute } from "next";
import { PROJECTS_DATA } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.luxoticinfra.com";

  const projectUrls = PROJECTS_DATA.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const staticUrls = [
    "",
    "/about-us",
    "/projects",
    "/our-approach",
    "/sustainability",
    "/downloads",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.9,
  }));

  return [...staticUrls, ...projectUrls];
}
