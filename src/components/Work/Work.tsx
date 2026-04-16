import { useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import s from "./Work.module.css";
import { projects } from "./projects";
import { vfxReels } from "../../data/vfxReels";

type Category = "swe" | "vfx" | "game";

const TABS: { id: Category; label: string }[] = [
  { id: "swe", label: "Software" },
  { id: "vfx", label: "VFX" },
  { id: "game", label: "GAME" },
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("swe");

  const filtered = projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <section id="work">
        <div className={s.sectionHeader}>
          <span className={s.sectionNum}>01 /</span>
          <h2 className={s.sectionTitle}>
            Selected <em>Work</em>
          </h2>
        </div>

        <div className={s.tabBar}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`${s.tabBtn} ${activeCategory === tab.id ? s.tabBtnActive : ""}`}
              onClick={() => setActiveCategory(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <br />
        <div className={s.vfxLabel}>
          Hover (or tap on mobile) for more information!
        </div>
        <br />

        {activeCategory === "vfx" ? (
          <div className={s.vfxGrid}>
            {vfxReels.map((reel, i) => (
              <div key={i} className={s.vfxCell}>
                <video src={reel.src} autoPlay loop muted playsInline />
                <div className={s.vfxOverlay}>
                  <span className={s.vfxLabel}>{reel.label}</span>
                  {reel.description && (
                    <span className={s.vfxDesc}>{reel.description}</span>
                  )}
                </div>
              </div>
            ))}
            {vfxReels.length === 0 && (
              <p className={s.emptyState}>
                No reels here yet — check back soon.
              </p>
            )}
          </div>
        ) : (
          <div className={s.projectsGrid}>
            {filtered.map((project, index) => (
              <ProjectCard
                key={index}
                type={project.projectType}
                projectName={project.projectName}
                subtitle={project.subtitle}
                description={project.description}
                stack={project.stack}
                link={project.link}
                featured={project.featured}
                images={project.images}
                linkIcon={project.linkIcon}
                badgeText={project.badgeText}
                extraCredit={project.extraCredit}
              />
            ))}
            {filtered.length === 0 && (
              <p className={s.emptyState}>
                No projects here yet — check back soon.
              </p>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default Work;
