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
    {
      url: "https://muaythai-gear-quiz.vercel.app/guides/fairtex-vs-twins-gloves",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://muaythai-gear-quiz.vercel.app/guides/best-muay-thai-gloves-for-sparring",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://muaythai-gear-quiz.vercel.app/guides/best-thai-pads-for-beginners",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://muaythai-gear-quiz.vercel.app/guides/how-to-choose-muay-thai-gloves",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://muaythai-gear-quiz.vercel.app/guides/muay-thai-gear-for-home-training",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
