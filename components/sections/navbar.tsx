"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-1 rounded-full border border-border/40 bg-background/60 px-1 py-1 shadow-sm backdrop-blur-xl">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              pathname === link.href
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
