'use client'

import { useRef, useCallback } from 'react'
import { SkeuIcon, type SkeuIconName } from '@/components/ui/skeu-icon'
import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/motion'
import TeamMemberCard from '@/components/ui/team-member-card'

function TiltCard({
  icon,
  title,
  index,
}: {
  icon: SkeuIconName
  title: string
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const pending = useRef<{ x: number; y: number; rect: DOMRect } | null>(null)

  const flush = useCallback(() => {
    rafRef.current = null
    const data = pending.current
    const card = cardRef.current
    const glare = glareRef.current
    if (!data || !card) return

    const { x, y, rect } = data
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8

    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`

    if (glare) {
      glare.style.setProperty('--glare-x', `${(x / rect.width) * 100}%`)
      glare.style.setProperty('--glare-y', `${(y / rect.height) * 100}%`)
      glare.style.opacity = '1'
    }
  }, [])

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current
      if (!card) return
      const rect = card.getBoundingClientRect()
      pending.current = { x: e.clientX - rect.left, y: e.clientY - rect.top, rect }
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(flush)
      }
    },
    [flush],
  )

  const handleEnter = useCallback(() => {
    const card = cardRef.current
    if (card) card.style.willChange = 'transform'
  }, [])

  const handleLeave = useCallback(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    pending.current = null
    const card = cardRef.current
    const glare = glareRef.current
    if (card) {
      card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
      card.style.willChange = 'auto'
    }
    if (glare) glare.style.opacity = '0'
  }, [])

  return (
    <div
      className="reveal-flip"
      style={{ transitionDelay: `${[0, 60, 140][index] ?? index * 80}ms` }}
    >
      <div
        ref={cardRef}
        onMouseEnter={handleEnter}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="pulse-border-card relative p-8 rounded-2xl bg-white/[0.02]
          transition-transform duration-200 ease-out cursor-default"
      >
        <div ref={glareRef} className="tilt-glare" />
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-5">
            <SkeuIcon icon={icon} size={56} />
          </div>
          <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default function AboutSection() {
  const prefersReducedMotion = useReducedMotion()
  const cards = [
    { icon: 'full-stack' as SkeuIconName, title: 'Full-Stack Development' },
    { icon: 'backend' as SkeuIconName, title: 'Backend Specialist' },
    { icon: 'learner' as SkeuIconName, title: 'Continuous Learner' },
  ]

  return (
    <section id="about" className="relative py-28">
      <motion.div
        className="relative z-10 container mx-auto px-4"
        variants={prefersReducedMotion ? undefined : staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <motion.div variants={prefersReducedMotion ? undefined : staggerItem} className="text-center mb-16 reveal-blur">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-white to-zinc-300 mt-4 rounded-full mx-auto" />
          </motion.div>

          {/* Editorial portrait card — replaces the previous avatar + bio block */}
          <motion.div variants={prefersReducedMotion ? undefined : staggerItem} className="mb-16">
            <TeamMemberCard
              position="left"
              jobPosition="Full Stack Developer"
              firstName="Ali"
              lastName="Shahid"
              imageUrl="/images/me.png"
              description="Software engineer in Lahore, Pakistan. CS from Bahria University. Currently at Hubble42 building Next.js + NestJS + Postgres platforms; previously at NgXoft Solutions on React + Tailwind frontends and NestJS backends. About a year and a half of full-stack MERN and AI work — schema → REST/tRPC → integration (OpenAI, Gemini, Groq) → Docker → CI → ship. Side projects skew AI-heavy: a multi-tenant SaaS with four agents, a self-hosted LLM gateway, a job-application pipeline, and a career-intelligence platform with pgvector matching."
              ctaHref="#contact"
            />
          </motion.div>

          {/* 3D Tilt cards */}
          <motion.div variants={prefersReducedMotion ? undefined : staggerItem} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            {cards.map((item, i) => (
              <TiltCard key={item.title} icon={item.icon} title={item.title} index={i} />
            ))}
          </motion.div>

          {/* Additional info */}
          <motion.div variants={prefersReducedMotion ? undefined : staggerItem} className="reveal text-center max-w-3xl mx-auto" style={{ transitionDelay: '420ms' }}>
            <p className="text-lg text-zinc-400">
              Skilled in designing <span className="text-zinc-100">RESTful APIs</span>,
              integrating third-party services, and automating deployments with{' '}
              <span className="text-zinc-300">Docker, Vercel, and VPS hosting</span>.
              I&apos;m open to opportunities where I can work on interesting projects and
              learn from experienced teams.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
