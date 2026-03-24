"use client"

import { useState } from "react"

export function ObfuscatedEmail({
  user,
  domain,
}: {
  user: string
  domain: string
}) {
  const [revealed, setRevealed] = useState(false)

  if (!revealed) {
    return (
      <button
        type="button"
        onClick={() => setRevealed(true)}
        className="cursor-pointer underline decoration-dotted underline-offset-4 text-inherit"
      >
        [Click to reveal email]
      </button>
    )
  }

  return <span>{`${user}@${domain}`}</span>
}
