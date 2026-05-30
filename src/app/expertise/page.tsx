import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { expertises } from "@/data/expertises";

export const metadata: Metadata = {
  title: "Nos expertises",
  description:
    "Immobilier, famille, entreprise, droit international, patrimoine… Découvrez l'ensemble des domaines d'expertise de notre étude notariale.",
};

export default function ExpertisesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos domaines"
        title="Des expertises au service de tous vos projets"
        description="De l'immobilier à la transmission de patrimoine, notre étude couvre l'ensemble des besoins juridiques des particuliers, des entreprises et des institutions."
      />

      <section className="container-content py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertises.map((e) => (
            <Link
              key={e.slug}
              href={`/expertise/${e.slug}`}
              className="group flex flex-col rounded-xl border border-navy/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-md"
            >
              <h2 className="font-serif text-2xl text-navy group-hover:text-gold">
                {e.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                {e.excerpt}
              </p>
              <span className="mt-5 text-sm font-semibold text-gold">
                Découvrir →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
