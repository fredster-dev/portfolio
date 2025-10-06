import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScrollArea } from './ui/scroll-area';

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

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="sr-only">{project.title}</DialogTitle>
          <DialogDescription className="sr-only">
            Detailed view of {project.title} project case study
          </DialogDescription>
        </DialogHeader>
        
        <ScrollArea className="max-h-[80vh]">
          <div className="space-y-8">
            {/* Hero Image */}
            <div className="w-full h-64 rounded-lg overflow-hidden bg-muted">
              <ImageWithFallback 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Overview */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant="secondary">{project.category}</Badge>
                <span className="text-sm text-muted-foreground">{project.duration}</span>
              </div>
              
              <h1 className="text-3xl">{project.title}</h1>
              <p className="text-lg text-muted-foreground">{project.tagline}</p>
              
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="mb-2">My Role</h4>
                  <p className="text-muted-foreground">{project.role}</p>
                </div>
                <div>
                  <h4 className="mb-2">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <Badge key={index} variant="outline" className="cursor-default select-none">{tool}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Problem Statement */}
            <div className="space-y-3">
              <h3>The Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
            </div>

            {/* Solution */}
            <div className="space-y-3">
              <h3>The Solution</h3>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>

            {/* Process */}
            <div className="space-y-4">
              <h3>Design Process</h3>
              <div className="grid gap-4">
                {project.process.map((step, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-muted/30 rounded-lg">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div className="space-y-3">
              <h3>Outcome & Impact</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{project.outcome}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {project.impact.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;