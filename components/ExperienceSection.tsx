'use client'

import { Briefcase, Calendar } from 'lucide-react'
import { experience } from '@/data/experience'
import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/motion'

export default function ExperienceSection() {
  const prefersReducedMotion = useReducedMotion()
  return (
    <section id="experience" className="relative py-28">
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 reveal-blur">
            <h2 className="text-4xl md:text-5xl font-bold text-fg">Experience</h2>
            <div className="h-1 w-16 bg-accent mx-auto mt-4 rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical timeline line — uses border token so it adapts */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border-strong" />

            <motion.div
              className="space-y-14"
              variants={prefersReducedMotion ? undefined : staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  className="relative pl-16 md:pl-20 reveal"
                  style={{ transitionDelay: `${index * 150}ms` }}
                  variants={prefersReducedMotion ? undefined : staggerItem}
                >
                  {/* Timeline node with glow halo */}
                  <div className="absolute left-[14px] md:left-[22px] top-2">
                    <div className="w-5 h-5 rounded-full bg-accent shadow-[0_0_20px_var(--accent)]" />
                    <div
                      className="absolute inset-0 w-5 h-5 rounded-full bg-accent/30 animate-ping"
                      style={{ animationDuration: '3s' }}
                    />
                  </div>

                  {/* Card */}
                  <div className="rounded-2xl p-6 md:p-8 bg-bg-elevated border border-border hover:bg-bg-muted transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase className="w-5 h-5 text-fg" />
                          <h3 className="text-xl font-bold text-fg">{exp.role}</h3>
                        </div>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-sm shrink-0 bg-bg-muted text-fg-muted border border-border">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-4 text-sm leading-relaxed text-fg-muted">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-5">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-3 text-sm leading-relaxed text-fg">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-[0.7rem] uppercase tracking-wider bg-bg-muted text-fg-muted border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
