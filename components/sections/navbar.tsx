"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
]

export function Navbar() {
  const pathname = usePathname()
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null)

  const snapToLink = useCallback((idx: number) => {
    const el = linkRefs.current[idx]
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth })
  }, [])

  useEffect(() => {
    const idx = links.findIndex((l) => l.href === pathname)
    snapToLink(idx)
  }, [pathname, snapToLink])

  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2">
      <nav
        aria-label="Main navigation"
        className="relative flex items-center gap-1 rounded-full border border-border/40 bg-background/60 px-1 py-1 shadow-sm backdrop-blur-xl"
      >
        {pill && (
          <div
            className="absolute top-1 bottom-1 rounded-full bg-foreground transition-[left,width] duration-500 ease-[cubic-bezier(0.22,1.2,0.36,1)]"
            style={{ left: pill.left, width: pill.width }}
          />
        )}
        {links.map((link, i) => (
          <Link
            key={link.href}
            ref={(el) => {
              linkRefs.current[i] = el
            }}
            href={link.href}
            className={cn(
              "relative z-10 rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              pathname === link.href
                ? "text-background"
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
