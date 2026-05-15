'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

/**
 * Word-by-word pull-up animation. Each word translates from y=20px to 0
 * with a stagger, on first viewport entry. Used for editorial-feel
 * headlines where you want a beat between words instead of one swoosh.
 */
interface WordsPullUpProps {
  text: string
  className?: string
  showAsterisk?: boolean
  style?: React.CSSProperties
  /** Stagger between words in seconds. Default 0.08. */
  stagger?: number
  /** First-word delay in seconds. Default 0. */
  delay?: number
}

export function WordsPullUp({
  text,
  className = '',
  showAsterisk = false,
  style,
  stagger = 0.08,
  delay = 0,
}: WordsPullUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const words = text.split(' ')

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1
        return (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block relative"
            style={{ marginRight: isLast ? 0 : '0.25em' }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            )}
          </motion.span>
        )
      })}
    </div>
  )
}

interface Segment {
  text: string
  className?: string
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[]
  className?: string
  style?: React.CSSProperties
  stagger?: number
  delay?: number
}

/**
 * Same pull-up animation, but each segment of words can carry its own
 * className. Useful when a single headline reads in two tones — e.g.
 * `[{text: "Ali", className: "text-white"}, {text: "Shahid", className: "text-zinc-400"}]`.
 */
export function WordsPullUpMultiStyle({
  segments,
  className = '',
  style,
  stagger = 0.08,
  delay = 0,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const words: { word: string; className?: string }[] = []
  segments.forEach((seg) => {
    seg.text.split(' ').forEach((w) => {
      if (w) words.push({ word: w, className: seg.className })
    })
  })

  return (
    <div ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: delay + i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`inline-block ${w.className ?? ''}`}
          style={{ marginRight: '0.25em' }}
        >
          {w.word}
        </motion.span>
      ))}
    </div>
  )
}
