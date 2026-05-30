import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Honoraires",
  description:
    "Comprendre les frais de notaire : émoluments réglementés, droits et taxes, honoraires de conseil et de négociation. Transparence et information.",
};

const composition = [
  {
    title: "Émoluments réglementés",
    text: "Rémunération du notaire fixée par l'État selon un barème national dégressif. Identiques dans toutes les études de France.",
  },
  {
    title: "Droits et taxes",
    text: "Sommes collectées par le notaire pour le compte de l'État et des collectivités (droits de mutation, TVA, taxe de publicité foncière).",
  },
  {
    title: "Débours & formalités",
    text: "Sommes avancées par le notaire pour le compte du client (documents d'urbanisme, géomètre, état civil, copies…).",
  },
  {
    title: "Honoraires de conseil",
    text: "Pour les prestations non tarifées (consultations, montages complexes), des honoraires libres peuvent s'appliquer, communiqués à l'avance.",
  },
];

export default function HonorairesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Honoraires"
        title="Une rémunération transparente et réglementée"
        description="Les « frais de notaire » sont, pour leur très grande majorité, composés de taxes reversées à l'État. Voici comment ils se décomposent."
      />

      <section className="container-content py-16">
        <h2 className="text-2xl font-semibold text-navy">
          De quoi se composent les frais ?
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {composition.map((c) => (
            <div key={c.title} className="rounded-xl border border-navy/10 bg-white p-6">
              <h3 className="text-lg font-semibold text-navy">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-navy p-8 text-cream sm:p-10">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <p className="eyebrow">Bon à savoir</p>
              <h3 className="mt-3 font-serif text-2xl text-cream">
                Deux notaires ne coûtent pas plus cher
              </h3>
              <p className="mt-3 text-cream/75">
                Lorsque vendeur et acquéreur ont chacun leur notaire, les
                émoluments sont fixes et simplement partagés entre les études.
                Vous bénéficiez d&apos;un double conseil sans surcoût.
              </p>
            </div>
            <div className="rounded-xl bg-cream/5 p-6">
              <p className="text-cream/80">
                Pour obtenir une estimation immédiate du coût de votre
                acquisition, utilisez notre simulateur en ligne.
              </p>
              <Link href="/outils" className="btn-gold mt-5">
                Estimer mes frais d&apos;acquisition
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-ink/60">
          Pour toute prestation soumise à honoraires libres, un devis vous est
          communiqué avant le début de la mission. N&apos;hésitez pas à{" "}
          <Link href="/contact" className="font-semibold text-gold">
            nous contacter
          </Link>{" "}
          pour une estimation personnalisée.
        </p>
      </section>

      <CtaBanner />
    </>
  );
}
