import { Geist_Mono, Figtree } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"

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
      </body>
    </html>
  )
}
