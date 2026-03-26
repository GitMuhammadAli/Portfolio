'use client'

import { Heart } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeIn, viewportConfig } from '@/lib/motion'

export default function Footer() {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.footer
      className="relative py-10 border-t border-white/[0.04]"
      variants={prefersReducedMotion ? undefined : fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-zinc-500 text-sm flex items-center justify-center gap-1">
          © {new Date().getFullYear()} Ali Shahid · Built with
          <Heart className="w-3.5 h-3.5 text-red-400/60" />
          and intention
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
    </motion.footer>
  )
}
