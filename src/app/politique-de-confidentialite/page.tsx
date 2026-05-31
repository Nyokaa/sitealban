import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles (RGPD) du site de l'étude notariale.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHeader eyebrow="RGPD" title="Politique de confidentialité" />

      <section className="container-content py-16">
        <div className="prose-notaire max-w-3xl">
          <p>
            La présente politique décrit la manière dont {site.name} traite les
            données personnelles collectées via ce site, conformément au
            Règlement Général sur la Protection des Données (RGPD) et à la loi
            « Informatique et Libertés ».
          </p>

          <h2 className="mt-8 text-xl font-semibold text-navy">
            Données collectées
          </h2>
          <p>
            Les données ne sont collectées que lorsque vous nous contactez
            volontairement (formulaire de contact, e-mail, téléphone) : nom,
            prénom, coordonnées et contenu de votre message. Aucune donnée
            n&apos;est collectée à votre insu.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-navy">Finalités</h2>
          <p>
            Ces données sont utilisées uniquement pour répondre à votre demande
            et assurer le suivi de votre dossier. Elles ne sont jamais cédées ni
            vendues à des tiers.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-navy">Durée de conservation</h2>
          <p>
            Les données sont conservées le temps nécessaire au traitement de
            votre demande, puis archivées ou supprimées conformément aux
            obligations légales applicables à la profession notariale.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-navy">Vos droits</h2>
          <p>
            Vous disposez d&apos;un droit d&apos;accès, de rectification,
            d&apos;effacement, de limitation et d&apos;opposition au traitement
            de vos données. Pour l&apos;exercer, contactez l&apos;étude à
            l&apos;adresse{" "}
            <a href={`mailto:${site.contact.email}`} className="font-semibold text-gold">
              {site.contact.email}
            </a>
            . Vous pouvez également saisir la CNIL.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-navy">Cookies</h2>
          <p>
            Ce site ne dépose pas de cookie de suivi publicitaire. Certaines
            fonctionnalités externes (par exemple une carte intégrée) peuvent
            déposer des cookies techniques au moment de leur affichage.
          </p>

          <p className="mt-8 text-sm text-ink/50">
            Modèle à faire relire et compléter par l&apos;étude (coordonnées du
            délégué à la protection des données le cas échéant, hébergeur, etc.)
            avant mise en ligne définitive.
          </p>
        </div>
      </section>
    </>
  );
}
