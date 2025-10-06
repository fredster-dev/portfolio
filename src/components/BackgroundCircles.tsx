import { motion } from 'motion/react';

const BackgroundCircles = () => {
  const circles = [
    {
      id: 1,
      size: 'w-[800px] h-[800px]',
      gradient: 'bg-gradient-radial from-[#F5D4C3]/30 via-[#F5D4C3]/15 to-transparent',
      position: 'top-0 -left-1/4',
      delay: 0
    },
    {
      id: 2,
      size: 'w-[600px] h-[600px]',
      gradient: 'bg-gradient-radial from-[#C8DBD7]/35 via-[#C8DBD7]/20 to-transparent',
      position: 'top-1/3 -right-1/4',
      delay: 0.3
    },
    {
      id: 3,
      size: 'w-[700px] h-[700px]',
      gradient: 'bg-gradient-radial from-[#E9F1EF]/40 via-[#E9F1EF]/20 to-transparent',
      position: 'bottom-0 -left-1/3',
      delay: 0.6
    },
    {
      id: 4,
      size: 'w-[500px] h-[500px]',
      gradient: 'bg-gradient-radial from-[#F5D4C3]/25 via-[#F5D4C3]/10 to-transparent',
      position: 'bottom-1/4 right-0',
      delay: 0.9
    },
    {
      id: 5,
      size: 'w-[400px] h-[400px]',
      gradient: 'bg-gradient-radial from-[#C8DBD7]/30 via-[#C8DBD7]/15 to-transparent',
      position: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
      delay: 1.2
    }
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          className={`absolute rounded-full blur-3xl ${circle.size} ${circle.gradient} ${circle.position}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 3, 
            delay: circle.delay,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundCircles;