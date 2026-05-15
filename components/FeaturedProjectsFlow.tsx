'use client'

import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import FlowArt, { FlowSection } from '@/components/ui/story-scroll'
import type { Project } from '@/data/projects'

interface FeaturedProjectsFlowProps {
  projects: Project[]
}

/**
 * Scrollytell narrative for featured projects. Each project becomes a
 * full-height pinned screen with its screenshot as a moody backdrop. Built
 * on FlowArt (GSAP ScrollTrigger), which pins each section as the next one
 * rotates in from below. Reduced-motion users get a normal vertical stack
 * — FlowArt skips the scroll choreography internally.
 */
export function FeaturedProjectsFlow({ projects }: FeaturedProjectsFlowProps) {
  if (projects.length === 0) return null

  return (
    <FlowArt aria-label="Featured projects">
      {projects.map((p, i) => (
        <FlowSection
          key={p.slug}
          aria-label={p.title}
          style={{ backgroundColor: '#09090b', color: '#fafafa' }}
        >
          {/* Backdrop: project screenshot. Vignette lightened so the image
              actually reads — was 55→95% black, now 25→60%. Foreground text
              uses drop-shadow for the contrast it lost. Top edge fades from
              the page bg into the screenshot so the first FlowSection
              doesn't cut hard against the section above. */}
          <div className="absolute inset-0 z-0">
            <Image
              src={p.imageUrl}
              alt=""
              fill
              sizes="100vw"
              priority={i === 0}
              className="object-cover"
            />
            {/* Top fade — only on the first card; the rest pin under it */}
            {i === 0 && (
              <div
                className="absolute inset-x-0 top-0 h-32 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to bottom, #09090b 0%, transparent 100%)',
                }}
              />
            )}
            {/* Side darken so the long descriptive paragraph stays legible */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(105deg, rgba(9,9,11,0.78) 0%, rgba(9,9,11,0.50) 50%, rgba(9,9,11,0.25) 100%)',
              }}
            />
            {/* Soft bottom darken so the next section's blend isn't abrupt */}
            <div
              className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
              style={{
                background:
                  'linear-gradient(to top, rgba(9,9,11,0.85) 0%, transparent 100%)',
              }}
            />
          </div>

          {/* Editorial layout: big number on left + content stacked,
              Jakarta weight hierarchy: 200 (number), 300 (paragraph),
              500 (subtitle), 800 (display headline). */}
          <div className="relative z-10 flex flex-col h-full justify-between gap-12 md:gap-16 py-8 md:py-10">
            {/* Top meta line */}
            <div className="flex items-center gap-5">
              <span
                className="font-extralight tracking-tighter text-white/70 leading-none"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="h-px flex-1 max-w-[6rem] bg-white/20" />
              <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.4em] text-zinc-400">
                Featured Work
              </p>
            </div>

            {/* Headline + subtitle */}
            <div className="space-y-6 md:space-y-8">
              <h3
                className="font-extrabold leading-[0.88] tracking-[-0.045em] text-white"
                style={{ fontSize: 'clamp(2.75rem, 10vw, 10rem)' }}
              >
                {p.title}
              </h3>
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-10 bg-white/60" />
                <p
                  className="font-light text-zinc-200 leading-tight tracking-tight"
                  style={{ fontSize: 'clamp(1.05rem, 2vw, 1.6rem)' }}
                >
                  {p.subtitle}
                </p>
              </div>
            </div>

            {/* Description + tags + actions */}
            <div className="max-w-[60ch] space-y-7">
              <p
                className="leading-[1.7] text-zinc-300/90 font-light"
                style={{ fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)' }}
              >
                {p.description}
              </p>

              {/* Tags — small caps tracking-wide, brighter fill */}
              <div className="flex flex-wrap gap-2">
                {p.tags.slice(0, 6).map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-50 px-3 py-1.5 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-2">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-white text-zinc-900 text-sm font-semibold hover:bg-zinc-100 transition-all hover:gap-4"
                  >
                    Visit live
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-900 group-hover:rotate-12 transition-transform">
                      <ExternalLink className="h-3.5 w-3.5 text-white" />
                    </span>
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white hover:border-white/40 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </FlowSection>
      ))}
    </FlowArt>
  )
}
