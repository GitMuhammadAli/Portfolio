'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react'
import type { Project } from '@/data/projects'

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-radials text-zinc-200">
      {/* Back navigation */}
      <div
        className="sticky top-0 z-40 border-b border-white/[0.04]"
        style={{
          background: 'rgba(10, 10, 15, 0.8)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        <div className="container mx-auto flex items-center px-4 py-3">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 30% 40%, rgba(99, 102, 241, 0.08) 0%, transparent 60%)',
          }}
        />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="reveal-blur">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{project.icon}</span>
              {project.featured && (
                <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  ★ Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
              {project.title}
            </h1>
            <p className="mt-2 text-lg text-indigo-300/70">{project.subtitle}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs bg-indigo-500/10 text-indigo-300 border border-indigo-500/15"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-btn inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full
                    bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-400 transition-colors"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full
                  border border-zinc-700 text-zinc-300 hover:border-indigo-500/40 hover:text-white transition-all"
              >
                <Github size={14} />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshot */}
      <div className="container mx-auto px-4 -mt-4 mb-12">
        <div className="glass rounded-xl overflow-hidden">
          <div className="flex items-center gap-2 border-b border-white/[0.04] bg-white/[0.02] px-4 py-2.5">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
            </div>
            <div className="ml-3 flex-1 rounded-md bg-white/[0.03] px-3 py-1">
              <span className="font-mono text-[11px] text-zinc-600">
                {project.demo || project.github}
              </span>
            </div>
          </div>
          <div className="relative h-56 sm:h-64 md:h-80 flex items-center justify-center">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover object-top"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-base/40">
              <div className="text-center">
                <span className="text-4xl">{project.icon}</span>
                <p className="mt-2 font-bold text-white/50">{project.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div className="reveal">
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="leading-relaxed text-zinc-400">{project.description}</p>
            </div>

            <div className="reveal" style={{ transitionDelay: '100ms' }}>
              <h2 className="text-2xl font-bold text-white mb-4">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-zinc-400">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-indigo-400" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.architecture && (
              <div className="reveal" style={{ transitionDelay: '200ms' }}>
                <div className="flex items-center gap-2 mb-4">
                  <Layers size={20} className="text-violet-400" />
                  <h2 className="text-2xl font-bold text-white">Architecture</h2>
                </div>
                <p className="leading-relaxed text-zinc-400">{project.architecture}</p>
              </div>
            )}
          </div>

          <div className="reveal" style={{ transitionDelay: '150ms' }}>
            <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
            <div className="space-y-3">
              {project.techDetails.map((tech) => (
                <div
                  key={tech.name}
                  className="glass p-4 rounded-xl hover:bg-white/[0.05] transition-colors"
                >
                  <p className="text-sm font-semibold text-white">{tech.name}</p>
                  <p className="mt-0.5 text-xs text-zinc-500">{tech.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
