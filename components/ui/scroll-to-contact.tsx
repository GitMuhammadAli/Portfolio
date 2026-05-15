'use client'

/**
 * Vertical-line "scroll to contact" indicator. Sits between the last
 * regular section and the CinematicFooter curtain-reveal — gives the
 * reader a clear cue that there's more below and the contact area is
 * intentionally hidden by the curtain pattern.
 *
 * The line "drips" downward (CSS keyframe gradient) so it reads as a
 * scroll prompt instead of a static divider.
 */
export function ScrollToContact({ label = 'Scroll to contact' }: { label?: string }) {
  return (
    <div className="relative w-full flex flex-col items-center justify-center py-24 md:py-32 select-none">
      {/* Label */}
      <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500 mb-8">
        {label}
      </span>

      {/* Vertical line container */}
      <div className="relative h-40 md:h-56 w-px overflow-hidden bg-white/[0.06] rounded-full">
        {/* Animated "drip" — a short bright segment travels from top to
            bottom on a loop, giving the line a downward sense of motion */}
        <span
          aria-hidden
          className="absolute left-0 top-0 w-px h-12 bg-gradient-to-b from-transparent via-sky-400/90 to-transparent animate-scroll-drip"
        />
      </div>

      {/* Tiny dot at the end of the line */}
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400/70" />

      <style jsx>{`
        @keyframes scroll-drip {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateY(2400%);
            opacity: 0;
          }
        }
        .animate-scroll-drip {
          animation: scroll-drip 2.6s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>
    </div>
  )
}
