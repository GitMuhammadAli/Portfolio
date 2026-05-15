'use client'

import ProjectCard from './projectCard'
import { projects } from '@/data/projects'
import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/motion'
import { FeaturedProjectsFlow } from './FeaturedProjectsFlow'

export default function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion()
  const allFeatured = projects.filter((p) => p.featured)
  const other = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative">
      {/* Section heading — compact so it doesn't create a big dark gap
          before the pinned scrollytell starts. */}
      <div className="relative z-10 container mx-auto px-4 pt-16 pb-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center reveal-blur">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Projects</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-white to-zinc-400 mx-auto mt-3 rounded-full" />
            <p className="text-zinc-500 mt-3 text-xs uppercase tracking-[0.25em]">
              Scroll through the work
            </p>
          </div>
        </div>
      </div>

      {/* Featured projects — pinned scrollytell with live demos as backdrops */}
      {allFeatured.length > 0 && (
        <FeaturedProjectsFlow projects={allFeatured} />
      )}

      {/* Other projects — traditional grid below the flow */}
      {other.length > 0 && (
        <motion.div
          className="relative z-10 container mx-auto px-4 py-20"
          variants={prefersReducedMotion ? undefined : staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div variants={prefersReducedMotion ? undefined : staggerItem}>
              {/* Section heading — magazine-style with index count */}
              <div className="text-center mb-14">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-12 bg-zinc-700" />
                  <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-semibold">
                    The Archive
                  </p>
                  <div className="h-px w-12 bg-zinc-700" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Selected side work
                </h3>
                <p className="mt-3 text-sm text-zinc-500 font-light max-w-md mx-auto">
                  Smaller experiments, learning projects, and tools I built along the way.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {other.map((p, i) => (
                  <ProjectCard
                    key={p.slug}
                    title={p.title}
                    subtitle={p.subtitle}
                    description={p.description}
                    tags={p.tags}
                    imageUrl={p.imageUrl}
                    github={p.github}
                    demo={p.demo}
                    icon={p.icon}
                    index={i + allFeatured.length}
                    variant="compact"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  )
}
