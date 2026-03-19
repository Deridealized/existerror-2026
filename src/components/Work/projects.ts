//import dftsTitle from "../../assets/images/DFTS/DFTS_V1full.png";
import achievement from "../../assets/images/DFTS/AchievementIcon_01.png";
import screenshot1 from "../../assets/images/DFTS/20250409103753_1.jpg";

type Project = {
  projectType: string; // e.g. "Professional Work", "Personal Project"
  projectName: string;
  description: string;
  stack: string[];
  link: string;
  featured: boolean;
  image: string;
};

export const projects: Project[] = [
  {
    projectType: "Game Development — Unity / C#",
    projectName: "Don't Forget to Smile",
    description: `A bullet-heaven survivors-like about breaking free in a post-capitalist, dystopian world. Feels a little too close to home.         
      Solo developed and released on Steam in 2025. An earth shaking 32 units sold in the first month! (Thanks Dad).`,
    stack: ["Unity", "C#", "Blender", "Adobe Suite", "FL Studio"],
    link: "https://store.steampowered.com",
    featured: true,
    image: screenshot1,
  },
  {
    projectType: "Professional Work — React",
    projectName: "Classified Client Portal",
    description: `Cannot disclose details of this project, but it involved building a secure client portal in the finance industry.
      I was responsible for the frontend development using React and TypeScript, ensuring a seamless user experience while adhering to financial industry standards.
      It's not classified, but it's proprietary, so I can't share more. Just know it was a big deal and I did a great job!`,
    stack: [
      "React",
      "TypeScript",
      "SQL",
      "AWS",
      "C#",
      "API",
      "Hasura",
      "Agile",
      "Vitest",
      "Git",
      "Jira",
      "Confluence",
      "Figma",
    ],
    link: "#",
    featured: false,
    image: achievement,
  },
  {
    projectType: "Professional Work — React",
    projectName: "Classified Client Portal",
    description: `Cannot disclose details of this project, but it involved building a secure client portal in the finance industry.
      I was responsible for the frontend development using React and TypeScript, ensuring a seamless user experience while adhering to financial industry standards.
      It's not classified, but it's proprietary, so I can't share more. Just know it was a big deal and I did a great job!`,
    stack: [
      "React",
      "TypeScript",
      "SQL",
      "AWS",
      "C#",
      "API",
      "Hasura",
      "Agile",
      "Vitest",
      "Git",
      "Jira",
      "Confluence",
      "Figma",
    ],
    link: "#",
    featured: false,
    image: achievement,
  },
  {
    projectType: "Professional Work — React",
    projectName: "Classified Client Portal",
    description: `Cannot disclose details of this project, but it involved building a secure client portal in the finance industry.
      I was responsible for the frontend development using React and TypeScript, ensuring a seamless user experience while adhering to financial industry standards.
      It's not classified, but it's proprietary, so I can't share more. Just know it was a big deal and I did a great job!`,
    stack: [
      "React",
      "TypeScript",
      "SQL",
      "AWS",
      "C#",
      "API",
      "Hasura",
      "Agile",
      "Vitest",
      "Git",
      "Jira",
      "Confluence",
      "Figma",
    ],
    link: "#",
    featured: false,
    image: achievement,
  },
  {
    projectType: "Professional Work — React",
    projectName: "Classified Client Portal",
    description: `Cannot disclose details of this project, but it involved building a secure client portal in the finance industry.
      I was responsible for the frontend development using React and TypeScript, ensuring a seamless user experience while adhering to financial industry standards.
      It's not classified, but it's proprietary, so I can't share more. Just know it was a big deal and I did a great job!`,
    stack: [
      "React",
      "TypeScript",
      "SQL",
      "AWS",
      "C#",
      "API",
      "Hasura",
      "Agile",
      "Vitest",
      "Git",
      "Jira",
      "Confluence",
      "Figma",
    ],
    link: "#",
    featured: false,
    image: achievement,
  },
];
