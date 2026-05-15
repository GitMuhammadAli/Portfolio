'use client'

import { useEffect, useRef } from 'react'

interface CursorSpotlightProps {
  size?: number
  className?: string
}

/**
 * Tints the tiles below the cursor by overlaying a colored radial gradient
 * with `mix-blend-mode: overlay`. The blend mode means the gradient only
 * shows where there's something underneath (the box-grid borders) — so the
 * effect reads as "the tiles light up around the cursor" rather than as a
 * separate light source.
 *
 * Cheap: one CSS-variable update per rAF, no per-cell state, no React
 * re-renders.
 */
export function CursorSpotlight({ size = 360, className = '' }: CursorSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const pending = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const flush = () => {
      rafRef.current = null
      const p = pending.current
      if (!p || !el) return
      el.style.setProperty('--mx', `${p.x}px`)
      el.style.setProperty('--my', `${p.y}px`)
      el.style.opacity = '1'
    }

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      pending.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(flush)
    }

    const onLeave = () => {
      if (el) el.style.opacity = '0'
    }

    const parent = el.parentElement
    if (!parent) return
    parent.addEventListener('mousemove', onMove)
    parent.addEventListener('mouseleave', onLeave)
    return () => {
      parent.removeEventListener('mousemove', onMove)
      parent.removeEventListener('mouseleave', onLeave)
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className={`absolute inset-0 pointer-events-none transition-opacity duration-200 opacity-0 ${className}`}
      style={
        {
          // Multi-stop colorful gradient — pastels matching the Boxes hover
          // palette (sky / pink / green / yellow / red / purple / indigo).
          background: `radial-gradient(${size}px circle at var(--mx, 50%) var(--my, 50%),
            rgba(125, 211, 252, 0.55) 0%,
            rgba(216, 180, 254, 0.40) 25%,
            rgba(249, 168, 212, 0.25) 50%,
            transparent 75%)`,
          mixBlendMode: 'overlay',
        } as React.CSSProperties
      }
    />
  )
}
