import * as d3 from "d3";
import s from "./SkillsBubble.module.css";
import { useTheme } from "../../context/ThemeContext";

const sizeScale = d3.scaleSqrt().domain([1, 5]).range([30, 70]);

const getCSSVar = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

interface SkillBubbleProps {
  name: string;
  level: number;
  x: number;
  y: number;
}

const SkillsBubble = ({ name, level, x, y }: SkillBubbleProps) => {
  const { theme } = useTheme();

  const colorScale = d3
    .scaleLinear<string>()
    .domain([1, 5])
    .range([
      theme === "dark" ? "#2a3800" : "#d4e87a",
      getCSSVar("--color-primary-main"),
    ]);

  const size = sizeScale(level);
  const color = colorScale(level);
  const textColor =
    level >= 3
      ? getCSSVar("--color-background")
      : getCSSVar("--color-primary-main");

  return (
    <div
      className={s.skillBubble}
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: color,
        color: textColor,
      }}
    >
      {name}
    </div>
  );
};

export default SkillsBubble;
