import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaBanner from "@/components/CtaBanner";
import SimulateurFrais from "@/components/SimulateurFrais";
import SimulateurSuccession from "@/components/SimulateurSuccession";
import SimulateurPlusValue from "@/components/SimulateurPlusValue";
import SimulateurCapacite from "@/components/SimulateurCapacite";

export const metadata: Metadata = {
  title: "Outils & Simulateurs",
  description:
    "Simulateurs de frais d'acquisition, de droits de succession, de plus-value immobilière et de capacité d'emprunt pour préparer vos projets.",
};

const outils = [
  { id: "frais", titre: "Frais d'acquisition", desc: "Estimez les « frais de notaire » d'un achat immobilier." },
  { id: "succession", titre: "Droits de succession", desc: "Estimez les droits dus selon le lien de parenté." },
  { id: "plus-value", titre: "Plus-value immobilière", desc: "Calculez l'impôt sur la plus-value lors d'une revente." },
  { id: "capacite", titre: "Capacité d'emprunt", desc: "Évaluez le budget de votre projet immobilier." },
];

export default function OutilsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Outils & Simulateurs"
        title="Préparez vos projets en toute transparence"
        description="Estimez vos frais, droits et capacités en quelques secondes. Nos simulateurs donnent une première fourchette ; l'étude établit ensuite un décompte précis."
      />

      <section className="container-content py-16">
        {/* Sommaire / navigation par ancres */}
        <nav className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {outils.map((o) => (
            <a
              key={o.id}
              href={`#${o.id}`}
              className="group rounded-xl border border-navy/10 bg-white p-4 transition-colors hover:border-gold"
            >
              <span className="font-semibold text-navy group-hover:text-gold">
                {o.titre}
              </span>
              <p className="mt-1 text-xs text-ink/60">{o.desc}</p>
            </a>
          ))}
        </nav>

        <div className="space-y-16">
          <Bloc
            id="frais"
            titre="Simulateur de frais d'acquisition"
            intro="Indiquez le prix et le type de bien pour estimer les frais d'acquisition (« frais de notaire »)."
          >
            <SimulateurFrais />
          </Bloc>

          <Bloc
            id="succession"
            titre="Simulateur de droits de succession"
            intro="Estimez les droits de succession selon le montant reçu et votre lien avec le défunt."
          >
            <SimulateurSuccession />
          </Bloc>

          <Bloc
            id="plus-value"
            titre="Simulateur de plus-value immobilière"
            intro="Estimez l'impôt sur la plus-value lors de la revente d'un bien (hors résidence principale)."
          >
            <SimulateurPlusValue />
          </Bloc>

          <Bloc
            id="capacite"
            titre="Simulateur de capacité d'emprunt"
            intro="Évaluez le montant que vous pouvez emprunter et le budget total de votre projet."
          >
            <SimulateurCapacite />
          </Bloc>
        </div>

        <p className="mt-12 text-sm text-ink/60">
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

function Bloc({
  id,
  titre,
  intro,
  children,
}: {
  id: string;
  titre: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-semibold text-navy">{titre}</h2>
      <p className="mb-6 mt-2 max-w-2xl text-ink/70">{intro}</p>
      {children}
    </div>
  );
}
