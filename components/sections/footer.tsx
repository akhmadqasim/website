export function FooterSection() {
  return (
    <footer className="border-t px-6 py-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Akhmad Qasim</p>
        <nav aria-label="Footer" className="flex gap-4">
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
