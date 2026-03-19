import s from "./ProjectCard.module.css";

export interface ProjectCardProps {
  type: string; // e.g. "Professional Work", "Personal Project"
  projectName: string;
  description: string;
  stack: string[]; // e.g. ["React", "TypeScript"]
  link: string; // URL to project or case study
  featured: boolean;
  image: string; // URL to project image (optional, can be added later)
}

const ProjectCard = ({
  type,
  projectName,
  description,
  stack,
  link,
  featured,
  image,
}: ProjectCardProps) => {
  return (
    <div className={s.projectCard + (featured ? " " + s.featured : "")}>
      <div className={s.projectType}>{type}</div>
      <div className={s.projectName}>{projectName}</div>
      <p className={s.projectDesc}>{description}</p>
      <img
        src={image}
        alt={`${projectName} screenshot`}
        className={s.projectImage}
      />
      <div className={s.projectStack}>
        {stack.map((tech, index) => (
          <span key={index} className={s.tag}>
            {tech}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={s.projectLink}
      >
        ↗
      </a>
    </div>
  );
};

export default ProjectCard;
