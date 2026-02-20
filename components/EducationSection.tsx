"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"
import { education } from "@/data/experience"

export default function EducationSection({ theme }: { theme: string }) {
  return (
    <section id="education" className="relative py-20">
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-[#1a1f2e]' : 'bg-gray-50'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] via-transparent to-blue-500/[0.05] blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Education
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Degree Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300
                ${theme === 'dark'
                  ? 'bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-cyan-500/30'
                  : 'bg-gradient-to-b from-white/60 to-gray-100/60 border-gray-200/50 hover:border-cyan-500/30'
                }
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-500/5 before:to-blue-500/5 before:opacity-0 before:transition-opacity
                hover:before:opacity-100 before:rounded-2xl overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {education.institution}
                    </h3>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-medium text-sm">
                      {education.degree}
                    </p>
                  </div>
                </div>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {education.period}
                </p>
              </div>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300
                ${theme === 'dark'
                  ? 'bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-cyan-500/30'
                  : 'bg-gradient-to-b from-white/60 to-gray-100/60 border-gray-200/50 hover:border-cyan-500/30'
                }
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-500/5 before:to-blue-500/5 before:opacity-0 before:transition-opacity
                hover:before:opacity-100 before:rounded-2xl overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Certifications
                  </h3>
                </div>
                <div className="space-y-3">
                  {education.certifications.map((cert) => (
                    <div
                      key={cert.name}
                      className={`flex items-center justify-between p-3 rounded-xl
                        ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100/50'}`}
                    >
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        {cert.name}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full
                        ${theme === 'dark'
                          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                          : 'bg-cyan-500/10 text-cyan-700 border border-cyan-500/20'
                        }`}>
                        {cert.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
