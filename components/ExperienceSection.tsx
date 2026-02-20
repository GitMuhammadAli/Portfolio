"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import { experience } from "@/data/experience"

export default function ExperienceSection({ theme }: { theme: string }) {
  return (
    <section id="experience" className="relative min-h-screen py-20">
      {/* Top gradient fade */}
      <div className={`absolute top-0 left-0 right-0 h-32 z-20 pointer-events-none ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-[#1a1f2e] to-transparent'
          : 'bg-gradient-to-b from-gray-50 to-transparent'
      }`} />

      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-[#1a1f2e]' : 'bg-gray-100'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.08] via-transparent to-blue-500/[0.08] blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Bottom gradient fade */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none ${
        theme === 'dark'
          ? 'bg-gradient-to-t from-[#1a1f2e] to-transparent'
          : 'bg-gradient-to-t from-gray-100 to-transparent'
      }`} />

      <div className="relative z-10 container mx-auto px-4 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Experience
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-blue-500/40 to-transparent" />

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative pl-16 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-6 top-2">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.4)]" />
                  </div>

                  {/* Card */}
                  <div
                    className={`relative p-6 md:p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300
                      ${theme === 'dark'
                        ? 'bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-cyan-500/30 hover:from-gray-800/60 hover:to-gray-900/60'
                        : 'bg-gradient-to-b from-white/60 to-gray-100/60 border-gray-200/50 hover:border-cyan-500/30'
                      }
                      before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-500/5 before:to-blue-500/5 before:opacity-0 before:transition-opacity
                      hover:before:opacity-100 before:rounded-2xl overflow-hidden`}
                  >
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Briefcase className="w-5 h-5 text-cyan-400" />
                            <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                              {exp.role}
                            </h3>
                          </div>
                          <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-sm shrink-0
                          ${theme === 'dark'
                            ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                            : 'bg-cyan-500/10 text-cyan-700 border border-cyan-500/20'
                          }`}>
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </div>
                      </div>

                      {/* Description */}
                      <p className={`mb-4 text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-5">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 + i * 0.05 }}
                            className={`flex gap-3 text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 rounded-full text-[0.7rem] uppercase tracking-wider
                              ${theme === 'dark'
                                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                                : 'bg-cyan-500/10 text-cyan-700 border border-cyan-500/20'
                              }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
