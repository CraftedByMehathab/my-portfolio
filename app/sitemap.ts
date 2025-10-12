import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mehathab.dev",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      images: ["https://mehathab.dev/mehathab.jpeg"],
    },
    {
      url: "https://mehathab.dev/MehathabShaik_Resume.pdf",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
  ];
}
