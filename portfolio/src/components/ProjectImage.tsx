import { ImageWithFallback } from './figma/ImageWithFallback';
import { Project } from '../data/projects';

// Visar projektets bild, eller en neutral platshållare om ingen bild är satt än.
const ProjectImage = ({ project, className }: { project: Project; className?: string }) => {
  if (!project.image) {
    return (
      <div className={`pf-placeholder ${className ?? ''}`} role="img" aria-label={project.title}>
        {project.title.split(/ [-–] /)[0]}
      </div>
    );
  }
  return <ImageWithFallback src={project.image} alt={project.title} className={className} />;
};

export default ProjectImage;
