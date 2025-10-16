import { motion } from 'motion/react';
import profileImage from 'figma:asset/607e3569c7b94e52cac1291d1924370d2de99715.png';

const LandingSection = () => {
  return (
    <section id="landing" className="relative">
      {/* Hero Background Container */}
      <div className="mx-8 mt-8 mb-16 bg-gradient-to-br from-[#F6EFE7]/90 via-[#F6EFE7]/60 to-[#F6EFE7]/80 rounded-3xl border border-[#E09789]/20 shadow-sm shadow-[#E09789]/10 overflow-hidden relative">
        {/* Structured Background Shapes */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-16 left-8 w-72 h-72 bg-[#F5D4C3]/20 rounded-3xl rotate-12 blur-3xl"
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 12 }}
            transition={{ duration: 2, delay: 0.2 }}
          />
          <motion.div 
            className="absolute top-24 right-12 w-56 h-80 bg-[#C8DBD7]/25 rounded-[2rem] -rotate-6 blur-2xl"
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 2, delay: 0.4 }}
          />
          <motion.div 
            className="absolute bottom-16 left-12 w-80 h-56 bg-[#E9F1EF]/20 rounded-[3rem] rotate-3 blur-3xl"
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
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#353B45]">
                    Fredrik Fehrm
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-[#353B45] font-medium mt-3">
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
                    <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden bg-[#F6EFE7] border border-[#E09789]/30 shadow-2xl shadow-[#E09789]/20">
                      <img 
                        src={profileImage}
                        alt="Fredrik Fehrm - UX Designer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Floating decoration - Responsive */}
                    <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-[#F5D4C3]/60 rounded-2xl blur-xl"></div>
                    <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-32 sm:h-32 bg-[#C8DBD7]/80 rounded-3xl blur-2xl"></div>
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
                  className="text-base sm:text-lg text-[#353B45] leading-relaxed max-w-xl mx-auto lg:mx-0"
                >
                  I craft meaningful digital experiences through empathy-driven design, user research, and thoughtful interaction. 
                  Passionate about creating intuitive interfaces that bridge human needs and technology.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-wrap gap-3 justify-center lg:justify-start"
                >
                  <button 
                    onClick={() => {
                      const aboutSection = document.getElementById('about');
                      if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                        // Highlight empathy card briefly
                        setTimeout(() => {
                          const empathyCard = document.querySelector('[data-value="empathy"]');
                          if (empathyCard) {
                            empathyCard.classList.add('ring-2', 'ring-[#F5D4C3]', 'ring-opacity-60');
                            setTimeout(() => empathyCard.classList.remove('ring-2', 'ring-[#F5D4C3]', 'ring-opacity-60'), 2000);
                          }
                        }, 500);
                      }
                    }}
                    className="px-3 py-2 sm:px-4 sm:py-2 bg-[#F5D4C3]/60 text-[#353B45] rounded-xl text-sm font-medium cursor-pointer hover:bg-[#F5D4C3]/80 transition-all duration-300 hover:scale-105"
                  >
                    User Research
                  </button>
                  <button 
                    onClick={() => {
                      const aboutSection = document.getElementById('about');
                      if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                        // Highlight usability card briefly
                        setTimeout(() => {
                          const usabilityCard = document.querySelector('[data-value="usability"]');
                          if (usabilityCard) {
                            usabilityCard.classList.add('ring-2', 'ring-[#C8DBD7]', 'ring-opacity-60');
                            setTimeout(() => usabilityCard.classList.remove('ring-2', 'ring-[#C8DBD7]', 'ring-opacity-60'), 2000);
                          }
                        }, 500);
                      }
                    }}
                    className="px-3 py-2 sm:px-4 sm:py-2 bg-[#C8DBD7]/60 text-[#353B45] rounded-xl text-sm font-medium cursor-pointer hover:bg-[#C8DBD7]/80 transition-all duration-300 hover:scale-105"
                  >
                    Interface Design
                  </button>
                  <button 
                    onClick={() => {
                      const aboutSection = document.getElementById('about');
                      if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                        // Highlight aesthetics card briefly
                        setTimeout(() => {
                          const aestheticsCard = document.querySelector('[data-value="aesthetics"]');
                          if (aestheticsCard) {
                            aestheticsCard.classList.add('ring-4', 'ring-[#3C5556]', 'ring-opacity-70');
                            setTimeout(() => aestheticsCard.classList.remove('ring-4', 'ring-[#3C5556]', 'ring-opacity-70'), 2000);
                          }
                        }, 500);
                      }
                    }}
                    className="px-3 py-2 sm:px-4 sm:py-2 bg-[#A8D5D1] text-[#353B45] rounded-xl text-sm font-medium cursor-pointer hover:bg-[#8DC7C2] transition-all duration-300 hover:scale-105"
                  >
                    Prototyping
                  </button>
                </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="text-sm text-[#5A6C6D] italic pt-4 lg:pt-8"
                  >
                    <p>
                      "Design is really an act of communication, which means having a deep understanding of the person with whom the designer is communicating." - Don Norman
                    </p>
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
                  <div className="w-80 h-80 rounded-3xl overflow-hidden bg-[#F6EFE7] border border-[#E09789]/30 shadow-2xl shadow-[#E09789]/20">
                    <img 
                      src={profileImage}
                      alt="Fredrik Fehrm - UX Designer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Floating decoration - Desktop */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F5D4C3]/60 rounded-2xl blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#C8DBD7]/80 rounded-3xl blur-2xl"></div>
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
