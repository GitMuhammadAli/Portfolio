'use client'
import * as React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  hover?: boolean
  glow?: boolean
  className?: string
  children?: React.ReactNode
}

function GlassCard({ className, children, hover = true, glow = false }: GlassCardProps) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      className={cn(
        'rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm',
        'transition-colors duration-300',
        hover && 'hover:border-white/[0.12] hover:bg-white/[0.06]',
        glow && 'hover:shadow-[0_0_30px_rgba(99,102,241,0.08)]',
        className
      )}
      whileHover={hover && !prefersReducedMotion ? { y: -2 } : undefined}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      {children}
    </motion.div>
  )
}
export { GlassCard }
