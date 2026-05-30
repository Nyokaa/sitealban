/**
 * Équipe de l'étude.
 * Ajoutez autant de membres que nécessaire : chaque entrée crée une carte
 * sur la page /equipe. Le champ `photo` est optionnel (initiales par défaut).
 */

export type Member = {
  name: string;
  role: string;
  email?: string;
  photo?: string; // chemin vers /public, ex: "/team/remi.jpg"
  bio: string[];
};

export const team: Member[] = [
  {
    name: "Rémi Guelpa",
    role: "Notaire associé",
    email: "remi.guelpa@aeternam.notaires.fr",
    bio: [
      "Je suis passionné d'immobilier, dans toutes ses dimensions : le droit, le montage des opérations, mais aussi les aspects très concrets qui donnent vie à chaque projet.",
      "Mon approche repose sur la clarté et la pédagogie : je m'attache à rendre chaque dossier compréhensible afin que vous preniez vos décisions en toute confiance.",
      "Pour moi, un acte notarié n'est pas une simple formalité, mais un moment important d'une vie. C'est dans cet état d'esprit que j'accompagne chacun de mes clients.",
    ],
  },
  // Exemple de membre supplémentaire (décommentez et adaptez) :
  // {
  //   name: "Prénom Nom",
  //   role: "Notaire collaborateur",
  //   email: "prenom.nom@aeternam.notaires.fr",
  //   bio: ["Présentation du collaborateur..."],
  // },
];
