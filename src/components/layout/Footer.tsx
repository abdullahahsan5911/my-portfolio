import { portfolio } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col items-center gap-3 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          © {year} {portfolio.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <div className="flex gap-5 font-mono">
          <a href={portfolio.social.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href={portfolio.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href={`mailto:${portfolio.email}`} className="hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
