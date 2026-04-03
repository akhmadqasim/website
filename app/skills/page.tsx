import type { Metadata } from "next"

import { SkillsSection } from "@/components/sections/skills"
import { InfraSection } from "@/components/sections/infra"

const title = "Skills"
const description =
  "Explore Akhmad Qasim's backend, iOS, DevOps, system architecture, and network infrastructure skills across modern application and platform engineering."
const url = "https://www.akhmadqasim.com/skills"
const socialTitle = "Skills | Akhmad Qasim"

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
    type: "website",
  },
  twitter: {
    title: socialTitle,
    description,
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
