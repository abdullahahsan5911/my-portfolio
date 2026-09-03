type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
};

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b border-border pb-5 sm:mb-14">
      <span className="font-mono text-sm text-muted-foreground">{index}</span>
      <div>
        <h2 className="font-display text-2xl font-medium sm:text-3xl">{title}</h2>
        {description ? (
          <p className="mt-2 max-w-prose text-sm text-muted-foreground sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}