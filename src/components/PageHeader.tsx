export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-navy text-cream">
      <div className="container-content py-16 sm:py-20">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-4xl font-semibold text-cream sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/75">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
