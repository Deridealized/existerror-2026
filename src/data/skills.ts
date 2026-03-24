export interface Skill {
  name: string;
  category: string;
  level: 1 | 2 | 3 | 4 | 5;
}

export const skills: Skill[] = [
  // FE
  { name: "React", category: "Frontend", level: 5 },
  { name: "TypeScript", category: "Frontend", level: 4 },
  { name: "C#", category: "Backend", level: 5 },
  { name: "JavaScript", category: "Frontend", level: 4 },
  { name: "HTML/CSS", category: "Frontend", level: 4 },

  // BE
  { name: "SQL", category: "Backend", level: 2 },
  { name: "GraphQL", category: "Backend", level: 2 },

  // Engineering Principles
  { name: "SOLID Principles", category: "Engineering", level: 3 },
  { name: "Design Patterns", category: "Engineering", level: 3 },
  { name: "Unit Testing", category: "Engineering", level: 3 },
  { name: "Agile ", category: "Engineering", level: 5 },

  // Tooling
  { name: "Git", category: "Tooling", level: 5 },
  { name: "Vitest", category: "Tooling", level: 2 },
  { name: "Figma", category: "Tooling", level: 3 },
  { name: "Postman", category: "Tooling", level: 2 },
  { name: "AI", category: "Tooling", level: 4 },

  // Communication
  { name: "Jira", category: "Communication", level: 4 },
  { name: "Miro", category: "Communication", level: 4 },

  // Creative
  { name: "Unity", category: "Creative", level: 5 },
  { name: "Photoshop", category: "Creative", level: 5 },
  { name: "Illustrator", category: "Creative", level: 4 },
  { name: "After Effects", category: "Creative", level: 4 },
  { name: "Premiere Pro", category: "Creative", level: 1 },
  { name: "Blender", category: "Creative", level: 2 },
  { name: "FL Studio", category: "Creative", level: 2 },
];
