import type { Metadata } from "next"

import { ProjectsPageContent } from "@/components/projects-page"
import { createBreadcrumbJsonLd, ogImageUrl, siteName, siteUrl } from "@/lib/site"

const title = "Projects"
const description =
  "Selected backend, iOS, and full-stack projects by Akhmad Qasim, including competition platforms, dashboards, and school management systems."
const url = `${siteUrl}/projects`
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
        url: ogImageUrl,
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
    images: [ogImageUrl],
  },
}

const breadcrumbJsonLd = createBreadcrumbJsonLd([
  { name: "Home", url: siteUrl },
  { name: "Projects", url },
])

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProjectsPageContent />
    </>
  )
}

