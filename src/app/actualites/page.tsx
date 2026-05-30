import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Suivez les dernières actualités juridiques, fiscales et immobilières de notre étude notariale.",
};

export default function ActualitesPage() {
  const tries = [...articles].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHeader
        eyebrow="Actualités"
        title="Les dernières informations juridiques"
        description="Réformes, fiscalité, immobilier, famille : nos notaires décryptent l'actualité qui concerne vos projets."
      />

      <section className="container-content py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tries.map((a) => (
            <Link
              key={a.slug}
              href={`/actualites/${a.slug}`}
              className="group flex flex-col rounded-xl border border-navy/10 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                {a.category}
              </span>
              <h2 className="mt-3 flex-1 font-serif text-xl text-navy group-hover:text-gold">
                {a.title}
              </h2>
              <p className="mt-3 text-sm text-ink/70 line-clamp-3">{a.excerpt}</p>
              <time className="mt-4 text-xs text-ink/50">
                {new Date(a.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
