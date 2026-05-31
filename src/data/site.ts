/**
 * Configuration centrale de l'étude notariale.
 * ----------------------------------------------------------------------------
 * C'est ICI que vous modifiez les informations principales du site
 * (nom, coordonnées, horaires, réseaux sociaux, slogan...).
 * Toutes les pages lisent ces valeurs : une seule édition suffit.
 */

export const site = {
  name: "AETERNAM NOTAIRES",
  shortName: "Aeternam",
  slogan: "La confiance d'aujourd'hui, la sérénité de demain",
  intro:
    "Notre étude notariale met son expertise au service des particuliers, des entreprises et des institutions. Notre mission : vous offrir un accompagnement juridique clair, humain et rigoureux, à chaque étape de vos démarches.",

  contact: {
    address: "9 Rue de la Paix",
    postalCode: "44000",
    city: "NANTES",
    phone: "02 79 40 02 22",
    phoneHref: "+33279400222",
    email: "remi.guelpa@aeternam.notaires.fr",
  },

  // Horaires d'ouverture (affichés dans le pied de page et la page Contact)
  hours: [
    { day: "Lundi", value: "08h00 – 20h30" },
    { day: "Mardi", value: "08h00 – 20h30" },
    { day: "Mercredi", value: "08h00 – 20h30" },
    { day: "Jeudi", value: "08h00 – 20h30" },
    { day: "Vendredi", value: "08h00 – 20h30" },
    { day: "Samedi", value: "08h00 – 18h00" },
    { day: "Dimanche", value: "Sur rendez-vous uniquement" },
  ],

  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
  },
};

// Navigation principale (ordre = ordre d'affichage dans le menu)
export const navigation = [
  { label: "Accueil", href: "/" },
  { label: "L'étude", href: "/l-etude" },
  { label: "L'équipe", href: "/equipe" },
  { label: "Expertises", href: "/expertise" },
  { label: "Honoraires", href: "/honoraires" },
  { label: "Outils", href: "/outils" },
  { label: "Actualités", href: "/actualites" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];
