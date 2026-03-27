//import dftsTitle from "../../assets/images/DFTS/DFTS_V1full.png";
//import achievement from "../../assets/images/DFTS/AchievementIcon_01.png";
import screenshot1 from "../../assets/Images/DFTS/20250409103753_1.jpg";
import screenshot2 from "../../assets/Images/DFTS/20250409104411_1.jpg";
import screenshot3 from "../../assets/Images/DFTS/20250409103528_1.jpg";
import screenshot4 from "../../assets/Images/DFTS/20250409104414_1.jpg";
import screenshot5 from "../../assets/Images/DFTS/20250409105029_1.jpg";
import screenshot6 from "../../assets/Images/DFTS/screenshotBoss_01.jpg";
import screenshot7 from "../../assets/Images/DFTS/screenshotUI_01.jpg";
import screenshot8 from "../../assets/Images/DFTS/screenshotUI_02.jpg";
import screenshot9 from "../../assets/Images/DFTS/screenshotUI_03.jpg";
import screenshot10 from "../../assets/Images/DFTS/screenshotUI_04.jpg";

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
  images: string[];
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
      "FMOD",
      "FL Studio",
      "Solo Dev",
      "Steam",
    ],
    link: "https://store.steampowered.com/app/3579390/Dont_Forget_to_Smile/",
    featured: true,
    images: [
      screenshot1,
      screenshot2,
      screenshot3,
      screenshot4,
      screenshot5,
      screenshot6,
      screenshot7,
      screenshot8,
      screenshot9,
      screenshot10,
    ],
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
      
      Adhering to financial industry standards, serving over 100,000 users, using C# microservices and API's, hasura data layer, AWS infrastructure, and agile methodologies. A key feature that I implemented was the sidebar navigation, replacing the dated horizontal nav and improved user experience and site scalability.
      
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
    images: [corpay],
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
    images: [dfts2],
    badgeText: "In Development",
  },
  {
    projectType: "Website — React / TypeScript",
    projectName: "This Portfolio",
    subtitle: "",
    description: `React frontend with TypeScript, built from scratch. I wanted to create a personal portfolio that showcased my work and skills in a brutalist and distinctive way.
    
    It is also a playground for me to experiment with new technologies and design trends, while also being a reflection of my personal brand and style. The design is minimalistic and inkeeping with the themes and aesthetics of my game projects.`,
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
    images: [portfolio],
    linkIcon: "",
  },
  {
    projectType: "Thoughts",
    projectName: "AI & The Creative Industry",
    subtitle: "",
    description: `I'm pro-AI as a tool, but I think the conversation needs more nuance than it usually gets.

Code generation doesn't bother me — code is a language, a means to an end. Using Claude or Copilot to write boilerplate or work through a problem is no different to using Stack Overflow or reading docs. The craft is still in the decisions you make.

AI imagery is a different story. Visual art is expression — it carries intention, culture, and hours of a person's life. Generated images flatten that into pattern recognition. Useful in some contexts, but let's not pretend it's the same thing.

In practice: I use Claude Code and Copilot for administrative and repetitive tasks, and this portfolio is an active experiment in what Claude Code can do as a collaborative engineering tool. I write the vision, it helps execute. The line of authorship stays clear.`,
    stack: [],
    link: "",
    featured: false,
    images: [],
    linkIcon: "",
  },
  {
    projectType: "Notes",
    projectName: "Planned for this site",
    subtitle: "",
    description: `• Framer Motion page transitions
                  • Case study pages for projects
                  • Interactive DFTS experience
                  • GitHub activity feed: add Vercel serverless function.
                  • Blog/devlog — markdown powered, write about building DFTS and the portfolio.                  
                  • Steam API stats — live review scores and playtime on the DFTS card.`,
    stack: [],
    link: "",
    featured: false,
    images: [],
    linkIcon: "",
  },
];
