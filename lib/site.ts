import type { Metadata, Viewport } from "next"

export const siteUrl = "https://www.akhmadqasim.com"
export const siteName = "Akhmad Qasim"
export const siteDescription =
  "Personal portfolio of Akhmad Qasim - a Backend & iOS Developer from Indonesia. Explore projects, skills, and experience in building mobile apps, APIs, and scalable software solutions."
export const ogImageUrl = `${siteUrl}/og`

export const siteViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1c1c1c" },
  ],
}

export const baseMetadata: Metadata = {
  title: {
    default: `${siteName} — Backend & iOS Developer`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  manifest: "/manifest.json",
  alternates: {
    canonical: siteUrl,
  },
  keywords: [
    "Akhmad Qasim",
    "Backend Developer",
    "iOS Developer",
    "Software Developer Indonesia",
    "TypeScript",
    "Swift",
    "SwiftUI",
    "Node.js",
    "Portfolio",
    "Full-stack Developer",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${siteName} — Backend & iOS Developer`,
    description: siteDescription,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${siteName} — Backend & iOS Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Backend & iOS Developer`,
    description: siteDescription,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// WebSite schema — key signal for Google Sitelinks
export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  description: siteDescription,
  publisher: {
    "@id": `${siteUrl}/#person`,
  },
}

// Person schema — key signal for Google Knowledge Panel
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: "Akhmad Qasim",
  givenName: "Akhmad",
  familyName: "Qasim",
  url: siteUrl,
  jobTitle: "Backend & iOS Developer",
  description:
    "Backend & iOS Developer from Indonesia specializing in scalable server architectures and native mobile experiences",
  image: `${siteUrl}/icon.png`,
  nationality: {
    "@type": "Country",
    name: "Indonesia",
  },
  knowsAbout: [
    "Backend Development",
    "iOS Development",
    "TypeScript",
    "Python",
    "Swift",
    "SwiftUI",
    "Node.js",
    "PostgreSQL",
    "Redis",
    "Docker",
    "System Architecture",
    "API Design",
  ],
  sameAs: [
    "https://github.com/akhmadqasim",
    "https://www.instagram.com/akhmad_qasim",
  ],
}

// ProfilePage schema — wraps the Person entity
export const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/#profilepage`,
  mainEntity: {
    "@id": `${siteUrl}/#person`,
  },
}

// BreadcrumbList helper — helps Google understand site hierarchy for Sitelinks
export function createBreadcrumbJsonLd(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
