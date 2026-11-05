import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react';
import ProjectModal from './ProjectModal';
import ProjectImage from './ProjectImage';
import { projects, Project } from '../data/projects';
import { projectLinkLabel } from '../lib/links';

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
  onOpen: (project: Project) => void;
}

/** Kort för ett projekt som inte är klart än. Inget att klicka på – bara en försmak. */
const ComingSoonCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <article id={`project-${project.id}`} className="proj-card float proj-card--soon">
      <div className="proj-card__media soon-media" aria-hidden="true">
        <span className="soon-blob soon-blob--1" />
        <span className="soon-blob soon-blob--2" />
        <span className="soon-blob soon-blob--3" />
        <span className="soon-sketch">
          <span /><span /><span />
        </span>
      </div>
      <div className="proj-card__body">
        <span className="proj-card__cat soon-pill">
          <span className="soon-dot" aria-hidden="true" />
          {project.category}
        </span>
        <h3 className="proj-card__title">{project.title}</h3>
        <p className="proj-card__tagline">{project.tagline}</p>
      </div>
    </article>
  </motion.div>
);

const ProjectCard = ({ project, index, featured, onOpen }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <article
      id={`project-${project.id}`}
      data-scroll-target
      className={`proj-card ${featured ? 'proj-card--featured' : 'float'}`}
    >
      <div className="proj-card__media">
        <ProjectImage project={project} />
      </div>
      <div className="proj-card__body">
        <span className="proj-card__cat">{project.category}</span>
        <h3 className="proj-card__title">{project.title}</h3>
        <p className="proj-card__tagline">{project.tagline}</p>
        <div className="proj-card__actions">
          {project.projectLink ? (
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              {projectLinkLabel(project.projectLink)}
              <span className="sr-only">: {project.title} (opens in a new tab)</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ) : (
            <span />
          )}
          {/* Klick var som helst på kortet = Read more (öppnar projektinfon) */}
          <button type="button" className="proj-card__btn proj-card__more" onClick={() => onOpen(project)}>
            Read more
            <span className="sr-only"> about {project.title}</span>
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  </motion.div>
);

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const favorites = projects.filter((p) => p.favorite);
  const others = projects.filter((p) => !p.favorite);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const intro = "A few projects I'm especially proud of.";

  return (
    <section id="projects" className="sec py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {favorites.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="float fav-panel"
          >
            <header className="proj-head">
              <p className="proj-eyebrow">
                <Star fill="currentColor" aria-hidden="true" />
                My favorites
              </p>
              <h2>Selected work</h2>
              <p>{intro}</p>
            </header>
            <div className={`proj-grid ${favorites.length % 3 === 0 ? 'proj-grid--3' : ''}`}>
              {favorites.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} featured onOpen={openModal} />
              ))}
            </div>
          </motion.div>
        )}

        {others.length > 0 && (
          <div className={favorites.length > 0 ? 'proj-others' : ''}>
            <motion.header
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="proj-head"
            >
              <h2 className="section-title">{favorites.length > 0 ? 'Other projects' : 'Selected projects'}</h2>
              {favorites.length === 0 && <p>{intro}</p>}
            </motion.header>
            <div className="proj-grid proj-grid--3">
              {others.map((project, index) =>
                project.comingSoon ? (
                  <ComingSoonCard key={project.id} project={project} index={index} />
                ) : (
                  <ProjectCard key={project.id} project={project} index={index} onOpen={openModal} />
                )
              )}
            </div>
          </div>
        )}

        <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </section>
  );
};

export default ProjectsSection;
