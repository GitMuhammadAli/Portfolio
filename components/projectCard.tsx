'use client'

import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { hoverLift, buttonTap } from '@/lib/motion'
import { SkeuIcon, type SkeuIconName } from '@/components/ui/skeu-icon'

const projectSlugMap: Record<string, SkeuIconName> = {
  '📡': 'devradar',
  '💚': 'carecircle',
  '🚀': 'jobpilot',
  '🏠': 'rentwise',
  '📊': 'stockpilot',
  '🔐': 'authkit',
  '💪': 'fitness-planner',
  '🌌': 'apod-react',
  '⚡': 'nova-plus',
}

type ProjectProps = {
  title: string
  subtitle: string
  description: string
  tags: string[]
  imageUrl: string
  github: string
  demo?: string
  icon: string
  index: number
  variant?: 'hero' | 'featured' | 'compact'
}

function extractHost(url: string) {
  return url.replace(/^https?:\/\//, '').split('/')[0]
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  imageUrl,
  github,
  demo,
  icon,
  index,
  variant = 'compact',
}: ProjectProps) {
  const prefersReducedMotion = useReducedMotion()
  const motionHover = prefersReducedMotion ? {} : hoverLift
  const motionTap = prefersReducedMotion ? {} : buttonTap

  // ── Hero card: full-width horizontal layout ──
  if (variant === 'hero') {
    return (
      <motion.div
        className="reveal"
        style={{ transitionDelay: `${index * 100}ms` }}
        {...motionHover}
        {...motionTap}
      >
        <div
          className="group relative rounded-2xl overflow-hidden
            bg-[#111114] border border-zinc-800/50 hover:border-zinc-700/60
            transition-colors duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[420px]">
            {/* Image side with browser chrome */}
            <div className="relative flex flex-col">
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#0c0c0e] border-b border-zinc-800/30 shrink-0">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/70" />
                </div>
                <div className="ml-3 flex-1 h-5 rounded-md bg-zinc-800/40 flex items-center px-3">
                  <span className="font-mono text-[10px] text-zinc-600 truncate">
                    {extractHost(demo || github)}
                  </span>
                </div>
              </div>
              <div className="relative flex-1 min-h-[220px] sm:min-h-[280px] overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Content side */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center
              border-t lg:border-t-0 lg:border-l border-zinc-800/30">

              {demo && (
                <div className="mb-5">
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[0.65rem]
                      font-medium tracking-wide uppercase rounded-full
                      bg-emerald-500/10 text-emerald-400 border border-emerald-500/15"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-1">
                {projectSlugMap[icon] ? <SkeuIcon icon={projectSlugMap[icon]} size={36} /> : <span className="text-2xl">{icon}</span>}
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h3>
              </div>

              <p className="text-sm text-zinc-500 font-medium mb-4">{subtitle}</p>

              <p className="text-[0.8rem] text-zinc-400 leading-relaxed mb-6 line-clamp-4">
                {description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {tags.slice(0, 6).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md text-[0.65rem] font-medium
                      bg-zinc-800/80 text-zinc-400 border border-zinc-700/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-auto pt-2">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg
                    border border-zinc-700/60 text-zinc-300 hover:text-white hover:border-zinc-600
                    hover:bg-zinc-800/60 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                {demo && (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg
                      bg-white text-zinc-900 hover:bg-zinc-100 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  // ── Featured card: vertical with browser chrome ──
  if (variant === 'featured') {
    return (
      <motion.div
        className="reveal"
        style={{ transitionDelay: `${index * 120}ms` }}
        {...motionHover}
        {...motionTap}
      >
        <div
          className="group relative rounded-2xl overflow-hidden h-full flex flex-col
            bg-[#111114] border border-zinc-800/50 hover:border-zinc-700/60
            transition-colors duration-300"
        >
          {/* Browser chrome + image — fixed height for alignment */}
          <div className="shrink-0">
            <div className="flex items-center gap-1.5 px-4 py-2 bg-[#0c0c0e] border-b border-zinc-800/30">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-zinc-700/70" />
                <div className="w-2 h-2 rounded-full bg-zinc-700/70" />
                <div className="w-2 h-2 rounded-full bg-zinc-700/70" />
              </div>
              <div className="ml-2 flex-1 h-4 rounded bg-zinc-800/40 flex items-center px-2">
                <span className="font-mono text-[9px] text-zinc-600 truncate">
                  {extractHost(demo || github)}
                </span>
              </div>
            </div>
            <div className="relative w-full h-[220px] overflow-hidden">
              <Image
                src={imageUrl}
                alt={title}
                fill
                loading="lazy"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-transparent opacity-40" />
            </div>
          </div>

          {/* Content — flex-col with justify-between for consistent bottom alignment */}
          <div className="p-6 flex flex-col flex-1">
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                {projectSlugMap[icon] ? <SkeuIcon icon={projectSlugMap[icon]} size={28} /> : <span className="text-lg">{icon}</span>}
                <h3 className="text-lg font-semibold text-white tracking-tight">{title}</h3>
              </div>

              <p className="text-xs text-zinc-500 font-medium mb-3">{subtitle}</p>

              <p className="text-[0.8rem] text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                {description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {tags.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-[0.6rem] font-medium
                      bg-zinc-800/80 text-zinc-400 border border-zinc-700/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-2.5 mt-auto">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg
                  border border-zinc-700/60 text-zinc-300 hover:text-white hover:border-zinc-600
                  hover:bg-zinc-800/60 transition-all duration-200"
              >
                <Github className="w-3.5 h-3.5" />
                Code
              </a>
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg
                    bg-white text-zinc-900 hover:bg-zinc-100 transition-colors duration-200"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  // ── Compact card for other projects — editorial / airy ──
  return (
    <motion.div
      className="reveal h-full"
      style={{ transitionDelay: `${index * 80}ms` }}
      {...motionHover}
      {...motionTap}
    >
      <div className="group relative rounded-2xl overflow-hidden h-full flex flex-col bg-bg-elevated border border-border hover:border-border-strong transition-all duration-300 hover:bg-bg-muted">
        <div className="relative w-full aspect-[16/10] overflow-hidden shrink-0 bg-bg-muted">
          <Image
            src={imageUrl}
            alt={title}
            fill
            loading="lazy"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-bg-elevated/20 to-transparent" />
        </div>

        <div className="p-7 flex flex-col flex-1 gap-5">
          <div>
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="text-xl font-bold text-fg tracking-tight leading-tight">
                {title}
              </h3>
              {demo && (
                <span className="inline-flex items-center gap-1 shrink-0 px-2 py-0.5 text-[9px] font-semibold tracking-wider uppercase rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              )}
            </div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-fg-subtle">
              {subtitle}
            </p>
          </div>

          <p className="text-[0.85rem] text-fg-muted leading-relaxed font-light line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.12em] bg-bg-muted text-fg-muted border border-border"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-2.5 mt-auto pt-2">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full border border-border text-fg hover:border-border-strong hover:bg-bg-muted transition-all duration-200"
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </a>
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 text-xs font-semibold rounded-full bg-fg text-bg hover:opacity-90 transition-all duration-200 hover:gap-3"
              >
                Visit
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-bg">
                  <ExternalLink className="w-3 h-3 text-fg" />
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
