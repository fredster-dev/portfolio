import vannerImage from '../assets/vanner.webp';
import financeDashboardImage from '../assets/finance-dashboard.webp';
import spiichImage from '../assets/spiich.webp';
import volontarportalImage from '../assets/volontarportal.webp';
import missionImage from '../assets/mission.webp';

// Alla projekt i portfolion. Ändra texter här – inga andra filer behöver röras.
// Ordningen här är ordningen på sidan. favorite: true = visas under "Favorite projects".

export interface ProjectSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  favorite?: boolean;
  comingSoon?: boolean;                  // visas som ett suddigt "Work in progress"-kort som inte går att klicka på
  title: string;
  tagline: string;
  image: string;
  category: string;
  duration: string;
  role: string;
  tools: string[];
  problem: string | string[];            // ett stycke, eller en lista med stycken
  solution: string | string[];
  solutionBullets?: string[];            // punktlista under The Solution
  sectionsAfterChallenge?: ProjectSection[];
  sectionsAfterSolution?: ProjectSection[];
  processLabel?: string;                 // standard: "Design Process"
  process: string[];
  outcomeLabel?: string;                 // standard: "Outcome & Impact"
  outcome: string | string[];
  impact: string[];
  projectLink: string;
  extraLinks?: ProjectLink[];            // t.ex. presentationer
}

