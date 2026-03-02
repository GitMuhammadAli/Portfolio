'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact']

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const pillRef = useRef<HTMLDivElement>(null)

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

  useEffect(() => {
    if (!navRef.current || !pillRef.current) return
    const activeBtn = navRef.current.querySelector(`[data-section="${activeSection}"]`) as HTMLElement | null
    if (activeBtn) {
      pillRef.current.style.left = `${activeBtn.offsetLeft}px`
      pillRef.current.style.width = `${activeBtn.offsetWidth}px`
    }
  }, [activeSection])

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
            <div ref={navRef} className="hidden md:flex items-center gap-0.5 relative">
              <div
                ref={pillRef}
                className="absolute top-0 h-full rounded-full bg-indigo-500/20 border border-indigo-500/30 transition-all duration-300 ease-out"
                style={{ willChange: 'left, width' }}
              />
              {sections.map((section) => (
                <button
                  key={section}
                  data-section={section}
                  onClick={() => scrollTo(section)}
                  className={`relative z-10 px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-200
                    ${activeSection === section ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
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

        {/* Mobile dropdown */}
        <div
          className={`md:hidden mt-2 rounded-2xl overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{
            background: 'rgba(10, 10, 15, 0.9)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: isOpen ? '1px solid rgba(255,255,255,0.06)' : 'none',
          }}
        >
          <div className="p-3 space-y-1">
            {sections.map((section, i) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200
                  ${activeSection === section
                    ? 'text-white bg-indigo-500/15 border border-indigo-500/20'
                    : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
                  }`}
                style={{ transitionDelay: isOpen ? `${i * 30}ms` : '0ms' }}
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
