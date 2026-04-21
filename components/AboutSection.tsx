'use client'

import { useRef, useCallback } from 'react'
import Image from 'next/image'
import { SkeuIcon, type SkeuIconName } from '@/components/ui/skeu-icon'
import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/motion'

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

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    const glare = glareRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -8
    const rotateY = ((x - centerX) / centerX) * 8

    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`

    if (glare) {
      const px = (x / rect.width) * 100
      const py = (y / rect.height) * 100
      glare.style.setProperty('--glare-x', `${px}%`)
      glare.style.setProperty('--glare-y', `${py}%`)
      glare.style.opacity = '1'
    }
  }, [])

  const handleLeave = useCallback(() => {
    const card = cardRef.current
    const glare = glareRef.current
    if (card) card.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    if (glare) glare.style.opacity = '0'
  }, [])

  return (
    <div
      className="reveal-flip"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="pulse-border-card relative p-8 rounded-2xl bg-white/[0.02] backdrop-blur-sm
          transition-transform duration-200 ease-out cursor-default"
        style={{ willChange: 'transform' }}
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
        <div className="max-w-4xl mx-auto">
          {/* Profile + heading */}
          <motion.div variants={prefersReducedMotion ? undefined : staggerItem} className="flex flex-col items-center mb-12 reveal-blur">
            <Image
              src="/images/me.png"
              alt="Ali Shahid"
              width={128}
              height={128}
              className="rounded-full border-2 border-indigo-500/30 object-cover mb-6
                shadow-lg shadow-indigo-500/10"
              priority
              fetchPriority="high"
              sizes="128px"
            />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-violet-500 mt-4 rounded-full" />
          </motion.div>

          {/* Bio */}
          <motion.div variants={prefersReducedMotion ? undefined : staggerItem} className="text-center mb-16 reveal-blur" style={{ transitionDelay: '100ms' }}>
            <p className="text-lg leading-relaxed text-zinc-400">
              I&apos;m a Full-Stack Developer with a BS in Computer Science from{' '}
              <span className="text-indigo-400 font-medium">Bahria University</span>.
              Currently at NgXoft Solutions, I build and ship production-grade web applications.
              I work with{' '}
              <span className="text-violet-400 font-medium">
                Node.js, Express, MongoDB, React.js, Next.js, NestJS, PostgreSQL, and Docker
              </span>
              . I&apos;ve developed{' '}
              <span className="text-amber-400 font-medium">6+ end-to-end web applications</span>{' '}
              spanning AI-powered platforms, job market intelligence, authentication systems, and inventory management tools.
            </p>
          </motion.div>

          {/* 3D Tilt cards */}
          <motion.div variants={prefersReducedMotion ? undefined : staggerItem} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {cards.map((item, i) => (
              <TiltCard key={item.title} icon={item.icon} title={item.title} index={i} />
            ))}
          </motion.div>

          {/* Additional info */}
          <motion.div variants={prefersReducedMotion ? undefined : staggerItem} className="reveal text-center" style={{ transitionDelay: '400ms' }}>
            <p className="text-lg text-zinc-400">
              Skilled in designing <span className="text-indigo-400">RESTful APIs</span>,
              integrating third-party services, and automating deployments with{' '}
              <span className="text-violet-400">Docker, Vercel, and VPS hosting</span>.
              I&apos;m open to opportunities where I can work on interesting projects and
              learn from experienced teams.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
