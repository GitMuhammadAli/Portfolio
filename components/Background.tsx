'use client'

import { useState, useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { CurtainButton } from '@/components/ui/curtain-button'
import { SparklesCore } from '@/components/ui/sparkles'
import { GooeyText } from '@/components/ui/gooey-text-morphing'

// Rotating identity prompts for the gooey morph below the name. Short words
// only — the morph effect distorts long strings and they overflow on mobile.
const identities = [
  'Curious',
  'Pragmatic',
  'Builder',
  'Shipper',
  'Storyteller',
]

function StaticCurves() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
      viewBox="0 0 1200 800"
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fafafa" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#a1a1aa" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#71717a" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="heroGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a1a1aa" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#fafafa" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path d="M0 400 Q200 200 400 350 T800 300 T1200 400" stroke="url(#heroGrad1)" strokeWidth="1.5" fill="none" />
      <path d="M0 500 Q300 350 600 450 T1200 380" stroke="url(#heroGrad2)" strokeWidth="1" fill="none" />
    </svg>
  )
}

function DriftingBlobs() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Drop to two smaller blobs with blur-2xl instead of three with blur-3xl —
  // 3xl + transform animations on offscreen-large divs were the hero's main
  // jank source. Pause the animation entirely when the section scrolls out.
  const pauseStyle = isVisible ? undefined : { animationPlayState: 'paused' as const }

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none">
      <div
        className="absolute w-[380px] h-[380px] rounded-full blur-2xl opacity-[0.07] animate-blob-drift will-change-transform"
        style={{ background: 'linear-gradient(135deg, #fafafa, #a1a1aa)', top: '10%', left: '-5%', ...pauseStyle }}
      />
      <div
        className="absolute w-[320px] h-[320px] rounded-full blur-2xl opacity-[0.06] animate-blob-drift-2 will-change-transform"
        style={{ background: 'linear-gradient(135deg, #a1a1aa, #71717a)', bottom: '5%', right: '-3%', ...pauseStyle }}
      />
    </div>
  )
}

export default function Background() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Layered radial gradient background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 60%),
              radial-gradient(ellipse 60% 50% at 70% 60%, rgba(255, 255, 255, 0.07) 0%, transparent 50%),
              radial-gradient(ellipse 50% 40% at 50% 90%, rgba(255, 255, 255, 0.06) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <StaticCurves />
      <DriftingBlobs />

      {/* Content — centered Acme-style hero. Name → tag → sparkle strip →
          gooey morph → CTAs. */}
      <div className="relative z-10 w-full px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <h1
            className="font-bold tracking-tight text-fg"
            style={{
              fontSize: 'clamp(2.75rem, 12vw, 8.5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.025em',
            }}
          >
            Ali Shahid
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-fg-muted font-light tracking-[0.3em] uppercase">
            Full Stack Developer
          </p>

          {/* Sparkle strip — gradient lines + sparkle puddle. Width tracks
              the name (~12vw font ⇒ "Ali Shahid" ≈ 70–80% of viewport at
              wide breakpoints). Lines span the full width with edge fades,
              sparkle puddle stays centered under the name. */}
          <div className="relative w-full max-w-[56rem] md:max-w-[64rem] lg:max-w-[72rem] h-28 sm:h-32 mt-6 mx-auto">
            <div className="absolute inset-x-[8%] top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] blur-sm" />
            <div className="absolute inset-x-[8%] top-0 bg-gradient-to-r from-transparent via-indigo-400 to-transparent h-px" />
            <div className="absolute inset-x-[20%] top-0 bg-gradient-to-r from-transparent via-sky-400 to-transparent h-[5px] blur-md" />
            <div className="absolute inset-x-[20%] top-0 bg-gradient-to-r from-transparent via-sky-300 to-transparent h-px" />

            {!prefersReducedMotion && (
              <div
                className="absolute inset-0"
                style={{
                  maskImage:
                    'radial-gradient(70% 70% at 50% 0%, black 30%, transparent 100%)',
                  WebkitMaskImage:
                    'radial-gradient(70% 70% at 50% 0%, black 30%, transparent 100%)',
                }}
              >
                <SparklesCore
                  id="hero-strip-sparkles"
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={420}
                  particleColor="#ffffff"
                  speed={0.7}
                  className="w-full h-full"
                />
              </div>
            )}
          </div>

          <div className="h-14 sm:h-16 mt-2 mb-10 flex items-center justify-center">
            {prefersReducedMotion ? (
              <span className="text-2xl sm:text-3xl text-fg font-medium tracking-tight">
                {identities[0]}
              </span>
            ) : (
              <GooeyText
                texts={identities}
                morphTime={1.1}
                cooldownTime={1.4}
                className="h-14 sm:h-16 w-full"
                textClassName="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight"
              />
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto px-4 sm:px-0">
            <CurtainButton
              text="View Projects"
              variant="default"
              onClick={() => {
                const el = document.getElementById('projects')
                if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
              }}
            />
            <CurtainButton
              text="Get In Touch"
              variant="outline"
              onClick={() => {
                const el = document.getElementById('contact')
                if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
              }}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
    </section>
  )
}
