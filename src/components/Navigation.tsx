import { useEffect, useRef, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { scrollToId } from '../lib/scroll';

const NAV_ITEMS = [
  { id: 'landing', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('landing');
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const lockUntil = useRef(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const delta = y - lastY.current;
      const now = Date.now();

      // Göm vid skroll nedåt, visa vid skroll uppåt (och alltid högst upp)
      if (now < lockUntil.current || y < 80) setHidden(false);
      else if (delta > 6) setHidden(true);
      else if (delta < -6) setHidden(false);
      lastY.current = y;

      // Aktiv sektion = den sista vars topp passerat 35 % av skärmen
      const atBottom = window.innerHeight + y >= document.documentElement.scrollHeight - 4;
      let current = 'landing';
      if (atBottom) current = NAV_ITEMS[NAV_ITEMS.length - 1].id;
      else {
        for (const item of NAV_ITEMS) {
          const el = document.getElementById(item.id);
          if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = item.id;
        }
      }
      setActiveSection(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    const onLock = () => {
      lockUntil.current = Date.now() + 1200;
      setHidden(false);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('nav:lock', onLock);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('nav:lock', onLock);
    };
  }, []);

  return (
    <nav aria-label="Main" className={`site-nav ${hidden ? 'is-hidden' : ''}`}>
      <ul className="site-nav__list">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="site-nav__link"
              aria-current={activeSection === item.id ? 'location' : undefined}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(item.id);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <span className="site-nav__sep" aria-hidden="true" />
      <ThemeToggle />
    </nav>
  );
};

export default Navigation;
