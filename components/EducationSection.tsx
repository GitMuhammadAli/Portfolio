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
            <h2 className="text-4xl md:text-5xl font-bold text-fg">Education</h2>
            <div className="h-1 w-16 bg-accent mx-auto mt-4 rounded-full" />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={prefersReducedMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {/* Degree card — Lucide icon in a soft zinc tile, replaces the
                colorful indigo/amber skeumorphic icon which clashed with the
                rest of the page. */}
            <motion.div className="reveal-flip" variants={prefersReducedMotion ? undefined : staggerItem}>
              <div className="rounded-2xl p-8 h-full bg-bg-elevated border border-border hover:bg-bg-muted transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bg-muted border border-border">
                    <GraduationCap className="h-6 w-6 text-fg" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-fg mb-1">
                      {education.institution}
                    </h3>
                    <p className="text-sm text-fg-muted font-medium">
                      {education.degree}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-fg-subtle ml-[64px]">{education.period}</p>
              </div>
            </motion.div>

            {/* Certifications card */}
            <motion.div className="reveal-flip" style={{ transitionDelay: '100ms' }} variants={prefersReducedMotion ? undefined : staggerItem}>
              <div className="rounded-2xl p-8 h-full bg-bg-elevated border border-border hover:bg-bg-muted transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bg-muted border border-border">
                    <Award className="h-6 w-6 text-fg" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-fg">Certifications</h3>
                </div>
                <div className="flex flex-wrap gap-3 ml-[64px]">
                  {education.certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-bg-muted border border-border hover:border-border-strong transition-colors duration-200"
                    >
                      <span className="text-sm text-fg">{cert.name}</span>
                      <span className="text-[0.65rem] px-2 py-0.5 rounded-full bg-bg-elevated text-fg-muted border border-border font-medium">
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
