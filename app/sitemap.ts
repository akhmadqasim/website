import { execFile } from "node:child_process"
import { promisify } from "node:util"

import type { MetadataRoute } from "next"

import { siteUrl } from "@/lib/site"

const SUPPORTED_LANGS = ["en", "id", "zh", "ja", "de", "ar"] as const
const execFileAsync = promisify(execFile)

type SitemapEntryConfig = {
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  priority: number
  sourcePaths: string[]
}

async function getLastModified(
  sourcePaths: string[]
): Promise<Date | undefined> {
  try {
    const { stdout } = await execFileAsync(
      "git",
      ["log", "-1", "--format=%cI", "--", ...sourcePaths],
      {
        cwd: process.cwd(),
      }
    )
    const value = stdout.trim()
    if (!value) return undefined

    const date = new Date(value)
    return Number.isNaN(date.getTime()) ? undefined : date
  } catch {
    return undefined
  }
}

async function createEntry(
  url: string,
  config: SitemapEntryConfig
): Promise<MetadataRoute.Sitemap[number]> {
  const lastModified = await getLastModified(config.sourcePaths)

  return {
    url,
    ...(lastModified ? { lastModified } : {}),
    changeFrequency: config.changeFrequency,
    priority: config.priority,
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = await Promise.all([
    createEntry(siteUrl, {
      changeFrequency: "monthly",
      priority: 1,
      sourcePaths: [
        "app/(site)/layout.tsx",
        "app/(site)/page.tsx",
        "components/sections/hero.tsx",
        "components/sections/navbar.tsx",
        "components/sections/footer.tsx",
        "components/app-shell.tsx",
        "lib/site.ts",
      ],
    }),
    createEntry(`${siteUrl}/skills`, {
      changeFrequency: "monthly",
      priority: 0.8,
      sourcePaths: [
        "app/(site)/skills/page.tsx",
        "components/sections/skills.tsx",
        "components/sections/infra.tsx",
      ],
    }),
    createEntry(`${siteUrl}/projects`, {
      changeFrequency: "monthly",
      priority: 0.8,
      sourcePaths: [
        "app/(site)/projects/page.tsx",
        "components/projects-page.tsx",
      ],
    }),
  ])

  const legalPages = await Promise.all(
    SUPPORTED_LANGS.flatMap((lang) => [
      createEntry(`${siteUrl}/core/${lang}/privacy-policy`, {
        changeFrequency: "yearly",
        priority: 0.5,
        sourcePaths: [
          "app/core/[lang]/layout.tsx",
          "app/core/[lang]/privacy-policy/page.tsx",
          `content/core/${lang}/privacy-policy.mdx`,
        ],
      }),
      createEntry(`${siteUrl}/core/${lang}/privacy-rights`, {
        changeFrequency: "yearly",
        priority: 0.5,
        sourcePaths: [
          "app/core/[lang]/layout.tsx",
          "app/core/[lang]/privacy-rights/page.tsx",
          `content/core/${lang}/privacy-rights.mdx`,
        ],
      }),
    ])
  )

  return [...staticPages, ...legalPages]
}
