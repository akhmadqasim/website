import Link from "next/link"

export function NotFoundPage() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold sm:text-7xl lg:text-8xl">404</h1>
      <p className="sr-only">Page not found</p>
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

export function LoadingPage() {
  return (
    <main className="flex min-h-svh items-center justify-center">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-muted-foreground border-t-foreground" />
    </main>
  )
}

export function ErrorPage({
  reset,
}: {
  reset: () => void
}) {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold sm:text-5xl">Something went wrong</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        An unexpected error occurred.
      </p>
      <button
        onClick={reset}
        className="mt-8 rounded-full bg-foreground px-6 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
      >
        Try Again
      </button>
    </main>
  )
}
