import { motion } from 'motion/react';

// Mjuka färgcirklar i bakgrunden. Färgerna styrs av --blob-1/2/3 i styles/theme.css
// så att de fungerar i både ljust och mörkt läge.
const circles = [
  { id: 1, size: 800, color: 'var(--blob-1)', style: { top: 0, left: '-25%' }, delay: 0 },
  { id: 2, size: 600, color: 'var(--blob-2)', style: { top: '33%', right: '-25%' }, delay: 0.3 },
  { id: 3, size: 700, color: 'var(--blob-3)', style: { bottom: 0, left: '-33%' }, delay: 0.6 },
  { id: 4, size: 500, color: 'var(--blob-1)', style: { bottom: '25%', right: 0 }, delay: 0.9 },
  { id: 5, size: 400, color: 'var(--blob-2)', style: { top: '50%', left: '50%', marginLeft: -200, marginTop: -200 }, delay: 1.2 }
];

const BackgroundCircles = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
    {circles.map((circle) => (
      <motion.div
        key={circle.id}
        className="absolute rounded-full blur-3xl"
        style={{
          width: circle.size,
          height: circle.size,
          background: `radial-gradient(circle, ${circle.color} 0%, transparent 70%)`,
          ...circle.style
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, delay: circle.delay, ease: 'easeOut' }}
      />
    ))}
  </div>
);

export default BackgroundCircles;
