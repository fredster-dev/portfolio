// Korten under "How I work" i About-sektionen.
// Varje sträng i "text" blir ett eget stycke på kortet.

export interface HowIWorkItem {
  key: string;
  title: string;
  text: string[];
}

export const howIWork: HowIWorkItem[] = [
  {
    key: 'first-session',
    title: 'Try it before changing it',
    text: [
      'The first time you open a product is the only time you see it the way a new user does.',
      'On my thesis project I documented my own first session before I learned my way around, and several of those notes turned out to be real problems in the interviews later.'
    ]
  },
  {
    key: 'accessibility',
    title: 'Accessibility from the start',
    text: [
      'On one project, one of our two user groups was pensioners with little digital experience.',
      'Contrast, text size and keyboard navigation shaped the navigation from day one instead of being checked at the end.'
    ]
  },
  {
    key: 'kill-the-idea',
    title: 'Kill the idea, not the deadline',
    text: [
      'On a recent project I had a whole page half designed before the interviews told me it was the wrong approach.',
      'Starting over cost time, but iterating on the wrong thing would have cost more.'
    ]
  }
];
