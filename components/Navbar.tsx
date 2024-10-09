'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Navbar({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const [activeSection, setActiveSection] = useState('home')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const sections = ['home', 'about', 'skills', 'projects', 'contact']

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-500 opacity-55 blur-lg"></div>
        <div className="relative bg-black/20 backdrop-filter backdrop-blur-md border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600"
              >
                Ali
              </motion.div>
              <div className="hidden md:flex space-x-1">
                {sections.map((section) => (
                  <motion.div
                    key={section}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => {

                        const sectionElement = document.getElementById(section);
                        if (sectionElement) {
                          const offset = 80;
                          const yOffset = -offset;
                          const yPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

                          setActiveSection(section);
                          window.scrollTo({ top: yPosition, behavior: 'smooth' });
                        }
                      }}


                      variant="ghost"
                      className={`
                        relative overflow-hidden text-sm font-medium transition-all duration-300 
                        ${activeSection === section ? 'text-white' : 'text-gray-300 hover:text-white'} 
                        rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black
                      `}
                    >
                      {activeSection === section && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-50"
                          initial={false}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                    </Button>
                  </motion.div>
                ))}
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={toggleTheme}
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/5 border-white/10 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </Button>
              </motion.div>
              <div className="md:hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => setIsOpen(!isOpen)}
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white/5 border-white/10 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/80 backdrop-filter backdrop-blur-md overflow-hidden"
          >
            <div className="px-2 py-3 space-y-2">
              {sections.map((section) => (
                <motion.div
                  key={section}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: sections.indexOf(section) * 0.1 }}
                >
                  <Button
                    onClick={() => {
                      setActiveSection(section)
                      setIsOpen(false)
                      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    variant="ghost"
                    className={`
                      w-full text-left text-sm font-medium transition-all duration-300 
                      ${activeSection === section ? 'text-white bg-gradient-to-r from-cyan-600/50 to-blue-600/50' : 'text-gray-300 hover:text-white hover:bg-white/5'} 
                      rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black
                    `}
                  >
                    <span className="flex items-center">
                      <span className="text-xs uppercase tracking-wider">{section}</span>
                    </span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
