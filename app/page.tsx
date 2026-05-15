import Navbar from '@/components/Navbar'
import AboutSection from '@/components/AboutSection'
import ExperienceSection from '@/components/ExperienceSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import EducationSection from '@/components/EducationSection'
import Background from '@/components/Background'
import RevealObserver from '@/components/RevealObserver'
import { SectionBlend } from '@/components/SectionBlend'
import { CinematicFooter } from '@/components/ui/motion-footer'
import { ScrollToContact } from '@/components/ui/scroll-to-contact'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-bg text-fg relative">
      <RevealObserver />
      <Navbar />
      <Background />
      <main>
        {/* Section blends — taller (120–160px) so the 28px backdrop-blur
            has room to actually melt sections together. Every internal
            boundary uses 'blur' now; the only 'glow' is the entry into
            About so the page opens with a visible accent line. */}
        <SectionBlend variant="glow" height={120} />
        <AboutSection />

        <SectionBlend variant="blur" height={140} />
        <ExperienceSection />

        <SectionBlend variant="blur" height={140} />
        <SkillsSection />

        <SectionBlend variant="blur" height={160} />
        <ProjectsSection />

        <SectionBlend variant="blur" height={140} />
        <EducationSection />

        {/* Vertical scroll-to-contact cue — bridges the last visible section
            with the curtain-reveal CinematicFooter that scrolls in below. */}
        <ScrollToContact label="Scroll to contact" />
      </main>
      <CinematicFooter />
    </div>
  )
}
