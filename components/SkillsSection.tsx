"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const technologies = [
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Database",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    category: "Backend",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "Backend",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Language",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "Database",
  },
]

export default function SkillsSection({ theme }: { theme: string }) {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <section id="skills" className="relative min-h-screen py-20">
      <div className={`absolute inset-0 ${theme === "dark" ? "bg-[#1a1f2e]" : "bg-gray-50"}`}>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-5xl md:text-6xl font-bold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Tech Wizardry
            </motion.h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                variants={{
                  hidden: { y: 10, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="group relative"
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl 
                  transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />

                <div
                  className={`relative h-full p-6 rounded-2xl ${
                    theme === "dark"
                      ? "bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-gray-700/50"
                      : "bg-gradient-to-b from-white/50 to-gray-100/50 border-gray-200/50"
                  } border backdrop-blur-sm hover:border-gray-600/50 transition-all duration-200`}
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full 
                        blur-md transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      />
                      <motion.div
                        animate={hoveredTech === tech.name ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={tech.icon || "/placeholder.svg"}
                          alt={tech.name}
                          width={48}
                          height={48}
                          className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                        />
                      </motion.div>
                    </div>

                    <h3
                      className={`text-xl font-medium ${
                        theme === "dark"
                          ? "text-gray-200 group-hover:text-white"
                          : "text-gray-800 group-hover:text-gray-900"
                      } transition-colors duration-200`}
                    >
                      {tech.name}
                    </h3>

                    <motion.span
                      className={`px-3 py-1 text-sm rounded-full ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 border-cyan-500/20"
                          : "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 border-cyan-500/20"
                      } border`}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {tech.category}
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="mt-16 text-center"
          >
            <p className={`text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              Also wielding:{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
              >
                TypeScript, Git, TypeOrm
              </motion.span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
