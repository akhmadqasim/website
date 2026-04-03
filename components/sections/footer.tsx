import Link from "next/link"

export function FooterSection() {
  return (
    <footer className="border-t px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Akhmad Qasim</p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-4">
          <Link href="/projects" className="transition-colors hover:text-foreground">
            Projects
          </Link>
          <Link href="/skills" className="transition-colors hover:text-foreground">
            Skills
          </Link>
          <Link href="/core/en/privacy-policy" className="transition-colors hover:text-foreground">
            Privacy Policy
          </Link>
          <span aria-hidden="true">·</span>
          <a href="https://github.com/akhmadqasim" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)" className="transition-colors hover:text-foreground">
            GitHub
          </a>
          <a href="https://instagram.com/akhmad_qasim" target="_blank" rel="noopener noreferrer" aria-label="Instagram (opens in new tab)" className="transition-colors hover:text-foreground">
            Instagram
          </a>
          <span aria-hidden="true">·</span>
          <a href="https://status.akhmadqasim.com" target="_blank" rel="noopener noreferrer" aria-label="Status (opens in new tab)" className="transition-colors hover:text-foreground">
            Status
          </a>
        </nav>
      </div>
    </footer>
  )
}

