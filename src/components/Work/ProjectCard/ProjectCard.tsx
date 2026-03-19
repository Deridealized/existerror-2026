import s from "./ProjectCard.module.css";

export interface ProjectCardProps {
  type: string;
  projectName: string;
  description: string;
  stack: string[];
  link: string;
  featured: boolean;
  image: string;
  subtitle: string;
  linkIcon?: string;
}

const ProjectCard = ({
  type,
  projectName,
  description,
  stack,
  link,
  featured,
  image,
  subtitle,
  linkIcon,
}: ProjectCardProps) => {
  return (
    <div className={s.projectCard + (featured ? " " + s.featured : "")}>
      <div>
        {featured && <div className={s.featuredBadge}>Commercial Release</div>}

        <div className={s.projectType}>{type}</div>
        <div className={s.projectName}>
          {projectName}
          <div className={s.projectSubtitle}>{subtitle}</div>
        </div>

        <p className={s.projectDesc}>{description}</p>

        <div className={s.projectStack}>
          {stack.map((tech, index) => (
            <span key={index} className={s.tag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className={featured ? s.featuredVisual : ""}>
        <img
          src={image}
          alt={`${projectName} screenshot`}
          className={s.projectImage}
        />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={s.projectArrow}
        >
          {linkIcon ? (
            <img src={linkIcon} alt="Link Icon" className={s.linkIcon} />
          ) : (
            "↗"
          )}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
