export function SkillBadge({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-border bg-card px-3 py-1.5 text-sm text-foreground">
      {label}
    </span>
  );
}
