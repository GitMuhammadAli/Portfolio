'use client'

import ProjectCard from './projectCard'
import { projects } from '@/data/projects'

export default function ProjectsSection() {
  const allFeatured = projects.filter((p) => p.featured)
  const hero = allFeatured[0]
  const featured = allFeatured.slice(1)
  const other = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative py-28">
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16 reveal-blur">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Projects</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Hero project — full-width horizontal card */}
          {hero && (
            <div className="mb-10">
              <p className="reveal text-center text-xs uppercase tracking-[0.2em] text-zinc-600 mb-6 font-medium">
                Featured
              </p>
              <ProjectCard
                title={hero.title}
                subtitle={hero.subtitle}
                description={hero.description}
                tags={hero.tags}
                imageUrl={hero.imageUrl}
                github={hero.github}
                demo={hero.demo}
                icon={hero.icon}
                index={0}
                variant="hero"
              />
            </div>
          )}

          {/* Secondary featured projects — 2-column grid */}
          {featured.length > 0 && (
            <div className="mb-14">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {featured.map((p, i) => (
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
                    index={i + 1}
                    variant="featured"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Other projects — 3-column grid */}
          {other.length > 0 && (
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px flex-1 bg-zinc-800/60" />
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 font-medium shrink-0">
                  More Projects
                </p>
                <div className="h-px flex-1 bg-zinc-800/60" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
