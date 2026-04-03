import type { Metadata } from "next"

import { ProjectsPageContent } from "@/components/projects-page"

const title = "Projects"
const description =
  "Selected backend, iOS, and full-stack projects by Akhmad Qasim, including competition platforms, dashboards, and school management systems."
const url = "https://www.akhmadqasim.com/projects"
const socialTitle = "Projects | Akhmad Qasim"

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

export default function ProjectsPage() {
  return <ProjectsPageContent />
}
