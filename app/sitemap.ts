import type { MetadataRoute } from "next"

const SUPPORTED_LANGS = ["en", "id", "zh", "ja", "de", "ar"] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://akhmadqasim.com"

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]

  const legalPages = SUPPORTED_LANGS.flatMap((lang) => [
    {
      url: `${baseUrl}/core/${lang}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/core/${lang}/privacy-rights`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
  ])

  return [...staticPages, ...legalPages]
}
