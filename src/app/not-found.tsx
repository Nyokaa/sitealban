import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-content flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">Erreur 404</p>
      <h1 className="mt-4 text-4xl font-semibold text-navy">
        Cette page est introuvable
      </h1>
      <p className="mt-4 max-w-md text-ink/70">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link href="/" className="btn-gold mt-8">
        Retour à l&apos;accueil
      </Link>
    </section>
  );
}
