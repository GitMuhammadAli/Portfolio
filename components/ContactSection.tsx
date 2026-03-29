'use client'

import { Copy, Check, Mail } from 'lucide-react'
import { useState } from 'react'
import { SkeuIcon, type SkeuIconName } from '@/components/ui/skeu-icon'
import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/motion'
import { GlassCard } from '@/components/ui/glass-card'

const contactLinks = [
  {
    skeuIcon: 'email' as SkeuIconName,
    label: 'Email',
    value: 'alishahid.dev@gmail.com',
    href: 'mailto:alishahid.dev@gmail.com',
    accent: '#6366f1',
  },
  {
    skeuIcon: 'linkedin' as SkeuIconName,
    label: 'LinkedIn',
    value: 'alishahid-fswebdev',
    href: 'https://www.linkedin.com/in/alishahid-fswebdev/',
    accent: '#8b5cf6',
  },
  {
    skeuIcon: 'github' as SkeuIconName,
    label: 'GitHub',
    value: 'GitMuhammadAli',
    href: 'https://github.com/GitMuhammadAli',
    accent: '#06b6d4',
  },
]

function FlowingSVGContact() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-15 svg-flow"
      viewBox="0 0 1200 600"
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="contactGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="contactGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path
        d="M0 300 Q200 100 500 250 T1000 200 T1200 300"
        stroke="url(#contactGrad1)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M0 400 Q300 250 600 350 T1200 280"
        stroke="url(#contactGrad2)"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M0 200 Q400 350 800 200 T1200 250"
        stroke="url(#contactGrad1)"
        strokeWidth="0.8"
        fill="none"
      />
    </svg>
  )
}

export default function ContactSection() {
  const prefersReducedMotion = useReducedMotion()
  const [copied, setCopied] = useState(false)
  const email = 'alishahid.dev@gmail.com'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <section id="contact" className="relative py-28 min-h-screen flex items-center">
      <FlowingSVGContact />

      <motion.div
        className="relative z-10 container mx-auto px-4 w-full"
        variants={prefersReducedMotion ? undefined : staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <motion.div variants={prefersReducedMotion ? undefined : staggerItem} className="text-center mb-16 reveal-blur">
            <h2
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{
                background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientTextShift 4s ease infinite',
              }}
            >
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-zinc-400 max-w-xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision.
            </p>
          </motion.div>

          {/* Contact cards */}
          <motion.div variants={prefersReducedMotion ? undefined : staggerItem} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="reveal-flip block group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <GlassCard
                  glow
                  className="p-6 rounded-2xl text-center h-full
                    relative overflow-hidden"
                >
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${link.accent}15 0%, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <SkeuIcon icon={link.skeuIcon} size={56} />
                    <h3 className="text-xl font-semibold text-white">{link.label}</h3>
                    <p className="text-sm text-zinc-400 break-all group-hover:text-zinc-300 transition-colors">
                      {link.value}
                    </p>
                  </div>
                </GlassCard>
              </a>
            ))}
          </motion.div>

          {/* Copy email bar */}
          <motion.div variants={prefersReducedMotion ? undefined : staggerItem} className="reveal max-w-lg mx-auto" style={{ transitionDelay: '300ms' }}>
            <div className="glass rounded-xl p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="text-sm text-zinc-300 font-mono truncate">{email}</span>
              </div>
              <button
                onClick={handleCopy}
                className={`shimmer-btn flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                  transition-all duration-200 shrink-0
                  ${copied
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/30'
                  }`}
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
