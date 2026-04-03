import type { Metadata } from "next"

import { InfraSection } from "@/components/sections/infra"
import { SkillsSection } from "@/components/sections/skills"
import { siteName, siteUrl } from "@/lib/site"

const title = "Skills"
const description =
  "Explore Akhmad Qasim's backend, iOS, DevOps, system architecture, and network infrastructure skills across modern application and platform engineering."
const url = `${siteUrl}/skills`
const socialTitle = `${title} | ${siteName}`

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title: socialTitle,
    description,
    url,
    siteName,
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description,
    images: [`${siteUrl}/opengraph-image`],
  },
}

export default function SkillsPage() {
  return (
    <main className="min-h-svh">
      <SkillsSection />
      <InfraSection />
    </main>
  )
}
