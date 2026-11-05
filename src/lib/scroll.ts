const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Skrollar till ett element med id. Menyn hålls synlig under hoppet och
 *  scroll-margin (i theme.css) gör att rubriken landar nedanför menyn. */
export const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return null;
  window.dispatchEvent(new CustomEvent('nav:lock'));
  el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
  // Flytta fokus för tangentbord/skärmläsare utan att skrolla igen
  if (el.tabIndex < 0 && !el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
  el.focus({ preventScroll: true });
  return el;
};

/** Skrollar till ett element och låter det lysa upp en kort stund.
 *  Ligger elementet i en grupp med data-spotlight-group tonas syskonen ned under tiden. */
export const scrollAndFlash = (id: string) => {
  const el = scrollToId(id);
  if (!el) return;
  const group = el.closest('[data-spotlight-group]');
  window.setTimeout(() => {
    el.classList.add('is-flash');
    group?.classList.add('has-spotlight');
    window.setTimeout(() => {
      el.classList.remove('is-flash');
      group?.classList.remove('has-spotlight');
    }, 2200);
  }, prefersReducedMotion() ? 0 : 550);
};
