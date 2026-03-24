import s from "./About.module.css";

const About = () => {
  return (
    <>
      <section id="skills">
        <div className={s.sectionHeader}>
          <span className={s.sectionNum}>03 /</span>
          <h2 className={s.sectionTitle}>
            Who <em>am I?</em>
          </h2>
        </div>

        <div className={s.skillsLayout}>
          <div className={s.skillsIntro}>
            <p>
              My name is Jamie, and I'm a software developer with a background
              in graphic design, animation, film making, and a life long love of
              game development.
            </p>
            <br />
            <p>
              I have a wife and two kids. Which removes a lot of time I could be
              spent creating; but I wouldn't have it any other way. We live in a
              quiet village in the midlands.
            </p>
            <br />
            <p>
              I have too many board games, a Steam library I'll never finish and
              a motorbike that I don't get time to ride. I love Download
              festival, and I sometimes spend my weekends playing Airsoft.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
