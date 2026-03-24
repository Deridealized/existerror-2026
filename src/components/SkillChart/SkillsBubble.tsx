import * as d3 from "d3";
import s from "./SkillsBubble.module.css";

const sizeScale = d3.scaleSqrt().domain([1, 5]).range([30, 70]);
const colorScale = d3
  .scaleLinear<string>()
  .domain([1, 5])
  .range(["#2a3800", "#c8f000"]);

interface SkillBubbleProps {
  name: string;
  level: number;
  x: number;
  y: number;
}

const SkillsBubble = ({ name, level, x, y }: SkillBubbleProps) => {
  const size = sizeScale(level);
  const color = colorScale(level);

  return (
    <div
      className={s.skillBubble}
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: color,
        color: level >= 3 ? "#0a0a0a" : "#c8f000",
      }}
    >
      {name}
    </div>
  );
};

export default SkillsBubble;
