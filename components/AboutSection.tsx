"use client"

import { motion } from "framer-motion"
import { GraduationCap, Code2, Briefcase } from "lucide-react"
import Image from "next/image"

export default function AboutSection({ theme }: { theme: string }) {
  return (
    <section id="about" className="relative min-h-screen py-20">
      {/* Top gradient fade from previous section */}
      <div className={`absolute top-0 left-0 right-0 h-32 z-20 pointer-events-none ${
        theme === 'dark' 
          ? 'bg-gradient-to-b from-[#1a1f2e] to-transparent' 
          : 'bg-gradient-to-b from-gray-50 to-transparent'
      }`} />
      
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-[#1a1f2e]' : 'bg-gray-100'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.08] via-transparent to-blue-500/[0.08] blur-3xl" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      {/* Bottom gradient fade to next section */}
      <div className={`absolute bottom-0 left-0 right-0 h-32 z-20 pointer-events-none ${
        theme === 'dark' 
          ? 'bg-gradient-to-t from-[#1a1f2e] to-transparent' 
          : 'bg-gradient-to-t from-gray-100 to-transparent'
      }`} />

      <div className="relative z-10 container mx-auto px-4 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center mb-10">
            {/* Profile Picture - replace /profile.jpg with your own image */}
            <Image
              src="/images/me.png"
              alt="Your profile picture"
              width={144}
              height={144}
              className="rounded-full border-4 border-cyan-400 bg-white object-cover mb-6"
              priority
            />
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="text-center mb-16">
            <p className={`text-xl leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm a web developer working on both <span className="text-cyan-400 font-medium">frontend and backend</span>. 
              I work with <span className="text-blue-400 font-medium">Node.js, Express, EJS, MongoDB, React.js, Next.js, and Nest.js</span>. 
              I'm also learning <span className="text-cyan-400 font-medium">Python</span> and always exploring new technologies to build better web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Code2, title: "Full-Stack Development" },
              { icon: Briefcase, title: "Backend Specialist" },
              { icon: GraduationCap, title: "Continuous Learner" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div
                  className={`relative p-6 rounded-2xl ${
                    theme === 'dark'
                      ? 'bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-700/50'
                      : 'bg-gradient-to-b from-gray-100 to-gray-200 border border-gray-200'
                  } backdrop-blur-sm
                  hover:bg-gradient-to-b ${
                    theme === 'dark'
                      ? 'hover:from-gray-800/60 hover:to-gray-900/60'
                      : 'hover:from-gray-200 hover:to-gray-300'
                  } transition-all duration-300
                  before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-500/20 before:to-blue-500/20 before:opacity-0 before:transition-opacity
                  hover:before:opacity-100 before:rounded-2xl overflow-hidden`}
                >
                  <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                        <item.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                    </div>
                    <h3 className={`text-xl text-center font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className={`text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
          >
            <p className="text-lg">
              I use <span className="text-blue-400">Git</span> for version control and follow <span className="text-cyan-400">Agile</span> practices. 
              I'm open to opportunities where I can work on interesting projects and learn from experienced teams.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
