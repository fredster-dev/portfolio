import { MotionConfig } from 'motion/react';
import Navigation from './components/Navigation';
import BackgroundCircles from './components/BackgroundCircles';
import LandingSection from './components/LandingSection';
import SectionDivider from './components/SectionDivider';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen relative">
      <a href="#main" className="skip-link">Skip to content</a>
      <BackgroundCircles />
      <Navigation />
      <main id="main" tabIndex={-1} className="relative z-10 pb-24 lg:pb-0">
        <LandingSection />
        <AboutSection />
        <SectionDivider variant="minimal" spacing="sm" />
        <ProjectsSection />
        <SectionDivider variant="line" spacing="md" />
        <ContactSection />
      </main>
    </div>
    </MotionConfig>
  );
}
