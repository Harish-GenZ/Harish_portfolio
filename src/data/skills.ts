export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Java", "Python", "SQL"]
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Isolation Forest",
      "Computer Vision",
      "InsightFace",
      "LLM / Agent Development",
      "NLP"
    ]
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "TypeScript", "Figma", "Tailwind CSS"]
  },
  {
    title: "Backend & Infrastructure",
    skills: ["FastAPI", "Node.js", "PostgreSQL", "Socket.IO"]
  },
  {
    title: "Core Competencies",
    skills: ["Critical Thinking", "Rapid Prototyping", "Vibe Coding", "Problem Solving"]
  }
];
