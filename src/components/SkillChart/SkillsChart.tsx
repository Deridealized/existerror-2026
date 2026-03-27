import SkillsBubble from "./SkillsBubble";
import { skills } from "../../data/skills";
import s from "./SkillsChart.module.css";
import * as d3 from "d3";
import { useState, useEffect, useRef } from "react";

interface SimulatedSkill {
  name: string;
  level: number;
  category: string;
  x: number;
  y: number;
}

const sizeScale = d3.scaleSqrt().domain([1, 5]).range([30, 70]);

const SkillsChart = () => {
  const [nodes, setNodes] = useState<SimulatedSkill[]>([]);
  const [height, setHeight] = useState(200);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;

    const runSimulation = (width: number) => {
      const edgePad = 80;
      const calculatedHeight = Math.max(width * 0.75, 380);
      setHeight(calculatedHeight);

      const data = skills.map((skill) => ({
        ...skill,
        x: width / 2,
        y: calculatedHeight / 2,
      }));

      const simulation = d3
        .forceSimulation(data)
        .force("charge", d3.forceManyBody().strength(20))
        .force("center", d3.forceCenter(width / 2, calculatedHeight / 2))
        .force("x", d3.forceX(width / 2).strength(0.5))
        .force("y", d3.forceY(calculatedHeight / 2).strength(0.3))
        .force(
          "collision",
          d3.forceCollide((d) => sizeScale(d.level) / 2 + 4),
        )
        .force("boundary", () => {
          for (const d of data) {
            d.x = Math.max(edgePad, Math.min(width - edgePad, d.x ?? width / 2));
            d.y = Math.max(edgePad, Math.min(calculatedHeight - edgePad, d.y ?? calculatedHeight / 2));
          }
        })
        .stop();

      let i = 0;
      while (simulation.alpha() > simulation.alphaMin() && i < 500) {
        simulation.tick();
        i++;
      }

      if (!cancelled) setNodes([...data]);
    };

    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      if (width > 0) runSimulation(width);
    });

    observer.observe(container);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className={s.mainChart} style={{ height }}>
      {nodes.map((node, index) => (
        <SkillsBubble
          key={index}
          name={node.name}
          level={node.level}
          x={node.x}
          y={node.y}
        />
      ))}
    </div>
  );
};

export default SkillsChart;
