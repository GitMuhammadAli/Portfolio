import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { styled } from '@mui/system'
import { Button, Card, Container, Typography, Chip } from '@mui/material'


const StyledContainer = styled(Container)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}))

export default function HeroSection({ theme }: any) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <StyledContainer id="home" maxWidth="lg">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
        }}
      >
        <Typography variant="h1" component="h1" gutterBottom className="text-7xl md:text-8xl lg:text-9xl  text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r   from-cyan-600 to-blue-500">
            Ali Shahid
          </span>
        </Typography>
        <Typography variant="h4" gutterBottom>
          Full-Stack Developer & AI Enthusiast
        </Typography>
        <Typography variant="body1" paragraph>
          Crafting innovative solutions at the intersection of web development and artificial intelligence.
        </Typography>

        <motion.div
          className="flex space-x-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              color="primary"
              href="#projects"
            >
              View Projects
            </Button>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outlined"
              color="primary"
              href="#contact"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

      </motion.div>
      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-10"
      >
        <ChevronDown className={`w-8 h-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
      </motion.div>
    </StyledContainer>
  )
}