'use client'

type Variant = 'fade' | 'blur' | 'glow'

interface SectionBlendProps {
  variant?: Variant
  height?: number
  className?: string
  /**
   * Direction the blend reads in. 'down' fades the section above into the
   * section below (default); 'up' is the reverse.
   */
  direction?: 'down' | 'up'
}

/**
 * Visual bridge between two sections. Drop between sections in the page
 * tree — it produces a soft transition rather than a hard color cut.
 *
 *  - `fade`  : pure vertical gradient between the page background and a
 *               slightly lighter tone. Cheap, runs everywhere.
 *  - `blur`  : adds a 16px backdrop-blur so any animated elements behind
 *               it (sparkles, shader) bleed softly into the next section.
 *  - `glow`  : a thin horizontal accent line with a radial glow on top of
 *               the fade. Use sparingly — looks loud if repeated.
 */
export function SectionBlend({
  variant = 'fade',
  height = 80,
  className = '',
  direction = 'down',
}: SectionBlendProps) {
  // Five-stop S-curve so the transition feels smooth instead of linear.
  // Uses bg token (color-mix for the opacity stops) so the partition tints
  // toward the page bg in whatever theme is active.
  const stops = (dir: 'top' | 'bottom') => `linear-gradient(to ${dir},
    color-mix(in srgb, var(--bg) 0%, transparent) 0%,
    color-mix(in srgb, var(--bg) 35%, transparent) 25%,
    color-mix(in srgb, var(--bg) 70%, transparent) 50%,
    color-mix(in srgb, var(--bg) 92%, transparent) 75%,
    var(--bg) 100%)`
  const gradient = direction === 'down' ? stops('bottom') : stops('top')

  return (
    <div
      aria-hidden
      className={`relative w-full pointer-events-none ${className}`}
      style={{ height }}
    >
      {/* Vertical fade — always present */}
      <div
        className="absolute inset-0"
        style={{ background: gradient }}
      />

      {/* Backdrop blur — when 'blur' or 'glow', creates a soft handoff.
          Stronger blur (28px) over a wider mask so neighbouring sections
          (skills grid, project screenshots) actually melt together. */}
      {(variant === 'blur' || variant === 'glow') && (
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: 'blur(28px) saturate(110%)',
            WebkitBackdropFilter: 'blur(28px) saturate(110%)',
            maskImage:
              'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 20%, black 50%, rgba(0,0,0,0.8) 80%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 20%, black 50%, rgba(0,0,0,0.8) 80%, transparent 100%)',
          }}
        />
      )}

      {/* Glow accent — thin horizontal line + radial highlight */}
      {variant === 'glow' && (
        <>
          <div
            className="absolute left-1/2 top-1/2 h-px w-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                'linear-gradient(90deg, transparent, color-mix(in srgb, var(--fg) 40%, transparent), transparent)',
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 h-24 w-3/5 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl opacity-30"
            style={{
              background:
                'radial-gradient(ellipse at center, color-mix(in srgb, var(--fg) 18%, transparent), transparent 70%)',
            }}
          />
        </>
      )}
    </div>
  )
}
