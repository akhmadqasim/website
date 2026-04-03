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
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: siteName,
    url: siteUrl,
    jobTitle: "Software Developer",
    description: "Backend & iOS Developer from Indonesia",
    image: `${siteUrl}/icon.png`,
    sameAs: [
      "https://github.com/akhmadqasim",
      "https://instagram.com/akhmad_qasim",
    ],
  },
}
