import React from "react";

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-header">
        <span className="section-num">02 /</span>
        <h2 className="section-title">
          What I <em>Build With</em>
        </h2>
      </div>

      <div className="skills-layout">
        <div className="skills-intro">
          <p>
            Frontend engineer with a bias toward
            <strong>interfaces that feel as good as they look.</strong>
          </p>
          <br />
          <p>
            I care about the gap between "it works" and
            <strong>"it's actually a pleasure to use."</strong>
            That gap is where most of my energy goes.
          </p>
          <br />
          <p style="color: #444;">
            The game dev background isn't a hobby footnote — it's where I
            learned that <strong>detail compounds.</strong>
          </p>
        </div>

        <div className="skills-categories">
          <div>
            <div className="skill-cat-title">Core</div>
            <div className="skill-list">
              <span className="skill-item">React</span>
              <span className="skill-item">TypeScript</span>
              <span className="skill-item">JavaScript (ES6+)</span>
              <span className="skill-item">HTML5</span>
              <span className="skill-item">CSS3 / SCSS</span>
            </div>
          </div>
          <div>
            <div className="skill-cat-title">Tooling & Testing</div>
            <div className="skill-list">
              <span className="skill-item">Vitest</span>
              <span className="skill-item">Git</span>
              <span className="skill-item">Figma</span>
              <span className="skill-item">Adobe XD</span>
            </div>
          </div>
          <div>
            <div className="skill-cat-title">Creative Suite</div>
            <div className="skill-list">
              <span className="skill-item">Photoshop</span>
              <span className="skill-item">Illustrator</span>
              <span className="skill-item">After Effects</span>
              <span className="skill-item">Premiere Pro</span>
              <span className="skill-item">Blender</span>
              <span className="skill-item">FL Studio</span>
            </div>
          </div>
          <div>
            <div className="skill-cat-title">Game Dev</div>
            <div className="skill-list">
              <span className="skill-item">Unity</span>
              <span className="skill-item">C#</span>
              <span className="skill-item">Game Systems Design</span>
              <span className="skill-item">3D Art Direction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
