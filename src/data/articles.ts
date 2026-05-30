/**
 * Actualités / articles du blog.
 * Affichés sur la page d'accueil (3 derniers) et la page /actualites.
 */

export type Article = {
  slug: string;
  title: string;
  date: string; // format AAAA-MM-JJ
  category: string;
  excerpt: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "augmentation-frais-de-notaire",
    title: "Augmentation récente des frais de notaire : êtes-vous concernés ?",
    date: "2025-12-10",
    category: "Immobilier",
    excerpt:
      "Plusieurs départements ont relevé les droits de mutation. Faisons le point sur les acquisitions concernées et l'impact réel sur votre budget.",
    content: [
      "Les « frais de notaire » sont majoritairement composés de taxes reversées à l'État et aux collectivités. Une partie de ces droits, appelés droits de mutation à titre onéreux (DMTO), peut être ajustée par les départements.",
      "Pour vérifier si votre projet est concerné, le mieux reste d'estimer précisément le coût de votre acquisition. Notre simulateur en ligne vous donne une première fourchette en quelques secondes.",
      "Notre étude reste à votre disposition pour un calcul personnalisé tenant compte de votre situation et du bien visé.",
    ],
  },
  {
    slug: "don-manuel-abattement-100000",
    title:
      "Don manuel : un nouvel abattement exceptionnel de 100 000 € pour aider à l'achat",
    date: "2025-12-09",
    category: "Famille & Patrimoine",
    excerpt:
      "Un dispositif temporaire permet de transmettre des sommes destinées à l'acquisition ou la rénovation d'un logement, sous conditions.",
    content: [
      "Un abattement exceptionnel peut s'appliquer aux dons de sommes d'argent consentis dans un cadre familial, lorsque les fonds sont affectés à l'achat d'un logement neuf ou à des travaux de rénovation énergétique.",
      "Ce dispositif est soumis à des conditions précises de délai, de lien de parenté et d'affectation des fonds. Une étude personnalisée est indispensable avant tout versement.",
      "Prenez rendez-vous avec l'étude pour sécuriser votre donation et optimiser sa fiscalité.",
    ],
  },
  {
    slug: "dpe-changement-2026",
    title:
      "DPE : un changement majeur au 1er janvier 2026 qui va revaloriser certains logements",
    date: "2025-12-09",
    category: "Immobilier",
    excerpt:
      "La méthode de calcul du Diagnostic de Performance Énergétique évolue. Certains logements pourraient changer d'étiquette.",
    content: [
      "Le Diagnostic de Performance Énergétique (DPE) évolue afin de mieux refléter la performance réelle des logements, notamment ceux chauffés à l'électricité.",
      "Pour les vendeurs comme pour les acquéreurs, ce changement peut avoir des conséquences concrètes sur la valeur du bien et sur les obligations de location.",
      "L'étude vous accompagne pour anticiper l'impact de cette réforme sur votre projet immobilier.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
