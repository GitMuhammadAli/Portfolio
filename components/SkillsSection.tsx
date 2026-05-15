'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/motion'
import { Skills } from '@/components/ui/skills-showcase'

// Skills organized by category, sourced from Ali's resume (not invented).
// Levels are subjective self-rating — most-used (90+), frequent (80-89),
// familiar (70-79).
const frontend = [
  { name: 'React', level: 92 },
  { name: 'Next.js', level: 90 },
  { name: 'TypeScript', level: 88 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Framer Motion', level: 80 },
]

const backend = [
  { name: 'Node.js', level: 90 },
  { name: 'NestJS', level: 88 },
  { name: 'Express', level: 85 },
  { name: 'REST + tRPC', level: 85 },
  { name: 'Socket.IO / BullMQ', level: 78 },
]

const databases = [
  { name: 'PostgreSQL + Prisma', level: 88 },
  { name: 'MongoDB + Mongoose', level: 85 },
  { name: 'Redis', level: 80 },
  { name: 'pgvector / Pinecone', level: 78 },
  { name: 'Supabase', level: 75 },
]

const aiDevops = [
  { name: 'OpenAI · Gemini · Groq', level: 88 },
  { name: 'Docker', level: 82 },
  { name: 'Vercel · Render · Fly', level: 85 },
  { name: 'GitHub Actions CI/CD', level: 80 },
  { name: 'Stripe + Webhooks', level: 78 },
]

export default function SkillsSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="skills" className="relative py-28 overflow-hidden isolate">
      {/* Editorial backdrop: ambient sky + violet radial glows behind a
          faint CSS dot grid. Replaces the prior Boxes pattern (rainbow
          tiles felt too busy against the new minimal list cards). */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)',
        }}
      >
        {/* Ambient glows — sky + indigo radial fills */}
        <div
          className="absolute top-1/3 -left-40 w-[700px] h-[700px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 18%, transparent), transparent 65%)' }}
        />
        <div
          className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] rounded-full blur-[110px]"
          style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 12%, transparent), transparent 65%)' }}
        />
        {/* Dot grid — uses fg-token so dots invert per theme */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'radial-gradient(circle, color-mix(in srgb, var(--fg) 8%, transparent) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            backgroundPosition: '0 0',
          }}
        />
      </div>
      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 reveal-blur">
            <h2 className="text-4xl md:text-5xl font-bold text-fg">
              Skills <span className="text-fg-muted">&amp;</span> Tech
            </h2>
            <div className="h-1 w-16 bg-accent mx-auto mt-4 rounded-full" />
            <p className="mt-5 text-sm text-fg-subtle tracking-wide">Hover any row to reveal proficiency</p>
          </div>

          {/* 4 hover-reveal skill lists in a 2-column grid (single col on mobile) */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14 justify-items-center"
            variants={prefersReducedMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <motion.div variants={prefersReducedMotion ? undefined : staggerItem} className="reveal">
              <Skills title="Frontend" items={frontend} />
            </motion.div>
            <motion.div variants={prefersReducedMotion ? undefined : staggerItem} className="reveal">
              <Skills title="Backend" items={backend} />
            </motion.div>
            <motion.div variants={prefersReducedMotion ? undefined : staggerItem} className="reveal">
              <Skills title="Databases" items={databases} />
            </motion.div>
            <motion.div variants={prefersReducedMotion ? undefined : staggerItem} className="reveal">
              <Skills title="AI & DevOps" items={aiDevops} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
