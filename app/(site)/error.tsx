"use client"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
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
