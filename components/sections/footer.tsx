export function FooterSection() {
  return (
    <footer className="border-t px-6 py-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Akhmad Qasim</p>
        <div className="flex gap-4">
          <a href="https://github.com/akhmadqasim" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            GitHub
          </a>
          <a href="https://instagram.com/akhmad_qasim" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
