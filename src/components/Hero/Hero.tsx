import s from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={s.hero}>
      <div className={s.heroBgText}>BOTH</div>

      <div className={s.heroMain}>
        <div className={s.heroTag + " " + s.fadeUp}>
          Engineer. Designer. Available.
        </div>
        <h1 className={s.delay1}>
          <span className={s.nameLineA}>JAMIE</span>
          <span className={s.nameLineB}>HEY.</span>
        </h1>
        <p className={s.heroRole + " " + s.fadeUp + " " + s.delay2}>
          UI/UX that people actually want to use.
          <br />
          React specialist. C# developer.
          <br />
          Game Developer. Adobe enthusiast.
        </p>
        <div className={s.heroCta + " " + s.fadeUp + " " + s.delay3}>
          <a href="#work" className={s.btnPrimary}>
            View Work
          </a>
          <a href="#contact" className={s.btnSecondary}>
            Get in touch →
          </a>
        </div>
      </div>

      <div className={s.heroRight + " " + s.fadeUp + " " + s.delay2}>
        <div className={s.statusBlock} data-label="Status">
          <div className={s.statusValue}>
            <span className={s.availabilityDot}></span>Open to Roles
          </div>
          <div className={s.statusSub}>Frontend / Design — Tamworth, UK</div>
        </div>
        <div className={s.statusBlock} data-label="Current Focus">
          <div className={s.statusValue}>Interactive / Games</div>
          <div className={s.statusSub}>Mid Level Positions</div>
        </div>
      </div>

      <div className={s.heroBottom + " " + s.fadeUp + " " + s.delay4}>
        <div className={s.heroStats}>
          <div className={s.stat}>
            <div className={s.statNum}>3+</div>
            <div className={s.statLabel}>Years Experience</div>
          </div>
          <div className={s.stat}>
            <div className={s.statNum}>1</div>
            <div className={s.statLabel}>Commercial Release</div>
          </div>
          <div className={s.stat}>
            <div className={s.statNum}>∞</div>
            <div className={s.statLabel}>Ideas</div>
          </div>
        </div>
        <div className={s.scrollHint}>
          Scroll to explore <span className={s.scrollArrow}>↓</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