export const projects: Project[] = [
  {
    id: '4',
    favorite: true,
    title: 'Spiich - Why users "barely use" their AI agents',
    tagline: 'Why the background agents seemed underused, and what was really going on',
    image: spiichImage,
    category: 'UX Research',
    duration: 'Degree project, ~5 weeks',
    role: 'UX Researcher',
    tools: ['User interviews', 'Coding', 'Affinity mapping', 'Figma'],
    problem: "Spiich's background agents looked underutilized. Many users said they barely used them, and the team wanted to understand why.",
    solution: "Instead of a separate agent page, a feed that works as the day's starting point. The agents deliver leads, email drafts and pipeline alerts straight into it, and you can act on them right there.",
    processLabel: 'Design Process (Double Diamond)',
    process: [
      'Planned and refined the interview guide together with the team',
      'Interviewed users and reached out to B2B contacts',
      'Synthesized the interviews through coding and affinity mapping',
      'Shared the findings with stakeholders, including the CEOs',
      "Iterated on prototypes in Figma, from an agent page to a feed where the agents' results show up with actions you can take right away"
    ],
    outcome: 'Users who said they barely used the background agents were in fact using them all the time, without realizing it. The gap was in how the product communicated what the agents did, not in the agents themselves.',
    impact: [
      "Users didn't see what the agents had done, and that led to distrust instead of relief",
      'Users wanted to feel in control, even when the agent did the work',
      'The value stayed invisible as long as it had nowhere to land',
      'What users say they do and what they actually do can differ a lot'
    ],
    projectLink: '' // länk till t.ex. Figma eller rapport – lämna tom för att dölja knappen
  },
  {
    id: '5',
    favorite: true,
    title: 'Volunteer Pool Halland',
    tagline: 'A platform that connects people with local volunteer work, and becomes a gathering point when something goes wrong',
    image: volontarportalImage,
    category: 'UX/UI Design',
    duration: 'Sep – Nov', // ✏️ stäm av mot CV:t och lägg gärna till år
    role: 'UX/UI Designer, one of five in the team. I was the one who talked to the client and turned scattered ideas into something that could be built.',
    tools: ['Figma', 'FigJam', 'Trello', 'WCAG AA'],
    problem: [
      'Lokalt Ledd Utveckling Halland (LLUH) came to us with a problem bigger than a website. Small communities in Halland are not well prepared for crises, there is no clear structure for how neighbours help each other, and fewer people want to commit long term as volunteers.',
      'The will to help is there. The structure is not. So the brief was to make it easy enough that people actually use it, and make it work when things get stressful.'
    ],
    sectionsAfterChallenge: [
      {
        title: 'Who we designed for',
        paragraphs: ["The client already had research, so we built three personas from their material instead of starting over."],
        bullets: [
          'Anna, 28, teacher. Comfortable with her phone, short on time.',
          'Bengt, 67, retired firefighter. Wants to help, but is uneasy with new systems and hates passwords.',
          'Kim, 36, experienced volunteer who will run the platform and needs an overview.'
        ]
      },
      {
        title: 'Designing from Bengt',
        paragraphs: [
          'If Bengt can use it, almost anyone can. Designing from him meant accessibility was built in from the first wireframe instead of bolted on at the end, and adapting for Anna afterwards was easy.'
        ]
      },
      {
        title: 'Looking at what already exists',
        paragraphs: [
          'We audited five platforms: Röda Korset, Volontärbyrån, Hitta Ideellt, Engagera mera Malmö and Dorf in Germany. The national ones are powerful but heavy, the local ones simple but scattered, and none of them covered crisis readiness in a way that worked on a phone. That gap became our target.'
        ]
      }
    ],
    solution: 'A local platform with two jobs: match people with volunteer work in calm times, and be the place you go when something happens.',
    solutionBullets: [
      'Filters for place, theme, crisis level and skill, so finding a task takes seconds',
      'Login with SMS or BankID instead of a password, with large buttons and plain instructions',
      'Every notice says what happened, where, when and what to do',
      'A noticeboard, a map and a forum, so people have a reason to come back between crises',
      'Separate views for volunteers and administrators'
    ],
    sectionsAfterSolution: [
      {
        title: 'Accessibility as a requirement',
        paragraphs: [
          "WCAG AA was part of our Definition of Done, so a task wasn't finished until it met it. That covered contrast, readable text sizes, keyboard navigation, large touch targets, responsive layouts and offline support, since a crisis tool that needs perfect connectivity isn't a crisis tool."
        ]
      }
    ],
    processLabel: 'How we worked',
    process: [
      'Kick-off with the client on scope, expectations and deliverables',
      'Competitive audit of five platforms, and a FigJam board where the client had rated their own ideas by importance, so we knew what was a must and what was a wish',
      'Three personas, user stories, and the decision to design from Bengt',
      'A sitemap with six main areas, and epics and user stories in Trello',
      'Acceptance criteria per feature and a Definition of Done that included WCAG AA',
      "Turned the client's ratings into must haves and nice to haves, scored them on complexity and cut down to an MVP",
      'Lo-fi wireframes first, then an interactive prototype in Figma',
      'Handoff with the final design and a style guide for the developers'
    ],
    outcomeLabel: 'What I took from it',
    outcome: [
      'Choosing who to design from is a decision with consequences, and it is worth making on purpose instead of defaulting to the easiest user.',
      'Designing from Bengt made the work harder in the short term and the product better in the long term.'
    ],
    impact: [
      'Password-free login, bigger buttons and shorter paths made the product better for everyone',
      'Accessibility stopped being a separate task that someone has to remember'
    ],
    projectLink: 'https://www.figma.com/design/gSaxSKVBbhjqGK1lSCGvBz/Volont%C3%A4rpool---LLUH?node-id=1-3208&t=H17yqiEtEnw4sKnf-1',
    extraLinks: [
      // ✏️ Byt ut gruppmedlemmarnas namn i presentationen innan sidan går live
      { label: 'Final presentation', url: 'https://www.figma.com/deck/LOixPxL3pOf6cH7pqCErsm' }
    ]
  },
  {
    id: '1',
    favorite: false,
    title: 'VÄNNER - A concept for friendship and belonging',
    tagline: 'Understanding loneliness and designing pathways to new friendships',
    image: vannerImage,
    category: 'UX Research & Design',
    duration: '4 months',
    role: 'UX/UI Designer focusing on accessibility and visual identity',
    tools: ['Figma', 'Google Fonts', 'WCAG guidelines', 'color and typography research'],
    problem: 'Many people struggle to form new friendships once their social environments change. Our research focused on individuals who spend a lot of time indoors and find it difficult to reconnect socially after school, work shifts or unemployed.',
    solution: 'To understand the emotional and practical barriers behind social isolation and to explore how design can encourage small, positive steps toward connection and belonging outside their homes.',
    process: [
      'Through empathy mapping and user research, we identified patterns of loneliness rooted in uncertainty, low confidence, and lack of accessible opportunities to meet others. Our main persona, Kalle, represented a young adult who wants to meet people but feels unsure where or how to start.',
      'We found that people like Kalle need clear, low-pressure ways to engage socially. They benefit from predictable information, gentle reminders, and reassurance that participation is always a choice. Safety, clarity, and encouragement became the foundation of every design decision.',
      'We explored how a digital product could act as a supportive bridge into real-world connection. Early sketches and lo-fi prototypes tested ideas like event feeds, feedback messages and scheduling tools, all focused on making interaction feel safe and motivating.',
      'Rather than designing for performance or popularity, we aimed to design for comfort and trust. The design emphasized structure, emotional tone, and accessibility rather than visual polish.'
    ],
    outcome: 'The result was a concept for a simple and reassuring platform that helps users build social confidence through small, positive experiences. The design emphasized structure, emotional tone, and accessibility rather than visual polish, laying the groundwork for future development.',
    impact: [
      'Loneliness often stems from uncertainty more than lack of opportunity',
      'Design can reduce fear by offering guidance and predictability',
      'Understanding people\'s emotions can be just as important as solving their practical needs',
      'Comfort and trust are essential foundations for social platforms'
    ],
    projectLink: 'https://www.figma.com/design/Ql9U2CxELqaTBtVrBhOkn4/V%C3%84NNER?node-id=793-5315&t=RDmGiz8O9UPvUaa0-1'
  },
  {
    id: '2',
    favorite: false,
    title: 'Finance Dashboard - Designing an intuitive system for financial insight',
    tagline: 'Transforming complex financial data into clear, actionable insights',
    image: financeDashboardImage,
    category: 'Financial Dashboard Design',
    duration: 'Chas Challenge',
    role: 'UX/UI Designer',
    tools: ['Figma', 'Trello', 'Agile workflow', 'WCAG guidelines'],
    problem: 'Financial dashboards often overwhelm users with dense information, unclear structure, and limited visual hierarchy. Our team was tasked with improving an existing analysis tool so that users could interpret financial data faster and gain a sense of control and insight through a clearer experience.',
    solution: 'To design a concept for a financial analysis system that communicates economic insight and control in a modern, inspiring, and accessible way.',
    process: [
      'Research & Market Analysis: Reviewed existing dashboard tools to find opportunities for improvement and define usability gaps. Conducted qualitative interviews and analyzed behavioral patterns to understand how users interact with data.',
      'Workshops & Collaboration: Facilitated collaborative workshops including Crazy 8s for rapid ideation, The Fork for prioritizing ideas, and Behavioral Stations to examine user behaviors from different perspectives. These helped align UX, front-end, and DevOps teams around shared user goals.',
      'Concept & Ideation: Created early sketches and low-fidelity wireframes focusing on data hierarchy, flow, and accessibility. Worked in an agile process with weekly goals focused on research, ideation, prototyping, testing, and iteration.',
      'Prototyping & Testing: Built several interactive prototypes in Figma. Conducted user tests, guerrilla tests, and follow-up sessions to validate clarity and usability.',
      'Iteration: The design went through six major iterations based on user and stakeholder feedback, improving readability, contrast, and structure with each round.',
      'Handover: Delivered the final prototype and design documentation to the front-end development team for implementation.'
    ],
    outcome: 'The final prototype presented a streamlined, visually consistent dashboard that made financial data feel intuitive and actionable. Users could filter, analyze, and save searches efficiently, while the product owners felt the structure aligned with their vision for a modern, insight-driven experience.',
    impact: [
      'Collaboration between UX, DevOps, and front-end teams leads to stronger design solutions',
      'Iterative testing builds confidence and uncovers hidden usability issues',
      'Accessibility and structure are essential when turning complex data into clear, meaningful insight',
      'Cross-disciplinary workshops align teams around user goals and shared understanding'
    ],
    projectLink: 'https://www.figma.com/slides/ynzDFToVvfljwQki5L6EH0/F%C3%B6retagsf%C3%B6rfr%C3%A5gan-ChasChallange?node-id=15-93&t=41LjEymG7FtBNc4I-0'
  },
  {
    id: '3',
    favorite: false,
    title: 'Mission: (Usage) Impossible',
    tagline: 'Building a React Native app with intentionally bad UX',
    image: missionImage,
    category: 'React Native Development',
    duration: 'React Native Course',
    role: 'Designer & Developer',
    tools: ['React Native', 'Expo', 'Firebase'],
    problem: 'To design and build a mobile app that intentionally breaks every UX best practice, creating the worst possible user experience while still being fully functional and technically sound. This exercise was part of the React Native course, aimed at exploring how poor design decisions affect usability, accessibility, and overall user satisfaction.',
    solution: 'A fully working cross-platform mobile app built with React Native and Firebase. The project included a frustratingly confusing registration and login flow, slow animations, unclear feedback, and awkward navigation, all by design. Behind the chaos, however, the app architecture was clean, modular, and technically correct, showcasing the balance between bad UX and good code.',
    process: [
      'Planned component structure using React Native and Expo for cross-platform development',
      'Designed intentionally confusing UI layouts and error states',
      'Implemented authentication flow with Firebase backend',
      'Tested on both iOS and Android to ensure consistent frustration',
      'Documented technical setup, dependencies, and lessons learned in the project README'
    ],
    outcome: 'The project humorously demonstrated how small design choices such as spacing, colors, feedback timing, and structure can completely ruin usability. Despite the deliberate UX chaos, the result was a fully functional, production-ready mobile app with clean React code and reusable components.',
    impact: [
      'Good code cannot save bad UX',
      'Understanding what not to do is essential for great design',
      'Firebase integration and Expo workflows simplified cross-platform testing',
      'Even an intentionally terrible app can teach valuable lessons about empathy and accessibility'
    ],
    projectLink: 'https://github.com/fredster-dev/Native-React-app'
  },
  {
    // ✏️ NYTT PROJEKT – byt ut all text nedan
    // ✏️ När projektet är klart: ta bort comingSoon och fyll i texterna nedan
    id: '6',
    favorite: false,
    comingSoon: true,
    title: 'Coming soon',
    tagline: 'A new case study is on its way.',
    image: '', // lägg en bild i src/assets och importera den högst upp, eller klistra in en bild-URL
    category: 'Work in progress',
    duration: 'X weeks',
    role: 'UX/UI Designer',
    tools: ['Figma'],
    problem: 'What was the challenge?',
    solution: 'What did you set out to do / what was the solution?',
    process: [
      'Step 1 – e.g. research and interviews',
      'Step 2 – e.g. ideation and sketches',
      'Step 3 – e.g. prototyping and testing'
    ],
    outcome: 'What was the result?',
    impact: [
      'Key learning 1',
      'Key learning 2'
    ],
    projectLink: '' // länk till Figma/GitHub – lämna tom för att dölja knappen
  }
];
