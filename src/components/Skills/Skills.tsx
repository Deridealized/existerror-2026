import { skills } from "./skillsListed.ts";
import s from "./Skills.module.css";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <div className={s.sectionHeader}>
          <span className={s.sectionNum}>02 /</span>
          <h2 className={s.sectionTitle}>
            What I <em>Build With</em>
          </h2>
        </div>

        <div className={s.skillsLayout}>
          <div className={s.skillsIntro}>
            <p>
              {`Frontend engineer with a bias toward `}
              <strong>interfaces that feel as good as they look.</strong>
            </p>
            <br />
            <p>
              {`I care about the gap between "it works" and `}
              <strong>"it's actually a pleasure to use." </strong>
              That gap is where most of my energy goes.
            </p>
            <br />
            <p>
              The game dev background isn't a hobby footnote — it's where I
              learned that <strong>detail compounds</strong> and{" "}
              <strong>scalability and maintainability</strong> aren't just
              buzzwords.
            </p>
          </div>

          <div className={s.skillsCategories}>
            {skills.map((skillCategory, index) => (
              <div key={index}>
                <div className={s.skillCatTitle}>{skillCategory.category}</div>
                <div className={s.skillList}>
                  {skillCategory.items.map((item, itemIndex) => (
                    <span key={itemIndex} className={s.skillItem}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
