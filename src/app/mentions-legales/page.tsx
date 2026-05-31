import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { site } from "@/data/site";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site de l'étude notariale.",
};

export default function MentionsLegalesPage() {
  const directeur = team[0]?.name ?? "—";

  return (
    <>
      <PageHeader eyebrow="Informations" title="Mentions légales" />

      <section className="container-content py-16">
        <div className="prose-notaire max-w-3xl">
          <h2 className="text-xl font-semibold text-navy">Éditeur du site</h2>
          <p>
            {site.name} — Office notarial.
            <br />
            {site.contact.address}, {site.contact.postalCode} {site.contact.city}
            <br />
            Téléphone : {site.contact.phone} — E-mail : {site.contact.email}
          </p>

          <h2 className="mt-8 text-xl font-semibold text-navy">
            Directeur de la publication
          </h2>
          <p>{directeur}, notaire.</p>

          <h2 className="mt-8 text-xl font-semibold text-navy">
            Statut et profession réglementée
          </h2>
          <p>
            Les notaires sont des <strong>officiers publics et ministériels</strong>{" "}
            nommés par le Garde des Sceaux, ministre de la Justice. La profession
            est réglementée et relève du Conseil supérieur du notariat ainsi que
            de la Chambre des notaires territorialement compétente.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-navy">
            Tarifs et émoluments
          </h2>
          <p>
            Les émoluments des notaires sont fixés par l&apos;État selon un barème
            national. Les modalités sont présentées sur la page{" "}
            <Link href="/honoraires" className="font-semibold text-gold">
              Honoraires
            </Link>
            .
          </p>

          <h2 className="mt-8 text-xl font-semibold text-navy">
            Médiateur de la consommation
          </h2>
          <p>
            Conformément au Code de la consommation, en cas de litige, vous pouvez
            recourir gratuitement au médiateur de la consommation compétent pour
            la profession notariale :
          </p>
          <p>
            <strong>Médiateur du notariat</strong>
            <br />
            <span className="text-ink/60">
              [Adresse et coordonnées à compléter / vérifier auprès de la chambre —
              généralement : 60 boulevard de la Tour-Maubourg, 75007 Paris]
            </span>
            <br />
            Site : <span className="text-ink/60">[URL officielle à renseigner]</span>
          </p>

          <h2 className="mt-8 text-xl font-semibold text-navy">Hébergement</h2>
          <p className="text-ink/60">
            [À compléter : nom et coordonnées de l&apos;hébergeur — hébergement
            souverain France / Union européenne.]
          </p>

          <h2 className="mt-8 text-xl font-semibold text-navy">
            Propriété intellectuelle
          </h2>
          <p>
            L&apos;ensemble des contenus de ce site (textes, logos, images) est
            protégé. Le logo « Notaires de France » est reproduit conformément à
            la charte graphique de la profession, sans modification.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-navy">
            Données personnelles
          </h2>
          <p>
            Le traitement de vos données est décrit dans notre{" "}
            <Link
              href="/politique-de-confidentialite"
              className="font-semibold text-gold"
            >
              politique de confidentialité
            </Link>
            .
          </p>

          <p className="mt-8 text-sm text-ink/50">
            Modèle à faire relire, compléter et valider par l&apos;étude et la
            chambre des notaires avant mise en ligne définitive.
          </p>
        </div>
      </section>
    </>
  );
}
