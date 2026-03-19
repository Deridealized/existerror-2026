//import dftsTitle from "../../assets/images/DFTS/DFTS_V1full.png";
import achievement from "../../assets/images/DFTS/AchievementIcon_01.png";
import screenshot1 from "../../assets/images/DFTS/20250409103753_1.jpg";
import corpay from "../../assets/Images/Generic/corpay_01.png";
import steam from "../../assets/Images/Generic/steam.png";

type Project = {
  projectType: string; // e.g. "Professional Work", "Personal Project"
  projectName: string;
  description: string;
  stack: string[];
  link: string;
  featured: boolean;
  image: string;
  subtitle: string;
  linkIcon?: string;
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
    linkIcon: steam,
  },
  {
    projectType: "Professional Work — React / TypeScript",
    projectName: "Client Portal",
    subtitle: "Classified",
    description: `Building a secure client portal in the finance industry, upgrading a dated system from Hugo to React.
      I was part of the frontend team using React and TypeScript, ensuring a seamless user experience while adhering to financial industry standards.
      C# microservices and API's, hasura data layer, AWS infrastructure, and agile methodologies were also part of the stack.
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
    image: corpay,
  },
  {
    projectType: "Game Development — Unity / C#",
    projectName: "Don't Forget to Smile 2",
    subtitle: "Existerror Digital",
    description: `3D Sequel to Don't Forget to Smile, currently in development.
    This time I'm taking the survivors formula and giving it a fresh twist with 3D graphics and more complex mechanics.`,
    stack: ["Unity", "C#", "Blender", "Adobe Suite", "FL Studio"],
    link: "#",
    featured: false,
    image: achievement,
  },
];
