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
    <section className="relative overflow-hidden bg-navy text-cream">
      {/* Même image de fond que la hero */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/hero-bg.jpg`}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Voile léger pour la lisibilité, image bien visible */}
      <div className="absolute inset-0 bg-navy/45" aria-hidden />

      <div className="container-content relative py-16 sm:py-20 [text-shadow:_0_2px_14px_rgba(8,16,33,0.7)]">
        {eyebrow && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-4xl font-semibold text-cream sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/90">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
