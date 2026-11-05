import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

/** Växlar mellan ljust och mörkt läge. Valet sparas i webbläsaren;
 *  utan sparat val följs datorns/telefonens inställning. */
const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  // Följ systemets inställning så länge användaren inte valt själv
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e: MediaQueryListEvent) => {
      let saved: string | null = null;
      try { saved = localStorage.getItem('theme'); } catch { /* privat läge */ }
      if (!saved) setIsDark(e.matches);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch { /* privat läge */ }
  };

  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label={label} title={label}>
      {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </button>
  );
};

export default ThemeToggle;
