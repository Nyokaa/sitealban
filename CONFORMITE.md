# Conformité réglementaire — Site d'office notarial

Référence : **arrêté du 29 janvier 2024 (art. 14.4)**, règlement professionnel du
notariat, charte graphique & plan de nommage du CSN. Document opérationnel — ne
se substitue pas à la validation de la **chambre des notaires** compétente.

> **Principe directeur** : le site relève de la **communication informationnelle**,
> jamais de la publicité ou de la sollicitation commerciale.

## ✅ Conforme (intégré dans le code)

- **Aucune publicité / aucun pixel de campagne / aucune bannière commerciale.**
- **Aucun script analytics ou marketing.** Les polices (next/font) sont
  auto-hébergées au build : aucun appel à Google au runtime.
- **Aucun cookie non essentiel.** La carte d'accès n'est plus intégrée en
  iframe : elle s'ouvre **au clic** dans un nouvel onglet → aucun traceur tiers
  déposé sans action de l'utilisateur (page Contact).
- **Ton informationnel** : suppression des formulations promotionnelles
  (« Pourquoi nous choisir », « 100 % », etc.). Pas de superlatif, de
  comparaison entre offices, d'urgence artificielle ni d'avis clients sollicités.
- **Logo « Notaires de France »** affiché **sans déformation** (proportions
  conservées, non recoloré).
- **Contenus autorisés** : présentation de l'office et des domaines de
  compétence, coordonnées, horaires, plan d'accès, formulaire de contact,
  actualités juridiques, simulateurs (frais, succession, plus-value, emprunt).
- **Formulaire de contact fonctionnel** (envoi par e-mail pré-rempli) avec
  case de consentement non pré-cochée et minimisation des données.
- **Pages légales** : mentions légales (LCEN), politique de confidentialité
  (RGPD), affichage des émoluments (page Honoraires), mention du **médiateur de
  la consommation**.
- **SEO** : seul levier de visibilité utilisé (données structurées, sitemap,
  robots, contenu de qualité). Aucune visibilité achetée.
- **E-mail professionnel** en `@…notaires.fr`.

## ⚠️ À compléter / valider (hors périmètre du code — client & chambre)

- [ ] **Nom de domaine en `.notaires.fr`** (plan de nommage CSN / registre
      Promopixel) — actuellement en préproduction sur GitHub Pages.
      → mettre à jour `site.url` dans `src/data/site.ts`.
- [ ] **Hébergement souverain France/UE** (le code est prêt ; déploiement à
      basculer depuis GitHub Pages vers l'hébergeur notarial).
- [ ] **HTTPS/TLS** + redirection HTTP→HTTPS sur l'hébergeur final.
- [ ] **Mentions légales** : compléter l'hébergeur et le directeur de
      publication ; faire valider.
- [ ] **Médiateur de la consommation** : renseigner les coordonnées exactes.
- [ ] **Bloc-marque officiel** (logo office + « Notaires de France » monochrome)
      à valider selon la **charte graphique du CSN** (proportions, espace de
      protection).
- [ ] **Liens réseaux sociaux** : renseigner les vraies URLs (ou les retirer).
- [ ] **Textes** (présentation, équipe, FAQ, articles) : relecture par l'étude.
- [ ] **Barèmes des simulateurs** : à faire valider (lois de finances).

## 🚦 Point bloquant — agrément préalable

- [ ] **Soumettre le site à la chambre départementale des notaires pour
      agrément AVANT toute mise en ligne** (transmission du lien et des accès).
- [ ] **Ne pas publier en production** tant que l'agrément n'est pas obtenu
      (utiliser un environnement de préproduction protégé pour la revue).

## Check-list de pré-lancement

| Point | Statut |
|---|---|
| Domaine en `.notaires.fr` validé | ⚠️ à faire |
| Bloc-marque « Notaires de France » conforme charte | ⚠️ à valider |
| Aucun script pub / pixel / bannière | ✅ |
| Aucun terme commercial / comparatif / incitatif | ✅ |
| HTTPS partout, hébergement UE, redirections | ⚠️ hébergeur final |
| Mentions légales (LCEN) complètes | ⚠️ à compléter |
| Émoluments affichés + médiateur indiqué | ✅ (médiateur à préciser) |
| Politique de confidentialité RGPD | ✅ |
| Bandeau cookies CNIL | ✅ non requis (aucun traceur non essentiel) |
| Formulaire de contact / prise de RDV testés | ✅ (e-mail) |
| Agrément de la chambre obtenu | ⚠️ **bloquant** |
