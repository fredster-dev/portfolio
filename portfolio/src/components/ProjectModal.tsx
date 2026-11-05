import { ComponentType, ReactNode } from 'react';
import { Drawer } from 'vaul';
import { X, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { Badge } from './ui/badge';
import { useIsMobile } from './ui/use-mobile';
import ProjectImage from './ProjectImage';
import { Project, ProjectSection } from '../data/projects';
import { projectLinkLabel } from '../lib/links';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

type TextComponent = ComponentType<{ className?: string; children?: ReactNode }>;

interface DetailsProps {
  project: Project;
  Title: TextComponent;
  Description: TextComponent;
}

const toParagraphs = (text: string | string[]) => (Array.isArray(text) ? text : [text]);

/** En extra sektion (t.ex. personas) med valfria stycken och punkter. */
const Section = ({ section }: { section: ProjectSection }) => (
  <section className="pm-section">
    <h3>{section.title}</h3>
    {section.paragraphs?.map((paragraph) => (
      <p key={paragraph} className="pm-text">{paragraph}</p>
    ))}
    {section.bullets && (
      <ul className="pm-bullets" role="list">
        {section.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    )}
  </section>
);

/** Själva projektinfon – samma innehåll i dialogen (dator) och arket (mobil). */
const ProjectDetails = ({ project, Title, Description }: DetailsProps) => {
  const hasLinks = Boolean(project.projectLink) || Boolean(project.extraLinks?.length);

  const links = hasLinks && (
    <div className="pm-links">
      {project.projectLink && (
        <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="btn-brand">
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
          <span>{projectLinkLabel(project.projectLink)}</span>
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      )}
      {project.extraLinks?.map((link) => (
        <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="btn-ghost">
          <span>{link.label}</span>
          <span className="sr-only">(opens in a new tab)</span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      ))}
    </div>
  );

  return (
    <div className="pm">
      <div className="pm-hero">
        <ProjectImage project={project} className="w-full h-full object-cover" />
      </div>

      <div className="pm-intro">
        <div className="pm-meta">
          <Badge variant="secondary">{project.category}</Badge>
          <span className="pm-duration">{project.duration}</span>
        </div>
        {/* Titeln = projektets namn (h2), så rubrikordningen blir rätt */}
        <Title className="pm-title">{project.title}</Title>
        <Description className="pm-tagline">{project.tagline}</Description>
        {links}
      </div>

      <div className="pm-facts">
        <div>
          <h3>My Role</h3>
          <p className="pm-text">{project.role}</p>
        </div>
        <div>
          <h3>Tools Used</h3>
          <ul className="pm-tools" role="list">
            {project.tools.map((tool) => (
              <li key={tool}>
                <Badge variant="outline" className="cursor-default select-none">{tool}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="pm-section">
        <h3>The Challenge</h3>
        {toParagraphs(project.problem).map((paragraph) => (
          <p key={paragraph} className="pm-text">{paragraph}</p>
        ))}
      </section>

      {project.sectionsAfterChallenge?.map((section) => (
        <Section key={section.title} section={section} />
      ))}

      <section className="pm-section">
        <h3>The Solution</h3>
        {toParagraphs(project.solution).map((paragraph) => (
          <p key={paragraph} className="pm-text">{paragraph}</p>
        ))}
        {project.solutionBullets && (
          <ul className="pm-bullets" role="list">
            {project.solutionBullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
      </section>

      {project.sectionsAfterSolution?.map((section) => (
        <Section key={section.title} section={section} />
      ))}

      <section className="pm-section">
        <h3>{project.processLabel ?? 'Design Process'}</h3>
        <ol className="pm-steps" role="list">
          {project.process.map((step, index) => (
            <li key={step}>
              <span className="pm-step-num" aria-hidden="true">{index + 1}</span>
              <p className="pm-text">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="pm-section">
        <h3>{project.outcomeLabel ?? 'Outcome & Impact'}</h3>
        {toParagraphs(project.outcome).map((paragraph) => (
          <p key={paragraph} className="pm-text">{paragraph}</p>
        ))}
        <ul className="pm-impact" role="list">
          {project.impact.map((item) => (
            <li key={item}>
              <span className="pm-dot" aria-hidden="true"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {hasLinks && <div className="pm-footer">{links}</div>}
    </div>
  );
};

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const isMobile = useIsMobile();
  if (!project) return null;

  /* Mobil: ark nedifrån. Står man högst upp i arket kan man dra nedåt för att stänga.
     Krysset finns kvar för den som inte vill (eller kan) dra – WCAG 2.5.1. */
  if (isMobile) {
    return (
      <Drawer.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <Drawer.Portal>
          <Drawer.Overlay className="sheet-overlay" />
          <Drawer.Content className="sheet">
            <div className="sheet__handle" aria-hidden="true" />
            <Drawer.Close className="sheet__close" aria-label="Close">
              <X aria-hidden="true" />
            </Drawer.Close>
            <div className="sheet__scroll" tabIndex={0} role="region" aria-label="Project details">
              <ProjectDetails project={project} Title={Drawer.Title} Description={Drawer.Description} />
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Skrollytan går att fokusera, så den kan skrollas med tangentbordet även när projektet saknar länkar */}
        <div className="pm-scroll" tabIndex={0} role="region" aria-label="Project details">
          <ProjectDetails project={project} Title={DialogTitle} Description={DialogDescription} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
