# AETERNAM NOTAIRES — Site vitrine

Site vitrine d'une étude notariale, construit avec **Next.js 14** (App Router),
**TypeScript** et **Tailwind CSS**. Architecture pensée pour accueillir
prochainement un **chatbot** et de nouveaux **simulateurs**.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
```

Autres commandes :

```bash
npm run build    # build de production
npm run start    # serveur de production
npm run lint     # vérification ESLint
```

## Où modifier le contenu

Tout le contenu éditorial est centralisé dans `src/data/` — pas besoin de
toucher au code des pages :

| Fichier | Contenu |
|---|---|
| `src/data/site.ts` | Nom, slogan, coordonnées, horaires, réseaux sociaux, **menu de navigation** |
| `src/data/expertises.ts` | Domaines d'expertise (génèrent les pages `/expertise/[slug]`) |
| `src/data/team.ts` | Membres de l'équipe |
| `src/data/faq.ts` | Questions / réponses de la FAQ |
| `src/data/articles.ts` | Actualités (génèrent les pages `/actualites/[slug]`) |

## Structure

```
src/
├── app/                  Pages (App Router)
│   ├── page.tsx          Accueil
│   ├── l-etude/          L'étude
│   ├── equipe/           L'équipe
│   ├── expertise/        Liste + pages par domaine
│   ├── honoraires/       Honoraires
│   ├── outils/           Outils & simulateurs
│   ├── actualites/       Liste + articles
│   ├── faq/              FAQ
│   ├── contact/          Contact + formulaire
│   └── mentions-legales/
├── components/           Header, Footer, simulateur, formulaire, etc.
├── data/                 Contenu éditable (voir tableau ci-dessus)
└── lib/                  Logique métier (calcul des frais d'acquisition)
```

## Simulateur de frais d'acquisition

La logique de calcul se trouve dans `src/lib/fraisAcquisition.ts` (barème des
émoluments réglementés, droits de mutation, CSI, TVA). Les valeurs sont
**indicatives** ; pensez à les vérifier au regard des taux en vigueur.

## Pistes d'évolution

- **Chatbot** : ajouter un composant client + une route API (`src/app/api/...`)
  branchée sur le modèle de votre choix.
- **Nouveaux simulateurs** : succession, plus-value, capacité d'emprunt
  (emplacements déjà prévus sur la page `/outils`).
- **Formulaire de contact** : brancher l'envoi réel dans
  `src/components/ContactForm.tsx` (route API / service e-mail).
- **Images** : déposer les photos dans `public/` et renseigner le champ `photo`
  des membres dans `src/data/team.ts`.

## Notes

Le contenu (textes, coordonnées, équipe) s'appuie sur une trame de démonstration
et doit être **relu et validé par l'étude** avant mise en ligne, notamment les
mentions légales et les barèmes du simulateur.
