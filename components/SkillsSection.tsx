'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { staggerContainer, staggerItem, viewportConfig } from '@/lib/motion'

const categoryColors: Record<string, string> = {
  Frontend: 'category-frontend',
  Backend: 'category-backend',
  Database: 'category-database',
  DevOps: 'category-devops',
}

const categoryAccents: Record<string, string> = {
  Frontend: '#6366f1',
  Backend: '#8b5cf6',
  Database: '#06b6d4',
  DevOps: '#f59e0b',
}

interface Skill {
  name: string
  icon: string
  category: string
  proficiency: number
}

const skills: Skill[] = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend', proficiency: 90 },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'Frontend', proficiency: 88 },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Frontend', proficiency: 85 },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', category: 'Frontend', proficiency: 92 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend', proficiency: 88 },
  { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg', category: 'Backend', proficiency: 85 },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'Backend', proficiency: 87 },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'Database', proficiency: 85 },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'Database', proficiency: 80 },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'DevOps', proficiency: 78 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'DevOps', proficiency: 90 },
]

const categories = ['Frontend', 'Backend', 'Database', 'DevOps']

export default function SkillsSection() {
  const prefersReducedMotion = useReducedMotion()
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="relative py-28">
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 reveal-blur">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Skills & Tech</h2>
            <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-violet-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Categories */}
          <motion.div
            className="space-y-12"
            variants={prefersReducedMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {categories.map((cat, catIndex) => {
              const catSkills = skills.filter((s) => s.category === cat)
              return (
                <motion.div
                  key={cat}
                  className="reveal"
                  style={{ transitionDelay: `${catIndex * 100}ms` }}
                  variants={prefersReducedMotion ? undefined : staggerItem}
                >
                  <h3
                    className="text-lg font-semibold mb-5 pl-3"
                    style={{ color: categoryAccents[cat] }}
                  >
                    {cat}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {catSkills.map((skill, i) => (
                      <div
                        key={skill.name}
                        className={`${categoryColors[cat]} glass rounded-xl p-5
                          hover:translate-y-[-2px] hover:shadow-lg hover:scale-[1.02]
                          transition-all duration-200 group cursor-default`}
                        style={{
                          transitionDelay: `${(catIndex * 3 + i) * 50}ms`,
                          willChange: 'transform',
                        }}
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-10 h-10 flex items-center justify-center shrink-0
                            rounded-lg bg-white/[0.04] group-hover:bg-white/[0.08] transition-colors">
                            <Image
                              src={skill.icon}
                              alt={skill.name}
                              width={28}
                              height={28}
                              className="group-hover:scale-110 transition-transform duration-200"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-sm font-medium text-zinc-200">{skill.name}</span>
                              <span className="text-xs text-zinc-500">{skill.proficiency}%</span>
                            </div>
                            <div className="skill-progress">
                              <div
                                className="skill-progress-fill"
                                style={{
                                  width: visible ? `${skill.proficiency}%` : '0%',
                                  background: `linear-gradient(90deg, ${categoryAccents[cat]}, ${categoryAccents[cat]}88)`,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
