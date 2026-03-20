import ProjectCard from "./ProjectCard/ProjectCard";
import s from "./Work.module.css";
import { projects } from "./projects";

const Work = () => {
  return (
    <>
      <section id="work">
        <div className={s.sectionHeader}>
          <span className={s.sectionNum}>01 /</span>
          <h2 className={s.sectionTitle}>
            Selected <em>Work</em>
          </h2>
        </div>

        <div className={s.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              type={project.projectType}
              projectName={project.projectName}
              subtitle={project.subtitle}
              description={project.description}
              stack={project.stack}
              link={project.link}
              featured={project.featured}
              image={project.image}
              linkIcon={project.linkIcon}
              badgeText={project.badgeText}
              extraCredit={project.extraCredit}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Work;
