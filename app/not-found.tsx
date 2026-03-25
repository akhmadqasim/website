import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold sm:text-7xl lg:text-8xl">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-foreground px-6 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
      >
        Go Home
      </Link>
    </main>
  )
}
