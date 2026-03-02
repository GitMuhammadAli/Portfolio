'use client'

import { Briefcase, Calendar } from 'lucide-react'
import { experience } from '@/data/experience'

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-28">
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 reveal-blur">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Experience</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Gradient timeline line */}
            <div
              className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
              style={{
                background: 'linear-gradient(to bottom, #6366f1, #8b5cf6, #f59e0b)',
              }}
            />

            <div className="space-y-14">
              {experience.map((exp, index) => (
                <div
                  key={exp.company}
                  className={`relative pl-16 md:pl-20 reveal ${index % 2 === 0 ? '' : ''}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline node with glow halo */}
                  <div className="absolute left-[14px] md:left-[22px] top-2">
                    <div
                      className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500
                        shadow-[0_0_20px_rgba(99,102,241,0.5)]"
                    />
                    <div
                      className="absolute inset-0 w-5 h-5 rounded-full bg-indigo-500/20 animate-ping"
                      style={{ animationDuration: '3s' }}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className="glass rounded-2xl p-6 md:p-8 hover:bg-white/[0.05]
                      transition-all duration-300 group"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase className="w-5 h-5 text-indigo-400" />
                          <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        </div>
                        <p className="gradient-text font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-sm shrink-0
                        bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mb-4 text-sm leading-relaxed text-zinc-400">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-5">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed text-zinc-300"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-[0.7rem] uppercase tracking-wider
                            bg-indigo-500/10 text-indigo-300 border border-indigo-500/15"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
