import { motion } from 'motion/react';
import { scrollAndFlash } from '../lib/scroll';
import profileImage from '../assets/profile.webp';

const LandingSection = () => {
  return (
    <section id="landing" className="relative">
      {/* Hero Background Container */}
      <div className="hero-card overflow-hidden relative">
        {/* Structured Background Shapes */}
        <div className="absolute inset-0 hero-blobs" aria-hidden="true">
          <motion.div 
            className="absolute top-16 left-8 w-72 h-72 rounded-3xl rotate-12 blur-3xl"
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 12 }}
            transition={{ duration: 2, delay: 0.2 }}
          />
          <motion.div 
            className="absolute top-24 right-12 w-56 h-80 rounded-[2rem] -rotate-6 blur-2xl"
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 2, delay: 0.4 }}
          />
          <motion.div 
            className="absolute bottom-16 left-12 w-80 h-56 rounded-[3rem] rotate-3 blur-3xl"
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 2, delay: 0.6 }}
          />
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto w-full">
            {/* Mobile-first Layout */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 lg:items-center">
              
              {/* Left Column: Name, Title, and Description - Desktop */}
              <div className="flex flex-col space-y-6 lg:space-y-8">
                {/* Name and Title - Always First */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-center lg:text-left"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight ink">
                    Fredrik Fehrm
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl ink font-medium mt-3">
                    UX/UI Designer with Frontend Development Skills
                  </p>
                </motion.div>

                {/* Profile Image - Second on Mobile, Hidden on Desktop (moved to right column) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex justify-center lg:hidden"
                >
                  <div className="relative">
                    <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden hero-photo">
                      <img 
                        src={profileImage}
                        alt="Fredrik Fehrm - UX Designer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Floating decoration - Responsive */}
                    <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 hero-deco-1 rounded-2xl blur-xl"></div>
                    <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-32 sm:h-32 hero-deco-2 rounded-3xl blur-2xl"></div>
                  </div>
                </motion.div>

                {/* Description and Skills - Third on Mobile, Part of Left Column on Desktop */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="space-y-6 text-center lg:text-left"
                >
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-base sm:text-lg ink leading-relaxed max-w-xl mx-auto lg:mx-0"
                >
                  I enjoy turning ideas into experiences that make sense for real people.
                  My process always starts with curiosity, understanding needs, testing ideas, and shaping designs that feel intuitive and honest.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-wrap gap-3 justify-center lg:justify-start"
                >
                  {[
                    { label: 'User Research', target: 'hiw-first-session', tone: 'chip--1' },
                    { label: 'Interface Design', target: 'hiw-accessibility', tone: 'chip--2' },
                    { label: 'Prototyping', target: 'hiw-kill-the-idea', tone: 'chip--3' }
                  ].map((chip) => (
                    <button
                      key={chip.label}
                      type="button"
                      onClick={() => scrollAndFlash(chip.target)}
                      className={`chip ${chip.tone}`}
                    >
                      {chip.label}
                    </button>
                  ))}
                </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="text-sm ink-2 italic pt-4 lg:pt-8"
                  >
                    <figure>
                      <blockquote>
                        <p>
                          “Design is really an act of communication, which means having a deep understanding of the
                          person with whom the designer is communicating.”
                        </p>
                      </blockquote>
                      <figcaption className="mt-1 not-italic">– Don Norman</figcaption>
                    </figure>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Column: Profile Image - Desktop Only */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:flex justify-center"
              >
                <div className="relative">
                  <div className="w-80 h-80 rounded-3xl overflow-hidden hero-photo">
                    <img 
                      src={profileImage}
                      alt="Fredrik Fehrm - UX Designer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Floating decoration - Desktop */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 hero-deco-1 rounded-2xl blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 hero-deco-2 rounded-3xl blur-2xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
