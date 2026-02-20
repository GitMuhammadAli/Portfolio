'use client'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import EducationSection from '@/components/EducationSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import Background from '@/components/Background'

export default function Portfolio() {
  const [theme, setTheme] = useState('dark');

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
      className={`min-h-screen overflow-x-hidden ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      } transition-colors duration-300 ease-in-out relative z-10`}
    >
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Background theme={theme}  />

      <main className=''>
        <section className="min-h-screen">
          <AboutSection theme={theme} />
        </section>
        <ExperienceSection theme={theme} />
        <section id="skills" className="min-h-screen">
          <SkillsSection theme={theme} />
        </section>
        <section id="projects" className="min-h-screen">
          <ProjectsSection theme={theme} />
        </section>
        <EducationSection theme={theme} />
        <section id="contact" className="min-h-screen">
          <ContactSection theme={theme} />
        </section>
      </main>
      <Footer theme={theme} />
    </div>
  );
}
