import type { Metadata, Viewport } from "next"

import "../globals.css"
import { AppShell, rootHtmlClassName } from "@/components/app-shell"
import { baseMetadata, profileJsonLd, siteViewport } from "@/lib/site"

export const metadata: Metadata = baseMetadata
export const viewport: Viewport = siteViewport

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={rootHtmlClassName}
    >
      <AppShell jsonLd={profileJsonLd}>{children}</AppShell>
    </html>
  )
}
