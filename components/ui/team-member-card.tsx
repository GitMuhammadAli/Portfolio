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
            'mb-4 text-xs font-medium tracking-[0.3em] text-fg-subtle uppercase',
            isPositionRight && 'text-right'
          )}
        >
          {jobPosition}
        </p>
      </motion.div>

      {/* Mobile: stack column. md+: editorial overlap. Mobile layout
          drops the negative-margin overlap entirely — under ~640px there's
          no horizontal room for it and the info block was rendering with
          w-[calc(100%-350px)] = negative, which broke everything. */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-8 md:gap-0">
        {/* Portrait image with reveal animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            // Mobile: full width, 4/5 aspect so the portrait scales down
            // without cropping. md+: fixed 360x500 like before.
            'relative aspect-[4/5] w-full max-w-[420px] mx-auto md:mx-0 md:h-[500px] md:w-[360px] md:max-w-none md:aspect-auto shrink-0 overflow-hidden rounded-2xl ring-1 ring-border shadow-2xl',
            isPositionRight && 'md:order-1'
          )}
          style={{ boxShadow: '0 25px 50px -12px var(--shadow)' }}
        >
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-bg/30 via-transparent to-transparent" />
          <Image
            src={imageUrl}
            alt={fullName}
            fill
            priority
            sizes="(max-width: 768px) 90vw, 360px"
            className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
          />
        </motion.div>

        {/* Info block — overlaps image only on md+ (negative margin); on
            mobile it sits below the portrait at full width. */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative z-20 flex flex-col gap-8 md:gap-14',
            'w-full md:w-[calc(100%-350px)]',
            isPositionRight
              ? 'md:left-8 md:items-end'
              : 'md:-left-8'
          )}
        >
          {/* Display name — smaller on mobile so it doesn't overflow */}
          <div>
            <p className="text-4xl sm:text-5xl md:text-6xl leading-[1.1] font-extralight tracking-tight text-fg">
              {firstName}
              <br />
              <span className="font-normal">{lastName}</span>
            </p>
          </div>

          {/* Details row — CTA + bio. On mobile the CTA is smaller and the
              row wraps so the bio gets full width below. */}
          <div className={cn('flex flex-col sm:flex-row gap-6 sm:gap-8', isPositionRight && 'sm:justify-end')}>
            <motion.a
              href={ctaHref}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'group flex h-16 w-16 md:h-20 md:w-20 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border transition-colors duration-300 hover:border-border-strong hover:bg-bg-muted',
                isPositionRight && 'sm:order-1'
              )}
              aria-label="Get in touch"
            >
              <ArrowRight
                size={22}
                className={cn(
                  'text-fg-subtle transition-all duration-300 group-hover:-rotate-45 group-hover:text-fg',
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
                  'text-[15px] md:text-base font-normal',
                  isPositionRight && 'text-right'
                )}
                style={{
                  // Inline CSS var so the color is bullet-proof against any
                  // Tailwind purge edge-case — in either theme this resolves
                  // to the correct foreground (#fafafa dark, #09090b light).
                  color: 'var(--fg)',
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
