import Navbar from '@/components/Navbar'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import EducationSection from '@/components/EducationSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import Background from '@/components/Background'
import RevealObserver from '@/components/RevealObserver'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-radials text-zinc-200 relative">
      <RevealObserver />
      <Navbar />
      <Background />
      <main>
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
