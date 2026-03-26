"use client"

import { useEffect } from "react"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0f] text-zinc-100">
      <h2 className="text-xl font-medium mb-2">Something went wrong</h2>
      <p className="text-sm text-zinc-400 mb-6">{error.message}</p>
      <button
        onClick={reset}
        className="rounded-lg bg-indigo-500/20 border border-indigo-500/30 px-4 py-2 text-sm text-indigo-300 hover:bg-indigo-500/30 transition-colors"
      >
        Try again
      </button>
    </div>
  )
}
