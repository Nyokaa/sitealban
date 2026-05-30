/**
 * Domaines d'expertise de l'étude.
 * Chaque domaine génère automatiquement une page : /expertise/[slug]
 * Pour ajouter / retirer un domaine, modifiez simplement ce tableau.
 */

export type Expertise = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  highlights: string[];
};

export const expertises: Expertise[] = [
  {
    slug: "immobilier",
    title: "Immobilier",
    excerpt:
      "Achat, vente, prêt immobilier, copropriété, VEFA, BRS : nous sécurisons chaque étape de vos projets immobiliers.",
    description:
      "Avant contrat, achat, vente, prêt immobilier, division, lotissement, copropriété, vente en l'état futur d'achèvement (VEFA), vente d'immeuble à rénover (VIR) et opérations en Bail Réel Solidaire (BRS). Nous accompagnons aussi bien les particuliers que les investisseurs institutionnels.",
    highlights: [
      "Sécurisation juridique de chaque transaction",
      "Accompagnement personnalisé du compromis à la signature",
      "Expertise des opérations complexes (VEFA, VIR, BRS)",
    ],
  },
  {
    slug: "famille",
    title: "Famille",
    excerpt:
      "Mariage, PACS, donation, succession, divorce : un accompagnement humain aux moments clés de votre vie.",
    description:
      "Contrat de mariage, PACS, donation entre époux, succession, partage, changement de régime matrimonial, divorce par consentement mutuel. Votre notaire vous conseille et anticipe la transmission de votre patrimoine en intégrant systématiquement l'analyse fiscale.",
    highlights: [
      "Rédaction des contrats de mariage et PACS",
      "Règlement et anticipation des successions",
      "Conseil patrimonial et fiscal sur mesure",
    ],
  },
  {
    slug: "entreprise-et-societe",
    title: "Entreprise et société",
    excerpt:
      "Constitution, cession, baux commerciaux : un partenaire de confiance pour la vie de votre entreprise.",
    description:
      "Constitution de sociétés, cession de parts et de fonds de commerce, baux commerciaux (rédaction, renouvellement, révision), pactes d'associés et transmission d'entreprise. Votre notaire est compétent en droit des affaires aux côtés de vos autres conseils.",
    highlights: [
      "Création et structuration de sociétés",
      "Baux commerciaux et cessions de fonds",
      "Transmission et restructuration d'entreprise",
    ],
  },
  {
    slug: "droit-international",
    title: "Droit international",
    excerpt:
      "Successions internationales, achats à l'étranger, expatriation : nous gérons la dimension transfrontalière de vos dossiers.",
    description:
      "Successions internationales, acquisitions immobilières à l'étranger, régimes matrimoniaux internationaux et fiscalité des non-résidents. Nous coordonnons les intervenants pour sécuriser vos opérations transfrontalières.",
    highlights: [
      "Successions et régimes matrimoniaux internationaux",
      "Conseil aux expatriés et non-résidents",
      "Coordination avec les juridictions étrangères",
    ],
  },
  {
    slug: "gestion-de-patrimoine",
    title: "Gestion de patrimoine",
    excerpt:
      "Analyser, organiser et optimiser votre patrimoine dans une vision globale et durable.",
    description:
      "Audit patrimonial, stratégies de transmission, démembrement de propriété, sociétés civiles immobilières (SCI) et optimisation fiscale. Votre notaire vous accompagne pour analyser, organiser et optimiser votre patrimoine sur le long terme.",
    highlights: [
      "Audit et stratégie patrimoniale globale",
      "Démembrement et SCI",
      "Optimisation de la transmission",
    ],
  },
  {
    slug: "collectivites-et-acteurs-publics",
    title: "Collectivités et acteurs publics",
    excerpt:
      "Accompagnement des collectivités territoriales et acteurs publics dans leurs opérations foncières.",
    description:
      "Acquisitions et cessions du domaine public et privé, baux emphytéotiques, opérations d'aménagement et montages complexes au service des collectivités territoriales et établissements publics.",
    highlights: [
      "Opérations foncières publiques",
      "Baux emphytéotiques et administratifs",
      "Sécurisation des projets d'aménagement",
    ],
  },
  {
    slug: "environnement-et-energies-renouvelables",
    title: "Environnement et énergies renouvelables",
    excerpt:
      "Photovoltaïque, éolien, baux spécifiques : un accompagnement juridique pour la transition énergétique.",
    description:
      "Baux et conventions pour installations photovoltaïques et éoliennes, servitudes, démembrement de droits et sécurisation foncière des projets d'énergies renouvelables.",
    highlights: [
      "Baux pour installations photovoltaïques et éoliennes",
      "Sécurisation foncière des projets verts",
      "Servitudes et conventions spécifiques",
    ],
  },
  {
    slug: "bailleurs-sociaux-et-habitat-participatif",
    title: "Bailleurs sociaux et habitat participatif",
    excerpt:
      "Accompagnement des organismes de logement social et des projets d'habitat participatif.",
    description:
      "Montages dédiés aux bailleurs sociaux, vente HLM, Bail Réel Solidaire (BRS), coopératives et projets d'habitat participatif. Nous structurons des opérations innovantes au service du logement pour tous.",
    highlights: [
      "Opérations de logement social",
      "Bail Réel Solidaire (BRS)",
      "Habitat participatif et coopératif",
    ],
  },
  {
    slug: "banques-et-financement",
    title: "Banques et financement",
    excerpt:
      "Garanties, hypothèques, financements structurés : sécuriser les opérations de crédit.",
    description:
      "Prises de garanties (hypothèque, privilège de prêteur de deniers), cautionnements, financements structurés et opérations de crédit pour les particuliers comme pour les établissements bancaires.",
    highlights: [
      "Garanties hypothécaires et sûretés",
      "Financements structurés",
      "Conseil aux établissements bancaires",
    ],
  },
  {
    slug: "negociation-immobiliere",
    title: "Négociation immobilière",
    excerpt:
      "Vendre ou acheter en toute sérénité grâce au service de négociation de l'étude.",
    description:
      "Estimation, mise en vente, recherche d'acquéreurs et accompagnement complet de la transaction. La négociation notariale réunit sécurité juridique et conseil neutre dans une même main, du premier contact à la signature.",
    highlights: [
      "Estimation et mise en marché",
      "Sécurité juridique de bout en bout",
      "Interlocuteur unique vendeur / acquéreur",
    ],
  },
];

export function getExpertise(slug: string) {
  return expertises.find((e) => e.slug === slug);
}
