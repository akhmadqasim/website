import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Geist_Mono, Figtree } from "next/font/google"

import { FooterSection } from "@/components/sections/footer"
import { Navbar } from "@/components/sections/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const rootHtmlClassName = cn(
  "antialiased",
  fontMono.variable,
  "font-sans",
  figtree.variable
)

export function AppShell({
  children,
  jsonLd,
}: Readonly<{
  children: React.ReactNode
  jsonLd?: object
}>) {
  return (
    <body className="flex min-h-svh flex-col">
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <ThemeProvider>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background"
        >
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content" className="flex-1">
          {children}
        </div>
        <FooterSection />
      </ThemeProvider>
      <Analytics />
      <SpeedInsights />
    </body>
  )
}
