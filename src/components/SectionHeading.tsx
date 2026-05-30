export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 leading-relaxed text-ink/70">{description}</p>
      )}
    </div>
  );
}
