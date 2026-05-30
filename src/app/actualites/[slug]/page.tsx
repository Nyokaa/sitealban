import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import { articles, getArticle } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const a = getArticle(params.slug);
  if (!a) return { title: "Actualité" };
  return { title: a.title, description: a.excerpt };
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const a = getArticle(params.slug);
  if (!a) notFound();

  return (
    <>
      <PageHeader eyebrow={a.category} title={a.title} />

      <article className="container-content py-16">
        <time className="text-sm text-ink/50">
          {new Date(a.date).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
        <div className="prose-notaire mt-6 max-w-3xl">
          {a.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/actualites" className="btn-outline">
            ← Retour aux actualités
          </Link>
        </div>
      </article>

      <CtaBanner />
    </>
  );
}
