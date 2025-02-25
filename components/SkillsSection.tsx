// 'use client'

// import Image from 'next/image'
// import { Button, Card, Container, Typography, Chip } from '@mui/material'
// import { motion, useScroll, useInView, useAnimation, useSpring } from 'framer-motion'


// const technologies = [
//   { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
//   {name:'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
//  {name:'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
//  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
//  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
//  {name:'EJS', icon: '/icons/ejs.svg' },
//  {name:'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
//   { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
//   { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
//   {name:'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
//   ]

// export default function SkillsSection({ theme }:any) {
//     return (
//       <Container id="skills" maxWidth="lg" className="py-20">
//         <Typography variant="h2" align="center" gutterBottom className="mb-24 text-3xl font-light">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-500">
//             Technical Proficiencies
//           </span>
//         </Typography>
  
//         <motion.div
//           className="flex flex-wrap justify-center gap-8"
//           initial="hidden"
//           animate="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: {
//                 staggerChildren: 0.05
//               }
//             }
//           }}
//         >
//           {technologies.map((tech) => (
//             <motion.div
//               key={tech.name}
//               variants={{
//                 hidden: { y: 20, opacity: 0 },
//                 visible: { y: 0, opacity: 1 }
//               }}
//             >
//               <motion.div
//                 className={`flex flex-col items-center p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}
//                 whileHover={{ y: -5, transition: { duration: 0.2 } }}
//               >
//                 <Image
//                   src={tech.icon}
//                   alt={tech.name}
//                   width={40}
//                   height={40}
//                   className="mb-2"
//                 />
//                 <Typography variant="body2" className="text-center text-sm">
//                   {tech.name}
//                 </Typography>
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </Container>
//     )
//   }
  





"use client"

import { motion } from "framer-motion"
import Image from "next/image"

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
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    category: "DevOps",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    category: "Database",
  },
]

export default function SkillsSection({ theme }: { theme: string }) {
  return (
    <section id="skills" className="relative min-h-screen">
      {/* Background with gradients and glow effects */}
      <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-[#1a1f2e]' : 'bg-gray-50'}`}>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Technical Skills
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          {/* Skills Grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl 
                  transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                />

                <div
                  className={`relative h-full p-6 rounded-2xl ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-b from-gray-800/50 to-gray-900/50 border-gray-700/50' 
                      : 'bg-gradient-to-b from-white/50 to-gray-100/50 border-gray-200/50'
                  } border backdrop-blur-sm hover:border-gray-600/50 transition-all duration-300`}
                >
                  <div className="flex flex-col items-center space-y-4">
                    {/* Icon Container */}
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full 
                        blur-md transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                      />
                      <Image
                        src={tech.icon || "/placeholder.svg"}
                        alt={tech.name}
                        width={48}
                        height={48}
                        className="relative z-10 transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Technology Name */}
                    <h3 className={`text-xl font-medium ${
                      theme === 'dark' 
                        ? 'text-gray-200 group-hover:text-white' 
                        : 'text-gray-800 group-hover:text-gray-900'
                    } transition-colors duration-300`}>
                      {tech.name}
                    </h3>

                    {/* Category Badge */}
                    <span
                      className={`px-3 py-1 text-sm rounded-full ${
                        theme === 'dark'
                          ? 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 border-cyan-500/20'
                          : 'bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 border-cyan-500/20'
                      } border`}
                    >
                      {tech.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Also experienced with:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                TypeScript, Git, AWS, REST APIs, GraphQL
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
