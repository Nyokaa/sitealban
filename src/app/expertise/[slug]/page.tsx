import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { expertises, getExpertise } from "@/data/expertises";

export function generateStaticParams() {
  return expertises.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const e = getExpertise(params.slug);
  if (!e) return { title: "Expertise" };
  return { title: e.title, description: e.excerpt };
}

export default function ExpertiseDetail({
  params,
}: {
  params: { slug: string };
}) {
  const e = getExpertise(params.slug);
  if (!e) notFound();

  const autres = expertises.filter((x) => x.slug !== e.slug).slice(0, 4);

  return (
    <>
      <PageHeader eyebrow="Expertise" title={e.title} description={e.excerpt} />

      <section className="container-content py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="prose-notaire">
              <p>{e.description}</p>
            </div>

            <h2 className="mt-10 text-2xl font-semibold text-navy">
              Notre accompagnement
            </h2>
            <ul className="mt-5 space-y-3">
              {e.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-3 rounded-lg border border-navy/10 bg-white p-4"
                >
                  <span className="mt-0.5 text-gold">✦</span>
                  <span className="text-ink/80">{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold">
                Parler de mon projet
              </Link>
              <Link href="/expertise" className="btn-outline">
                Toutes les expertises
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-2xl bg-cream-dark p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
                Autres expertises
              </h3>
              <ul className="mt-4 space-y-2">
                {autres.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/expertise/${a.slug}`}
                      className="flex items-center justify-between gap-2 rounded-lg bg-white px-4 py-3 text-sm text-navy transition-colors hover:text-gold"
                    >
                      {a.title}
                      <span className="text-gold">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
