import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import ProjectModal from './ProjectModal';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import vannerImage from 'figma:asset/abbea66072bd270c559f35852c27edd34a568f91.png';
import financeDashboardImage from 'figma:asset/ffd55bff402d5d163eeb4022a564e3b57f3fabaa.png';

interface Project {
  id: string;
  title: string;
  tagline: string;
  image: string;
  category: string;
  duration: string;
  role: string;
  tools: string[];
  problem: string;
  solution: string;
  process: string[];
  outcome: string;
  impact: string[];
  projectLink: string;
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: '1',
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
      title: 'Mission: (Usage) Impossible',
      tagline: 'Building a React Native app with intentionally bad UX',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3NTk0MTc0Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 px-8 relative z-10 bg-[#F8F5EE]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Selected Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projects that show how I approach design: listening, testing, and shaping ideas into something that works for people.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="group cursor-pointer border border-slate-200/50 shadow-sm bg-white/80 backdrop-blur-sm hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-300/60 hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden relative flex flex-col"
                onClick={() => openModal(project)}
              >
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden relative">
                  {project.id === '1' || project.id === '2' ? (
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <ImageWithFallback 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight className="w-4 h-4 text-slate-600" />
                  </div>
                </div>
                <CardContent className="p-6 pb-7 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      variant="secondary" 
                      className="text-xs bg-slate-100/80 text-slate-700 border-slate-200/50"
                    >
                      {project.category}
                    </Badge>
                    <div className="w-2 h-2 bg-slate-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="mb-2 group-hover:text-slate-700 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                    {project.tagline}
                  </p>
                </CardContent>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-lg"></div>
              </Card>
            </motion.div>
          ))}
        </div>

        <ProjectModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
