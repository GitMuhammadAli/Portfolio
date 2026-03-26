'use client'

import { GraduationCap, Award } from 'lucide-react'
import { education } from '@/data/experience'
import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/motion'

export default function EducationSection() {
  const prefersReducedMotion = useReducedMotion()
  return (
    <section id="education" className="relative py-28">
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 reveal-blur">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Education</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mt-4 rounded-full" />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={prefersReducedMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Degree card */}
            <motion.div className="reveal-flip" variants={prefersReducedMotion ? undefined : staggerItem}>
              <div className="glass rounded-2xl p-8 h-full hover:bg-white/[0.05] transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 shrink-0">
                    <GraduationCap className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {education.institution}
                    </h3>
                    <p className="gradient-text font-medium text-sm">
                      {education.degree}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 ml-[52px]">{education.period}</p>
              </div>
            </motion.div>

            {/* Certifications card */}
            <motion.div className="reveal-flip" style={{ transitionDelay: '100ms' }} variants={prefersReducedMotion ? undefined : staggerItem}>
              <div className="glass rounded-2xl p-8 h-full hover:bg-white/[0.05] transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-amber-500/10 shrink-0">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Certifications</h3>
                </div>
                <div className="flex flex-wrap gap-3 ml-[52px]">
                  {education.certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl
                        bg-white/[0.03] border border-white/[0.06]
                        hover:bg-white/[0.06] transition-colors duration-200"
                    >
                      <span className="text-sm text-zinc-300">{cert.name}</span>
                      <span className="text-[0.65rem] px-2 py-0.5 rounded-full
                        bg-amber-500/10 text-amber-400 border border-amber-500/20 font-medium">
                        {cert.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
