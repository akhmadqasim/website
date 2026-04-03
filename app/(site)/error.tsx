"use client"

import { ErrorPage } from "@/components/status-pages"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return <ErrorPage reset={reset} />
}
