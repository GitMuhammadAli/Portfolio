'use client'

import * as React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CurtainButtonProps {
  text: string
  variant?: 'default' | 'outline'
  className?: string
  onClick?: () => void
  disabled?: boolean
}

const curtainTransition = { duration: 0.4, ease: [0.19, 1, 0.22, 1] as const }

const CurtainButton = React.forwardRef<HTMLButtonElement, CurtainButtonProps>(
  ({ text, variant = 'default', className, onClick, disabled }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false)
    const prefersReducedMotion = useReducedMotion()

    const styles = {
      default: {
        base: 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20',
        curtain: 'bg-white',
        hoverText: 'text-indigo-600',
      },
      outline: {
        base: 'border border-indigo-500/30 text-indigo-300',
        curtain: 'bg-indigo-500/20',
        hoverText: 'text-white',
      },
    }
    const s = styles[variant]

    return (
      <motion.button
        ref={ref}
        className={cn(
          'relative overflow-hidden rounded-full px-8 py-3.5 font-medium',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
          'transition-shadow duration-300',
          s.base,
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        disabled={disabled}
        whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
      >
        <motion.div
          className={cn('absolute inset-0 z-0', s.curtain)}
          initial={{ y: '101%' }}
          animate={prefersReducedMotion ? undefined : isHovered ? { y: 0 } : { y: '101%' }}
          transition={curtainTransition}
        />
        <span className="relative z-10 flex items-center justify-center">
          <span className="relative flex h-5 flex-col items-center overflow-hidden">
            <span className="invisible">{text}</span>
            <motion.span
              className="absolute flex flex-col text-center"
              animate={prefersReducedMotion ? undefined : isHovered ? { y: '-50%' } : { y: 0 }}
              transition={curtainTransition}
            >
              <span className="flex h-5 items-center justify-center whitespace-nowrap">{text}</span>
              <span className={cn('flex h-5 items-center justify-center whitespace-nowrap', s.hoverText)} aria-hidden="true">{text}</span>
            </motion.span>
          </span>
        </span>
      </motion.button>
    )
  }
)

CurtainButton.displayName = 'CurtainButton'
export { CurtainButton }
