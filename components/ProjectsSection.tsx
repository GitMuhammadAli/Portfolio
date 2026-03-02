'use client'

import ProjectCard from './projectCard'
import { projects } from '@/data/projects'

const gradientColors = [
  'linear-gradient(90deg, #6366f1, #8b5cf6)',
  'linear-gradient(90deg, #8b5cf6, #06b6d4)',
  'linear-gradient(90deg, #06b6d4, #6366f1)',
  'linear-gradient(90deg, #f59e0b, #6366f1)',
  'linear-gradient(90deg, #6366f1, #f59e0b)',
  'linear-gradient(90deg, #8b5cf6, #f59e0b)',
  'linear-gradient(90deg, #06b6d4, #8b5cf6)',
  'linear-gradient(90deg, #f59e0b, #06b6d4)',
]

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured)
  const other = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative py-28">
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 reveal-blur">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Projects</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Featured — two cards side by side on desktop */}
          {featured.length > 0 && (
            <div className="mb-16">
              <p className="reveal text-center text-sm uppercase tracking-wider text-amber-400/70 mb-8">
                ★ Featured
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featured.map((p, i) => (
                  <ProjectCard
                    key={p.slug}
                    title={p.title}
                    description={p.description}
                    tags={p.tags}
                    imageUrl={p.imageUrl}
                    github={p.github}
                    demo={p.demo}
                    icon={p.icon}
                    gradientColor={gradientColors[i % gradientColors.length]}
                    index={i}
                    featured
                  />
                ))}
              </div>
            </div>
          )}

          {/* Other projects — 3 column grid */}
          {other.length > 0 && (
            <div>
              <p className="reveal text-center text-sm uppercase tracking-wider text-zinc-500 mb-8">
                More Projects
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {other.map((p, i) => (
                  <ProjectCard
                    key={p.slug}
                    title={p.title}
                    description={p.description}
                    tags={p.tags}
                    imageUrl={p.imageUrl}
                    github={p.github}
                    demo={p.demo}
                    icon={p.icon}
                    gradientColor={gradientColors[(i + featured.length) % gradientColors.length]}
                    index={i + featured.length}
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
