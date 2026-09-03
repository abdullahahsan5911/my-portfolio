export type SkillGroup = {
  group: string;
  items: string[];
};

// Grouped by where each technology is used (LinkedIn top skills + summary,
// plus technologies verified from the project docs above).
export const skills: SkillGroup[] = [
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"]
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "REST APIs", "FastAPI"]
  },
  {
    group: "Databases & Cache",
    items: ["MongoDB", "PostgreSQL", "Firebase", "Redis"]
  },
  {
    group: "Other",
    items: ["Web Engineering", "JWT Auth", "Socket.io", "Git / GitHub"]
  }
];
