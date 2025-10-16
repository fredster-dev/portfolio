import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('landing');

  const navItems = [
    { id: 'landing', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use a more reliable scroll method
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      let currentSection = 'landing'; // Default to landing

      // Special case: if we're at the very top, always show landing
      if (scrollPosition < 50) {
        setActiveSection('landing');
        return;
      }

      // Find which section is most visible in the viewport
      let maxVisibility = 0;
      let mostVisibleSection = 'landing';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = Math.max(0, rect.top);
          const elementBottom = Math.min(viewportHeight, rect.bottom);
          const visibleHeight = Math.max(0, elementBottom - elementTop);
          const visibility = visibleHeight / viewportHeight;

          // If this section is more visible than the current max, make it active
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            mostVisibleSection = sectionId;
          }
        }
      }

      // Only update if we found a section with reasonable visibility (at least 20%)
      if (maxVisibility > 0.2) {
        currentSection = mostVisibleSection;
      }
      
      setActiveSection(currentSection);
    };

    // Run once on mount to set initial active section
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <motion.nav 
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/95 backdrop-blur-md rounded-2xl border border-[#E09789]/30 shadow-lg shadow-[#E09789]/20 px-2 py-2 lg:top-6 lg:bottom-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="flex space-x-1">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-2.5 lg:px-5 lg:py-2.5 rounded-xl transition-all duration-300 text-xs lg:text-sm font-medium cursor-pointer ${
                activeSection === item.id 
                  ? 'text-[#353B45] bg-gradient-to-r from-[#E09789]/20 to-[#E09789]/10 shadow-sm border border-[#E09789]/30' 
                  : 'text-[#353B45]/70 hover:text-[#353B45] hover:bg-[#F6EFE7]/50'
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navigation;