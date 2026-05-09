"use client"

import { useEffect } from "react"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#09090b] text-zinc-100">
      <h2 className="text-xl font-medium mb-2">Something went wrong</h2>
      <p className="text-sm text-zinc-400 mb-6">{error.message}</p>
      <button
        onClick={reset}
        className="rounded-lg bg-white/10 border border-white/15 px-4 py-2 text-sm text-zinc-200 hover:bg-white/15 transition-colors"
      >
        Try again
      </button>
    </div>
  )
}
