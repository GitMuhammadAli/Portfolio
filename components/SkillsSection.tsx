'use client'

import Image from 'next/image'
import { Button, Card, Container, Typography, Chip } from '@mui/material'
import { motion, useScroll, useInView, useAnimation, useSpring } from 'framer-motion'


const technologies = [
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  {name:'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
 {name:'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
 { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
 { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
 {name:'EJS', icon: '/icons/ejs.svg' },
 {name:'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  {name:'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  ]

export default function SkillsSection({ theme }:any) {
    return (
      <Container id="skills" maxWidth="lg" className="py-20">
        <Typography variant="h2" align="center" gutterBottom className="mb-12 text-3xl font-light">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-500">
            Technical Proficiencies
          </span>
        </Typography>
  
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
            >
              <motion.div
                className={`flex flex-col items-center p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className="mb-2"
                />
                <Typography variant="body2" className="text-center text-sm">
                  {tech.name}
                </Typography>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    )
  }
  