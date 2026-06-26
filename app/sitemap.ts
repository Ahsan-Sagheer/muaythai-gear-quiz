import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://muaythai-gear-quiz.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://muaythai-gear-quiz.vercel.app/guides/best-muay-thai-gloves-for-beginners",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://muaythai-gear-quiz.vercel.app/guides/best-muay-thai-shin-guards",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://muaythai-gear-quiz.vercel.app/guides/muay-thai-gear-guide",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
