'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

export interface SkillItem {
  name: string
  level: number
}

export interface SkillsProps {
  title?: string
  items: SkillItem[]
  className?: string
}

/**
 * Editorial hover-reveal skill list. Adapted from a shadcn/Tailwind v4 spec
 * (bg-foreground / text-muted-foreground / bg-accent) into the project's
 * Tailwind v3 zinc palette: accents become sky-400, borders are white/10,
 * muted text is zinc-400 / zinc-500.
 */
export function Skills({ title = 'Expertise', items, className }: SkillsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn('flex flex-col w-full max-w-md', className)}>
      {/* Section label */}
      <div className="flex items-center gap-4 mb-8">
        <div className="h-px w-12 bg-white/15" />
        <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-zinc-400">
          {title}
        </span>
      </div>

      <div className="flex flex-col">
        {items.map((skill, index) => (
          <div
            key={skill.name}
            className="group relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={cn(
                'relative flex items-center justify-between py-4 px-4 -mx-4 cursor-default',
                'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                'rounded-lg',
                hoveredIndex === index ? 'bg-white/[0.04]' : 'bg-transparent',
              )}
            >
              {/* Left: accent bar + skill name */}
              <div className="relative flex items-center gap-4">
                <div
                  className={cn(
                    'h-5 w-0.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                    hoveredIndex === index
                      ? 'bg-sky-400 scale-y-100 opacity-100'
                      : 'bg-white/20 scale-y-50 opacity-0',
                  )}
                />
                <span
                  className={cn(
                    'text-[15px] font-medium tracking-tight transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                    hoveredIndex === index
                      ? 'text-white translate-x-0'
                      : 'text-zinc-400 -translate-x-5',
                  )}
                >
                  {skill.name}
                </span>
              </div>

              {/* Right: progress bar + numeric level */}
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-1 rounded-full overflow-hidden bg-white/[0.05]">
                  <div
                    className={cn(
                      'absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
                      'bg-gradient-to-r from-sky-400/70 to-sky-300',
                    )}
                    style={{
                      width: hoveredIndex === index ? `${skill.level}%` : '0%',
                      transitionDelay: hoveredIndex === index ? '100ms' : '0ms',
                    }}
                  />
                  <div
                    className={cn(
                      'absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent',
                      'transition-transform duration-700 ease-out',
                      hoveredIndex === index ? 'translate-x-full' : '-translate-x-full',
                    )}
                    style={{
                      transitionDelay: hoveredIndex === index ? '300ms' : '0ms',
                    }}
                  />
                </div>

                <div className="relative w-10 overflow-hidden">
                  <span
                    className={cn(
                      'block text-sm font-mono tabular-nums text-right',
                      'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
                      hoveredIndex === index
                        ? 'text-white opacity-100 translate-y-0 blur-0'
                        : 'text-zinc-500 opacity-0 translate-y-3 blur-sm',
                    )}
                  >
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>

            {index < items.length - 1 && (
              <div
                className={cn(
                  'mx-4 h-px transition-all duration-500',
                  hoveredIndex === index || hoveredIndex === index + 1
                    ? 'bg-transparent'
                    : 'bg-white/[0.06]',
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
