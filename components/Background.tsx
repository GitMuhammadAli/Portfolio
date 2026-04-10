'use client'

import { useState, useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { CurtainButton } from '@/components/ui/curtain-button'

const phrases = [
  'I build scalable web apps',
  'I design clean APIs',
  'I ship production code',
]

function FlowingSVG() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-20 svg-flow"
      viewBox="0 0 1200 800"
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="heroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="heroGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path
        d="M0 400 Q200 200 400 350 T800 300 T1200 400"
        stroke="url(#heroGrad1)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M0 500 Q300 350 600 450 T1200 380"
        stroke="url(#heroGrad2)"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  )
}

function MorphingBlobs() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const paused = !isVisible
    ? { animationPlayState: 'paused' as const, willChange: 'auto' as const }
    : { willChange: 'border-radius' as const }

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none">
      <div
        className="absolute w-[500px] h-[500px] animate-morph-slow opacity-[0.07]"
        style={{
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          top: '10%',
          left: '-5%',
          ...paused,
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] animate-morph-slow-2 opacity-[0.06]"
        style={{
          background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
          bottom: '5%',
          right: '-3%',
          ...paused,
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] animate-morph-slow-3 opacity-[0.05]"
        style={{
          background: 'linear-gradient(135deg, #06b6d4, #6366f1)',
          top: '50%',
          left: '60%',
          transform: 'translate(-50%, -50%)',
          ...paused,
        }}
      />
    </div>
  )
}

export default function Background() {
  const prefersReducedMotion = useReducedMotion()
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setCharIndex(phrases[0].length)
      return
    }

    const current = phrases[phraseIndex]
    const speed = isDeleting ? 30 : 60

    if (!isDeleting && charIndex === current.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setPhraseIndex((prev) => (prev + 1) % phrases.length)
      return
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1))
    }, speed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Layered radial gradient background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 30% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 60%),
              radial-gradient(ellipse 60% 50% at 70% 60%, rgba(139, 92, 246, 0.07) 0%, transparent 50%),
              radial-gradient(ellipse 50% 40% at 50% 90%, rgba(6, 182, 212, 0.06) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Flowing SVG curves */}
      <FlowingSVG />

      {/* Morphing blobs — paused when out of viewport */}
      <MorphingBlobs />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Name */}
          <h1
            className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4 tracking-tight text-white"
            style={{ lineHeight: 1.1 }}
          >
            Ali Shahid
          </h1>

          {/* Animated gradient subtitle */}
          <p
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6"
            style={{
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)',
              backgroundSize: '300% 100%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradientTextShift 4s ease infinite',
            }}
          >
            Full Stack Developer
          </p>

          {/* Typing effect */}
          <div className="h-8 mb-10 flex items-center justify-center">
            <span className="text-lg sm:text-xl text-zinc-400 font-light typing-cursor">
              {phrases[phraseIndex].substring(0, charIndex)}
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
    </section>
  )
}
