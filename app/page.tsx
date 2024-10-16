'use client'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import Background from '@/components/Background'

export default function Portfolio() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div
      className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300 ease-in-out relative z-10`}
    >
      <Background theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className='mx-3'>
        <HeroSection theme={theme} />
        <section id="about" className="min-h-screen py-20">
          <AboutSection theme={theme} />
        </section>
        <section id="skills" className="min-h-screen py-20">
          <SkillsSection theme={theme} />
        </section>
        <section id="projects" className="min-h-screen py-20 ">
          <ProjectsSection />
        </section>
        <section id="contact" className="min-h-screen py-20">
          <ContactSection theme={theme} />
        </section>
      </main>
      <Footer theme={theme} />
    </div>
  );
}
