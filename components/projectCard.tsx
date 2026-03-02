'use client'

import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { useRef, useCallback } from 'react'

type ProjectProps = {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  github: string
  demo?: string
  icon: string
  gradientColor: string
  index: number
  featured?: boolean
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  github,
  demo,
  icon,
  gradientColor,
  index,
  featured = false,
}: ProjectProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateX = ((y - rect.height / 2) / (rect.height / 2)) * -4
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 4
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    if (glareRef.current) {
      glareRef.current.style.setProperty('--glare-x', `${(x / rect.width) * 100}%`)
      glareRef.current.style.setProperty('--glare-y', `${(y / rect.height) * 100}%`)
      glareRef.current.style.opacity = '1'
    }
  }, [])

  const handleLeave = useCallback(() => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)'
    if (glareRef.current) glareRef.current.style.opacity = '0'
  }, [])

  if (featured) {
    return (
      <div className="reveal-flip" style={{ transitionDelay: `${index * 120}ms` }}>
        <div
          ref={cardRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="relative rounded-2xl overflow-hidden glass group transition-transform duration-200 ease-out"
          style={{ willChange: 'transform' }}
        >
          <div className="h-[2px]" style={{ background: gradientColor }} />
          <div ref={glareRef} className="tilt-glare" />

          {/* Screenshot — full-width hero image */}
          <div className="relative w-full h-52 sm:h-64 md:h-72 overflow-hidden bg-white/[0.01]">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 960px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />

            {/* Floating badges on the image */}
            {demo && (
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="px-2.5 py-1 text-[0.65rem] font-medium rounded-full
                  bg-emerald-500/20 text-emerald-300 border border-emerald-500/20 backdrop-blur-sm">
                  Live
                </span>
              </div>
            )}
          </div>

          {/* Content below the image */}
          <div className="relative z-10 p-6 md:p-8 -mt-8">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-2xl">{icon}</span>
              <div>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
              </div>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed mb-5 line-clamp-3">
              {description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {tags.slice(0, 6).map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-[0.6rem] uppercase tracking-wider
                    bg-indigo-500/10 text-indigo-300/80 border border-indigo-500/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn inline-flex items-center gap-2 px-5 py-2 text-sm rounded-full
                  border border-zinc-700/80 text-zinc-300 hover:text-white
                  hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-btn inline-flex items-center gap-2 px-5 py-2 text-sm rounded-full
                    bg-indigo-500 text-white hover:bg-indigo-400 transition-colors duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // --- Compact card for the "other projects" grid ---
  return (
    <div className="reveal-flip" style={{ transitionDelay: `${index * 80}ms` }}>
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="relative rounded-2xl overflow-hidden glass group h-full
          transition-transform duration-200 ease-out flex flex-col"
        style={{ willChange: 'transform' }}
      >
        <div className="h-[2px]" style={{ background: gradientColor }} />
        <div ref={glareRef} className="tilt-glare" />

        {/* Compact image */}
        <div className="relative w-full h-40 overflow-hidden bg-white/[0.01]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 480px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-5 flex flex-col flex-1 -mt-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">{icon}</span>
            <h3 className="text-lg font-bold text-white">{title}</h3>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-2 flex-1">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-[0.6rem] uppercase tracking-wider
                  bg-indigo-500/10 text-indigo-300/80 border border-indigo-500/10"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-2 mt-auto">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn inline-flex items-center gap-1.5 px-4 py-1.5 text-xs rounded-full
                border border-zinc-700/80 text-zinc-300 hover:text-white
                hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-200"
            >
              <Github className="w-3.5 h-3.5" />
              Code
            </a>
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn inline-flex items-center gap-1.5 px-4 py-1.5 text-xs rounded-full
                  bg-indigo-500 text-white hover:bg-indigo-400 transition-colors duration-200"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
