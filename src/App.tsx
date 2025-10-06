import Navigation from './components/Navigation';
import BackgroundCircles from './components/BackgroundCircles';
import LandingSection from './components/LandingSection';
import SectionDivider from './components/SectionDivider';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen relative">
      <BackgroundCircles />
      <Navigation />
      <main className="relative z-10 pb-24 lg:pb-0">
        <LandingSection />
        <AboutSection />
        <SectionDivider variant="minimal" spacing="md" />
        <ProjectsSection />
        <SectionDivider variant="line" spacing="md" />
        <ContactSection />
      </main>
    </div>
  );
}