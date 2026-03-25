import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Geist_Mono, Figtree } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { FooterSection } from "@/components/sections/footer"
import { Navbar } from "@/components/sections/navbar"

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Akhmad Qasim",
    template: "%s | Akhmad Qasim",
  },
  description:
    "Personal portfolio of Akhmad Qasim - a Backend & iOS Developer from Indonesia. Explore projects, skills, and experience in building mobile apps, APIs, and scalable software solutions.",
  metadataBase: new URL("https://akhmadqasim.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akhmadqasim.com",
    siteName: "Akhmad Qasim",
    title: "Akhmad Qasim",
    description:
      "Personal portfolio of Akhmad Qasim - a Backend & iOS Developer from Indonesia. Explore projects, skills, and experience in building mobile apps, APIs, and scalable software solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akhmad Qasim",
    description:
      "Personal portfolio of Akhmad Qasim - a Backend & iOS Developer from Indonesia. Explore projects, skills, and experience in building mobile apps, APIs, and scalable software solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        figtree.variable
      )}
    >
      <body className="flex min-h-svh flex-col">
        <ThemeProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <FooterSection />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
