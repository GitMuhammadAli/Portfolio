

import { Github, Linkedin, Mail } from 'lucide-react'
import { Button, Card, Container, Typography, Chip } from '@mui/material'
import { useState, useEffect, useRef, useMemo } from 'react'
import { motion, useScroll, useInView, useAnimation,  } from 'framer-motion'



export default function ContactSection({ theme }:any) {
    const controls = useAnimation()
    const ref = useRef(null)
    const inView = useInView(ref)
  
    useEffect(() => {
      if (inView) {
        controls.start('visible')
      }
    }, [controls, inView])
  
    return (
      <Container id="contact" maxWidth="md" className="py-20">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
          }}
        >
           <Typography
          variant="h2"
          align="center"
          gutterBottom
          className="mb-12 text-gray-900 dark:text-white"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
            Contact Me
          </span>
        </Typography>
          <Typography variant="body1" align="center" paragraph>
            Feel free to reach out for collaborations or just a friendly chat!
          </Typography>
          <div className="flex justify-center space-x-4">
            <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
              <Button variant="contained" color="primary" href="mailto:alishahids189@gmail.com">
                <Mail className="w-5 h-5 mr-2" /> Email
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
              <Button variant="contained" color="primary" href="https://www.linkedin.com/in/alishahid-fswebdev/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
              <Button variant="contained" color="primary" href="https://github.com/GitMuhammadAli" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" /> GitHub
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    );
  }