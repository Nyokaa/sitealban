import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import SimulateurFrais from "@/components/SimulateurFrais";

export const metadata: Metadata = {
  title: "Outils & Simulateurs",
  description:
    "Simulateur de frais d'acquisition immobilière et outils juridiques pour préparer vos projets en toute transparence.",
};

const aVenir = [
  {
    title: "Simulateur de droits de succession",
    text: "Estimez les droits dus selon le lien de parenté et le montant transmis.",
  },
  {
    title: "Simulateur de plus-value immobilière",
    text: "Calculez la plus-value imposable lors de la revente d'un bien.",
  },
  {
    title: "Simulateur de capacité d'emprunt",
    text: "Évaluez le budget de votre projet immobilier selon vos revenus.",
  },
];

export default function OutilsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Outils & Simulateurs"
        title="Préparez vos projets en toute transparence"
        description="Estimez vos frais d'acquisition en quelques secondes. Nos simulateurs vous donnent une première fourchette ; l'étude établit ensuite un décompte précis."
      />

      <section className="container-content py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-navy">
            Simulateur de frais d&apos;acquisition
          </h2>
          <p className="mt-2 max-w-2xl text-ink/70">
            Indiquez le prix et le type de bien pour estimer instantanément les
            frais d&apos;acquisition (« frais de notaire »).
          </p>
        </div>

        <SimulateurFrais />

        {/* À venir */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-navy">Bientôt disponibles</h2>
          <p className="mt-2 text-ink/70">
            D&apos;autres simulateurs et un assistant en ligne seront prochainement
            intégrés à cet espace.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {aVenir.map((o) => (
              <div
                key={o.title}
                className="rounded-xl border border-dashed border-navy/20 bg-cream-dark/50 p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                  À venir
                </span>
                <h3 className="mt-2 font-serif text-xl text-navy">{o.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{o.text}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-sm text-ink/60">
          Une question sur un calcul ?{" "}
          <Link href="/contact" className="font-semibold text-gold">
            Contactez l&apos;étude
          </Link>{" "}
          pour une estimation personnalisée et fiable.
        </p>
      </section>

      <CtaBanner />
    </>
  );
}
