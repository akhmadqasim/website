import type { Metadata, Viewport } from "next"

import "../../globals.css"
import { AppShell, rootHtmlClassName } from "@/components/app-shell"
import { baseMetadata, profileJsonLd, siteViewport } from "@/lib/site"

export const metadata: Metadata = baseMetadata
export const viewport: Viewport = siteViewport

export default async function LegalLayout(props: LayoutProps<"/core/[lang]">) {
  const { children } = props
  const { lang } = (await props.params) as { lang: string }
  const dir = lang === "ar" ? "rtl" : "ltr"

  return (
    <html
      lang={lang}
      dir={dir}
      suppressHydrationWarning
      className={rootHtmlClassName}
    >
      <AppShell jsonLd={profileJsonLd}>{children}</AppShell>
    </html>
  )
}
