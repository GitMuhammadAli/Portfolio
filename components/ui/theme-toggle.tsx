'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

/**
 * Round icon-button that toggles between light and dark via next-themes.
 *
 * Uses `mounted` gate to avoid hydration mismatch: on SSR the theme
 * isn't known yet, so render a neutral placeholder until mount.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const current = resolvedTheme ?? theme
  const isDark = current === 'dark'

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'relative h-9 w-9 rounded-full inline-flex items-center justify-center',
        'border border-border hover:border-border-strong bg-bg-muted',
        'transition-colors duration-300',
        className,
      )}
    >
      {mounted ? (
        isDark ? (
          <Sun className="h-4 w-4 text-fg" strokeWidth={1.75} />
        ) : (
          <Moon className="h-4 w-4 text-fg" strokeWidth={1.75} />
        )
      ) : (
        <span className="h-4 w-4 block" aria-hidden />
      )}
    </button>
  )
}
