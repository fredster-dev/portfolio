import { motion } from 'motion/react';

interface SectionDividerProps {
  variant?: 'line' | 'wave' | 'minimal';
  spacing?: 'sm' | 'md' | 'lg';
}

const SectionDivider = ({ variant = 'wave', spacing = 'sm' }: SectionDividerProps) => {
  const spacingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16'
  };

  if (variant === 'wave') {
    return (
      <motion.div 
        className={`w-full flex justify-center ${spacingClasses[spacing]}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <svg 
          width="120" 
          height="8" 
          viewBox="0 0 120 8" 
          fill="none" 
          className="text-[#E09789]/60"
        >
          <motion.path
            d="M0 4C15 4 15 0 30 0C45 0 45 4 60 4C75 4 75 0 90 0C105 0 105 4 120 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>
      </motion.div>
    );
  }

  if (variant === 'minimal') {
    return (
      <motion.div 
        className={`w-full flex justify-center ${spacingClasses[spacing]}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-[#E09789]/60 rounded-full"></div>
          <div className="w-2 h-2 bg-[#E09789]/40 rounded-full"></div>
          <div className="w-2 h-2 bg-[#E09789]/60 rounded-full"></div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className={`w-full flex justify-center ${spacingClasses[spacing]}`}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#E09789]/60 to-transparent"></div>
    </motion.div>
  );
};

export default SectionDivider;