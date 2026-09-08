import {
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiGithub,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiSocketdotio,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiPostman
} from "react-icons/si";
import type { IconType } from "react-icons";
import { Code2 } from "lucide-react";

const skillIcons: Record<string, IconType> = {
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  "REST APIs": SiSwagger,
  FastAPI: SiFastapi,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Firebase: SiFirebase,
  Redis: SiRedis,
  "Web Engineering": Code2,
  "JWT Auth": SiJsonwebtokens,
  "Socket.io": SiSocketdotio,
  "Git / GitHub": SiGithub,
  "Postman": SiPostman
};

export function SkillBadge({ label }: { label: string }) {
  const Icon = skillIcons[label] ?? Code2;

  return (
    <span
      title={label}
      aria-label={label}
      className="group relative inline-flex h-32 w-28 flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card text-foreground shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-xl sm:h-36 sm:w-32"
    >
      <Icon className="h-10 w-10 text-primary transition-all duration-500 group-hover:scale-125 group-hover:text-primary-foreground sm:h-12 sm:w-12" aria-hidden="true" />
      <span className="max-w-full truncate px-2 text-center font-mono text-[10px] uppercase tracking-wide text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground sm:text-xs">
        {label}
      </span>
    </span>
  );
}
