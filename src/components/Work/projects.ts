//import dftsTitle from "../../assets/images/DFTS/DFTS_V1full.png";
//import achievement from "../../assets/images/DFTS/AchievementIcon_01.png";
import screenshot1 from "../../assets/Images/DFTS/20250409103753_1.jpg";
import corpay from "../../assets/Images/Generic/corpay_01.png";
//import steam from "../../assets/Images/Generic/steam.png";
import portfolio from "../../assets/Images/Generic/portfolio-01.png";
import dfts2 from "../../assets/Images/Generic/dfts2-01.png";

type Project = {
  projectType: string;
  projectName: string;
  description: string;
  stack: string[];
  link: string;
  featured: boolean;
  image: string;
  subtitle: string;
  linkIcon?: string;
  badgeText?: string;
  extraCredit?: ExtraCredit;
};

export type ExtraCredit = {
  label: string;
  link: string;
};

export const projects: Project[] = [
  {
    projectType: "Game Development — Unity / C#",
    projectName: "Don't Forget to Smile",
    subtitle: "existerror digital",
    description: `A bullet-heaven survivors-like about breaking free in a post-capitalist, dystopian world. Feels a little too close to home.         
      Solo developed and released on Steam in 2025. An earth shaking 32 units sold in the first month! (Thanks Dad).`,
    stack: [
      "Unity",
      "C#",
      "Blender",
      "Photoshop",
      "Illustrator",
      "After Effects",
      "Media Encoder",
      "FL Studio",
      "Solo Dev",
      "Steam",
    ],
    link: "https://store.steampowered.com/app/3579390/Dont_Forget_to_Smile/",
    featured: true,
    image: screenshot1,
    linkIcon: "",
    badgeText: "Steam Release",
    extraCredit: {
      label: "Audio: Frank Bramble",
      link: "https://www.flowcode.com/page/frankbramble",
    },
  },
  {
    projectType: "Professional Work — React / TypeScript",
    projectName: "Client Portal",
    subtitle: "Classified",
    description: `I've been with Corpay for 3 years. After passing my apprenticeship, I joined the team on building a secure client portal.
      Initially upgrading a dated system from Hugo to React, we now maintain and enhance the portal, ensuring it meets the needs of our clients and stakeholders.
      Adhering to financial industry standards, using C# microservices and API's, hasura data layer, AWS infrastructure, and agile methodologies.
      It's not classified, but it's proprietary, so I can't share more. Just know it's a big deal.`,
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
    image: corpay,
    badgeText: "In Production",
  },
  {
    projectType: "Game Development — Unity / C#",
    projectName: "Don't Forget to Smile 2",
    subtitle: "Existerror Digital",
    description: `3D Sequel to Don't Forget to Smile, currently in development.
    This time I'm taking the survivors formula and giving it a fresh twist with 3D graphics and more complex mechanics.`,
    stack: ["Unity", "C#", "Blender", "Adobe Suite", "FL Studio"],
    link: "",
    featured: false,
    image: dfts2,
    badgeText: "In Development",
  },
  {
    projectType: "Website — React / TypeScript",
    projectName: "This Portfolio",
    subtitle: "",
    description: `React frontend with TypeScript, built from scratch. I wanted to create a personal portfolio that showcased my work and skills in a brutalist and distinctive way.
    It is also a playground for me to experiment with new technologies and design trends, 
    while also being a reflection of my personal brand and style. The design is minimalistic and inkeeping with the themes and aesthetics of my game projects.`,
    stack: [
      "React",
      "TypeScript",
      "CSS Modules",
      "Vite",
      "Git",
      "React Router",
      "Data Driven",
    ],
    link: "",
    featured: false,
    image: portfolio,
    linkIcon: "",
  },
];
