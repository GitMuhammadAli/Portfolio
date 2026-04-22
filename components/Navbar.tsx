'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { gentleSpring } from '@/lib/motion'

const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact']

export default function Navbar() {
  const prefersReducedMotion = useReducedMotion()
  const [activeSection, setActiveSection] = useState('home')
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  const handleNavKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const btns = navRef.current?.querySelectorAll<HTMLButtonElement>('button[data-section]')
    if (!btns?.length) return
    const idx = Array.from(btns).findIndex((b) => b === document.activeElement)
    const next = e.key === 'ArrowRight'
      ? (idx < btns.length - 1 ? idx + 1 : 0)
      : (idx > 0 ? idx - 1 : btns.length - 1)
    btns[next]?.focus()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      let current = ''
      let minDist = Infinity
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const dist = Math.abs(el.getBoundingClientRect().top)
          if (dist < minDist) {
            minDist = dist
            current = id
          }
        }
      }
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
      setActiveSection(id)
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-4xl">
        <div
          className="relative rounded-full px-3 py-2 sm:px-5 sm:py-2.5"
          style={{
            background: 'rgba(10, 10, 15, 0.7)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollTo('home')}
              className="text-xl font-bold relative"
              style={{
                textShadow: '0 0 20px rgba(99, 102, 241, 0.5), 0 0 40px rgba(99, 102, 241, 0.2)',
              }}
            >
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                AS
              </span>
              <span className="text-amber-400">.</span>
            </button>

            {/* Desktop nav */}
            <div
              ref={navRef}
              role="navigation"
              aria-label="Main"
              className="hidden md:flex items-center gap-0.5 relative"
              onMouseLeave={() => setHoveredSection(null)}
              onKeyDown={handleNavKeyDown}
            >
              {sections.map((section) => (
                <button
                  key={section}
                  data-section={section}
                  onClick={() => scrollTo(section)}
                  onMouseEnter={() => setHoveredSection(section)}
                  className={`relative z-10 px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-200
                    ${activeSection === section ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  {activeSection === section && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full bg-indigo-500/20 border border-indigo-500/30"
                      transition={prefersReducedMotion ? { duration: 0 } : gentleSpring}
                    />
                  )}
                  {hoveredSection === section && activeSection !== section && !prefersReducedMotion && (
                    <motion.div
                      layoutId="nav-hover"
                      className="absolute inset-0 rounded-full bg-white/[0.04]"
                      transition={{ type: 'spring', stiffness: 200, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown — CSS transitions (interruptible on rapid toggle,
            no layered entry stagger on items). */}
        <div
          aria-hidden={!isOpen}
          className={`md:hidden mt-2 rounded-2xl overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
          style={{
            background: 'rgba(10, 10, 15, 0.9)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="p-3 space-y-1">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200
                  ${activeSection === section
                    ? 'text-white bg-indigo-500/15 border border-indigo-500/20'
                    : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
                  }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
