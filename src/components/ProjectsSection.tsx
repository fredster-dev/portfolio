import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import ProjectModal from './ProjectModal';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

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
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: '1',
      title: 'HealthTracker Mobile App',
      tagline: 'Simplifying wellness tracking for busy professionals',
      image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5NDE1NTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Mobile App',
      duration: '3 months',
      role: 'Lead UX Designer',
      tools: ['Figma', 'Trello', 'Maze', 'UserTesting'],
      problem: 'Busy professionals struggled to maintain consistent health tracking habits due to complex interfaces and time-consuming data entry in existing wellness apps.',
      solution: 'A streamlined mobile app with voice input, smart defaults, and contextual reminders that adapts to users\' schedules and preferences.',
      process: [
        'Conducted user interviews with 15 working professionals to understand pain points and behaviors',
        'Created user personas and journey maps to identify key moments for intervention',
        'Designed and tested low-fidelity wireframes focusing on quick interactions',
        'Developed high-fidelity prototypes with micro-interactions and voice integration',
        'Conducted usability testing with 8 participants and iterated based on feedback'
      ],
      outcome: 'The app achieved a 40% increase in daily active users and reduced average logging time from 3 minutes to 30 seconds.',
      impact: [
        '40% increase in daily active users',
        '85% reduction in data entry time',
        '4.6/5 star rating in app stores',
        '60% improvement in user retention rate'
      ]
    },
    {
      id: '2',
      title: 'EcoCommerce Dashboard',
      tagline: 'Empowering sustainable businesses with actionable insights',
      image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzU5NDc4NTM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Web Platform',
      duration: '4 months',
      role: 'Senior UX Designer',
      tools: ['Figma', 'React', 'HTTPie', 'Github'],
      problem: 'Small sustainable businesses lacked the tools to effectively track and communicate their environmental impact to customers and stakeholders.',
      solution: 'An intuitive dashboard that visualizes sustainability metrics and generates shareable impact reports with minimal setup required.',
      process: [
        'Analyzed existing analytics tools and identified gaps in sustainability tracking',
        'Facilitated workshops with business owners to understand their reporting needs',
        'Created information architecture and user flows for different user types',
        'Designed responsive dashboard layouts with progressive disclosure principles',
        'Validated designs through A/B testing and heat map analysis'
      ],
      outcome: 'The platform helped 200+ businesses increase customer trust and achieved 92% user satisfaction scores.',
      impact: [
        '200+ businesses onboarded in first quarter',
        '92% user satisfaction score',
        '3x increase in sustainability report generation',
        '45% improvement in customer engagement rates'
      ]
    },
    {
      id: '3',
      title: 'Learning Hub Research Platform',
      tagline: 'Connecting researchers with participants seamlessly',
      image: 'https://images.unsplash.com/photo-1587355760421-b9de3226a046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZXhwZXJpZW5jZSUyMHJlc2VhcmNofGVufDF8fHx8MTc1OTQxNzQyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Research Tool',
      duration: '6 months',
      role: 'UX Researcher & Designer',
      tools: ['Figma', 'Miro', 'Trello', 'Github'],
      problem: 'Academic researchers spent 60% of their time on administrative tasks instead of actual research due to fragmented tools for participant recruitment and session management.',
      solution: 'An integrated platform that automates participant matching, scheduling, and consent management while maintaining ethical research standards.',
      process: [
        'Shadowed researchers at 3 universities to understand their complete workflow',
        'Mapped the research participant journey from recruitment to completion',
        'Co-designed solutions with researchers through iterative design sprints',
        'Built and tested prototypes with real research studies',
        'Collaborated with ethics boards to ensure compliance with research standards'
      ],
      outcome: 'Reduced administrative overhead by 65% and increased research study completion rates by 30%.',
      impact: [
        '65% reduction in administrative time',
        '30% increase in study completion rates',
        'Used by 12 universities in pilot program',
        '98% researcher satisfaction with platform'
      ]
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
            Here are some projects that showcase my approach to solving complex user problems 
            through research, design, and iteration.
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
                className="group cursor-pointer border border-slate-200/50 shadow-sm bg-white/80 backdrop-blur-sm hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-300/60 hover:-translate-y-2 transition-all duration-500 h-full overflow-hidden"
                onClick={() => openModal(project)}
              >
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden relative">
                  <ImageWithFallback 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <ArrowUpRight className="w-4 h-4 text-slate-600" />
                  </div>
                </div>
                <CardContent className="p-6 relative">
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
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </CardContent>
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