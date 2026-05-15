'use client'

/**
 * Editorial-style team member card with overlapping portrait, large display
 * typography, circular CTA toggle, and staggered entrance animations.
 *
 * Adapted from emerald-ui's v2 spec to this project's Tailwind v3 setup:
 *   - h-125 / w-90 → arbitrary px values (Tailwind v3 doesn't ship those)
 *   - bg-linear-to-* → bg-gradient-to-* (v3 gradient utility)
 *   - cn helper imported from existing @/lib/utils
 */
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface TeamMemberCardProps {
  position: 'left' | 'right'
  jobPosition?: string
  firstName?: string
  lastName?: string
  imageUrl?: string
  description?: string
  className?: string
  ctaHref?: string
}

export default function TeamMemberCard({
  position = 'left',
  jobPosition = 'Full Stack Developer',
  firstName = 'Ali',
  lastName = 'Shahid',
  imageUrl = '/images/me.png',
  description,
  className,
  ctaHref = '#contact',
}: TeamMemberCardProps) {
  const fullName = `${firstName} ${lastName}`
  const isPositionRight = position === 'right'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('relative my-16 flex flex-col justify-center', className)}
    >
      {/* jobPosition label — editorial uppercase tracking */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p
          className={cn(
            'mb-4 text-xs font-medium tracking-[0.3em] text-zinc-500 uppercase',
            isPositionRight && 'text-right'
          )}
        >
          {jobPosition}
        </p>
      </motion.div>

      <div className="flex items-center justify-end">
        {/* Portrait image with reveal animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative h-[500px] w-[360px] shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl shadow-black/40',
            isPositionRight && 'order-1'
          )}
        >
          {/* Subtle gradient overlay for texture */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <Image
            src={imageUrl}
            alt={fullName}
            fill
            priority
            sizes="(max-width: 768px) 80vw, 360px"
            className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
          />
        </motion.div>

        {/* Info block — overlaps image via negative margin */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative z-20 flex w-[calc(100%-350px)] flex-col gap-14',
            isPositionRight ? 'left-8 items-end' : '-left-8'
          )}
        >
          {/* Display name — large editorial type */}
          <div>
            <p className="text-5xl md:text-6xl leading-[1.1] font-extralight tracking-tight text-white">
              {firstName}
              <br />
              <span className="font-normal">{lastName}</span>
            </p>
          </div>

          {/* Details row — circular CTA + bio */}
          <div className={cn('flex gap-8', isPositionRight && 'justify-end')}>
            <motion.a
              href={ctaHref}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'group flex h-20 w-20 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/20 transition-colors duration-300 hover:border-white/60 hover:bg-white/10',
                isPositionRight && 'order-1'
              )}
              aria-label="Get in touch"
            >
              <ArrowRight
                size={22}
                className={cn(
                  'text-zinc-400 transition-all duration-300 group-hover:-rotate-45 group-hover:text-white',
                  isPositionRight && 'rotate-180 group-hover:rotate-[225deg]'
                )}
              />
            </motion.a>

            {/* Bio copy — comfortable reading: ~16px Jakarta @ 1.7 leading,
                a touch of letter-spacing so the long word-strings (tech names,
                company names) breathe instead of clumping. Widened from 60%
                so the paragraph wraps at a comfortable measure (~58–65ch). */}
            <div className="w-full md:w-[70%] lg:w-[75%] max-w-[62ch]">
              <p
                className={cn(
                  'text-[15px] md:text-base font-light text-white',
                  isPositionRight && 'text-right'
                )}
                style={{
                  lineHeight: 1.75,
                  letterSpacing: '0.015em',
                }}
              >
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
