'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { gentleSpring } from '@/lib/motion'
import { ThemeToggle } from '@/components/ui/theme-toggle'

// 'contact' removed — ContactSection was deleted in favor of the
// CinematicFooter (which has its own scroll-to-contact cue).
const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education']

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
        <div className="relative rounded-full px-3 py-2 sm:px-5 sm:py-2.5 bg-bg-elevated/70 backdrop-blur-xl border border-border">
          <div className="flex items-center justify-between gap-3">
            {/* Logo */}
            <button
              onClick={() => scrollTo('home')}
              className="text-xl font-bold relative text-fg"
            >
              <span className="text-fg">AS</span>
              <span className="text-accent">.</span>
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
                    ${activeSection === section ? 'text-fg' : 'text-fg-subtle hover:text-fg'}`}
                >
                  {activeSection === section && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full bg-bg-muted border border-border-strong"
                      transition={prefersReducedMotion ? { duration: 0 } : gentleSpring}
                    />
                  )}
                  {hoveredSection === section && activeSection !== section && !prefersReducedMotion && (
                    <motion.div
                      layoutId="nav-hover"
                      className="absolute inset-0 rounded-full bg-bg-muted"
                      transition={{ type: 'spring', stiffness: 200, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {/* Theme toggle — visible at all breakpoints */}
              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-full text-fg-muted hover:text-fg hover:bg-bg-muted transition-colors"
                aria-label="Open menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          aria-hidden={!isOpen}
          className={`md:hidden mt-2 rounded-2xl overflow-hidden transition-[max-height,opacity] duration-300 ease-out bg-bg-elevated/90 backdrop-blur-xl border border-border ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="p-3 space-y-1">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200
                  ${activeSection === section
                    ? 'text-fg bg-bg-muted border border-border-strong'
                    : 'text-fg-subtle hover:text-fg hover:bg-bg-muted'
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
