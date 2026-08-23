import { useEffect, useRef, useState } from "react";
import s from "./Hero.module.css";
import { heroTiles } from "./heroTileInfo.ts";

const CV_OPTIONS = [
  { label: "C#", file: "/JHey_CSWE_2026-pdf.pdf" },
  { label: "Frontend", file: "/JHey_FESWE_2026.pdf" },
  { label: "Game Dev / Design", file: "/JHey_GD_2026.pdf" },
];

const Hero = () => {
  const [cvOpen, setCvOpen] = useState(false);
  const cvRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (cvRef.current && !cvRef.current.contains(e.target as Node)) {
        setCvOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={s.hero}>
      <div className={s.heroBgText}>BOTH</div>

      <div className={s.heroMain}>
        <div className={s.heroTag + " " + s.fadeUp}>Engineer. Designer.</div>
        <h1 className={s.delay1}>
          <span className={s.nameLineA}>JAMIE</span>
          <span className={s.nameLineB}>HEY.</span>
        </h1>
        <p className={s.heroRole + " " + s.fadeUp + " " + s.delay2}>
          Web Dev. React. C#.
          <br />
          VFX. Unity Game Developer.
          <br />
          Adobe veteran.
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
          <div className={s.statusSub}>Frontend / Games / Creative Tech</div>
        </div>
        <div className={s.statusBlock} data-label="Current Focus">
          <div className={s.statusValue}>Dev / Design</div>
          <div className={s.statusSub}>Mid Level Positions</div>
        </div>
      </div>

      <div className={s.heroBottom + " " + s.fadeUp + " " + s.delay4}>
        <div className={s.heroStats}>
          {heroTiles.map((tile, index) => (
            <div key={index} className={s.stat}>
              <div className={s.statNum}>{tile.stat}</div>
              <div className={s.statLabel}>{tile.statLabel}</div>
            </div>
          ))}
        </div>

        <div className={s.scrollHint}>
          There's more<span className={s.scrollArrow}>↓</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
