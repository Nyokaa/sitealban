import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site de l'étude notariale.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader eyebrow="Informations" title="Mentions légales" />

      <section className="container-content py-16">
        <div className="prose-notaire max-w-3xl">
          <h2 className="text-xl font-semibold text-navy">Éditeur du site</h2>
          <p>
            {site.name} — {site.contact.address}, {site.contact.postalCode}{" "}
            {site.contact.city}.<br />
            Téléphone : {site.contact.phone} — E-mail : {site.contact.email}
          </p>

          <h2 className="mt-8 text-xl font-semibold text-navy">
            Profession réglementée
          </h2>
          <p>
            Office notarial, profession réglementée relevant du Conseil Supérieur
            du Notariat et de la Chambre des Notaires compétente. Les notaires
            sont des officiers publics nommés par le Garde des Sceaux.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-navy">
            Hébergement
          </h2>
          <p>
            À compléter : nom et coordonnées de l&apos;hébergeur du site.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-navy">
            Données personnelles
          </h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification
            et de suppression des données vous concernant. Pour l&apos;exercer,
            contactez l&apos;étude à l&apos;adresse {site.contact.email}.
          </p>

          <p className="mt-8 text-sm text-ink/50">
            Ce contenu est un modèle à faire valider et compléter par l&apos;étude
            avant mise en ligne.
          </p>
        </div>
      </section>
    </>
  );
}
