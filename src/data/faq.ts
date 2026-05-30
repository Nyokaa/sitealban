/**
 * Foire aux questions, organisée par catégories.
 * Chaque catégorie s'affiche en section sur la page /faq.
 */

export type FaqCategory = {
  category: string;
  items: { question: string; answer: string }[];
};

export const faq: FaqCategory[] = [
  {
    category: "Compétence du notaire",
    items: [
      {
        question:
          "Mon notaire peut-il recevoir un acte pour un bien immobilier situé loin de son étude ?",
        answer:
          "Un notaire français peut recevoir un acte portant sur un bien situé n'importe où en France, sans limitation géographique.",
      },
      {
        question: "Puis-je changer de notaire en cours de dossier ?",
        answer:
          "Oui, à tout moment. Le nouveau notaire récupérera le dossier et poursuivra la procédure.",
      },
    ],
  },
  {
    category: "Signature et démarches",
    items: [
      {
        question: "Le notaire peut-il faire une signature à distance ?",
        answer:
          "Oui, avec l'acte notarié électronique et la procuration avec comparution à distance, il n'est plus obligatoire de se déplacer.",
      },
      {
        question:
          "Est-ce que le notaire m'aide à obtenir les documents obligatoires ?",
        answer:
          "Oui, le notaire coordonne l'ensemble des intervenants et vérifie la conformité des documents.",
      },
      {
        question: "Combien de temps dure une vente immobilière ?",
        answer:
          "En moyenne 2 à 3 mois, selon l'obtention des documents d'urbanisme et des financements.",
      },
      {
        question:
          "Le notaire peut-il certifier mon identité pour une procuration ?",
        answer:
          "Oui. Votre notaire peut procéder à la certification de signature ou d'identité.",
      },
    ],
  },
  {
    category: "Coûts et rémunération",
    items: [
      {
        question: "Dois-je payer plus cher si j'ai mon propre notaire ?",
        answer:
          "Non. Deux notaires, ce n'est pas plus cher. Les émoluments sont fixes et simplement partagés entre les études.",
      },
    ],
  },
  {
    category: "Prêt immobilier",
    items: [
      {
        question:
          "Un prêt hypothécaire est-il plus cher qu'un prêt avec cautionnement ?",
        answer:
          "Pas nécessairement : les frais hypothécaires sont souvent moins élevés à la signature.",
      },
      {
        question: "Le prêt hypothécaire est-il plus simple ou plus rapide ?",
        answer:
          "Souvent, oui : il offre un traitement rapide, sans risque de refus lié à un organisme tiers.",
      },
    ],
  },
  {
    category: "Famille et patrimoine",
    items: [
      {
        question:
          "Est-ce que mon notaire est compétent pour rédiger mon contrat de mariage ?",
        answer:
          "Oui. Seuls les notaires sont habilités à rédiger les contrats de mariage.",
      },
      {
        question:
          "Le notaire conseille-t-il uniquement sur les actes ou aussi sur la fiscalité ?",
        answer:
          "Votre notaire intègre systématiquement l'analyse fiscale dans son conseil.",
      },
      {
        question: "Un notaire gère-t-il les divorces ?",
        answer:
          "Le notaire peut vous accompagner dans la procédure de divorce par consentement mutuel.",
      },
      {
        question: "Le notaire peut-il m'aider à organiser mon patrimoine ?",
        answer:
          "Oui. Votre notaire peut vous accompagner pour analyser, organiser et optimiser votre patrimoine.",
      },
    ],
  },
  {
    category: "Droit des affaires et sociétés",
    items: [
      {
        question: "Le notaire rédige-t-il aussi des contrats d'entreprise ?",
        answer:
          "Oui, votre notaire est compétent en droit des affaires, en plus du droit de la famille.",
      },
      {
        question: "Le notaire intervient-il dans les baux commerciaux ?",
        answer:
          "Oui : rédaction, renouvellement, calcul des révisions, cession de fonds ou de bail.",
      },
    ],
  },
];
